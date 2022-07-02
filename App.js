// import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

    const nums = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
    const numText = ["seven", "eight", "nine", "four", "five", "six", "one", "two", "three", "zero"];
    const ops = ["/", "x", "‑", "+", "="];
    const opsText = ["divide", "multiply", "subtract", "add", "equals"];

    const [expression, setExpression] = React.useState("");
    const [answer, setAnswer] = React.useState(0);

    const display = (symbol) => {

        if (symbol === "x")
            symbol = "*";
        if (symbol === "‑")
            symbol = "-"

        let p = expression.replace(/[/*\-+]/gm, " ").split(" ");
        let last = p[p.length - 1]

        if (expression === "") {
            setExpression(symbol);
            setAnswer(symbol);
        } else {
            if (!Number.isNaN(Number(last + symbol))) {
                if (symbol === ".") {
                    setExpression(expression.substring(0, expression.length - last.length) + last + symbol);
                    setAnswer(last + symbol);
                } else {
                    if ((/[/*\-+]/).test(symbol)) {
                        setExpression(expression.substring(0, expression.length - last.length) + Number(last + symbol));
                        setAnswer(Number(last + symbol));
                    } else {
                        if ((/[0]/).test(symbol)) {
                            if (last === "0") {
                                return;
                            } else {
                                setExpression(expression.substring(0, expression.length - last.length) + last + symbol);
                                setAnswer(last + symbol);
                            }
                        } else {
                            setExpression(expression.substring(0, expression.length - last.length) + Number(last + symbol));
                            setAnswer(Number(last + symbol));
                        }
                    }
                }
            } else {
                let c = expression.indexOf(last);
                let tail = expression.substring(c + last.length, expression.length).replace(/\d+\.?\d*/gm, "");
                let eq = expression.split("=")[1] === undefined ? "" : expression.split("=")[1];
                if (!last.includes(".")) {
                    setExpression(expression.substring(0, expression.length - last.length) + last + symbol);
                    setAnswer(last + symbol);
                }

                if ((/[/*\-+]/).test(symbol)) {
                    if ((/[/*+]/).test(symbol)) {
                        setExpression(expression.substring(0, expression.length - tail.length) + symbol);
                        setAnswer(symbol);
                    } else {
                        setExpression(expression.substring(0, expression.length - last.length) + last + symbol);
                        setAnswer(symbol);
                    }
                    if (eq !== "") {
                        setExpression(eq + symbol);
                        setAnswer(symbol);
                    }
                }
            }
        }
    };

    const calculate = () => {
        let ex = expression;
        let res = eval(ex);
        setAnswer(res);
        setExpression(prev => prev + "=" + res)
    };

    const allClear = () => {
        setExpression("");
        setAnswer(0);
    }

    const clear = () => {
       if (expression !== "") {
         setExpression(expression.substring(0, expression.length-1));
       }
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
                        () => allClear()
                    }
                    id="clear">AC</button>
                <button className="grey" onClick={() => clear()}>C</button>
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
                } 
            </div>
            <div className="code">
                Designed and Coded by C. W. Chan
                2 July 2022
            </div>
        </div>

    );
}
export default App;
