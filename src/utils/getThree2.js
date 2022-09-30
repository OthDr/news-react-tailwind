const Three2 = (array) => {
    let arr= [{c:1},{b:2},{a:3}];

    for (let index = 0; index <= 2; index++) {
        arr[index] = array[index];   
        console.log(array[index]);
    }
    return arr;
}
export default Three2;



