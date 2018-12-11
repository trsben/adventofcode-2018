class Cloth {
    constructor(size) {
        this.area = [];

        for (let i = 0; i < size; i++) {
            this.area.push(new Array(size));
        }
    }

    input(inputs) {
        inputs = inputs.split('\n').map(input => input.trim());
        
        inputs.forEach(input => {
            let format = input.match(/#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/);

            let offsetX = parseInt(format[2]);
            let offsetY = parseInt(format[3]);

            let width = parseInt(format[4]);
            let height = parseInt(format[5]);

            for (let i = 0; i < width; i++) {
                let x = offsetX + i;

                for (let j = 0; j < height; j++) {
                    let y = offsetY + j;

                    this.area[y][x] = (this.area[y][x]) ? this.area[y][x] + 1 : 1;
                }
            }
        });
    }

    getOverlap() {
        return this.area.reduce((accumulator, row) => {
            return accumulator + row.reduce((columnAccumulator, column) => {
                if (column && column > 1) {
                    return columnAccumulator + 1;
                }

                return columnAccumulator;
            }, 0);
        }, 0);
    }
}

export default Cloth;
