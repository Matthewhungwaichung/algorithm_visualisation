function selection_sort(render_array_element, public_array, enable){
    function sleep(ms) {
        return new Promise(
            resolve => setTimeout(resolve, ms)
        );
    }
    async function sorting(){
        let n = public_array.length;

        for(let i = 0; i < n; i++) {
            let min = i;
            for(let j = i+1; j < n; j++){
                render_array_element(public_array,public_array[j],public_array[min]);
                await sleep(100);
                if(public_array[j] < public_array[min]) {
                    min=j;
                }
            }
            if (min != i) {
                let tmp = public_array[i];
                public_array[i] = public_array[min];
                public_array[min] = tmp;
            }
        }
        render_array_element(public_array);
        enable();
    }


    sorting().then(r => null);

}
export {selection_sort}