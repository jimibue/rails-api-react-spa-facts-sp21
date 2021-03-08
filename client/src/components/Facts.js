import {useEffect, useState} from 'react'
import axios from 'axios'

const Facts = () => {
    useEffect(()=>{
        getFacts()
    },[])

    const getFacts = async()=>{
        try{
          let res = await axios.get('/api/facts')
          console.log(res)
        }catch(err) {
            console.log(err)
            alert('error, check console')
        }
    }
    return (
        <>
          <h1>Facts Here</h1>
        </>
    )
}

export default Facts