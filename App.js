import React, { useState, useEffect } from 'react'
import { View } from 'react-native';
import LoginForm from "./src/components/login-form/LoginForm";
import HomePage from "./src/components/home-page";

//assets
import { imageAssets } from './src/theme/images'
import { fontAssets } from './src/theme/fonts'

export default function App() {
    // This is used to load images and fonts.
    // This will guarantee that this assets will be seen in app.

    // state
    const [didLoad, setDidLoad] = useState(false)

    // handler
    const handleLoadAssets = async () => {
        // assets preloading
        await Promise.all([...imageAssets, ...fontAssets])
        setDidLoad(true)
    }

    // lifecycle
    useEffect(() => {
        handleLoadAssets()
    }, [])

    // rendering
    if (!didLoad) return <View />
  return (
    <View>
      {/*<LoginForm/>*/}
        <HomePage/>
    </View>
  );
}
