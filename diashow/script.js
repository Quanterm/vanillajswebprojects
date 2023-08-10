// handle upload
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

// display uploaded image
function showImage(imageUrl) {
  const imageContainer = document.getElementById('imageContainer');
  const imageElement = document.createElement('img');
  imageElement.src = imageUrl;
  imageContainer.appendChild(imageElement);
}

function nextImage(file) {
  const imageContainer = document.getElementById('image');
}

function prevImage(file){
  const imageContainer = document.getElementById('');
}

// delete image
function deleteImage(file) {
  const imageContainer = document.getElementById('');
}

// save image 
function saveImage(file) {
  console.log(store, file.name);
  console.log('png, jpg, gif', file.type);
  //console.log('File size:', file.size);
}

// time 
function timeImage(){
  document.slide.src = images[i];	
  
}
