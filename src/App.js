import './tokens.css';
import './theme.light.css';
import './App.css';
import { Button } from './Button/Button.js';
import { Typography } from './Typogtaphy/Typography.js';

function App() {
  return (
    <div className="App">
      <Button>Button</Button>
      <Button fullWidth>Button</Button>
      <Button variant="outlined">Enabled</Button>
      <Button variant="filled">Enabled</Button>
      <Button variant>Enabled</Button>
      <Button variant="text">Enabled</Button>
      <Typography color="primary">This is "primary" text</Typography>
      <Typography color="primaryContainer">This is "primaryContainer" text</Typography>
      <Typography color="onPrimary">This is "onPrimary" text</Typography>
      <Typography color>This is basic text</Typography>
    </div>
  );
}

export default App;
