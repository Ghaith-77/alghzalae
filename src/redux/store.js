import { applyMiddleware} from "redux"
import  {createStore} from "redux"
import {combineReducers } from "redux"
import thunk from "redux-thunk"
import { datareduser } from "./reduseres"

let rootredusers = combineReducers({
    datareduserRoot : datareduser
})

export let store = createStore(rootredusers,applyMiddleware(thunk)) 


