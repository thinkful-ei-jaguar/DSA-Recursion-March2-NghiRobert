function countingsheep(num){
    if(num===0){
        return console.log("All sheep jumped over the fence")
    }
    console.log(num + " Another sheep jumps over the fence")
    return countingsheep(num-1);
}

//countingsheep(3);

function PowerCalculator(number,exp){
if(exp<0){
    return console.log("exponent should be >= 0")
}
if(exp === 0){
    return 1;
}

return number * PowerCalculator(number,exp-1);
}
const a = PowerCalculator(3,3);
//console.log(a);

function reverseString(str){
if(!str.length){
    return ""
}

return str[str.length-1] + reverseString(str.slice(0,-1))
}
const teststr =reverseString("hello");
//console.log(teststr);
function ntriangularnumber(num){
    if(num===0){
        return 0;
    }
    if(num<0){
        return ;
    }

    return num + ntriangularnumber(num-1);
}
const factorial = ntriangularnumber(9);
//console.log(factorial);

function strspliter(param,str){
    if(!str.includes(param)){
        return "";
    }
    let i = 0;
    while(str[i]!==param){   
        i++;
        if(str[i]===""){
            return str
        }
    }
    let newstr = str.slice(i+1);
    let thisstr = str.slice(0,i);
    return [thisstr,...strspliter(param,newstr)]
}
const str ="25/35/19";
const newarr = strspliter("/",str);
console.log(newarr);


