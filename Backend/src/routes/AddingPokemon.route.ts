import { Router,Request,Response } from "express";
import { AddPokemonService, deletePokemonService, getAllPokemonsList,getAllUserNamesDetails,updatePokemonService } from "../service/addPokemon.service";
import FindingUserNameModal from "../models/UserNames.model";



const AddPokemonForRouter = Router();

AddPokemonForRouter.post('/', async (req:Request, res:Response) => {
    try {
        const response = await AddPokemonService(req?.body)

        res.send({ message: 'pokemon added successfully', data: response });
    } catch (error:any) {
        res.send({ message: 'Failed to add Pokemon User', error: error?.message });
    }
});

AddPokemonForRouter.get('/list', async (req:Request, res:Response) => {
    try {
        const pokemonUsers = await getAllPokemonsList()
        res.send(pokemonUsers);
    } catch (error:any) {
        res.send({ message: 'Failed to get Pokemon Users', error: error?.message });
    }
});


AddPokemonForRouter.get('/users-list', async (req:Request, res:Response) => {
    try {
        const pokemonUsers = await getAllUserNamesDetails(req?.query);
        res.send(pokemonUsers);
    } catch (error:any) {
        res.send({ message: 'Failed to get Pokemon Users', error: error?.message });
    }
});

AddPokemonForRouter.post('/:id', async (req: Request, res: Response) => {
    try {
        const response = await updatePokemonService(req?.body);
        res.send({ message: 'Pokemon updated successfully', data: response });
    } catch (error: any) {
        res.status(500).send({ message: 'Failed to update Pokemon User', error: error?.message });
    }
});


AddPokemonForRouter.get('/:id', async (req: Request, res: Response) => {
    try {

              const response = await deletePokemonService(req?.params?.id);

        res.send(response);

    } catch (error: any) {
        res.status(500).send({ message: 'Failed to delete Pokemon User', error: error?.message });
    }
});





export default AddPokemonForRouter;