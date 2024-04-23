import Header from './components/Header';
import CepSearch from './components/CepSearch';

const App = () => {
  return (
    <main className="flex flex-col p-6 justify-center items-center">
      <Header />
      <CepSearch />
    </main>
  );
};

export default App;
