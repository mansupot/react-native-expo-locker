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
        this.lockerStatusNo1 = Firebase.database().ref().child('LockerStatus1');
        this.lockerStatusNo2 = Firebase.database().ref().child('LockerStatus2');
        this.lockerStatusNo3 = Firebase.database().ref().child('LockerStatus3');
        this.lockerStatusNo4 = Firebase.database().ref().child('LockerStatus4');
        this.lockerStatusNo5 = Firebase.database().ref().child('LockerStatus5');

        userId = Firebase.auth().currentUser.uid;
        this.booking_locker1 = Firebase.database().ref().child('UserInfo/' + userId + '/booking_locker1');
        this.booking_locker2 = Firebase.database().ref().child('UserInfo/' + userId + '/booking_locker2');
        this.state = {
            booking_lockerNo1 : null,
            booking_lockerNo2 : null,
            loading : true,
            visible: true,
            stateNo1 : null,
            stateNo2 : null,
            stateNo3 : null,
            stateNo4 : null,
            stateNo5 : null,
            disable_no1 : null,
            disable_no2 : null,
            titleButton5 : null,
        }
        //this.updateStateToFirebase = this.updateStateToFirebase.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.render = this.render.bind(this);
    };

    componentWillMount(){
        this.booking_locker1.on('value',snap => {
            this.setState({
                booking_lockerNo1 : snap.val()
            });
            if(this.state.booking_lockerNo1 === 'No_Booking'){
                this.setState({
                    disable_no1 : true
                });
            }
        })
        this.booking_locker2.on('value',snap => {
            this.setState({
                booking_lockerNo2 : snap.val()
            });
            if(this.state.booking_lockerNo2 === 'No_Booking'){
                this.setState({
                    disable_no2 : true
                });
            }
        })
    }

    componentDidMount(){
        this.lockerStatusNo1.on('value',snap => {
            this.setState({
                stateNo1 : snap.val()
            });
        });
        this.lockerStatusNo2.on('value',snap => {
            this.setState({
                stateNo2 : snap.val()
            });
        });
        this.lockerStatusNo3.on('value',snap => {
            this.setState({
                stateNo3 : snap.val()
            });
        });
        this.lockerStatusNo4.on('value',snap => {
            this.setState({
                stateNo4 : snap.val()
            });
        });
        this.lockerStatusNo5.on('value',snap => {
            this.setState({
                stateNo5 : snap.val()
            });
        });
    }

    openAndClose_No1(){
        if(this.state.booking_lockerNo1 === 'LOCKER_NO1'){
            Firebase.database().ref().update({
                LockerStatus1: (this.state.stateNo1 == 0 ?  1 : 0 )
            });
            alert('Locker No.1 Pressed');
        }
        else if(this.state.booking_lockerNo1 === 'LOCKER_NO2'){
            Firebase.database().ref().update({
                LockerStatus2: (this.state.stateNo2 == 0 ?  1 : 0 )
            });
            alert('Locker No.2 Pressed');
        }
        else if(this.state.booking_lockerNo1 === 'LOCKER_NO3'){
            Firebase.database().ref().update({
                LockerStatus3: (this.state.stateNo3 == 0 ?  1 : 0 )
            });
            alert('Locker No.3 Pressed');
        }
        else if(this.state.booking_lockerNo1 === 'LOCKER_NO4'){
            Firebase.database().ref().update({
                LockerStatus4: (this.state.stateNo4 == 0 ?  1 : 0 )
            });
            alert('Locker No.4 Pressed');
        }
        else if(this.state.booking_lockerNo1 === 'LOCKER_NO5'){
            Firebase.database().ref().update({
                LockerStatus5: (this.state.stateNo5 == 0 ?  1 : 0 )
            });
            alert('Locker No.5 Pressed');
        }
    }

    openAndClose_No2(){
        if(this.state.booking_lockerNo2 === 'LOCKER_NO1'){
            Firebase.database().ref().update({
                LockerStatus1: (this.state.stateNo1 == 0 ?  1 : 0 )
            });
            alert('Locker No.1 Pressed');
        }
        else if(this.state.booking_lockerNo2 === 'LOCKER_NO2'){
            Firebase.database().ref().update({
                LockerStatus2: (this.state.stateNo2 == 0 ?  1 : 0 )
            });
            alert('Locker No.2 Pressed');
        }
        else if(this.state.booking_lockerNo2 === 'LOCKER_NO3'){
            Firebase.database().ref().update({
                LockerStatus3: (this.state.stateNo3 == 0 ?  1 : 0 )
            });
            alert('Locker No.3 Pressed');
        }
        else if(this.state.booking_lockerNo2 === 'LOCKER_NO4'){
            Firebase.database().ref().update({
                LockerStatus4: (this.state.stateNo4 == 0 ?  1 : 0 )
            });
            this.setState({
                titleButton : this.state.titleButton == 0 ? 1 : 0
            });
            alert('Locker No.4 Pressed');
        }
        else if(this.state.booking_lockerNo2 === 'LOCKER_NO5'){
            Firebase.database().ref().update({
                LockerStatus5: (this.state.stateNo5 == 0 ?  1 : 0 )
            });
            this.setState({
                titleButton : this.state.titleButton == 0 ? 1 : 0
            });
            alert('Locker No.5 Pressed');
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
                        LOCKER No. 1
                    </Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.openAndClose_No1()}
                        disabled = {this.state.disable_no1}
                    >
                        <Text style={styles.buttonText}>
                            {this.state.stateNo1 == 1 ? 'Open' : 'Close'}
                        </Text>  
                    </TouchableOpacity>
        {/* Locker2*/}    
                    <Text style={styles.locker}>
                        LOCKER No. 2
                    </Text>
                    <TouchableOpacity
                        style = {styles.button}
                        onPress={()=> this.openAndClose_No2()}
                        disabled = {this.state.disable_no2}
                    >
                        <Text style={styles.buttonText}>
                            {this.state.titleButton == 1 ? 'Open' : 'Close'}
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
        color : 'white',
        padding : 10,
    },
    button: {
        marginBottom : 25,
        backgroundColor : '#4682B4',
        borderRadius : 30,
        width : 220,
        height : 60,
        alignItems : 'center',
        justifyContent : 'center'
    },
    title: {
        fontSize: 28,
        marginBottom : 50,
        //fontWeight: 'bold',
        color : '#F5FFFA',
    },
    locker: {
        fontSize: 20,
        marginVertical : 10,
        color : '#CCFFCC'
    }
});
