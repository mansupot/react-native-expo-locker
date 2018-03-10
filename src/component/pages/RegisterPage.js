import React, { Component } from 'react';
import { 
    ScrollView,
} from 'react-native';

import RegisterForm from '../forms/RegisterForm';

class RegisterPage extends Component {
    render() {
        return(
            <RegisterForm />
        );
    }
}
export default RegisterPage;