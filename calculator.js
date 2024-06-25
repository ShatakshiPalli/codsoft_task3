document.addEventListener('DOMContentLoaded', function() {
    var display = document.getElementById('display');
    var buttons = document.querySelectorAll('.btn');
    var expression = '';

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var value = button.innerText;

            if (value === 'C') {
                expression = '';
                display.innerText = '0';
            } else if (value === '←') {
                expression = expression.slice(0, -1);
                display.innerText = expression || '0';
            } else if (value === '=') {
                try {
                    expression = eval(expression);
                } catch {
                    expression = 'Error';
                }
                display.innerText = expression;
            } else {
                expression += value;
                display.innerText = expression;
            }
        });
    });
});
