const songs = [
    { 
        title: "The Eagles - Hotel California", 
        file: "songs/The Eagles - Hotel California.mp3",
        artist: "The Eagles",
        year: "1976",
        genre: "Rock",
        info: "A legendary rock song with a famous guitar solo. One of the most popular songs of the 70s"
    },
    { 
        title: "Timur Mutsurayev - Candles are extinguished", 
        file: "songs/Тимур Муцураев Погасли Свечи.mp3",
        artist: "Timur Mutsuraev",
        year: "2000",
        genre: "Chechen Folk",
        info: "A touching song in memory of the fallen. Performed with an acoustic guitar"
    },
    { 
        title: "Rihanna - Where Have You Been (DJ Tristan Orchestra Remix)", 
        file: "songs/DJ_Tristan_Rihanna_Where_Have_You_Been_Orchestra_Remix_DJ.mp3",
        artist: "Rihanna (DJ Tristan Remix)",
        year: "2011",
        genre: "Pop/Electronic",
        info: "An orchestral remix of Rihanna's hit. Epic sound with electronic elements"
    },
    { 
        title: "Kino - Gruppa Krovi", 
        file: "songs/01 - Группа крови.mp3",
        artist: "Victor Tsoi & Kino",
        year: "1988",
        genre: "Russian Rock",
        info: "Viktor Tsoi's iconic song. A symbol of a generation and the soundtrack to the film Needle "
    },
    { 
        title: "Aikyn Tolepbergen - Suigenim", 
        file: "songs/Aikyn Tolepbergen - Сүйгенім.mp3",
        artist: "Aikyn Tolepbergen",
        year: "2020",
        genre: "Kazakh Pop Song",
        info: "A modern Kazakh ballad about love. 'Сүйгенім' means 'Beloved'"
    },
    { 
        title: "Timati - Doroga v aeroport", 
        file: "songs/Тимати_feat_Света_дорога_в_аэропорт_текст_песни.mp3",
        artist: "Тimati feat. Svеtа",
        year: "2015",
        genre: "Russian Pop/Rap",
        info: "A duet about a breakup at the airport. A combination of rap and pop melodies"
    }
];

const songList = document.getElementById("songList");
const searchInput = document.getElementById("search");
const player = document.getElementById("player");

function displaySongs(filter = "") {
    songList.innerHTML = "";
    songs
        .filter(song => song.title.toLowerCase().includes(filter.toLowerCase()))
        .forEach((song, index) => {
            const div = document.createElement("div");
            div.className = "song";
            div.innerHTML = `
                <div class="song-left">
                    <img src="play.png" onclick="playSong(${index})" />
                    <span class="song-title clickable-title" onclick="openSongInfo(${index})">${song.title}</span>
                </div>
                <button class="add" onclick="addToPlaylist(${index})">+</button>
            `;
            songList.appendChild(div);
        });
}

function playSong(index) {
    player.src = songs[index].file;
    player.play();
}


function openSongInfo(index) {
    const song = songs[index];
    
    const songInfoHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Play Beat | ${song.title}</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        .info-container {
            max-width: 800px;
            margin: 50px auto;
            padding: 30px;
            background: var(--bg-color, white);
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .song-header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid var(--accent-color, #007bff);
        }
        
        .song-header h1 {
            color: var(--text-color, #333);
            margin: 0 0 10px 0;
            font-size: 28px;
        }
        
        .song-header p {
            color: var(--text-color, #666);
            font-size: 18px;
            margin: 5px 0;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .info-card {
            background: var(--accent-color, #007bff);
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
        }
        
        .info-card h3 {
            margin: 0 0 10px 0;
            font-size: 16px;
        }
        
        .info-card p {
            margin: 0;
            font-size: 18px;
            font-weight: bold;
        }
        
        .description {
            background: rgba(0,0,0,0.05);
            padding: 25px;
            border-radius: 10px;
            margin-bottom: 30px;
            text-align: center;
            margin: 0 auto;
            border-left: 4px solid var(--accent-color, #007bff);
        }
        
        .description h3 {
            color: var(--accent-color, #007bff);
            margin: 0 0 15px 0;
        }
        
        .description p {
            color: var(--text-color, #333);
            line-height: 1.6;
            font-size: 16px;
            margin: 0;
        }
        
        .actions {
            text-align: center;
            gap: 15px;
            display: flex;
            justify-content: center;
        }
        
        .btn {
            padding: 12px 25px;
            border: none;
            border-radius: 25px;
            font-size: 16px;
            cursor: pointer;
            transition: transform 0.2s;
            text-decoration: none;
            display: inline-block;
        }
        
        .btn:hover {
            transform: translateY(-2px);
        }
        
        .btn-back {
            background: #6c757d;
            color: white;
        }
        
        .btn-play {
            background: var(--accent-color, #007bff);
            color: white;
        }
    </style>
</head>
<body>
    <div class="info-container">
        <div class="song-header">
            <h1>${song.title}</h1>
            <p>Executor: ${song.artist}</p>
        </div>
        
        <div class="info-grid">
            <div class="info-card">
                <h3>Year of release</h3>
                <p>${song.year}</p>
            </div>
            <div class="info-card">
                <h3>Genre</h3>
                <p>${song.genre}</p>
            </div>
        </div>
        
        <div class="description">
            <h3>Music Information</h3>
            <p style="text-align:center; margin: 0 auto">${song.info}</p>
        </div>
        
        <div class="actions">
            <a href="listen.html" class="btn btn-back">← Back</a>
            <button class="btn btn-play" onclick="window.opener.playSong(${index}); window.close();">🎵 Play</button>
        </div>
    </div>
    
    <script src="toggleTheme.js"></script>
</body>
</html>`;

    const newWindow = window.open('', '_blank', 'width=900,height=700,scrollbars=yes,resizable=yes');
    newWindow.document.write(songInfoHTML);
    newWindow.document.close();
}

searchInput.addEventListener("input", () => {
    displaySongs(searchInput.value);
});

displaySongs();