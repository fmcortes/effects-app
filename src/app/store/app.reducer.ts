import { ActionReducerMap } from '@ngrx/store';
import { Usuario } from '../models/usuario.model';
import * as reducers from './reducers';

export interface AppState {
  usuarios: reducers.UsuariosState;
  usuario: reducers.UsuarioState;
}

export const appReducers: ActionReducerMap<AppState> = {
  usuarios: reducers.usuariosReducer,
  usuario: reducers.usuarioReducer,
};
