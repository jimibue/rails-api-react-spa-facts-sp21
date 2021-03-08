const Fact = (props) =>{
    const {id, text, source, username} = props
    return (
        <div className='fact-container'>
            <h1>id{id}: {text}</h1>
        </div>
    )
}

export default Fact