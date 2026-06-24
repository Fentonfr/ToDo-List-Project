const button = document.querySelector('.input-button');
const input = document.querySelector('.input');
const output = document.querySelector('.input__content');


function addNewTask(){
    event.preventDefault(); // Forgot to add this


    const text = input.value.trim();//Forgot to add this
    if (!text) {
        return;
    } // didnt know how to do this


    const newOutputDiv = document.createElement('div');
    newOutputDiv.classList.add('output')


    const outputButton = document.createElement('button');
    outputButton.classList.add('output-button');


    const outputText = document.createElement('p');
    outputText.textContent = text;
    outputText.classList.add('arvo-regular', 'output-text');


    newOutputDiv.append(outputButton, outputText);
    output.appendChild(newOutputDiv);


    input.value = ''; // Forgot to add this
}
button.addEventListener('click', addNewTask);


// I was confused here so I used Ai for this part. I got the implentation correct
// but I couldnt delete the newly created buttons. So Ai came up with this:
output.addEventListener('click', function (event) {
    if (event.target.classList.contains('output-button')) {
        event.target.closest('.output').remove();
    }
});


