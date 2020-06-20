import React, { useState, useEffect, useMemo } from 'react';

import { Container, Title, TableContainer } from './styles';
import { FiEdit2 } from 'react-icons/fi';
import Header from '../../components/Header';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { UserId } from '../CreateOccurrence';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface OccurrenceProps {
  id_ocorrencia: string;
  titulo_ocorrencia: string;
  descricao_ocorrencia: string;
  data_ocorrencia: string;
  latitude_ocorrencia: string;
  longitude_ocorrencia: string;
  rua_ocorrencia: string;
  url_fotografia: string;
  nome_utilizador: string;
  email_utilizador: string;
  telemovel_utilizador: string;
  descricao_estado: string;
  comentario_ocorrencia: string;
  data_ultima_atualizacao_ocorrencia: string;
}

const ListOccurrences: React.FC = () => {
  const [occurrences, setOccurrences] = useState<OccurrenceProps[]>([]);

  const { auth } = useAuth();

  useEffect(() => {
    const user = auth as UserId;

    api.get(`ocorrencia-user/${user.id_utilizador}`).then(response => {
      setOccurrences(response.data);
    });
  }, [auth]);

  function handleEditOccurence(id: number) {
    console.log('ID: ', id);
  }

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
                <th>Data de Criação</th>
              </tr>
            </thead>

            <tbody>
              {occurrences.map(occurrence => (
                <tr key={occurrence.id_ocorrencia}>
                  <td>{occurrence.titulo_ocorrencia}</td>
                  <td>{occurrence.nome_utilizador}</td>
                  <td>{occurrence.comentario_ocorrencia}</td>
                  <td>{occurrence.descricao_estado}</td>
                  <td>
                    {format(
                      new Date(occurrence.data_ocorrencia),
                      'dd/MM/yyyy HH:mm:ss',
                      {
                        locale: ptBR,
                      },
                    )}
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() =>
                        handleEditOccurence(Number(occurrence.id_ocorrencia))
                      }
                    >
                      <FiEdit2 color={'#606062'} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default ListOccurrences;
