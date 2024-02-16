function clearScreen(){
    document.getElementById("result").value=""
}
function display(value){
    document.getElementById("result").value +=value

}
function calculate(){
    try{
        document.getElementById("result").value=eval(document.getElementById("result").value)
    }
    catch(err){
    alert("erorr")} 
}