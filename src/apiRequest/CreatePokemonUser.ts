import axios from "axios";
import { origin } from "./config";


export const CreatePokemonUser = async (data:any) => {

    const reqData = JSON.stringify(data)
    try {
        const response = await axios({
            url:`${origin}/api/v2/pokemon-species/`,
            method:'post',
            headers:{
                
                'Content-Type':'application/json'
            },
            data:reqData
        })

        const responseData = await response?.data

        return responseData;
    }
    catch (err:any) {
        console.log(err?.message);
        
    }
}

export const getListOfCreatedPokemon = async (data:any) => {

    const reqData = JSON.stringify(data)
    try {
        const response = await axios({
            url:`${origin}/api/v2/pokemon-species/list`,
            method:'get',
            headers:{
                 
                'Content-Type':'application/json'
            },
            data:reqData
        })

        const responseData = await response?.data

        return responseData;
    }
    catch (err:any) {
        console.log(err?.message);
        
    }
}