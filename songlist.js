 const songs = [
    { title: "The Eagles - Hotel California", file: "songs/The Eagles - Hotel California.mp3" },
    { title: "Тимур Муцураев - Погасли свечи", file: "songs/Тимур Муцураев Погасли Свечи.mp3" },
    { title: "Ария - Потерянный рай", file: "songs/Ария - Потерянный рай.mp3" }
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
          <span class="song-title">${song.title}</span>
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

  searchInput.addEventListener("input", () => {
    displaySongs(searchInput.value);
  });

  // Изначально показываем все песни
  displaySongs();