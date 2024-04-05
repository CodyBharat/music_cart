import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/PageNotFound.module.css"
const PageNotFound = () => {
  return (
    <div className={styles.PageNotFoundWrapper}>
      <img className={styles.pageNotFoundImg} src="https://res.cloudinary.com/dp7faudgz/image/upload/v1712326309/Bharat%27s%20Music%20Cart/error%20and%20access%20denied%20images/error_404_error_fywap2.png" />
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link className={styles.buttonpage} to="/">Go to Home Page</Link>
    </div>
  );
};

export default PageNotFound
