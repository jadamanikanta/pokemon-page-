import addpokemonModal from "../models/addPokemon.model";


export const AddPokemonService= async (data:any) => {
    try {

        const reqData = {
            ...data,
        }
    
        const response = await addpokemonModal.create(reqData)
        
        console.log(response);
        
        return response 
    }
    catch (err:any) {
        return {message:err?.message}
    }
}

export const getAllPokemonsList = async () => {
    try {
        const response = await addpokemonModal.find();
        
        return response;
    } catch (err: any) {
        return { message: err?.message };
    }
};

export const getAllUserNamesDetails = async (user:any) => {
    try {
        const response = await addpokemonModal.find(user=user?.userName).select('userName');
        console.log('Database Response:', response);
        return response;
    } catch (err: any) {
        return { message: err?.message };
    }
};





export const updatePokemonService = async (data: any) => {
    try {
        const response = await addpokemonModal.findOneAndUpdate({_id:data?._id},{name:data?.name,userName:data?.userName,ability:data?.ability,number:data?.number},{new:true})
        if (!response) {
            return { message: "Pokemon not found" };
        }
        return response;
    } catch (err: any) {
        return { message: err?.message };
    }
};

export const deletePokemonService = async (id: string) => {
    try {
        const response = await addpokemonModal.findOneAndDelete({ _id: id});
        if (!response) {
            return { message: "Pokemon not found" };
        }
        return { message: "Pokemon deleted successfully" };
    } catch (err: any) {
        return { message: err?.message };
    }
};