const Three = (array) => {
    let arr= [{c:1},{b:2}];

    for (let index = 0; index <= 1; index++) {
        arr[index] = array[index];   
        console.log(array[index]);
    }
    return arr;
}
export default Three;



