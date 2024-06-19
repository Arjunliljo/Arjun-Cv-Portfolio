import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import ContactNowBtn from "./Components/Utility/ContactNowBtn";
import Navigation from "./Components/Utility/Navigation";

function App() {
  return (
    <>
      <Header>
        <Navigation></Navigation>
      </Header>
      <Main></Main>
      <Footer>
        <ContactNowBtn>CO</ContactNowBtn>
      </Footer>
    </>
  );
}

export default App;
