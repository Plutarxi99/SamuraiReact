import {backendAPI} from "./instanceBackend";

export const authAPI = {
    me() {
        return backendAPI.get('auth/me')
    }
}