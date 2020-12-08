import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, ButtonMenu } from './styles';

import { AppBar, Button } from "@material-ui/core";

const Menu = () => {
  const history = useHistory();

  return (
    <AppBar position="static">
      <Container>
        <div>
          <ButtonMenu color="inherit" onClick={() => history.push("/home")}>Inicio</ButtonMenu>
          <ButtonMenu color="inherit" onClick={() => history.push("/creategame")} > Novo jogo</ButtonMenu>
          <ButtonMenu color="inherit" onClick={() => history.push("/createquestion")} > Criar perguntas</ButtonMenu>
        </div>
        <Button color="inherit" onClick={() => history.push("/login")} > Sair</Button>
      </Container>
    </AppBar>
  );
}

export default Menu;