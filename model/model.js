class TowerOfHanoiModel {
   constructor(numberOfDisks) {
       this.numberOfDisks = numberOfDisks;
       this.pegs = [[], [], []]; // Three pegs
       for (let i = numberOfDisks; i > 0; i--) {
           this.pegs[0].push(i); // Populate the first peg
       }
       this.observers = [];
   }

   addObserver(observer) {
       this.observers.push(observer);
   }

   notifyObservers() {
       this.observers.forEach(observer => observer());
   }

   moveDisk(from, to) {
       if (this.pegs[from].length === 0) {
           throw new Error("No disk to move from this peg.");
       }
       if (this.pegs[to].length > 0 && this.pegs[to][this.pegs[to].length - 1] < this.pegs[from][this.pegs[from].length - 1]) {
           throw new Error("Cannot place larger disk on top of a smaller one.");
       }
       this.pegs[to].push(this.pegs[from].pop());
       this.notifyObservers();
   }
}
