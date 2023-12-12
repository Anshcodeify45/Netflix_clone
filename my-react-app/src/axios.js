import axios from "axios";


/*common url to make request to movie data base */
 const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3"
 });

 export default instance;