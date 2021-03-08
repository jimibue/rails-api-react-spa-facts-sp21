import {useState} from 'react'
const FactForm = (props) => {
    const [text, setText] = useState('')
     
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submited')
        console.log(text)
    }
    return(
        <>
          <form onSubmit={handleSubmit}>
               <p>Enter Fact</p>
               <input 
                 value={text} 
                 onChange={(e)=> setText(e.target.value)}
                />
              <button>submit</button>
          </form>
        </>
    )
}

export default FactForm