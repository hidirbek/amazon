import React from "react";
import c from "./Footer.module.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import footerElements from "../../dummy-footer.json";

const Footer = () => {
  const knowUs = footerElements.filter((el) => {
    if (el.listTitle.includes("Get to Know Us")) {
      return el;
    }
  });
  const makeMoney = footerElements.filter((el) => {
    if (el.listTitle.includes("Make Money with Us")) {
      return el;
    }
  });
  const paymentProducts = footerElements.filter((el) => {
    if (el.listTitle.includes("Amazon Payment Products")) {
      return el;
    }
  });
  const helpYou = footerElements.filter((el) => {
    if (el.listTitle.includes("Let Us Help You")) {
      return el;
    }
  });
  // console.log(knowUs);
  return (
    <div className={c.footer}>
      <div className={c.footerItemWrapper}>
        <p className={c.footerItemTitle}>Get to Know Us</p>
        {knowUs.map((el) => (
          <Link key={uuidv4()} to={el.linkURL} className={c.footerItem}>
            {el.title}
          </Link>
        ))}
      </div>
      <div className="c.footerItem">
        <p className={c.footerItemTitle}>Make Money with Us</p>
        {makeMoney.map((el) => (
          <Link key={uuidv4()} to={el.linkURL} className={c.footerItem}>
            {el.title}
          </Link>
        ))}
      </div>
      <div className="c.footerItem">
        <p className={c.footerItemTitle}>Amazon Payment Products</p>
        {paymentProducts.map((el) => (
          <Link key={uuidv4()} to={el.linkURL} className={c.footerItem}>
            {el.title}
          </Link>
        ))}
      </div>
      <div className="c.footerItem">
        <p className={c.footerItemTitle}>Let Us Help You</p>
        {helpYou.map((el) => (
          <Link key={uuidv4()} to={el.linkURL} className={c.footerItem}>
            {el.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
