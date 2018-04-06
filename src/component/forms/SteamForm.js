import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    StatusBar,
    WebView
    } from 'react-native';
//import RtspPlayer from 'react-native-rtspplayer'

class SteamForm extends Component {
    constructor(props) {
        super(props),
        this.state = {
            uri : ''
        }
    }
    
    render() {
        return(
            <View style={styles.container}>
                {/* <StatusBar hidden /> */}
                <View style={{alignItems : 'center',justifyContent: 'center'}}> 
                    {/* <Text style={styles.title}>
                        ROCK-IT-LOCKER
                    </Text>
                    <Text style={{marginVertical : 15, color:'#778899'}}>
                        SteamForm
                    </Text> */}
                    
                    {/* <RtspPlayer
                        ref='player'
                        paused={this.state.paused}
                        style={[styles.vlcplayer,this.state.customStyle]}
                        source={{uri:this.state.uri,useTcp:true,width:playerDefaultWidth,height:210}}
                    /> */}
                </View>
                <WebView
                    source={{uri: 'https://www.youtube.com/watch?v=JK6cI3CVDBY'}}
                    style={{marginTop: 20 , width : 300 }}
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
        fontSize : 22,
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