function removeduplicate(arrays){
   const result=[];
   for(let item of arrays){
    if(!result.includes(item)){
        result.push(item)
    }
   }
   return result;
}
function flattenarray(arrays){
    const result=[];
    for(let item of arrays ){
        if(Array.isArray(item)){
            for(let element of item){
                result.push(element);
            }

        }
        else{
            result.push(item);
        }
    }
    return result;
}
function getstatus(arrays){
    if(!Array.isArray(arrays)||arrays.length===0){
        throw new Error("expected a non empty array")
    }
    let min=arrays[0];
    let max=arrays[0];
    sum=0;
    for(let num of arrays){
        if(num<min) min=num;
        if(num>max) max=num;
        sum +=num;
    }
    return{
        min,
        max,
        sum,
        average:sum/arrays.length
    };
}
module.exports={
    getstatus,
    removeduplicate,
    flattenarray
};