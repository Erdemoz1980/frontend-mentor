import Header from './components/Header';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='main-container'>
      <div className='container border'>
      <Header />
      <TechStack />
        <Footer />
        </div>
</div>
  )
}

export default App