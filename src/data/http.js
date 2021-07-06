import axios from "axios";

export default axios.create({
    baseURL: "http://35.198.170.4/api",
    headers: {
        "Content-type": "application/json"
    }
});