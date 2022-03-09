function heap_sort(render_array_element, public_array, enable){
    function sleep(ms) {
        return new Promise(
            resolve => setTimeout(resolve, ms)
        );
    }
    async function sorting(){

        for(let i = 1; i < public_array.length; i++){
            render_array_element(public_array, public_array[i],public_array[parseInt((i - 1) / 2)]);
            await sleep(100);
            if(public_array[i] > public_array[parseInt((i - 1) / 2)]){
                let j = i;
                while (public_array[j] > public_array[parseInt((j - 1) / 2)]) {
                    const l = j;
                    const r = parseInt((j - 1) / 2);
                    [public_array[l], public_array[r]] = [public_array[r], public_array[l]];
                    j = parseInt((j - 1) / 2);
                }
            }
        }

        for(let i = public_array.length - 1; i > 0; i--){
            render_array_element(public_array, public_array[0],public_array[i]);
            await sleep(100);
            [public_array[0], public_array[i]] = [public_array[i], public_array[0]];
            let j = 0, index;

            do {
                index = (2 * j + 1);
                if (index < (i - 1) && public_array[index] < public_array[index + 1]) {
                    index++;
                }
                if (index < i && public_array[j] < public_array[index]) {
                    [public_array[j], public_array[index]] = [public_array[index], public_array[j]];
                }

                j = index;
            } while (index < i);
        }
        render_array_element(public_array);
        enable();
    }


    sorting().then(r => null);

}
export {heap_sort}