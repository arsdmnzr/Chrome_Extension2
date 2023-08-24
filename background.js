chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "start_extraction") {
      // Assuming you have an array of LinkedIn profile links
      const profileLinks = ["https://www.linkedin.com/in/arshad-manzoor-34bb2b261/","https://www.linkedin.com/in/salmanhashmi0786/","https://www.linkedin.com/in/mabood-ahmad-ansari-961a761b8/"];
  
      // Open LinkedIn profiles one by one
      for (const profile of profileLinks) {
        chrome.tabs.create({ url: profile });
      }
    }
  });
  