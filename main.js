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
