import axios from "axios";

const getData =async ()=>{
let {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
return data
}
const getData1 =async (pageNo:any)=>{
    let {data} = await axios.get("https://reqres.in/api/users?page=" +pageNo)
    return data
    }

export {getData,getData1};