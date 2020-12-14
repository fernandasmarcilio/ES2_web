import React, { useState, useContext } from 'react';

import Menu from '../../components/Menu';

import { RadioGroup, Radio, FormControlLabel } from '@material-ui/core';

import TriviaContext from "../../context/TriviaContext";

import { Container, Card, Title, Form, Input, ButtonLogin, Text, AnswerContainer, DifficultyContainer } from './styles';

const alternatives = [
  { id: 'a', title: 'Alternativa A' },
  { id: 'b', title: 'Alternativa B' },
  { id: 'c', title: 'Alternativa C' },
  { id: 'd', title: 'Alternativa D' },
]

const defaultAnswers = { a: '', b: '', c: '', d: '' };


const CreateQuestion = () => {
  const [form, setForm] = useState({ question: '', correctAnswer: 'a', difficulty: 'easy' });
  const [answers, setAnswers] = useState(defaultAnswers);
  const { createQuestion } = useContext(TriviaContext);

  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  };

  const handleOnChangeAnswersInput = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  }

  const handleOnSubmit = () => {
    createQuestion({...form,answers}, () =>{
      console.log("asdasd");
    })
  };


  return (
    <>
      <Menu />
      <Container>
        <Card>
          <Title>Criar Pergunta</Title>
          <Form>
            <Input label="Pergunta" variant="outlined" name="question" value={form.question} onChange={handleOnChangeInput} />

            <Text>Alternativas</Text>

            <RadioGroup name="correctAnswer" value={form.correctAnswer} onChange={handleOnChangeInput}>
              {alternatives.map((alternative) => (
                <AnswerContainer>
                  <FormControlLabel key={alternative.id} value={alternative.id} control={<Radio />} />

                  <Input label={alternative.title} variant="outlined" name={alternative.id} value={answers[alternative.id]} onChange={handleOnChangeAnswersInput} />
                </AnswerContainer>
              ))}
            </RadioGroup>


            <Text>Dificuldade</Text>
            <RadioGroup name="difficulty" value={form.difficulty} onChange={handleOnChangeInput}>
              <DifficultyContainer>
                <FormControlLabel value="easy" control={<Radio />} label="facil" />
                <FormControlLabel value="medium" control={<Radio />} label="médio" />
                <FormControlLabel value="hard" control={<Radio />} label="difícil" />
              </DifficultyContainer>
            </RadioGroup>


            <ButtonLogin variant="contained" color="primary" onClick={handleOnSubmit}>
              Criar pergunta
          </ButtonLogin>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default CreateQuestion;