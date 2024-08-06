import React, { useEffect, useState } from 'react';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Typography,
  Grid,
  IconButton
} from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { deletePokemon, getListOfAddedPokemon, updatePokemon } from '../apiRequest/addPokemonList';


interface PokemonUser {
  id: string; 
  userName: string;
  name: string;
  ability: string;
  number: number;
}

export default function ListPokemonUsers() {
  const [pokemonUsers, setPokemonUsers] = useState<PokemonUser[]>([]);

  useEffect(() => {
    const fetchPokemonUsers = async () => {
      try {
        const data = await getListOfAddedPokemon(); 
        setPokemonUsers(data);
      } catch (error) {
        console.error('Error fetching Pokémon users:', error);
      }
    };

    fetchPokemonUsers();
  }, []);

  const handleAddPokemon = () => {
    window.location.href = '/AddPokemon';
  };

  const handleEdit = async (id: string) => {
    // Logic for editing a Pokémon user
    // You can add a form or redirect to another page for the actual editing
    const updatedData = { /* updated data */ };
    try {
      await updatePokemon(id, updatedData);
      // Refresh the list after updating
      const updatedUsers = await getListOfAddedPokemon();
      setPokemonUsers(updatedUsers);
    } catch (error) {
      console.error('Error updating Pokémon user:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deletePokemon(id);
      const updatedUsers = await getListOfAddedPokemon();
      setPokemonUsers(updatedUsers);
    } catch (error) {
      console.error('Error deleting Pokémon user:', error);
    }
  };

  const handleAddUserRedirect = () => {
    window.location.href = '/CreatePokemonUser';
  };

  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <Container>
      <IconButton onClick={handleBack} sx={{ marginBottom: '10px' }}>
        <ArrowBackIcon />  Back
      </IconButton>
      <Typography variant="h4" gutterBottom sx={{ marginBottom: '20px', marginTop: '30px' }}>
        List of Pokemon Users
      </Typography>

      <Grid container spacing={2} justifyContent="flex-end" sx={{ marginBottom: '15px' }}>
        <Grid item>
          <Button variant="contained" color="secondary">
            Delete All
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleAddUserRedirect}>
            Add New User
          </Button>
        </Grid>
      </Grid>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Pokemon Owner Name</TableCell>
            <TableCell>Pokemon Name</TableCell>
            <TableCell>Pokemon Ability</TableCell>
            <TableCell>No. of Pokemon</TableCell>
            <TableCell>Add Pokemon</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemonUsers.length > 0 ? (
            pokemonUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.userName}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.ability}</TableCell>
                <TableCell>{user.number}</TableCell>
                <TableCell>
                  <Button onClick={handleAddPokemon}>+</Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(user.id)}>Edit</Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleDelete(user.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} align="center">
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Container>
  );
}
