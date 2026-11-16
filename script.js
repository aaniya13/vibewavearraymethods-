
// ==========================================
// VIBEWAVE - JAVASCRIPT ARRAY METHODS
// ==========================================


// 1. CREATING AN ARRAY OF SONGS

let songs = [

    {
        title: "Blinding Lights",
        artist: "The Weeknd",
        genre: "Pop",
        duration: 200
    },

    {
        title: "Shape of You",
        artist: "Ed Sheeran",
        genre: "Pop",
        duration: 235
    },

    {
        title: "Perfect",
        artist: "Ed Sheeran",
        genre: "Romantic",
        duration: 263
    },

    {
        title: "Levitating",
        artist: "Dua Lipa",
        genre: "Dance",
        duration: 203
    },

    {
        title: "Night Changes",
        artist: "One Direction",
        genre: "Romantic",
        duration: 226
    },

    {
        title: "Stay",
        artist: "Justin Bieber",
        genre: "Pop",
        duration: 141
    }

];


// 2. DISPLAYING SONGS USING forEach()

function displaySongs() {

    let songList = document.getElementById("arraySongList");

    songs.forEach(function(song, index) {

        let songCard = document.createElement("div");

        songCard.className = "song-item";

        songCard.innerHTML =
            "<strong>" + (index + 1) + ". " +
            song.title + "</strong>" +
            "<p>" + song.artist +
            " | " + song.genre + "</p>";

        songList.appendChild(songCard);

    });

}


// 3. DISPLAYING ARRAY METHOD CARDS

let methodDetails = [

    {
        name: "forEach()",
        icon: "🎵",
        description: "Executes a function for every element in an array."
    },

    {
        name: "map()",
        icon: "✨",
        description: "Creates a new array by transforming every element."
    },

    {
        name: "filter()",
        icon: "🎧",
        description: "Creates a new array containing elements that match a condition."
    },

    {
        name: "find()",
        icon: "🔍",
        description: "Returns the first element that satisfies a condition."
    },

    {
        name: "sort()",
        icon: "📀",
        description: "Arranges array elements in a specified order."
    },

    {
        name: "reduce()",
        icon: "📊",
        description: "Reduces an array to a single accumulated value."
    },

    {
        name: "includes()",
        icon: "💜",
        description: "Checks whether an array contains a particular value."
    },

    {
        name: "some()",
        icon: "🎤",
        description: "Checks whether at least one element satisfies a condition."
    },

    {
        name: "every()",
        icon: "🌟",
        description: "Checks whether all elements satisfy a condition."
    }

];


function displayMethodCards() {

    let grid = document.getElementById("methodsGrid");

    methodDetails.forEach(function(method) {

        let card = document.createElement("div");

        card.className = "method-card";

        card.innerHTML =
            '<div class="method-icon">' + method.icon + '</div>' +
            '<h3>' + method.name + '</h3>' +
            '<p>' + method.description + '</p>';

        grid.appendChild(card);

    });

}


// 4. RUNNING SELECTED ARRAY METHODS

function runArrayMethod() {

    let selectedMethod =
        document.getElementById("methodSelect").value;

    let output =
        document.getElementById("output");

    let result;


    // forEach() METHOD

    if (selectedMethod === "forEach") {

        let songNames = [];

        songs.forEach(function(song) {

            songNames.push(song.title);

        });

        result = songNames.join("\n");

    }


    // map() METHOD

    else if (selectedMethod === "map") {

        result = songs.map(function(song) {

            return song.title;

        });

    }


    // filter() METHOD

    else if (selectedMethod === "filter") {

        result = songs.filter(function(song) {

            return song.genre === "Pop";

        });

        result = result.map(function(song) {
            return song.title;
        });

    }


    // find() METHOD

    else if (selectedMethod === "find") {

        result = songs.find(function(song) {

            return song.title === "Perfect";

        });

    }


    // sort() METHOD

    else if (selectedMethod === "sort") {

        result = songs.map(function(song) {

            return song.title;

        }).sort();

    }


    // reduce() METHOD

    else if (selectedMethod === "reduce") {

        result = songs.reduce(function(total, song) {

            return total + song.duration;

        }, 0);

        result = "Total Songs: " + songs.length +
            "\nTotal Duration: " + result + " seconds";

    }


    // includes() METHOD

    else if (selectedMethod === "includes") {

        let songNames = songs.map(function(song) {

            return song.title;

        });

        result = songNames.includes("Perfect");

    }


    // some() METHOD

    else if (selectedMethod === "some") {

        result = songs.some(function(song) {

            return song.genre === "Dance";

        });

    }


    // every() METHOD

    else if (selectedMethod === "every") {

        result = songs.every(function(song) {

            return song.title !== "";

        });

    }


    // DISPLAY OUTPUT

    output.textContent =
        selectedMethod + "() RESULT:\n\n" +
        JSON.stringify(result, null, 4);

}


// 5. CONNECTING BUTTON WITH FUNCTION

document.getElementById("runButton")
    .addEventListener("click", runArrayMethod);


// 6. AUTOMATICALLY DISPLAYING WEBSITE CONTENT

displaySongs();

displayMethodCards();



// ==========================================
// ARRAY METHOD EXPLANATIONS AND CODE
// ==========================================

const methodDescriptions = {

    forEach: "forEach() executes a function for every element in an array. It displays every song in our music collection.",

    map: "map() creates a new array by transforming every element. It extracts all song titles.",

    filter: "filter() creates a new array containing elements that satisfy a condition. It finds all Pop songs.",

    find: "find() returns the first element that satisfies a condition. It searches for the song Perfect.",

    sort: "sort() arranges array elements in a specified order. It sorts song titles alphabetically.",

    reduce: "reduce() combines array elements into a single value. It calculates the total duration of all songs.",

    includes: "includes() checks whether an array contains a particular value. It checks whether Perfect exists.",

    some: "some() checks whether at least one element satisfies a condition. It checks for a Dance song.",

    every: "every() checks whether all elements satisfy a condition. It checks whether every song has a title."

};


const methodCodeExamples = {

    forEach: `let songNames = [];

songs.forEach(function(song) {
    songNames.push(song.title);
});

console.log(songNames);`,

    map: `let titles = songs.map(function(song) {
    return song.title;
});`,

    filter: `let popSongs = songs.filter(function(song) {
    return song.genre === "Pop";
});`,

    find: `let song = songs.find(function(song) {
    return song.title === "Perfect";
});

console.log(song);`,
    sort: `let sortedSongs = songs.map(function(song) {
    return song.title;
}).sort();`,

    reduce: `let totalDuration = songs.reduce(function(total, song) {
    return total + song.duration;
}, 0);`,

    includes: `let titles = songs.map(function(song) {
    return song.title;
});

let exists = titles.includes("Perfect");`,

    some: `let hasDanceSong = songs.some(function(song) {
    return song.genre === "Dance";
});`,

    every: `let allHaveTitles = songs.every(function(song) {
    return song.title !== "";
});`

};


// DISPLAY BOTH SECTIONS

function updateMethodInformation() {

    let selectedMethod =
        document.getElementById("methodSelect").value;

    document.getElementById("methodDescription").textContent =
        methodDescriptions[selectedMethod];

    document.getElementById("methodCode").textContent =
        methodCodeExamples[selectedMethod];

}


// UPDATE WHEN DROPDOWN CHANGES

document.getElementById("methodSelect")
    .addEventListener("change", updateMethodInformation);


// DISPLAY INFORMATION ON PAGE LOAD

updateMethodInformation();

// ==========================================
// COPY JAVASCRIPT CODE
// ==========================================

function copyMethodCode() {

    let code =
        document.getElementById("methodCode").textContent;

    let message =
        document.getElementById("copyMessage");

    navigator.clipboard.writeText(code)
        .then(function() {

            message.textContent =
                "✨ Code copied successfully!";

            message.style.color = "#ff5de8";

        })
        .catch(function() {

            message.textContent =
                "Unable to copy code. Please try again.";

            message.style.color = "#ff5b70";

        });

}


// CONNECT COPY BUTTON

document.getElementById("copyCodeButton")
    .addEventListener("click", copyMethodCode);
