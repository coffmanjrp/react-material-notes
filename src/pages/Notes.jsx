import React, { useEffect, useState } from 'react';
import { Container, Grid, Card } from '@material-ui/core';

export default function Notes() {
  const [notes, setNotes] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then((res) => res.json())
      .then((data) => setNotes(data));

    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Grid container>
        {notes.length > 0 &&
          notes.map((note) => (
            <Grid key={note.id} item xs={12} sm={6} md={3} lg={4}>
              <Card>{note.title}</Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
