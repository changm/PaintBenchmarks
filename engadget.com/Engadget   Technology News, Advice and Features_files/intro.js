var loadAdtech = function() {
  document.write('<scri'+'pt src="//ads.pictela.com/jsapi/ADTECH.js"></scri'+'pt>');
};

try {
  if (parent.ADTECH) {
    var ADTECH = parent.ADTECH;
  } else {
    loadAdtech();
  }
} catch (ex) {
  loadAdtech();
}

var canvas, stage, exportRoot;
 
function init() {
	canvas = document.getElementById('canvas');
	images = images||{};

	canvas = document.getElementById("canvas");
	images = images||{};

	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);

}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete() {
	exportRoot = new lib.NCK_BB_introAnimation5_300x250();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();
	stage.enableMouseOver();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}