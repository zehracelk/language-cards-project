import './App.css';
import {languages} from './helper/data';
import Card from './components/card/Card';
import {ReactComponent as ReactLogo} from './assets/react.svg';


function App() {
  return (
    <div className="App d-flex flex-column align-items-center ">

    <ReactLogo height={150} width={150}/>

     <div className="container row w-75 m-auto">
      <img src="{language-cards-project/src/assets/react.svg}" alt="" />
      {
        languages.map((item)=><Card img={item.img}/>)
      }
    </div>
    </div>
  );
}

export default App;
