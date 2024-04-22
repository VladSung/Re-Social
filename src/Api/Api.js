import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "4c922e14-21e4-4510-8066-7e1007c44c7d",
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
})

export const usersAPI = {
    async getUsers(currentPage, pageSize = 5) {
        const res = await instance.get(`/users?page=${currentPage}&count=${pageSize}`)
        return res.data
    },
    async toggleFollow(userId, followed) {
        if (followed) {
            const res = await instance.delete(`follow/${userId}`)
            if (res.data.resultCode === 0) {
                return true
            }
        } else {
            const res = await instance.post(`follow/${userId}`)
            if (res.data.resultCode === 0) {
                return true
            }
        }

    },
}
export const authAPI = {
    async me() {
        const res = await instance.get(`auth/me`)
        return res.data
    },
    async login(email, password, rememberMe) {
        const res = await instance.post(`auth/login`, {
            email,
            password,
            rememberMe
        })
        return res.data
    }

}
export const profileAPI = {
    async getProfile(userId) {
        const res = await instance.get(`/profile/${userId}`)
        return res.data
    },
    async getStatus(userId) {
        const res = await instance.get(`/profile/status/${userId}`)
        return res.data
    },
    async updateStatus(status) {
        const res = await instance.put(`/profile/status/`, { status })
        return res.data
    },
    async uploadPhoto(image) {
        const formData = new FormData();
        formData.append("image", image)
        const res = await instance.post('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return res.data
    }
}