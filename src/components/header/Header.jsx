import logo from '../../assets/images/logo.png';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import "./Header.css";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

function Header({setIsNavbarSearchActive}) {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState("all");
  const { i18n } = useTranslation();

  const langs = [
    "uz",
    "ru",
    "en"
  ]

  const changeWebsiteLang = (e) => {
    i18n.changeLanguage(e.target.value || "uz");
  }


  // console.log(localStorage.getItem("lang"));

  return (
    <header className="main-header">
      <div className="header__logo-wrapper">
        <a href="/" className="logo__link">
          <img className="header__logo" src={logo} alt="" />
        </a>
      </div>
      <div className="header__delivery-address">
        <HiOutlineLocationMarker className="address-icon" />
        <div className="delivery__location">
          <p>{t("delivery_label")}</p>
          <b>{t("country")}</b>
        </div>
      </div>
      <div className="header__search-wrapper">
        <select className="search__select" style={selectedOption.length <= 7 ? {width:`${selectedOption.length * 14}px`} : {width:`${selectedOption.length * 10}px`}} onChange={(e) => {setSelectedOption(e.target.value)}}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="personal care">Personal Care</option>
          <option value="toys & babies">Toys and Babies</option>
        </select>
        <input type="text" className="search__input" onBlur={() => {setIsNavbarSearchActive(false)}} onFocus={() => {setIsNavbarSearchActive(true)}}/>
        <button>
          <FiSearch />
        </button>
      </div>
      <select className='lang-select' onChange={changeWebsiteLang}>
       {
        langs.map(langItem =>
          <option className='lang' selected={localStorage.getItem("lang") === langItem ? true : false} key={uuidv4()} value={langItem}>{langItem.toUpperCase()}</option>
        )
       }
      </select>
    </header>
  );
}

export default Header;
