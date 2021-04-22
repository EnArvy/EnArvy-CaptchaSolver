
const image = document.getElementById('captcha_image');


const doOCR = async () => {
    const image = document.getElementById('captcha_image');
    console.log(image);
  
    const { createWorker } = Tesseract;
    const worker = createWorker({
      workerPath: chrome.runtime.getURL('js/worker.min.js'),
      langPath: chrome.runtime.getURL('traineddata'),
      corePath: chrome.runtime.getURL('js/tesseract-core.wasm.js'),
    });
    
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(image);
    console.log(text);
    await worker.terminate();
  }
  
window.onload= doOCR;



 
