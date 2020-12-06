import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Card, Title, Form, Input, ButtonLogin, Text, Link } from './styles';

function Login() {
  const history = useHistory();

  const handleOnRegister = () => {
    history.push("/register")
  };

  const handleOnSubmit = () => {
    //history.push("/projects")
  };

  return (
    <Container>
      <Card>
        <Title>Entrar</Title>
        <Form>
          <Input label="CPF" variant="outlined" />
          <Input label="Senha" variant="outlined" />
          <ButtonLogin variant="contained" color="primary" onClick={handleOnSubmit}>
            Entrar
          </ButtonLogin>
        </Form>
        <Text>Não tem conta? <Link onClick={handleOnRegister}>Clique aqui</Link></Text>
      </Card>
    </Container>
  )
}

export default Login;