// Navigation and section handling
const navBtns = document.querySelectorAll('.nav-btn');
const sections = {
  home: document.getElementById('home-section'),
  resume: document.getElementById('resume-section'),
  biodata: document.getElementById('biodata-section'),
};

function setActive(target){
  // Hide all sections
  Object.values(sections).forEach(s => {
    s.style.display = 'none';
    s.classList.remove('fade-in');
  });

  // Show target section and add animation
  const section = sections[target];
  section.style.display = 'block';
  section.classList.add('fade-in');

  // Update active button
  navBtns.forEach(b => b.classList.toggle('active', b.dataset.target === target));

  // Scroll to top
  window.scrollTo({top:0, behavior:'smooth'});
}

navBtns.forEach(btn=>{
  btn.addEventListener('click', () => setActive(btn.dataset.target));
});

// Buttons in welcome card
document.getElementById('goResume').addEventListener('click', ()=> setActive('resume'));
document.getElementById('goBiodata').addEventListener('click', ()=> setActive('biodata'));

// Initial load animation
setActive('home');

// Keyboard shortcuts
window.addEventListener('keydown', (e)=>{
  if(e.key === '1') setActive('home');
  if(e.key === '2') setActive('resume');
  if(e.key === '3') setActive('biodata');
});
