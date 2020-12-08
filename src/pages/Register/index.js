import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Card, Title, Form, Input, ButtonLogin, Text, Link } from './styles';

const Register = () => {
  const history = useHistory();
  const [form, setForm] = useState({ cpf: '', email: '', password: '', repeatPassword: '' });

  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  };

  const handleOnLogin = () => {
    history.push("/")
  };

  const handleOnRegister = () => {
    console.log(form);
  };

  return (
    <Container>
      <Card elevation={3}>
        <Title>Cadastrar</Title>
        <Form>
          <Input label="CPF" variant="outlined" name="cpf" value={form.cpf} onChange={handleOnChangeInput} />
          <Input label="E-mail" type="email" variant="outlined" name="email" value={form.email} onChange={handleOnChangeInput} />
          <Input label="Senha" type="password" variant="outlined" name="password" value={form.password} onChange={handleOnChangeInput} />
          <Input label="Repetir senha" type="password" variant="outlined" name="repeatPassword" value={form.repeatPassword} onChange={handleOnChangeInput} />
          <ButtonLogin variant="contained" color="primary" onClick={handleOnRegister}>
            Cadastrar
        </ButtonLogin>
        </Form>
        <Text>Ja tem uma conta? <Link onClick={handleOnLogin}>Clique aqui</Link></Text>
      </Card>
    </Container>
  );
}

export default Register;