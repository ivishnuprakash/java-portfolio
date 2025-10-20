// Dynamically load skills, projects, and certificates
const skills = [
    "Java", "Python", "HTML", "CSS", "JavaScript",
    "Spring Boot", "Flask", "MySQL", "OpenCV", "Git"
  ];
  
  const projects = [
    { title: "Invoice Management System", desc: "Python-based system for stock and record management." },
    { title: "AI Mouse", desc: "Gesture-controlled interface using OpenCV & MediaPipe." },
    { title: "Smile-farm", desc: "Agriculture support project with multilingual UI." }
  ];
  
  const certificates = [
    "TATA Forage — Data Visualization",
    "HackerRank — Problem Solving"
  ];
  
  // Populate skills dynamically
  document.getElementById('skills').innerHTML =
    skills.map(s => `<div class='skill'>${s}</div>`).join('');
  
  // Populate projects dynamically
  document.getElementById('projects').innerHTML =
    projects.map(p => `<li><strong>${p.title}</strong>: ${p.desc}</li>`).join('');
  
  // Populate certificates dynamically
  document.getElementById('certificates').innerHTML =
    certificates.map(c => `<li>${c}</li>`).join('');
  
  // Set current year
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Theme toggle
  const toggleBtn = document.getElementById('modeToggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = document.body.classList.contains('dark-mode')
      ? 'Light Mode'
      : 'Dark Mode';
  });
  