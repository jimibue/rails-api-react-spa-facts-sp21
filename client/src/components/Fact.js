import FactForm from "./FactForm"

const Fact = (props) =>{
    const {id, text, source, username} = props
    return (

        <div className='fact-container'>
            <h1>id{id}: {text}</h1>
            {/* <FactForm id={id} text={text} source={source} username={username}/> */}
        </div>
    )
}

export default Fact