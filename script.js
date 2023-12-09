// Memoization objects
let fibonacciMemo = {};
let lucasMemo = {};
let tribonacciMemo = {};

function calculateFibonacci() {
    var formulaInput = document.getElementById('fibFormula');
    var resultDisplay = document.getElementById('fibResult');
    var formulaBox = document.getElementById('fibFormulaBox');

    try {
        var n = parseInt(formulaInput.value);

        if (isNaN(n) || n < 0) {
            throw new Error("Please enter a non-negative integer");
        }

        var fibSequence = generateFibonacciSequence(n);

        var lastTerm = fibSequence[fibSequence.length - 1];

        resultDisplay.innerHTML = '<div class="formula-text">Fibonacci(' + n + ') is equal to ' + lastTerm + '</div>';
        formulaBox.innerHTML = 'Fibonacci Sequence: ' + fibSequence.join(', ');
    } catch (error) {
        resultDisplay.innerHTML = 'Error';
        formulaBox.innerHTML = 'Error: ' + error.message;
    }
}

function generateFibonacciSequence(n) {
    const fibSequence = [];

    for (let i = 0; i <= n; i++) {
        fibSequence.push(fibonacci(i));
    }

    return fibSequence;
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        if (!(n in fibonacciMemo)) {
            fibonacciMemo[n] = fibonacci(n - 1) + fibonacci(n - 2);
        }
        return fibonacciMemo[n];
    }
}

function resetFibonacci() {
    // Reset memoization object
    fibonacciMemo = {};
    var formulaInput = document.getElementById('fibFormula');
    var resultDisplay = document.getElementById('fibResult');
    var formulaBox = document.getElementById('fibFormulaBox');

    formulaInput.value = '';
    resultDisplay.innerHTML = '';  // Clear result display
    formulaBox.innerHTML = '';     // Clear formula box
}


// Logic for Lucas Sequence
function calculateLucas() {
    var formulaInput = document.getElementById('lucasFormula');
    var resultDisplay = document.getElementById('lucasResult');
    var formulaBox = document.getElementById('lucasFormulaBox');

    try {
        var n = parseInt(formulaInput.value);

        if (isNaN(n) || n < 0) {
            throw new Error("Please enter a non-negative integer");
        }

        var lucasSequence = generateLucasSequence(n);

        var lastTerm = lucasSequence[lucasSequence.length - 1];

        resultDisplay.innerHTML = '<div class="formula-text">Lucas(' + n + ') is equal to ' + lastTerm + '</div>';
        formulaBox.innerHTML = 'Lucas Sequence: ' + lucasSequence.join(', ');
    } catch (error) {
        resultDisplay.innerHTML = 'Error';
        formulaBox.innerHTML = 'Error: ' + error.message;
    }
}

// Function to generate Lucas Sequence
function generateLucasSequence(n) {
    const lucasSequence = [2, 1];

    for (let i = 2; i <= n; i++) {
        lucasSequence.push(lucas(i));
    }

    return lucasSequence;
}

// Recursive function for Lucas Sequence
function lucas(n) {
    if (n === 0) {
        return 2;
    } else if (n === 1) {
        return 1;
    } else {
        if (!(n in lucasMemo)) {
            lucasMemo[n] = lucas(n - 1) + lucas(n - 2);
        }
        return lucasMemo[n];
    }
}

// Logic for resetting Lucas Sequence
function resetLucas() {
    // Reset memoization object
    lucasMemo = {};
    var formulaInput = document.getElementById('lucasFormula');
    var resultDisplay = document.getElementById('lucasResult');
    var formulaBox = document.getElementById('lucasFormulaBox');

    formulaInput.value = '';
    resultDisplay.innerHTML = '';  // Clear result display
    formulaBox.innerHTML = '';     // Clear formula box
}


function calculateTribonacci() {
    var formulaInput = document.getElementById('tribFormula');
    var resultDisplay = document.getElementById('tribResult');
    var formulaBox = document.getElementById('tribFormulaBox');

    try {
        var n = parseInt(formulaInput.value);

        if (isNaN(n) || n < 0) {
            throw new Error("Please enter a non-negative integer");
        }

        var tribonacciSequence = generateTribonacciSequence(n);

        var lastTerm = tribonacciSequence[tribonacciSequence.length - 1];

        resultDisplay.innerHTML = '<div class="formula-text">Tribonacci(' + n + ') is equal to ' + lastTerm + '</div>';
        formulaBox.innerHTML = 'Tribonacci Sequence: ' + tribonacciSequence.join(', ');
    } catch (error) {
        resultDisplay.innerHTML = 'Error';
        formulaBox.innerHTML = 'Error: ' + error.message;
    }
}

// Logic for Tribonacci Sequence
function calculateTribonacci() {
    var formulaInput = document.getElementById('tribFormula');
    var resultDisplay = document.getElementById('tribResult');
    var formulaBox = document.getElementById('tribFormulaBox');

    try {
        var n = parseInt(formulaInput.value);

        if (isNaN(n) || n < 0) {
            throw new Error("Please enter a non-negative integer");
        }

        var tribonacciSequence = generateTribonacciSequence(n);

        var lastTerm = tribonacciSequence[tribonacciSequence.length - 1];

        resultDisplay.innerHTML = '<div class="formula-text">Tribonacci(' + n + ') is equal to ' + lastTerm + '</div>';
        formulaBox.innerHTML = 'Tribonacci Sequence: ' + tribonacciSequence.join(', ');
    } catch (error) {
        resultDisplay.innerHTML = 'Error';
        formulaBox.innerHTML = 'Error: ' + error.message;
    }
}

// Function to generate Tribonacci Sequence
function generateTribonacciSequence(n) {
    const tribonacciSequence = [0, 1, 1];

    for (let i = 3; i <= n; i++) {
        tribonacciSequence.push(tribonacci(i));
    }

    return tribonacciSequence;
}

// Recursive function for Tribonacci Sequence
function tribonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    } else {
        if (!(n in tribonacciMemo)) {
            tribonacciMemo[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
        }
        return tribonacciMemo[n];
    }
}

// Logic for resetting Tribonacci Sequence
function resetTribonacci() {
    // Reset memoization object
    tribonacciMemo = {};
    var formulaInput = document.getElementById('tribFormula');
    var resultDisplay = document.getElementById('tribResult');
    var formulaBox = document.getElementById('tribFormulaBox');

    formulaInput.value = '';
    resultDisplay.innerHTML = '';  // Clear result display
    formulaBox.innerHTML = '';     // Clear formula box
}


function calculateCollatz() {
    var formulaInput = document.getElementById('collatzFormula');
    var resultDisplay = document.getElementById('collatzResult');
    var formulaBox = document.getElementById('collatzFormulaBox');

    try {
        var n = parseInt(formulaInput.value);

        if (isNaN(n) || n <= 0) {
            throw new Error("Please enter a positive integer");
        }

        var collatzSequence = generateCollatzSequence(n);

        resultDisplay.innerHTML = '<div class="formula-text">Collatz Sequence for ' + n + ':</div>';
        formulaBox.innerHTML =  'Colatz Sequence: ' + collatzSequence.join(', ');
    } catch (error) {
        resultDisplay.innerHTML = 'Error';
        formulaBox.innerHTML = 'Error: ' + error.message;
    }
}

function resetCollatz() {
    var formulaInput = document.getElementById('collatzFormula');
    var resultDisplay = document.getElementById('collatzResult');
    var formulaBox = document.getElementById('collatzFormulaBox');

    formulaInput.value = '';
    resultDisplay.innerHTML = '';
    formulaBox.innerHTML = '';
}

function generateCollatzSequence(n) {
    var collatzSequence = [n];

    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        collatzSequence.push(n);
    }

    return collatzSequence;
}


