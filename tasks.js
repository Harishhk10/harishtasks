function calculatedays(){
    var d1=document.getElementById("d1").value;
    var d2=document.getElementById("d2").value;
    const dateOne=new Date(d1);
    const dateTwo=new Date(d2);
    const time =Math.abs(dateTwo - dateOne)
    const days=Math.ceil(time /(1000 *60 *60*24));
    document.getElementById("output").innerHTML=days;
    alert("Total days" +" "+days)
}
function calculatedayss(){
    var d11=document.getElementById("d11").value;
    var d21=document.getElementById("d21").value;
    const dateOne=new Date(d11);
    const dateTwo=new Date(d21);
    const time =Math.abs(dateTwo - dateOne)
    const days=Math.ceil(time /(1000 *60 *60*24));
    document.getElementById("output").innerHTML=days;
    alert("Total days" +" "+days)
}


