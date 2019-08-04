class Fifteens {
    constructor() {
        this.mainArr = [[], [], [], []];

        let counter = 1;
        let currentLine = 0;

        while (counter < 16) {
            this.mainArr[currentLine].push(counter);

            if (!(counter % 4)) {
                currentLine++
            }

            counter++
        }

        this.mainArr[currentLine].push(null);

        this.checkNullPosition();
    }

    checkNullPosition() {
        this.iNull = this.mainArr.indexOf(this.mainArr.find(arr => arr.includes(null)));
        this.jNull = this.mainArr.find(arr => arr.includes(null)).indexOf(null);
    }

    moveLeft() {
        this.checkNullPosition();
        if (this.mainArr[this.iNull][this.jNull + 1]) {
            this.mainArr[this.iNull][this.jNull] = this.mainArr[this.iNull][this.jNull + 1];
            this.mainArr[this.iNull][this.jNull + 1] = null;
        }
    }

    moveRight() {
        this.checkNullPosition();
        if (this.mainArr[this.iNull][this.jNull - 1]) {
            this.mainArr[this.iNull][this.jNull] = this.mainArr[this.iNull][this.jNull - 1];
            this.mainArr[this.iNull][this.jNull - 1] = null;
        }
    }

    moveUp() {
        this.checkNullPosition();
        if (this.mainArr[this.iNull + 1]) {
            this.mainArr[this.iNull][this.jNull] = this.mainArr[this.iNull + 1][this.jNull];
            this.mainArr[this.iNull + 1][this.jNull] = null;
        }
    }

    moveDown() {
        this.checkNullPosition();
        if (this.mainArr[this.iNull - 1]) {
            this.mainArr[this.iNull][this.jNull] = this.mainArr[this.iNull - 1][this.jNull];
            this.mainArr[this.iNull - 1][this.jNull] = null;
        }
    }
}

export default Fifteens
