
function capitalize(string){
    let str = string.split("");
    str[0] = str[0].toUpperCase();
    str = str.join("");
    return str;
}

module.exports = capitalize;