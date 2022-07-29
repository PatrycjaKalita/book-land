import { Asset } from 'expo-asset'

// png/jpeg
export const images = {
    logo: require('../../assets/images/icon.png'),
    login_bg: require('../../assets/images/login-bg.jpg'),
}

// image preloading
export const imageAssets = Object.keys(images).map((key) => Asset.fromModule(images[key]).downloadAsync())
