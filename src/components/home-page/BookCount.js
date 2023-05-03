import React from 'react';
import {Text, View} from "react-native";
import {colors} from '../../theme'
import PropTypes from 'prop-types'

const BookCount = ({title, count}) => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <Text style={{color: colors.white, fontSize: 20,}}>{title}</Text>
        <Text style={{color: colors.white,}}>{count}</Text>
    </View>
)

BookCount.propTypes = {
    count: PropTypes.number.isRequired,
    title: PropTypes.string
}

BookCount.defaultProps = {
    title: 'Title'
}

export default BookCount
