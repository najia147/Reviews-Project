let data = [
  {
    id: 1,
    imgSrc: "./images/1.JPG",
    name: "Najia",
    job: "Web Developer",
    description: `Najia is a passionate web developer who enjoys learning and building with Shopify. She’s constantly exploring new ways to improve her skills and create seamless e-commerce experiences.`,
  },
  {
    id: 2,
    imgSrc: "./images/2.JPG",
    name: "Nahid",
    job: "Instructor",
    description: `Nahid is a passionate instructor who brings energy and clarity to every lesson. She’s dedicated to making complex topics easy to understand for all students.`,
  },
  {
    id: 4,
    imgSrc: "./images/4.JPG",
    name: "Nayez",
    job: "Reporter",
    description: `With a keen eye for detail, Nayez reports stories with accuracy and depth. He’s known for his engaging storytelling and strong journalistic ethics.`,
  },
  {
    id: 3,
    imgSrc: "./images/3.jpg",
    name: "Nazanin",
    job: "Graphic Designer",
    description: `Nazanin has a creative eye for design and a talent for turning ideas into beautiful visuals. She always delivers work that’s both stylish and functional.`,
  },
];

let img = document.getElementById("image");
let nameContent = document.getElementById("name");
let jobContent = document.getElementById("job");
let descriptionContent = document.getElementById("description");
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let randomButton = document.getElementById("random");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
  let item = data[person];
  img.src = item.imgSrc;
  nameContent.textContent = item.name;
  jobContent.textContent = item.job;
  descriptionContent.textContent = item.description;
}

nextButton.addEventListener("click", function () {
  currentItem++;
  if (currentItem > data.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevButton.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = data.length - 1;
  }
  showPerson(currentItem);
});

function getRandomElement() {
  return Math.floor(Math.random() * data.length);
}

randomButton.addEventListener("click", function () {
  let randomElement = getRandomElement();
  currentItem = randomElement;
  showPerson(currentItem);
});
