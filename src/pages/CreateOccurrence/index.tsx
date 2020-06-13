import React, { FormEvent, useState, useEffect, ChangeEvent } from 'react';

import { FormContainer, Field } from './styles';

import Header from '../../components/Header';

import { Map, TileLayer, Marker } from 'react-leaflet';
import { useToast } from '../../hooks/toast';

import Dropzone from '../../components/Dropzone';
import { LeafletMouseEvent } from 'leaflet';

interface OccurrenceRegisterData {
  titulo_ocorrencia: string;
  descricao_ocorrencia: string;
  data_ocorrencia: string;
  latitude_ocorrencia: number;
  longitude_ocorrencia: number;
  rua_ocorrencia?: string;
  fk_fotografia: number;
  fk_freguesia: number;
  fk_estado: number;
  fk_utilizador: number;
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
    console.log('Input: ', inputTitle);
    console.log('Textarea: ', textareaDescription);
    console.log('Posição: ', selectedPosition);
    console.log('File: ', selectedFile);

    if (inputTitle && textareaDescription && selectedPosition && selectedFile) {
      console.log('Esta tudo preenchido');
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
      <Header />
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
                rows={10}
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
