var arr=[]
var end;
var start;
var time;
function getFormValues(){
    var elements = document.getElementById("elements").value.split(",");
    arr =[];
    for( i = 0; i<elements.length ; i++){
        arr.push(parseInt(elements[i]));
    }
    return arr;
   // arr = sorting(arr);
}
// BUBBLE SORT
function bubble(){
    start = performance.now();
    getFormValues();
    for(i = 0 ; i <arr.length-1; i++){
        for(j =0; j < arr.length-i-1; j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]=temp;
                }
            }
        }
    //return arr;
    end =  performance.now();
    time = end - start;
    var display = document.getElementById("display_elements");
    display.html="";
    display.innerHTML+="The sorted list of elements:<br/> " + arr + "<br/>";
    //document.getElementById("display_elements").innerHTML = "The sorted list of elements:<br/> "+ arr;
    document.getElementById("display_elements").innerHTML += "The execution time is: <br/> " + time+ "<br/>";
    
}
// merge sort
function ms1(){
    start = performance.now();
    getFormValues();
    arr = mergesort(arr);
    end =  performance.now();
    time = end - start;
//    var display = document.getElementById("display_elements");
//    display.html="";
//    display.innerHTML+="The sorted list of elements:<br/> " + arr + "<br/>";
//    document.getElementById("display_elements").innerHTML = "The execution time is: <br/> " + time+ "<br/>";
}
function mergesort(arr){
    console.log(arr.length)
    if(arr.length  < 2){
        return arr;
    };
    var middle = parseInt(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle, arr.length);
    return merge(mergesort(left),mergesort(right));
}
function merge(left, right){
    var result = [];
    while (left.length && right.length){
        if (left[0] <= right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        };
    };
    while(left.length)
        result.push(right.shift());
    while (right.length)
        result.push(right.shift());
    return result;
};