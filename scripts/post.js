//incrementing the like and changing the text from 'Like' to 'Liked'
//and changing the given text to  "x people like this!"

let change = document.getElementById('likeButton');
let changeContent = document.getElementById('changeTheContent');

change.addEventListener('click',Change);
let index = 0;
function Change(){
index+=1;
change.value='Liked';
changeContent.innerHTML=`${index} people like this!`;
}


//getting the comment from textArea and printing it 
let text = document.getElementById('textArea');
let comButton = document.getElementById('commentbutton');
let Output = document.getElementById('output');

comButton.addEventListener('click',show);

function show(){
    const temp =document.getElementById('output').innerHTML;
    document.getElementById('output').innerHTML=`<p id="context">${text.value}<p/>`;
    document.getElementById('output').innerHTML+=`${temp}`
}

let queryString = new Array();
let edit = false;
let num = 0;

//This part of code will let us edit the content and change the styles accordingly
function onEdit(){
    num+=1;
    if(!edit){
        edit=true;
        document.getElementById('edit-heading').style.borderWidth='2px';
        document.getElementById('edit-heading').style.borderColor='red';
        document.getElementById('edit-heading').style.borderStyle='solid';
        document.getElementById('edit-heading').contentEditable='true';
        document.getElementById('edit-contenttext').contentEditable='true';
       

        document.getElementById('edit-contenttext').style.borderWidth='2px';
        document.getElementById('edit-contenttext').style.borderColor='red';
        document.getElementById('edit-contenttext').style.borderStyle='solid';

        document.getElementById('edit-button').innerHTML='save<i class="fa fa-save" style="padding-left: 4px;"></i></button>'
      
    }else{
        if (num==2) {
            var temp = document.getElementById('edit-heading');
            document.getElementById('edit-heading').innerHTML = `<span>UPDATED:</span>${temp.innerHTML}`;

            var temp = document.getElementById('edit-contenttext');
            document.getElementById('edit-contenttext').innerHTML = `<div>UPDATED:</div>${temp.innerHTML}`;
        }
        document.getElementById('edit-contenttext').style.border = 'none';
        document.getElementById('edit-heading').style.border = 'none';
        document.getElementById('edit-heading').contentEditable='false';
        document.getElementById('edit-contenttext').contentEditable='false';


        document.getElementById('edit-button').innerHTML =
                'Edit<i class="fa fa-edit" style="padding-left: 4px;"></i>';
        document.getElementById('edit-button').disabled = true;
    }
}

//this part of the code will help in fetching the data from postlist.html and print it on post.html and will let you 
//edit the content
window.onload=()=>{
    if (queryString.length==0) {
        if (window.location.search.split('?').length>1) {
            const param = window.location.search.split('?')[1].split('&');
            for(let i = 0;i<param.length;i++){
                const key = param[i].split('=')[0];
                const value = decodeURIComponent(param[i].split('=')[1]);
                queryString[key]=value;
            }
        }
    }
    if(queryString.heading !=null && queryString.author !=null){
        const{ heading } = queryString;
        const{ author }  = queryString;
        const{ content } = queryString;
        document.getElementsByClassName('heading-content')[0].innerHTML = heading;
        let find = document.getElementById('span1');
   
      
        document.getElementsByClassName('author-name')[0].innerHTML = author;
        document.getElementsByClassName('post-content')[0].innerHTML = content;
    }
}