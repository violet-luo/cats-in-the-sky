import classes from "./Backdrop.module.css";

const showBackDrop = (message) => {
  const div = document.createElement("div");
  div.classList.add(classes.backdrop);
  div.innerHTML = message;
  div.id = "backdrop";
  document.body.appendChild(div);
};

// loading state: the page will load for 3 seconds before displaying
const hiddenBackDrop = () => {
  setTimeout(() => document.body.removeChild(document.getElementById("backdrop")), 3000)
};

export { showBackDrop, hiddenBackDrop };