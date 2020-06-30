import React from 'react';
import ReactDOM from 'react-dom';

import { FiXCircle } from 'react-icons/fi';

import {
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalOverlay,
} from './styles';

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
  return isShowingViewModal
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
              <h3>Mostrar info</h3>
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
