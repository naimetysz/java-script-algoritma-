export const userValidation = (str) =>{
if(
    str.length >= 4 && str.lengt <= 25 &&
    (/[a-zA-Z]/).test(str.slice(0,1))&& //str.charAt(0)
    (/^\w+$/).test(str.slice(-1)) //str.charAt(str.length-1)
){
    return true
}else{
    return false

}

}