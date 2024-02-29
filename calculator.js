let input = document.getElementById('inp');

let button = document.querySelectorAll('.row');

let str = "";

let arr = Array.from(button);

arr.forEach(buttons=>{
buttons.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '=')
    {
          str = eval(str);
          input.value = str;
    }
    else if(e.target.innerHTML == 'AC'){
          str = "";
          input.value =str;
    }
    else if(e.target.innerHTML == 'DE'){
        str = str.substring(0,str.length-1);
        input.value = str;
    }
    else{
        str = str + e.target.innerHTML;
        input.value = str;
    }
})
})

