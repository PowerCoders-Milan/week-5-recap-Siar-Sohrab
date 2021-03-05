var x = [1,4, "hello", "kabultag", 145, ];
var counter_num = 0;
var counter_stri = 0;
function sort(arr){
    for(i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number"){
            counter_num += 1;
        }else{
            counter_stri += 1;
        }
    }
    console.log(`array lenght is ${arr.length}`)
    console.log(`it has ${counter_stri} strings and ${counter_num} numbers`)
}
sort(x)