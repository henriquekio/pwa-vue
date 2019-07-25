"use strict";

let installPrompt = null;
const installButton = document.getElementById("butInstall");
installButton.addEventListener("click", installPwA);
window.addEventListener("beforeinstallprompt", saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(event) {
  installPrompt = event;
  installButton.removeAttribute("hidden");
}

function installPwA(event) {
  installPrompt.prompt();
  event.srcElement.setAttribute("hidden", true);
  installPrompt.userChoice.then(choice => {
    if (choice.outcome === "accepted") {
      console.log("Usuario aceitou o prompt", choice);
    } else {
      console.log("Usuario negou o prompt", choice);
    }
    installPrompt = null;
  });
}

// function logAppInstalled(event) {
//   console.log(event);
// }
