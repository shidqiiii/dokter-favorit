import axios from "axios";

class BaseApi {
    static baseUrl = "https://dokter-favorit-v1.herokuapp.com/";

    static async UserLogin(email, password) {
        let result = null;

        await axios.post(BaseApi.baseUrl + 'users/login', {
            email: email,
            password: password
        })
            .then((response) => {
                // console.log(response);
                result = response.data;
            })
            .catch((error) => {
                result = error.response.data;
            })
        // console.log("result: ", result);
        return result
    }

    static async UserRegister(name, email, password, role) {
        let result = null;

        await axios.post(BaseApi.baseUrl + 'users/register', {
            name: name,
            email: email,
            password: password,
            role: role
        })
            .then((response) => {
                // console.log(response);
                result = response.data;
            })
            .catch((error) => {
                result = error.response.data;
            })
        // console.log("result: ", result);
        return result
    }

    static async GetAllDepartments() {
        let result = null;

        await axios.get(BaseApi.baseUrl + 'departments')
            .then((response) => {
                // console.log(response);
                result = response.data;
            })
            .catch((error) => {
                result = error.response.data;
            })
        // console.log("result: ", result);
        return result
    }

    static async GetAllDoctors(id) {
        let result = null;

        await axios.get(BaseApi.baseUrl + `users?role=dokter&id_department=${id}`)
            .then((response) => {
                // console.log(response);
                result = response.data;
            })
            .catch((error) => {
                result = error.response.data;
            })
        // console.log("result: ", result);
        return result
    }

    static async GetDetailDoctor(id) {
        let result = null;

        await axios.get(BaseApi.baseUrl + `users/dokter/${id}`)
            .then((response) => {
                // console.log(response);
                result = response.data;
            })
            .catch((error) => {
                result = error.response.data;
            })
        // console.log("result: ", result);
        return result
    }

    static async GetAllUsers() {
        let result = null;

        await axios.get(BaseApi.baseUrl + 'users?role=pasien')
            .then((response) => {
                // console.log(response);
                result = response.data;
            })
            .catch((error) => {
                result = error.response.data;
            })
        // console.log("result: ", result);
        return result
    }
}

export { BaseApi }