import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    StatusBar
    } from 'react-native';
import Validator from 'validator';
import { Actions } from 'react-native-router-flux';
import Firebase from 'firebase';
import Spinner from 'react-native-loading-spinner-overlay';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'admin@hotmail.com' ,
            password: '12345678',
            errors: {
                email: '',
                password: '',
            },
        };
        this.checkEmail = this.checkEmail.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
   
    register() {
        Actions.register();
    }
    onSubmit() {
        const { email ,password } = this.state;
        //Login Firebase
        Firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { 
                this.setState({ error: ''}); 
                Actions.reset("tabbar");
            })
            .catch(() => {
                alert("Email or Password are invalid. \n Please re-enter");
            });
    }
    checkEmail(){
        if(!Validator.isEmail(this.state.email)) {
            this.setState({ errors: {...this.state.errors, email: 'Not email format' } });
        }
        else { 
            this.setState({ errors: {...this.state.errors, email: '' } });
        }
    }
    checkPassword(){
        if (this.state.password.length < 7 ) {
            this.setState({ errors: {...this.state.errors, password: 'More than 8 charactor' } });
        } 
        else {
            this.setState({ errors: {...this.state.errors, password: '' } });
        }
    //console.log(this.state);
    }

    render() {
        return(
            <View style={styles.container}>
                {/* <StatusBar hidden /> */}
                <View style={{alignItems : 'center',justifyContent: 'center'}}> 
                    <Text style={styles.title}>
                        ROCK-IT LOCKER
                    </Text>
                    <Text style={{marginVertical : 15, color:'#778899'}}>
                        Welcome to application by TCT (KMUTNB)
                    </Text>
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder='Email'
                    onChangeText={(email) => this.setState({email: email.toLowerCase()})}
                    value={this.state.email}
                    onBlur = {this.checkEmail}
                    underlineColorAndroid ='rgba(255,255,255,0)'
                />
                <Text style={styles.alertText}>{this.state.errors.email}</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    onKeyPress={this.checkPassword}
                    
                />
                <Text style={styles.alertText}>{this.state.errors.password}</Text>
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onSubmit}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View style={{alignItems : 'center'}}>
                    <Text style={{color:'#778899',marginVertical : 15}}>
                        Don't have an account yet?
                    </Text>
                    <TouchableOpacity
                        onPress={this.register}
                    >
                        <Text style={{color:'#FFFFFF'}}>
                            Register
                        </Text>
                        <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default LoginForm;

const styles = StyleSheet.create({
    container: {
        marginTop : 23,
        backgroundColor : '#455a64' ,
        justifyContent : 'center', 
        alignItems : 'center',
        flex : 1,
    },
    title: {
        fontSize: 28,
        //fontWeight: 'bold',
        color : '#F5FFFA',
    },
    textInput: {
        height : 42 ,
        width : 300,
        backgroundColor : '#F8F8FF',
        borderRadius : 20,
        marginVertical : 3,
        paddingLeft : 15,
        fontSize : 17,
        
    },
    buttonText: {
        fontSize : 22,
        fontWeight : '500',
        color : 'white',
        padding : 10,
    },
    button: {
        marginVertical : 25,
        backgroundColor : '#4682B4',
        borderRadius : 30,
        width : 220,
        height : 50,
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth : 2,
        borderColor : '#FAFAD2'
    },
    alertText: {
        color : '#660000',
        fontSize : 14
    }
  });