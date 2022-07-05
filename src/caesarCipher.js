const array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function caesarCipher(str, mod){
    let strArray = str.split('')

    let emptyArray = [];

    for (let i = 0; i < strArray.length; i++){
        let index = array.indexOf(strArray[i]);
    
        let newIndex = index + mod;
    
        if (newIndex > 25){
            let num = mod - (26 - index);
            
            emptyArray.push(array[num]);
    
        } else {
            emptyArray.push(array[newIndex]);
        }
    }
    return emptyArray.join('');
}

module.exports = caesarCipher;