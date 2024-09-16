 // Array of project objects
const projects = [
  {
    title: 'Project 1: Cell Tower Optimization Problem',
    description: 'A research project on optimization algorithms when applied to cell tower placement.',
    link: 'https://github.com/pattonnelson/pattonnelson.github.io/blob/main/CellTowerProblem.ipynb'
  },
  {
    title: 'Project 2: A Visual Analysis of Global Carbon Emissions',
    description: 'Exploring machine learning algorithms to predict stock prices based on historical data.',
    link: 'https://github.com/pattonnelson/pattonnelson.github.io/blob/main/Visual%20Analysis%20on%20Global%20Carbon%20Emissions.pdf'
  },
  {
    title: 'Project 3: Model Classification on Early Modern vs. Modern English via Poetry',
    description: 'Understanding how machines interpret and respond to human language using NLP techniques.',
    link: 'https://github.com/pattonnelson/pattonnelson.github.io/blob/main/FinalProject_PattonNelson.ipynb'
  }
];

// Function to display projects
function displayProjects() {
  const projectList = document.getElementById('project-list');
  
  projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    
    projectDiv.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}">Read More</a>
    `;
    
    projectList.appendChild(projectDiv);
  });
}

// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Your message has been sent!');
});

// Load projects on page load
window.onload = function() {
  displayProjects();
};
