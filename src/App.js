import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from './components/ThemeContext';
import ThemeToggler from './components/ThemeToggler';
import Counter from './components/Counter';
import Test123 from './components/Test123';
import UseMemoApp from './components/UseMemoApp';
import UseRefApp from './components/UseRefApp';
import ReduxCounter from './components/ReduxCounter';

function App() {
  return (
    // <Counter/>
    // <Test123/>
    // <UseMemoApp/>
    // <UseRefApp/>
    <ReduxCounter/>
  );
}

export default App;
