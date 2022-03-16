//import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import Container from './components/Container';
import SignInform from './components/SignInform';
import Footer from './components/FooterComponent';
function App(props) {
  const Record=[
    {
      "firstName":"Avinash",
      "lastName":"Dod",
      "Address":"kabir Marg",
      "mno":8989084940
    }
  ]
  return (
    <div>
    <HeaderComponent />
    <Container Details={Record} />
    <SignInform />
    <Footer />
    </div>
  );
}

export default App;
