import React from 'react';
import { Image, StyleSheet } from 'react-native'

import Screen from '../components/Screen';
import * as Yup from 'yup'

import { AppForm, AppFormField, SubmitButton } from '../components/forms'


const validationSchema = Yup.object({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

function LoginScreen(props) {

    return (
        <Screen style={styles.container}  >
            <AppForm initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"

                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"

                />


                <SubmitButton title="Login" />
            </AppForm>

        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center'
    }
})

export default LoginScreen;



