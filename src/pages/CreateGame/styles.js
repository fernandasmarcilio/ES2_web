import styled from "styled-components";
import { Paper, TextField, Button } from "@material-ui/core";

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-white);
`;

export const Card = styled(Paper)`
  background: var(--color-white);
  width: 60%;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
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
    height: 56px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
`;