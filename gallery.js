/*Name this external file gallery.js*/

function upDate(previewPic){
    console.log('upDate function triggered');
    console.log('previewPic:', previewPic); 
    const x=document.getElementById('image');
    x.style.backgroundImage=`url(${previewPic.src})`;
    x.style.backgroundColor='#b3b3b3';
    x.innerHTML=previewPic.alt;
       }
   
function unDo(previewPic){
        console.log('unDo function triggered');
        const x=document.getElementById('image');
        x.style.backgroundImage="url('')";
        x.style.backgroundColor='#8e68ff';
        x.innerHTML="Hover over an image below to display here.";
       }

 function onFocus(previewPic){
    console.log('onFocus function triggered');
    console.log('Preview Image:', previewPic);
    const x=document.getElementById('image');
    x.style.backgroundImage=`url(${previewPic.src})`;
    x.style.backgroundColor='#b3b3b3';
    x.innerHTML=previewPic.alt;
    previewPic.style.border='10px solid red';
 }

 function onBlur(previewPic){
   console.log('onblur triggered')
    const x=document.getElementById('image');
        x.style.backgroundImage="url('')";
        x.style.backgroundColor='#8e68ff';
        x.innerHTML="Hover over an image below to display here.";  
        previewPic.style.border="10px solid black";
 }

 function tabfocus(){
   console.log("tabfocus event is triggered");
   const images=document.querySelectorAll('.preview');
   for(var i=0;i<images.length;i++){
      console.log("the for loop event triggered");
      images[i].setAttribute('tabindex','0');
   }
 }