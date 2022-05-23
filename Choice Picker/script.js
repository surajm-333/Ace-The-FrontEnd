const tagEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus()
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
    if (e.key == 'Enter') {  //on pressing enter key
        setTimeout(() => {
            e.target.value = ''
        }, 10);
    }
    randomSelect();
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    tagEl.innerHTML = ''
    tags.forEach(tag => {
        const tagsEl = document.createElement('span'); //tagsEl is newly created variable
        tagsEl.classList.add('tag');
        tagsEl.innerText = tag;
        tagEl.appendChild(tagsEl);
    })
}

function randomSelect() {
    const times = 30;  //no. of times it's gona highlight before it's gonna start
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        heighlight(randomTag)
        setTimeout(() => {
            unHighlight(randomTag)
        }, 100)
    }, 100);

    //stoping it
    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            heighlight(randomTag)

        }, 100);
    }, times * 100);

}
function pickRandomTag() {   //It will pick random tag
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function heighlight(tag) {
    tag.classList.add('highlight');
}

function unHighlight(tag) {
    tag.classList.remove('highlight');
}
