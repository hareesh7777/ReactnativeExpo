import {
    moderateScale,
    moderateVerticalScale,
    scale,
  } from 'react-native-size-matters';
  
  export const rS = (size: number, factor?: number) => {
    return moderateScale(size, factor);
  };
  
  export const rVS = (size: number, factor?: number) => {
    return moderateVerticalScale(size, factor);
  };
  
  export const rMS = (size: number, factor?: number) => {
    return moderateScale(size, factor);
  };
  
  const Theme = {
    colors: {
      primary: '#000000',
      secondary: '#8067B7',
      white: '#FFFFFF',
      black: '#000000',
      textGrey: '#71717A',
      red: '#FF0000',
      redlite: '#FF000080',
      buttongrey: '#B6B6D3',
      br: '#6D63FF',
      bgGrey: '#B6B6D3',
      background: '#F3F3F8',
      textblack: '#1B1B1B',
      green: '#10962D',
      lightGreen: '#EFF8F0',
      greenlite: '#98FB98',
      darkgreen: '#023020',
      transparentgrey: '#4D4D4D',
      orange: '#F48C5B',
      warning: '#FFC107',
      blueLight: '#007BFF',
      border: '#EAEAEB',
      yellow: '#FFFF00',
      transparent: 'transparent',
      opacitybutton: '#EFEFFF',
      textred: '#F02710',
      starYellow: '#FFA534',
      starBorder: '#C6C5CA',
      iconBG: '#DEDFFE',
      indicator: '#D8E3ED',
      lightSmoke: '#e1f1f8',
      skeletonbg: '#D4D4D4',
      daysWeekbg: '#F6C7AB',
      orderTypebg: '#C0E5F5',
      navyBlue: '#5B5CFF',
      logoutbg: '#697565',
      daybg: '#ECDFCC',
      callbg: '#3C3D37',
    },
    fontSize: {
      primary: scale(20),
      twenty: scale(20),
      third: scale(2),
      twele: scale(12),
      eleven: scale(11),
      thirteen: scale(13),
      fourteen: scale(14),
      ten: scale(10),
      nine: scale(9),
      seven: scale(7),
      sixteen: scale(16),
      fifteen: scale(15),
      twentyFive: scale(25),
    },
    fontFamily: {
      Regular: 'Gordita-Regular',
      SemiBold: 'Ubuntu-Bold',
      Bold: 'Gordita-Bold',
      Medium: 'Poppins-Medium',
    },
    fontBold: {
      fontFamily: 'Gordita-Bold',
      fontWeight: 'bold',
    },
    font12: {
      fontFamily: 'Ubuntu-Regular',
      fontSize: scale(12),
      color: '#000000',
    },
    font14: {
      fontFamily: 'Ubuntu-Regular',
      fontSize: scale(14),
      color: '#000000',
    },
    font16: {
      fontFamily: 'Ubuntu-Regular',
      fontSize: scale(16),
      color: '#000000',
    },
    font20: {
      fontFamily: 'Ubuntu-Regular',
      fontSize: scale(20),
      color: '#000000',
    },
    font10: {
      fontFamily: 'Ubuntu-Regular',
      fontSize: scale(10),
      color: '#000000',
    },
    font12Bold: {
      fontFamily: 'Ubuntu-Bold',
      fontSize: scale(12),
      color: '#000000',
    },
    font14Bold: {
      fontFamily: 'Ubuntu-Bold',
      fontSize: scale(14),
      color: '#000000',
    },
    font16Bold: {
      fontFamily: 'Ubuntu-Bold',
      fontSize: scale(16),
      color: '#000000',
    },
    font20Bold: {
      fontFamily: 'Ubuntu-Bold',
      fontSize: scale(20),
      color: '#000000',
    },
    font10Bold: {
      fontFamily: 'Ubuntu-Bold',
      fontSize: scale(10),
      color: '#000000',
    }
  };
  
  export default Theme;
  