import "./App.css";
import emailjs from "emailjs-com";
import apiKeys from "./api.js";
import { Route, NavLink } from "react-router-dom";

// import Home from "./screens/Home/Home";

function App() {
  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("gmail", apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
      .then(
        (result) => {
          alert("Message Sent, I'll get back to you shortly", result.text);
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        }
      );
  };

  return (
    <div className="App">
      <div className="nav">
        <NavLink className="about-me" to="/about">
          About Me
        </NavLink>
      </div>

      <div className="crypto">
        <h1>
          <p>
            Cryptoinfo allows users too access current crypto currency
            information of the top coins as well as provide other relevant
            information relating to crypto currencies.
          </p>
          <a href="https://jmoreland08.github.io/Crypto-info/">
            <img
              src="https://i.imgur.com/beTGCEU.png"
              title="source: imgur.com"
            />
          </a>
          <br />
          <a href="https://github.com/jmoreland08/Crypto-info">Github Link</a>
          {/* <a href="https://jmoreland08.github.io/Crypto-info/">App Link</a> */}
        </h1>
      </div>

      <div className="recipe">
        <h1>
          <p>
            This app will be a tool for restaurant employees to check menu items
            for ingredients, search by allergies, and gluten friendly items
          </p>
          <a href="recipe-checker.netlify.app">
            <img
              src="https://i.imgur.com/KQClE3d.png"
              title="source: imgur.com"
            />
          </a>
          <br />
          <a href="https://github.com/jmoreland08/recipe-checker">
            Github Link
          </a>
          
          {/* <a href="recipe-checker.netlify.app">App Link</a> */}
        </h1>
      </div>

      <div className="coolab">
        <h1>
          <p>
            Collboreatery is community fed database for restaurants based price,
            location, and cuisine. After signing up users will have the ability
            to add their favorite restaurant recommendations. Users will also
            have the ability to edit current listings.
          </p>
          <a href="https://collaboreatery.netlify.app/">
            <img
              src="https://i.imgur.com/ITAVNgY.png"
              title="source: imgur.com"
            />
          </a>
          <br />
          <a href="https://github.com/jmoreland08/collaboreatery">
            Github Link
          </a>
          {/* <a href="https://collaboreatery.netlify.app/">App Link</a> */}
        </h1>
      </div>

      <div className="somm">
        <h1>
          {" "}
          <p>
            Through the use of this app users will have the ability to save
            tasting notes on on specific wines that they have tasted to the
            database. They will be able to add pictures of the label to the
            database as well. All of this information will be rendered via the
            front end on specific pages depending on what functionality they are
            trying to use at the moment. The app will access this database via
            user, wine, and tasting notes rails tables. The app will be styled
            using flexbox and grid along with using bootstrap for certain
            components.
          </p>
          <a href="https://sommsips.netlify.app/">
            <img
              src="https://i.imgur.com/tFbbjwK.png"
              title="source: imgur.com"
            />
          </a>
          <br />
          <a href="https://github.com/jmoreland08/sommsips">Github Link</a>
          {/* <a href="https://sommsips.netlify.app/">App Link</a> */}
        </h1>
      </div>

      <div className="contact-form">
        <form className="form" onSubmit={onSubmit}>
          <h1>Your Name:</h1>
          <input
            name="name"
            type="text"
            placeholder="name…"
            className="form__input"
          />
          <h1>Email:</h1>
          <input
            name="email"
            type="text"
            placeholder="Email…"
            className="form__input"
          />
          <h2>Your Message:</h2>
          <textarea
            name="message"
            type="text"
            placeholder="Your Message… "
            className="form__input-message"
          ></textarea>
          <br />
          <button className="form__input—button">Send Message</button>
        </form>
      </div>

      {/* <Route exact path='/'>
        <Home />
      </Route> */}
      <div className="footer">
        <a href="https://www.linkedin.com/in/jon-moreland">
          <img
            className="page-links"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD///9MTEz8/PyTk5PNzc339/c4ODjo6OhPT0+MjIzu7u6xsbERERGnp6fy8vIiIiLe3t6fn58+Pj5GRkaBgYF6enpfX1/R0dG6urqPj4/X19eZmZlmZmZZWVlkZGQuLi4xMTEZGRlycnK3t7fExMQnJycdHR0+1Fr0AAAFB0lEQVR4nO2daXeqMBCGQW8RcEG02kXa2lbo//+H17WKLJPKjFnO+3wup/Mck5BkksHzrwhHcTQdezYynkbxKLwW8sp62UB3mJ0ZZGGjYRDrjo6JOKg3nOgOjJFJjWES6Y6KlSi5NkwL3TExU6RlwwfdAQnwcGmY6o5GhPRsmLjWRA8Uya+hW4PMmehk6NJroszkYBjojkOQYG/oykymjnhnGOqOQpRwa5jpDkKUbGto/2qijYHvud1It83UG+kOQZiR5/JIuiP2XJ3PnIi8qe4QhJl6dm46qeO6HwAAACBB722ZbWaLt3fdgcjwcZG6GuZL3eGwsxxeJeb6bu0OPFUyjy6l47bMavycynfkDYK+H651x8ZCXQv9xYWdrOZfcD+q6g6vO0198MSz7gC78kQI+v5Md4gdae2EB+xOPy5pQf9Fd5CduJ7J1PKpO8oOfKgIWt0TR0qGNic/FMaZHXPdcd5MT03QX+gO9GbeFA3tPeyg8q7YkesO9GYyRUN7D1VtnDekZt32Gy4UDe3th+6Ppe+Khq+6A70dpYm371u8Q9y+g3Ei0R1mB9Re+VYfyuk73kjVZjUr3UF2I6ANe7pj7EZMCtr7uj/yQAgOv3RH2Blinf+oO77urFsFv3WHx8GgZWbjhOCW56Y+6EATPVK/UMztH2TOFC8Vv5Xl78EKn7PLQTUZWT1Va2K+mORpmuaTVyf1AAAAAAAAAACA+zL+Wc/n6+JHdxwyPC436anGU/j8Ejt2E3s+q+6vDx8Wwnd5e36/Hf9f/YMB9dz1ZY1lWtE70M+fZA0pGgzJ3GrZcNF6ZCAUvGZ1H8PKraqqo9j5x3sY/lAZvD0roVOsdzCkk7BHZA4myRtW8wWNpBJn5qUN100jaC2BQDZP2PBR4SRECf47j7KGc6XzOiXYO6Oo4effBflPYEka/iTU39TC/CtKGiq9Bmvg7YtyhvnrjYLM5yPkDIe3dMIDAed7Uc6wC5xH58005BxtDDVkvENuqiHfoVZTDX22NbGxhmzXOo01ZPsRzTXk+hHNNfSZduAMNmQ6YH43w2G6SsO/PWSTYf5d7He2p++bPyz6eTYY72DYL1cs+Fa8TsbVTOUNN5UqsZniszw3ysQN65papLj4ZznmKmzYrw/yS62YA8tiX9iwMT+o1Bk35hs2j4aPKs+zLDBEDdtq96jcI2eZuEka9ltT9Qrb/QFHASdJw/bKiyqFVThW+oKGAXHlZkUbcqQUBQ2pKYlCXpHj3pWgIbWELWhDjotJgobkKRK6mRpuSP7vpkuBthjSNSXp/LfZhnRJSboYgNmGdAHbfzCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEoYBhRP6Xhpug5HP0NWX6VhBHqehx1GsnWtc/SDzWi+j7n2vyfwuXiQYAAAAAAPfC9Ynd2KtUEnOMqefYl2oqRB5/IX6ziD3uIvWmMfLYatUaSugxVo02kYHvEfW2bCfbGrrdTMOtocBnTcwh9neGge4wBAn2hkJfUTKBiX8wZNlWNZH9ZvbeMOGor2geRfJryPo9DHM41M48ZhfoJIl9HD/Tc8qfpK411OJU/fQ3Q5S4Ndyci0lf5MBcemlMzlqXWb7AldlNfFm4vpzHDDP7VxqDrFwKvJKpDUdxNLVze2o8jeJRpdL5f2YjU4xtkVEnAAAAAElFTkSuQmCC"
          />
        </a>

        <a href="https://github.com/jmoreland08">
          <img
            className="page-links"
            src="data:image/png;base64,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"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
