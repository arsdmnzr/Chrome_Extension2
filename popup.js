document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("startExtraction").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "start_extraction" });
  });
});
