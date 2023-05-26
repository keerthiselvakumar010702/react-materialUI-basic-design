import logo from './logo.svg';
import './App.css';
import { Layouts } from './Components/Button';
import {Nav} from './Components/Nav'
import {Form} from './Components/Form';
import Image from './Components/Image';
function App() {
  return (
    <div className="App">
      <Nav />
      <div className='top'>
      <div className='image'>
        <Image />
      </div>
      <div className='form'>
      <Form />
      </div>
      </div>
   {/* <Layouts /> */}
    </div>
  );
}

export default App;
