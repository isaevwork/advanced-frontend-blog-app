import {UserSchema} from "entities/User";
import {LoginSchema} from "features/AuthByUsername";
import {EnhancedStore} from "@reduxjs/toolkit";
import { ReducerManager } from "./reducerManager";
export interface StateSchema {
    user: UserSchema;

    //Асинхронные редюсеры
    loginForm?: LoginSchema;
}

export type StateSchemaKeys = keyof StateSchema;


export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}