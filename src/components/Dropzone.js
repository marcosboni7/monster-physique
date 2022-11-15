import { useEffect } from "react";
import styled from "styled-components";

const StyledDropzone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  height: 100%;
  width: 100%;
  border-style: dashed;
  border-width: 1px;
  border-color: #dee2e6;
  border-radius: .375rem;
`;

const Dropzone = ({ style, className, mimeTypes, onValidDrop, children }) => {
  const preventDefaut = evt => evt.preventDefault();

  const handleDrop = (evt) => {
    evt.preventDefault();

    const file = evt.dataTransfer.files[0];

    if (mimeTypes.includes(file.type))
      onValidDrop(file);
    else
      console.log('não suportado')
  };

  return (
    <StyledDropzone 
      style={style}
      className={className}
      onDrag={preventDefaut}
      onDragOver={preventDefaut}
      onDrop={handleDrop}
    >
      {
        children ||
        <small>Arraste e solte o seu arquivo aqui</small>
      }
    </StyledDropzone>
  );
};

export default Dropzone;