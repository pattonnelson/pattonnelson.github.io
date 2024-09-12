// Array of project objects
const projects = [
  {
    title: 'Project 1: Data Analysis',
    description: 'A research project on data analysis techniques using Python and statistical models.',
    link: '#'
  },
  {
    title: 'Project 2: Machine Learning',
    description: 'Exploring machine learning algorithms to predict stock prices based on historical data.',
    link: '#'
  },
  {
    title: 'Project 3: Natural Language Processing',
    description: 'Understanding how machines interpret and respond to human language using NLP techniques.',
    link: '#'
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
