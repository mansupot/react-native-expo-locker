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
import { 
    Divider,
}from 'react-native-elements';


class StatusForm extends Component {
    constructor(props) {
        super(props);
        this.locker1 = Firebase.database().ref().child('QRLocker/Locker_No1');
        this.locker2 = Firebase.database().ref().child('QRLocker/Locker_No2');
        this.locker3 = Firebase.database().ref().child('QRLocker/Locker_No3');
        this.locker4 = Firebase.database().ref().child('QRLocker/Locker_No4');
        this.locker5 = Firebase.database().ref().child('QRLocker/Locker_No5');
        this.state = {
            S1 : null ,
            S2 : null,
            M1 : null,
            L1 : null,
            L2 : null,
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    };
    componentDidMount(){
        this.locker1.on('value',snap =>{
            this.setState({
                S1 : snap.val()
                
            });
        });
        this.locker2.on('value',snap =>{
            this.setState({
                S2 : snap.val()
                
            });
        });
        this.locker3.on('value',snap =>{
            this.setState({
                M1 : snap.val()
                
            });
        });
        this.locker4.on('value',snap =>{
            this.setState({
                L1 : snap.val()
                
            });
        });
        this.locker5.on('value',snap =>{
            this.setState({
                L2 : snap.val()
                
            });
        });
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={{alignItems : 'center',justifyContent: 'center' }}> 
                    <Text style={styles.title}>
                        Status Locker
                    </Text>
                    <View style={{backgroundColor : '#778899', borderRadius : 10 , borderColor : '#FF6600'}}>
                        <Text style={{marginVertical : 12, color:'yellow',fontSize : 18 , paddingHorizontal : 10}}>
                            S1 (Size S){'\t'} : {'\t'}
                            <Text style={{color : this.state.S1== 'Rented' ? 'red' : '#7FFF00'}}>
                                {this.state.S1 == 'Rented' ? 'Rented' : 'Ready for rent'}
                            </Text>
                        </Text>
                        <Text style={{marginVertical : 12, color:'yellow',fontSize : 18 ,paddingHorizontal : 10}}>
                            S2 (Size S){'\t'} : {'\t'}
                            <Text style={{color : this.state.S2== 'Rented' ? 'red' : '#7FFF00'}}>
                                {this.state.S2 == 'Rented' ? 'Rented' : 'Ready for rent'}
                            </Text>
                        </Text>
                        <Text style={{marginVertical : 12, color:'#32CD32',fontSize : 18,paddingHorizontal : 10}}>
                            M1 (Size M){'\t'} : {'\t'}
                            <Text style={{color : this.state.M1== 'Rented' ? 'red' : '#7FFF00'}}>
                                {this.state.M1 == 'Rented' ? 'Rented' : 'Ready for rent'}
                            </Text>
                        </Text>
                        <Text style={{marginVertical : 12, color:'#A020F0',fontSize : 18,paddingHorizontal : 10}}>
                            L1 (Size L){'\t\t'} : {'\t'}
                            <Text style={{color : this.state.L1== 'Rented' ? 'red' : '#7FFF00'}}>
                                {this.state.L1 == 'Rented' ? 'Rented' : 'Ready for rent'}
                            </Text>
                        </Text>
                        {/* <Divider style={{ backgroundColor: '#778899' ,paddingHorizontal : 10}} /> */}
                        <Text style={{marginVertical : 12, color:'#A020F0',fontSize : 18,paddingHorizontal : 10}}>
                            L1 (Size L){'\t\t'} : {'\t'}
                            <Text style={{color : this.state.L2== 'Rented' ? 'red' : '#7FFF00'}}>
                                {this.state.L2 == 'Rented' ? 'Rented' : 'Ready for rent'}
                            </Text>
                        </Text>
                    </View>                
                </View>
                <Image
                    style= {{width: 100, height : 100 , marginTop : 20}}
                    source={require('../../images/locker.png')}
                />
            </View>
        );
    }
}
export default StatusForm;

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
        color : 'white',
        //marginTop : 20,
        marginBottom : 50
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
        backgroundColor : '#4682B4',
        borderRadius : 30,
        width : 220,
        height : 50,
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth : 2,
        borderColor : '#455a64'
    },
    alertText: {
        color : '#660000',
        fontSize : 14
    }
  });