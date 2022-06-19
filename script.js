const doc = document.querySelector('body');
const checkbox= document.querySelector('.toggler');
const menu= document.querySelector('.menu_content ul');
const arrowBurger= document.querySelector('.pointer');
let navHome= document.querySelectorAll('.nav_home');
let navMobile= document.querySelectorAll('.nav_burg');
let j, k;



doc.addEventListener('click', triggerActive);

function triggerActive(e){
  e.preventDefault();

   if(e.target.classList.contains('nav_home')){
     e.target.classList.toggle('active');
     let i;
     for(let i=0; i<navHome.length; i++){
       if(navHome[i] !== e.target)
       navHome[i].classList.remove('active');
     }
   }
}

doc.addEventListener('click', triggerMobile);

function triggerMobile(e){
  e.preventDefault();

   if(e.target.classList.contains('nav_burg')){
     e.target.classList.toggle('active_me');
     let i;
     for(let i=0; i<navHome.length; i++){
       if(navMobile[i] !== e.target)
       navMobile[i].classList.remove('active_me');
     }
   }
}


doc.addEventListener('click', triggerMenu);

function triggerMenu(e){  
  j= parseInt(e.target.value); 
  k= j % 2;
  console.log(k);

  
  if(checkbox.checked === true && k=== 0){
    menu.style.display='flex';
    arrowBurger.style.display='block';
    console.log(e.target.value);
    j= j+1;
    e.target.value= j;

  }else if(  checkbox.checked === true && k=== 1) {
    menu.style.display='none';
    arrowBurger.style.display='none';
    j= j+1;
    e.target.value= j;
  
  }

}