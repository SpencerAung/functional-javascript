// /* my solution, wrong usage of reduce .. don't make use of second argument initial value*/
// function countWordsA(inputWords){
//     var result={};
//     inputWords.reduce(function(pre,cur,curIndex){      
//         if(curIndex == 1){
//             result[pre] = 1;            
//         } 
//         result[cur] = (result.hasOwnProperty(cur))? ++result[cur] : 1;       
//     });
//     return result;
// }

countWords(['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']);
// module.exports = countWords;

/* This is the official answer!!  */
function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
    }
    
    module.exports = countWords

