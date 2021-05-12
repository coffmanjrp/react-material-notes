import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import { NoteCard } from '../components';

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then((res) => res.json())
      .then((data) => setNotes(data));

    // eslint-disable-next-line
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: 'DELETE',
    });

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.length > 0 &&
          notes.map((note) => (
            <Grid key={note.id} item xs={12} sm={6} md={3} lg={4}>
              <NoteCard note={note} handleDelete={handleDelete} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
