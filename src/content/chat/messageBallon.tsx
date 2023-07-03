import { AuthContext } from "@/context/auth";
import { Button } from "@mui/material";
import Router from "next/router";
import { parseCookies } from "nookies";
import { useContext, useEffect, useRef, useState } from "react";
import {
  ChatContainer,
  MessageContainer,
  Title,
  MessageBallon,
} from "./styles";
import io from "socket.io-client";

export default function ChatLobbyContent(message: string, author: boolean) {
  return (
    <>
      <MessageBallon> {}</MessageBallon>
    </>
  );
}
