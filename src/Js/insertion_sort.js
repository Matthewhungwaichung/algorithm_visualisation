function insertion_sort(render_array_element, public_array, enable){
    function sleep(ms) {
        return new Promise(
            resolve => setTimeout(resolve, ms)
        );
    }
    async function sorting(){
        for(let i = 1; i < public_array.length ;i++){
            let current = public_array[i];
            let j = i - 1;
            render_array_element(public_array,current,public_array[j]);
            await sleep(100);
            while ((j>-1)&&(current<public_array[j])){
                render_array_element(public_array,current,public_array[j]);
                await sleep(100);
                public_array[j+1]=public_array[j];
                j--;
            }
            public_array[j+1] = current;
        }
        render_array_element(public_array);
        enable();
    }


    sorting().then(r => null);

}
export {insertion_sort}