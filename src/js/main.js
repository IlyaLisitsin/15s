import Fifteens from './fifteens.class'

const canvas = document.getElementById('fifteens');
const fifteens = new Fifteens();

document.querySelector('body').addEventListener('keydown', e => {
    switch (e.keyCode) {
        // left
        case 37:
            fifteens.moveLeft();
            break;
        // up
        case 38:
            fifteens.moveUp();
            break;
        // right
        case 39:
            fifteens.moveRight();
            break;
        // down
        case 40:
            fifteens.moveDown();
    }
});

function loop() {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,400,400);

    for (let i = 0; i < fifteens.mainArr.length; i++) {
        for (let j = 0; j < fifteens.mainArr[i].length; j++) {
            const y = i * 100;
            const x = j * 100;

            if (fifteens.mainArr[i][j]) {
                ctx.fillStyle = 'rgb(200, 0, 5)';
                ctx.rect(x, y, 100, 100);
                ctx.fillRect(x, y, 100, 100);

                ctx.lineWidth = 1;
                ctx.strokeStyle = '#000';
                ctx.stroke();

                ctx.font = '50px Arial';
                ctx.fillStyle = '#000';
                ctx.fillText(fifteens.mainArr[i][j], x + 35, y + 70)
            }
        }
    }

    requestAnimationFrame(loop)
}

requestAnimationFrame(loop);
