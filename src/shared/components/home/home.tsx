import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import { ButtonsGrid, InputsGrid, TextFieldStyled, Title } from "./styles";

import { AuthContext } from "@/context/auth";

export default function HomeContant() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  function handleChangeUsername(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handleChangePassworld(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function handleLogin() {
    try {
      await login({ username, password });
    } catch (err) {
      console.log(err, "erro de login");
    }
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
          onClick={handleLogin}
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
        >
          Crie sua conta!
        </Button>
      </ButtonsGrid>
    </>
  );
}
