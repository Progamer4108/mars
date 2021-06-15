canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
nasa_mars_img_array = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
random_no = Math.floor(Math.random() * 4);
console.log(random_no);
rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;
background_image = nasa_mars_img_array[random_no];
rover_img = "rover.png";

function add() {
    background_imageTag = new Image();
    background_imageTag.onload = uploadbackground;
    background_imageTag.src = background_image;
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_img;
}

function uploadbackground() {
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}

function up () {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed" + rover_x + "-" + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function down () {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("When up arrow is pressed" + rover_x + "-" + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function left () {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When up arrow is pressed" + rover_x + "-" + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function right () {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When up arrow is pressed" + rover_x + "-" + rover_y);
        uploadbackground();
        uploadrover();
    }
}