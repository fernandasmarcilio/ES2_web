import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Menu from '../../components/Menu';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Container, ContainerTable } from './styles';

import TriviaContext from "../../context/TriviaContext";

const data = [
  { id: '01', name: 'trilha 01', position: '01', phase: '01', question: '01', progress: '0%' },
  { id: '02', name: 'trilha 02', position: '01', phase: '01', question: '01', progress: '0%' },
  { id: '03', name: 'trilha 03', position: '01', phase: '01', question: '01', progress: '0%' }
]

const Home = () => {
  const { list } = useContext(TriviaContext);
  const [trivias, setTrivias] = useState([]);
  const history = useHistory();

  const handleClickToPlay = (trivia) => {
    history.push("/trivia", { trivia })
  }

  useEffect(() => {
    list((responseJson) => {
      console.log(responseJson);
      setTrivias(responseJson);
    })
  }, []);

  return (
    <>
      <Menu />
      <Container>
        <ContainerTable component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Nome da trilha</TableCell>
                <TableCell align="right">Posição</TableCell>
                <TableCell align="right">Fase</TableCell>
                <TableCell align="right">Pergunta</TableCell>
                <TableCell align="right">Progresso</TableCell>
                <TableCell align="right">Baixar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {trivias.map((trivia) => (
                <TableRow key={trivia.id} hover onClick={() => handleClickToPlay(trivia)} style={{ cursor: 'pointer' }}>
                  <TableCell component="th" scope="row">
                    {trivia.name}
                  </TableCell>
                  <TableCell align="right">{trivia.position}</TableCell>
                  <TableCell align="right">{trivia.phase}</TableCell>
                  <TableCell align="right">{trivia.question}</TableCell>
                  <TableCell align="right">{trivia.progress}</TableCell>
                  <TableCell align="right">{''}</TableCell>
                </TableRow>
              ))}


            </TableBody>
          </Table>
        </ContainerTable>
      </Container>
    </>

  );
}

export default Home;