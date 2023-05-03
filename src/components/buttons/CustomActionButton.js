import React from 'react';
import {View, TouchableOpacity} from "react-native";
import PropTypes from "prop-types";


const CustomActionButton = ({children, onPress, style}) => {
    return (
        <View style={[{
            width: 40,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center'
        }, style]}>
            <TouchableOpacity onPress={onPress}>
           {/*     <Ionicons name='ios-close' size={30} color={colors.purple}/>*/}
                {children}
            </TouchableOpacity>
        </View>
    );
};

CustomActionButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
    style: PropTypes.object
}

CustomActionButton.defaultProps = {
    style: {}
}
export default CustomActionButton;
