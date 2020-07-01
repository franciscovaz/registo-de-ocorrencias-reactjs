import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: 100%;

  border-radius: 8px;

  z-index: 1010;

  background: ${props => props.theme.colors.registerCardBackground};
  box-shadow: -2rem 2rem 2rem rgba(black, 0.9);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid var(--primary-color);

  h2 {
    padding: 1rem;
    margin: 0;
    color: ${props => props.theme.colors.whiteGrey};
  }

  button {
    border: 0;
    background: transparent;
    margin-right: 24px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  img {
    width: 550px;
    height: 350px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 16px;
`;

export const OccurrenceDetails = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 16px;

  h3 {
    margin-bottom: 8px;
    text-align: center;
  }
`;

export const ModalOverlay = styled.div`
  z-index: 1000;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.8);
`;
