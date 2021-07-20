
const therapistsData = `[{"fname":"esme", "lname":"sanchez", "id":1892038, "isTherapist":true},

{"fname":"rick", "lname":"jeps", "id":1894024, "isTherapist":false},

{"fname":"angie", "lname":"lange", "id":1982403, "isTherapist":false},

{"fname":"renat", "lname":"gros", "id":1894039, "isTherapist":true},

{"fname":"bettino", "lname":"yang", "id":3789204, "isTherapist":true}]`


const therapists = JSON.parse(therapistsData)

const capitalizeFirstLetter = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

const capitalizeNames = () => {
  const therapistsNames = therapists.map(therapist => {
    therapist.fname = capitalizeFirstLetter(therapist.fname)
    therapist.lname = capitalizeFirstLetter(therapist.lname)
    return therapist
  })
 return therapistsNames
}


const loadTherapists = () => {
  const formattedTherapists = capitalizeNames()
  console.log(formattedTherapists)
}

window.addEventListener('load', loadTherapists)

// In order to evaluate some of your skills that will be necessary for this position, 
// please complete the coding assignment below. Please only use pure JavaScript (no jQuery, react, or similar libraries/frameworks).

// Using any IDE or platform you would like, please consume the JSON data provided 
// and display it as pictured below. You may submit raw .txt files. You may also 
// submit a GitHub page from your repo with the solution as long as the page is deployed.

// Your display must include the following features:

// List each user, last name first, with each name capped
// When a user is hovered over, the containing element must change color
// Include a padding of 10px by 5px for each user
// The display must be vertically and horizontally centered on the screen, and must remain so during screen resizing

