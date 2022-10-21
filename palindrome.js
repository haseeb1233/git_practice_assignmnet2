 let str="aba"
let bag=""

 for(i=0;i<str.length;i++){
  for(j=str.length-1;j>=0;j--){
    bag+=str[str.length-1]
   }
}
if(str==bag){
 console.log("Yes)}
else{console.log("no")