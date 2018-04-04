import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text,
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
        setTimeout(function(){Actions.reset("login");}, 5000);
        if(this.state.timePassed == false){
            return(
                <View style={styles.container}>
                    <Text style={styles.title}>
                        ROCK-IT LOCKER
                    </Text>
                </View>
            );
        }
    }
}
export default IntroPage;

const styles = StyleSheet.create({
    container: {
        marginTop : 23,
        backgroundColor : '#F0F8FF' ,
        justifyContent : 'center', 
        alignItems : 'center',
        flex : 1,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color : '#00BFFF',
        marginVertical : 20
    },
});