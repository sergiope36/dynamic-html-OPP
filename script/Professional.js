class Professional {

    constructor(name, age, isRetired, nationality, oscarNumbers, profession, photo) {
        this.name = name;
        this.age = age;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarNumbers = oscarNumbers;
        this.profession = profession;
        this.photo = photo;
    }

    showAttributes() {
        console.log(`  
            Name: ${this.name}
            Age: ${this.age}
            Is retired?: ${this.isRetired}
            nationality: ${this.nationality}
            Number of Oscars: ${this.oscarNumbers}
            Profession: ${this.profession}
        `);
    }
}

class Cast {

    constructor (professional) {
        this.professionals = professional
    }
}

const elijah = new Professional("Elijah Wood", 39, false, "american", 0, "actor", "./img/Elijah.jpg")
const robert = new Professional("Robert Downey", 55, false, "american", 0, "actor", "./img/TonyStarks.jpg")
const collectionsActors = new Cast([elijah, robert])


const addElements = (movie) => {

    for(let i=0; i<movie.length; i++) {
        
        $('.film').append(`<div class="film-header"><div class="ranking"><h1>${i+1}</h1></div><div class="title"><h1>${movie[i].name}</h1></div><div class="year"><p>${movie[i].age} years old</p></div></div>`);
        $('.film').append(`<div class="information row"><div class="film-img col-6 col-md-4"><img src="${movie[i].photo}"></div><div class="description col-6 col-md-8"><p><span style="font-weight:bold">Nationality</span>: ${movie[i].nationality}</p><p><span style="font-weight:bold">Oscars won</span>: ${movie[i].oscarNumbers}</p><p><span style="font-weight:bold">Profession</span>: ${movie[i].profession}</p></div></div>`);
    }
}

$(function(){ 

    $('.film-description').append('<div class="film"></div>')
    addElements(collectionsActors.professionals)

    $( "#target" ).submit(function() {
        let name = $("#name").val();
        let age = $("#age").val();
        let nationality = $("#nationality").val();
        let photo = $("#photo").val();
        let oscarNumber = $("#oscarNumbers").val();
        let isRetired = $("#isRetired").val();
        let profession = $("#profession").val();

        const professional = new Professional (name, age, isRetired, nationality, oscarNumbers, profession, photo)
        
        professional.name = name;
        professional.age = age;
        professional.nationality = nationality;
        professional.oscarNumbers = oscarNumber;
        professional.profession= profession;
        professional.isRetired = isRetired

        collectionsActors.professionals.push(professional)
        
        addElements([professional])
   
    });    
})

