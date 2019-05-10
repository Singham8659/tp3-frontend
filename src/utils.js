
const isToday = d => {
	console.log(d);
	const today = new Date();
	
	return d.getDate() === today.getDate() 
		&& d.getMonth() === today.getMonth()
		&& d.getYear() === today.getYear();
};

const formatDate = d => {
	const day = d.getDate();
	const month = d.getMonth() + 1;
	const year = d.getYear() + 1900;
	
	const hour = d.getHours();
	const min = d.getMinutes();
	
	return `${day}/${month < 10 ? '0' + month : month}/${year} ${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min}`;
};

const contains = (arr, v) => {
	for(const curr of arr){
		if( curr === v )
			return true;
	}
	
	return false;
}

export {isToday, formatDate, contains};
