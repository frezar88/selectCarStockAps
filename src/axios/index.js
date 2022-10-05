import axios from "axios";



const $host = axios.create({
    baseURL:'https://stock.aps.by'
    // baseURL:'/'
})



export {
    $host,
}