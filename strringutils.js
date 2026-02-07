function normalizewhitespace(str){
        if(typeof str!=="string"){
            throw new Error("string expected")
        }
        return(str.trim().split(/\s+/)).join(" ");

}
function tocamelcase(str){
    if(typeof str!=="string"){
            throw new Error("string expected")
        }
    let word=str.toLowerCase().trim().split(" ");
    let result=word[0];
    for(let i=1;i<word.length;i++){
        result+=word[i][0].toUpperCase()+word[i].slice(1)
    }
    return result

}
function isvalidemail(str){
 if(typeof str!=="string"){
            throw new Error("string expected");
        }
    if(str.includes("@")&&
      str.includes(".")&&
      str.indexOf("@")> str.lastIndexOf("."))
      {
        return true;
    }
    else{
        return false;
    }
}
function tosnakeCase(str){ 
    if(typeof str!=="string"){
         throw new Error("string expected");
    }
    return str.trim().toLowerCase().split(/\s+/).join("_");
}
function  isvalidUrl(url){
    if(typeof url!=="string"){
         throw new Error("url must be a string");
    }
    if(
        (url.startsWith("http://")||
        url.startsWith("https://")||
        url.startsWith("www."))&&
        url.includes(".")
           ) 
           {
       return true;
           }
           else{
            return false;
           }
    

}
module.exports= {
    normalizewhitespace,
    tocamelcase,
    isvalidemail,
    isvalidUrl,
    tosnakeCase
};