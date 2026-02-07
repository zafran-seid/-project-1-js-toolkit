function clamp(num,min,max){
    if( typeof num !=="number"||
        typeof min !=="number"||
       typeof max !=="number"){
        throw new Error("inputs must be a number");
       }
    if(num<min) return min;
    if(num>max) return max;
    return num;
}
function range(start,end,step=1){
    if( typeof start !=="number"||
        typeof end !=="number"||
       typeof step !=="number"||
     step<=0){
        throw new Error("inputs must be a number");
       }
       const result=[];
       for (let i=start;i<=end;i+=step){
          result.push(i);
       }
       return result;
}
module.exports={
    clamp,
    range
};