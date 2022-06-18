var $gallery = document.querySelector('main');
var imageUrls = [
  'https://i.kym-cdn.com/entries/icons/original/000/014/285/sideeyechloe.jpg',
  'https://imgix.ranker.com/user_node_img/50062/1001227435/original/1-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375',
  'https://i.kym-cdn.com/entries/icons/facebook/000/018/012/this_is_fine.jpg'

];
var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', function () {
  if ($imageUrlInput.value !== '') {
    imageUrls.push($imageUrlInput.value);
    $imageUrlInput.value = '';
    updateGallery();
  }
});

const updateGallery = () => {
  $gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
};

updateGallery();
