import axios from "axios"

const fetchMockup =  () => async dispatch=>{
    dispatch({
        type:"FETCH_MCKUP",
        payload:[]
    })
    try{
     let {data} = await axios.get("https://628bc9847886bbbb37bf311d.mockapi.io/users")
          dispatch({
            type:"MCKUP_SUCCESS",
            payload:[...data]
        })

    }catch(err){
        dispatch({
            type:"MCKUP_FAILED",
            payload:[]
        })
    }

}

const deltemockup = (id)=> async dispatch=>{
    dispatch({
        type:"DELETING_MCKUP",
        payload:[]
    })
    try{
     let {data} = await axios.delete(`https://628bc9847886bbbb37bf311d.mockapi.io/users/${id}`)
     let {data:updatedData} = await axios.get("https://628bc9847886bbbb37bf311d.mockapi.io/users")

          dispatch({
            type:"DELETED_MCKUP_SUCESS",
            payload:[...updatedData]
        })

    }catch(err){
        dispatch({
            type:"DELETED_MCKUP_FAILED",
            payload:[]
        })
    }

}


const updateMockup = (id,name)=> async dispatch=>{
    dispatch({
        type:"UPDATING_MCKUP",
        payload:[]
    })
    try{
     let data = await axios.put(`https://628bc9847886bbbb37bf311d.mockapi.io/users/${id}`,{name})
     let {data:updated} = await axios.get(`https://628bc9847886bbbb37bf311d.mockapi.io/users`)
          dispatch({
            type:"UPDATE_MCKUP_SUCESS",
            payload:[...updated]
        })

    }catch(err){
        dispatch({
            type:"UPDATE_MCKUP_FAILED",
            payload:[]
        })
    }

}

const createMockup =(name)=> async dispatch=>{
    dispatch({
        type:"CREATE_USER",
        payload:[]
    })
    try{
        const {data}=await axios.post(`https://628bc9847886bbbb37bf311d.mockapi.io/users`,{name})
        const {data:updated}=await axios.get(`https://628bc9847886bbbb37bf311d.mockapi.io/users`)
        dispatch({
            type:"CREATE_USER_SUCCESS",
            payload:[...updated]
        })
    }catch(err){
        dispatch({
            type:"CREATE_USER_FAILED",
            payload:[]
        })
        
    }

}

const ReduxAction = {
    fetchMockup , deltemockup , updateMockup,createMockup
}

export default ReduxAction