import '../tokens.css';
import '../theme.light.css';
import '../App.css';
import { Box, Button, Icon, Typography } from '../material-design';

export const ButtonsExamples = () => {
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
    </div>
  );
};
