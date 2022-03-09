function quick_sort(render_array_element, public_array, enable){
    function sleep(ms) {
        return new Promise(
            resolve => setTimeout(resolve, ms)
        );
    }
    async function sorting(){
        let stack = [];
        let start = 0;
        let end = public_array.length - 1;
        stack.push({x: start, y: end});
        while(stack.length){
            const { x, y } = stack.shift();
            let pivot = public_array[y];
            let i = x;
            for(let j = x; j < y; j++){
                await sleep(100);
                render_array_element(public_array,public_array[j],pivot,public_array[i]);
                if(public_array[j] <= pivot){
                    const temp = public_array[i]
                    public_array[i] = public_array[j]
                    public_array[j] = temp;
                    i++;
                }
            }
            const temp = public_array[i]
            public_array[i] = public_array[y]
            public_array[y] = temp;
            const PI = i;


            if(PI - 1 > x){
                stack.push({x: x, y: PI - 1});
            }
            if(PI + 1 < y){
                stack.push({x: PI + 1, y: y});
            }
        }

        render_array_element(public_array);
        enable();
    }
    sorting().then(r => null);


}
export {quick_sort}