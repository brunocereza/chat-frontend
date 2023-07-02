import Button from "@mui/material/Button";
import { useState } from "react";
import { TextFieldStyled, ButtonsGrid, InputsGrid, Title } from "./styles";

export default function HomeContant() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeUsername(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handleChangePassworld(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <>
      <Title> Bem-Vindo! </Title>
      <InputsGrid>
        <TextFieldStyled
          onChange={handleChangeUsername}
          id="username"
          label="usuário"
          variant="standard"
        />
        <TextFieldStyled
          onChange={handleChangePassworld}
          id="password"
          label="senha"
          variant="standard"
          type="password"
        />
      </InputsGrid>
      <ButtonsGrid>
        <Button
          style={{
            backgroundColor: "rgba(104, 57, 139, 0.8)",
          }}
          size="medium"
          variant="contained"
          onClick={() => console.log(username, password)}
        >
          Login
        </Button>
        <Button
          href="account/create"
          size="medium"
          style={{
            backgroundColor: "white",
            color: "purple",
          }}
          variant="contained"
          onClick={() => console.log(username, password)}
        >
          Crie sua conta!
        </Button>
      </ButtonsGrid>
    </>
  );
}
