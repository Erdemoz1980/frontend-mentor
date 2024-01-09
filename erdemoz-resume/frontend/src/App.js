import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import CoverLetter from "./components/CoverLetter";


const App = () => {
  return (
    <div className="container">
      <CoverLetter />
      <Header />
      <MainPage />
    </div>
  )
}

export default App