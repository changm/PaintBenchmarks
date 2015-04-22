myClickAction = ('ontouchstart' in document.documentElement) ? "touchstart":"click";

// HTML5 Pictela5 Ver 2.0 Feb 11 20:06
adSize = "728x90";
//browser detections
if (typeof console == "undefined") {
    window.console = {
        log: function () {}
    };
}
iOS = navigator.userAgent.match(/like Mac OS X/i);
android4 = navigator.userAgent.match(/Android 4/i);
android5 = navigator.userAgent.match(/Android 5/i);
android6 = navigator.userAgent.match(/Android 6/i);
android7 = navigator.userAgent.match(/Android 7/i);
android4_3 = navigator.userAgent.match(/Android 4.3/i);
android4_4 = navigator.userAgent.match(/Android 4.4/i);
android4_4_2 = navigator.userAgent.match(/Android 4.4.2/i);
android2 = navigator.userAgent.match(/Android 2/i);
android = navigator.userAgent.match(/Android/i);
androidBrowser = ((navigator.userAgent.indexOf('Mozilla/5.0') > -1 && navigator.userAgent.indexOf('Android ') > -1 && navigator.userAgent.indexOf('AppleWebKit') > -1) && (navigator.userAgent.indexOf('Chrome') < 0));
chrome = navigator.userAgent.match(/Chrome/i);
iOS5= iOS && navigator.userAgent.match(/OS 5/i);
iOS6= iOS && navigator.userAgent.match(/OS 6/i);
iOS8= iOS && navigator.userAgent.match(/OS 8/i);
iPad= navigator.userAgent.match(/iPad/i);
iPhone= navigator.userAgent.match(/iPhone/i);
firefox = navigator.userAgent.toLowerCase().match('firefox');
//var IE6 = false /*@cc_on || @_jscript_version < 5.7 @*/
anyIE = (navigator.userAgent.toString().toLowerCase().indexOf("msie")>-1 || navigator.userAgent.toString().toLowerCase().indexOf("trident/7")!=-1);
ie7 = (document.all && !window.opera && window.XMLHttpRequest && navigator.userAgent.toString().toLowerCase().indexOf('trident/4.0') == -1) ? true : false;
ie8 = (navigator.userAgent.toString().toLowerCase().indexOf('trident/4.0') != -1);
ie9 = navigator.userAgent.toString().toLowerCase().indexOf("trident/5")>-1;
ie10 = navigator.userAgent.toString().toLowerCase().indexOf("trident/6")>-1;
ie11 = navigator.userAgent.toString().toLowerCase().indexOf("trident/7")>-1;
ieTablet = (navigator.userAgent.toLowerCase().indexOf("msie") !== -1 && navigator.userAgent.toLowerCase().indexOf("touch") !== -1);
safari = (navigator.userAgent.toString().toLowerCase().indexOf("safari") != -1) && (navigator.userAgent.toString().toLowerCase().indexOf("chrome") == -1);
mobileSafari = ((navigator.userAgent.toString().toLowerCase().indexOf("iphone")!=-1) || (navigator.userAgent.toString().toLowerCase().indexOf("ipod")!=-1) || (navigator.userAgent.toString().toLowerCase().indexOf("ipad")!=-1)) ? true : false;

isAndroid4AndAbove = Boolean(android4 || android5 || android6 || android7);

//Platforms
MAC = (navigator.userAgent.toString().toLowerCase().indexOf("mac")!=-1) ? true: false;
WINDOWS = (navigator.appVersion.indexOf("Win")!=-1) ? true : false;
LINUX = (navigator.appVersion.indexOf("Linux")!=-1) ? true : false;
UNIX = (navigator.appVersion.indexOf("X11")!=-1) ? true : false;

<!--nolonger needed js/videoEventsHack.js-->
com.adtech.Core.prototype.executeClick = function (identifier, overrideUrl) {
  identifier = this.verifyClickIdentifier(identifier);
  if (typeof this.adConfig.clickthroughs[identifier] != 'undefined') {
    var clk = this.adConfig.clickthroughs[identifier];
    var dest = this.generateClickUrl(identifier, overrideUrl);
    this.logClick(identifier, overrideUrl);
    if (this.env != com.adtech.HtmlContent.ENVIRONMENT_WEB) {
     return;
    }
    switch (clk.target) {
      case '_self':
        top.location.href = dest;
        break;
      default:
        window.open(dest, (+new Date()), clk.features);
        break;
    }
  }
}


DEFAULT_DELAY = 300;


function isNullUndefinedEmptyNONE(value) {
    if(value == "" || value == undefined || value == null || value == "undefined" || value == "NONE") {
        return true;
    }
    return false;
}
function NOT_NullUndefinedEmptyNONE_AND_NotFalse(value) {
    if(!isNullUndefinedEmptyNONE(value) && value !== false) {
        return true;
    }
    return false;
}
// dynamic method of getting the proper url to Pictela services
function getServicesHost(type) {
  try {
    type = (type || 'get').toUpperCase();
  } catch (e) {}
  if (type !== 'GET' && type !== 'POST') {
    console.warn('Invalid type argument for getServicesHost!');
    return;
  }
  return ADTECH.getServicesHosts()[type.toUpperCase()] + 'a/';
}

function addPX_unitIfNeeded(obj, prop_Str) {
  if(!isNaN(obj[prop_Str])) {
    obj[prop_Str] += 'px';
  }
  return obj[prop_Str];
}


function capitaliseFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
var _introTimer;
var _introTimerFirstTime = true;
var _useIntroClickthrough;

function introContentSetup() {
    var s = ADTECH["get"+"Content"]('Intro Content');
    _useIntroClickthrough = !isNullUndefinedEmptyNONE(s.introContentClickthrough);
    var style_str = "";
    var html_str = "";
    if(s.introContentType == "disabled") return;
    style_str += "left:"+s.introContentX+"px; top:"+s.introContentY+"px; ";
    style_str += "height:"+addPX_unitIfNeeded(s, "introContentHeight")+"; width:"+addPX_unitIfNeeded(s, "introContentWidth")+"; ";
	style_str += " position: absolute; ";
    if(adSize === '970x250LOFT' || adSize === 'Billboard' || adSize === 'Pushdown'){
        style_str += " z-index:0; ";
    }
    else{
        style_str += " z-index:99999999; ";
    }
    style_str += "border:none; ";
    if(_useIntroClickthrough) {
        style_str += "cursor:pointer; ";
    }
    if(s.introContentType == "image"){
        style_str += "background:url("+s.introContentImage+") center center;";
        html_str += "<div id='intro' ";
        html_str += "style='"+style_str+"' ></div>";
    }
    if(s.introContentType == "html"){
        style_str += "background:"+ADTECH.getContent('Theme').BackgroundColor+";";
        html_str += "<iframe id='intro' src='"+s.introContentHTML+"'   ";
        html_str += "scrolling='no' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true' ";
        html_str += "style='"+style_str+"' ></iframe>";
        if(_useIntroClickthrough) {
            html_str += "<div id='introHtmlClickthrough' ";
            html_str += "style='"+style_str+' background-color:rgba(0,0,0,0); opacity:0;'+"' ></div>";
        }
    }  
    //TO DO ADD VIDEO!! which is in core970x250LOFT.js right now
    $("#core").append(html_str);
    if(_useIntroClickthrough && s.introContentType == "image") {
        $("#intro").on("click", function(event) {
            ADTECH.contentClick("Intro Content", 'introContentClickthrough', s);
        }); 
    }
    else if(_useIntroClickthrough && s.introContentType == "html") {
        $("#introHtmlClickthrough").on("click", function(event) {
            ADTECH.contentClick("Intro Content", 'introContentClickthrough', s);
        }); 
    }
    if(s.introContentTimeout !== 0 && s.introContentTimeout !== '' && _introTimerFirstTime === true){
        if(adSize === '970x250LOFT' || adSize === 'Billboard' || adSize === 'Pushdown'){
            //setTimeout added to core loft, billboard and pushdown
        }
        else{
            _introTimer = setTimeout(function(){
              $('#intro').hide(function () {
                $('#core').css("border-width", "1px");
                console.log("GHFH");
                ADTECH.event("Intro Content Complete");
              });
            }, s.introContentTimeout*1000);
            ADTECH.addEventListener('hide', function() {
              //$('#intro').hide();
          $('#intro').hide(function () {
            console.log("SDFSD");
            ADTECH.event("Intro Content Complete");
          });
              _introTimerFirstTime = false;});
        }
        
    }
}


function getAppHtmlFilename(app_str) {
	switch(app_str) {
		case "feed - facebook": app_str = "facebook"; break;
		case "feed - twitter": app_str = "twitter"; break;
		case "feed - dynamic": app_str = "feeds"; break;
		case "feed - collection": app_str = "collection_feed"; break;
	}
	return ADTECH.getFileUrl(app_str+".html");
}
/**
 * Copyright 2013 AOL Networks.
 * @author james.christie@adtech.com
 */

ADTECH.ready(initSpecial);


function initSpecial() {
  console.log("initSpecial");
  ADTECH.specialEvent = function (event, obj) {
    var str ="specialEventName="+escape(event);
    for(var i in obj ) {
      str += ";dn"+i +"=" + escape(obj[i]);
    }
    var url = ADTECH.constructCustomEventURL()+str;
    ADTECH.event('specialEvent',{link:url});
  }
}

com.adtech.Core.prototype.constructCustomEventURL = function() {
  var adServerVars = ADTECH.adConfig.adServerVars;
  var base = adServerVars.servingProto+'://'+adServerVars.servingHost+'/dtrack/3.0/';
  var nw = adServerVars.networkId+'.'+adServerVars.subNetworkId+'/';
  var placement = adServerVars.placementId+'/1/1/';
  var bnid = ';bnid='+adServerVars.bannerId;
  var adid = ';adid='+adServerVars.id;
  var keyValue = ';dn';
  var rnd = ';misc=' + (+new Date()) + ';';
  return base+nw+placement+bnid+adid+rnd+keyValue;
};

/**
 * Copyright 2013 AOL Networks.
 * @author james.christie@adtech.com
 */

ADTECH.ready(initWindowShopper);


function initWindowShopper() {
  console.log("initWindowShopper");
  //obj {contentName, clickName, contentItem, contentGroup }
  ADTECH.windowShopperOpenEvent = function ( obj) {
    var url = ADTECH.getContentClickUrl(obj.contentName, obj.clickName, obj.contentItem );
    ADTECH.event('windowShopperOpenEvent',{url:url, contentGroup:obj.contentName, trackingId:obj.contentItem['Tracking Id']});
  }
}

com.adtech.Core.prototype.getContentClickUrl = function(contentName/*String*/,
    clickName/*String*/, contentItem/*Object*/, overrideUrl/*String*/) {
  overrideUrl = overrideUrl || null;
  var identifier;
  if (contentItem != undefined &&
      contentItem[com.adtech.Advert.CONTENT_PROPERTY_TRACKING_KEY] != undefined) {
    identifier = contentName + com.adtech.Advert.CONTENT_SEPARATOR +
        contentItem[com.adtech.Advert.CONTENT_PROPERTY_TRACKING_KEY] +
        com.adtech.Advert.CONTENT_SEPARATOR + clickName;
  } else {
    identifier = contentName + com.adtech.Advert.CONTENT_SEPARATOR + clickName;
  }
  if (typeof this.adConfig.clickthroughs[identifier] != 'undefined') {
    var clk = this.adConfig.clickthroughs[identifier];
    var dest = this.generateClickUrl(identifier, overrideUrl);
    this.logClick(identifier, overrideUrl);
    return dest;
  }
  return overrideUrl;
}
function evenless(themes) {
    var style =  $("style").html();
    //console.log(style);
    for(var i=0; i<themes.length; i++) {
    	for(var ii in themes[i]) {
    		if(themes[i][ii]!= "#" && themes[i][ii]!== "") {
    			style = style.split("/*var="+ii+"*/").join(themes[i][ii]);
    		}
    	}
	}
    $($("style")[0]).html(style);
}
function setupAdchoices(myDiv) {
    var adSpec = {
        width: "728",
        height: "315",
        size: "728x90"
    };


    var img = "//s.aolcdn.com/ads/adchoices_rectangle.png";
    var width = 77;
    var style_str = "";
    var html_str = "";
    var cornerStyle = Adchoices_settings.rounded_corner_style;

    if(Adchoices_settings.display == "disabled") return;

    if(Adchoices_settings.display == "icon only"){
        width = 19;
        img = "//s.aolcdn.com/ads/adchoicesi_square.png";
    } 

    style_str += "left:"+Adchoices_settings.x+"px; ";
    style_str += "top:"+Adchoices_settings.y+"px; ";
    style_str += "height:15px; ";
    style_str += "width:"+width+"px; ";
	style_str += "z-index:1500; position:absolute;";

    switch(cornerStyle) {
        case "top left":
            style_str += "border-top-left-radius: 10px;";
            break;
        case "top right":
            style_str += "border-top-right-radius: 10px;";
            break;
        case "bottom left":
            style_str += "border-bottom-left-radius: 10px;";
            break;
        case "bottom right":
            style_str += "border-bottom-right-radius: 10px;";
            break;
        default:
            //for "none"
            break;            
    }


    if(Adchoices_settings.Clickthrough!="") {
        style_str += "cursor:pointer; ";
    }
    style_str += "background-image:url("+img+");";
    html_str += "<div id='AdChoices'  class='logo' ";
    html_str += "style='"+style_str+"' ></div>";
    $("#"+myDiv).append(html_str);
    $("#"+myDiv).on("click", "#AdChoices", function(event) {
        ADTECH.event("AdChoices Clickthrough");
        window.open( Adchoices_settings["Clickthrough"], "_blank" );
    }); 

    //adChoicesEvent is dispatched from customAd.js only for native formats; autos native 374x140, RD native
    ADTECH.addEventListener("adChoicesEvent", function(event) {
        ADTECH.event("AdChoices Clickthrough");
        window.open( Adchoices_settings["Clickthrough"], "_blank" );
    });

    if(Adchoices_settings.hide_on_expand) {
       ADTECH.addEventListener("myexpand", 
        function() {$("#AdChoices").hide()});
       ADTECH.addEventListener("mycontract", 
        function() {$("#AdChoices").show()}); 
    }   
}


function testHasTitle(title) {
  if((title.Header !="" && title.Use_image_for_header==false)  ||
      (title.Header_image != "" && title.Use_image_for_header) ) {
    return true;
  } 
  return false;
}

function buildTitle(title,num) {
  var m = "";
  var divstyle ="";
  if(title.Header !="") {
     m =title.Header;
  }
  if(title.Use_image_for_header) {
    m = "<img src='"+title.Header_image+"' >";
    divstyle = "margin:0;" 
  }
  if(title.Header_size != ""){
      if(!isNaN(title.Header_size)) {
        title.Header_size += 'px';
      }
    divstyle = "font-size:"+title.Header_size+";min-height:23px;height:auto;"; 
  }

  var s = '<div id="app'+num+'_title" class="header" style="'+divstyle+'">';
  s += m+ "</div>";
  // call function that populates array of title size object properties
  saveOrigSizes('app'+num+'_title');

  return s;
}

function saveOrigSizes(id){
  var headerInfo = {};
  headerInfo.id = id;
  headerInfo.appId = id.split('_')[0];
  // pushes into global array so sizes can be accessed later during resize
  customAppTitles.push(headerInfo); 
}
//sets up an array to hold app title size info to be used during resize
var customAppTitles = new Array();
var zIdx = 10000,
    eventBus = $({});

	function init() {
	settings = ADTECH.getContent('AdSettings');
	if(NOT_NullUndefinedEmptyNONE_AND_NotFalse(settings['extra_JS_Start'])) {
		eval(settings['extra_JS_Start']);
    }
	extraInitAtStart();
	Adchoices_settings = ADTECH.getContent('AdChoices');
	sync = ADTECH.getContent('Application_Syncing');
	
	if(settings.consoleLogging === false) {
		console.log = function() {};
	}
	adjustCSS(); // with evenless made a function so other formats can extend it.

	eventBus.on('expandMe', appExpanding);
	eventBus.on('collapseMe', appCollapsing);

	if(NOT_NullUndefinedEmptyNONE_AND_NotFalse(settings['extraCSS'])) {
       $( "<style>"+settings['extraCSS']+"</style>" ).appendTo( "head" );
    }
	buildApps();

	try {
	    logos = ADTECH.getContent('Logo');
	} catch(e) {
		logos = [{"image":"//aka-cdn-ns.adtech.de/rm/ads/20424/logo280x55_1378843247.png","Tracking Id":"Item 1","width":280,"zIndex":0,"hoverImage":"","x":9,"y":9,"Clickthrough":"//aol.com?boski","height":55}];
	}
	
	console.log("logo*****************************************", logos);
	console.log(JSON.stringify(logos));
	
	style_str ="";
	html_str ="";
	for(var i=0; i<logos.length; i++) {
		logo = logos[i];
		id = "logo_"+i;
		html_str += "<div id='"+id+"' data-index='"+i+"' class='logo' ></div>";
	    style_str += "#"+id +"{";
	    if(isNullUndefinedEmptyNONE(logo.right)) {
	        style_str += "left:"+logo.x+"px; ";
	    } else {
	        style_str += "right:"+logo.right+"px; ";
	    }
	    if(isNullUndefinedEmptyNONE(logo.bottom)) {
	        style_str += "top:"+logo.y+"px; ";
	    } else {
	        style_str += "bottom:"+logo.bottom+"px; ";
	    }
	    style_str += "height:"+logo.height+"px; ";
	    style_str += "width:"+logo.width+"px; ";
		style_str += "z-index:"+logo.zIndex+"; ";
	    if(logo.Clickthrough!="") style_str += "cursor:pointer; ";
		style_str += "background-image:url("+logo.image+"); }";
		console.log("logo.hoverImage:"+logo.hoverImage);
		if(logo.hoverImage!="")	style_str += "#"+id +":hover{ background-image:url("+logo.hoverImage+"); }";
	}
	$("#core").append("<style>"+style_str+"</style>"+html_str);
	if($('#teaser')){
		$("#core").append($('#teaser'));
	}
	
	for(var i=0; i<logos.length; i++) { 
	    logo = logos[i];
	    id = "logo_"+i;
	    if(logo.Clickthrough!="") {
	        $("#"+id).on(myClickAction, function(event) {
	            ADTECH.contentClick("Logo", 'Clickthrough', logos[$(this).data('index')]);
	        });    
	    }
	}
	
	
	try {
	    footers = ADTECH.getContent('Footer');
	} catch(e) {
		footers = [{"image":"//aka-cdn-ns.adtech.de/rm/ads/20424/footer280x55_1378843247.png","Tracking Id":"Item 1","width":280,"zIndex":0,"hoverImage":"","x":9,"y":9,"Clickthrough":"//aol.com?boski","height":55}];
	}
	
	console.log("footer*****************************************", footers);
	console.log(JSON.stringify(footers));
	
	style_str ="";
	html_str ="";
	for(var i=0; i<footers.length; i++) {
		footer = footers[i];
	    if(footer.text == "" || footer.text =="NONE") continue;
		id = "footer_"+i;
		html_str += "<div id='"+id+"' data-index='"+i+"' class='footer' >"+footer.text+"</div>";
		style_str += "#"+id +"{ left:"+footer.x+"px; ";
	    style_str += "top:"+footer.y+"px; ";
	    style_str += "width:"+footer.width+"px; ";
		style_str += "z-index:"+footer.zIndex+"; }";
	    if(footer.Text_clickthrough_color && footer.Text_clickthrough_color != "#") style_str += "#"+id +" a { color:"+footer.Text_clickthrough_color+"; }";
	}
	$("#core").append("<style>"+style_str+"</style>"+html_str);
	
	for(var i=0; i<footers.length; i++) { 
	    footer = footers[i];
	    id = "footer_"+i;
	    $(".footer").children('a').each(function(index) {
	        var attr = $(this).attr('href');
	
	        console.log("a:", this);
	        if(typeof attr !== 'undefined' && attr !== false) {
	            console.log("has href");
	            $(this).on("click", function(event) {
	                console.log("CLICK has href :" ,$(this.parentNode).data('index'), this.parentNode);
	                event.preventDefault();
	                ADTECH.dynamicClick("Footer : Extra Link",  $(this).attr('href'));
	            });    
	        } else {
	            console.log("use Clickthrough");
	            $(this).attr('href', footers[$(this.parentNode).data('index')].Clickthrough);
	            $(this).on("click", function(event) {
	                console.log("CLICK :" ,$(this.parentNode).data('index'), this.parentNode);
	                event.preventDefault();
	                ADTECH.contentClick("Footer", 'Clickthrough', footers[$(this.parentNode).data('index')]);
	            });    
	            
	        }
	    });
	}
	

//AdChoice is in the Banner on Mobile.
//where should adchoices go in loft?
  	if(adSize != "Mobile" && adSize != '970x250LOFT') {
		setupAdchoices("core");
	}

  	extraInitAtEnd();

  	introContentSetup();

  	if(adSize === '970x250LOFT'){
  		postIntroContentSetup();
  		buildLoftBanner();
  	}
  	if(adSize === 'Billboard' || adSize === 'Pushdown'){
  		postIntroContentSetup();
  		buildLeavebehindBanner();
  	}


	if(NOT_NullUndefinedEmptyNONE_AND_NotFalse( settings['extra_JS_End'] )) {
		eval(settings['extra_JS_End']);
    } 
}

extraInitAtStart = function(){};
extraInitAtEnd = function(){

};
adjustCSS = function(){
	evenless([ADTECH.getContent('Theme')]);
};

firstUserExpand = true;
function appExpanding(data) {

	ADTECH.event("Initial Expand");
	if(firstUserExpand == false) {
		ADTECH.event("Re-expand");
	} 
	firstUserExpand= false;

	
	//console.log('******************* appExpanding ', data);
	ADTECH.expand();
}

function appCollapsing(data) {
	//console.log('******************* appCollapsing ', data);
	ADTECH.contract();
}

function appDiv(num, apps) {
  var s = '<div class="app_div" id="app'+num+'_div">';
  var hasTitle = false;
  if(apps["app"+num] !== "NONE"){
  	  var title = ADTECH.getContent('App '+num+' - '+apps["app"+num]+' Title');
  	  if(NOT_NullUndefinedEmptyNONE_AND_NotFalse(title)) {
  	  	hasTitle = testHasTitle(title);
  	  }	
  	  if(hasTitle) {
  	  	s+= buildTitle(title,num);
  	  }
	  s += '<iframe id="app'+num+'" data-loc="'+num+'"  scrolling="no" src="'+getAppHtmlFilename(apps["app"+num])+'"';
	  s += ' allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" class="app_iframe';
	  
	  if(iPad){
		 s += ' ipad'; 
	  }
	  if(android4){
		  s += ' android-four'; 
	  }
	  if(anyIE){
		  s += ' ie'; 
	  }
	  if(hasTitle) {
	  	s += ' withTitle';
	  }
	  
	  s += '"></iframe>';
  }
  s +=    '</div>';

  return s;
}

/*
function expandApp(num) {
 //$("#app" + num).css({"z-index":zIdx++, height: "400px", width: "700px"});
}

function collapseApp(num) {
 //$("#app" + num).css({"z-index":zIdx++, height: "400px", width: "700px"});
}
*/

function syncEvent(appIndex, obj) {
  for(var i =1; i<4; i++) {
    if(sync["App"+i].indexOf(appIndex) != -1) {
      var app = document.getElementById('app'+i).contentWindow;
      app.syncEventHandler(obj);
    }
  }
}

function buildApps() {
	var item = ADTECH.getContent('Teaser');
	evenless([item]);
	var apps = ADTECH.getContent('Apps');
	var teaserSettings = ADTECH.getContent('Teaser');
	size = ADTECH.adConfig.assetContainers.main.contractedWidth+"x"+ADTECH.adConfig.assetContainers.main.contractedHeight;
	$("body").addClass('size'+ADTECH.adConfig.assetContainers.main.contractedWidth);
	// this needs to be flushed out
	var s = appDiv(1, apps);
	//s += '<div class="appDivider" id="appDivider1_2"></div>';

	//// teaser
	s += '<div class="teaser" id="teaser">';
	s += '<div id="teaserContents">';
	///////conditionalize to add html as teaser
	if(teaserSettings.Image != ''){
		s += '<img class="teaserImg" src="'+teaserSettings.Image+'" onload="teaserReady();"/>';
	}
	else if(teaserSettings.Html_Banner_Url != ''){
		s += '<iframe onload="teaserReady();" id="teaserHtml" data-loc="teaser" scrolling="no" src="'+ADTECH.getFileUrl('teaser.html')+'"';
		s += ' allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"';
		if(iPad){
			s += ' ipad'; 
		}
		if(android4){
			s += ' android-four'; 
		}
		if(anyIE){
			s += ' ie'; 
		}
		s += '"></iframe>';
	}
	else{
		s += '<div id="teaserFPO" style="position:absolute;width:728px;height:90px;background-color:#f00;text-align:center;vertical-align:middle;color:#fff;font-size:24pt;font-weight:bold;">upload image or html</div>';
	}
	if(teaserSettings.use_hotspot) {
		s+= '<div id="teaser_hotspot"></div>'
	}
	s += '</div>';// closes teaserContent
	s += '</div>';// closes teaser
	s += '<div id="openBtn"></div>';
	s += '<div id="closeBtn"></div>';

	
	
    	if(apps.use_app_switch_buttons) {
	    	s+= '<div id="appSwitchArea">';
	    	var buttons = [];
	    	buttons[3]= '<a class="ptlaCTA appSwitch" data-index="'+ apps.app3_thumb_pos +'">';
	    	buttons[3]+= apps.app3_button_text+"</a>";
	    	buttons[2]= '<a class="ptlaCTA appSwitch" data-index="'+ apps.app2_thumb_pos +'">';
	    	buttons[2]+= apps.app2_button_text+"</a>";
	    	buttons[1]= '<a class="ptlaCTA appSwitch" data-index="'+ apps.app1_button_item_index +'">';
	    	buttons[1]+= apps.app1_button_text+"</a>";
	    	var order = apps.buttons_order.split(",");
	    	for(var i=order.length -1; i>-1; i--) {
	    		s+= buttons[order[i]];
	    	}
	    	s+= '</div>'
    	}
	
	$("#core").html(s);
	if(teaserSettings.use_hotspot) {
		$("#teaser_hotspot").on(teaserSettings.button_event, myOpen);
	}
	$("#core").show();
	$("#core").css({"opacity": 0, "border-width": "1px"});

	$("#closeBtn").click(function(){
		//console.log("AK click on closeBtn");
		//breakFocus();
		myClose();
	});
	if(teaserSettings['Hide_Open_Button'] != true) {
		$("#openBtn").show();	   
		$("#openBtn").on(teaserSettings.button_event, myOpen);
    	}
	if(apps.use_app_switch_buttons) {
		$(".appSwitch").click(appSwitch);
	}
	if($("#teaserFPO")){
		teaserReady();
	}
}
function appSwitch(e) {
	var inside = iframeRef( document.getElementById('app1') );
	console.log("this:", this, "index:",$(this).data('index'));
	inside.mySwiper.swipeTo($(this).data('index'));
	inside.thumbsSwiper.swipeTo($(this).data('index')); 
}

expanded = false;
specs = {}

size = "300x250"; 
extraInitAtStart  = function(){
	size = ADTECH.adConfig.assetContainers.main.contractedWidth+"x"+ADTECH.adConfig.assetContainers.main.contractedHeight;
	if(size == "728x90") {
	}
	ADTECH.getContent('initialSize');
	specs.expand = {
			h: 315,
    		w: 728
		};

	specs.contract= {
			h: ADTECH.adConfig.assetContainers.main.contractedHeight,
   			w: ADTECH.adConfig.assetContainers.main.contractedWidth
		};
		$("#core").addClass('size'+specs.contract.w);
		$("#core").css({
			width: specs.contract.w,
			height: specs.contract.h});

		//set focus to button(s) to fix the keyboard open on iOS & Android devices
		ADTECH.addEventListener("mycontract", breakFocus);

};
extraInitAtEnd  = function(){
	      console.log("***Extra Init***");
    var item = ADTECH.getContent('Teaser');

    console.log("AK button event:" + item.button_event);

    if(item.button_event == "mouseover") {

		ADTECH.addEventListener(com.adtech.RichMediaEvent.MOUSE_OUT, myRollOut);


        $("#openBtn").on("mouseover", myOverOpen);

		
    }
	
	

};

// breakFocus function is not working yet but meant to fix the keyboard issue by bluring elements on apps
function breakFocus(){
	//console.log("AK breakFocus fired!");
    for(var i =1; i<4; i++) {
        var appWindowDoc = $(document).find("iframe").eq(0).contents().find('#app'+i).contents();
        $(appWindowDoc).find("button").focus();
        $(appWindowDoc).find("input:submit").focus();
        //console.log("AK breakFocus: " + i + "=> button#: " + $(document).find("iframe").eq(0).contents().find("#app"+i).contents().find("button").length);	
    }
}

function tempDisableRollout() {
	console.log("tempDisableRollout");
	disableRollout = true;
}
disableRollout = false;
function myRollOut(e) {
	if(disableRollout == false) {
	      console.log("***myRollOut***");
	      myClose();
	 }
}

function iframeRef( frameRef ) {
    return frameRef.contentWindow;
    //? frameRef.contentWindow.document : frameRef.contentDocument
}

myOpen = function () {
	var inside = iframeRef( document.getElementById('app1') );
	if(expanded == false && readyToOpen) {
		//inside.myExpand();
		myExpand();
	}
}

function teaserReady() {
	$("#core").css("opacity", 1);
}
readyToOpen = true;
readyToClose = false;

firstUserExpand = true;

myExpand = function (auto_expand) {
	if(typeof auto_expand == "undefined") auto_expand = false;
	ADTECH.dispatchEvent("myexpand");

    var item = ADTECH.getContent('Teaser');
	if(expanded == false && readyToOpen) {
		readyToClose = false;
		disableRollout = false;
		console.log("hey Open");
		var inside = iframeRef( document.getElementById('app1') );
		inside.myExpand2();
		TweenLite.to($("#teaser"), 0.3, {opacity:0, onComplete:function() { $("#teaser").css("display","none");expanded = true; }});
		//ADTECH.expand();
		
		$("#closeBtn").css("display", "block");
		TweenLite.to($("#closeBtn"), 0.4, {opacity:1, onComplete: function() {readyToClose = true}});
		if(ADTECH.getContent('Teaser')['Hide_Open_Button'] != true) {
			TweenLite.to($("#openBtn"), 0.4, {opacity:0, onComplete:function() { $("#openBtn").css("display","none"); } });
		}	
		TweenLite.to($("#appSwitchArea"), 0.4, {opacity:1});
		TweenLite.to($("#core"), 0.3, {width: specs.expand.w, height: specs.expand.h, onComplete: function() {
        $('#core').css("border-width", "1px");
				$("#appSwitchArea").css("z-index",1001);
				$($(".logo")[0]).css("z-index",1001);
				$("#teaser").css("z-index",1002);
		}});		



		if(auto_expand) {
			ADTECH.event("Auto Expand");
		} else {
			ADTECH.event("Initial Expand");
			if(firstUserExpand == false) {
				ADTECH.event("Re-expand");
			} 
			firstUserExpand= false;
		}
		ADTECH.expand();
		ADTECH.dispatchEvent("myexpand");
	}
}
rolloverOpenOK = true;
myOverOpen = function() {
	if(rolloverOpenOK) myOpen();
}
myClose = function () {
	ADTECH.dispatchEvent("mycontract");

	var inside = iframeRef( document.getElementById('app1') );
	if(expanded != false ) {
		if(!readyToClose) {
			setTimeout(myClose,200);
			return;
		}
		rolloverOpenOK = false;
		expanded = false;
		console.log("hey Close");
		readyToOpen = false;
		$("#appSwitchArea").css("z-index",0);
		if(specs.contract.w > 600) {
			$($(".logo")[0]).css("z-index",10);
		}
		$("#teaser").css("z-index",1000);
		
		inside.myClose();
		
		$("#teaser").css("display","block");


    	TweenLite.to($("#teaser"), 0.3, {opacity:1, onComplete:  function() { 
    			//$(".swiper-container").css({"margin-top":"315px"}); 
    		}} );
		TweenLite.to($("#closeBtn"), 0.4, {opacity:0, onComplete: function() {readyToOpen = true;}});
		
		if(ADTECH.getContent('Teaser')['Hide_Open_Button'] != true) {

		$("#openBtn").css("display","block");
			TweenLite.to($("#openBtn"), 0.500, {opacity:1 } );
		}
		TweenLite.to($($("#appSwitchArea")), 0.4, {opacity:0});
		
		setTimeout(function() {rolloverOpenOK = true},600);
				ADTECH.contract();
		TweenLite.to($("#core"), 0.3, {width: specs.contract.w, height: specs.contract.h, onComplete: function() {
				console.log("contract");
		}});		


		
	}
}

ADTECH.ready(init);