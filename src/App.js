// import logo from './logo.svg';
// import './App.css';
// import { Link } from "react-router-dom";
import logo from "./images/logo.svg";
import illustration from "./images/illustration-working.svg";
function App() {
  return (
    <div className="App">
      <header>
        <div>
          <img src={logo} alt="Shortly Logo" />
        </div>
        <nav>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
            <li>Login</li>
            <li>Sign Up</li>
          </ul>
        </nav>
      </header>

      <main>
        <div>
          <div>
            <img src={illustration} alt="Working illustration" />
          </div>
          <section>
            <h1>More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <div>
              <button>Get Started</button>
            </div>
          </section>
        </div>

        <div>
          <form>
            <input type="text" placeholder="Shorten a link here..." />
            <button>Shorten It!</button>
          </form>
        </div>

        <section>
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
          <div className="card-container">
            <div className="card card-1">
              <div>
                <img src="" alt="" />
              </div>
              <h2>Brand Recognition</h2>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
            <div className="card card-2">
              <div>
                <img src="" alt="" />
              </div>
              <h2>Detailed Records</h2>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
            <div className="card card-3">
              <div>
                <img src="" alt="" />
              </div>
              <h2>Fully Customizable</h2>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Boost your links today</h2>
          <button>Get Started</button>
        </section>

        <div className="footer">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <h3>Features</h3>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
