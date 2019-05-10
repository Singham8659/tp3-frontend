import React from 'react';

import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { withStyles } from '@material-ui/core/styles';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {formatDate} from '../../utils';

const styles = theme => ({
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '33.33%',
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
});

class Task extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			expanded: false,
		};
	}
	
	render(){
		const {expanded} = this.state;
		const {task, classes} = this.props;
		
		return (
			<ExpansionPanel expanded={expanded} onChange={(e, expanded) => this.handleChange(e, expanded)}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>{task.name}</Typography>
					<Typography className={classes.secondaryHeading}>{formatDate(task.start)}</Typography>
				</ExpansionPanelSummary>
				
				<ExpansionPanelDetails>
					<Typography>
						{task.description}
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		);
	}
	
	handleChange(e, expanded){
		this.setState({
			...this.state,
			expanded,
		})
	}
}

export default withStyles(styles)(Task);
