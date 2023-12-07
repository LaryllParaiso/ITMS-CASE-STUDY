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

function resetFibonacci() {
    var formulaInput = document.getElementById('fibFormula');
    var resultDisplay = document.getElementById('fibResult');
    var formulaBox = document.getElementById('fibFormulaBox');

    formulaInput.value = '';
    resultDisplay.innerHTML = '';
    formulaBox.innerHTML = '';
}

function generateFibonacciSequence(n) {
    var fibSequence = [];

    for (var i = 0; i <= n; i++) {
        fibSequence.push(fibonacci(i));
    }

    return fibSequence;
}


function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
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

// Logic for resetting Lucas Sequence
function resetLucas() {
    var formulaInput = document.getElementById('lucasFormula');
    var resultDisplay = document.getElementById('lucasResult');
    var formulaBox = document.getElementById('lucasFormulaBox');

    formulaInput.value = '';
    resultDisplay.innerHTML = '';
    formulaBox.innerHTML = '';
}

// Function to generate Lucas Sequence
function generateLucasSequence(n) {
    var lucasSequence = [2, 1];

    for (var i = 2; i <= n; i++) {
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
        return lucas(n - 1) + lucas(n - 2);
    }
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

function resetTribonacci() {
    var formulaInput = document.getElementById('tribFormula');
    var resultDisplay = document.getElementById('tribResult');
    var formulaBox = document.getElementById('tribFormulaBox');

    formulaInput.value = '';
    resultDisplay.innerHTML = '';
    formulaBox.innerHTML = '';
}

function generateTribonacciSequence(n) {
    var tribonacciSequence = [0, 1, 1];

    for (var i = 3; i <= n; i++) {
        tribonacciSequence.push(tribonacci(i));
    }

    return tribonacciSequence;
}

function tribonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    } else {
        return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
    }
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
        formulaBox.innerHTML = collatzSequence.join(', ');
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


