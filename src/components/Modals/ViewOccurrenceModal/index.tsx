import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { FiXCircle } from 'react-icons/fi';

import { OccurrenceData } from '../EditOccurrenceStateModal';

import {
  ModalContainer,
  ModalHeader,
  ModalContent,
  UserInfo,
  OccurrenceDetails,
  ModalOverlay,
} from './styles';

import api from '../../../services/api';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface ModalProps {
  isShowingViewModal: boolean;
  hide(): void;
  occurrenceId: number;
}

const ViewOccurrenceModal: React.FC<ModalProps> = ({
  isShowingViewModal,
  hide,
  occurrenceId,
}) => {
  const [occurrence, setOccurrence] = useState<OccurrenceData>(
    {} as OccurrenceData,
  );

  useEffect(() => {
    if (occurrenceId !== 0) {
      api.get(`ocorrencia/${occurrenceId}`).then(response => {
        setOccurrence(response.data[0]);
      });
    }
  }, [occurrenceId]);

  return isShowingViewModal
    ? ReactDOM.createPortal(
        <React.Fragment>
          <ModalContainer>
            <ModalHeader>
              <h2>
                Registo no dia:
                {occurrence.data_ocorrencia &&
                  format(new Date(occurrence.data_ocorrencia), 'dd/MM/yyyy', {
                    locale: ptBR,
                  })}
              </h2>
              <button type="button" onClick={hide}>
                <FiXCircle size={20} color={'#ff9000'} />
              </button>
            </ModalHeader>

            <ModalContent>
              <a href={occurrence.url_fotografia} target="_blank">
                <img
                  src={occurrence.url_fotografia}
                  alt={occurrence.titulo_ocorrencia}
                />
              </a>

              <UserInfo>
                <p>{occurrence.nome_utilizador}</p>
                <p>{occurrence.email_utilizador}</p>
                {occurrence.telemovel_utilizador && (
                  <p>{occurrence.telemovel_utilizador}</p>
                )}
              </UserInfo>

              <OccurrenceDetails>
                <h3>{occurrence.titulo_ocorrencia}</h3>
                <p>{occurrence.descricao_ocorrencia}</p>

                {occurrence.latitude_ocorrencia && (
                  <p>
                    <b>Localização:</b> {occurrence.latitude_ocorrencia} :
                    {occurrence.longitude_ocorrencia}
                  </p>
                )}
                {occurrence.rua_ocorrencia && (
                  <p>
                    <b>Rua:</b> {occurrence.rua_ocorrencia}
                  </p>
                )}
              </OccurrenceDetails>
            </ModalContent>
            {/* <Actions>
              <button type="button" onClick={() => {}}>
                <FiEdit size={20} color={'#ff9000'} />
              </button>
            </Actions> */}
          </ModalContainer>
          <ModalOverlay />
        </React.Fragment>,
        document.body,
      )
    : null;
};

export default ViewOccurrenceModal;
