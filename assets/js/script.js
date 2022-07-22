var indexValue = 1;
showImg(indexValue);
function btn_slide(e) {
   showImg((indexValue = e));
}
function side_slide(e) {
   showImg((indexValue += e));
}
function showImg(e) {
   const img = document.querySelectorAll(".images");
   const sliders = document.querySelectorAll(".btn-sliders span");
   indexValue++;
   if (e > img.length || indexValue > img.length) {
      indexValue = 1;
   }
   if (e < 1) {
      indexValue = img.length;
   }
   for (let i = 0; i < img.length; i++) {
      img[i].style.display = "none";
   }
   for (let j = 0; j < sliders.length; j++) {
      sliders[j].style.background = "none";
   }
   img[indexValue - 1].style.display = "block";
   sliders[indexValue - 1].style.background = "white";
   setTimeout(showImg, 3000);
}
