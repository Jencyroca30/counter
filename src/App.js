import {useState} from 'react'; 
import {Container, Row, Col, Button} from 'react-bootstrap';
import './App.scss';

function App() {

  const[count, setCount]=useState(0);
  const[positive, SetPositive]=useState(true); 

  return (

    <div className='counter'>
    <Container >
      <Row className='counter-conteiner-screen'>
        <Col>Counter:<span className={positive ? 'positive': 'negative'}>{count>-1? count : count*-1}</span></Col>
      </Row>
      <Row className='counter-conteiner-option'>
        <Col><Button onClick={()=>{
          setCount(count+1)
          if(!positive && count>-1){
            SetPositive(true)
          }
        }}>Increment</Button></Col>
        <Col><Button onClick={()=>{
          setCount(count-1)
          if(positive && count===0){
            SetPositive(false)
          }
        }}>Decrement</Button></Col> 
      </Row>
      </Container>
    </div>
   
  );
}

export default App;
