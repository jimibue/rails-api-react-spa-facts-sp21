import Fact from './Fact'


const Facts = (props) => {
    const {facts} = props
   
    const renderFacts = () => {
        return facts.map( fact => <Fact key={fact.id} {...fact}/>)
    }
    return (
        <>
          <h1>Facts Here</h1>
    
          {renderFacts()}
        </>
    )
}

export default Facts