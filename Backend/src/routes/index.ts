import { Router } from "express"

import AuthRouter from "./adminauth"
import CreateUserForPokemon from "./CreatePokemonUser"
import AddPokemonForRouter from "./AddingPokemon.route"


const Routers = Router()



Routers.use('/auth',AuthRouter)

Routers.use('/pokemon-species',CreateUserForPokemon)

Routers.use('/Add-pokemon',AddPokemonForRouter)




export default Routers