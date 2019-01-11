import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';


class Login extends Component {
    state = {
        email : '',
        password: ''
    }
    editEmail = (txt) =>{
        this.setState({email : txt});
    }
    editPass = (txt) =>{
        this.setState({password : txt});
    }
    loginChk = (email,pass) =>{
        if(email != '' && pass != ''){
            alert('a,djhjkdavgj');
        }else{
            alert('woooooooo');
        }
    }

    render(){
        return(
            <View style = {[styles.loginContainer]}>
                <Text> Login Page </Text>
                <TextInput style={[styles.input]}
                   underlineColorAndroid = "transparent"
                   placeholder = "Email"
                   placeholderTextColor = "#9a73ef"
                   onChangeText ={this.editEmail}
                />
                <TextInput style={[styles.input]}
                   underlineColorAndroid = "transparent"
                   placeholder = "Password"
                   placeholderTextColor = "#9a73ef"
                   onChangeText ={this.editPass}
                />
                <Button style = {styles.submit}
                    onPress={() => this.loginChk(this.state.email,this.state.password)}
                    title="Submit"
                />

            </View>
        )
    }
}

export default Login;


const styles = StyleSheet.create({
    loginContainer : {
        backgroundColor: '#ffffff',
        width: 300,
        height: 'auto',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        margin: 15,
        height: 40,
        width:150,
        borderColor: '#7a42f4',
        borderWidth: 0.5
    },
    submit: {
        backgroundColor: '#4040bf',
        height: 40,
        width: 50
    }
})