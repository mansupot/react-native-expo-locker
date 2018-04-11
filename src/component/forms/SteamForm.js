import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    StatusBar,
    WebView,
    //Video,
    VideoControl,
    TouchableHighlight,
    Linking,
    Image
    } from 'react-native';
// import VideoPlayer from 'react-native-video-controls';
//import { Video } from 'expo';
import AppLink from 'react-native-app-link';

class SteamForm extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            ipStream : ''
        }
    }
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Stream View</Text>
                <View>
                    <Text style = {{color : 'white' , fontWeight : 'bold'}}>Suggestion for Streamimg</Text>
                    <Text style = {{color : 'white'}}>1.Install the VLC application in Play Store/App Store</Text>
                    <Text style = {{color : 'white'}}>2.Enter the ip stream followed by the Port</Text>
                    <Text style = {{color : 'white'}}>(Ex.192.168.1.1: 554)</Text>
                    <Text style = {{color : 'white'}}>3.Press the Open to VLC App button</Text>
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder='IP stream'
                    onChangeText={(ipStream) => this.setState({ipStream})}
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => Linking.openURL('rtsp://admin:admin@'+this.state.ipStream+'/live')}>
                    <Text style={styles.buttonText}>Open to VLC App</Text>
                </TouchableOpacity>
                <Image
                    style= {{width: 100, height : 100 }}
                    source={require('../../images/vlc.png')}
                />
            </View>
        );
    }
}
export default SteamForm;

const styles = StyleSheet.create({
    container: {
        marginTop : 23,
        backgroundColor : '#455a64' ,
        justifyContent : 'center', 
        alignItems : 'center',
        flex : 1,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    title: {
        fontSize: 28,
        //fontWeight: 'bold',
        color : '#F5FFFA',
        marginBottom : 25,
    },
    textInput: {
        height : 42 ,
        width : 300,
        backgroundColor : '#F8F8FF',
        borderRadius : 20,
        marginVertical : 10,
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
        backgroundColor : '#FF9900',
        borderRadius : 30,
        width : 220,
        height : 50,
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth : 2,
        borderColor : '#FFFFFF'
    },
    alertText: {
        color : '#660000',
        fontSize : 14
    }
  });