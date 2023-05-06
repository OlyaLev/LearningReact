import './tokens.css';
import './theme.light.css';
import './App.css';
import { Button } from './Button/Button';
import { Typography } from './Typography/Typography';
import { Box } from './Box/Box';

function App() {
  return (
    <div className="App">
      <Box direction="column" ml="50px" mt="20px">
        <Typography>Filled buttons</Typography>
        <Box direction="column" width="100%">
          <Box
            direction="row"
            justifyContent="spaceBetween"
            alignItems="center"
            mt="20px"
            mr="200px"
            width="650px"
          >
            <Button variant="filled">Button</Button>
            <Button variant="filled">Button</Button>
            <Button variant="filled">Button</Button>
            <Button variant="filled">Button</Button>
            <Button variant="filled">Button</Button>
          </Box>
          <Box
            direction="row"
            justifyContent="spaceBetween"
            alignItems="center"
            mt="20px"
            mb="40px"
            width="650px"
          >
            <Button variant="filled">Button</Button>
            <Button variant="filled">Button</Button>
            <Button variant="filled">Button</Button>
            <Button variant="filled">Button</Button>
            <Button variant="filled">Button</Button>
          </Box>
        </Box>
        <Typography>Outlined buttons</Typography>
        <Box direction="column">
          <Box
            direction="row"
            justifyContent="spaceBetween"
            alignItems="center"
            mt="20px"
            width="700px"
          >
            <Button variant="outlined">Enabled</Button>
            <Button variant="outlined">Enabled</Button>
            <Button variant="outlined">Enabled</Button>
            <Button variant="outlined">Enabled</Button>
            <Button variant="outlined">Enabled</Button>
          </Box>
          <Box
            direction="row"
            justifyContent="spaceBetween"
            alignItems="center"
            mt="20px"
            mb="40px"
            width="700px"
          >
            <Button variant="outlined">Enabled</Button>
            <Button variant="outlined">Enabled</Button>
            <Button variant="outlined">Enabled</Button>
            <Button variant="outlined">Enabled</Button>
            <Button variant="outlined">Enabled</Button>
          </Box>
        </Box>
        <Typography>Text buttons</Typography>
        <Box direction="column">
          <Box
            direction="row"
            justifyContent="spaceBetween"
            alignItems="center"
            mt="20px"
            width="700px"
          >
            <Button variant="text">Enabled</Button>
            <Button variant="text">Enabled</Button>
            <Button variant="text">Enabled</Button>
            <Button variant="text">Enabled</Button>
            <Button variant="text">Enabled</Button>
          </Box>
          <Box
            direction="row"
            justifyContent="spaceBetween"
            alignItems="center"
            mt="20px"
            mb="40px"
            width="700px"
          >
            <Button variant="text">Enabled</Button>
            <Button variant="text">Enabled</Button>
            <Button variant="text">Enabled</Button>
            <Button variant="text">Enabled</Button>
            <Button variant="text">Enabled</Button>
          </Box>
        </Box>
      </Box>
      <Button fullWidth>Button</Button>

      <Typography color="primary">This is "primary" text</Typography>
      <Typography color="primaryContainer">This is "primaryContainer" text</Typography>
      <div className="backgroundTest">
        <Typography color="onPrimary">This is "onPrimary" text</Typography>
      </div>
      <Typography>This is basic text</Typography>
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
