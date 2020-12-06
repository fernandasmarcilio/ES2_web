import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Card, Title, Form, Input, ButtonLogin, Text, Link } from './styles';

function Register() {
  const history = useHistory();

  const handleOnLogin = () => {
    history.push("/")
  };

  const handleOnRegister = () => {
    //history.push("/projects")
  };

  return (
    <Container>
      <Card>
        <Title>Cadastrar</Title>
        <Form>
          <Input label="CPF" variant="outlined" />
          <Input label="E-mail" variant="outlined" />
          <Input label="Senha" variant="outlined" />
          <Input label="Repetir senha" variant="outlined" />
          <ButtonLogin variant="contained" color="primary" onClick={handleOnRegister}>
            Entrar
        </ButtonLogin>
        </Form>
        <Text>Ja tem uma conta? <Link onClick={handleOnLogin}>Clique aqui</Link></Text>
      </Card>
    </Container>
  );
}

export default Register;