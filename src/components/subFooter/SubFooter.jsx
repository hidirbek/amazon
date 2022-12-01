import React from "react";
import subFooterElements from "../../dummy-SubFooter.json";
import c from "../subFooter/SubFooter.module.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const SubFooter = () => {
  return (
    <div className={c.sub_footer}>
      {subFooterElements.map((el) => (
        <Link to={el.linkURL} key={uuidv4()} className={c.subfooter_item}>
          <p className={c.subfooter__item_title}>{el.title}</p>
          <p className={c.subfooter__item_subtitle}>{el.subtitle}</p>
        </Link>
      ))}
    </div>
  );
};

export default SubFooter;
