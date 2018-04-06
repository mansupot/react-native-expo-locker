import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    StatusBar,
    Alert,
    } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { Actions } from 'react-native-router-flux';
import Firebase from 'firebase';

export default class BarcodeScannerExample extends React.Component {
    constructor(props) {
        super(props);
        userId = Firebase.auth().currentUser.uid;
        this.QRlocker1 = Firebase.database().ref().child('QRLocker/Locker_No1');
        this.QRlocker2 = Firebase.database().ref().child('QRLocker/Locker_No2');
        this.QRlocker3 = Firebase.database().ref().child('QRLocker/Locker_No3');
        this.QRlocker4 = Firebase.database().ref().child('QRLocker/Locker_No4');
        this.QRlocker5 = Firebase.database().ref().child('QRLocker/Locker_No5');
        this.state = {
            QRlockerNo1 : null,
            QRlockerNo2 : null,
            QRlockerNo3 : null,
            QRlockerNo4 : null,
            QRlockerNo5 : null,
            hasCameraPermission: null,
            statusbar : 'Please Scan QR code',
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.after_scanned = this.after_scanned.bind(this);
        this.booking_locker = this.booking_locker.bind(this);
    };

    componentDidMount(){
        this.QRlocker1.on('value',snap =>{
            this.setState({
                QRlockerNo1 : snap.val()
            });
        });
        this.QRlocker2.on('value',snap =>{
            this.setState({
                QRlockerNo2 : snap.val()
            });
        });
        this.QRlocker3.on('value',snap =>{
            this.setState({
                QRlockerNo3 : snap.val()
            });
        });
        this.QRlocker4.on('value',snap =>{
            this.setState({
                QRlockerNo4 : snap.val()
            });
        });
        this.QRlocker5.on('value',snap =>{
            this.setState({
                QRlockerNo5 : snap.val()
            });
        });
    }
    
    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission: status === 'granted'});
    }
    after_scanned() {
        if(this.state.statusbar != 'Please Scan QR code'){
            if(this.state.statusbar == this.state.QRlockerNo1) {
                Alert.alert(
                    'Are you sure ?',
                    'You want to booking "' + this.state.QRlockerNo1 + ' " ?',
                    [
                        {text: 'OK', onPress: ()=> this.booking_locker()},
                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    ],
                    { cancelable: false }
                )
            }
            else if(this.state.statusbar == this.state.QRlockerNo2) {
                Alert.alert(
                    'Are you sure ?',
                    'You want to booking "' + this.state.QRlockerNo2 + ' " ?',
                    [
                        {text: 'OK', onPress: () => this.booking_locker()},
                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    ],
                    { cancelable: false }
                )
            }
            else if(this.state.statusbar == this.state.QRlockerNo3) {
                Alert.alert(
                    'Are you sure ?',
                    'You want to booking "' + this.state.QRlockerNo3 + ' " ?',
                    [
                        {text: 'OK', onPress: () => this.booking_locker()},
                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    ],
                    { cancelable: false }
                )
            }
            else if(this.state.statusbar == this.state.QRlockerNo4) {
                Alert.alert(
                    'Are you sure ?',
                    'You want to booking "' + this.state.QRlockerNo4 + ' " ?',
                    [
                        {text: 'OK', onPress: () => this.booking_locker()},
                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    ],
                    { cancelable: false }
                )
            }
            else if(this.state.statusbar == this.state.QRlockerNo5) {
                Alert.alert(
                    'Are you sure ?',
                    'You want to booking "' + this.state.QRlockerNo5 + ' " ?',
                    [
                        {text: 'OK', onPress: () => this.booking_locker()},
                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    ],
                    { cancelable: false }
                )
            }
            else {
                alert('QR code does not match database in system or have used this service.');
            }
        }
        else {
            alert('You have not scanned the QR Code.');
        }
        
    }

    booking_locker() {
        if(this.state.statusbar == this.state.QRlockerNo1) {
            Firebase.database().ref('UserInfo/'+userId).update({
                booking_locker1 : 'LOCKER_NO1',
            });
            Firebase.database().ref('QRLocker').update({
                Locker_No1 : 'Rented',
            });
        }
        else if(this.state.statusbar == this.state.QRlockerNo2) {
            Firebase.database().ref('UserInfo/'+userId).update({
                booking_locker1 : 'LOCKER_NO2',
            });
            Firebase.database().ref('QRLocker').update({
                Locker_No2 : 'Rented',
            });
        }
        else if(this.state.statusbar == this.state.QRlockerNo3) {
            Firebase.database().ref('UserInfo/'+userId).update({
                booking_locker1 : 'LOCKER_NO3',
            });
            Firebase.database().ref('QRLocker').update({
                Locker_No3 : 'Rented',
            });
        }
        else if(this.state.statusbar == this.state.QRlockerNo4) {
            Firebase.database().ref('UserInfo/'+userId).update({
                booking_locker1 : 'LOCKER_NO4',
            });
            Firebase.database().ref('QRLocker').update({
                Locker_No4 : 'Rented',
            });
        }
        else if(this.state.statusbar == this.state.QRlockerNo5) {
            Firebase.database().ref('UserInfo/'+userId).update({
                booking_locker1 : 'LOCKER_NO5',
            });
            Firebase.database().ref('QRLocker').update({
                Locker_No5 : 'Rented',
            });
        }
        Actions.reset("tabbar");
    }
    
    render() {
        const { hasCameraPermission } = this.state;
    
        if (hasCameraPermission === null) {
            return <Text style={styles.container}>Requesting for camera permission</Text>;
        } else if (hasCameraPermission === false) {
            return <Text style={styles.container}>No access to camera</Text>;
        } else {
            return (
            <View style={styles.container}>
                {/* <StatusBar hidden/> */}
                <Text style={styles.title}>Scan QR Code</Text>
                <BarCodeScanner
                    onBarCodeRead={this._handleBarCodeRead}
                    type={'back'}
                    style={{width : '90%' , height : '60%'}}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.after_scanned()}
                >
                    <Text style={styles.buttonText}>{this.state.statusbar}</Text>   
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => Actions.pop()}
                >
                    <Text style={styles.title}>Cancel</Text>
                </TouchableOpacity>
            </View>
            );
        }
    }
    
    _handleBarCodeRead = ({ type, data }) => {
        this.setState({ statusbar: data })
        
        
    }
} 

const styles = StyleSheet.create({
    container: {
        marginTop : 23,
        backgroundColor : '#708090' ,
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
        fontSize : 18,
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