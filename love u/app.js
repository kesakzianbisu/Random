const b = document.querySelector("button.button--no");
b.addEventListener("mouseover",mouseHover);

function mouseHover(){
    const i = Math.floor(Math.random()*500)+1;
    const j = Math.floor(Math.random()*500)+1;

    b.style.left = i+"px";
    b.style.top = j+"px";
}

// const yesButton = document.getElementById('yes-button');
// yesButton.addEventListener('click', () => {
//   window.location.href = "372a4a7729d6719ad1325286cb179ee4.jpg";
// });

const yesButton = document.getElementById('yes-button');
const link = "https://id.pinterest.com/pin/623818985887527088/";
yesButton.addEventListener('click', () => {
  window.location.href = link;
});
