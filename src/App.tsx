import withDefaultLayout from './layouts/Default/DefaultLayout';
import Banner from './components/modules/Banner/Banner';
import GameList from './components/modules/GameList/GameList';
import GameBanner from './components/modules/GameBanner/GameBanner';

function App() {
  return (
    <>
      <GameBanner/>
      {/* <Banner />
      <GameList /> */}
    </>
  );
}

export default withDefaultLayout(App, true);
