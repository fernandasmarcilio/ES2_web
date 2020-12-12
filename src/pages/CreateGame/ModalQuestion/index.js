import React from 'react';

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox
} from '@material-ui/core';

const ModalQuestion = ({
  openModal,
  toggleModal,
  questions,
  questionsSelected,
  handleToggleQuestions,
  handleAddQuestions,
  handleCancelAddQuestions
}) => {

  return (
    <Dialog
      onClose={toggleModal}
      open={openModal}
      fullWidth={true}
      maxWidth="sm"
      disableBackdropClick
    >
      <DialogTitle>
        Escolha as perguntas
      </DialogTitle>

      <DialogContent >
        <List>
          {questions.map((question) => {
            const labelId = `checkbox-list-label-${question.id}`;
            return (
              <ListItem key={question.id} role={undefined} dense button onClick={() => handleToggleQuestions(question.id)}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={questionsSelected.indexOf(question.id) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`${question.pergunta}`} />
              </ListItem>
            );
          })}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleCancelAddQuestions()} color="primary">
          Cancel
        </Button>
        <Button onClick={() => handleAddQuestions()} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalQuestion;