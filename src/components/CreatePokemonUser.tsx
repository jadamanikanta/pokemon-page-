import React, { useState } from 'react';
import { Container, TextField, Button, Grid, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import { CreatePokemonUser } from '../apiRequest/CreatePokemonUser';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function CreatePokemon() {
  const [formData, setFormData] = useState({
    ownerName: '',
    pokemonName: '',
    ability: '',
    positionX: '',
    positionY: '',
    speed: '',
    direction: '',
  });

  const [open, setOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await CreatePokemonUser(formData); 
      if (response?.message === 'Pokemon User created successfully') {
        setOpen(true);
        
        setTimeout(() => {
          window.location.href = '/ListOfPokemonUsers';
        }, 3000); 
      }
    } catch (error:any) {
      console.error('Error creating Pokemon user:', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <Container>

    <IconButton onClick={handleBack}>
        <ArrowBackIcon />  Back
      </IconButton>

      <Typography variant="h4" gutterBottom sx={{marginTop:'25px',color:'red'}}>Create Pokemon User</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} sx={{marginTop:'10px'}}>
          <TextField
            fullWidth
            label="Pokemon Owner Name"
            variant="outlined"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} sx={{marginTop:'10px'}}>
          <TextField
            fullWidth
            label="Pokemon Name"
            variant="outlined"
            name="pokemonName"
            value={formData.pokemonName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sx={{marginTop:'10px'}}>
          <TextField
            fullWidth
            label="Pokemon Ability"
            variant="outlined"
            name="ability"
            value={formData.ability}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} sx={{marginTop:'10px'}}>
          <TextField
            fullWidth
            label="Initial Position X"
            variant="outlined"
            name="positionX"
            value={formData.positionX}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} sx={{marginTop:'10px'}}>
          <TextField
            fullWidth
            label="Initial Position Y"
            variant="outlined"
            name="positionY"
            value={formData.positionY}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sx={{marginTop:'10px'}}>
          <TextField
            fullWidth
            label="Speed"
            variant="outlined"
            name="speed"
            value={formData.speed}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sx={{marginTop:'10px'}}>
          <TextField
            fullWidth
            label="Direction"
            variant="outlined"
            name="direction"
            value={formData.direction}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Successfully created Pokemon User
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
