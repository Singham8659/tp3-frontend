import React from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {withStyles} from '@material-ui/core/styles';
// import {DateTimePicker} from "@material-ui/pickers";

const styles = theme => ({
	
});

const Pad = () => <div style={{marginTop: 8}} />;

class TaskDialog extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		const {open, onClose, task, onSave} = this.props;
		
		return (
			<Dialog {...{open, onClose}}>
				<DialogTitle>Task</DialogTitle>
				
				<DialogContent>
					<TextField label="Name" fullWidth />
					<Pad />
					
					<TextField label="Description" fullWidth />
					<Pad />
					
					{/*
					<DateTimePicker label="Start Time" fullWidth />
					<Pad />
					
					<DateTimePicker label="End Time" fullWidth />
					<Pad />
					*/}
				</DialogContent>
				
				<DialogActions>
					<Button onClick={onClose}>Close</Button>
					<Button color="primary" variant="contained" onClick={onSave}>Save</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

export default withStyles(styles)(TaskDialog);