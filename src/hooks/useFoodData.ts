/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";


const API_URL = 'http://localhost:8080'

export const fetchData = async () => {
    const response = await axios.get(API_URL + '/food')
    return response.data
}



