import styled from 'styled-components';

export const ContainerDropZone = styled.div`
  height: 300px;
  background: #f2e8d5;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border-radius: 10px;
    border: 1px dashed var(--primary-color);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #333;

    svg {
      color: var(--primary-color);
      width: 24px;
      height: 24px;
      margin-bottom: 8px;
    }
  }
`;
