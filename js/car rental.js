


var date = new Date();

var day = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear(),
    hour = date.getHours(),
    min  = date.getMinutes();
    

    month = (month < 10 ? '0' + month : month);
    day   = (day   < 10 ? '0' + day   : day  ); 
    hour  = (hour  < 10 ? '0' + hour  : hour ); // It adds a 0 to number less than 10 because input[type=time] only accepts 00:00 format. 
    min   = (min   < 10 ? '0' + min   : min  );
    

var today = year + "-" + month + "-" + day,
    displayTime = hour + ":" + min; 

document.getElementById('date-up').value = today;     
document.getElementById('date-up').min = today;  
document.getElementById('drop-date').min = today;      
document.getElementById("time-up").value = displayTime;
document.getElementById("drop-time").value = displayTime;





//slideshow start

var myIndex = 0;


(function carousel() {

  var i;

  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {

    x[i].style.display = "none";  

  }

  myIndex++;

  if (myIndex > x.length) {myIndex = 1}  
  
  x[myIndex-1].style.display = "block";  

  setTimeout(carousel, 2000); // Change image every 2 seconds
  

})();

//slideshow end


//display start



function showHide(d1,d2){

  var divDisplay=document.getElementById(d1);

  var divDisplay2=document.getElementById(d2);



  if((divDisplay.style.display)=="none"){

    (divDisplay.style.display)="block";

    (divDisplay2.style.display)="block";
    
    document.getElementById('off').style.top='34.3%';
   

  }

  else{

    (divDisplay.style.display)="none";

    (divDisplay2.style.display)="none";

    document.getElementById('off').style.top='78%';





  }


}

//display end

//place holder edit start


var ourInput = document.getElementById('pickup');

 ourInput.onfocus = function ()

  { 'use strict'; 

  this.removeAttribute('placeholder');

 }; 
 ourInput.onblur = function () 

 { 'use strict'; 

 this.setAttribute('placeholder', 'Enter you picking-up location'); 

};



var ourInput= document.getElementById('dropoff');

 ourInput.onfocus = function ()

  { 'use strict'; 

  this.removeAttribute('placeholder');

 }; 

 ourInput.onblur = function () 

 { 'use strict'; 

 this.setAttribute('placeholder', 'Enter you dropping-off location'); 

};



var ourInput= document.getElementById('mail');

 ourInput.onfocus = function ()

  { 'use strict'; 

  this.removeAttribute('placeholder');

 }; 
 ourInput.onblur = function () 

 { 'use strict'; 

 this.setAttribute('placeholder', 'Enter your Email'); 

};


//place holder edit end


