import withDefaultLayout from './layouts/Default/DefaultLayout';
import Banner from './components/modules/Banner/Banner';

function App() {
  return (
    <Banner/>
  );
}

export default withDefaultLayout(App, true);
