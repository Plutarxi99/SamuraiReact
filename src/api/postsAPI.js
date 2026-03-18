import {backendAPI} from "./instanceBackend";

export const postsAPI = {
    getByUserId(userId) {
        return backendAPI.get(`posts?userId=${userId}`)
    },
    createPost(content) {
        return backendAPI.post(`posts/`, {'content': content});
    }
}