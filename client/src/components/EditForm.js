import {useEffect, useState} from 'react'
import axios from 'axios'

import {useParams} from 'react-router-dom'
import FactForm from './FactForm'

const EditForm = () =>{
    useEffect(()=>{
        getFact()
    },[])

    

    const {id} = useParams()
    const [fact, setFact] = useState(null)

    const getFact = async ()=>{
        let res = await axios.get(`/api/facts/${id}`)
        console.log(res)
        setFact(res.data)
    }
    return (
        <>
        <p>Form</p>
         {/* This won't as far submiting */}
        {fact && <FactForm {...fact}/>}
        </>
    )
}
export default EditForm