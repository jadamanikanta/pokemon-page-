import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, Snackbar, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AddPokemon } from '../apiRequest/addPokemonList';

export default function AddPokemonForm() {
  const [pokemonData, setPokemonData] = useState({
    userName: '',
    ability: '',
    number: '',
    name: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonData({
      ...pokemonData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await AddPokemon(pokemonData);
      if (response) {
        setSnackbarMessage('Pokemon added successfully!');
        setOpenSnackbar(true);
        setTimeout(() => {
          window.location.href = '/';
        }, 3000); 
      }
    } catch (err) {
      setSnackbarMessage('Failed to add Pokemon.');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleBack = () => {
    window.location.href = '/ListOfPokemonUsers';
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <IconButton onClick={handleBack} sx={{ marginBottom: '10px' }}>
        <ArrowBackIcon />  Back
      </IconButton>
      <Typography variant="h5" gutterBottom sx={{ marginTop: '10px', marginBottom: '20px' }}>
        Add Pokemon
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} sx={{ marginBottom: '20px' }}>
          <TextField
            fullWidth
            label="Pre-selected-user-name"
            name="userName"
            variant="outlined"
            value={pokemonData.userName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={12} sx={{ marginBottom: '20px' }}>
          <TextField
            fullWidth
            label="Pokemon Ability"
            name="ability"
            variant="outlined"
            value={pokemonData.ability}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={12} sx={{ marginBottom: '20px' }}>
          <TextField
            fullWidth
            label="Number to Pokemon"
            name="number"
            variant="outlined"
            value={pokemonData.number}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={12} sx={{ marginBottom: '20px' }}>
          <TextField
            fullWidth
            label="Pokemon Name"
            name="name"
            variant="outlined"
            value={pokemonData.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: '20px' }}>
          <Button variant="outlined" fullWidth onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </div>
  );
}
