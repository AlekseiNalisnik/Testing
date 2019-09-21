const getSliced = (data, count) => {
    if(count === -5) {
        throw new Error('some error');
    }

    if(count < 0) {
        return [];
    }

   return data.slice(0, count);
};

const encode = (str) => {
    str = str.toLowerCase();
    let arr = str.split('');
    let strReturn = '';
    arr.forEach((item, index) => {
        let buffer = arr[index];
        delete arr[index];
        if(arr.includes(item) == true) strReturn += ')';
        else strReturn += '(';
        arr[index] = buffer;
    });
    return strReturn;
};

module.exports = {
    getSliced, encode
};
