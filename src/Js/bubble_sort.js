function bubble_sort(render_array_element, public_array, enable){
    //using the method of setting up a delay queue. However, a sleep function can be built like other alg.
    let delay_queue = [];
    let count = 1;
    for (let i = 0 ; i < public_array.length-1 ; i++){
        for (let j = 0 ; j < public_array.length-i-1 ; j++){
            delay_queue.push(count);
            count++;
        }
    }
    count++;
    delay_queue.push(count);
    setTimeout(function(){
        render_array_element(public_array);
        enable();
    },delay_queue.pop()*100);
    for (let i = 0 ; i < public_array.length-1 ; i++){
        for (let j = 0 ; j < public_array.length-i-1 ; j++){
            function close(j){
                setTimeout(function (){
                    render_array_element(public_array,public_array[j],public_array[j+1]);
                    if (public_array[j]>public_array[j+1]){
                        let temp = public_array[j];
                        public_array[j] = public_array[j+1];
                        public_array[j+1] = temp;
                    }

                    render_array_element(public_array,public_array[j],public_array[j+1]);
                },delay_queue.shift()*100);
            }
            close(j);
        }
    }
}
export {bubble_sort}