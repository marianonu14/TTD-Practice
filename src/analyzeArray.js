function average(array){
    let num = 0;

    for(let i = 0; i < array.length ; i++){
        num += array[i];
    }

    return num/array.length;
}

function lengtho(array){
    return array.length;
}

function max(array){
    return Math.max(...array);
}

function min(array){
    return Math.min(...array);
}

const analyze = {
  average,
  min,
  max,
  lengtho,
};

module.exports = analyze;