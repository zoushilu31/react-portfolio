import React from 'react';
import './Porfolio.css';
import Project from '../Project/Project';
import activelyDistanced from '../../images/actively-distanced.png';
import noteTaker from '../../images/note-taker.png';
import budgetTracker from '../../images/budget-tracker.png';

function Portfolio(props) {
	return (
		<div className='portfolio-container'>
			<Project
				name='Actively Distanced'
				githubLink='https://github.com/'
				deployedLink='https://actively-distanced.herokuapp.com/'
				projectImage={activelyDistanced}></Project>
			<Project
				name='Budget Tracker'
				githubLink='https://github.com/'
				deployedLink=''
				projectImage={budgetTracker}></Project>
			<Project
				name='Note Taker'
				githubLink='https://github.com/'
				deployedLink=''
				projectImage={noteTaker}></Project>
		</div>
	);
}

export default Portfolio;
