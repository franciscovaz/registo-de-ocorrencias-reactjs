import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { ContainerDropZone } from './styles';
import { FiUpload } from 'react-icons/fi';

interface Props {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(
    acceptedFiles => {
      const file = acceptedFiles[0];

      const fileUrl = URL.createObjectURL(file);

      setSelectedFileUrl(fileUrl);
      onFileUploaded(file);
    },
    [onFileUploaded],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  return (
    <ContainerDropZone {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Imagem da ocorrência" />
      ) : (
        <p>
          <FiUpload />
          Imagem da ocorrência
        </p>
      )}
    </ContainerDropZone>
  );
};

export default Dropzone;
