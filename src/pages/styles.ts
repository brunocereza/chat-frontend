import TextField from "@mui/material/TextField";
import styled from "styled-components";
// import TextField from "@mui/material/TextField";

export const Home = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 100vh;
  position: fixed;
  background-image: linear-gradient(
    160deg,
    rgba(213, 201, 254, 0.5),
    rgba(150, 117, 254, 0.8)
  );
`;

export const HomeContent = styled.div`
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  width: 60rem;
  height: 30rem;
  background-color: rgba(150, 117, 254, 0.1);
  border-radius: 10px;
  @media (max-width: 960px) {
    width: 95%;
    overflow: scroll;
  }
  @media (max-height: 500px) {
    height: 90%;
    overflow: scroll;
  }
`;

// import TextField from "@mui/material/TextField";

export const TextFieldStyled = styled(TextField)`
  margin-top: 1rem;
  :focus {
    color: red;
    background-color: green;
  }
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

export const InputsGrid = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ButtonsGrid = styled.div`
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
