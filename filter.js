function getShortMessages(messages){
    /* my solution, complex approach, not efficient */
//    return messages.map(function(value){
//        return  value.message.split().filter(function shorten(currentValue){
//            return (currentValue.length < 50);
//        }).join();
//    }).filter(function(value){
//        return (value.length>0);
//    });
   /* this is the answer from nodeschool.io */
   return messages.filter(function(item){
       return item.message.length <50;
   }).map(function(item){
       return item.message;
   });
}

module.exports = getShortMessages;