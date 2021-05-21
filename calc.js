function btnclick(val){
document.getElementById("screener").value=document.getElementById("screener").value+val;

}function clearDisp(){
    document.getElementById("screener").value=""
}function equalbtn(){
     
    var result=eval(document.getElementById("screener").value)
    document.getElementById("screener").value=result
}