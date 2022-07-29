import {StyleSheet} from 'react-native'
import {colors, fonts} from '../../theme'

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
    },
    photo: {
        width: '100%',
        height: 430,
    },
    form: {
        height: 400,
        backgroundColor: colors.background,
        borderRadius: 40,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: colors.black,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        marginTop: -45,
        alignItems: 'center',
    },
    text: {
        color: colors.white,
        fontFamily: fonts.poppins.medium,
        fontSize: 18,
        marginTop: 15,
    },
    title: {
        color: colors.white,
        fontFamily: fonts.poppins.bold,
        fontSize: 22,
        marginBottom: 20,
        lineHeight: 25,
    },
    input: {
        backgroundColor: colors.input,
        width: 250,
        height: 55,
        borderRadius: 50,
        paddingLeft: 20,
        color: colors.purple,
    },
    button: {
        borderRadius: 50,
        marginTop: 15,
        width: 250,
        height: 55,
    },
    linkText: {
        color: colors.gray,
        fontFamily: fonts.poppins.regular,
        fontSize: 12,
        marginTop: 5,
    },
    link: {
        color: colors.pink,
        fontFamily: fonts.poppins.medium,
        fontSize: 12,
    },
})

export default styles
