
const defaultState = {
	tasks: [],
};

export default (state = defaultState, action) => {
	switch(action.type){
		case 'CREATE_TASK':
			return {
				...state,
				tasks: [
					...state.tasks,
					action.task,
				]
			};
		
		case 'UPDATE_TASK':
			return {
				...state,
				tasks: state.tasks.map((v, i) => (i === action.id) ? action.task : v),
			};
		
		case 'REMOVE_TASK':
			return {
				...state,
				tasks: state.tasks.filter((v, i) => i !== action.id),
			};
		
		default:
			return state;
	}
}