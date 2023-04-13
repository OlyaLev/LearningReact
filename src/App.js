import './App.css';
import { Button } from './Button/Button.js';

function App() {
  return (
    <div className="App">
      <Button>Button</Button>
      <Button fullWidth>Button</Button>
      <Button variant="outlined">Enabled</Button>
      <Button variant="filled">Enabled</Button>
      <Button variant>Enabled</Button>
    </div>
  );
}

export default App;
