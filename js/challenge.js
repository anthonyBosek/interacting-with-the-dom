// global variables
let count = 0;
let likeCount = 0;
let interval = null;
const counter = document.querySelector("#counter");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const heart = document.querySelector("#heart");
const pause = document.querySelector("#pause");
const likes = document.querySelector(".likes");
const list = document.querySelector("#list");

// ---counter---
// set interval on load to count every second
document.addEventListener("DOMContentLoaded", () =>
  setInterval(
    () => (count++, (counter.textContent = count), (likeCount = 0)),
    1000
  )
);

// subtract one from count
minus.addEventListener("click", () => (count--, (counter.textContent = count)));

// add one to count
plus.addEventListener("click", () => (count++, (counter.textContent = count)));

//
// ---likes---
// create li with span to modify with more likes
const listItemCreator = () => {
  const span = document.createElement("span");
  span.textContent = likeCount;
  const li = document.createElement("li");
  li.setAttribute("id", `like-li-${count}`);
  li.append(`${count} has been liked `, span, " time");
  likes.appendChild(li);
};
// modify span with multiple likes
const listItemModifier = () => {
  document.querySelector(`#like-li-${count} > span`).textContent = likeCount;
  const item = document.querySelector(`#like-li-${count}`);
  if (!item.textContent.endsWith("s"))
    document.querySelector(`#like-li-${count}`).append("s");
};
// likes click event
heart.addEventListener(
  "click",
  () => (likeCount++, likeCount === 1 ? listItemCreator() : listItemModifier())
);

//
// --- pause ---
pause.addEventListener("click", () => {});

//
// --- form ---
