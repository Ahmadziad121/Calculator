x=getElementById("result").value
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
function e(){
    document.getElementById("result").value=2.71

}
function tan(){
    document.getElementById("result").value=Math.tan(document.getElementById("result").value)

}
function sqrt(){
    document.getElementById("result").value=Math.sqrt(document.getElementById("result").value)

}
function pi(){
    document.getElementById("result").value=3.14
}
function cos(){
    document.getElementById("result").value=Math.cos(document.getElementById("result").value)

}

function log(){
    document.getElementById("result").value=Math.log(document.getElementById("result").value)

}
function pow(){
    document.getElementById("result").value=Math.pow(document.getElementById("result").value,2)

}
function Exp(){
    document.getElementById("result").value=Math.exp(document.getElementById("result").value)

}
function rnd(){
   
    document.getElementById("result").value=Math.round(document.getElementById("result").value)


}

function inv(){
    document.getElementById("result").value=Math.asin(document.getElementById("result").value)

}


function sin(){
    document.getElementById("result").value=Math.sin(document.getElementById("result").value)

}
function ln(){
    document.getElementById("result").value=Math.log2(document.getElementById("result").value)

}
function deg_to_rad(){
    document.getElementById("result").value=(3.14/180)*(document.getElementById("result").value)
}
function rad_to_deg(){
    document.getElementById("result").value=(180/3.14)*(document.getElementById("result").value)
}
function x(){
    var i,num,f
    f=1
    num=document.getElementById("result").value
    for(i=1;i<=num;i++)
    {
        f=f*i
    }
    i=i-1
    document.getElementById("result").value=f
}





