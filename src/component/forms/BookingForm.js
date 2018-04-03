import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    StatusBar
    } from 'react-native';
import { Actions } from 'react-native-router-flux';


class BookingForm extends Component {

    render() {
        return(
            <View style={styles.container}>
                {/* <StatusBar hidden /> */}
                <View style={{alignItems : 'center',justifyContent: 'center'}}> 
                    <Text style={styles.title}>
                        Booking Locker
                    </Text>
        {/*Booking Locker1*/}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => Actions.qrscan()}
                    >
                        <Text style={styles.buttonText}>
                            Start Booking No.1
                        </Text>  
                    </TouchableOpacity>
        {/*Booking Locker2*/}     
                    <TouchableOpacity
                        style = {styles.button}
                        onPress={()=> Actions.qrscan2()}
                    >
                        <Text style={styles.buttonText}>
                            Start Booking No.2
                        </Text>  
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default BookingForm;

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
        marginVertical : 20,
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