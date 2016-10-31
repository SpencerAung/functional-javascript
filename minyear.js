function minyear(years){
    return years.reduce(function min(pre, cur){
        return (pre<cur)? pre:cur;
    });
}
/* es6 , with the use of arrow function*/
// function minyear(years){
//     return years.reduce((pre,cur)=>(pre<cur)?pre:cur);
// }

yearList = [1991,2000,2006,2020];
console.log(minyear(yearList));
