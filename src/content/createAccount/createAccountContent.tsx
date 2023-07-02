import { useState } from "react";
import { TextFieldStyled, InputsGrid, Title, AlertContainer } from "./styles";
import { Alert, Button, CircularProgress, Stack } from "@mui/material";
import { ButtonsGrid } from "../home/styles";
import { account } from "@/request/account";
import { contextAlert } from "@/context/alertaccountCreate";
import { useRouter } from "next/router";

export default function CreateAccountContent() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [waitCreate, setWaitCreate] = useState(false);
  const [alertError, setAlertError] = useState(false);

  function handleChangeName(event: React.ChangeEvent<HTMLInputElement>): void {
    setName(event.target.value);
  }

  function handleChangeUsername(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setUsername(event.target.value);
  }

  function handleChangePassword(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setPassword(event.target.value);
  }

  async function createAccount() {
    setWaitCreate(true);
    const createAccount = {
      name,
      username,
      password,
    };
    try {
      await account.create({ ...createAccount }).then(function (response) {
        setTimeout(() => {
          router.push("/");
        }, 1500);
        if (response) {
          setAlertState(true);
        }
      });
    } catch (error) {
      setAlertError(true);
      setTimeout(() => {
        router.push("/");
      }, 1500);
    }
  }
  const { setAlertState, alertState } = contextAlert();
  return (
    <>
      <Title> Criar Conta! </Title>
      <InputsGrid>
        <TextFieldStyled
          onChange={handleChangeName}
          id="name"
          label="nome"
          variant="standard"
          type="text"
        />
        <TextFieldStyled
          onChange={handleChangeUsername}
          id="user"
          label="usuario"
          variant="standard"
          type="text"
        />
        <TextFieldStyled
          onChange={handleChangePassword}
          id="password"
          label="senha"
          variant="standard"
          type="password"
        />
      </InputsGrid>
      <ButtonsGrid>
        {waitCreate ? (
          <CircularProgress color="secondary" />
        ) : (
          <Button
            style={{
              backgroundColor: "rgba(104, 57, 139, 0.8)",
            }}
            size="medium"
            variant="contained"
            onClick={createAccount}
            disabled={!name || !username || !password}
          >
            Criar Conta!
          </Button>
        )}
      </ButtonsGrid>
      {alertState && (
        <Alert severity="success">Conta criada com sucesso!</Alert>
      )}
      {alertError && <Alert severity="error">Erro Ao criar a conta!</Alert>}
    </>
  );
}
