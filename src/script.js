const rejectionButton = document.querySelector('.reject');
const parentElement = document.querySelector('.parent');
const cardElement = document.querySelector('.card');
let lastX = 0;
let lastY = 0;

const changePosition = ()=>{
    const parentDimensions = parentElement.getBoundingClientRect();
    const maxX = parentDimensions.width - rejectionButton.getBoundingClientRect().width;
    const maxY = parentDimensions.height - rejectionButton.getBoundingClientRect().height;
    const positionInX = Math.floor(Math.random()*maxX);
    const positionInY = Math.floor(Math.random()*maxY);
    if(Math.abs(positionInX-lastX)>200 ||Math.abs(positionInY-lastY)>200){
        rejectionButton.style.right = positionInX + 'px';
        rejectionButton.style.top = positionInY + 'px';
    }else{
        return changePosition();
    }
    lastX = positionInX;
    lastX = positionInY;
}

rejectionButton.addEventListener('mouseover',changePosition);
rejectionButton.addEventListener('click',()=>{
    cardElement.classList.remove('h-[95%]');
    cardElement.classList.add('h-[60%]');
    cardElement.innerHTML = `  <span class="text-3xl  absolute left-[15%] top-[50%] font-bold">
            oh no! &#128148; but i respect your choice &#128557;
        </span>`

});

