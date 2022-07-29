const multipleDataFormatting = (list) => {
	return list.reduce((accumulator, {full_name} , i) => {
		let toReturn = "";
		if (list.length - 2 === i) {
			toReturn = `${accumulator}${full_name}, and `;
		} else if (list.length - 1 !== i) {
			toReturn = `${accumulator}${full_name}, `;
		} else {
			toReturn = `${accumulator}${full_name}`;
		}
		return toReturn;
	}, "");
};

export default multipleDataFormatting;