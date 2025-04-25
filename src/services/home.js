import $http from "@/services/index.js"

const resource = '/homes'
export default {
    index(payload) {
        return $http.get(`${resource}`, payload)
    },

    create(payload) {
        return $http.post(`${resource}`, payload)
    },

    show(id) {
        return $http.get(`${resource}/${id}`)
    },

    edit(id, payload) {
        return $http.put(`${resource}/${id}`, payload);
    },

}
