// Function to handle  upload
function handleUpload() {
  const fileInput = document.getElementById('uploadInput');
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageUrl = e.target.result;
      showImage(imageUrl);
      saveImage(file);
    };
    reader.readAsDataURL(file);
  }
}

// Function to display uploaded image
function showImage(imageUrl) {
  const imageContainer = document.getElementById('imageContainer');
  const imageElement = document.createElement('img');
  imageElement.src = imageUrl;
  imageContainer.appendChild(imageElement);
}

function nextImage(file) {
	
}

function prevImage(file){
	
}

// delete image
function deleteImage(file) {
   image.remove();
}
	

// to save image 
function saveImage(file) {
  console.log(store, file.name);
  console.log('png, jpg, gif', file.type);
  //console.log('File size:', file.size);
}

while (i < 10) {
  text += "The number is " + i;
  i++;
}

// time 
function timeImage(){
  document.slide.src = images[i];	
  
}
