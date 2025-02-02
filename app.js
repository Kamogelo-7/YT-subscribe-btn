let subs = 0;

const btn = document.querySelector(".btn");
const subCount = document.querySelector(".sub-count");
const imageFile = document.querySelector("#channel-logo"); // Use the ID of the image
const fileUpload = document.querySelector("#file");
const uploadBtn = document.querySelector("#uploadBtn");

subCount.textContent = `${subs} Subscribers`;

const increaseSubscriberCount = () => {
  subs++;

  subCount.textContent = `${subs} Subscribers`;
  console.log("Subscriber count increased to:", subs);

  if (subs === 1) {
    btn.textContent = "Subscribed";
    btn.classList.add("subscribed");
  }
};

if (btn) {
  btn.addEventListener("click", increaseSubscriberCount);
} else {
  console.error("Button with class '.btn' not found in the document.");
}

// Function to randomize images from the JSON file
const randomizeImage = (images) => {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex].image1;
  imageFile.src = randomImage; // Set the image source to the random image
};

// Fetch the images from the JSON file
const loadImagesFromJSON = async () => {
  try {
    const res = await fetch("imageFiles.json");
    const images = await res.json();
    console.log("Images loaded:", images);

    // Randomize every 10 seconds if no image is uploaded from the file input
    setInterval(() => {
      if (!fileUpload.files[0]) {
        // Check if no image is uploaded
        randomizeImage(images);
      }
    }, 5000); // 5 seconds
  } catch (error) {
    console.error("Error loading image data:", error);
  }
};

// Load the images from JSON file on page load
loadImagesFromJSON();

// Handle the image upload
const handleImageUpload = () => {
  const file = fileUpload.files[0];

  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.onload = () => {
      imageFile.src = reader.result; // Set the image source to the uploaded file
    };

    reader.readAsDataURL(file);
  } else {
    alert("Please upload a valid image file (e.g., JPG, PNG).");
  }
};

if (uploadBtn) {
  uploadBtn.addEventListener("click", handleImageUpload);
} else {
  console.error("Button with ID '#uploadBtn' not found in the document.");
}
