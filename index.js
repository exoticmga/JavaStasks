function add(c, d) {
    return c + d;
}

function substract(c, d) {
    return c - d;
}

function Multiply(c, d) {
    return c * d;
}

function divide(c, d) {
    return c / d;
}




function my_caculator() {
    var c = prompt("Enter first number");
    var d = prompt("Enter second number");
    var operator = prompt("Enter operator");
    var result = 0;
    if (operator === "+") {
        result = add(c, d);
    } else if (operator === "-") {
        result = substract(c, d);
    } else if (operator === "*") {
        result = Multiply(c, d);
    } else if (operator === "/") {
        result = divide(c, d);
    } else {
        alert("Please enter a valid operator");
    }
    alert(result);
}
my_caculator();