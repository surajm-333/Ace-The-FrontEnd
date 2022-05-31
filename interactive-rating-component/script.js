const btnSubmit = document.querySelector('.submit-button');
const btn = document.querySelectorAll("#count button");

btn.forEach(button => {
    button.addEventListener('click', function () {
        btn.forEach(btn => btn.style.backgroundColor = null);
        btn.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        this.style.backgroundColor = 'hsl(216, 12%, 54%)';
        this.style.color = 'white';
    });
});

if(btnSubmit) {
    btnSubmit.addEventListener('click', function() {
        const rating = document.querySelector('.active');

        if(!rating) {
            alert('please select your rating');
        }else {
            document.querySelector('.selected-number').innerHTML = rating.innerHTML;

            const main = document.querySelector('.content');
            main.style.display = 'none';

            const thankyou = document.querySelector('.thank_you');
            thankyou.style.display = 'flex';
            thankyou.style.alignItems = 'center';
            thankyou.style.justifyContent = 'center';
            thankyou.style.flexDirection = 'column';
        }

    });
}