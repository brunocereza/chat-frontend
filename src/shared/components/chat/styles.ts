import TextField from "@mui/material/TextField";
import styled from "styled-components";
// import TextField from "@mui/material/TextField";

export const TextFieldStyled = styled(TextField)`
  margin-top: 1rem;
  :focus {
    color: red;
    background-color: green;
  }
`;

export const InputsGrid = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: rgba(104, 57, 139, 1);
  font-size: 30px;
  font-weight: 500;
  border-bottom: 1px solid rgba(104, 57, 139, 0.5);
`;
export const AlertContainer = styled.div`
  background-color: black;
  width: 100%;
`;
export const ButtonsGrid = styled.div`
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
