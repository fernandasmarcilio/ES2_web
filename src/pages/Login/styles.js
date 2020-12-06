import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-primary);
`;

export const Card = styled.div`
  background: var(--color-white);
  width: 40%;
  max-width: 450px;
  min-height: 40%;
  border-radius: 10px;
  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: var(--color-primary);
  font-size: 20px;
`;

export const Form = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled(TextField)`
  && {
    margin: 10px 0;
    width: 100%; 
  }
`;

export const ButtonLogin = styled(Button)`
  && {
    margin: 10px 0;
    width: 100%;
    height: 56px;
  }
`;

export const Text = styled.p`
  color: var(--color-text);
  font-size: 14px;
`;

export const Link = styled.span`
  color: var(--color-primary);
  font-size: 14px;
  cursor: pointer;
`;