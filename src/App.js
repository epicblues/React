import {Header} from './Header'
import './App.css';

const pass = {
  name:'kms',
  age:40,
  description:'babo'
}


function App() {
  const kmsbabo = function()  {
    console.log(pass);
  }
  return (
    <div className="App">
      <Header title="kms" name="nagoonminsu" onclick={kmsbabo} pass={pass}/>
    </div>
  );
}


export default App;
