import axios from "axios";
import moment from "moment";

class BaseApi {
    static baseUrl = "https://dokter-favorit-web-app.herokuapp.com/";
    // static baseUrl = "http://localhost:4200/";

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

    static async CreateAppointment(date, duration, id_department, id_doctor, id_pasien, catatan_keluhan, total) {
        let result = null;

        let start = moment(date).toISOString();
        let end = moment(start).add(duration, 'hours').toISOString();

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

    static async GetAppointment(id) {
        let result = null;

        await axios.get(BaseApi.baseUrl + `appoinments/?id_user=${id}`)
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

    static async CreatePayment(payment_type, bank, id_appointment, total) {
        let result = null;

        await axios.post(BaseApi.baseUrl + 'payments', {
            payment_type: payment_type,
            bank_transfer: {
                bank: bank
            },
            id_appointment: id_appointment,
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

    static async GetDetailPayment(id) {
        let result = null;

        await axios.get(BaseApi.baseUrl + `payments/${id}`)
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