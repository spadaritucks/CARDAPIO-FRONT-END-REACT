/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";


const API_URL = 'http://localhost:8080'


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createData = async (formdata: FormData) => {
    const response = await axios.post(API_URL + '/food', formdata)
    return response
}