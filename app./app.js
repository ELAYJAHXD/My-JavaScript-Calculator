// 1. Select DOM elements
        const num1Input = document.querySelector('#num1');
        const num2Input = document.querySelector('#num2');
        const resultText = document.querySelector('#resultText');
        const addBtn = document.querySelector('#addBtn');
        const subBtn = document.querySelector('#subBtn');
        const mulBtn = document.querySelector('#mulBtn');
        const divBtn = document.querySelector('#divBtn');
        const clearBtn = document.querySelector('#clearBtn');

        function setOutputColor(status) {
            resultText.classList.remove('text-danger', 'text-mustard', 'text-muted-custom');
            if (status === 'error') {
                resultText.classList.add('text-danger'); 
            } else if (status === 'success') {
                resultText.classList.add('text-mustard'); 
            } else {
                resultText.classList.add('text-muted-custom');
            }
        }

        // 2. The Core Calculation Function using a Switch Statement
        function calculate(operation) {
            const val1 = Number(num1Input.value);
            const val2 = Number(num2Input.value);

            if (operation === "clear") {
                num1Input.value = "";
                num2Input.value = "";
                resultText.textContent = "Result: ";
                setOutputColor('muted');
                return;
            }
            
            // 1. Empty field checks
            if (num1Input.value === "" && num2Input.value !== "") {
                resultText.textContent = "Error: You need to input the first number before the second number!";
                setOutputColor('error');
                return;
            }
            if (num1Input.value !== "" && num2Input.value === "") {
                resultText.textContent = "Error: You need to input the second number after the first number!";
                setOutputColor('error');
                return;
            }
            if (num1Input.value === "" && num2Input.value === "") {
                resultText.textContent = "Error: Please enter two valid numbers!";
                setOutputColor('error');
                return;
            }

            // Non-number validation (NaN)
            if (isNaN(val1) || isNaN(val2)) {
                resultText.textContent = "Error: You need to input a valid number";
                setOutputColor('error');
                return;
            }

            let result = 0;

            // 3. Switch Evaluation based on button clicked
            switch (operation) {
                case "add":
                    result = val1 + val2;
                    resultText.textContent = `Result: ${val1} + ${val2} = ${result}`;
                    setOutputColor('success');
                    break;

                case "subtract":
                    result = val1 - val2;
                    resultText.textContent = `Result: ${val1} - ${val2} = ${result}`;
                    setOutputColor('success');
                    break;

                case "multiply":
                    result = val1 * val2;
                    resultText.textContent = `Result: ${val1} × ${val2} = ${result}`;
                    setOutputColor('success');
                    break;

                case "divide":
                    if (val2 === 0) {
                        resultText.textContent = "Error: Cannot divide by zero!";
                        setOutputColor('error');
                    } else {
                        result = val1 / val2;
                        resultText.textContent = `Result: ${val1} ÷ ${val2} = ${result}`;
                        setOutputColor('success');
                    }
                    break;

                default:
                    resultText.textContent = "Unknown operation.";
                    setOutputColor('error');
            }
        }

        // 4. Attach Event Listeners to each button
        addBtn.addEventListener('click', () => calculate('add'));
        subBtn.addEventListener('click', () => calculate('subtract'));
        mulBtn.addEventListener('click', () => calculate('multiply'));
        divBtn.addEventListener('click', () => calculate('divide'));
        clearBtn.addEventListener('click', () => calculate('clear'));
    
    
