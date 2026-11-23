"use strict";

const followBtn = document.querySelector(".follow-btn");
const followerCount = document.querySelector(".follower-count");

let followers = 128;
let isFollowing = true;

const render = () => {
  followerCount.textContent = followers;

  isFollowing
    ? (followBtn.textContent = "Following")
    : (followBtn.textContent = "Follow");

  followBtn.classList.toggle("is-following", isFollowing);

  followBtn.setAttribute("aria-pressed", String(isFollowing));
};

render();

// event listeners

followBtn.addEventListener("click", () => {
  isFollowing = !isFollowing;
  isFollowing ? followers++ : followers--;
  render();
});
