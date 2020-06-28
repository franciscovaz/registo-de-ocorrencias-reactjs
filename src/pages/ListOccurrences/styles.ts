import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 38px;
  color: var(--text-color-white);
`;

export const TableContainer = styled.section`
  margin-top: 44px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #606062;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }

    button {
      background: transparent;
      border: 0;

      & + button {
        margin-left: 10px;
      }
    }
  }
`;
