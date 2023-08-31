import withDefaultLayout from './layouts/Default/DefaultLayout';
import Banner from './components/modules/Banner/Banner';
import GameList from './components/modules/GameList/GameList';
import GameBanner from './components/modules/GameBanner/GameBanner';
import SectionSeparator from './components/elements/SectionSeparator/SectionSeparator';
import AddInfo from './components/modules/AddInfo/AddInfo';
import SystemReq from './components/modules/SystemReq/SystemReq';

function App() {
  return (
    <>
      <GameBanner/>
      <SectionSeparator title="Additional information"/>
        <AddInfo/>
      <SectionSeparator/>

      <SectionSeparator title="Minimum System Requirements" />
        <SystemReq/>
      <SectionSeparator/>
      {/* <Banner />
      <GameList /> */}
    </>
  );
}

export default withDefaultLayout(App, true);
