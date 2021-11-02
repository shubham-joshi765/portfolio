import logo from './logo.svg';
import './App.css';
import './Components/header/Header.css'
import './Components/footer/Footer.css'
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import Main from "./Components/Main";

function App() {
	return (
		<>
		<Header/>
		<Main/>
		<Footer/>
		</>
	);
}

export default App;