import * as Font from 'expo-font'

export const fonts = {
    poppins: {
        black: 'poppins_black',
        bold: 'poppins_bold',
        extraBold: 'poppins_extraBold',
        extraLight: 'poppins_extraLight',
        light: 'poppins_light',
        medium: 'poppins_medium',
        regular: 'poppins_regular',
        semiBold: 'poppins_semiBold',
        thin: 'poppins_thin',
    },
}

// fonts preloading
export const fontsAll = [
    {
        poppins_black: require('../../assets/fonts/Poppins-Black.ttf'),
        poppins_bold: require('../../assets/fonts/Poppins-Bold.ttf'),
        poppins_extraBold: require('../../assets/fonts/Poppins-ExtraBold.ttf'),
        poppins_extraLight: require('../../assets/fonts/Poppins-ExtraLight.ttf'),
        poppins_light: require('../../assets/fonts/Poppins-Light.ttf'),
        poppins_medium: require('../../assets/fonts/Poppins-Medium.ttf'),
        poppins_regular: require('../../assets/fonts/Poppins-Regular.ttf'),
        poppins_semiBold: require('../../assets/fonts/Poppins-SemiBold.ttf'),
        poppins_thin: require('../../assets/fonts/Poppins-Thin.ttf'),
    }
]
export const fontAssets = fontsAll.map((x) => Font.loadAsync(x))
