 const projects = [
  { title: 'Cell Tower Optimization Project', description: 'A research project on optimization algorithms when applied to cell tower placement.', link: 'https://github.com/pattonnelson/pattonnelson.github.io/blob/main/CellTowerProblem.ipynb' },
  { title: 'A Visual Analysis of Global Carbon Emissions', description: 'Visualizing climate change factors globally, with a specific focus on carbon emissions', link: 'https://github.com/pattonnelson/pattonnelson.github.io/blob/main/Visual%20Analysis%20on%20Global%20Carbon%20Emissions.pdf' },
  { title: 'Model Classification on Early Modern vs. Modern English via Poetry', description: 'Understanding how machines interpret and respond to human language using NLP techniques', link: 'https://github.com/pattonnelson/pattonnelson.github.io/blob/main/FinalProject_PattonNelson%20(1).ipynb' }
];

const projectList = document.getElementById('project-list');

projects.forEach(project => {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project'); // No longer using 'project-box', just 'project' for full-width

  projectDiv.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">View Project</a>
  `;

  projectList.appendChild(projectDiv);
});


// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Your message has been sent!');
});

// Load projects on page load
window.onload = function() {
  displayProjects();
};
