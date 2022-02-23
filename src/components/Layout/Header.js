import React, { Fragment } from "react";
import classes from "./Header.module.css";
import image from "../../assets/Meal.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Ordering</h1>
        <HeaderCartButton onClick={props.onShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="A table full of delicious food"></img>
      </div>
    </Fragment>
  );
};

export default Header;
