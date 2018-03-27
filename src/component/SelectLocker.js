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
        this.lockerStatusNo1 = Firebase.database().ref().child('LockerStatus');
        this.lockerStatusNo2 = Firebase.database().ref().child('LockerStatus2');
        this.lockerStatusNo3 = Firebase.database().ref().child('LockerStatus3');
        userId = Firebase.auth().currentUser.uid;
        this.booking_locker1 = Firebase.database().ref().child('UserInfo/'+userId+'/booking_locker1');
        this.booking_locker2 = Firebase.database().ref().child('UserInfo/'+userId+'/booking_locker2');
        this.state = {
            booking_lockerNo1 : null,
            booking_lockerNo2 : null,
            visible: true,
            stateNo1 : 0,
            stateNo2 : 0,
            stateNo3 : 0,
        }
        this.updateStateToFirebase = this.updateStateToFirebase.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.render = this.render.bind(this);
    };
    
    componentWillMount(){
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
    }

    componentDidMount() {
        if(this.state.booking_lockerNo1 == 'No_Booking'){
            this.setState = {stateNo1 : 2}
            alert(this.state.stateNo1);
        }
        
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
        /*this.lockerStatusNo3.on('value',snap => {
            this.setState({ 
                stateNo3 : snap.val()
            });
        });*/
        //alert(this.state.booking_lockerNo1);

        
    }

    /*updateStateToFirebase()
    {
        if(this.stateNo1 === 3){
            Actions.qrscan();
        }
        else {
            Firebase.database().ref().update({
                LockerStatus: (this.state.stateNo1 == 0 ?  1 : 0 )
            });
        }
    }*/

    gotoQRPage(){
        Actions.qrscan();
    }

    gotoQRPage2(){
        Actions.qrscan2();
    }
    
    updateState(){
        
    }
    render() {
        if(this.state.booking_lockerNo1 === null){
            return(
                <View style={styles.container}>
                    
                    <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
                </View>
            );
        }
        else {
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
                        onPress={() => this.updateState()}
                        //onPress={() => this.updateStateToFirebase()}
                        //onPress={() => this.gotoQRPage()}
                        //disabled  = 'true'
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
                        onPress={()=> this.gotoQRPage2()}
                    >
                        <Text style={styles.buttonText}>+</Text>  
                    </TouchableOpacity>
        {/* button Test*/}    
                    <Text style={styles.locker}>
                        Refesh
                    </Text>
                    <TouchableOpacity
                        style = {styles.button}
                        onPress={()=> alert(this.state.booking_lockerNo1)}
                    >
                        <Text style={styles.buttonText}>+</Text>  
                    </TouchableOpacity>
                </View>
                
            );
        }
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
