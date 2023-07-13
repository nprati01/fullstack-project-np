
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FishForm from './components/Fish/FishForm';
import Fishs from './components/Fish';

function App() {
  return (
    <div className="App">
    <Header />
    <Fishs />

    <FishForm />
    <Footer />


    </div>
  );
}

export default App;
