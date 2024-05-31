function sum(a,b, displayResult,displayResultPassive){
    displayResult(a+b);
    displayResultPassive(a+b);
}

function displayResult(data){
    console.log("Result is ", data);
}

function displayResultPassive(res){
    console.log("passive result is ", res);
}

sum(1,2,displayResult,displayResultPassive);
