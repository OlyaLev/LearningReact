import '../tokens.css';
import '../theme.light.css';
import '../App.css';
import { Box, Icon } from '../material-design';

export const IconsExamples = () => {
  return (
    <div className="App">
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
    </div>
  );
};
