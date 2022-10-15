import './App.css';
import Card from './components/card/Card';
import Header from './components/Header';
import Container from 'react-bootstrap/Container'


function App() {
  return (
    <Container className='text-center mt-4'>
     
      <Header/>
      <Card/>

    </Container >

  
  );
}

export default App;
