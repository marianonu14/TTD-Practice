function reverseString(string) {
    let array = string.split('');
    
    array = array.reverse();
    
    array = array.join('');
    
    return array;
  }



module.exports = reverseString;

