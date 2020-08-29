import axios from "axios";

const axiosQuotes = axios.create({
    baseURL: 'https://quotes-c7f07.firebaseio.com/'
});

export default axiosQuotes;