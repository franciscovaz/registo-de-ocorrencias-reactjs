import React from 'react';

import { Container, Title, TableContainer } from './styles';
import Header from '../../components/Header';

const ListOccurrences: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>Listagem de Ocorrências</Title>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Utilizador</th>
                <th>Comentário</th>
                <th>Estado</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Buraco na rua da mota</td>
                <td>Tomas</td>
                <td>Sem comentários</td>
                <td>Em análise</td>
                <td>29-03-2020</td>
              </tr>

              <tr>
                <td>Passeio sem tampa de esgoto</td>
                <td>Francisco</td>
                <td>Colocada nova tampa</td>
                <td>Terminado</td>
                <td>20-04-2020</td>
              </tr>

              <tr>
                <td>Contentor do lixo deslocado</td>
                <td>Jose</td>
                <td>Sem comentários</td>
                <td>Por tratar</td>
                <td>10-06-2020</td>
              </tr>

              <tr>
                <td>Buraco na rua da sul</td>
                <td>Vaz</td>
                <td>Resolvido</td>
                <td>Terminado</td>
                <td>15-06-2020</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default ListOccurrences;
