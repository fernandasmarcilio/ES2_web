import React from 'react';

import Menu from '../../components/Menu';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Container } from './styles';


const Home = () => {
  return (
    <>
      <Menu />
      <Container component={Paper}>
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

            <TableRow >
              <TableCell component="th" scope="row">
                {'teste'}
              </TableCell>
              <TableCell align="right">{'teste'}</TableCell>
              <TableCell align="right">{'teste'}</TableCell>
              <TableCell align="right">{'teste'}</TableCell>
              <TableCell align="right">{'teste'}</TableCell>
              <TableCell align="right">{'teste'}</TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </Container>
    </>

  );
}

export default Home;