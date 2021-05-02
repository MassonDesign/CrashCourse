const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

// fill listner

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

// loop trought empties and call drag event

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

// Drag function

function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() { 
    this.className = 'empty'
}

function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}