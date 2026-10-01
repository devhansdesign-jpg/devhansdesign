
const menuBtn=document.querySelector('.mobile-menu');
const menu=document.querySelector('.menu');
if(menuBtn && menu){
  menuBtn.addEventListener('click',()=>{
    const open=menu.style.display==='flex';
    menu.style.display=open?'none':'flex';
    if(!open){
      menu.style.position='absolute';menu.style.top='82px';menu.style.left='0';menu.style.right='0';
      menu.style.background='#e9e1d7';menu.style.padding='20px 4vw';menu.style.flexDirection='column';
      menu.style.borderBottom='1px solid #d9cabb';
    }
  });
}
document.querySelectorAll('[data-filter]').forEach(btn=>{
 btn.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  const f=btn.dataset.filter;
  document.querySelectorAll('.product').forEach(p=>p.style.display=(f==='all'||p.dataset.cat===f)?'block':'none');
 });
});
const form=document.querySelector('#enquiryForm');
if(form){
 form.addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(form);
  const subject=encodeURIComponent('DEVHANS Website Enquiry - '+(d.get('interest')||'General'));
  const body=encodeURIComponent('Name: '+(d.get('name')||'')+'\nCompany: '+(d.get('company')||'')+'\nPhone/WhatsApp: '+(d.get('phone')||'')+'\nInterest: '+(d.get('interest')||'')+'\n\nMessage:\n'+(d.get('message')||''));
  window.location.href='mailto:devhansv@gmail.com?subject='+subject+'&body='+body;
 });
}
