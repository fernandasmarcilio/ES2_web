import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserService from '../../services/UserService';
import { Container, Card, Title, Form, Input, ButtonLogin, Text, Link } from './styles';

const Login = () => {
  const history = useHistory();
  const [form, setForm] = useState({ cpf: '', password: '' });

  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  };


  const handleOnRegister = () => {
    history.push("/register")
  };

  const handleOnSubmit = () => {
    console.log(form);
    history.push("/home")
  };
  console.log(UserService);
  UserService.login();
  console.log(UserService);
  return (
    <Container>
      <Card elevation={3}>
        <Title>Entrar</Title>
        <Form>
          <Input label="CPF" variant="outlined" name="cpf" value={form.cpf} onChange={handleOnChangeInput} />
          <Input label="Senha" type="password" variant="outlined" name="password" value={form.password} onChange={handleOnChangeInput} />
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