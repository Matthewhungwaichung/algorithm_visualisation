/*
For public variables
 */
let array_size_js = document.getElementById("array_size");
let start_or_stop_js = document.getElementById("start_or_stop_toggle_switch");
let generate_new_array_button_js = document.querySelector('button[id="generate_new_array_button"]');
let sub_js = document.querySelector('button[id="sub"]');
let adding_js = document.querySelector('button[id="adding"]');
/*
For preloading code
 */
render_array_element(generate_array());
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
    let array_element_container_js = document.getElementById("array_element_container");
    /*
    code
     */
    array_element_container_js.innerHTML = '';
    let dummy_array_element_container = document.createElement("div");
    dummy_array_element_container.className = "dummy_array_element_container";
    dummy_array_element_container.style.height = array_size+"px";
    array_element_container_js.appendChild(dummy_array_element_container);
    console.log(number_array);

}
/*
Generate random array
 */
function generate_array(){
    let array_size = array_size_js.value;
    let number_array = [], new_position, temp;
    for (let array_element = 0 ; array_element<array_size ; array_element++){
        number_array.push(array_element);
    }
    for (let array_element = 0 ; array_element<array_size ; array_element++){
        new_position = Math.floor(Math.random()*(array_element+1));
        temp = number_array[array_element];
        number_array[array_element] = number_array[new_position];
        number_array[new_position] = temp;
    }
    return number_array;
}
