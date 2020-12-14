import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import Menu from '../../components/Menu';

import { Container, Card, Title, Text, ButtonLogin } from './styles';

const GameScore = () => {
  const history = useHistory();
  const location = useLocation();

  const handleOnBack = () => {
    history.push("/home")
  };

  const { userScore, totalAnswner } = location.state;

  return (
    <>
      <Menu />
      <Container>
        <Card>
          <Title>{`Parabéns, você terminou a trilha 01`}</Title>
          <Text>{`Você acertou ${userScore}/${totalAnswner}`}</Text>
          <ButtonLogin variant="contained" color="primary" onClick={handleOnBack}>
            Voltar para o inicio
          </ButtonLogin>
        </Card>
      </Container>
    </>
  );
}

export default GameScore;