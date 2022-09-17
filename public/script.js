//Selectors
const techButton = document.getElementById('tech-button');
const softButton = document.getElementById('soft-button');
const techCard = document.getElementById('technical-skills');
const softCard = document.getElementById('soft-skills');
const darkButton = document.getElementById('dark-button');
const body = document.body;

//Event Listeners
techButton.addEventListener('click', closeSoftCard);
softButton.addEventListener('click', closeTechCard);
darkButton.addEventListener('click', toggleBrightness)

//Functions
function closeSoftCard(event){
  if (softCard.classList.contains('show')){
    softCard.classList.remove('show');
  };
}
function closeTechCard(event){
  if (techCard.classList.contains('show')){
    techCard.classList.remove('show');
  };
}
function toggleBrightness(event){
  if (darkButton.classList.contains('dark')){
    darkButton.classList.add('light');
    darkButton.classList.remove('dark');
    darkButton.innerHTML = '☼';
    body.classList.add('darkmode');

  } else if (darkButton.classList.contains('light')){
    darkButton.classList.add('dark');
    darkButton.classList.remove('light');
    darkButton.innerHTML = '☽';
    body.classList.remove('darkmode');
  };
}