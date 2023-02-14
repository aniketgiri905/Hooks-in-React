import logo from './logo.svg';
import './App.css';
import ClassCounter from './Components/ClassCounter';
import HookCounter from './Components/HookCounter';
import HookObject from './Components/HookObject';
import HookArray from './Components/HookArray';
import Demo from './Components/Demo';
import HookCounterOne from './Components/EffectHook/HookCounterOne';
import HookMouse from './Components/EffectHook/HookMouse';
import MouseContainer from './Components/EffectHook/MouseContainer';
import IntervalClassCounter from './Components/EffectHook/IntervalClassCounter';
import IntervalHookCounter from './Components/EffectHook/IntervalHookCounter';
import DataFetching from './Components/EffectHook/DataFetching';
import CounterOne from './Components/ReducerHook/CounterOne';
import CounterTwo from './Components/ReducerHook/CounterTwo';
import CounterThree from './Components/ReducerHook/CounterThree';
import DataFetchingOne from './Components/ReducerHook/DataFetchingOne';
import DataFetchingTwo from './Components/ReducerHook/DataFetchingTwo';
import CounterMemo from './Components/MemoHook/CounterMemo';
import FocusInput from './Components/RefHook/Focus';
import HookTimer from './Components/RefHook/hookTimer';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookObject/> */}
      {/* <HookArray/> */}
      {/* <Demo/> */}
      {/* <HookCounterOne/> */}

      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching/> */}
      <br />
      {/* <CounterThree/> */}

      {/* <DataFetchingTwo/> */}
      {/* <CounterMemo/> */}

      {/* <FocusInput/> */}
      <HookTimer/>
    </div>
  );
}

export default App;
