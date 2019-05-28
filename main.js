const field = document.getElementById('field');
const ball = document.getElementById('ball');
const maxMoveInParentWidth = field.offsetWidth;
const maxMoveInParentHeight = field.offsetHeight;
const borderField = 10;
const twoBorderFields = borderField * 2;
const ballWith = ball.offsetWidth;
const ballHeight = ball.offsetHeight;
const halfBallWidth = ballWith / 2;
const halfBallHeight = ballHeight / 2;

function moveBall(event) {
    const { documentElement } = document;
    const coordinateY = event.clientY + documentElement.scrollTop;
    const coordinateX = event.clientX + documentElement.scrollLeft;
    let ballStyleTop = coordinateY - borderField - halfBallHeight;
    let ballStyleLeft = coordinateX - borderField - halfBallWidth;

    if (coordinateX < borderField + halfBallWidth) {
        ballStyleLeft = 0;
    }
    if (coordinateY < borderField + halfBallHeight) {
        ballStyleTop = 0;
    }
    if (coordinateX > (maxMoveInParentWidth - borderField - halfBallWidth)) {
        ballStyleLeft = maxMoveInParentWidth - ballWith - twoBorderFields;
    }
    if (coordinateY > (maxMoveInParentHeight - borderField - halfBallHeight)) {
        ballStyleTop = maxMoveInParentHeight - ballHeight - twoBorderFields;
    }

    ball.style.top = `${ballStyleTop}px`;
    ball.style.left = `${ballStyleLeft}px`;
}

field.addEventListener('click', moveBall, true);
