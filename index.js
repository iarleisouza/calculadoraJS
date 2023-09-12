
function outcome() {
    let num1 = Number(document.getElementById('num-one').value);
    let num2 = Number(document.getElementById('num-two').value);
    

     let input1 = document.getElementById('box1').checked;
     let input2 = document.getElementById('box2').checked;
     let input3 = document.getElementById('box3').checked;
     let input4 = document.getElementById('box4').checked;
     let result = document.getElementById('resultArea');
   

     if (num1 == '' && num2 == ''){
        alert('Digite um número!')
        result = '';
       
     } else if(input1) {
         result = num1 + num2;
      
     }else if (input2){
         result = num1 - num2;

     }else if(input3){
        result = num1 * num2;
     } else if(input4) {
        result = num1 / num2;
       
     }
     document.getElementById('resultArea').innerHTML = result;
}
