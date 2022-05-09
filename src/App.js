import ChangeLanguage from './components/ChangeLanguage';
import CountryDetail from './components/CountryDetail';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className='app-container'>
      <SearchBar />
      {/* <ChangeLanguage /> */}
      <CountryDetail />
    </div>
  );
}

export default App;
