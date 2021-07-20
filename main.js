
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

const displayTherapists = () => {
  const allTherapistsSection = document.getElementById('all-therapists-section')
  therapists.forEach(therapist => {
    allTherapistsSection.innerHTML +=
    `<article class='therapist-card'>
      <p class='therapist-name'>${therapist.lname}, ${therapist.fname}</p>
    </article>`
  })
}

const loadTherapists = () => {
  const formattedTherapists = capitalizeNames()
  displayTherapists(formattedTherapists)
}

window.addEventListener('load', loadTherapists)
