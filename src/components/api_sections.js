import axios from 'axios'

export const api_sections = axios.create({
    baseURL: "http://127.0.0.1:8000/sectionApi/",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    }
})