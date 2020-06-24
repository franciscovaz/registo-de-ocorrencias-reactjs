import React from 'react';
import ReactDOM from 'react-dom';
import { ModalContainer, ModalHeader, ModalContent, Actions } from './styles';
import './styles';

interface ModalProps {
  isShowing: boolean;
  hide(): void;
}

const Modal: React.FC<ModalProps> = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <ModalContainer>
            <ModalHeader>
              <h2>Modal Window</h2>
              <button type="button" onClick={hide}>
                x
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

export default Modal;
