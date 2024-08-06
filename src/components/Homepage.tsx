import React, { useState, useEffect } from 'react';
import { Container, Select, MenuItem, Button, Typography, Box, CircularProgress, Modal, Paper } from '@mui/material';
import { getListOfAddedPokemon } from '../apiRequest/addPokemonList';

interface Pokemon {
  userName: string;
  id: number;
  number: number;
  name: string;
  ability: string;
}

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<Pokemon[]>([]);
  const [selectedUser, setSelectedUser] = useState<number | string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [fleeModalOpen, setFleeModalOpen] = useState<boolean>(false);
  const [ceaseModalOpen, setCeaseModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getListOfAddedPokemon();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleUserChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedUser(event.target.value as number);
  };

  const handleFleeModalOpen = () => setFleeModalOpen(true);
  const handleFleeModalClose = () => setFleeModalOpen(false);

  const handleCeaseModalOpen = () => setCeaseModalOpen(true);
  const handleCeaseModalClose = () => setCeaseModalOpen(false);

  const selectedPokemon = users.find(user => user.id === selectedUser);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Home Page
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Select
            value={selectedUser}
            onChange={handleUserChange}
            displayEmpty
            fullWidth
          >
            <MenuItem value="">
              <em>Select User</em>
            </MenuItem>
            {users.map(user => (
              <MenuItem key={user?.id} value={user?.id}>
                {user?.userName}
              </MenuItem>
            ))}
          </Select>

          <Box mt={4} display="flex" justifyContent="space-between">
            <Paper style={{ padding: 16, width: '30%', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid #000' }}>
              <Typography variant="h6">Number of Pokemon</Typography>
              <Typography variant="body1">
                {selectedPokemon ? selectedPokemon?.number : '---'}
              </Typography>
            </Paper>
            <Paper style={{ padding: 16, width: '30%', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid #000' }}>
              <Typography variant="h6">Ability of Pokemon</Typography>
              <Typography variant="body1">
                {selectedPokemon ? selectedPokemon?.ability : '---'}
              </Typography>
            </Paper>
            <Paper style={{ padding: 16, width: '30%', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid #000' }}>
              <Typography variant="h6">Name of Pokemon</Typography>
              <Typography variant="body1">
                {selectedPokemon ? selectedPokemon?.name : '---'}
              </Typography>
            </Paper>
          </Box>

          <Box mt={2}>
            <Button 
              variant="contained" 
              color="primary" 
              style={{ marginRight: 8 }}
              onClick={() => window.location.href = '/ListOfPokemonUsers'}
            >
              LIST OF POKEMONS USERS
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              style={{ marginRight: 8 }}
              onClick={() => window.location.href = '/CreatePokemonUser'}
            >
              POKEMON GO
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              style={{ marginRight: 8 }}
              onClick={handleFleeModalOpen}
            >
              POKEMON FLEE
            </Button>
            <Button 
              variant="contained" 
              color="secondary"
              onClick={handleCeaseModalOpen}
            >
              POKEMON CEASE
            </Button>
          </Box>

          <Modal
            open={fleeModalOpen}
            onClose={handleFleeModalClose}
            aria-labelledby="flee-modal-title"
            aria-describedby="flee-modal-description"
          >
            <Paper style={{ padding: 16, margin: '20% auto', width: 300 }}>
              <Typography id="flee-modal-title" variant="h6" component="h2">
                Pokemon Flee
              </Typography>
              <Typography id="flee-modal-description" sx={{ mt: 2 }}>
                Your account is stopped for some time.
              </Typography>
              <Button onClick={handleFleeModalClose} variant="contained" color="primary" style={{ marginTop: 16 }}>
                Close
              </Button>
            </Paper>
          </Modal>

          <Modal
            open={ceaseModalOpen}
            onClose={handleCeaseModalClose}
            aria-labelledby="cease-modal-title"
            aria-describedby="cease-modal-description"
          >
            <Paper style={{ padding: 16, margin: '20% auto', width: 300 }}>
              <Typography id="cease-modal-title" variant="h6" component="h2">
                Pokemon Cease
              </Typography>
              <Typography id="cease-modal-description" sx={{ mt: 2 }}>
                Your account is ceased completely.
              </Typography>
              <Button onClick={handleCeaseModalClose} variant="contained" color="primary" style={{ marginTop: 16 }}>
                Close
              </Button>
            </Paper>
          </Modal>
        </>
      )}
    </Container>
  );
};

export default HomePage;
