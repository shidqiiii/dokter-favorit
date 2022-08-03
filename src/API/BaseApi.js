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

    static async UserRegister(name, email, password, role, id_department) {
        let result = null;
        let payload = {
            name: name,
            email: email,
            password: password,
            role: role,
            id_department: id_department
        }

        if (role === "pasien") {
            delete payload.id_department
        }

        await axios.post(BaseApi.baseUrl + 'users/register', payload)
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

    static async CreateAppointment(start, end, id_department, id_doctor, id_pasien, catatan_keluhan, total) {
        let result = null;

        await axios.post(BaseApi.baseUrl + 'appoinments', {
            start: start,
            end: end,
            id_department: id_department,
            id_doctor: id_doctor,
            id_pasien: id_pasien,
            catatan_keluhan: catatan_keluhan,
            total: total
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

    static async GetAppointment(id_user) {
        let result = null;

        await axios.get(BaseApi.baseUrl + 'appoinments/', {
            id_user: id_user
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

    static async GetDetailAppointment(id) {
        let result = null;

        await axios.get(BaseApi.baseUrl + `appoinments/${id}`)
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