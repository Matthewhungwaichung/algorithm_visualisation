import {bubble_sort} from "./bubble_sort.js";
/*
For public variables
 */
let array_size_js = document.getElementById("array_size");
let start_or_stop_js = document.getElementById("start_or_stop_toggle_switch");
let generate_new_array_button_js = document.querySelector('button[id="generate_new_array_button"]');
let sub_js = document.querySelector('button[id="sub"]');
let adding_js = document.querySelector('button[id="adding"]');
let public_array;

/*
For window obj
 */
window.generate = generate;
window.decrement = decrement;
window.increment = increment;
window.start_or_stop_sorting = start_or_stop_sorting;
window.choose_algorithm = choose_algorithm;
window.render_array_element = render_array_element;
/*
For generate new array button
 */
function generate(){
    render_array_element(generate_array());
}
/*
For array size control button
 */
function decrement(){
    if (array_size_js.value > 4){
        array_size_js.value = parseInt(array_size_js.value) - 2;
    }
    render_array_element(generate_array());
}
function increment(){
    if (array_size_js.value < 50){
        array_size_js.value = parseInt(array_size_js.value) + 2;
    }
    render_array_element(generate_array());
}
/*
For toggle button start and stop
 */
function start_or_stop_sorting(){
    if (start_or_stop_js.checked===true){
        /*
        Disable buttons
         */
        generate_new_array_button_js.setAttribute("disabled","disabled");
        sub_js.setAttribute("disabled","disabled");
        adding_js.setAttribute("disabled","disabled");
        /*
        Set Css style
         */
        generate_new_array_button_js.className="word_button_dis";
        sub_js.className="counter_button_dis";
        adding_js.className="counter_button_dis";
        console.log("started");
    }
    else{
        /*
        Enable buttons
         */
        generate_new_array_button_js.removeAttribute("disabled");
        sub_js.removeAttribute("disabled");
        adding_js.removeAttribute("disabled");
        /*
        Set Css style
         */
        generate_new_array_button_js.className="word_button";
        sub_js.className="counter_button";
        adding_js.className="counter_button";
        console.log("stopped");
    }
}
/*
For algorithm button
 */
function choose_algorithm(){
    console.log(document.querySelector('input[name="algorithm_choice"]:checked').value);
}

/*
For render the array element
 */
function render_array_element(number_array){
    /*
    private variables
     */
    let array_size = array_size_js.value;
    let height_ration_hop = 100/array_size;
    let width_ratio = 100/(array_size*2+1);
    let array_element_container_js = document.getElementById("array_element_container");

    /*
    code
     */
    array_element_container_js.innerHTML = '';
    for (let number = 0 ; number<array_size ; number++){
        let array_element = document.createElement("div");
        array_element.className = "array_element";
        array_element_container_js.appendChild(array_element);
        array_element.style.height = (number_array[number]+1)*height_ration_hop+"%";
        array_element.style.width = width_ratio+"%";
    }

}
/*
Generate random array
 */
function generate_array(){
    let array_size = array_size_js.value;
    let number_array = [], new_position, temp;
    for (let number = 0 ; number<array_size ; number++){
        number_array.push(number);
    }
    for (let number = 0 ; number<array_size ; number++){
        new_position = Math.floor(Math.random()*(number+1));
        temp = number_array[number];
        number_array[number] = number_array[new_position];
        number_array[new_position] = temp;
    }
    public_array = number_array;
    console.log(public_array);
    return number_array;

}
/*
For preloading code
 */
generate();

bubble_sort(generate);