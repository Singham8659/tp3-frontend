
const loadState = () => {
	try {
		const json = localStorage.getItem('state');
		
		if( json ){
			const state = JSON.parse(json);
			
			for(let task of state.tasks){
				task.start = new Date(task.start);
				task.end = new Date(task.end);
			}
			
			return state;
		}
	} catch(e){
		console.error(e);
		return undefined;
	}
};

const saveState = state => {
	localStorage.setItem('state', JSON.stringify(state));
};

export {loadState, saveState};
