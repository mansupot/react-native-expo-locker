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

class SelectLocker extends Component {
    constructor(props) {
        super(props);
        this.lockerStatusNo1 = Firebase.database().ref().child('LockerStatus');
        userId = Firebase.auth().currentUser.uid;
        this.booking_locker1 = Firebase.database().ref().child('UserInfo/'+userId+'/booking_locker1');
        this.booking_locker2 = Firebase.database().ref().child('UserInfo/'+userId+'/booking_locker2');
        this.state = {
            booking_lockerNo1 : null,
            booking_lockerNo2 : null,
            stateNo1 : 0,
        }
        this.updateStateToFirebase = this.updateStateToFirebase.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    };
    
    componentDidMount(){
        this.booking_locker1.on('value',snap => {
            this.setState({ 
                booking_lockerNo1 : snap.val()
            });
        });
        this.booking_locker2.on('value',snap => {
            this.setState({ 
                booking_lockerNo2 : snap.val()
            });
        });
        this.lockerStatusNo1.on('value',snap => {
            this.setState({ 
                stateNo1 : snap.val()
            });
        });

        alert(this.state.booking_lockerNo1);
    }

    updateStateToFirebase()
    {
        Firebase.database().ref().update({
            LockerStatus: (this.state.stateNo1 == 0 ?  1 : 0 )
        });
    }

    gotoQRPage(){
        Actions.qrscan();
    }
    
    render() {
        console.log(this.state);
        return(
            <View style={styles.container}>
                {/* <StatusBar hidden /> */}
                <Text style={styles.title}>
                    My Locker
                </Text>
    {/* Locker1*/}
                <Text style={styles.locker}>
                    LOCKER No. 1
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.updateStateToFirebase()}
                    //disabled  = 'true'
                >
                     <Text style={styles.buttonText}>{this.state.stateNo1 == 1 ? 'Open' : 'Close'}</Text>  
                </TouchableOpacity>
    {/* Locker2*/}    
                <Text style={styles.locker}>
                    LOCKER No. 2
                </Text>
                <TouchableOpacity
                    style = {styles.button}
                    onPress={()=> this.gotoQRPage()}
                >
                     <Text style={styles.buttonText}>+</Text>  
                </TouchableOpacity>
            </View>
            
        );
    }



} export default SelectLocker

const styles = StyleSheet.create({
    container: {
        marginTop : 20,
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
