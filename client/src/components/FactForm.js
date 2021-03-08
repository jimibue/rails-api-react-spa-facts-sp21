import {useState} from 'react'
const FactForm = (props) => {
    const {id, text: initText, username: initUsername, source: initSource} = props
    const [text, setText] = useState(initText ? initText: '' )
    const [username, setUsername] = useState(initUsername ? initUsername : '')
    const [source, setSource] = useState(initSource ? initSource : '')
     
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({text, source, username})
        if(id){
            console.log('update axios call here')
        } else {
            console.log('create call')
        }
    }
    return(
        <div className='form-container'>
          <h1>{id ? 'Edit' : 'New'}</h1>
          <form onSubmit={handleSubmit}>
               <p>Enter Fact</p>
               <input 
                 value={text} 
                 onChange={(e)=> setText(e.target.value)}
                />
               <p>Enter UserName</p>
               <input 
                 value={username} 
                 onChange={(e)=> setUsername(e.target.value)}
                />
              <p>Enter source</p>
               <input 
                 value={source} 
                 onChange={(e)=> setSource(e.target.value)}
                />
              <button>{id ? 'Update' : 'Create'}</button>
          </form>
        </div>
    )
}

export default FactForm