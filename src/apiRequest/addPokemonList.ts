import axios from "axios";
import { origin } from "./config";


export const AddPokemon = async (data:any) => {

    const reqData = JSON.stringify(data)
    try {
        const response = await axios({
            url:`${origin}/api/v2/Add-pokemon/`,
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

export const getListOfAddedPokemon = async (data:any) => {

    const reqData = JSON.stringify(data)
    try {
        const response = await axios({
            url:`${origin}/api/v2/Add-pokemon/list`,
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

export const getUserNameBasedonPokemon = async (data:any) => {

    const reqData = JSON.stringify(data)
    try {
        const response = await axios({
            url:`${origin}/api/v2/Add-pokemon/users-list`,
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

export const updatePokemon = async (id: string, data: any) => {
    const reqData = JSON.stringify(data);
    try {
        const response = await axios({
            url: `${origin}/api/v2/Add-pokemon/${id}`,
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            data: reqData
        });

        return response?.data;
    } catch (err: any) {
        console.log(err?.message);
    }
};


export const deletePokemon = async (id: string) => {
    try {
        const response = await axios({
            url: `${origin}/api/v2/Add-pokemon/${id}`,
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response?.data;
    } catch (err: any) {
        console.log(err?.message);
    }
};