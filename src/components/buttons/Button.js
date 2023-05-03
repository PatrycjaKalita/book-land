import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {colors, fonts} from '../../theme'
import PropTypes from "prop-types";

const Button = ({
                    title,
                    width, height, borderRadius, backgroundColor,
                    onPress, children,
                    color,
                    style, textStyle,
                }) => {
    const btnStyle = [{width, height, backgroundColor, borderRadius}, style]
    const txtStyle = [{color}, textStyle]
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={btnStyle}>
                {
                    title &&
                    <Text style={[txtStyle, {fontFamily: 'Roboto', fontSize: 20,}]}>{title}</Text>
                }
                {children}
            </View>
        </TouchableOpacity>
    )

}

Button.propTypes = {
    title: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    children: PropTypes.string,
    onPress: PropTypes.func,
    style: PropTypes.shape({}),
    textStyle: PropTypes.shape({}),
}

Button.defaultProps = {
    title: null,
    width: 'auto',
    height: 'auto',
    color: colors.white,
    backgroundColor: '#DA22A1',
    onPress: () => {
    },
    borderRadius: 25,
    style: {},
    textStyle: {},
    children: null,
}

export default Button
