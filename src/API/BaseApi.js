import axios from "axios";

class BaseApi {
    static baseUrl = "https://dokter-favorit.herokuapp.com/";

    static async Login(email, password) {
        let result = null;

        await axios.post(BaseApi.baseUrl + 'auth/logIn', {
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

    static async allDepartement() {
        let result = null;

        await axios.get(BaseApi.baseUrl + 'dept/')
            .then((response) => {
                // console.log(response);
                result = response.data;
            })
            .catch((error) => {
                console.log(error);
            })
        // console.log(result);
        return result
    }
}

export { BaseApi }