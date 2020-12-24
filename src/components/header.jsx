import React from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import './header.css';

const Header = (props) => {
			

	return (
		<header className="header">
			<i className="youtube-icon fab fa-youtube"></i>
			<span className="header-name">Youtube</span>
			<input type="text" className="header-search" placeholder="Search.."/>
			<button className="search-btn">
				<i className="search-icon fas fa-search"></i>
			</button>
		</header>
	)
};

export default Header;