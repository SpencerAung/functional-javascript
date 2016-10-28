x = {'key': 1};
/*this doesn't work if key has "false" */
function propertyExists(property, arr){
    return arr[property] || false;
}

/* check */
if( propertyExists('key',x)){
    console.log("property 'key' exists");
}else{
    console.log("property 'key' not exists");
}
if( propertyExists('none',x)){
    console.log("property 'none' exists");
}else{
    console.log("property 'none' not exists");
}