// Celsius to Kelvin
function CtoK(c){
     let k=273+c;
     return k;
}

// Celsius to Fahrenhiet
function CtoF(c){
    let f=(c*9/5)+32;
    return f;
}

let c=40;
console.log(c+" degree in celsius is "+ CtoK(c) +" in Kelvin");
console.log(c+" degree in celsius is "+ CtoF(c) +" degree in Fahrenhiet");

// Kelvin to Celsius
function KtoC(k){
    let c=k-273;
    return c;
}

// Kelvin to Fahrenhiet
function KtoF(k){
     let f=((k-273)*9/5)+32;
     return f;
}

let k=276;
console.log(k+" kelvin is "+ KtoC(k) +" degree in Celsius");
console.log(k+" kelvin is "+ KtoF(k) +" degree in Fahrenhiet");

// Fahrenhiet to celsius
function FtoC(f){
    let c=(f-32)*5/9;
    return c;
}

// Fahrenhiet to kelvin
function FtoK(f){
    let k=((f-32)*5/9)+273;
    return k;
}

let f=32;
console.log(f+" degree Fahrenhiet is "+ FtoC(f) +" degree in Celsius");
console.log(f+" degree Fahrenhiet is "+ FtoK(f) +" in Kelvin");