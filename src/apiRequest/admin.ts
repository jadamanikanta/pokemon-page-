// import axios from "axios";
// import { origin } from "./config";


// export const adminLogin = async (data:any) => {

//     const reqData = JSON.stringify(data)
//     try {
//         const response = await axios({
//             url:`${origin}/api/v1/auth/`,
//             method:'post',
//             headers:{
//                 // 'Authorization': `Bearer ${token}`, 
//                 'Content-Type':'application/json'
//             },
//             data:reqData
//         })

//         const responseData = await response?.data

//         return responseData;
//     }
//     catch (err:any) {
//         console.log(err?.message);
        
//     }
// }

// export const adminUpdatePassword = async (data:any) => {

//     const reqData = JSON.stringify(data)
//     try {
//         const response = await axios({
//             url:`${origin}/api/v1/auth/update-password`,
//             method:'post',
//             headers:{
//                 // 'Authorization': `Bearer ${token}`, 
//                 'Content-Type':'application/json'
//             },
//             data:reqData
//         })

//         const responseData = await response?.data

//         return responseData;
//     }
//     catch (err:any) {
//         console.log(err?.message);
        
//     }
// }

