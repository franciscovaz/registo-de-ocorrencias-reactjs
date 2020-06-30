import React, { useState, useEffect, useContext } from 'react';

import { Container, Title, TableContainer, OperationsCollumn } from './styles';
import { FiEdit2, FiEye } from 'react-icons/fi';
import Header from '../../components/Header';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { UserId } from '../CreateOccurrence';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useModal } from '../../hooks/modal';
import Modal from '../../components/Modal';
import { ThemeContext } from 'styled-components';

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
  const [selectedOccurrence, setSelectedOccurrence] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);

  const { auth } = useAuth();
  const { isShowing, toggle } = useModal();

  const { colors } = useContext(ThemeContext);

  useEffect(() => {
    const user = auth as UserId;

    if (user.fk_tipo_utilizador === 2) {
      api.get('ocorrencias').then(response => {
        setOccurrences(response.data);
        setIsAdmin(true);
      });
    } else {
      api.get(`ocorrencia-user/${user.id_utilizador}`).then(response => {
        setOccurrences(response.data);
      });
    }
  }, [auth, isShowing]);

  function handleChangeOccurence(id: number) {
    setSelectedOccurrence(id);
  }

  function handleViewOccurrenceModal(id: number) {
    console.log('Occurrence ID: ', id);
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
                    <OperationsCollumn>
                      <button
                        type="button"
                        onClick={() => {
                          handleViewOccurrenceModal(
                            Number(occurrence.id_ocorrencia),
                          );
                        }}
                      >
                        <FiEye color={colors.whiteGrey} />
                      </button>
                      {isAdmin && (
                        <button
                          type="button"
                          onClick={() => {
                            toggle();
                            handleChangeOccurence(
                              Number(occurrence.id_ocorrencia),
                            );
                          }}
                        >
                          <FiEdit2 color={colors.whiteGrey} />
                        </button>
                      )}
                    </OperationsCollumn>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        occurrenceId={selectedOccurrence}
      />
    </>
  );
};

export default ListOccurrences;
