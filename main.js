var random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);
Element_of_array = quick_draw_data_set[random_number];

console.log(random_number);

timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = "";

function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
}

function draw(){

}

function check_sketch(){

}

function updateCanvas(){
    background("white");
}

