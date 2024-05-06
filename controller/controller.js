class TowerOfHanoiController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    moveDisk() {
        try {
            const from = parseInt(prompt("Move from peg (enter 1, 2 or 3):")) - 1;
            const to = parseInt(prompt("Move to peg (enter 1, 2 or 3):")) - 1;
            this.model.moveDisk(from, to);
        } catch (error) {
            alert(error.message);
        }
    }
}
