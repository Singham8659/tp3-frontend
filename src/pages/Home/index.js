import React from 'react';
import {connect} from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Task from './Task';
import css from './index.module.css';
import {isToday} from '../../utils';

class HomePage extends React.Component {
	render(){
		return (
			<div className={css.root}>
				<AppBar>
					<Toolbar>
						<Typography variant="h6" color="inherit" className={css.grow}>Home</Typography>
						<Button color="inherit" variant="text" onClick={() => this.onGoTasks()}>All Tasks</Button>
					</Toolbar>
				</AppBar>
				
				<div className={css.container}>
					<Typography variant="display3">Today,</Typography>
					
					{this.renderTasks()}
				</div>
			</div>
		);
	}
	
	renderTasks(){
		return this.props.tasks
			.filter(task => isToday(task.start))
			.slice(0)
			.sort( (a, b) => b.start.getTime() - a.start.getTime() )
			.map((task, i) => <Task key={i} task={task} />)
	}
	
	onGoTasks(){
		this.props.history.push('/tasks');
	}
}

export default connect(state => ({
	tasks: state.tasks,
}))(HomePage);
