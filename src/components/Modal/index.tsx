import React, { useEffect, useState, useCallback, ChangeEvent } from 'react';
import ReactDOM from 'react-dom';
import { FiXCircle, FiEdit } from 'react-icons/fi';
import {
  ModalContainer,
  ModalHeader,
  ModalContent,
  Textarea,
  Actions,
  ModalOverlay,
} from './styles';
import './styles';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

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
  const [selectedValue, setSelectedValue] = useState('');
  const [occurrenceComment, setOccurrenceComment] = useState('');
  const [hasErrorComment, setHasErrorComment] = useState(false);

  const { addToast } = useToast();

  useEffect(() => {
    if (occurrenceId !== 0) {
      api.get(`ocorrencia/${occurrenceId}`).then(response => {
        setOccurrence(response.data[0]);
        setSelectedValue(occurrence.descricao_estado);
      });
    }
  }, [occurrenceId, occurrence.descricao_estado]);

  const handleEditOccurrence = useCallback(async () => {
    if (!occurrenceComment) {
      setHasErrorComment(true);
    } else {
      const response = await api.put(`ocorrencia-update/${occurrenceId}`, {
        comentario_ocorrencia: occurrenceComment,
        fk_estado: Number(selectedValue),
        data_ultima_atualizacao_ocorrencia: new Date().toISOString(),
      });

      hide();
      addToast({
        type: 'success',
        title: 'Ocurrência editada com sucesso',
        description: response.data,
      });
      setHasErrorComment(false);
    }
  }, [occurrenceComment, hide, addToast, occurrenceId, selectedValue]);

  const handleChangeProgressState = useCallback(event => {
    setSelectedValue(event.target.value);
  }, []);

  const handleCommentChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setOccurrenceComment(e.target.value);
    },
    [],
  );

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <ModalContainer>
            <ModalHeader>
              <h2>Atualizaçāo do estado da ocorrência</h2>
              <button type="button" onClick={hide}>
                <FiXCircle size={20} color={'#ff9000'} />
              </button>
            </ModalHeader>

            <ModalContent>
              <h3>{occurrence.titulo_ocorrencia}</h3>

              <h4>Estado atual: {occurrence.descricao_estado}</h4>
              <p>
                <b>Novo estado:</b>
                <select
                  name="newState"
                  id="newState"
                  value={selectedValue}
                  onChange={handleChangeProgressState}
                >
                  <option value="1">Por Tratar</option>
                  <option value="2">Em análise</option>
                  <option value="3">Em progresso</option>
                  <option value="4">Finalizado</option>
                  <option value="5">Cancelado</option>
                </select>
              </p>

              <p>
                <b>Comentário:</b>
              </p>
              <Textarea
                rows={7}
                name="comment"
                id="comment"
                onChange={handleCommentChange}
                hasError={hasErrorComment}
              />
              {hasErrorComment && (
                <p style={{ color: 'red' }}>Insira um comentário</p>
              )}
            </ModalContent>
            <Actions>
              <button type="button" onClick={handleEditOccurrence}>
                <FiEdit size={20} color={'#ff9000'} />
              </button>
            </Actions>
          </ModalContainer>
          <ModalOverlay />
        </React.Fragment>,
        document.body,
      )
    : null;
};

export default Modal;
