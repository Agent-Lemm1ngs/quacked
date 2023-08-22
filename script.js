let loader;

function loading() {
  loader = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loaded_done").style.display = "flex";
}

loading()
