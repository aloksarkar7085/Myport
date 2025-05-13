/*const visitorCountElement = document.getElementById('visitor-count');


let visitorCount = localStorage.getItem('visitorCount') || 0;


visitorCount++;
localStorage.setItem('visitorCount', visitorCount);

visitorCountElement.textContent = `Visitors: ${visitorCount}`;*/
   /* let typed = new Typed('.multiple-text',{
      strings:['Web Developer.','Software Engineer.','Editor.','Code Lover.','DSA Lover.'],
typeSpeed:70,
backSpeed:70,
backDelay:1000,
loop:true,
    });*/
// Typed.js Animation
/*let typed = new Typed('.multiple-text', {
    strings: ['SAP ABAP DEV.', 'Web Developer.', 'Software Engineer.', 'Editor.', 'Code Lover.', 'DSA Lover.'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});*/
let typed = new Typed('.multiple-text', {
    strings: ['SAP ABAP DEV.','Web Developer.', 'Software Engineer.', 'Editor.', 'Code Lover.', 'DSA Lover.'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});


/*let typed = new Typed('.multiple-text', {
    strings: ['SAP ABAP DEV.', 'Web Developer.', 'Software Engineer.', 'Editor.', 'Code Lover.', 'DSA Lover.'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});*/
const x=document.getElementById('man');
const b=document.querySelector('.m');
const c= document.querySelector('.n');
function openMenu(){
    x.style.display='block';
    b.style.display='none';
    c.style.display='block';
}
function closeMenu(){
    x.style.display='none';
    b.style.display='block';
    c.style.display='none';
}


