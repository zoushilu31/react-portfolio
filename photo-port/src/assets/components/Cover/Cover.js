import React from 'react';
import './Cover.css';

function Cover() {
	return (
		<section
			id='home'
			className='cover-photo'
			alt='cover photo of macbook'>
			<div className='cover-text-box'>
				<h1>
					Hello! I'm Shilu 
					<br />
					Welcome to my page!
				</h1>
				<a className='btn' href='#about'>
					Learn more
				</a>
			</div>
		</section>
	);
}

export default Cover;
