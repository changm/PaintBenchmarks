(function() {
  var creativeDefinition = {
    customScriptUrl: '',
    isDynamic: true,
    delayedImpression: false,
    standardEventIds: {
      DISPLAY_TIMER: '2',
      INTERACTION_TIMER: '3',
      INTERACTIVE_IMPRESSION: '4',
      FULL_SCREEN_VIDEO_PLAYS: '5',
      FULL_SCREEN_VIDEO_COMPLETES: '6',
      FULL_SCREEN_AVERAGE_VIEW_TIME: '7',
      MANUAL_CLOSE: '8',
      BACKUP_IMAGE_IMPRESSION: '9',
      EXPAND_TIMER: '10',
      VIDEO_PLAY: '11',
      VIDEO_VIEW_TIMER: '12',
      VIDEO_COMPLETE: '13',
      VIDEO_INTERACTION: '14',
      VIDEO_PAUSE: '15',
      VIDEO_MUTE: '16',
      VIDEO_REPLAY: '17',
      VIDEO_MIDPOINT: '18',
      FULL_SCREEN_VIDEO: '19',
      VIDEO_STOP: '20',
      VIDEO_FIRST_QUARTILE: '960584',
      VIDEO_THIRD_QUARTILE: '960585',
      VIDEO_UNMUTE: '149645',
      FULL_SCREEN: '286263',
      DYNAMIC_CREATIVE_IMPRESSION: '536393',
      HTML5_CREATIVE_IMPRESSION: '871060'
    },
    exitEvents: [
      {
        name: 'CTA_Clickthru_URL',
        reportingId: '2027780',
        url: 'https://halfprice.sprint.com/',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'main_Clickthru_URL',
        reportingId: '1693684',
        url: '',
        targetWindow: '_blank',
        windowProperties: ''
      }
    ],
    timerEvents: [
    ],
    counterEvents: [
    ],
    childFiles: [
      {
        name: 'Sprint_DDR_Dynamic_Plans_Services_OLA_300x600.swf',
        url: '/ads/richmedia/studio/pv2/34202037/20150330122051075/Sprint_DDR_Dynamic_Plans_Services_OLA_300x600.swf',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'Sprint_DA4DD06_ZMOT_300x600_endframe.jpg',
        url: '/ads/richmedia/studio/pv2/34202037/20150330122051075/Sprint_DA4DD06_ZMOT_300x600_endframe.jpg',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'Sprint_DDR_Dynamic_Devices_300x600.swf',
        url: '/ads/richmedia/studio/pv2/34202037/20150330122051075/Sprint_DDR_Dynamic_Devices_300x600.swf',
        isVideo: false,
        transcodeInformation: null
      }
    ],
    videoFiles: [
    ],
    videoEntries: [
    ],
    primaryAssets: [
      {
        id: '36161720',
        artworkType: 'FLASH',
        displayType: 'BANNER',
        width: '300',
        height: '600',
        servingPath: '/ads/richmedia/studio/pv2/34202037/20150330122051075/300x600_parent_secure.swf',
        zIndex: '1000000',
        customCss: '',
        flashArtworkTypeData: {
          actionscriptVersion: '2',
          wmode: 'opaque',
          sdkVersion: '2.4.2',
          flashBackgroundColor: '',
          allowScriptAccess: 'always'
        },
        htmlArtworkTypeData: null,
        floatingDisplayTypeData: null,
        expandingDisplayTypeData: null,
        imageGalleryTypeData: null,
        pageSettings:null,
layoutsConfig: null,
layoutsApi: null
      }
    ]
  }
  var rendererDisplayType = '';
  rendererDisplayType += 'flash_';
  var rendererFormat = 'inpage';
  var rendererName = rendererDisplayType + rendererFormat;

  var creativeId = '59826436';
  var adId = '289746321';
  var templateVersion = '200_74';
  var studioObjects = window['studioV2'] = window['studioV2'] || {};
  var creativeObjects = studioObjects['creatives'] = studioObjects['creatives'] || {};
  var creativeKey = [creativeId, adId].join('_');
  var creative = creativeObjects[creativeKey] = creativeObjects[creativeKey] || {};
  creative['creativeDefinition'] = creativeDefinition;
  var adResponses = creative['adResponses'] || [];
  for (var i = 0; i < adResponses.length; i++) {
    adResponses[i].creativeDto && adResponses[i].creativeDto.csiEvents &&
        (adResponses[i].creativeDto.csiEvents['pe'] =
            adResponses[i].creativeDto.csiEvents['pe'] || (+new Date));
  }
  var loadedLibraries = studioObjects['loadedLibraries'] = studioObjects['loadedLibraries'] || {};
  var versionedLibrary = loadedLibraries[templateVersion] = loadedLibraries[templateVersion] || {};
  var typedLibrary = versionedLibrary[rendererName] = versionedLibrary[rendererName] || {};
  if (typedLibrary['bootstrap']) {
    typedLibrary.bootstrap();
  }
})();
