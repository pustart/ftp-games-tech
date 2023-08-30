import withDefaultLayout from './layouts/Default/DefaultLayout';
import Banner from './components/modules/Banner/Banner';
import GameList from './components/modules/GameList/GameList';

function App() {
  return (
    <>
      <Banner />
      <GameList />
    </>
  );
}

export default withDefaultLayout(App, true);
