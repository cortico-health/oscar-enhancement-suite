export const multipleObjectDataFormatting = (list,toExtract = "full_name") => {
    if (!list) return "";

    return list.reduce((accumulator,data,i) => {
        let toReturn = "";
        if (list.length - 2 === i) {
            toReturn = `${accumulator}${data[toExtract]}, and `;
        } else if (list.length - 1 !== i) {
            toReturn = `${accumulator}${data[toExtract]}, `;
        } else {
            toReturn = `${accumulator}${data[toExtract]}`;
        }
        return toReturn;
    },"");
};

export const multipleDataFormatting = (list) => {
    if (!list) return "";

    return list.reduce((accumulator,data,i) => {
        let toReturn = "";
        if (list.length - 2 === i) {
            toReturn = `${accumulator}${data}, and `;
        } else if (list.length - 1 !== i) {
            toReturn = `${accumulator}${data}, `;
        } else {
            toReturn = `${accumulator}${data}`;
        }
        return toReturn;
    },"");
};