import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import * as ContentMgtURL from "../urls/Routing";
import "./home.css";
import Button from "../components/button/button.js";
import BrandLoader from "../components/BrandLoader";
// import avatar from "../assets/images/avatar.png";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);

  const url = "https://api.github.com/users/bryhim4code/repos";

  const getUserRepo = () => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      })
      .finally(() => {
        setLoading(false);
        setActiveUser(true);
      });
  };

  // const navigator = useNavigate();
  // const handleClick = () => {
  //   navigator(`${ContentMgtURL.LANDING_ROUTE}/repositories`);
  // };
  return (
    <div className="container">
      <span>
        <Button
          clickHandler={getUserRepo}
          isActive={activeUser}
          btnText="Explore"
        />
      </span>
      <nav className="navbar">
      <div className="logo">
        <h1 className="nav-name">bryhim</h1>

        {/* <div class="loader">
    <span>bryhim</span>
    <span>bryhim</span>
</div> */}
      </div>
      {/* <ul className='nav--ul'>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>About</a>
          </li>
          <li>
            <a href=''>Blog</a>
          </li>
        </ul> */}

      {/*       
        <div class='button'>
          <div class='box'>B</div>
          <div class='box'>I</div>
          <div class='box'>K</div>
          <div class='box'>E</div>
          <div class='box'>S</div>
        </div> */}
      {/* <h1 className='login'>Login</h1> */}
      <label for="check" class="bar">
        <input id="check" type="checkbox" />
        <span class="top"></span>
        <span class="middle"></span>
        <span class="bottom"></span>
      </label>
    </nav>
      <section className="landing-user">
        <div className="userprofile">
          {/* <div className="user-pic">
            <img src={avatar} alt="img" />
          </div> */}
          <h1 className="header-text"> 
           Hey, I'm Bryhim  <br /> I create <span className="span-p">captivating </span><br />
          designs & products.
          </h1>
          {/* <p className="user-name">#bryhim4code</p>
          <p className="user-bio">A web Developer, ready to work</p> */}
        </div>
      </section>
      
      {loading ? (
        <BrandLoader />
      ) : (
        <div className="user-wrapper">
          {userData.map((repo) => {
            return (
              <div className="main" key={repo.owner.id}>
                <div class="box">
                <div className="user-profile">
                  {/* <p className="user-name">{repo.owner.login} </p> */}
                </div>
  <span></span>
  <div class="content">
                <Link className="user-repo my-link" to={repo.svn_url} >{repo.html_url}</Link>
    {/* <h2>Hover me!</h2> */}
  </div>
</div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};

export default Home;
