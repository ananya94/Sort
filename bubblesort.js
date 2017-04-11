var arr=[]
function getFormValues(){
    var elements = document.getElementById("elements").value.split(",");
    arr =[];
    for( i = 0; i<elements.length ; i++){
        arr.push(parseInt(elements[i]));
    }
    arr = sorting(arr);
    document.getElementById("display_elements").innerHTML = "The sorted list of elements: " + arr;
}
// BUBBLE SORT
function sorting(arr){
for(i = 0 ; i <arr.length-1; i++){
    for(j =0; j < arr.length-i-1; j++){
        if(arr[j]>arr[j+1]){
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1]=temp;
            }
        }
    }
    return arr;
}