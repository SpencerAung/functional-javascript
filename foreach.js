function doubleAll(numbers){
     numbers.forEach(function(item,index, arr){
       arr[index] = item*2;
    });
    return numbers;
}
a = [1,2,3];
console.log(doubleAll(a));