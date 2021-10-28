 var savol = [];
 var son = 1;
    var nol = 0;
// test yechish//
// test-1//
function clia(){
    var a = document.getElementById("input-a");
    var b = document.getElementById("input-b");
    var d = document.getElementById("input-d");
    var c = document.getElementById("input-c");
        if(a.checked == true){
            a.setAttribute("disabled","disabled");
            b.setAttribute("disabled","disabled");
            d.setAttribute("disabled","disabled");
            c.setAttribute("disabled","disabled"); 
        }    
    }
function clib(){
    var a = document.getElementById("input-a");
    var b = document.getElementById("input-b");
    var d = document.getElementById("input-d");
    var c = document.getElementById("input-c");
    if(b.checked == true){
       a.setAttribute("disabled","disabled");
       b.setAttribute("disabled","disabled");
       d.setAttribute("disabled","disabled");
       c.setAttribute("disabled","disabled");
      savol.push(son);  
    }  
    else{
        savol.push(nol);
    }  
}

function clid(){
    var a = document.getElementById("input-a");
    var b = document.getElementById("input-b");
    var d = document.getElementById("input-d");
    var c = document.getElementById("input-c");
    if(d.checked == true){
        a.setAttribute("disabled","disabled");
        b.setAttribute("disabled","disabled");
        d.setAttribute("disabled","disabled");
        c.setAttribute("disabled","disabled"); 
    } 
    else{
        savol.push(nol);
    }    
}
function clic(){
      var a = document.getElementById("input-a");
      var b = document.getElementById("input-b");
      var d = document.getElementById("input-d");
      var c = document.getElementById("input-c");
    if(c.checked == true){
        a.setAttribute("disabled","disabled");
        b.setAttribute("disabled","disabled");
        d.setAttribute("disabled","disabled");
        c.setAttribute("disabled","disabled"); 
    }    
    else{
        savol.push(nol);
    } 
}
// test-1//

// test-2//
var inputa = document.getElementById("inputa");
var inputb = document.getElementById("inputb");
var inputd = document.getElementById("inputd");
var inputc = document.getElementById("inputc");
function clia2(){
    var so = 1
    if(inputa.checked == true){
        inputa.setAttribute("disabled","disabled");
        inputb.setAttribute("disabled","disabled");
        inputd.setAttribute("disabled","disabled");
        inputc.setAttribute("disabled","disabled");
        savol.push(so);
    }
    else{
        savol.push(nol);
    } 
     
}
function clib2(){
    if(inputb.checked == true){
        inputa.setAttribute("disabled","disabled");
        inputb.setAttribute("disabled","disabled");
        inputd.setAttribute("disabled","disabled");
        inputc.setAttribute("disabled","disabled");
    }
    else{
        savol.push(nol);
    }  
}
function clid2(){
    if(inputd.checked == true){
        inputa.setAttribute("disabled","disabled");
        inputb.setAttribute("disabled","disabled");
        inputd.setAttribute("disabled","disabled");
        inputc.setAttribute("disabled","disabled");
    }
    
    else{
        savol.push(nol);
    } 
}

function clic2(){
    if(inputc.checked == true){
        inputa.setAttribute("disabled","disabled");
        inputb.setAttribute("disabled","disabled");
        inputd.setAttribute("disabled","disabled");
        inputc.setAttribute("disabled","disabled");
    }
    else{
        savol.push(nol);
    }   
}
// test-2//

// test-3//
var inputa3 = document.getElementById("inputa3");
var inputb3 = document.getElementById("inputb3");
var inputd3 = document.getElementById("inputd3");
var inputc3 = document.getElementById("inputc3");
var soq = 1
function clia3(){
    if(inputa3.checked == true){
        inputa3.setAttribute("disabled","disabled");
        inputb3.setAttribute("disabled","disabled");
        inputd3.setAttribute("disabled","disabled");
        inputc3.setAttribute("disabled","disabled");
        
    }
    else{
        savol.push(nol);
    }  
}
function clib3(){
    if(inputb3.checked == true){
        inputa3.setAttribute("disabled","disabled");
        inputb3.setAttribute("disabled","disabled");
        inputd3.setAttribute("disabled","disabled");
        inputc3.setAttribute("disabled","disabled");
    }
    else{
        savol.push(nol);
    }  
}
function clid3(){
    if(inputd3.checked == true){
        inputa3.setAttribute("disabled","disabled");
        inputb3.setAttribute("disabled","disabled");
        inputd3.setAttribute("disabled","disabled");
        inputc3.setAttribute("disabled","disabled");
       
    }
    else{
        savol.push(nol);
    }  
}
function clic3(){
    if(inputc3.checked == true){
        inputa3.setAttribute("disabled","disabled");
        inputb3.setAttribute("disabled","disabled");
        inputd3.setAttribute("disabled","disabled");
        inputc3.setAttribute("disabled","disabled");
         savol.push(soq);
    }
    else{
        savol.push(nol);
    }  
}
// test-3//

// test-4//
var inputa4 = document.getElementById("inputa4");
var inputb4 = document.getElementById("inputb4");
var inputd4 = document.getElementById("inputd4");
var inputc4 = document.getElementById("inputc4");
var soqq = 1
function clia4(){
   
    if(inputa4.checked == true){
        inputa4.setAttribute("disabled","disabled");
        inputb4.setAttribute("disabled","disabled");
        inputd4.setAttribute("disabled","disabled");
        inputc4.setAttribute("disabled","disabled");
        
    }
    else{
        savol.push(nol);
    }  
}
function clib4(){
    if(inputb4.checked == true){
        inputa4.setAttribute("disabled","disabled");
        inputb4.setAttribute("disabled","disabled");
        inputd4.setAttribute("disabled","disabled");
        inputc4.setAttribute("disabled","disabled");
    }
    else{
        savol.push(nol);
    } 
}
function clid4(){
    if(inputd4.checked == true){
        inputa4.setAttribute("disabled","disabled");
        inputb4.setAttribute("disabled","disabled");
        inputd4.setAttribute("disabled","disabled");
        inputc4.setAttribute("disabled","disabled");
        savol.push(soqq);
    }
    else{
        savol.push(nol);
    } 
}

function clic4(){
    if(inputc4.checked == true){
        inputa4.setAttribute("disabled","disabled");
        inputb4.setAttribute("disabled","disabled");
        inputd4.setAttribute("disabled","disabled");
        inputc4.setAttribute("disabled","disabled");
    }
    else{
        savol.push(nol);
    }  
}
// test-4//

// test-5//
var inputa5 = document.getElementById("inputa5");
var inputb5 = document.getElementById("inputb5");
var inputd5 = document.getElementById("inputd5");
var inputc5 = document.getElementById("inputc5");
var soa = 1
function clia5(){
   
    if(inputa5.checked == true){
        inputa5.setAttribute("disabled","disabled");
        inputb5.setAttribute("disabled","disabled");
        inputd5.setAttribute("disabled","disabled");
        inputc5.setAttribute("disabled","disabled");
        
    }
    else{
        savol.push(nol);
    }  
}
function clib5(){
    if(inputb5.checked == true){
        inputa5.setAttribute("disabled","disabled");
        inputb5.setAttribute("disabled","disabled");
        inputd5.setAttribute("disabled","disabled");
        inputc5.setAttribute("disabled","disabled");
        savol.push(soa);
    }
    else{
        savol.push(nol);
    }
   
}
function clid5(){
    if(inputd5.checked == true){
        inputa5.setAttribute("disabled","disabled");
        inputb5.setAttribute("disabled","disabled");
        inputd5.setAttribute("disabled","disabled");
        inputc5.setAttribute("disabled","disabled");
        
    }
    else{
        savol.push(nol);
    }
}

function clic5(){
    if(inputc5.checked == true){
        inputa5.setAttribute("disabled","disabled");
        inputb5.setAttribute("disabled","disabled");
        inputd5.setAttribute("disabled","disabled");
        inputc5.setAttribute("disabled","disabled");
    }
    else{
        savol.push(nol);
    } 
}
// test-5//

// test-6//
var inputa6 = document.getElementById("inputa6");
var inputb6 = document.getElementById("inputb6");
var inputd6 = document.getElementById("inputd6");
var inputc6 = document.getElementById("inputc6");
var sow = 1
function clia6(){
    if(inputa6.checked == true){
        inputa6.setAttribute("disabled","disabled");
        inputb6.setAttribute("disabled","disabled");
        inputd6.setAttribute("disabled","disabled");
        inputc6.setAttribute("disabled","disabled");

        savol.push(sow);
    }
    else{
        savol.push(nol);
    }
}
function clib6(){
    if(inputb6.checked == true){
        inputa6.setAttribute("disabled","disabled");
        inputb6.setAttribute("disabled","disabled");
        inputd6.setAttribute("disabled","disabled");
        inputc6.setAttribute("disabled","disabled");
    }
    else{
        savol.push(nol);
    }  
}
function clid6(){
    if(inputd6.checked == true){
        inputa6.setAttribute("disabled","disabled");
        inputb6.setAttribute("disabled","disabled");
        inputd6.setAttribute("disabled","disabled");
        inputc6.setAttribute("disabled","disabled");
        
    }
    else{
        savol.push(nol);
    } 
}

function clic6(){
    if(inputc6.checked == true){
        inputa6.setAttribute("disabled","disabled");
        inputb6.setAttribute("disabled","disabled");
        inputd6.setAttribute("disabled","disabled");
        inputc6.setAttribute("disabled","disabled");
    }
    else{
        savol.push(nol);
    } 
}
// test-6//

// test-7//
var inputa7 = document.getElementById("inputa7");
var inputb7 = document.getElementById("inputb7");
var inputd7 = document.getElementById("inputd7");
var inputc7 = document.getElementById("inputc7");
function clia7(){
   
    if(inputa7.checked == true){
        inputa7.setAttribute("disabled","disabled");
        inputb7.setAttribute("disabled","disabled");
        inputd7.setAttribute("disabled","disabled");
        inputc7.setAttribute("disabled","disabled");
        
    }
    else{
        savol.push(nol);
    }
}
function clib7(){
    if(inputb7.checked == true){
        inputa7.setAttribute("disabled","disabled");
        inputb7.setAttribute("disabled","disabled");
        inputd7.setAttribute("disabled","disabled");
        inputc7.setAttribute("disabled","disabled");
    }
    else{
        savol.push(nol);
    } 
}
function clid7(){
    if(inputd7.checked == true){
        inputa7.setAttribute("disabled","disabled");
        inputb7.setAttribute("disabled","disabled");
        inputd7.setAttribute("disabled","disabled");
        inputc7.setAttribute("disabled","disabled");
        
    }
    else{
        savol.push(nol);
    } 
}
function clic7(){
    var sc=1;
    if(inputc7.checked == true){
        inputa7.setAttribute("disabled","disabled");
        inputb7.setAttribute("disabled","disabled");
        inputd7.setAttribute("disabled","disabled");
        inputc7.setAttribute("disabled","disabled");
        savol.push(sc);
    }
    else{
        savol.push(nol);
    }
}
// test-7//

// test-8//
var inputa8 = document.getElementById("inputa8");
var inputb8 = document.getElementById("inputb8");
var inputd8 = document.getElementById("inputd8");
var inputc8 = document.getElementById("inputc8");
var sonn = 1
function clia8(){
    if(inputa8.checked == true){
        inputa8.setAttribute("disabled","disabled");
        inputb8.setAttribute("disabled","disabled");
        inputd8.setAttribute("disabled","disabled");
        inputc8.setAttribute("disabled","disabled");
        savol.push(sonn);
        
    }
    else{
        savol.push(nol);
    }
}
function clib8(){
    if(inputb8.checked == true){
        inputa8.setAttribute("disabled","disabled");
        inputb8.setAttribute("disabled","disabled");
        inputd8.setAttribute("disabled","disabled");
        inputc8.setAttribute("disabled","disabled");
    }
    else{
        savol.push(nol);
    }  
}
function clid8(){
    if(inputd8.checked == true){
        inputa8.setAttribute("disabled","disabled");
        inputb8.setAttribute("disabled","disabled");
        inputd8.setAttribute("disabled","disabled");
        inputc8.setAttribute("disabled","disabled");
        
    }
    else{
        savol.push(nol);
    }  
}

function clic8(){
    if(inputc8.checked == true){
        inputa8.setAttribute("disabled","disabled");
        inputb8.setAttribute("disabled","disabled");
        inputd8.setAttribute("disabled","disabled");
        inputc8.setAttribute("disabled","disabled");
    }
    else{
        savol.push(nol);
    }  
}
// test-8//

// test-9//
var inputa9 = document.getElementById("inputa9");
var inputb9 = document.getElementById("inputb9");
var inputd9 = document.getElementById("inputd9");
var inputc9 = document.getElementById("inputc9");
var s = 1
function clia9(){
   
    if(inputa9.checked == true){
        inputa9.setAttribute("disabled","disabled");
        inputb9.setAttribute("disabled","disabled");
        inputd9.setAttribute("disabled","disabled");
        inputc9.setAttribute("disabled","disabled");
        
    }
    else{
        savol.push(nol);
    } 
}
function clib9(){
    if(inputb9.checked == true){
        inputa9.setAttribute("disabled","disabled");
        inputb9.setAttribute("disabled","disabled");
        inputd9.setAttribute("disabled","disabled");
        inputc9.setAttribute("disabled","disabled");
    }
    else{
        savol.push(nol);
    }  
}
function clid9(){
    if(inputd9.checked == true){
        inputa9.setAttribute("disabled","disabled");
        inputb9.setAttribute("disabled","disabled");
        inputd9.setAttribute("disabled","disabled");
        inputc9.setAttribute("disabled","disabled");
        savol.push(s);
    }
    else{
        savol.push(nol);
    }
}

function clic9(){
    if(inputc9.checked == true){
        inputa9.setAttribute("disabled","disabled");
        inputb9.setAttribute("disabled","disabled");
        inputd9.setAttribute("disabled","disabled");
        inputc9.setAttribute("disabled","disabled");
    }
    else{
        savol.push(nol);
    }  
}
// test-9//

// test-10//
var inputa10 = document.getElementById("inputa10");
var inputb10 = document.getElementById("inputb10");
var inputd10 = document.getElementById("inputd10");
var inputc10 = document.getElementById("inputc10");
var soz = 1
function clia10(){
   
    if(inputa10.checked == true){
        inputa10.setAttribute("disabled","disabled");
        inputb10.setAttribute("disabled","disabled");
        inputd10.setAttribute("disabled","disabled");
        inputc10.setAttribute("disabled","disabled");
        
    }
    console.log(savol);  
}
function clib10(){
    if(inputb10.checked == true){
        inputa10.setAttribute("disabled","disabled");
        inputb10.setAttribute("disabled","disabled");
        inputd10.setAttribute("disabled","disabled");
        inputc10.setAttribute("disabled","disabled"); 
        savol.push(soz);
    }
    else{
        savol.push(nol);
    }
}
function clid10(){
    if(inputd10.checked == true){
        inputa10.setAttribute("disabled","disabled");
        inputb10.setAttribute("disabled","disabled");
        inputd10.setAttribute("disabled","disabled");
        inputc10.setAttribute("disabled","disabled");
       
    }
    else{
        savol.push(nol);
    } 
}
function clic10(){
    if(inputc10.checked == true){
        inputa10.setAttribute("disabled","disabled");
        inputb10.setAttribute("disabled","disabled");
        inputd10.setAttribute("disabled","disabled");
        inputc10.setAttribute("disabled","disabled");
       
    }

    else{
        savol.push(nol);
    }  
}
// test-10//

savol.push(s);
var suma=0;
function test(){
    for(var i = 0;i< savol.length;i++){
        if(savol[i]===1){
            suma =suma+ i;
           
            document.getElementById("javoblar").innerText= "siz topgan javoblar soni "+ i;
        }
   else{
    document.getElementById("javoblar").innerText= "siz testlarni  javobini topaolmadingiz";
   }
   
    }
}