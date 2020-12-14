import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import UserContext from '../../context/UserContext';

import UserService from '../../services/UserService';
import { Container, Card, Title, Form, Input, ButtonLogin, Text, Link } from './styles';

const Login = () => {
  const { signed, login } = useContext(UserContext);
  console.log(signed);
  const history = useHistory();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  };


  const handleOnRegister = () => {
    history.push("/register")
  };

  const handleOnSubmit = () => {
    login(form, ()=>{
      history.push("/home");
    });
  };

  return (
    <Container>
      <Card elevation={3}>
        <Title>Entrar</Title>
        <Form>
          <Input label="Email" variant="outlined" name="email" value={form.email} onChange={handleOnChangeInput} />
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