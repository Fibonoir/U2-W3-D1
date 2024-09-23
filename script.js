class User {
    constructor (_firstName, _lastName, _age, _location) {
      this.firstName = _firstName;
      this.lastName = _lastName;
      this.age = _age;
      this.location = _location;
    }

    compareAge(otherUser) {
      if(this.age > otherUser.age) {
        return `${this.firstName} is older than ${otherUser.firstName}.`
      } else if (this.age < otherUser.age) {
        return `${this.firstName} is older than ${otherUser.firstName}.`
      } else {
        `${this.firstName} and ${otherUser.firstName} have the same age.`
      }
    }
}

const user1 = new User("Jon", "Snow", 24, "Targaryen");
const user2 = new User("Rhaegar", "Targaryen", 23, "Targaryen");

console.log(user1.compareAge(user2))

class Pet {
  constructor (_petName, _ownerName, _species, _breed){
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  compareOwners (previousPet){
    if (this.ownerName.toLowerCase() === previousPet.ownerName.toLowerCase()) {
      console.log(`${this.petName} has the same owner as ${previousPet.petName}.`);
      return true;
    } else {
      console.log(`${this.petName}'owner isnt' the same as ${previousPet.petName}'owner.`);
      return false;
    }
  }
}

const pet = [];
let petCount = 1;

document.getElementById("userForm").addEventListener("submit", function(event){
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);

  pet.push(newPet);
  console.log(`Pet${petCount} created:`, newPet);
  
  if(pet.length > 1){
    const previousPet = pet[pet.length-2];
    console.log(newPet.compareOwners(previousPet))
  }
  
  document.getElementById("petName").value = '';
  document.getElementById("ownerName").value = '';
  document.getElementById("species").value = '';
  document.getElementById("breed").value = '';
  
  document.getElementById("petName").focus();


  function creatPetCard (pet, petIndex) {
    const card = document.createElement('div');
    card.classList.add("m-8", "p-4", "text-start", "rounded-md", "bg-slate-950");

    card.innerHTML = `
      <h2>Pet ${petIndex}</h2>
      <p><strong>Pet Name:</strong> ${pet.petName}</p>
      <p><strong>Owner Name:</strong> ${pet.ownerName}</p>
      <p><strong>Species:</strong> ${pet.species}</p>
      <p><strong>Breed:</strong> ${pet.breed}</p>
    `;

    document.getElementById('userCardsContainer').appendChild(card);
  }

  creatPetCard(newPet, petCount);
  petCount++;
})