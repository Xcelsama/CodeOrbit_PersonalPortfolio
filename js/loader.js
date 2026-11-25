const loader = document.getElementById("loader");

const MIN_TIME = 2000;
const MAX_TIME = 6000;
const SHOW_EVERY_PAGE = false;
const startTime = performance.now();

function alreadySeen() {
  try {
    return sessionStorage.getItem("loaderSeen") === "yes";
  } catch (error) {
    return false;
  }
}

function markSeen() {
  try {
    sessionStorage.setItem("loaderSeen", "yes");
  } catch (error) {
    return;
  }
}

function hideLoader() {
  document.documentElement.classList.add("is-ready");
  if (!loader || loader.classList.contains("is-hidden")) return;
  loader.classList.add("is-hidden");
  setTimeout(() => loader.remove(), 600);
}

function onPageLoaded() {
  const elapsed = performance.now() - startTime;
  setTimeout(hideLoader, Math.max(0, MIN_TIME - elapsed));
}

if (loader) {
  if (!SHOW_EVERY_PAGE && alreadySeen()) {
    loader.remove();
    document.documentElement.classList.add("is-ready");
  } else {
    markSeen();

    if (document.readyState === "complete") {
      onPageLoaded();
    } else {
      window.addEventListener("load", onPageLoaded);
    }

    setTimeout(hideLoader, MAX_TIME);
  }
}
