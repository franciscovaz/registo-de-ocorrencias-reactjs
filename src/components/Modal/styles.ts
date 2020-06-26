import styled from 'styled-components';

export const ModalContainer = styled.div`
  /* width: 550px;
  min-width: 500px;
  background: white;
  border: 1px solid #ccc;
  box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
  border-radius: 8px; */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: 100%;

  /* height: 400px;
  max-height: 100%; */

  border-radius: 8px;

  z-index: 1010;

  background: #fff;
  box-shadow: -2rem 2rem 2rem rgba(black, 0.9);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid var(--primary-color);

  h2 {
    padding: 1rem;
    margin: 0;
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

  h3 {
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    margin-top: 8px;
  }

  select {
    margin-left: 5px;
    border-radius: 4px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--primary-color);

  padding: 0.5rem 1rem;

  button {
    border: 0;
    background: transparent;
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
