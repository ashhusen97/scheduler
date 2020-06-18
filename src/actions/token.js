/* eslint-disable prettier/prettier */
import {ADD_TOKEN, UPDATE_LOGIN} from './types';

export const add_token = (token) => ({type: ADD_TOKEN, data: token});
export const update_login = (status) => ({type: UPDATE_LOGIN, data: status});
