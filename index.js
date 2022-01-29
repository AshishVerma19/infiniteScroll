const container = document.querySelector('.container');
const main = document.querySelector('.main');

const content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos doloremque repudiandae unde
sint ratione fugit. Id deleniti aliquam excepturi perferendis esse rerum culpa hic voluptatum laboriosam,
maxime tempore eos at.`;

function getContent() {
    let paragraph = document.createElement('p');

    paragraph.innerText = content;
    paragraph.classList.add('card');

    return paragraph;
}

function addData(parent, count = 10) {
    for (let i = 0; i < count; i++) {
        const content = getContent();
        parent.appendChild(content);
    }
}


function intersectionCallback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry);
            observer.unobserve(entry.target);
            addData(main);

            let element = document.querySelector('.card:last-child');
            observer.observe(element);
        }
    });
}


function addNewObserver(element, callback) {
    debugger;
    let options = {
        root: container,
        rootMargin: '500px',
        threshold: 1.0
    }

    let scrollObserver = new IntersectionObserver(callback, options);

    scrollObserver.observe(element);
}


// Add Initital data
addData(main);


// Set observer
let element = document.querySelector('.card:last-child');
addNewObserver(element, intersectionCallback);