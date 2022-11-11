import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import * as ContentMgtURL from "../urls/Routing";
import "./home.css";
import Button from "../components/button/button.js";
import BrandLoader from "../components/BrandLoader";
import avatar from "../assets/images/avatar.png";

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
          btnText="Get Repo"
        />
      </span>
      <nav>
        <p>Logo</p>
        <ul>
          <li>Home</li>
          <li>Repository</li>
          <li>Contact</li>
        </ul>
        <div className="user-profile"></div>
      </nav>
      <section className="landing-user">
        <div className="user-profile">
          <div className="user-pic">
            <img src={avatar} alt="img" />
          </div>
          <p className="user-name">bryhim4code</p>
          <p className="user-bio">A web Developer, ready to work</p>
        </div>
      </section>
      
      {loading ? (
        <BrandLoader />
      ) : (
        <div className="user-wrapper">
          {userData.map((repo) => {
            return (
              <div className="main" key={repo.owner.id}>
                <div className="user-profile">
                  <p className="user-name">{repo.owner.login} </p>
                </div>
                <Link className="user-repo" to={repo.svn_url} >{repo.html_url}</Link>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};

export default Home;
