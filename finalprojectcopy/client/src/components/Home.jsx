import React from "react";
import { useEffect, useState, useContext } from "react";
import convo from "../images/convo.png";
import { UserContext } from "../App";

const Home = () => {
  const [userName, setUserName] = useState();
  const [show, setShow] = useState(false);
  const { state, dispatch } = useContext(UserContext);

  const userHome = async () => {
    if (!state) return;
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUserName(data.name);
      setShow(true);
      if (!res.status === 200) {
        const error = new Error(res.err);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    userHome();
  }, []);

  if (userName && state) {
    return (
      <div className="row">
        <div className="col-md-5">
          <img src={convo} alt="not found" />
        </div>
        <div>
          <div className="maintext">
            {" "}
            <h3>Hello {userName}! Welcome Back!! </h3>
            <a
              href="https://gorakhpur.nic.in/municipal-corporation/"
              target="_blank"
            >
              Click here for official site.
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <br />
      <div className="row">
        <div className="col-md-5">
          <img src={convo} alt="not found" />
        </div>
        <div>
          <div className="maintext">
            {" "}
            <h3>Please login to file a grievance</h3>
            <a
              href="https://gorakhpur.nic.in/municipal-corporation/"
              target="_blank"
            >
              Click here for official site.
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
