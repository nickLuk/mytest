/*
var car={
    model:'bmv',
    year:2007,
    color:'black',*/
/*}
console.log(car.model);
car.model="audi";
console.log(car.model);
delete car.model;
console.log(car);*/
/*
age: function(){
    car.age=2019-car.year;
    document.write(car.age);}}
    car.age()

*/


/*

    var car={
        model:'bmv',
        year:2007,
        color:'black',
    
    
    age: function(){
        this.age=2019-this.year;
        if(this.age>20){alert("bad");}
        else{alert("ok");}
    }
    }
        car.age();
    */
   /*
   var person={
       name:'Nick',
       year:1979,
       email:'lykyanik@ukr.net',
       parol:1111,

   }
   console.log(person);
   alert("name" in person);
   for(var key in person){
       alert(key);
       alert(person[key]);
   }*/

   /*
   var input=document.querySelectorAll('input');
   var button=document.querySelector('button');
var key=[];
for(var i=0; i<input.length; i++){
    key[i]=input[i].getAttribute('name');
}



   button.addEventListener('click', function(){
       var b;
       var c;
       var contact={
        [key[0]]:input[0].value,
        [key[1]]:input[1].value,
        [key[2]]:input[2].value,
        [key[3]]:input[3].value,
        [key[4]]:input[4].value,
        [key[5]]:input[5].value,
        [key[6]]:input[6].value,
        [key[7]]:input[7].value,
        [key[8]]:input[8].value,
        [key[9]]:input[9].value,
        [key[10]]:input[10].value,
        [key[11]]:input[11].value,
        [key[12]]:input[12].value,
        [key[13]]:input[13].value,



testEmail:function(){
    var pass=contact[key[2]];
    for(var n=0; n<pass.length;n++){
        if(pass[n]=='@'){b=true;

        }
    }
    if(b==true){input[2].style.border="solid green";}
    else{input[2].style.border="solid red";}
},
testpass:function(){
    var pass1=contact[key[12]];
    
        if(pass1.length<=7){c=true;

        }
    
    if(c==true){input[12].style.border="solid red";}
    else{input[12].style.border="solid green";}
},

testpass2:function(){
    var nam=contact[key[0]];
    if(this[key[12]]==this[key[13]]){alert('Привіт  '+' '+nam);}
          
    
    else{input[12].style.border="solid red";
    input[13].style.border="solid red";
}
}




       }









       
       console.log(contact);
       contact.testEmail();
       contact.testpass();
       contact.testpass2();
   })*/


//10.10
 /*  var person={
    name:'Pasha',
    year:1999,
   }
   console.log(person);*/
/*
function Car (name,year,color){
    this.name=name
    this.year=year
    this.color=color

}
Car.prototype.getAge=function(){
    return 2019-this.year;
}

Car.prototype.getAge=function(){
    var age=2019-this.year;
    if(age>10){alert("bad");}
    else{alert("ok");} }
Car.prototype.wheel=4;


var ford = new Car('ford', 2015, 'black');
var bmv= new Car('bmv', 2012, 'white');
var opel= new Car('opel', 2011, 'grey');

bmv.wheel=6;



console.log(ford);
console.log(bmv);
console.log(opel);


*/
/*
var person={
    name:'Pasha',
    age:21,
    color:'blond'
   }
var n=JSON.stringify(person);*/







///******************************** */
/*function showRequest(){
var xhr=new XMLHttpRequest();
var url='https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
xhr.open('Get',url);
xhr.send()
xhr.onreadystatechange=function(){
    if(xhr.readyState!=4)return;
    var data=JSON.parse(xhr.responseText);
    show(data);
}}

function show(data){
    for (var i=0; i<data.length; i++){
    for(var key in data[i]){
        document.write(key+"="+data[i][key]+"<br>"); 
    }

}
}*/
//*************************************************** */
/*function showRequest1(){
    var xhr=new XMLHttpRequest();
    var url='https://swapi.co/api/people/1/';
    xhr.open('Get',url);
    xhr.send()
    xhr.onreadystatechange=function(){
        if(xhr.readyState!=4)return;
        var data=JSON.parse(xhr.responseText);
        show(data);
    }}
    
    function show(data){
        
        for(var key in data){
            document.write(key+"="+data [key]+"<br>"); 
        }
    
    }

function showRequest2(){
        var xhr=new XMLHttpRequest();
        var url='https://swapi.co/api/people/13/';
        xhr.open('Get',url);
        xhr.send()
        xhr.onreadystatechange=function(){
            if(xhr.readyState!=4)return;
            var data=JSON.parse(xhr.responseText);
            show(data);
        }}
        
        function show(data){
            
            for(var key in data){
                document.write(key+"="+data [key]+"<br>"); 
            }
        
        }


        function showRequest3(){
            var xhr=new XMLHttpRequest();
            var url='https://swapi.co/api/people/12/';
            xhr.open('Get',url);
            xhr.send()
            xhr.onreadystatechange=function(){
                if(xhr.readyState!=4)return;
                var data=JSON.parse(xhr.responseText);
                show(data);
            }}
            
            function show(data){
                
                for(var key in data){
                    document.write(key+"="+data [key]+"<br>"); 
                }
            
            }*/






/*

            var ford=Object.create({
                calculateDistance:function(){
                   // return this.distance/this.age;
                    Object.defineProperty(this,'distanceYear', {
                    value:Math.ceil(this.distance/this.age),
                    enumerable:true
                })}
            },
                
                
                
                
                
                
                
                
                
                { name:{
                  value:'ford'  ,
                  enumerable:true,
                  writable:true,
                  configurable:true,
                },
                    year:{value:2012,
                        enumerable:true,},
                    
                    color:{value:'green',enumerable:true,},
                    distance:{value:120005,enumerable:true,},
                    age:{enumerable:true,
                        
                        get:function () {
                            console.log('Otrimaty vik');
                            return new Date().getFullYear()-this.year;
                        },
                        set:function(){
                            console.log('Ви змінили значення');
                        }
                    }


            })
            console.log(ford);
            console.log(ford.age);
            console.log(ford.calculateDistance());
            console.log(ford);

        */




        /////***************************************17.10 Object Data

        //var date=new Date();
        //console.log (date);

        //var date2=new Date(2018,5,23,12,30,20);
        //console.log (date2);

// skilki rokiv***********

      /*  var date= new Date();
        var year=parseInt(prompt('Input year'));
        var age=date.getFullYear()-year;
        document.write("Wam"+age+"rokiv");*/

// den tygna**********

        /*var date=new Date();
        Date.prototype.nameDay=['Ponedilok','Vivt','sereda','Chet','pa','Sub','ned'];
        document.write(date.nameDay[date.getDay()-1]);*/




        // 

       /* var date=new Date();
        Date.prototype.nameMonth=['Yanuary','Febr','Marth','April','May','June','Jule','August','September','October','Novamber','Desamber'];
        document.write(date.nameMonth[date.getMonth()]);*/




// clock in table*********************************************
   /*         var n=false;
            function time(){
        var date=new Date();
        var h=date.getHours();
        var m=date.getMinutes();
        var s=date.getSeconds();
        Date.prototype.nameMonth=['Yanuary','Febr','Marth','April','May','June','Jule','August','September','October','Novamber','Desamber'];
        Date.prototype.nameDay=['Ponedilok','Vivt','sereda','Chet','pa','Sub','ned'];
        if(s<10){
            s='0'+s;
        }
        if(m<10){
            m='0'+m;}
if(h<10){h='0'+h;}
        
        if (n==false) {clock.innerHTML=h+":"+m+":"+s;
    n=true;}
    else {clock.innerHTML=h+" "+m+" "+s; n=false;}
    
    date.nameMonth[date.getMonth()]
mounth.innerHTML=(date.nameMonth[date.getMonth()]);


        
        day.innerHTML=(date.nameDay[date.getDay()-1]);
       if (h>0 && h<6){Hi.innerHTML="Good night" } 
       else if (h>=6 && h<12){Hi.innerHTML="Good morning" }
       else if (h>=12 && h<18){Hi.innerHTML="Good day" }
       else if (h>=18 && h<24){Hi.innerHTML="Good evening" }
    }
    
        

setInterval('time()',500);*/


////////************************22.10 vspluytie */





      /*  var div1=document.querySelector('.div1');
        var div2=document.querySelector('.div2');
        var div3=document.querySelector('.div3');
        div1.addEventListener('click',function(){
            event.stopPropagation();//Блокує сплитіє(накладання) дочірнього елементу на батьківський
            alert('div1');},false     );
        div2.addEventListener('click',function(){
            event.stopPropagation();
                alert('div2');},false     );
        div3.addEventListener('click',function(){
            event.stopPropagation();
                    alert('div3');},false     );*/





                   /* var div1=document.querySelector('.div1');
                    var div2=document.querySelector('.div2');
                    var div3=document.querySelector('.div3');

    function show() {
        console.log('Hi');
    }
    setTimeout('show()',1500);
    setTimeout('show()',4000);
   var sI=setInterval('show()',1000);
   div3.addEventListener('click',function(){
       clearInterval(sI);   },false);*/
       
       
       
       
       //Імітація роботи сервера
/*
       console.log('Кліент виконує запитсписок користувачів');
       console.log('.......');
       setTimeout(function(){
           console.log('Сервер отримав запит');
           console.log('......');
            setTimeout(function(){
                console.log('База даних формує список корситувачів');
                console.log('.....');
                setTimeout(function(){
                    console.log('Сервер модифікує дані');
                    console.log('.....');
                    setTimeout(function(){
                        console.log('Клієнт отримав дані');
                        console.log('.....');
                        
                    },1000)
                },500)
            },500);
       },1000);
       */

       //Проміси
/*
       var promise=new Promise(function(resolve,reject){
           setTimeout(function(){
            console.log('Кліент виконує запитсписок користувачів');
            console.log('.......');  
            resolve();
           },1000);
       })
       promise.then(function(){
           return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log('Сервер отримав запит');
                console.log('.......'); 
                resolve();
           },500)})
        })
        .then(function(){
            return new Promise(function(resolve,reject){
             setTimeout(function(){
                 console.log('База даних формує список корситувачів');
                 console.log('.......'); 
                 resolve();
            },500)})
         })
         .then(function(){
            return new Promise(function(resolve,reject){
             setTimeout(function(){
                 console.log('Сервер модифікує дані');
                 console.log('.......'); 
                 resolve();
            },500)})
         })
         .then(function(){
            return new Promise(function(resolve,reject){
             setTimeout(function(){
                 console.log('Клієнт отримав дані');
                 console.log('.......'); 
                 resolve();
            },1000)})
         })*/

/*
         var start=document.querySelector('.start');
         var game=document.querySelector('.div2');
        //start.addEventListener('click', startGame);
        var score=0;
        var time=document.querySelector('.timeGame');
        var timeHeader=document.querySelector('#timeHeader');
        var resultHeader=document.querySelector('#resultHeader');
        var result=document.querySelector('.result');
        var input=document.querySelector('.bt2');
        var gameStarted=true;
        
        input.addEventListener('input',setGameTime);


         function showButton(){
             setGameTime();
            var interval=setInterval(function(){
                var timeScore=parseFloat(time.textContent);
                
                if (timeScore<=0){
                     endGame();
                        
                         clearInterval(interval);}
                     
                else{time.textContent=(timeScore-0.1).toFixed(1);}


            },100)



                    
            start.style.display = 'none';
            game.style.backgroundColor="white";  
    renderBox();


gameStarted=false;
input.setAttribute('disabled','false');
         }
         function renderBox(){
             game.innerHTML=' ';

             var box=document.createElement('div');
             var boxSize=getRandom(30,100);
             var gameSize=game.getBoundingClientRect();
             var maxTop=gameSize.height-boxSize;
             var maxLeft=gameSize.width-boxSize;
             var r=Math.round(Math.random()*255);
             var g=Math.round(Math.random()*255);
             var b=Math.round(Math.random()*255);
             box.style.height=box.style.width=boxSize+'px';
             box.style.backgroundColor='rgb('+r+','+g+','+b+')';
             box.style.position='absolute';
             box.style.top=getRandom(0,maxTop)+'px';
             box.style.left=getRandom(0,maxLeft)+'px';
             box.style.cursor='pointer';
             game.insertAdjacentElement('afterbegin',box);
             box.addEventListener('click',clickBox)




             


             
         }
         function clickBox(){ //lichilnik natuskuvan
             score ++;
             renderBox();
             
         }
         function getRandom(min,max){
            return Math.floor(Math.random()*(max-min)+min)
                     }


        function endGame(){
            game.style.backgroundColor="#ccc";
            start.style.display="block";
            game.innerHTML='';
            resultHeader.style.display='block';
            timeHeader.style.display='none';
            result.textContent=score;
            
            input.removeAttribute('disabled');
            gameStarted=true;
            score=0;

        }
        function setGameTime(){ //збільшення часу гри
            time.textContent=parseFloat(input.value);
            timeHeader.style.display='block';
            resultHeader.style.display='none';
        }


*/
/*
         var start=document.querySelector('.start');
         var game=document.querySelector('.div2');
        //start.addEventListener('click', startGame);
        var score=0;
        var time=document.querySelector('.timeGame');
        var timeHeader=document.querySelector('#timeHeader');
        var resultHeader=document.querySelector('#resultHeader');
        var result=document.querySelector('.result');
        var input=document.querySelector('.bt2');
        var gameStarted=true;
        
        input.addEventListener('input',setGameTime);


         function showButton(){
             setGameTime();
            var interval=setInterval(function(){
                var timeScore=parseFloat(time.textContent);
                
                if (timeScore<=0){
                     endGame();
                        
                         clearInterval(interval);}
                     
                else{time.textContent=(timeScore-0.1).toFixed(1);}


            },100)



                    
           hide(start);
            game.style.backgroundColor="white";  
    renderBox();


gameStarted=false;
input.setAttribute('disabled','false');
         }
         function renderBox(){
             game.innerHTML=' ';

             var box=document.createElement('div');
             var boxSize=getRandom(30,100);
             var gameSize=game.getBoundingClientRect();
             var maxTop=gameSize.height-boxSize;
             var maxLeft=gameSize.width-boxSize;
             var r=Math.round(Math.random()*255);
             var g=Math.round(Math.random()*255);
             var b=Math.round(Math.random()*255);
             box.style.height=box.style.width=boxSize+'px';
             box.style.backgroundColor='rgb('+r+','+g+','+b+')';
             box.style.position='absolute';
             box.style.top=getRandom(0,maxTop)+'px';
             box.style.left=getRandom(0,maxLeft)+'px';
             box.style.cursor='pointer';
             game.insertAdjacentElement('afterbegin',box);
             box.addEventListener('click',clickBox)




             


             
         }
         function clickBox(){ //lichilnik natuskuvan
             score ++;
             renderBox();
             
         }
         function getRandom(min,max){
            return Math.floor(Math.random()*(max-min)+min)
                     }


        function endGame(){
            game.style.backgroundColor="#ccc";
            show(start);
            game.innerHTML='';
            show(resultHeader);
            hide(timeHeader);
            result.textContent=score;
            
            input.removeAttribute('disabled');
            gameStarted=true;
            score=0;

        }
        function setGameTime(){ //збільшення часу гри
            time.textContent=parseFloat(input.value);
            show(timeHeader);
            hide(resultHeader);
        }


        function show(el){//спрощеня коду стилів для видимих блоків
            el.style.display='block'; 
        }
        function hide(el){//спрощеня коду стилів для невидимих блоків
            el.style.display='none';
        }
*/
/*
var input=document.querySelector('.text');
var ul=document.querySelector('.list');
var spanAll=document.querySelectorAll('span');
var saveBTN=document.querySelector('.btn1');
var clearBTN=document.querySelector('.btn2');
var pencilBTN=document.querySelector('#pencil');

var tipsBtn = document.querySelector('.btn3');
var closeBtn = document.querySelector(".close_instr");
var overlay = document.getElementById("instruction")

var n=false;
input.addEventListener('keypress',function(KeyPress){
    if (KeyPress.which===13){
        var li=document.createElement('li');
        var spanElement=document.createElement('span');
        var icon=document.createElement('i');
        var text=this.value;
        this.value=' ';
        icon.classList.add('fas','fa-trash-alt');
        spanElement.append(icon);
        ul.appendChild(li).append(spanElement,text);
        spanElement.addEventListener('click',function(){
            this.parentElement.remove();//видалення лішки з батьківського елемента

        })




    }
}

)
for(var i=0; i<spanAll.length;i++){
    spanAll[i].addEventListener('click',function(){
        this.parentElement.remove(); 
    })
}
saveBTN.addEventListener('click',function(){
localStorage.setItem('ListsText',ul.textContent);

})
clearBTN.addEventListener('click', function(){
    ul.innerHTML=' ';
    localStorage.removeItem('ListsText',ul.innerHTML);

})
pencilBTN.addEventListener('click',function(){
    if(n==false){input.style.display='none';
       n=true;}
       else {input.style.display='block';
       
       n=false;}
    
    
    
}
)
//display overlay when tips btn is clicked
tipsBtn.addEventListener("click",function(){
    overlay.style.height = "100%";
 })
*/

 /*
 //close overlay when close btn is clicked
closeBtn.addEventListener("click",function(){
  // e.preventDefault;
   overlay.style.height = "0";
   
 })*/




//li.style.textDecoration="line-through";

  

//*********************5.11******************************

/*

for(let i=0; i<5; i++){
    setTimeout(function(){
        console.log(i);},2000);
    
    
}*/

/*
const color=red;
color='blue';*/


/*
function getAge(year){
    const current=new Date().getFullYear();
    return current-year;
}
console.log(getAge(1990));*/


/*
const getAge=(year)=>{
    const current=new Date().getFullYear();
    return current-year;
}
console.log(getAge(1995));
*/


/*
const getAge=year=>{
    const current=new Date().getFullYear();
    return current-year;
}
console.log(getAge(1996));*/



/*
const getAge=year=>new Date().getFullYear()-year;
console.log(getAge(1973));*/
/*
const getAge=year=>console.log(new Date().getFullYear()-year);
getAge(1996);*/


//Parametri po zamovchuvanny

/*
const getPost=(title,text,data)=>{
    return{
        title:title,
        text:text,
        data:data

    }
}
const post=getPost('New year','new 2020','05.11.2019');
console.log(post);*/

/*
const getPost=(title,text,data)=>{
    data=data || new Date().toLocaleDateString();
    return{
        title:title,
        text:text,
        data:data

    }
}
const post=getPost('New year','new 2020');
console.log(post);*/

//
/*const getPost=(title,text,data=new Date().toLocaleDateString())=>{
    
    return{
        title:title,
        text:text,
        data:data

    }
}
const post=getPost('New year','new 2020');
console.log(post);*/

// добавляем в текст
/*const getPost=(title,text='text dffqdfhqfdhdf',data=new Date().toLocaleDateString())=>{
    
    return{
        title:title,
        text:text,
        data:data

    }
}
const post=getPost('New year');
console.log(post);*/


//спрощуєм код в ключах 
/*const getPost=(title,text='text dffqdfhqfdhdf',data=new Date().toLocaleDateString())=>{
    
    return{title,text,data}
}
const post=getPost('New year');
console.log(post);*/


/*

const form=document.querySelector('form');
form.addEventListener('submit',()=>{
event.preventDefault();//Прибирає оновлення сторінки при натискуванні save


    const title=form.title.value;
    const text=form.text.value;
    const description=form.description.value;
saveForm(title,text,description);
})

function saveForm(data){
    const formData={
        data:new Date().toLocaleDateString(),
        title: data.title,
        text: data.text,
        description:data.description

    }
    console.log('FormatData',formData);
}*/

//ефект шаблонізація
/*
const createLink=(path,name)=>"<a href='"+path+"'>"+name+"</a>";
const ul=document.querySelector('ul');
const google="<li>"+createLink('https://google.com','Google')+"</li>";
ul.insertAdjacentHTML('afterbegin',google);*/

/*const createLink=(path,name)=>`<a href='${path}'>${name}</a>`;
const ul=document.querySelector('ul');
const google=`<li>${createLink('https://google.com','Google')}</li>`;
ul.insertAdjacentHTML('afterbegin',google);*/

/*
const createLink=(path,name)=>`<a href='${path}'>${name}</a>`;
const ul=document.querySelector('ul');
const Mystat=`<li>${createLink('https://mystat.itstep.org/ru/auth/login/index','Mystat')}</li>`;
ul.insertAdjacentHTML('afterbegin',Mystat);*/

//Класи та наслідування
/*
class RootElement{
    constructor(tagName='div'){
    this.el=document.createElement(tagName);
}}

class Box extends RootElement{ // створюємо клас який є дочірнім відносно RootElement
constructor(color, size=150, tagName){
    super(tagName);
    this.color=color;
    this.size=size;


}
create(){this.el.style.background=this.color;
    this.el.style.width=this.el.style.height=`${this.size}px`;
    document.querySelector('.wrapper').insertAdjacentElement('afterbegin',this.el)

}
}

const redBox=new Box('red',100,'div').create();
*/
