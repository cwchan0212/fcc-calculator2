// import logo from './logo.svg';
import './App.css';
import React from 'react';

const nums = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
const numText = ["seven", "eight", "nine", "four", "five", "six", "one", "two", "three", "zero"];
const ops = ["/", "x", "‑", "+", "="];
const opsText = ["divide", "multiply", "subtract", "add", "equals"];

function App() {

    const [expression, setExpression] = React.useState("");
    const [answer, setAnswer] = React.useState(0);
 
    const display = (symbol) => {

        if (symbol === "x")
            symbol = "*";
        if (symbol === "‑")
            symbol = "-"

        let p = expression.replace(/[/*\-+]/gm, " ").split(" ");
        let last = p[p.length - 1]
        
        console.log("array: ", p, p.length, "]")
        console.log("last:", last, "symbol", symbol, " -- expression", expression)

//        console.log("check: ", ce(lastInput, symbol))

        if (expression === "") {
            console.log(1)
            // + check digit or operator
            setExpression(symbol);
            setAnswer(symbol);
        } else {       
            if (!Number.isNaN(Number(last + symbol))) {
                console.log(2)
                if (symbol === ".") {
                    console.log(2.1)
                    setExpression(expression.substring(0, expression.length-last.length) + last + symbol);
                    setAnswer(last + symbol);
                } else {
                    //let lastE = expression.substring(expression.length-1, expression.length);
                    console.log("2.2/2.3", symbol);
                    if ((/[/*\-+]/).test(symbol)) {
                        console.log(2.2)
                        setExpression(expression.substring(0, expression.length-last.length) + Number(last + symbol));
                        setAnswer(Number(last + symbol));
                    } else {
                        console.log(2.3)
                        if ((/[0]/).test(symbol)) {
                            
                            if (last === "0") {
                                console.log("2.3.1")
                                return;
                            } else {
                                console.log("2.3.2")
                                setExpression(expression.substring(0, expression.length-last.length) + last + symbol);
                                setAnswer(last + symbol);    
                            }
                        } else {
                            console.log("2.3.3")
                            setExpression(expression.substring(0, expression.length-last.length) + Number(last + symbol));
                            setAnswer(Number(last + symbol));
                        }
                    }
                }
            } else {

                let le = expression.substring(expression.length-1, expression.length);
                console.log("3.0", le, last, symbol);
                
                if (!last.includes(".")) {
                    console.log(3)
                    setExpression(expression.substring(0, expression.length-last.length) + last + symbol);
                    setAnswer(last + symbol);
                } 

                if ((/[/*\-+]/).test(symbol)) {
                    console.log(4)
                    setExpression(expression.substring(0, expression.length-last.length) + last + symbol);
                    setAnswer(symbol);
                }


                // if ((/[/*\-+]/).test(symbol)) {
                //     console.log(4)
                //     setExpression(expression.substring(0, expression.length-last.length) + last + symbol);
                //     setAnswer(symbol);
                // }
            }
        }
    };

    const calculate = () => {
        let e = expression;
        e = e.replace("x", "*")
        setAnswer(eval(e));
        setExpression(prev => prev + "=")
    };

    const clear = () => {
        setExpression("");
        setAnswer(0);
    }

    return (

        <div className="calculator">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous"></script>

            <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js" crossOrigin="anonymous"></script>
            <div className="dis">
                <div className="formula">
                    {expression}</div>
                <div className="total" id="display">
                    {answer}</div>
            </div>
            <div className="nums-container">
                <button className="light-grey big-h"
                    onClick={
                        () => clear()
                    }
                    id="clear">AC</button>
                <button className="grey">C</button>
                {
                    nums.map((num, idx) => (
                        <button className={
                            num === "0" && 'big-h' ? 'grey big-h' : 'grey'
                        }

                            key={num}
                            onClick={
                                () => display(num)
                            }
                            id={
                                numText[idx]
                            }>
                            {num} </button>
                    ))
                }
                <button className="light-grey"
                    onClick={
                        () => display(".")
                    }
                    id="decimal">.</button>
            </div>
            <div className="ops-container">
                {
                    ops.map((op, idx) => (
                        <button className="orange"
                            onClick={
                                (op === "=" ? () => calculate() : () => display(op))
                            }
                            key={op}
                            id={
                                opsText[idx]
                            }>
                            {op} </button>
                    ))
                } </div>
        </div>

    );
}
export default App;
