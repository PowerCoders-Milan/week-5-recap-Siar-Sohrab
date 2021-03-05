
var text = prompt('Please Insert your Password');
var pTag = document.querySelector('p');

if(text === 'siar'){
    pTag.classList.remove('transparent')
    pTag.classList.add('green');
}
