// NDA, last edit: July 28 2023

// Javascript functional parts
const main = document.querySelector("main");

// Project directory constants
let project_directories = {};
let image_index_counts = {};
let image_index_maximums = {};


// Initialize variables and the images within each project
function init() {
    // kent
    image_index_counts["kent"] = 0;
    image_index_maximums["kent"] = 7;
    project_directories["kent"] = "resources/kent/"

    // gdmc
    image_index_counts["gdmc"] = 0;
    image_index_maximums["gdmc"] = 7;
    project_directories["gdmc"] = "resources/gdmc/"

    // yufi
    image_index_counts["yufi"] = 0;
    image_index_maximums["yufi"] = 4;
    project_directories["yufi"] = "resources/yufi/"

    // hand
    image_index_counts["hand"] = 0;
    image_index_maximums["hand"] = 3;
    project_directories["hand"] = "resources/hand/"

    //data
    image_index_counts["data"] = 0;
    image_index_maximums["data"] = 4;
    project_directories["data"] = "resources/data/"

};

// Function to display the next image
function forward(directory) {
    image_index_counts[directory] = (image_index_counts[directory] + 1) % image_index_maximums[directory];
    new_src = project_directories[directory].concat(image_index_counts[directory] + ".png");
    projectImg = document.getElementById(directory).getElementsByClassName("projectImg").item(0);
    projectImg.src=new_src;
};

// Function to display the previous image
function backward(directory) {
    image_index_counts[directory] = (image_index_counts[directory] - 1);
    if (image_index_counts[directory] < 0) {
        image_index_counts[directory] = image_index_maximums[directory] - 1;
    }
    new_src = project_directories[directory].concat(image_index_counts[directory] + ".png");
    projectImg = document.getElementById(directory).getElementsByClassName("projectImg").item(0);
    projectImg.src=new_src;
};

// Function to scroll background image slowly 
function bg_parallax() {
    var background = document.getElementById("bubbles");
    background.style.backgroundPositionY = -(window.scrollY/4)+"px";
}