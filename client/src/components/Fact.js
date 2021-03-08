import { Link } from "react-router-dom"
import FactForm from "./FactForm"

const Fact = (props) =>{
    const {id, text, source, username, editFactClickHandler} = props
    return (

        <div className='fact-container'>
            <h1>id{id}: {text}</h1>
            <p>source: {source}</p>
            <p>{username}</p>
            <button onClick={()=> editFactClickHandler(id)}>edit</button>
            <Link to={`facts/${id}`}>
                edit with react router
            </Link>
            
            {/* <FactForm id={id} text={text} source={source} username={username}/> */}
        </div>
    )
}

export default Fact