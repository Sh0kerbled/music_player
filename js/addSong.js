const audioFile = document.querySelector("#audio-file");
const player = document.querySelector("#player");
const songs = document.querySelector(".songs");
const songsCount = document.querySelector("#songsCount");

function updateCount() {
  const count = Number(localStorage.getItem("songsCount")) || 0;
  songsCount.textContent = `${count} Songs`;
}

updateCount();

audioFile.addEventListener("change", function (e) {
  const files = e.target.files;
  for (const file of files) {
    console.log("name", file.name);
    let performer = prompt(`Название альбома ${file.name}`);
    console.log("performer", performer);
    const date = new Date(file.lastModified)
      .toLocaleDateString()
      .replaceAll("/", ".");
    console.log("date", date);
  }
  songsCount.innerHTML = "";
  console.log(files.length);
  localStorage.setItem("songsCount", files.length);
  updateCount();
});

function addMusic(name, performer, date) {
  songs.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 p-4 text-white text-[20px]">
      <div>${name}</div>
      <div>${date}</div>
      <div>${performer}</div>
      <div>${date}</div>
    </div>
  `;
}

addMusic();
