import {
  BlazePlayerMomentTheme,
  BlazePlayerStoryTheme,
} from '@wscsports/blaze-rtn-sdk';

// Disclaimer - the props from the color type expect to receive the hex value in RGBA format

export const momentPlayerRowTheme: BlazePlayerMomentTheme = {
  headingText: {
    textColor: '#FFFFFF', // Hex (RGBA format)
  },
  collectionTitle: {
    textColor: '#FFFFFF', 
  },
  buttons: {
  },
  backgroundColor: '#FFFFFF', 
  ctaStyle: {cornerRadius: 16},
  footerGradient: {
    isVisible: true,
    endColor: '#660000ff',
    startColor: '#66000000',
  },
  shouldShowCloseButtonForAds: true,
  firstTimeSlideAppearance: {
  },
  playerSeekBar: {
    isVisible: true,
    progressColor: '#1c3434',
    thumbColor: '#b3ffFF',
    thumbImage: {
    },
  },
};

export const momentPlayerGridTheme: BlazePlayerMomentTheme = {
  headingText: {
    textColor: '#ffffff', 
  },
  collectionTitle: {
    textColor: '#F8C471', 
  },
  buttons: {
    mute: {
      width: 40,
      height: 40,
      color: '#F8C471',
      isVisible: true,
    },
    exit: {
      width: 40,
      height: 40,
      color: '#fcfcfc',
      isVisible: true,
      scaleType: 'FIT_END',
      isVisibleForAds: false,
    },
    share: {
      width: 60,
      height: 60,
      color: '#00ff5e',
      isVisible: true,
    },
    like: {
      width: 60,
      height: 60,
      color: '#ffaaaa',
      isVisible: true,
      scaleType: 'FIT_XY',
      image: {
        selectedImage: {
          imageName: 'exit',
        },
        unselectedImage: {
          imageName: 'like',
        },
      },
    },
  },
  ctaStyle: {cornerRadius: 16},
  headerGradient: {
    isVisible: false,
    startColor: '#660022ff',
    endColor: '#66000000',
  },
  footerGradient: {
    isVisible: true,
    startColor: '#6688ff00',
    endColor: '#66880040',
    endPositioning: 'BottomToContainer'
  },
  shouldShowCloseButtonForAds: true,
  firstTimeSlideAppearance: {
    backgroundColor: {
      colorFileName: 'first_time_color_moments',
      colorName: '#005c8a',
    },
    instructions: {
      previous: {
        headerText: {
          text: 'previous',
        },
      },
      pause: {
        headerText: {
          text: 'pause',
        },
      },
      play: {
        headerText: {
          text: 'play',
        },
      },
      next: {
        headerText: {
          text: 'next',
        },
      },
    },
  },
  playerSeekBar: {
    isVisible: true,
    progressColor: '#1c3434',
    thumbColor: '#b3ffFF',
    thumbImage: {
      imageName: 'exit',
    },
  },
};

export const storyPlayerGridTheme: BlazePlayerStoryTheme = {
  lastUpdate:{
    textCase:'Uppercase',
    textColor:'#ffffff'
  },
  backgroundColor: '#ffffff',
  headerGradient: {
    startColor: '#110000',
    endColor: '#ffffff66',
  },
  title: {
    textSize: 18,
  },
  iconThumbnail: {
    width: 40,
    height: 20,
  },
  buttons: {
    mute: {
      width: 40,
      height: 40,
      color: '#F7DC6F',
    },
    exit: {
      width: 60,
      height: 60,
      color: '#646464',
      scaleType: 'CENTER_CROP',
    },
    share: {
      width: 70,
      height: 70,
      color: '#3498DB',
    },
  },
  chips: {
    ad: {
      text: 'Hello',
      textColor: '#ECF0F1',
      backgroundColor: '#2C3E50',
    },
    live: {
      text: 'Hello',
      textColor: '#FF0000',
      backgroundColor: '#00FF00',
    },
  },
  firstTimeSlideAppearance: {
    backgroundColor: {colorFileName: 'first_time_color_stories', colorName: '#E74C3C'},
    show: true,
    mainTitle: {
      font: {
        fontName: 'Agbalumo-Regular',
        fontFileName: 'agbalumo_regular',
      },
    },
    subTitle: {
      text: 'Subtitle',
      font: {
        fontName: 'Agbalumo-Regular',
        fontFileName: 'agbalumo_regular',
      },
    },
  },
  progressBarStyle: {
  },
  ctaStyle: {
    cornerRadius: 16,
    font: {
      fontName: 'Agbalumo-Regular',
      fontFileName: 'agbalumo_regular',
    },
    textSize: 20,
    position:'CtaBellowShare'
  },
};

export const storyPlayerRowTheme: BlazePlayerStoryTheme = {
  backgroundColor: '#71717180',
  lastUpdate:{
    textColor: '#ffffff'
  },
  headerGradient: {
    startColor: '#00000076',
    endColor: '#99ff0020',
  },
  title: {
    textSize: 18,
  },
  buttons: {
    mute: {
      color: '#F7DC6F',
      scaleType: 'FIT_END',
    },
    exit: {
      color: '#646464',
      scaleType: 'FIT_XY',
    },
  },
};
