import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { FiXCircle, FiEdit } from 'react-icons/fi';
import { ModalContainer, ModalHeader, ModalContent, Actions } from './styles';
import './styles';
import api from '../../services/api';

interface ModalProps {
  isShowing: boolean;
  hide(): void;
  occurrenceId: number;
}

interface OccurrenceData {
  id_ocorrencia: number;
  titulo_ocorrencia: string;
  descricao_ocorrencia: string;
  data_ocorrencia: string;
  latitude_ocorrencia: string;
  longitude_ocorrencia: string;
  rua_ocorrencia?: string;
  url_fotografia?: string;
  nome_utilizador: string;
  email_utilizador: string;
  telemovel_utilizador?: string;
  descricao_estado: string;
  comentario_ocorrencia?: string;
  data_ultima_atualizacao_ocorrencia?: string;
}

const Modal: React.FC<ModalProps> = ({ isShowing, hide, occurrenceId }) => {
  const [occurrence, setOccurrence] = useState<OccurrenceData>(
    {} as OccurrenceData,
  );
  useEffect(() => {
    if (occurrenceId !== 0) {
      api.get(`ocorrencia/${occurrenceId}`).then(response => {
        console.log('Resposta: ', response.data[0]);
        setOccurrence(response.data[0]);
      });
    }
  }, [occurrenceId]);

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <ModalContainer>
            <ModalHeader>
              <h2>Atualizaçāo do estado da ocorrência</h2>
              <button type="button" onClick={hide}>
                <FiXCircle />
              </button>
            </ModalHeader>

            <ModalContent>
              <h3>{occurrence.titulo_ocorrencia}</h3>
              <p>Estado atual: {occurrence.descricao_estado}</p>
            </ModalContent>
            <Actions>
              <button>
                <FiEdit size={20} />
              </button>
            </Actions>
          </ModalContainer>
        </React.Fragment>,
        document.body,
      )
    : null;
};

export default Modal;
