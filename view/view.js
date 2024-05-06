class TowerOfHanoiView {
    constructor(model) {
        this.model = model;
        this.model.addObserver(this.render.bind(this));
        this.initialize();
    }

    initialize() {
        this.pegElements = [];
        for (let i = 0; i < 3; i++) {
            this.pegElements[i] = document.getElementById(`peg${i + 1}`);
        }
        this.render();
    }

    render() {
        this.pegElements.forEach((peg, index) => {
            const disks = this.model.pegs[index];
            peg.innerHTML = disks.map(size => `<div class="disk" style="width: ${size * 20}px;"></div>`).join('');
        });
    }
}
