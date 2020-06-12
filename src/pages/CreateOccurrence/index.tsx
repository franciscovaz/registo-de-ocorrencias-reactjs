import React, { FormEvent } from 'react';
import { Form } from '@unform/web';

import { FormContainer, Field } from './styles';

import Header from '../../components/Header';

import { Map, TileLayer, Marker } from 'react-leaflet';

const CreateOccurence: React.FC = () => {
  async function handleSubmitForm(e: FormEvent) {
    e.preventDefault();
    console.log('Submit!');
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

            <Map center={[40.6009948, -8.6930693]} zoom={15}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker position={[40.6009948, -8.6930693]} />
            </Map>
          </fieldset>

          <button type="submit">Registar ocorrência</button>
        </Form>
      </FormContainer>
    </>
  );
};

export default CreateOccurence;
