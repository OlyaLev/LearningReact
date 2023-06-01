import '../tokens.css';
import '../theme.light.css';
import '../App.css';
import { Divider, Icon, Tabs, Tab } from '../material-design';

export const TabsExamples = () => {
  return (
    <div className="App">
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
};
