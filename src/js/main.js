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

document.querySelector('body').addEventListener('keydown', e => {
    const iNull = mainArr.indexOf(mainArr.find(arr => arr.includes(null)));
    const jNull = mainArr.find(arr => arr.includes(null)).indexOf(null);

    switch (e.keyCode) {
        // left
        case 37:
            if (mainArr[iNull][jNull + 1]) {
                mainArr[iNull][jNull] = mainArr[iNull][jNull + 1];
                mainArr[iNull][jNull + 1] = null;
            }
            break;
        // up
        case 38:
            if (mainArr[iNull + 1]) {
                mainArr[iNull][jNull] = mainArr[iNull + 1][jNull];
                mainArr[iNull + 1][jNull] = null;
            }
            break;
        // right
        case 39:
            if (mainArr[iNull][jNull - 1]) {
                mainArr[iNull][jNull] = mainArr[iNull][jNull - 1];
                mainArr[iNull][jNull - 1] = null;
            }
            break;
        // down
        case 40:
            if (mainArr[iNull - 1]) {
                mainArr[iNull][jNull] = mainArr[iNull - 1][jNull];
                mainArr[iNull - 1][jNull] = null;
            }
    }
});

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
