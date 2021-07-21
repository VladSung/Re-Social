import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "4c922e14-21e4-4510-8066-7e1007c44c7d",
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
})

export const usersAPI = {
    getUsers(currentPage, pageSize = 5) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    toggleFollow(userId, followed) {
        if (followed) {
            return instance.delete(`follow/${userId}`)
                .then(res => {
                    if (res.data.resultCode === 0) {
                        return true
                    }
                })
        } else {

            return instance.post(`follow/${userId}`)
                .then(res => {
                    if (res.data.resultCode === 0) {
                        return true
                    }
                })
        }

    },
}
export const authAPI = {
    me() {
        return instance.get(`/auth/me`)
            .then(res => res.data)
    },

}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`/profile/${userId}`)
            .then(res => res.data)
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
            .then(res => res.data)
    },
    updateStatus(status) {
        return instance.put(`/profile/status/`, { status })
            .then(res => res.data)
    }
}
