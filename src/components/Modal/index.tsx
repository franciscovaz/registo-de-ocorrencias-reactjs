import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from './styles';

interface ModalProps {
  isShowing: boolean;
  hide: boolean;
}

const Modal: React.FC<ModalProps> = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => hide}
                >
                  <span area-hidden="true">&times;</span>
                </button>
              </div>
              <p>Conteudo do modal!</p>
            </div>
          </div>
        </React.Fragment>,
        document.body,
      )
    : null;

export default Modal;
