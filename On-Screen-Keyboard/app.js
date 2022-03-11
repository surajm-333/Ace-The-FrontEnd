const ch_key = document.querySelectorAll('.character-key');
const fn_key = document.querySelectorAll('.functional-key');
const input = document.querySelector('textarea');
let caps_On = false;
ch_key.forEach(key => key.innerHTML = key.innerHTML.toLowerCase());

ch_key.forEach(key => {
    key.onclick = () => {
        if (caps_On === false) input.value += key.innerHTML.toLowerCase();
        else input.value += key.innerHTML;
        input.focus();
    }
})
document.querySelector('.less-than').onclick = () => input.value += '<';
document.querySelector('.greater-than').onclick = () => input.value += '>';
document.querySelector('.ruppee').onclick = () => input.value += '₹';
document.querySelector('.amp-key').onclick = () => input.value += '&';

fn_key[0].onclick = () => { return false };
fn_key[1].onclick = () => input.value = input.value.slice(0, -1);
fn_key[2].onclick = () => {
    if (input.value !== '') input.value += '      ';
    input.focus();
}
fn_key[3].onclick = () => {
    if (caps_On) {
        fn_key[3].style.background = 'linear-gradient(180deg, rgba(213, 213, 213, 1) 0%, rgba(230, 230, 230, 1) 26%, rgba(248, 248, 248, 1) 55%, rgba(255, 255, 255, 1) 100%)';
        fn_key[3].style.color = 'rgb(61, 61, 61)';
        ch_key.forEach(key => key.innerHTML = key.innerHTML.toLowerCase());
        caps_On = false;
    } else {
        fn_key[3].style.background = 'blue';
        fn_key[3].style.color = 'white';
        ch_key.forEach(key => key.innerHTML = key.innerHTML.toUpperCase());
        caps_On = true;
    }
}
fn_key[4].onclick = () => {
    if (input.value !== '') input.value += '\n';
    input.focus();
}
fn_key[5].onclick = () => {
    input.value = '';
    input.focus();
}