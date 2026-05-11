function h1Element(bold) {
  let h1 = document.querySelector("h1");
  h1.className = "querySelector";
  h1.style.color = "black";
}
h1Element();

function addImage(img_url) {
  let img = document.querySelector("img");
  img.src = img_url;
}
addImage(
  "https://duckduckgo.com/?t=ffab&q=funny+photos&ia=images&iax=images&iai=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1629781%2Fpexels-photo-1629781.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-ilargian-faus-763704-1629781.jpg%26fm%3Djpg",
);

