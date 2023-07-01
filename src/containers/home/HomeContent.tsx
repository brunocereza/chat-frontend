import { useState } from "react";
import {
  ButtonsGrid,
  Home,
  HomeContent,
  InputsGrid,
  ButtonStyled,
} from "./styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
    <Home>
      <HomeContent>
        <InputsGrid>
          <ButtonStyled
            onChange={handleChangeUsername}
            id="username"
            label="username"
            variant="standard"
          />
          <ButtonStyled
            onChange={handleChangePassworld}
            id="passworld"
            label="password"
            variant="standard"
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
            size="medium"
            style={{
              backgroundColor: "white",
              color: "purple",
            }}
            variant="contained"
            onClick={() => console.log(username, password)}
          >
            Cria conta
          </Button>
        </ButtonsGrid>
      </HomeContent>
    </Home>
  );
}

HomeContant.prototype = {};
