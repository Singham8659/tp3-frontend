
const loadState = () => {
	try {
		const json = localStorage.getItem('state');
		return json ? JSON.parse(json) : undefined;
	} catch(e){
		console.error(e);
		return undefined;
	}
};

const saveState = state => {
	localStorage.setItem('state', JSON.stringify(state));
};

export {loadState, saveState};
