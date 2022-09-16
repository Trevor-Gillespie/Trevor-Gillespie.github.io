//Selectors
const techButton = document.getElementById('tech-button');
const softButton = document.getElementById('soft-button');
const techCard = document.getElementById('technical-skills');
const softCard = document.getElementById('soft-skills');

//Event Listeners
techButton.addEventListener('click', closeSoftCard);
softButton.addEventListener('click', closeTechCard);

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
