import React from 'react';
import {connect} from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import BackIcon from '@material-ui/icons/ChevronLeft';
import DeleteIcon from '@material-ui/icons/Delete';

import css from './index.module.css';

import {removeTasks} from '../../store/actions';
import {formatDate, contains} from '../../utils';
import TaskDialog from './TaskDialog';

const orderByDate = (a, b) => b.start.getTime() - a.start.getTime();

const styles = theme => ({
	fab: {
		position: 'fixed',
		bottom: 20,
		right: 20,
	}
});

class TasksPage extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			checked: [],
			dialogOpen: false,
		};
	}
	
	render(){
		const {tasks, classes} = this.props;
		
		return (
			<div className={css.root}>
				<div className={classes.fab}>
					<Fab color="primary" onClick={() => this.setDialogVisible(true)}><AddIcon /></Fab>
				</div>
				
				<TaskDialog open={this.state.dialogOpen} onClose={() => this.setDialogVisible(false)} />
				
				<AppBar>
					<Toolbar>
						<IconButton color="inherit" onClick={() => this.handleGoHome()}><BackIcon /></IconButton>
						<Typography variant="h6" color="inherit" className={css.grow}>Tasks</Typography>
					</Toolbar>
				</AppBar>
				
				<div className={css.container}>
					<Typography variant="display3">All Tasks</Typography>
					
					<div style={{textAlign: 'right'}}>
						<IconButton disabled={this.state.checked.length === 0} onClick={() => this.handleRemove()}><DeleteIcon /></IconButton>
					</div>
					
					<Paper>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell></TableCell>
									<TableCell>Name</TableCell>
									<TableCell>Description</TableCell>
									<TableCell>Start</TableCell>
									<TableCell>End</TableCell>
								</TableRow>
							</TableHead>
							
							<TableBody>
							{tasks.slice(0).sort(orderByDate).map((task, i) => (
								<TableRow key={i} hover onClick={() => this.handleToggleRow(i)}>
									<TableCell padding="checkbox">
										<Checkbox checked={contains(this.state.checked, i)} />
									</TableCell>
									<TableCell>{task.name}</TableCell>
									<TableCell>{task.description}</TableCell>
									<TableCell>{formatDate(task.start)}</TableCell>
									<TableCell>{formatDate(task.end)}</TableCell>
								</TableRow>
							))}
							</TableBody>
						</Table>
					</Paper>
				</div>
			</div>
		);
	}
	
	handleToggleRow(i){
		if( contains(this.state.checked, i) ){
			this.setState({
				...this.state,
				checked: this.state.checked.filter(v => v !== i),
			});
		} else {
			this.setState({
				...this.state,
				checked: [...this.state.checked, i],
			});
		}
	}
	
	handleGoHome(){
		this.props.history.push('/');
	}
	
	handleRemove(){
		if( !window.confirm("Really delete this shit?") )
			return;
		
		this.props.dispatch(removeTasks(this.state.checked));
		
		this.setState({
			...this.state,
			checked: [],
		});
	}
	
	setDialogVisible(v){
		this.setState({
			...this.state,
			dialogOpen: v,
		});
	}
}

export default connect(state => ({
	tasks: state.tasks,
}))(withStyles(styles)(TasksPage));
