
const createTask = task => ({
	type: 'CREATE_TASK',
	task,
});

const updateTask = (id, task) => ({
	type: 'UPDATE_TASK',
	id, task,
});

const removeTask = id => ({
	type: 'REMOVE_TASK',
	id,
});

export {createTask, updateTask, removeTask};
