import { useState } from "react";
import styled from "styled-components";

const NuevoVideo = () => {
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    imagen: "",
    video: "",
    descripcion: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGuardar = async (e) => {
    e.preventDefault();

    const { titulo, categoria, imagen, video, descripcion } = formData;
    if (!titulo || !categoria || !imagen || !video || !descripcion) {
      alert("Por favor, complete todos los campos antes de guardar.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Video guardado con éxito.");
        setFormData({
          titulo: "",
          categoria: "",
          imagen: "",
          video: "",
          descripcion: "",
        });
      } else {
        alert("Error al guardar el video.");
      }
    } catch (error) {
      console.error("Error al guardar el video:", error);
      alert("Hubo un problema al guardar el video.");
    }
  };

  const handleLimpiar = (e) => {
    e.preventDefault();
    setFormData({
      titulo: "",
      categoria: "",
      imagen: "",
      video: "",
      descripcion: "",
    });
  };

  return (
    <>
      <Main>
        <Container>
          <Title>Crear nuevo video</Title>
          <Subtitle>
            Completa toda la información necesaria para agregar un video nuevo
          </Subtitle>
          <Form>
            <SectionTitle>Agregar informacion solicitada:</SectionTitle>
            <FormRow>
              <FormGroup>
                <Label htmlFor="titulo">Título</Label>
                <Input
                  id="titulo"
                  name="titulo"
                  value={formData.titulo}
                  onChange={handleInputChange}
                  placeholder="Titulo del video"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="Selecciona una categoría">Categoría</Label>
                <Select
                  id="categoria"
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Selecciona una categoría
                  </option>
                  <option value="FRONT END">FRONT END</option>
                  <option value="BACK END">BACK END</option>
                  <option value="INNOVACIÓN Y GESTIÓN">
                    INNOVACIÓN Y GESTIÓN
                  </option>
                </Select>
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup>
                <Label htmlFor="imagen">Imagen</Label>
                <Input
                  id="imagen"
                  name="imagen"
                  value={formData.imagen}
                  onChange={handleInputChange}
                  placeholder="Agregar URL de imagen"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="video">Video</Label>
                <Input
                  id="video"
                  name="video"
                  value={formData.video}
                  onChange={handleInputChange}
                  placeholder="Agregar URL del video"
                />
              </FormGroup>
            </FormRow>
            <FormGroup>
              <Label htmlFor="descripcion">Descripción</Label>
              <Textarea
                id="descripcion"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleInputChange}
                placeholder="Escribe acerca del video"
              />
            </FormGroup>
            <ButtonGroup>
              <SubmitButton onClick={handleGuardar}>GUARDAR</SubmitButton>
              <ClearButton onClick={handleLimpiar}>LIMPIAR</ClearButton>
            </ButtonGroup>
          </Form>
        </Container>
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  background-color: #191919;
  padding: 20px;
`;

const Title = styled.h1`
  color: #e6dfdf;
  font-size: 3.75rem;
  text-align: center;
`;

const Subtitle = styled.p`
  color: #e6dfdf;
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionTitle = styled.h2`
  color: #e6dfdf;
  font-size: 2.25rem;
  border-top: 2px solid rgba(165, 165, 165, 0.1);
  border-bottom: 2px solid rgba(165, 165, 165, 0.1);
`;

const FormRow = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  color: #e6dfdf;
  font-size: 1.25rem;
  margin-bottom: 10px;
`;

const Input = styled.input`
  background: transparent;
  color: #e6dfdf;
  border: 2px solid #444;
  border-radius: 5px;
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 30px;

  &:focus {
    border-color: #1e90ff;
    outline: none;
  }

  &::placeholder {
    color: #a5a5a5;
  }
`;

const Select = styled.select`
  background: transparent;
  color: #a5a5a5;
  border: 2px solid #444;
  border-radius: 5px;
  padding: 10px;
  font-size: 1rem;

  &:focus {
    border-color: #2e81d3;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  background: transparent;
  color: #fff;
  border: 2px solid #444;
  border-radius: 15px;
  padding: 10px;
  font-size: 1rem;
  resize: none;
  max-width: 50%;
  height: 200px;
  margin-bottom: 20px;

  &:focus {
    border-color: #1e90ff;
    outline: none;
  }

  &::placeholder {
    color: #a5a5a5;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  max-width: 50%;
`;

const SubmitButton = styled.button`
  width: 150px;
  height: 60px;
  border: 3px solid #2a2828;
  color:#e6dfdf;
  border-radius: 45px;
  transition: all 0.3s;
  cursor: pointer;
  background: #242323;
  font-size: 1.2em;
  font-weight: 550;
  &:hover {
    background: #d4984e;
    color: white;
    font-size: 1.5em;
  }
`;

const ClearButton = styled.button`
  background: transparent;
  width: 150px;
  height: 60px;
  border-radius: 45px;
  transition: all 0.3s;
  cursor: pointer;
  background: white;
  font-size: 1.2em;
  font-weight: 550;

  &:hover {
    background: #315cfd;
    color: white;
    font-size: 1.5em;
  }
`;

export default NuevoVideo;