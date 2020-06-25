import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FiXCircle } from 'react-icons/fi';
import { ModalContainer, ModalHeader, ModalContent, Actions } from './styles';
import './styles';
import api from '../../services/api';

interface ModalProps {
  isShowing: boolean;
  hide(): void;
  occurrenceId: number;
}

const Modal: React.FC<ModalProps> = ({ isShowing, hide, occurrenceId }) => {
  useEffect(() => {
    if (occurrenceId !== 0) {
      api.get(`ocorrencia/${occurrenceId}`).then(response => {
        console.log('Resposta: ', response.data);
      });
    }
  }, [occurrenceId]);

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <ModalContainer>
            <ModalHeader>
              <h2>Ocorrencia: {occurrenceId}</h2>
              <button type="button" onClick={hide}>
                <FiXCircle />
              </button>
            </ModalHeader>

            <ModalContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus
              non fuga omnis a sed impedit explicabo accusantium nihil
              doloremque consequuntur.
            </ModalContent>
            <Actions>
              <button>Update</button>
            </Actions>
          </ModalContainer>
        </React.Fragment>,
        document.body,
      )
    : null;
};

export default Modal;
