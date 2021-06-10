let display = document.getElementById('display');
buttons = document.querySelectorAll('button');
let dispValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        value = e.target.innerText;
        if (value == 'X') {
            value = '*';
            dispValue += value;
            display.value = dispValue;
        }
        else if (value == 'c') {
            dispValue = "";
            display.value = dispValue;
        }
        else if (value == '=') {
            display.value = eval(dispValue);
        }
        else {
            dispValue += value;
            display.value = dispValue;
        }

    })
}

