import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    StatusBar
    } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { Actions } from 'react-native-router-flux';

export default class BarcodeScannerExample extends React.Component {
        state = {
            hasCameraPermission: null,
            statusbar : 'Please Scan QR code'
        }
      
        async componentWillMount() {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            this.setState({hasCameraPermission: status === 'granted'});
        }
        after_scanned() {
            alert('Scanned');
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
        marginTop : 20,
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
        justifyContent : 'center'
    },
    alertText: {
        color : '#660000',
        fontSize : 14
    }
  });