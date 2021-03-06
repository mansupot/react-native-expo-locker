import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Alert,
    StatusBar,
    } from 'react-native';
import Firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Divider } from 'react-native-elements';
import { Constants } from 'expo';


class ProfileForm extends Component {
    constructor(props) {
        super(props);
        userId = Firebase.auth().currentUser.uid;
        this.name = Firebase.database().ref().child('UserInfo/'+userId+'/name');
        this.email = Firebase.database().ref().child('UserInfo/'+userId+'/email');
        this.tel = Firebase.database().ref().child('UserInfo/'+userId+'/tel');
        
        this.state = {
            name : '',
            email : '',
            tel : '',
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    };

    componentDidMount(){
        this.name.on('value',snap =>{
            this.setState({
                name : snap.val()
                
            });
        });
        this.email.on('value',snap =>{
            this.setState({
                email : snap.val()
                
            });
        });
        this.tel.on('value',snap =>{
            this.setState({
                tel : snap.val()
                
            });
        });
    }
    logOutAuth(){
        Firebase.auth().signOut()
        .then(() => {
            Alert.alert(
                'Are you sure ?',
                'You want to log out on this time ?',
                [
                    {text: 'OK', onPress: () => Actions.reset("login" )},
                    {text: 'Cancel', onPress: () => 
                    alert('ROCK-IT LOCKER \n Mr.Supot Patsaithong \n Mr.Phuwadit Noppachinnawong \n Deverloper from KMUTNB \n Current Ver.1.1(beta)')
                    , style: 'cancel'},
                ],
                { cancelable: false }
              )
        })
        .catch(() => {
            alert("Can't log out on this time.");
        });
    };

    render() {
        return(
            <View style={styles.container}>
                {/* <StatusBar hidden /> */}
                <View style={{alignItems : 'center',justifyContent: 'center'}}> 
                    <Text style={styles.title}>
                        My Profile
                    </Text>
                    <Image
                        style= {{width: 100, height : 100 }}
                        source={require('../../images/profile.png')}
                    />
                    <View>
                        <Text style={{marginVertical : 12, color:'#455a64',fontSize : 18}}>
                            Name : {this.state.name}
                        </Text>
                        <Divider style={{ backgroundColor: '#778899' }} />
                        <Text style={{marginVertical : 12, color:'#455a64',fontSize : 18}}>
                            Email : {this.state.email}
                        </Text>
                        <Divider style={{ backgroundColor: '#778899' }} />
                        <Text style={{marginVertical : 12, color:'#455a64',fontSize : 18}}>
                            Tel. : {this.state.tel}
                        </Text>
                        
                    </View>
                    <TouchableOpacity
                        style = {styles.button}
                        onPress={()=> this.logOutAuth()}
                    >
                        <Text style={styles.buttonText}>Log out</Text>  
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default ProfileForm;

const styles = StyleSheet.create({
    container: {
        marginTop : 23,
        backgroundColor : '#FFFAF0' ,
        justifyContent : 'center', 
        alignItems : 'center',
        flex : 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
    },
    title: {
        fontSize: 28,
        //fontWeight: 'bold',
        color : '#455a64',
        marginVertical : 20
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
        color : 'red',
        padding : 10,
    },
    button: {
        marginVertical : 25,
        backgroundColor : '#FFFACD',
        borderRadius : 30,
        width : 220,
        height : 50,
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth : 2,
        borderColor : '#778899'
    },
    alertText: {
        color : '#660000',
        fontSize : 14
    }
  });