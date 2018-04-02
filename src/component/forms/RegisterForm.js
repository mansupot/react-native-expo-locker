import React , { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    TextInput,
    StatusBar
} from 'react-native';
import Firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import Validator from 'validator';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.numberUser = Firebase.database().ref().child('NumberUser');
        this.state = {
            emailReg : '',
            passwordReg : '',
            rePasswordReg : '',
            nameReg : '',
            telReg : '',
            errorsReg : {
                emailReg : '',
                passwordReg : '',
                rePasswordReg : '',
            countUser : '',
            },
        };
        this.checkEmailReg = this.checkEmailReg.bind(this);
        this.checkPasswordReg = this.checkPasswordReg.bind(this);
        this.checkRePasswordReg = this.checkRePasswordReg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount(){
        this.numberUser.on('value',snap => {
            this.setState({ 
                countUser : snap.val() + 1
            });
        })
    }
    onSubmit() {
        
        const { emailReg ,rePasswordReg } = this.state;
        //Register Firebase
        if(this.state.emailReg != '' && this.state.passwordReg != '' && this.state.rePasswordReg != '' ){
            Firebase.auth().createUserWithEmailAndPassword(emailReg, rePasswordReg)
            .then(() => { 
                this.setState({ errorsReg: '' }); 

                //Write data Firebase
                userId = Firebase.auth().currentUser.uid;
                Firebase.database().ref('UserInfo/' + userId).set({
                    name : this.state.nameReg,
                    email : this.state.emailReg ,
                    password : this.state.rePasswordReg,
                    tel : this.state.telReg,
                    booking_locker1: 'No_Booking',
                    booking_locker2: 'No_Booking',
                }); 

                //Update count User
                updateToCountUser = {
                    NumberUser : this.state.countUser 
                };
                Firebase.database().ref().update(updateToCountUser);

                alert('You are registered');
                Actions.pop();
                
            })
            .catch(() => {
                this.setState({ errorsReg : 'Authentication failed.' });
                 alert(this.state.errorsReg)
            });
            
        } 
        else {
            alert('Please fill in the information correctly');
        }
        
    }
    
    checkEmailReg() {
        if(!Validator.isEmail(this.state.emailReg)) {
            this.setState({ errorsReg: {...this.state.errorsReg, emailReg: 'Not email format' } });
        }
        else { 
            this.setState({ errorsReg: {...this.state.errorsReg, emailReg: '' } });
        }
    }
    checkPasswordReg() {
        if (this.state.passwordReg.length < 7 ) {
            this.setState({ errorsReg: {...this.state.errorsReg, passwordReg: 'More than 8 charactor' } });
        } 
        else {
            this.setState({ errorsReg: {...this.state.errorsReg, passwordReg: '' } });
        }
    }
    checkRePasswordReg() {
        if (this.state.rePasswordReg != this.state.passwordReg) {
            this.setState({ errorsReg: {...this.state.errorsReg, rePasswordReg: 'Passwords do not match' }});
            console.log(this.state);
        }
        else {
            this.setState({ errorsReg: {...this.state.errorsReg, rePasswordReg: '' }});
            console.log(this.state);
        }
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
                        Register account by Firebase
                    </Text>
                </View>
    {/* Name */}
                <TextInput
                    style={styles.textInput}
                    placeholder='Full name'
                    onChangeText={(nameReg) => this.setState({nameReg})}
                />
                <Text style={styles.alertText}>{}</Text>
    {/* Email */}
                <TextInput
                    style={styles.textInput}
                    placeholder='Email (your.email@example.com)'
                    onChangeText={(emailReg) => this.setState({emailReg: emailReg.toLowerCase()})}
                    value={this.state.emailReg}
                    onBlur = {this.checkEmailReg}
                />
                <Text style={styles.alertText}>{this.state.errorsReg.emailReg}</Text>
    {/* Password */}
                <TextInput
                    style={styles.textInput}
                    placeholder='Password (more 8 charactor)'
                    secureTextEntry
                    onChangeText={(passwordReg) => this.setState({passwordReg})}
                    value={this.state.passwordReg}
                    onKeyPress={this.checkPasswordReg}

                />
                <Text style={styles.alertText}>{this.state.errorsReg.passwordReg}</Text>
    {/* Re-Password */}
                <TextInput
                    style={styles.textInput}
                    placeholder='Re-Password (more 8 charactor)'
                    secureTextEntry
                    onChangeText={(rePasswordReg) => this.setState({rePasswordReg})}
                    value={this.state.rePasswordReg}
                    onBlur = {this.checkRePasswordReg}
                />
                <Text style={styles.alertText}>{this.state.errorsReg.rePasswordReg}</Text>
    {/* Tel. */}
                <TextInput
                    style={styles.textInput}
                    placeholder='Tel.'
                    onChangeText={(telReg) => this.setState({telReg})}
                />
    {/* Button Register */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onSubmit}
                >
                    <Text style={styles.buttonText}>Register Account</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
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
        marginVertical : 20,
        backgroundColor : '#4682B4',
        borderRadius : 30,
        width : 220,
        height : 50,
        alignItems : 'center',
        justifyContent : 'center'
    },
    alertText: {
        color : '#660000',
        fontSize : 14,
    }
  });