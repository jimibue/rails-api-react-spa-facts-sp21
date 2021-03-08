import Fact from './Fact'


const Facts = (props) => {
    const {facts, editFactClickHandler} = props
   
    const renderFacts = () => {
        return facts.map( fact => <Fact editFactClickHandler={editFactClickHandler} key={fact.id} {...fact}/>)
    }
    return (
        <>
          <h1>Facts Here</h1>
    
          {renderFacts()}
        </>
    )
}

export default Facts