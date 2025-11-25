const audioFile = document.querySelector("#audio-file");
const player = document.querySelector("#player");
const songs = document.querySelector(".songs");

audioFile.addEventListener("change", function (e) {
  const file = this.files[0];
  if (!file) return;
  const link = URL.createObjectURL(file);
  console.log(file.name);
  songs.innerHTML = `<audio src="${link}"></audio>`;
});
