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
import { Actions } from 'react-native-router-flux';
import Firebase from 'firebase';

class BookingForm extends Component {
    constructor(props) {
        super(props);
        userId = Firebase.auth().currentUser.uid;
        this.booking_locker1 = Firebase.database().ref().child('UserInfo/' + userId + '/booking_locker1');
        this.booking_locker2 = Firebase.database().ref().child('UserInfo/' + userId + '/booking_locker2');
        this.state = {
            booking_lockerNo1 : null,
            booking_lockerNo2 : null,
            disableNo1 : null,
            titleButton : null,
        }
        //this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
    };
    componentWillMount(){
        this.booking_locker1.on('value',snap => {
            this.setState({
                booking_lockerNo1 : snap.val()
            });
        })
        this.booking_locker2.on('value',snap => {
            this.setState({
                booking_lockerNo2 : snap.val()
            });
        })
    }
    titleButton1(){
        if(this.state.booking_lockerNo1 != 'No_Booking'){
            return 'Cancel a locker No.1'
        }
        else {
            return 'Rent a locker No.1'
        }
    }

    titleButton2(){
        if(this.state.booking_lockerNo2 != 'No_Booking'){
            return 'Cancel a locker No.2'
        }
        else {
            return 'Rent a locker No.2'
        }
    }

    checkBooking(){
        if(this.state.booking_lockerNo1 != 'No_Booking'){
            return(
                Alert.alert(
                    'Are you sure ?',
                    'Do you want to cancel your locker No.1 ?',
                    [
                        {text: 'OK', onPress: () => this.cancelLocker1()},
                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    ],
                    { cancelable: false }
                )
            );
        }
        else {
            return Actions.qrscan();
        }
    }
    checkBooking2(){
        if(this.state.booking_lockerNo2 != 'No_Booking'){
            return(
                Alert.alert(
                    'Are you sure ?',
                    'Do you want to cancel your locker No.2 ?',
                    [
                        {text: 'OK', onPress: () => this.cancelLocker2()},
                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    ],
                    { cancelable: false }
                )
            );
        }
        else {
            return Actions.qrscan2();
        }
    }

    cancelLocker1(){
        if(this.state.booking_lockerNo1 === 'LOCKER_NO1'){
            Firebase.database().ref('UserInfo/'+userId).update({
                booking_locker1 : 'No_Booking',
            });
            Firebase.database().ref('QRLocker').update({
                Locker_No1 : 'ROCKITLOCKERNO1',
            });
            this.colorButton = '#4682B4'
        }
        else if(this.state.booking_lockerNo1 === 'LOCKER_NO2'){
            Firebase.database().ref('UserInfo/'+userId).update({
                booking_locker1 : 'No_Booking',
            });
            Firebase.database().ref('QRLocker').update({
                Locker_No2 : 'ROCKITLOCKERNO2',
            });
            this.colorButton = '#4682B4'
        }
        else if(this.state.booking_lockerNo1 === 'LOCKER_NO3'){
            Firebase.database().ref('UserInfo/'+userId).update({
                booking_locker1 : 'No_Booking',
            });
            Firebase.database().ref('QRLocker').update({
                Locker_No3 : 'ROCKITLOCKERNO3',
            });
        }
        else if(this.state.booking_lockerNo1 === 'LOCKER_NO4'){
            Firebase.database().ref('UserInfo/'+userId).update({
                booking_locker1 : 'No_Booking',
            });
            Firebase.database().ref('QRLocker').update({
                Locker_No4 : 'ROCKITLOCKERNO4',
            });
        }
        else if(this.state.booking_lockerNo1 === 'LOCKER_NO5'){
            Firebase.database().ref('UserInfo/'+userId).update({
                booking_locker1 : 'No_Booking',
            });
            Firebase.database().ref('QRLocker').update({
                Locker_No5 : 'ROCKITLOCKERNO5',
            });
        }
    }

    cancelLocker2(){
        if(this.state.booking_lockerNo2 === 'LOCKER_NO1'){
            Firebase.database().ref('UserInfo/'+userId).update({
                booking_locker2 : 'No_Booking',
            });
            Firebase.database().ref('QRLocker').update({
                Locker_No1 : 'ROCKITLOCKERNO1',
            });
        }
        else if(this.state.booking_lockerNo2 === 'LOCKER_NO2'){
            Firebase.database().ref('UserInfo/'+userId).update({
                booking_locker2 : 'No_Booking',
            });
            Firebase.database().ref('QRLocker').update({
                Locker_No2 : 'ROCKITLOCKERNO2',
            });
        }
        else if(this.state.booking_lockerNo2 === 'LOCKER_NO3'){
            Firebase.database().ref('UserInfo/'+userId).update({
                booking_locker2 : 'No_Booking',
            });
            Firebase.database().ref('QRLocker').update({
                Locker_No3 : 'ROCKITLOCKERNO3',
            });
        }
        else if(this.state.booking_lockerNo2 === 'LOCKER_NO4'){
            Firebase.database().ref('UserInfo/'+userId).update({
                booking_locker2 : 'No_Booking',
            });
            Firebase.database().ref('QRLocker').update({
                Locker_No4 : 'ROCKITLOCKERNO4',
            });
        }
        else if(this.state.booking_lockerNo2 === 'LOCKER_NO5'){
            Firebase.database().ref('UserInfo/'+userId).update({
                booking_locker2 : 'No_Booking',
            });
            Firebase.database().ref('QRLocker').update({
                Locker_No5 : 'ROCKITLOCKERNO5',
            });
        }
    }

    render() {
        return(
            <View style={styles.container}>
                {/* <StatusBar hidden /> */}
                <View style={{alignItems : 'center',justifyContent: 'center'}}> 
                    <Text style={styles.title}>
                        Rent to Locker
                    </Text>
        {/*Booking Locker1*/}
                    <TouchableOpacity
                        //style={styles.button}
                        style = {{
                            marginVertical : 25,
                            backgroundColor : this.state.booking_lockerNo1 == 'No_Booking' ? '#4682B4' : 'red',
                            borderRadius : 30,
                            width : 250,
                            height : 60,
                            alignItems : 'center',
                            justifyContent : 'center',
                            borderWidth : 2,
                            borderColor : '#FAFAD2'
                        }}
                        onPress={() => this.checkBooking()}
                    >
                        <Text style={styles.buttonText}>
                            <Text style={{color : 'white'}}>
                                {
                                    this.titleButton1()
                                }
                            </Text>
                        </Text>  
                    </TouchableOpacity>
        {/*Booking Locker2*/}     
                    <TouchableOpacity
                        // style = {styles.button}
                        style = {{
                            marginVertical : 25,
                            backgroundColor : this.state.booking_lockerNo2 == 'No_Booking' ? '#4682B4' : 'red',
                            borderRadius : 30,
                            width : 250,
                            height : 60,
                            alignItems : 'center',
                            justifyContent : 'center',
                            borderWidth : 2,
                            borderColor : '#FAFAD2'
                        }}
                        onPress={()=> this.checkBooking2()}
                    >
                        <Text style={styles.buttonText}>
                            <Text style={{color : 'white'}}>
                                {
                                    this.titleButton2()
                                }
                            </Text>
                        </Text>  
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default BookingForm;

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
        marginVertical : 20,
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
        width : 250,
        height : 60,
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