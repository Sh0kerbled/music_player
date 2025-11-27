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
      <div class="flex w-[32px] h-[32px] space-x-7"><img class="like group-hover:scale-75 transition hover:!scale-125" src="/images/like.svg">
      <img class="dislike group-hover:scale-75 transition hover:!scale-125" src="/images/dislike.svg"></div>
      <img src="images/abemba.png" width="300" height="300" class="hate invisible absolute right-[-140px] top-90" alt="">
      <img src="images/aboba.png" width="300" height="300" class="notHate invisible absolute right-0 top-90" alt="">
    </div>
  `;
}

addMusic();

const dislike = document.querySelector(".dislike");
const like = document.querySelector(".like");
const hate = document.querySelector(".hate");
const notHate = document.querySelector(".notHate");
dislike.addEventListener("mouseover", function (e) {
  hate.classList.remove("animate__slideOutRight");
  hate.style.visibility = "visible";
  hate.classList.add("animate__animated", "animate__slideInRight");
});
dislike.addEventListener("mouseout", function (e) {
  hate.classList.remove("animate__slideOutRight");
  hate.classList.add("animate__animated", "animate__slideOutRight");
});

like.addEventListener("mouseover", function (e) {
  notHate.classList.remove("animate__slideOutRight");
  notHate.style.visibility = "visible";
  notHate.classList.add("animate__animated", "animate__slideInRight");
});
like.addEventListener("mouseout", function (e) {
  notHate.classList.remove("animate__slideOutRight");
  notHate.classList.add("animate__animated", "animate__slideOutRight");
});
