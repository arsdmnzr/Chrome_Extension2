function extractData() {
  const name = document.querySelector('.pv-top-card--list > li:first-child').textContent.trim();
  const location = document.querySelector('.pv-top-card--list > li:nth-child(2)').textContent.trim();
  const about = document.querySelector('.pv-about__summary-text').textContent.trim();
  const bio = document.querySelector('.pv-top-card--list-bullet > li:first-child').textContent.trim();
  const followerCount = parseInt(document.querySelector('.pv-recent-activity-section__follower-count').textContent.replace(/\D/g, ''), 10);
  const connectionCount = parseInt(document.querySelector('.pv-top-card--list-bullet > li:last-child').textContent.replace(/\D/g, ''), 10);
  const bioLine = document.querySelector('.pv-top-card--list-header > h2').textContent.trim();

  const data = {
    name,
    location,
    about,
    bio,
    followerCount,
    connectionCount,
    bioLine,
  };

  return data;
}

function sendDataToAPI(data) {
  fetch("http://localhost:3000/post-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  .then(response => {
    if (response.ok) {
      console.log("Data sent successfully to the API.");
    } else {
      console.error("Failed to send data to the API.");
    }
  })
  .catch(error => {
    console.error("An error occurred while sending data:", error);
  });
}

const extractedData = extractData();
sendDataToAPI(extractedData);
