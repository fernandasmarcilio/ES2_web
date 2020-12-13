import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Menu from '../../components/Menu';

import { RadioGroup, Radio, FormControlLabel, Stepper, Step, StepLabel } from '@material-ui/core';
import { Container, Card, Title, GameContainer, QuestionText, ButtonLogin, AnswerContainer } from './styles';

const alternatives = [
  { id: 'a', title: 'Alternativa A' },
  { id: 'b', title: 'Alternativa B' },
  { id: 'c', title: 'Alternativa C' },
  { id: 'd', title: 'Alternativa D' },
]

const phases = [
  { id: 0, question: 'O que é um requisito funcional?', alternatives, correctAnswer: 'a' },
  { id: 1, question: 'O que é um requisito funcional?', alternatives, correctAnswer: 'b' },
  { id: 2, question: 'O que é um requisito funcional?', alternatives, correctAnswer: 'c' },
  { id: 3, question: 'O que é um requisito funcional?', alternatives, correctAnswer: 'd' },
  { id: 4, question: 'O que é um requisito funcional?', alternatives, correctAnswer: 'a' },
]

const data = { name: 'Trilha 1', phases };

const TriviaGame = () => {
  const history = useHistory();

  const [gameData, setGameData] = useState(data);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState('');
  const [allUserAnswers, setAllUserAnswers] = useState([]);
  const [userScore, setUserScore] = useState(0);


  const handleOnChangeInput = (e) => {
    const { value } = e.target;
    setUserAnswers(value)
  };

  const handleChangePhase = (newCurrentPhase) => {
    setCurrentPhase(newCurrentPhase);
    setActiveStep(newCurrentPhase);
    setUserAnswers('');
    setAllUserAnswers([...allUserAnswers, userAnswers]);
  }


  const handleChangeScore = () => {
    const correctAnswer = gameData.phases[currentPhase].correctAnswer;
    if (correctAnswer === userAnswers) setUserScore(userScore + 1);
  }

  const handleNextQuestion = () => {
    handleChangeScore();
    const newCurrentPhase = currentPhase + 1;
    if (newCurrentPhase < gameData.phases.length) {
      handleChangePhase(newCurrentPhase);
    } else {
      history.push({
        pathname: '/score',
        state: { userScore, totalAnswner: gameData.phases.length }
      });
    }
  };

  return (
    <>
      <Menu />
      <Container>
        <Card>
          <Title>{gameData.name}</Title>

          <GameContainer>

            <Stepper alternativeLabel activeStep={activeStep}>
              {['1', '2', '3', '4', '5'].map(step => (
                <Step key={step} >
                  <StepLabel>{''}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <QuestionText>{gameData.phases[currentPhase].question}</QuestionText>

            <RadioGroup name="correctAnswer" value={userAnswers} onChange={handleOnChangeInput}>
              {gameData.phases[currentPhase].alternatives.map((alternative) => (
                <AnswerContainer>
                  <FormControlLabel value={alternative.id} control={<Radio />} label={alternative.title} />
                </AnswerContainer>
              ))}
            </RadioGroup>

            <ButtonLogin variant="contained" color="primary" onClick={handleNextQuestion}>
              Responder
          </ButtonLogin>
          </GameContainer>
        </Card>
      </Container>
    </>
  );
}

export default TriviaGame;