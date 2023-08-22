function addCookie() {
  let num = document.querySelector("#count");
  num.innerHTML = parseInt(num.innerHTML) + 1;
  let bg = document.getElementById("bg");
  const divElement = document.getElementById('bg');
  const backgroundImage = getComputedStyle(divElement).backgroundImage;
  const matches = backgroundImage.match(/(\d+)deg/);
  const degree = matches ? parseInt(matches[1]) : null; 
  divElement.style.background = `linear-gradient(${degree+2}deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)`;
}
