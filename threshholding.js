//<br/><button onClick="selectRandImage()">Pick Random Image</button><input id="imgUrl" style="width:45%" value=""><button onclick="updateImageUrl()">draw</button>

var width, height
var step = 0;
var canvas = document.createElement('canvas')
var ctx = canvas.getContext('2d')
var canvasColor = document.createElement('canvas')
var ctxColor = canvasColor.getContext('2d')
var canvasThreshold = document.createElement('canvas')
var ctxThreshold = canvasThreshold.getContext('2d')
var bg = [128, 128, 128]
var img, n


document.getElementsByTagName('body')[0].appendChild(canvasColor)
document.getElementsByTagName('body')[0].appendChild(canvasThreshold)
document.getElementsByTagName('body')[0].appendChild(canvas)

ctrl = {
threshold: 0.5,
run: function () {
setup()
}
}

var gui = new dat.GUI();
gui.add(ctrl, 'threshold', 0, 1);
gui.add(ctrl, 'run');

var imgUrl = 'https://cdn.pixabay.com/photo/2016/08/06/19/23/bull-1575005__340.jpg'
loadImage(imgUrl)
var images = [
'https://cdn.pixabay.com/photo/2017/03/13/10/25/hummingbird-2139279__340.jpg',
'https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453__340.jpg',
'https://cdn.pixabay.com/photo/2017/01/19/23/46/panorama-1993645__340.jpg',
'https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522__340.jpg',
'https://cdn.pixabay.com/photo/2016/12/05/11/39/fox-1883658__340.jpg',
'https://cdn.pixabay.com/photo/2017/01/16/19/17/horses-1984977__340.jpg',
'https://cdn.pixabay.com/photo/2017/01/07/20/38/portrait-1961529__340.jpg',
'https://cdn.pixabay.com/photo/2016/12/11/12/02/bled-1899264__340.jpg',
'https://cdn.pixabay.com/photo/2017/01/26/11/17/european-eagle-owl-2010346__340.jpg',
'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg',
'https://cdn.pixabay.com/photo/2016/12/13/00/13/rabbit-1903016__340.jpg',
'https://cdn.pixabay.com/photo/2016/11/12/11/51/forest-1818690__340.jpg'
]
function selectRandImage() {
document.getElementById('imgUrl').value = images[Math.round((images.length - 1) * Math.random())]
}

selectRandImage()
updateImageUrl()

function updateImageUrl() {
loadImage(document.getElementById('imgUrl').value)
}
function loadImage (imgUrl) {
var tempimg = new Image()
tempimg.crossOrigin = "Anonymous"
tempimg.onload = function() {
img = tempimg
setup()
}
tempimg.src = 'https://crossorigin.me/' + imgUrl
}

function setup() {
if (img === undefined) {
return
}

var scale = 1

// setup actual drawing canvas
canvasThreshold.width = canvasColor.width = canvas.width = width = img.width * scale //window.innerWidth
canvasThreshold.height = canvasColor.height = canvas.height = height = img.height * scale //window.innerHeigh

// cet ref for color
ctxColor.scale(scale, scale)
ctxColor.drawImage(img, 0, 0)

imageThreshold(canvasColor, ctxThreshold)
}

function imageThreshold(srcCanvas, destContext) {
destContext.drawImage(srcCanvas, 0, 0);
var imgData = destContext.getImageData(0, 0, srcCanvas.width, srcCanvas.height)
var d = imgData.data;

var red, green, blue, i
for (i = 0; i < d.length; i += 4) {
red = d[i] / 265;
green = d[i+1] / 265;
blue = d[i+2] / 265;
if (red < ctrl.threshold || green < ctrl.threshold || blue < ctrl.threshold)    {
  d[i + 0] = 255
  d[i + 1] = 255
  d[i + 2] = 255
} else {
  d[i + 0] = 0
  d[i + 1] = 0
  d[i + 2] = 0
}}}