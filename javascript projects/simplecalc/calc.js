const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const addbtn = document.getElementById("add")
const subbtn = document.getElementById("sub")
const mulbtn = document.getElementById("mul")
const divbtn = document.getElementById("div")
const res = document.getElementById("result")

function calculate(operator) {
    const n1 = parseFloat(num1.value)
    const n2 = parseFloat(num2.value)

    if (isNaN(n1) || isNaN(n2)) {
        res.textContent = "Please enter both the numbers"
        return;
    }
    let r;
    switch(operator) {
        case '+':
            r = n1+n2;
            break;
        case '-':
            r = n1-n2;
            break;
        case '*':
            r = n1*n2;
            break;
        case '/':
            if (n2!==0) {
                r = n1/n2;
            } else {
                res.textContent = "Cant divide by 0";
                return;
            }
            break;
        default:
            res.textContent = "Please enter a valid operation.";
            return;
    }
    res.textContent = `Result: ${r.toFixed(2)}`
}

addbtn.addEventListener("click",()=> calculate('+'))
subbtn.addEventListener("click",()=> calculate('-'))
mulbtn.addEventListener("click",()=> calculate('*'))
divbtn.addEventListener("click",()=> calculate('/'))    