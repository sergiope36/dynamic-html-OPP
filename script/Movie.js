class Movie {
    constructor(title, releaseYear, nationality, genre, photo) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.photo = photo
    }

    showFilms() {
        console.log(`  
            Tittle: ${this.title}
            ReleaseYear: ${this.releaseYear}
            Actors: ${this.actors}
            Nationality: ${this.nationality}
            Director: ${this.director}
            Writer: ${this.language}
            Languate: ${this.language}
            Platform: ${this.platform}
            is MCU?: ${this.isMCU}
            Main Character Name: ${this.mainCharacterName}
            Producer: ${this.producer}
            Distributor: ${this.distributor}
            Genre: ${this.genre}

        `);
    }
}

class ImdB {

    constructor (movies) {
        this.movies = movies
    }
}

const avengers = new Movie("Avengers", 2012, "American", "Action", "./img/Avengers.jpg");


avengers.actors = ["Robert Downey", " Chris Evans", " Mark Ruffallo", " Scarlett Johannsoon"];
avengers.director = "Joss Whedon";
avengers.writer = "Joss Whedon";
avengers.language = "English";
avengers.platform = "Cinema";
avengers.isMCU = true;
avengers.mainCharacterName = "Tony Stark";
avengers.producer = "Jon Favreau";
avengers.distributor = "Marvel";

const lordOfTheRings = new Movie("The lord of the Rings", 2003, "American", "Adventure", "img/LordoftheRings.jpg");

lordOfTheRings.actors = ["Elijah Wood", "Miranda Otto", "Orlando Bloom", "Karl Urban"];
lordOfTheRings.director = "Peter Jackson";
lordOfTheRings.writer = "Fran Walsh";
lordOfTheRings.language = "English";
lordOfTheRings.platform = "Cinema";
lordOfTheRings.isMCU = true;
lordOfTheRings.mainCharacterName = "Frodo Bolson";
lordOfTheRings.producer = "Barrie M. Osborne";
lordOfTheRings.distributor = "New Line Cinema";

const yesterday = new Movie("Yesterday", 2019, "American", "Comedy", "img/Yesterday.jpg");

yesterday.actors = ["Himesh Patel", "Lily James", "Joel Fry", "Ed Sheeran"];
yesterday.director = "Danny Boyle";
yesterday.writer = "Jack Barth";
yesterday.language = "English";
yesterday.platform = "Cinema";
yesterday.isMCU = true;
yesterday.mainCharacterName = "Jack Malik";
yesterday.producer = "Danny Boyle";
yesterday.distributor = "New Line Cinema";

const matrix = new Movie("Matrix", 2001, "American", "Fantasy", "img/Matrix.jpg");

matrix.actors = ["Keanu Reeves", "Carrie-Anne Moss", "Laurence Fishburne"];
matrix.director = "The Wachowskis";
matrix.writer = "The Wachowskis";
matrix.language = "English";
matrix.platform = "Cinema";
matrix.isMCU = true;
matrix.mainCharacterName = "Neo";
matrix.producer = "Joel Silver";
matrix.distributor = "Warner Bross";


const collectionsImdb = new ImdB([avengers,lordOfTheRings, yesterday, matrix])

const addElements = (movie) => {    
   
    for(let i=0; i<movie.length; i++) {
        $('.film').append(`<div class="film-header"><div class="ranking"><h1>${i+1}</h1></div><div class="title"><h1>${movie[i].title}</h1></div><div class="year"><p>${movie[i].releaseYear}</p></div></div>`);
        $('.film').append(`<div class="film-img"><img src="${movie[i].photo}"></div>`);
        $('.film').append(`<div class="description"><p><span style="font-weight:bold">Director</span>: ${movie[i].director}</p><span style="font-weight:bold">Cast</span>: ${movie[i].actors}</p><span style="font-weight:bold">Producer</span>: ${movie[i].producer}</p></div>`)
    }
}

$(function(){ 

    $('.film-description').append('<div class="film"></div>')
    addElements(collectionsImdb.movies)
  
    var newFilm
   
    $( "#target" ).submit(function() {
        let title = $("#title").val();
        let releaseYear = $("#releaseYear").val();
        let nationality = $("#nationality").val();
        let genre = $("#genre").val();
        let photo = $("#photo").val();
        let actors = $("#actors").val();
        let director = $("#director").val();
        let writer = $("#writer").val();
        let language = $("#language").val();
        let platform = $("#platform").val();
        let isMCU = $("#isMCU").val();
        let mainCharacterName = $("#mainCharacterName").val();
        let producer = $("#producer").val();
        let distributor = $("#distributor").val();

        let newFilm = new Movie(title, releaseYear, nationality, genre, photo)
        
        newFilm.actors = [actors];
        newFilm.director = director;
        newFilm.writer = writer;
        newFilm.language = language;
        newFilm.platform = platform;
        newFilm.isMCU = isMCU;
        newFilm.mainCharacterName = mainCharacterName;
        newFilm.producer = producer;
        newFilm.distributor = distributor;

        collectionsImdb.movies.push(newFilm);
        let local = localStorage.setItem("key", JSON.stringify(newFilm));

        return local;

    });

        newFilm = JSON.parse(localStorage.getItem("key"));
    
        addElements([newFilm])
  
})

