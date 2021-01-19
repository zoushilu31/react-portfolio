import React from 'react';
import './Navigation.css';

function Navigation(props) {
	const { pages = [], activePage, setActivePage } = props;

	return (
		<header>
			<nav>
				<ul className='main-nav'>
					<li
						className={`${
							activePage ===
								'homepage' &&
							'nav-active'
						}`}>
						<span
							onClick={() =>
								setActivePage(
									'homepage'
								)
							}>
							<a href='#'>
								Shilu's Portfolio
							</a>
						</span>
					</li>
					<li
						className={`${
							activePage ===
								'about' &&
							'nav-active'
						}`}>
						<span
							onClick={() =>
								setActivePage(
									'about'
								)
							}>
							<a href='#about'>
								About Me
							</a>
						</span>
					</li>
					<li
						className={`${
							activePage ===
								'project' &&
							'nav-active'
						}`}>
						<span
							onClick={() =>
								setActivePage(
									'project'
								)
							}>
							Portfolio
						</span>
					</li>
					<li
						className={`${
							activePage ===
								'contact' &&
							'nav-active'
						}`}>
						<span
							onClick={() =>
								setActivePage(
									'contact'
								)
							}>
							Contact
						</span>
					</li>
					<li
						className={`${
							activePage ===
								'resume' &&
							'nav-active'
						}`}>
						<span
							onClick={() =>
								setActivePage(
									'resume'
								)
							}>
							Resume
						</span>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navigation;
