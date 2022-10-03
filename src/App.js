import './App.css';
import Block from './components/Block';
import CinTr from './components/CinTr';
import Counter from './components/Counter';
import CounterProops from './components/CounterProops';
import Framework from './components/Framework';
import Greet from './components/Greet';
import IncDec from './components/IncDec';
import Table from './components/Table';
import Ucb from './components/Ucb';
import Umemo from './components/Umemo';
import Uref from './components/Uref';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Framework/>
      <CounterProops/>
      <Table/>
      <IncDec counter={0}/>
      <Umemo/>
      <Ucb/>
      <Uref/>
      <Greet name={'45'}/>
      <Block/>
      <CinTr/>
      
    </div>
  );
}

export default App;
