import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from './components/ThemeContext';
import ThemeToggler from './components/ThemeToggler';

function App() {
  return (
    <ThemeProvider>
      <ThemeToggler></ThemeToggler>
    </ThemeProvider>
  );
}

export default App;
