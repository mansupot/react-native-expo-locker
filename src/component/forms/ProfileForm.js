import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    } from 'react-native';




class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : 'Supot Patsaithong',
            email : 'mansupot@hotmail.com',
            tel : '0864710472',
        }
    };

    render() {
        return(
            <View style={styles.container}>
                <View style={{alignItems : 'center',justifyContent: 'center'}}> 
                    <Text style={styles.title}>
                        My Profile
                    </Text>
                    <View>
                        <Text style={{marginVertical : 12, color:'#778899',fontSize : 20}}>
                            Name : {this.state.name}
                        </Text>
                        <Text style={{marginVertical : 12, color:'#778899',fontSize : 20}}>
                            Email : {this.state.email}
                        </Text>
                        <Text style={{marginVertical : 12, color:'#778899',fontSize : 20}}>
                            Tel. : {this.state.tel}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style = {styles.button}
                        //onPress={()=>}
                    >
                        <Text style={styles.buttonText}>Logout</Text>  
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default ProfileForm;

const styles = StyleSheet.create({
    container: {
        marginTop : 25,
        backgroundColor : '#455a64' ,
        //justifyContent : 'center', 
        alignItems : 'center',
        flex : 1,
    },
    title: {
        fontSize: 28,
        //fontWeight: 'bold',
        color : '#F5FFFA',
        marginVertical : 20
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