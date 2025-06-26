import {
  BlazeMomentsPlayerStyle,
  BlazeStoryPlayerStyle,
  BlazeVideosPlayerStyle,
} from '@wscsports/blaze-rtn-sdk';

// Disclaimer - the props from the color type expect to receive the hex value in RGBA format

export const momentPlayerRowStyle: BlazeMomentsPlayerStyle = {
  playerDisplayMode: 'FixedRatio_9_16',
  headingText: {
    textColor: '#FFFFFF', // Hex (RGBA format)
  },
  buttons: {
  },
  backgroundColor: '#FFFFFF', 
  cta: {cornerRadius: 16},
  footerGradient: {
    isVisible: true,
    endColor: '#660000ff',
    startColor: '#66000000',
  },
  firstTimeSlide: {
  },
  seekBar: {
    isVisible: true,
    playingState: {
      progressColor: '#1c3434',
      thumbColor: '#b3ffFF',
      thumbImage: {
        imageName: 'exit',
      },
      isThumbVisible: true,
    },
    pausedState: {
      progressColor: '#1c3434',
      thumbColor: '#b3ffFF',
      thumbImage: {
        imageName: 'exit',
      },
    },
  },
};

export const momentPlayerGridStyle: BlazeMomentsPlayerStyle = {
  playerDisplayMode: 'FixedRatio_9_16',
  headingText: {
    textColor: '#ffffff',
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
      customImage: {
        selectedImage: {
          imageName: 'exit',
        },
        unselectedImage: {
          imageName: 'like',
        },
      },
    },
  },
  cta: { cornerRadius: 16 },
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
  firstTimeSlide: {
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
  seekBar: {
    isVisible: true,
    playingState: {
      progressColor: '#1c3434',
      thumbColor: '#b3ffFF',
      thumbImage: {
        imageName: 'exit',
      },
    },
    pausedState: {
      progressColor: '#1c3434',
      thumbColor: '#b3ffFF',
      thumbImage: {
        imageName: 'exit',
      },
    },
  },
};

export const storyPlayerGridStyle: BlazeStoryPlayerStyle = {
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
    isVisible: true
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
  firstTimeSlide: {
    backgroundColor: { colorFileName: 'first_time_color_stories', colorName: '#E74C3C' },
    show: true,
    mainTitle: {
      font: {
        fontName: 'Agbalumo-Regular',
        fontFileName: 'agbalumo_regular',
      },
    },
    subtitle: {
      text: 'Subtitle',
      font: {
        fontName: 'Agbalumo-Regular',
        fontFileName: 'agbalumo_regular',
      },
    },
  },
  progressBar: {
    backgroundColor: '#000000',
    progressColor: '#99ff00',
  },
  cta: {
    cornerRadius: 16,
    font: {
      fontName: 'Agbalumo-Regular',
      fontFileName: 'agbalumo_regular',
    },
    textSize: 20,
  },
};

export const storyPlayerRowStyle: BlazeStoryPlayerStyle = {
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
    isVisible: true
  },
  buttons: {
    mute: {
      color: '#F7DC6F',
      scaleType: 'FIT_END',
      customImage: {
        selectedImage: {
          imageName: 'like'
        },
        unselectedImage: {
          imageName: 'exit'
        },
      }
    },
    exit: {
      color: '#646464',
      scaleType: 'FIT_XY',
    },
  },
};

export const videosPlayerStyle: BlazeVideosPlayerStyle = {
    
};
