import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/PageNotFound.module.css"
const AccessDenied = () => {
  return (
    <div className={styles.PageNotFoundWrapper}>
      <img className={styles.pageNotFoundImg} src="https://res.cloudinary.com/dp7faudgz/image/upload/v1712327732/Bharat%27s%20Music%20Cart/error%20and%20access%20denied%20images/Access_Denied_djy4hx.png" />
      <h1>403 Forbidden</h1>
      <p>To get Access Login or SignUp</p>
      <Link className="button-page" to="/login">
        <div className={styles.buttonpage} > 
          Login Now
        </div>
      </Link>
    </div>
  );
};

export default AccessDenied
