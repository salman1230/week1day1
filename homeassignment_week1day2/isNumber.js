function numberType(number){
 if(number > 0){
    return "positive";
 }else if(number < 0){
    return "negative";
 } else {
    return "zero";
 }

}
let result = numberType(-5);
let result2 = numberType(0);
let result3 = numberType(10);
console.log(result);
console.log(result2);
console.log(result3);