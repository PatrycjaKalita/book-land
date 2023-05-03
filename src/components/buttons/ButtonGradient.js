import React from 'react'
import PropTypes from 'prop-types'
import {TouchableOpacity, Text} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

const styles = {
    root: {
        paddingVertical: 14,
        paddingHorizontal: 16,
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
    },
}

const ButtonGradient = ({
                    title,
                    width,
                    height,
                    color,
                    backgroundColor,
                    onPress,
                    children,
                    textStyle,
                    style,
                }) => {
    const btnStyle = [styles.root, {width, height, backgroundColor}, style]
    const txtStyle = [styles.text, {color}, textStyle]
    return (
        <LinearGradient
            colors={['#DA22A1', '#4935DA']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 1}}
            style={btnStyle}>
            <TouchableOpacity onPress={onPress}>
                {title && <Text style={txtStyle}>{title}</Text>}
                {children}
            </TouchableOpacity>
        </LinearGradient>
    )
}

ButtonGradient.propTypes = {
    title: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    onPress: PropTypes.func,
    children: PropTypes.string,
    textStyle: PropTypes.shape({}),
    style: PropTypes.shape({}),
}

ButtonGradient.defaultProps = {
    title: null,
    width: 'auto',
    height: 'auto',
    color: 'black',
    backgroundColor: '#cacaca',
    onPress: () => {
    },
    children: null,
    textStyle: {},
    style: {},
}

export default ButtonGradient
