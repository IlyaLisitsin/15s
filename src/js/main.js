const canvas = document.getElementById('fifteens');

const mainArr = [[], [], [], []];
let counter = 1;
let currentLine = 0;

while (counter < 16) {
    mainArr[currentLine].push(counter);

    if (!(counter % 4)) {
        currentLine++
    }

    counter++
}

mainArr[currentLine].push(null);

function loop() {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,400,400);

    for (let i = 0; i < mainArr.length; i++) {
        for (let j = 0; j < mainArr[i].length; j++) {
            const y = i * 100;
            const x = j * 100;

            if (mainArr[i][j]) {
                ctx.fillStyle = 'rgb(200, 0, 5)';
                ctx.rect(x, y, 100, 100);
                ctx.fillRect(x, y, 100, 100);

                ctx.lineWidth = 1;
                ctx.strokeStyle = '#000';
                ctx.stroke();

                ctx.font = '50px Arial';
                ctx.fillStyle = '#000';
                ctx.fillText(mainArr[i][j], x + 35, y + 70)
            }
        }
    }

    requestAnimationFrame(loop)
}

requestAnimationFrame(loop);
