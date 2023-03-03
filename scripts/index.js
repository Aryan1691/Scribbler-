//details about sign up
var modal = document.getElementById('simpleModal');
var openButton = document.getElementById('modalBTN');
var closeButton = document.getElementById('closeBtn');


openButton.addEventListener('click',open);
closeButton.addEventListener('click',close);

//function when sign up button is clicked
function open(){
    modal.style.display='block';
    
}
//when x button is clicked 
function close(){
    modal.style.display='none';
}


//fetching the data and making sure that each and every data if filled 
function fetchData(name,username,password,check){
    let data ={
        first_name:name.value,
        user_name:username.value,
        Password:password.value,
        check_password:check.value
    }
    let find = JSON.stringify(data);
  
    sessionStorage.setItem('data',find);
  
}
//details about sign in
var modal2 = document.getElementById('simpleModal2');
var openButton2 = document.getElementById('modalBTN2');
var closeButton2 = document.getElementById('closeBtn2');

openButton2.addEventListener('click',open2);
closeButton2.addEventListener('click',close2);

function open2(){
    modal2.style.display='block';
}

function close2(){
    modal2.style.display='none';
}
var notAMember = document.getElementById('anchor1');
 notAMember.addEventListener('click',openModal1);

 function openModal1(){
    modal2.style.display='none';
    modal.style.display='block';
 }



 function fetchData2(username1,password1){
    let data ={
        user_name:username1.value,
        Password:password1.value,
    }
    let val = JSON.stringify(data);
    let store = window.btoa(val);
    sessionStorage.setItem('confidential',store);
 }

 //details about new post 
 let close3 = document.getElementById('closeBtn3');
 let modal3 = document.getElementById('simpleModal3');
 let open3 = document.getElementById('Create');


 open3.addEventListener('click',modelOpen);
 close3.addEventListener('click',modelClose);

 function modelOpen(){
    modal3.style.display='block';
 }
 function modelClose(){
    modal3.style.display='none';
 }

function fetchData3(contentTitle,contents){
    let data ={
        contentTitle_title:contentTitle.value,
        contents_data:contents.value
    }
    let val = JSON.stringify(data);
    sessionStorage.setItem('content-info',val);
}


let but = document.getElementById('All');

but.addEventListener('click',newTab);

function newTab(){
    window.location.href="./html/postslist.html";
}
