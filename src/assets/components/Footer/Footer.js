import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<footer>
			<ul>
				<li className='footer-li'>
					<a
						className='footer-link'
						href='https://github.com/shiluzou31'
						target='_blank'>
						Github
					</a>
				</li>
				<li className='footer-li'>
					<a
						className='footer-link'
						href='https://www.linkedin.com/in/zoushilu'
						target='_blank'>
						LinkedIn
					</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
