import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Image,
    StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class IntroPage extends Component {
    constructor(props){
        super(props);
        this.state = {
          timePassed: false,
          visible: true,
        };

    }

    render() {
        setTimeout(function(){Actions.reset("login");}, 4000);
        if(this.state.timePassed == false){
            return(
                <View style={styles.container}>
                    <StatusBar hidden />
                    <Image
                        style= {{width: 150, height : 150 }}
                        source={require('../../images/loading.png')}
                    />
                    <Text style={styles.title}>
                        ROCK-IT LOCKER
                    </Text>
                    <Text style={{marginVertical : 5, color:'#778899'}}>
                        Version 1.1(beta) by TCT-RA #26
                    </Text>
                </View>
            );
        }
    }
}
export default IntroPage;

const styles = StyleSheet.create({
    container: {
        //marginTop : 23,
        backgroundColor : '#455a64' ,
        justifyContent : 'center', 
        alignItems : 'center',
        flex : 1,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color : '#FFFFFF',
        marginVertical : 10
    },
});