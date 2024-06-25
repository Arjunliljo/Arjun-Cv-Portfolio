import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Navigation from "./Components/Utility/Navigation/Navigation";

function App() {
  return (
    <>
      <Header>
        <Navigation></Navigation>
      </Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
