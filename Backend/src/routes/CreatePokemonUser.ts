import { Router,Request,Response } from "express";

import { CreatingPokemonService, getPokemonsListService } from "../service/CreatePokemonService";


const CreateUserForPokemon = Router();


CreateUserForPokemon.post('/', async (req:Request, res:Response) => {
    try {
        const response = await CreatingPokemonService(req?.body)

        res.status(201).json({ message: 'Pokemon User created successfully', data: response });
    } catch (error:any) {
        res.status(500).json({ message: 'Failed to create Pokemon User', error: error?.message });
    }
});

CreateUserForPokemon.get('/list', async (req:Request, res:Response) => {
    try {
        const pokemonUsers = await getPokemonsListService()
        res.send(pokemonUsers);
    } catch (error:any) {
        res.send({ message: 'Failed to get Pokemon Users', error: error?.message });
    }
});

export default CreateUserForPokemon;