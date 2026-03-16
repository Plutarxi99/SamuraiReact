import {backendAPI} from "./instanceBackend";

export const userAPI = {
    getUsers(page = 1, pageSize = 5) {
        return backendAPI.get(`/users?page=${page}&limit=${pageSize}`)
    },
    followOnUser(userId) {
        return backendAPI.post(`/users/${userId}/follow`)
    },
    unFollowOnUser(userId) {
        return backendAPI.delete(`/users/${userId}/follow`)
    },
    getUserById(userId) {
        return backendAPI.get(`/users/${userId}`)
    }
}