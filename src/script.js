/*
For generate new array button
 */
function generate(){
    console.log("generate");
}
/*
For array size control button
 */
let array_size_js = document.getElementById("array_size");
function decrement(){
    if (array_size_js.value > 4){
        array_size_js.value = parseInt(array_size_js.value) - 2;
    }
    console.log(array_size_js.value)
}
function increment(){
    if (array_size_js.value < 50){
        array_size_js.value = parseInt(array_size_js.value) + 2;
    }
    console.log(array_size_js.value)
}
/*
For toggle button start and stop
 */
function start_or_stop_sorting(){
    let start_or_stop_js = document.getElementById("start_or_stop_toggle_switch");
    let generate_new_array_button_js = document.querySelector('button[id="generate_new_array_button"]');
    let sub_js = document.querySelector('button[id="sub"]');
    let adding_js = document.querySelector('button[id="adding"]');
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
        generate_new_array_button_js.style.color="red";
        generate_new_array_button_js.style.cursor="default";
        sub_js.style.color="red";
        sub_js.style.cursor="default";
        adding_js.style.color="red";
        adding_js.style.cursor="default";
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
        generate_new_array_button_js.removeAttribute("style");
        sub_js.removeAttribute("style");
        adding_js.removeAttribute("style");
        console.log("stopped");
    }
}
/*
For algorithm button
 */
function choose_algorithm(){
    console.log(document.querySelector('input[name="algorithm_choice"]:checked').value);
}
