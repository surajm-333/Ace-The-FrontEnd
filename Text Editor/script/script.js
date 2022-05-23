
const elements = document.querySelectorAll(".btn");


elements.forEach(element => {
    element.addEventListener('click', () => {
        let command = element.dataset['element'];

        if (command == 'createLink' || command == 'insertImage') {
            let url = prompt('Enter the link here:', 'http://');
            document.execCommand(command, false, url);

        } else if (command == 'intoHeader') {
            document.execCommand('formatBlock', false, '<h1>');

        } else if (command == 'intoParagraph') {
            document.execCommand('formatBlock', false, '<p>');

        } else{
            document.execCommand(command, false, null);

        }

    })
})