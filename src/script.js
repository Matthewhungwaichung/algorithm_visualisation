/*
For generate new array
 */
function generate(){
    console.log("generate");
}
/*
For array size control
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
    if (start_or_stop_js.checked===true){
        console.log("started");
    }
    else{
        console.log("stopped");
    }
}
