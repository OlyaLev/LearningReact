import './tokens.css';
import './theme.light.css';
import './App.css';
import { Box, Button, Divider, Icon, Tabs, Tab, Typography } from './material-design';

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
            <Button variant="filled">Hovered</Button>
            <Button variant="filled">Focused</Button>
            <Button variant="filled">Pressed</Button>
            <Button variant="filled">Disabled</Button>
          </Box>
          <Box
            direction="row"
            justifyContent="spaceBetween"
            alignItems="center"
            mt="20px"
            mb="40px"
            width="700px"
          >
            <Button variant="filled" startIcon={<Icon icon="add" />}>
              Enabled
            </Button>
            <Button variant="filled" startIcon={<Icon icon="add" />}>
              Hovered
            </Button>
            <Button variant="filled" startIcon={<Icon icon="add" />}>
              Focused
            </Button>
            <Button variant="filled" startIcon={<Icon icon="add" />}>
              Pressed
            </Button>
            <Button variant="filled" startIcon={<Icon icon="add" />}>
              Disabled
            </Button>
          </Box>
        </Box>
        <Typography>Outlined buttons</Typography>
        <Box direction="column">
          <Box
            direction="row"
            justifyContent="spaceBetween"
            alignItems="center"
            mt="20px"
            width="650px"
          >
            <Button variant="outlined">Enabled</Button>
            <Button variant="outlined">Hovered</Button>
            <Button variant="outlined">Focused</Button>
            <Button variant="outlined">Pressed</Button>
            <Button variant="outlined">Disabled</Button>
          </Box>
          <Box
            direction="row"
            justifyContent="spaceBetween"
            alignItems="center"
            mt="20px"
            mb="40px"
            width="700px"
          >
            <Button variant="outlined" startIcon={<Icon icon="add" />}>
              Enabled
            </Button>
            <Button variant="outlined" startIcon={<Icon icon="add" />}>
              Hovered
            </Button>
            <Button variant="outlined" startIcon={<Icon icon="add" />}>
              Focused
            </Button>
            <Button variant="outlined" startIcon={<Icon icon="add" />}>
              Pressed
            </Button>
            <Button variant="outlined" startIcon={<Icon icon="add" />}>
              Disabled
            </Button>
          </Box>
        </Box>
        <Typography>Text buttons</Typography>
        <Box direction="column">
          <Box
            direction="row"
            justifyContent="spaceBetween"
            alignItems="center"
            mt="20px"
            width="650px"
          >
            <Button variant="text">Enabled</Button>
            <Button variant="text">Hovered</Button>
            <Button variant="text">Focused</Button>
            <Button variant="text">Pressed</Button>
            <Button variant="text">Disabled</Button>
          </Box>
          <Box
            direction="row"
            justifyContent="spaceBetween"
            alignItems="center"
            mt="20px"
            mb="40px"
            width="700px"
          >
            <Button variant="text" startIcon={<Icon icon="add" />}>
              Enabled
            </Button>
            <Button variant="text" startIcon={<Icon icon="add" />}>
              Hovered
            </Button>
            <Button variant="text" startIcon={<Icon icon="add" />}>
              Focused
            </Button>
            <Button variant="text" startIcon={<Icon icon="add" />}>
              Pressed
            </Button>
            <Button variant="text" startIcon={<Icon icon="add" />}>
              Disabled
            </Button>
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
      <Box
        direction="row"
        justifyContent="spaceBetween"
        alignItems="center"
        mt="50px"
        ml="100px"
        width="800px"
      >
        <Icon icon="search" fontSize="50px"></Icon>
        <Icon icon="home" fontSize="50px"></Icon>
        <Icon icon="menu" fontSize="50px"></Icon>
        <Icon icon="close" fontSize="50px"></Icon>
        <Icon icon="settings" fontSize="50px"></Icon>
        <Icon icon="done" fontSize="50px"></Icon>
        <Icon icon="expand_more" fontSize="50px"></Icon>
      </Box>
      <Box
        direction="row"
        justifyContent="spaceBetween"
        alignItems="center"
        mt="50px"
        ml="100px"
        width="800px"
      >
        <Icon icon="check_circle" fontSize="50px"></Icon>
        <Icon icon="favorite" fontSize="50px"></Icon>
        <Icon icon="add" fontSize="50px"></Icon>
        <Icon icon="delete" fontSize="50px"></Icon>
        <Icon icon="star" fontSize="50px"></Icon>
        <Icon icon="arrow_back" fontSize="50px"></Icon>
        <Icon icon="chevron_right" fontSize="50px"></Icon>
      </Box>
      <Tabs>
        <Tab label="Visibility" selected tabIcon={<Icon icon="visibility" />}></Tab>
        <Tab label="Visibility Off" tabIcon={<Icon icon="visibility_off" />}></Tab>
        <Tab label="Language" selected tabIcon={<Icon icon="language" />}></Tab>
        <Tab label="Settings" tabIcon={<Icon icon="settings" />}></Tab>
        <Tab label="Favorite" selected></Tab>
        <Tab label="Delete"></Tab>
      </Tabs>
      <Divider></Divider>
      <Tabs>
        <Tab label="Visibility" selected tabIcon={<Icon icon="visibility" />}></Tab>
        <Tab label="Visibility Off" tabIcon={<Icon icon="visibility_off" />}></Tab>
        <Tab label="Language" selected tabIcon={<Icon icon="language" />}></Tab>
        <Tab label="Settings" tabIcon={<Icon icon="settings" />}></Tab>
        <Tab label="Favorite" selected tabIcon={<Icon icon="favorite" />}></Tab>
        <Tab label="Delete" tabIcon={<Icon icon="delete" />}></Tab>
      </Tabs>
      <Divider></Divider>
    </div>
  );
}

export default App;
