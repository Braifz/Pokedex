import Header from './components/Header'
import Title from './components/Title'
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';



const App = () => {
  return (
    <div>
      <Header>
        <Title/> 
      </Header>
      <SearchBar />
      <Footer> Look for the pokemon you want :)</Footer>
    </div>
  );
}

export default App;
