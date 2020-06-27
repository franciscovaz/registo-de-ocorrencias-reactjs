import React, { FormEvent, useState, useEffect, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { FormContainer, Field } from './styles';

import Header from '../../components/Header';

import { Map, TileLayer, Marker } from 'react-leaflet';
import { useToast } from '../../hooks/toast';

import Dropzone from '../../components/Dropzone';
import { LeafletMouseEvent } from 'leaflet';

import * as firebase from 'firebase';
import config from '../../services/firebase-config';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

firebase.initializeApp(config);

export interface UserId {
  id_utilizador: number;
  fk_tipo_utilizador: number;
}

const CreateOccurence: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  const [inputTitle, setInputTitle] = useState('');
  const [textareaDescription, setTextareaDescription] = useState('');

  const { addToast } = useToast();
  const { auth } = useAuth();

  const history = useHistory();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location => {
      const { latitude, longitude } = location.coords;

      setInitialPosition([latitude, longitude]);
      setSelectedPosition([latitude, longitude]);
    });
  }, []);

  function handleMapClick(e: LeafletMouseEvent) {
    setSelectedPosition([e.latlng.lat, e.latlng.lng]);
  }

  function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputTitle(e.target.value);
  }

  function handleTextareaChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setTextareaDescription(e.target.value);
  }

  async function handleSubmitForm(e: FormEvent) {
    e.preventDefault();

    if (inputTitle && textareaDescription && selectedPosition && selectedFile) {
      const storage = firebase.storage();

      const uploadTask = storage
        .ref(`images/${selectedFile.name}`)
        .put(selectedFile);

      uploadTask.on(
        'state_changed',
        snapshot => {
          // progress function
        },
        error => {
          // error function
          console.log(error);
        },
        () => {
          // complete function
          storage
            .ref('images')
            .child(selectedFile.name)
            .getDownloadURL()
            .then(async url => {
              const photoIdOnDB = await api.post('fotografia', {
                url_fotografia: url,
              });

              const userId = auth as UserId;

              await api.post('ocorrencia', {
                titulo_ocorrencia: inputTitle,
                descricao_ocorrencia: textareaDescription,
                data_ocorrencia: new Date(),
                latitude_ocorrencia: initialPosition[0],
                longitude_ocorrencia: initialPosition[1],
                fk_fotografia: photoIdOnDB.data,
                fk_freguesia: 1,
                fk_distrito: 1,
                fk_estado: 1,
                fk_utilizador: userId.id_utilizador,
              });

              history.push('list-occurrences');
            });

          addToast({
            type: 'success',
            title: 'Ocorrência registada com sucesso',
            description: 'A sua ocorrência foi registada com sucesso!',
          });
        },
      );
    } else {
      addToast({
        type: 'error',
        title: 'Campos em falta',
        description:
          'É necessário preencher todos os campos e selecionar uma imagem',
      });
    }
  }

  return (
    <>
      <Header page="register" />
      <FormContainer>
        <form onSubmit={handleSubmitForm}>
          <h1>
            Registe uma <br /> Ocorrência
          </h1>

          <fieldset>
            <legend>
              <h2>Dados</h2>
              <span>Preencha os dados da ocorrência</span>
            </legend>

            <Field>
              <label htmlFor="title">Título</label>
              <input
                type="text"
                name="title"
                id="title"
                onChange={handleTitleChange}
              />
            </Field>

            <Field>
              <label htmlFor="description">Descrição</label>
              <textarea
                rows={7}
                name="description"
                id="description"
                onChange={handleTextareaChange}
              />
            </Field>
          </fieldset>

          <fieldset>
            <legend>
              <h2>Endereço</h2>
              <span>Selecione o endereço no mapa</span>
            </legend>

            <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker position={selectedPosition} />
            </Map>
          </fieldset>

          <fieldset>
            <legend>
              <h2>Fotografia</h2>
              <span>Selecione uma fotografia da ocorrência</span>
            </legend>

            <Dropzone onFileUploaded={setSelectedFile} />
          </fieldset>

          <button type="submit">Registar ocorrência</button>
        </form>
      </FormContainer>
    </>
  );
};

export default CreateOccurence;
