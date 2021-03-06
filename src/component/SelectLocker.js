import React, { Component } from 'react';
import { 
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import Firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';

class SelectLocker extends Component {
    constructor(props) {
        super(props);
        
        this.lockerStatusNo1 = Firebase.database().ref().child('LockerStatus/S1');
        this.lockerStatusNo2 = Firebase.database().ref().child('LockerStatus/S2');
        this.lockerStatusNo3 = Firebase.database().ref().child('LockerStatus/M1');
        this.lockerStatusNo4 = Firebase.database().ref().child('LockerStatus/L1');
        this.lockerStatusNo5 = Firebase.database().ref().child('LockerStatus/L2');

        userId = Firebase.auth().currentUser.uid;
        this.booking_locker1 = Firebase.database().ref().child('UserInfo/' + userId + '/booking_locker1');
        this.booking_locker2 = Firebase.database().ref().child('UserInfo/' + userId + '/booking_locker2');
        this.state = {
            booking_lockerNo1 : null,
            booking_lockerNo2 : null,
            visible: true,
            stateNo1 : null,
            stateNo2 : null,
            stateNo3 : null,
            stateNo4 : null,
            stateNo5 : null,
            titleButton1 : null,
            titleButton2 : null,
            titleButton3 : null,
            titleButton4 : null,
            titleButton5 : null,
        }
        this.titleButton1 = this.titleButton1.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.render = this.render.bind(this);
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

    componentDidMount(){
        this.lockerStatusNo1.on('value',snap => {
            this.setState({
                stateNo1 : snap.val(),
                titleButton1 : snap.val(),
            });
        });
        this.lockerStatusNo2.on('value',snap => {
            this.setState({
                stateNo2 : snap.val(),
                titleButton2 : snap.val(),
            });
        });
        this.lockerStatusNo3.on('value',snap => {
            this.setState({
                stateNo3 : snap.val(),
                titleButton3 : snap.val(),
            });
        });
        this.lockerStatusNo4.on('value',snap => {
            this.setState({
                stateNo4 : snap.val(),
                titleButton4 : snap.val(),
            });
        });
        this.lockerStatusNo5.on('value',snap => {
            this.setState({
                stateNo5 : snap.val(),
                titleButton5 : snap.val(),
            });
        });
    }

    openAndClose_No1(){ //ฟังชั่นการเปิด-ปิดของตู้ล็อกเกอร์
        if(this.state.booking_lockerNo1 === 'LOCKER_NO1'){
            Firebase.database().ref('LockerStatus/').update({
                S1 : (this.state.stateNo1 == 0 ?  1 : 0 )
            });
            this.setState({
                titleButton1 : this.state.titleButton1 == 0 ? 1 : 0,
            });
        }
        else if(this.state.booking_lockerNo1 === 'LOCKER_NO2'){
            Firebase.database().ref('LockerStatus/').update({
                S2 : (this.state.stateNo2 == 0 ?  1 : 0 )
            });
            this.setState({
                titleButton2 : this.state.titleButton2 == 0 ? 1 : 0,
            });
        }
        else if(this.state.booking_lockerNo1 === 'LOCKER_NO3'){
            Firebase.database().ref('LockerStatus/').update({
                M1 : (this.state.stateNo3 == 0 ?  1 : 0 )
            });
            this.setState({
                titleButton3 : this.state.titleButton3 == 0 ? 1 : 0,
            });
            // alert('Locker No.3 Pressed');
        }
        else if(this.state.booking_lockerNo1 === 'LOCKER_NO4'){
            Firebase.database().ref('LockerStatus/').update({
                L1 : (this.state.stateNo4 == 0 ?  1 : 0 )
            });
            this.setState({
                titleButton4 : this.state.titleButton4 == 0 ? 1 : 0,
            });
            // alert('Locker No.4 Pressed');
        }
        else if(this.state.booking_lockerNo1 === 'LOCKER_NO5'){
            Firebase.database().ref('LockerStatus/').update({
                L2 : (this.state.stateNo5 == 0 ?  1 : 0 )
            });
            this.setState({
                titleButton5 : this.state.titleButton5 == 0 ? 1 : 0,
            });
            // alert('Locker No.5 Pressed');
        }
        else {
            alert('Please rent your locker. \n --> Go to Rent tab.');
        }
    }

    openAndClose_No2(){
        if(this.state.booking_lockerNo2 === 'LOCKER_NO1'){
            Firebase.database().ref('LockerStatus/').update({
                S1 : (this.state.stateNo1 == 0 ?  1 : 0 )
            });
            this.setState({
                titleButton1 : this.state.titleButton1 == 0 ? 1 : 0,
            });
            // alert('Locker No.1 Pressed');
        }
        else if(this.state.booking_lockerNo2 === 'LOCKER_NO2'){
            Firebase.database().ref('LockerStatus/').update({
                S2 : (this.state.stateNo2 == 0 ?  1 : 0 )
            });
            this.setState({
                titleButton2 : this.state.titleButton2 == 0 ? 1 : 0,
            });
            // alert('Locker No.2 Pressed');
        }
        else if(this.state.booking_lockerNo2 === 'LOCKER_NO3'){
            Firebase.database().ref('LockerStatus/').update({
                M1 : (this.state.stateNo3 == 0 ?  1 : 0 )
            });
            this.setState({
                titleButton3 : this.state.titleButton3 == 0 ? 1 : 0,
            });
            // alert('Locker No.3 Pressed');
        }
        else if(this.state.booking_lockerNo2 === 'LOCKER_NO4'){
            Firebase.database().ref('LockerStatus/').update({
                L1 : (this.state.stateNo4 == 0 ?  1 : 0 )
            });
            this.setState({
                titleButton4 : this.state.titleButton4 == 0 ? 1 : 0,
            });
            // alert('Locker No.4 Pressed');
        }
        else if(this.state.booking_lockerNo2 === 'LOCKER_NO5'){
            Firebase.database().ref('LockerStatus/').update({
                L2 : (this.state.stateNo5 == 0 ?  1 : 0 )
            });
            this.setState({
                titleButton5 : this.state.titleButton5 == 0 ? 1 : 0,  
            });
            // alert('Locker No.5 Pressed');
        }
        else {
            alert('Please rent your locker. \n --> Go to Rent tab.');
        }
    }

    titleButton1(){
        if(this.state.booking_lockerNo1 === 'LOCKER_NO1'){
            return this.state.titleButton1 == 1 ? 'Open' : 'Close'
        }
        else if(this.state.booking_lockerNo1 === 'LOCKER_NO2'){
            return this.state.titleButton2 == 1 ? 'Open' : 'Close'
        }
        else if(this.state.booking_lockerNo1 === 'LOCKER_NO3'){
            return this.state.titleButton3 == 1 ? 'Open' : 'Close'
        }
        else if(this.state.booking_lockerNo1 === 'LOCKER_NO4'){
            return this.state.titleButton4 == 1 ? 'Open' : 'Close'
        }
        else if(this.state.booking_lockerNo1 === 'LOCKER_NO5'){
            return this.state.titleButton5 == 1 ? 'Open' : 'Close'
        }
        else {
            return 'Empty'
        }
    }

    titleButton2(){
        if(this.state.booking_lockerNo2 === 'LOCKER_NO1'){
            return this.state.titleButton1 == 1 ? 'Open' : 'Close'
        }
        else if(this.state.booking_lockerNo2 === 'LOCKER_NO2'){
            return this.state.titleButton2 == 1 ? 'Open' : 'Close'
        }
        else if(this.state.booking_lockerNo2 === 'LOCKER_NO3'){
            return this.state.titleButton3 == 1 ? 'Open' : 'Close'
        }
        else if(this.state.booking_lockerNo2 === 'LOCKER_NO4'){
            return this.state.titleButton4 == 1 ? 'Open' : 'Close'
        }
        else if(this.state.booking_lockerNo2 === 'LOCKER_NO5'){
            return this.state.titleButton5 == 1 ? 'Open' : 'Close'
        }
        else {
            return 'Empty'
        }
    }

    namelocker1(){
        if(this.state.booking_lockerNo1 === 'LOCKER_NO1'){
            this.Bcolor1 = 'yellow';
            return 'LOCKER.S1 (Size S)' ;
        }
        else if(this.state.booking_lockerNo1 === 'LOCKER_NO2'){
            this.Bcolor1 = 'yellow';
            return 'LOCKER.S2 (Size S)' ;
        }
        else if(this.state.booking_lockerNo1 === 'LOCKER_NO3'){
            this.Bcolor1 = '#32CD32';
            return 'LOCKER.M3 (Size M)' ;
        }
        else if(this.state.booking_lockerNo1 === 'LOCKER_NO4'){
            this.Bcolor1 = '#A020F0';
            return 'LOCKER.L1 (Size L)' ;
        }
        else if(this.state.booking_lockerNo1 === 'LOCKER_NO5'){
            this.Bcolor1 = '#A020F0';
            return 'LOCKER.L2 (Size L)' ;
        }
        else {
            //this.Bcolor1 = '#778899';
            return 'NO LOCKER'
        }
    }

    namelocker2(){
        if(this.state.booking_lockerNo2 === 'LOCKER_NO1'){
            this.Bcolor2 = 'yellow';
            return 'LOCKER.S1 (Size S)' ;
        }
        else if(this.state.booking_lockerNo2 === 'LOCKER_NO2'){
            this.Bcolor2 = 'yellow';
            return 'LOCKER.S2 (Size S)' ;
        }
        else if(this.state.booking_lockerNo2 === 'LOCKER_NO3'){
            this.Bcolor2 = '#32CD32';
            return 'LOCKER.M3 (Size M)' ;
        }
        else if(this.state.booking_lockerNo2 === 'LOCKER_NO4'){
            this.Bcolor2 = '#A020F0';
            return 'LOCKER.L1 (Size L)' ;
        }
        else if(this.state.booking_lockerNo2 === 'LOCKER_NO5'){
            this.Bcolor2 = '#A020F0';
            return 'LOCKER.L2 (Size L)' ;
        }
        else {
            return 'NO LOCKER'
        }
    }
    

    gotoQRPage(){
        Actions.qrscan();
    }

    gotoQRPage2(){
        Actions.qrscan2();
    }
    
    render() {
        if(this.state.booking_lockerNo1 != null && this.state.booking_lockerNo2 != null){
            return(
                <View style={styles.container}>
                    <Text style={styles.title}>
                        My Locker
                    </Text>
        {/* Locker1*/}
                    <Text style={styles.locker}>
                        No.1 : {'  '}
                        <Text style = {{color : this.state.booking_lockerNo1 == 'No_Booking' ? '#778899' : this.Bcolor1}}>
                            {
                                this.namelocker1()
                            }
                        </Text>
                    </Text>
                    <TouchableOpacity
                        style = {{
                            marginBottom : 25,
                            backgroundColor : this.state.booking_lockerNo1 == 'No_Booking' ? '#B0C4DE' : '#CCFFFF',
                            borderRadius : 64,
                            width : 130,
                            height : 127,
                            alignItems : 'center',
                            justifyContent : 'center',
                            borderWidth : 5,
                            borderColor : this.state.booking_lockerNo1 == 'No_Booking' ? '#778899' : this.Bcolor1,
                        }}
                        onPress={() => this.openAndClose_No1()}
                    >
                        <Text style={styles.buttonText}>
                            {
                                this.titleButton1()
                            }
                        </Text>  
                    </TouchableOpacity>
        {/* Locker2*/}    
        <Text style={styles.locker}>
                        No.2 : {'  '}
                        <Text style = {{color : this.state.booking_lockerNo2 == 'No_Booking' ? '#778899' : this.Bcolor2}}>
                            {
                                this.namelocker2()
                            }
                        </Text>
                    </Text>
                    <TouchableOpacity
                        //style = {styles.button}
                        style = {{
                            marginBottom : 25,
                            backgroundColor : this.state.booking_lockerNo1 == 'No_Booking' ? '#B0C4DE' : '#CCFFFF',
                            borderRadius : 64,
                            width : 130,
                            height : 127,
                            alignItems : 'center',
                            justifyContent : 'center',
                            borderWidth : 5,
                            borderColor : this.state.booking_lockerNo2 == 'No_Booking' ? '#778899' : this.Bcolor2,
                        }}
                        onPress={()=> this.openAndClose_No2()}
                    >
                        <Text style={styles.buttonText}>
                            {
                                this.titleButton2()
                            }
                        </Text>  
                    </TouchableOpacity>
                </View>
            );
        } 
        else{
            return(
                <View style={styles.container}>
                    <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
                </View>
            );
        }
    }



} export default SelectLocker

const styles = StyleSheet.create({
    container: {
        marginTop : 23,
        backgroundColor : '#455a64' ,
        justifyContent : 'center', 
        alignItems : 'center',
        flex : 1,
    },
    buttonText: {
        fontSize : 20,
        fontWeight : '500',
        color : '#5F9EA0',
        padding : 10,
        fontWeight: 'bold',
    },
    button: {
        marginBottom : 25,
        backgroundColor : '#CCFFFF',
        borderRadius : 64,
        width : 130,
        height : 127,
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth : 5,
        borderColor : '#778899',
        
    },
    title: {
        fontSize: 28,
        marginTop : 10,
        marginBottom : 30,
        //fontWeight: 'bold',
        color : '#F5FFFA',
    },
    locker: {
        fontSize: 20,
        marginVertical : 10,
        color : '#CCFFCC'
    }
});
