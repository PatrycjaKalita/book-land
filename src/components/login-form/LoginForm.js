import {View, Text, ImageBackground, TextInput, Alert, SafeAreaView} from "react-native";
import styles from './Style'
import {colors, images} from "../../theme";
import ButtonGradient from "../buttons/ButtonGradient"

export default function LoginForm() {
    return (
        <View style={styles.root}>
            <SafeAreaView/>
            <ImageBackground style={styles.photo} source={images.login_bg}/>
            <View style={styles.form}>
                <Text style={styles.text}>Welcome in</Text>
                <Text style={styles.title}>BOOK-LAND</Text>

                <TextInput style={[styles.input, {marginBottom: 12}]} placeholderTextColor={colors.purple}
                           selectionColor={colors.pink}
                           underlineColorAndroid="transparent" placeholder="Login"/>
                <TextInput style={styles.input} placeholderTextColor={colors.purple} selectionColor={colors.pink}
                           underlineColorAndroid="transparent" placeholder="Password" secureTextEntry={true}/>

                <Text style={[styles.link, {marginLeft: 100, marginTop: 3,}]}>Forgot password?</Text>

                <ButtonGradient
                    color="white"
                    style={styles.button}
                    onPress={() => Alert.alert('Log in work!')}
                    title="LOG IN"
                />

                <View style={{display: 'flex', flexDirection: 'row',}}>
                    <Text style={[styles.linkText]}>You don't have an account? </Text>
                    <Text style={[styles.link, {marginTop: 5,}]}>Sign up!</Text>
                </View>

            </View>
        </View>
    );
}
