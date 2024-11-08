const boxes = document.querySelectorAll('.box');
// const datas = document.querySelectorAll(".shown_data")
let activeBox = null; // Variable to keep track of the currently active box
// let datasbox = null;

// Add the hovered class to the first box on page load
if (boxes.length > 0) {
    boxes[0].classList.add('hover');
    // datas[0].classList.add('hover');
    activeBox = boxes[0];
    // datasbox = datas[0];
}

boxes.forEach (box => {
    box.addEventListener('click', function() {
        // If the clicked box is already active, do nothing
        if (activeBox === this) return;

        // If there's an active box, remove its hovered class
        if (activeBox) {
            activeBox.classList.remove('hover');
        }

        // Add the hovered class to the clicked box
        this.classList.add('hover');
        // that.classList.add('hover');

        // Update the active box reference
        activeBox = this;
    });

});



const toggleDiv1 = document.getElementById("location-content");
const toggleDiv2 = document.getElementById("info-content");
const toggleDiv3 = document.getElementById("contact-content");
const toggleDiv4 = document.getElementById("creator-main");



function locationn(){
    toggleDiv1.classList.add("shown_data");
    toggleDiv2.classList.remove("shown_data");
    toggleDiv3.classList.remove("shown_data");
    toggleDiv4.classList.remove("shown_data");

}
function infonn(){
    toggleDiv2.classList.add("shown_data");
    toggleDiv1.classList.remove("shown_data");
    toggleDiv3.classList.remove("shown_data");
    toggleDiv4.classList.remove("shown_data");

}
function contantt(){
    toggleDiv3.classList.add("shown_data");
    toggleDiv2.classList.remove("shown_data");
    toggleDiv1.classList.remove("shown_data");
    toggleDiv4.classList.remove("shown_data");

}
function creatorr(){
    toggleDiv4.classList.add("shown_data");
    toggleDiv2.classList.remove("shown_data");
    toggleDiv3.classList.remove("shown_data");
    toggleDiv1.classList.remove("shown_data");

}
