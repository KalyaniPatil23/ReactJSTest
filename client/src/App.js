import './App.css';
import Drug from './Components/Drug';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
function App() {
  return (
    <>
    <Header data={['Drug', 'Calculators', 'Articles', 'News', 'Quizzes', 'Surveys', 'Webinars', 'Guidelines']}/>
    <Drug/>
    <Footer/>
    </>
  );
}

export default App;
