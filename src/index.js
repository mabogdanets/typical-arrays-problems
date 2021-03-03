
exports.min = function min (array) {
  function compareNumeric(a, b) {
    if (a > b) return 1; 
    if (a == b) return 0;
    if (a < b) return -1; 
  } 
  if( (typeof array == "undefined")|| (array.length==0)){
    return 0;
  }else{
    array.sort(compareNumeric);
    return array[0];
  }
}

exports.max = function max (array) {
  function compareNumeric(a, b) {
    if (a > b) return 1; 
    if (a == b) return 0;
    if (a < b) return -1; 
  } 
  if( (typeof array == "undefined" ) || (array.length==0)){
    return 0;
  }else{
    
    array.sort(compareNumeric);
    return array[array.length-1];
  }
}

exports.avg = function avg (array) {
 
  if( (typeof array == "undefined") || (array.length==0) ){
    return 0;
  }else{
  let acc=0;
  for(let i=0; i<array.length; i++){
    acc = acc + array[i];
  }
  let out=acc/array.length;
  return out;
}
}
