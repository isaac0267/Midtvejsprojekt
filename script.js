document.addEventListener("DOMContentLoaded", function() {
    const model = new TowerOfHanoiModel(3); // Start with 3 disks
    const view = new TowerOfHanoiView(model);
    const controller = new TowerOfHanoiController(model, view);
    window.controller = controller; // Make controller globally accessible
});
