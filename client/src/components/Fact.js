import FactForm from "./FactForm"

const Fact = (props) =>{
    const {id, text, source, username, editFactClickHandler} = props
    return (

        <div className='fact-container'>
            <h1>id{id}: {text}</h1>
            <p>source: {source}</p>
            <p>{username}</p>
            <button onClick={()=> editFactClickHandler(id)}>edit</button>
            {/* <FactForm id={id} text={text} source={source} username={username}/> */}
        </div>
    )
}

export default Fact