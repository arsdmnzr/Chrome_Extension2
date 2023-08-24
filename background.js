chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "start_extraction") {
      const profileLinks = ["https://www.linkedin.com/in/arshad-manzoor-34bb2b261/","https://www.linkedin.com/in/salmanhashmi0786/","https://www.linkedin.com/in/mabood-ahmad-ansari-961a761b8/"];
  
      for (const profile of profileLinks) {
        chrome.tabs.create({ url: profile });
      }
    }
  });
  