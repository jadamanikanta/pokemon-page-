
import PokemonUserModal from "../models/CreatePokemon.model";



  export const CreatingPokemonService= async (data:any) => {
    try {

        const reqData = {
            ...data,
        }

        
        const response = await PokemonUserModal.create(reqData)
        
        console.log(response);
        
        return response 
    }
    catch (err:any) {
        return {message:err?.message}
    }
}

export const getPokemonsListService = async () => {
    try {
        const response = await PokemonUserModal.find();
        
        return response;
    } catch (err: any) {
        return { message: err?.message };
    }
};

