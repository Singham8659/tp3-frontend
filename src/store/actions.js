
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

const removeTasks = ids => ({
	type: 'REMOVE_TASKS',
	ids,
});

export {createTask, updateTask, removeTask, removeTasks};
