function calculate(){
    var fnum = parseInt(document.getElementById("fnum").value);
    var snum = parseInt(document.getElementById("snum").value);
    var sbox = document.getElementById("sbox").value;
    var result;
    try {
        if ( sbox == '+' ){
          result =  fnum + snum;
          document.getElementById("res").value = result;
        }
        else if( sbox == '-' ){
            result =  fnum - snum;
            document.getElementById("res").value = result;
        }
        else if( sbox == '/' ){
            result =  fnum / snum;
          document.getElementById("res").value = result;
        }
        else if( sbox == '*' ){
            result =  fnum * snum;
            document.getElementById("res").value = result;
        }
        else {
           result = console.log('Enter Valid Choice');
           document.getElementById("res").innerHTML = result;
        }
       
    } catch (error) {
        console.log("not working");
    }

   
    return false;
}