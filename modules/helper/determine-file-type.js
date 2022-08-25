export const isImage = (fileType) => {
    return ['jpg','jpeg','png'].includes(fileType);
}

export const isAudio = (fileType) => {
    return fileType === "mp3";
}

export const isDocument = (fileType) => {
    return ['doc','docx','pdf'].includes(fileType);
}

export const isTextFile = (fileType) => {
    return fileType === "txt";
}

export const isSheet = (fileType) => {
    return ['csv','xls','xlsx'].includes(fileType);
}

export const isHTML = (fileType) => {
    return ['html','htm'].includes(fileType);
}