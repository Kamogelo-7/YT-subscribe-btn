let subs = 0;

const btn = document.querySelector(".btn");
const subCount = document.querySelector(".sub-count");

subCount.textContent = `${subs} Subscribers`;

const increaseSubscriberCount = () => {
  subs++;

  subCount.textContent = `${subs} Subscribers`;
  console.log("Subscriber count increased to:", subs);

  if (subs === 1) {
    btn.textContent = "Subscribed";
    btn.classList.add("subscribed");
  }
};

if (btn) {
  btn.addEventListener("click", increaseSubscriberCount);
} else {
  console.error("Button with class '.btn' not found in the document.");
}
