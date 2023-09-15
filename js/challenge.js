// global variables
let count = 0;
let likeCount = 0;
const counter = document.querySelector("#counter");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const heart = document.querySelector("#heart");
const pause = document.querySelector("#pause");
const likes = document.querySelector(".likes");
const list = document.querySelector("#list");

document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    count++;
    counter.textContent = count;
    likeCount = 0;
  }, 1000);
});

minus.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

plus.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

const updateLikeString = () => {};
heart.addEventListener("click", () => {
  likeCount++;
  if (likeCount < 2) {
    const span = document.createElement("span");
    span.textContent = likeCount;
    const li = document.createElement("li");
    li.setAttribute("id", `like-${count}`);
    li.append(`${count} has been liked `, span, " time");
    likes.appendChild(li);
  } else {
    document.querySelector(`#like-${count} > span`).textContent = likeCount;
    const item = document.querySelector(`#like-${count}`);
    if (!item.textContent.endsWith("s")) {
      document.querySelector(`#like-${count}`).append("s");
    }
  }
});
