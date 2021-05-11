import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({}));

export default function Create() {
  const classes = useStyles();

  return (
    <Container>
      <Typography
        className={''}
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <Button
        type="submit"
        className={''}
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
        onClick={() => console.log('clicked')}
      >
        Submit
      </Button>
    </Container>
  );
}
