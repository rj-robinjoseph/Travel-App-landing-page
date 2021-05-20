import './App.css';
import logo from './logo.png'
import menu from './menu.png'

function App() {
  return (
    <div className="container">
            <div className="navbar">
                <img src={logo} alt="" className="logo" />
                <nav>
                    <ul>
                        <li><a href="##">HOME</a></li>
                        <li><a href="##">REGION</a></li>
                        <li><a href="##">ABOUT</a></li>
                    </ul>
                </nav>
                <img src={menu} alt="" className="menu-icon" />
            </div>

            <div className="row">
                <div className="col">
                    <h1>Sahara</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, iste odit tempora laboriosam magni assumenda blanditiis laudantium voluptatum modi doloremque doloribus quisquam veritatis possimus fugit expedita? Id fuga molestias quae!</p>
                <button type="button">Explore</button>
                </div>
                <div className="col">
                    <div className="card card1">
                        <h5>Western Desert</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="card card2">
                        <h5>AI Bagawat</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="card card3">
                        <h5>Pyramid of Giza</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="card card4">
                        <h5>Kalahari Desert</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default App;
