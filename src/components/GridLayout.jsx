import React from 'react';
import { Grid } from '@material-ui/core';

export default function GridLayout({ notes, children }) {
  return (
    <Grid container spacing={3}>
      {notes.length > 0 &&
        notes.map((note) => (
          <Grid key={note.id} item xs={12} sm={6} md={3} lg={4}>
            {children}
          </Grid>
        ))}
    </Grid>
  );
}
