import React from 'react';
import './Resume.css';

function Resume() {
	return (
		<section className='resume-section'>
			<div className='resume-container'>
				<h1>Resume</h1>
				<p>
					Download my<span> </span>
					<a
						href=''
						target='_blank'>
						resume
					</a>
				</p>
				<br />

				<h2>Front End</h2>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>React</li>
					<li>Bootstrap</li>
				</ul>
				<br />

				<h2>Back End</h2>
				<ul>
					<li>APIs</li>
					<li>Node</li>
					<li>Express</li>
					<li>MySQL, Sequelize</li>
					<li>MongoDB, Mongoose</li>
					<li>REST</li>
				</ul>
			</div>
		</section>
	);
}

export default Resume;
