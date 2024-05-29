const customName = document.getElementById('customname');
const birthDate = document.getElementById('birthdate');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was date 2024 and also was placeholder\'s birthday, so placeholder\'s friends went with :insertx: to get placeholder a gift. When they got to :inserty:, they stared in horror as :inserty: had been demolished, then suddenly placeholder\'s friends :insertz:. placeholder saw the whole thing, and was horrfied ';
const insertX = ['Malcolm', 'Dean WoodBarks', 'Larry'];
const insertY = ['Mickey D\'s', 'the town of north melas', 'the state of nogero'];
const insertZ = ['combusted into ice shards', 'turned into  blocks of ice'];
const insertw = ['120','87','94'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  const wItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);
  newStory = newStory.replaceAll(':insertw',wItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('placeholder', name);
  }
  
   if (birthDate.value !== '') {
    const mdd = birthDate.value;
    newStory = newStory.replaceAll('date', mdd);
  }

  story.textContent = newStory

}
