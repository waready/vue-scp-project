import axios from "axios";

const http = axios.create({
    baseURL: "http://127.0.0.1:3333/api/v1/",
    headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: secureStorage.getItem("token")
    }
});

export default http;