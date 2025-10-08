const menuData=[
  {id:'m1',title:'Fish Miti',category:'mains',price:12},
  {id:'m2',title:'Lovo',category:'mains',price:15},
  {id:'m3',title:'Rourou Meat',category:'mains',price:12},
  {id:'m4',title:'Curry',category:'mains',price:12},
  {id:'m5',title:'Dessert',category:'snacks',price:5}
];

const schedule=[
  {day:'Monday',place:'Suva Market 8am-4pm'},
  {day:'Wednesday',place:'Suva Waterfront 8am-4pm'},
  {day:'Friday',place:'Suva Town Center 8am-4pm'},
  {day:'Saturday',place:'Suva Beachside 8am-4pm'}
];

const highlights=menuData.slice(0,3);
const specials=[
  {title:'2-for-1 Dessert',price:5,desc:'Bring a friend!'},
  {title:'Free Drink w/ Mains',price:0,desc:'One free dessert with any main'}
];

function renderSchedule(){
  const el=document.getElementById('schedule');
  if(el) el.innerHTML = schedule.map(s=>`<li><strong>${s.day}</strong> – ${s.place}</li>`).join('');
}

function renderHighlights(){
  const el=document.getElementById('highlights');
  if(el) el.innerHTML = highlights.map(h=>`<li>${h.title} - $${h.price}</li>`).join('');
}

function renderSpecials(){
  const el=document.getElementById('specials');
  if(el) el.innerHTML = specials.map(s=>`<li>${s.title} - ${s.desc} - $${s.price}</li>`).join('');
}

function renderMenu(){
  const el=document.getElementById('menu-list');
  if(el) el.innerHTML = menuData.map(m=>`<li>${m.title} - $${m.price}</li>`).join('');
}

function contactForm(){
  const form = document.getElementById('contact-form');
  if(!form) return;
  const count = document.getElementById('submit-count');
  const confirmEl = document.getElementById('form-confirm');
  let submitted = 0;
  form.addEventListener('submit', e=>{
    e.preventDefault();
    submitted++;
    count.textContent = submitted;
    confirmEl.textContent = 'Message sent!';
    form.reset();
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderSchedule();
  renderHighlights();
  renderSpecials();
  renderMenu();
  contactForm();
});
