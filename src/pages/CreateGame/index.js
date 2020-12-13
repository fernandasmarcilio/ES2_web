import React, { useState } from 'react';

import Menu from '../../components/Menu';
import ModalQuestion from './ModalQuestion';

import { RadioGroup, Radio, FormControlLabel } from '@material-ui/core';

import { Container, Card, Title, Form, Input, ButtonLogin, Text, difficultyContainer } from './styles';

const data = [
  { id: '01', pergunta: 'pergunta01', respostas: ['resp01', 'resp02'], respostaCorreta: 'resp02' },
  { id: '02', pergunta: 'pergunta02', respostas: ['resp01', 'resp02'], respostaCorreta: 'resp02' },
  { id: '03', pergunta: 'pergunta03', respostas: ['resp01', 'resp02'], respostaCorreta: 'resp02' },
]

const CreateGame = () => {
  const [form, setForm] = useState({ gameName: '', difficulty: 'easy', questions: [] });
  const [typeQuestion, setTypeQuestion] = useState('random');
  const [openModal, setOpenModal] = useState(false);
  const [questionsSelected, setQuestionsSelected] = useState([]);

  const toggleModal = () => {
    setOpenModal(!openModal);
  }

  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  };

  const handleAddQuestions = () => {
    setForm({ ...form, questions: questionsSelected })
  }

  const handleCancelAddQuestions = () => {
    setForm({ ...form, questions: [] });
    toggleModal();
  }

  const handleOnChangeTypeQuestion = (e) => {
    const { value } = e.target;
    setTypeQuestion(value)
    if (value === 'manual') toggleModal();
  }

  const handleToggleQuestions = (value) => {
    const currentIndex = questionsSelected.indexOf(value);
    const newQuestion = [...questionsSelected];

    if (currentIndex === -1) {
      newQuestion.push(value);
    } else {
      newQuestion.splice(currentIndex, 1);
    }

    setQuestionsSelected(newQuestion);
  }

  const handleOnCreateGame = () => {

  };

  return (
    <>
      <ModalQuestion
        openModal={openModal}
        toggleModal={toggleModal}
        questions={data}
        questionsSelected={questionsSelected}
        handleToggleQuestions={handleToggleQuestions}
        handleAddQuestions={handleAddQuestions}
        handleCancelAddQuestions={handleCancelAddQuestions}
      />
      <Menu />
      <Container>
        <Card>
          <Title>Criar jogo</Title>
          <Form>
            <Input label="Nome do jogo" variant="outlined" name="gameName" value={form.gameName} onChange={handleOnChangeInput} />

            <Text>Dificuldade do jogo</Text>
            <RadioGroup name="difficulty" value={form.difficulty} onChange={handleOnChangeInput}>
              <difficultyContainer>
                <FormControlLabel value="easy" control={<Radio />} label="facil" />
                <FormControlLabel value="medium" control={<Radio />} label="médio" />
                <FormControlLabel value="hard" control={<Radio />} label="difícil" />
              </difficultyContainer>
            </RadioGroup>

            <Text>Modo de escolha da pergunta</Text>
            <RadioGroup name="typeQuestion" value={typeQuestion} onChange={handleOnChangeTypeQuestion}>
              <FormControlLabel value="manual" control={<Radio />} label="manual" />
              <FormControlLabel value="random" control={<Radio />} label="aleatório" />
            </RadioGroup>

            <ButtonLogin variant="contained" color="primary" onClick={handleOnCreateGame}>
              Criar jogo
          </ButtonLogin>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default CreateGame;