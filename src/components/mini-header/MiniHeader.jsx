import React from 'react';
import c from './MiniHeader.module.css';
import {BiMenu} from 'react-icons/bi'
import miniHeaderLinks from '../../dummy-miniHeader.json'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


const MiniHeader = ({setIsSidebarActive}) => {
  return (
    <div className={c.miniHeader}>
      <button className={c.menu} onClick={() => {setIsSidebarActive(true)}}><BiMenu/>All</button>
    {
    miniHeaderLinks.map(el =>
      <Link className={c.miniHeaderLinks} to={el.linkUrl} key={uuidv4()}>{el.title}</Link>
    )
    }
    </div>
  )
}

export default MiniHeader