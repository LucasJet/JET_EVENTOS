import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { useAuth } from '../../hooks/AuthContext';
import { FiLogOut } from 'react-icons/fi';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const history = useHistory();
  const { signOut } = useAuth();
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} style={{justifyContent:'center', display: 'flex'}}/>
          </Link>
          <div id="title">SISTEMA DE GESTÃO FINANCEIRA PESSOAL</div>
          <button id="logout"
                onClick={() => {
                    signOut();
                    history.push('/')
                }}
            >
                <FiLogOut size={28} style={{ color: "#fff" }} />
            </button>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
