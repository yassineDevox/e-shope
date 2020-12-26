import axios from "axios";
//la partie provider qui se repete pour chaque requete http 
export default axios.create({
    baseURL:'https://e-shop-project-8e107-default-rtdb.firebaseio.com'
})

