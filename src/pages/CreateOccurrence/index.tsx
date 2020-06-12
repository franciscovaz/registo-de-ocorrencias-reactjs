import React, { FormEvent, useState, useEffect } from 'react';
import { Form } from '@unform/web';

import { FormContainer, Field } from './styles';

import Header from '../../components/Header';

import { Map, TileLayer, Marker } from 'react-leaflet';

import Dropzone from '../../components/Dropzone';
import { LeafletMouseEvent } from 'leaflet';

interface OccurrenceRegisterData {
  title: string;
  description: string;
  latitude: number;
  longitude: number;
  photo: File;
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

  async function handleSubmitForm(data: object) {
    console.log('Submit: ', data);
  }

  return (
    <>
      <Header />
      <FormContainer>
        <Form onSubmit={handleSubmitForm}>
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
              <input type="text" name="title" id="title" />
            </Field>

            <Field>
              <label htmlFor="description">Descrição</label>
              <textarea rows={10} name="description" id="description" />
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
        </Form>
      </FormContainer>
    </>
  );
};

export default CreateOccurence;
