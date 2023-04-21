import './tokens.css';
import './theme.light.css';
import './App.css';
import { Button } from './Button/Button.js';
import { Typography } from './Typography/Typography.js';

function App() {
  return (
    <div className="App">
      <Button>
        <Typography variant="labelLarge">Button</Typography>
      </Button>
      <Button fullWidth>
        <Typography variant="labelLarge">Button</Typography>
      </Button>
      <Button variant="outlined">
        <Typography variant="labelLarge">Enabled</Typography>
      </Button>
      <Button variant="filled">
        <Typography variant="labelLarge">Enabled</Typography>
      </Button>
      <Button variant>
        <Typography variant="labelLarge">Enabled</Typography>
      </Button>
      <Button variant="text">
        <Typography variant="labelLarge">Enabled</Typography>
      </Button>
      <Typography color="primary">This is "primary" text</Typography>
      <Typography color="primaryContainer">This is "primaryContainer" text</Typography>
      <div className="backgroundTest">
        <Typography color="onPrimary">This is "onPrimary" text</Typography>
      </div>
      <Typography color>This is basic text</Typography>
      <Typography variant="displayLarge">Welcome to the show</Typography>
      <Typography variant="displayMedium">Welcome to the show</Typography>
      <Typography variant="displaySmall">Welcome to the show</Typography>
      <Typography variant="headlineLarge">Welcome to the show</Typography>
      <Typography variant="headlineMedium">Welcome to the show</Typography>
      <Typography variant="headlineSmall">Welcome to the show</Typography>
      <Typography variant="titleLarge">Welcome to the show</Typography>
      <Typography variant="titleMedium">Welcome to the show</Typography>
      <Typography variant="titleSmall">Welcome to the show</Typography>
      <Typography variant="labelLarge">Welcome to the show</Typography>
      <Typography variant="labelMedium">Welcome to the show</Typography>
      <Typography variant="labelSmall">Welcome to the show</Typography>
    </div>
  );
}

export default App;
