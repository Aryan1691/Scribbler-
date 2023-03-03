let Delete = document.getElementById('delete');
let Modal = document.getElementById('modal');
let yes = document.getElementById('yes');
let container = document.getElementById('container');
let No = document.getElementById('no');

Delete.addEventListener('click',newBar);
yes.addEventListener('click',remove);
No.addEventListener('click',dontRemove);
//when click on delete button it will show the delete modal which will give option 
//whether to delete the post or not
function newBar(){
Modal.style.display='block';
}

//If clicked Yes then the post will be deleted 
function remove(){
container.style.display='none';
Modal.style.display='none';

}
//If clicked No then the post will not be deleted 
function dontRemove(){
Modal.style.display='none';
}




let Delete2 = document.getElementById('delete2');
let Modal2 = document.getElementById('modal2');
let container2 = document.getElementById('container2');


let yes2 = document.getElementById('yes2');
let no2 = document.getElementById('no2');

Delete2.addEventListener('click',newBar2);
yes2.addEventListener('click',remove2);
no2.addEventListener('click',dontRemove2);

//when click on delete button it will show the delete modal which will give option 
//whether to delete the post or not
function newBar2(){
    Modal2.style.display='block';
}
//If clicked Yes then the post will be deleted 
function remove2(){
    container2.style.display='none';
    Modal2.style.display='none';
}
//If clicked No then the post will not be deleted 
function dontRemove2(){
    Modal2.style.display='none';
}


    

let Delete3 = document.getElementById('delete3');
let Modal3 = document.getElementById('modal3');
let container3 = document.getElementById('container3');


let yes3 = document.getElementById('yes3');
let no3 = document.getElementById('no3');

Delete3.addEventListener('click',newBar3);
yes3.addEventListener('click',remove3);
no3.addEventListener('click',dontRemove3);

//when click on delete button it will show the delete modal which will give option 
//whether to delete the post or not
function newBar3(){
    Modal3.style.display='block';
}

//If clicked Yes then the post will be deleted 
function remove3(){
    container3.style.display='none';
    Modal3.style.display='none';

}
//If clicked No then the post will not be deleted 
function dontRemove3(){
    Modal3.style.display='none';
}



let Delete4 = document.getElementById('delete4');
let Modal4 = document.getElementById('modal4');
let container4 = document.getElementById('container4');


let yes4 = document.getElementById('yes4');
let no4 = document.getElementById('no4');

Delete4.addEventListener('click',newBar4);
yes4.addEventListener('click',remove4);
no4.addEventListener('click',dontRemove4);

//when click on delete button it will show the delete modal which will give option 
//whether to delete the post or not
function newBar4(){
    Modal4.style.display='block';
}

//If clicked Yes then the post will be deleted 
function remove4(){
    container4.style.display='none';
    Modal4.style.display='none';

}
//If clicked No then the post will not be deleted 
function dontRemove4(){
    Modal4.style.display='none';
}


let Delete5 = document.getElementById('delete5');
let Modal5 = document.getElementById('modal5');
let container5 = document.getElementById('container5');


let yes5 = document.getElementById('yes5');
let no5 = document.getElementById('no5');

Delete5.addEventListener('click',newBar5);
yes5.addEventListener('click',remove5);
no5.addEventListener('click',dontRemove5);

//when click on delete button it will show the delete modal which will give option 
//whether to delete the post or not
function newBar5(){
    Modal5.style.display='block';
}

//If clicked Yes then the post will be deleted 
function remove5(){
    container5.style.display='none';
    Modal5.style.display='none';

}
//If clicked No then the post will not be deleted 
function dontRemove5(){
    Modal5.style.display='none';
}

//If clicked on Three dots then it will open new page which is post.html
function openPost(author,heading,content){
    let url = `../html/post.html?heading=${encodeURIComponent(heading.innerText)}&author=${encodeURIComponent(
        author.innerText
    )}&content=${encodeURIComponent(content.innerText)}`;
    window.location.href=url;
}

