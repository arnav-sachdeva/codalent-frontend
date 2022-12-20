import './App.css';
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
     

      <Navbar/>
      <div className="home-page">
      <h1 className='home-page-title'>Beautiful analytics to grow smarter</h1>
      <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
     
      </div>

      <div className='home-buttons'>
      <a className='home-demo'><svg viewBox="0 0 512 512" width="15" title="play-circle">
  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z" />
</svg> Demo</a>
      <a className='home-signup'>Sign up</a>
      </div>

      <div className='macbook-parent'>
      <img className='macbook' src="./images/macbook.png" alt="macbook" />
      </div>
      
     
     
     
      
    </div>
  );
}

export default App;
