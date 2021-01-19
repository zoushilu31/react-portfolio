import React from 'react';
import './About.css';
import headshot from '../../images/headshot.jpg';

function About() {
	return (
		<section id='about'>
			<h2 className='section-title'>About Me</h2>
			<img
				src={headshot}
				alt='Headshot'
				className='headshot'
			/>
			<h4 className='section-text'>
				Full Stack Web Developer
				<br />
				Experienced in JavaScript,
				HTML, and CSS. 
				<br />
				Email and Web development
			</h4>
		</section>
	);
}

export default About;
