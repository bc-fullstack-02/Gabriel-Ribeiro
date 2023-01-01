import axios from "axios";


export const myIP = "192.168.1.10" as string;

export default axios.create({
    baseURL:`http://${myIP}:3000`
})