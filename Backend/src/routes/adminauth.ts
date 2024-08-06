// import { Router,Request,Response } from "express";
// import adminModel from "../models/admin.model";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// const AuthRouter = Router();


// AuthRouter.post('/', async (req:Request,res:Response) => {

//     try {

        

//         const findAdmin:any = await adminModel.findOne({email:req.body.email})


//         if (findAdmin) {
//             const valid = await bcrypt.compare(req.body.password, findAdmin.password);

//             if (valid) {

//                 let token = jwt.sign(
//                     {
//                         email:findAdmin?.email,type:'1'
//                     },
//                     "tenai",
//                     { expiresIn: "24h" }
//                 );


//                 res.send({message:'success','token':token,})
//             }
//             else {
//                 res.send({message:'wrong Password'})
//             }
//         }
//         else {
//             res.send({message:'user not found'})
//         }

//     }
//     catch (err:any) {
//         res.send({message:err.message})
//     }
// })


// AuthRouter.post('/update-password', async (req:Request,res:Response) => {

//     try {

//         const find = await adminModel?.findOne({email:'meritguide.india@gmail.com'}) 

//         if (find) {
       
//       const response = await adminModel?.findOneAndUpdate({email:'meritguide.india@gmail.com'},{password:bcrypt.hashSync(req?.body?.password, 10)})

//       res.send({message:'success',response})}
//       else {
//         res.send({message:'user not found'})
//       }


//     }
//     catch (err:any) {

//         console.log({message:err.message});
        
//         res.send({message:'An Error Occured'})
//     }
// })






// export default AuthRouter
