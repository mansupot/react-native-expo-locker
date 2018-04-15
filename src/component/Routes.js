
import React, { Component } from 'react';
import { 
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Router , Stack , Scene , Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome'; 

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';   
import ProfilePage from './pages/ProfilePage'
import BookingPage from './pages/BookingPage';
import SteamPage from './pages/SteamPage';
import QRscanPage from './pages/QRscanPage';
import QRscan2Page from './pages/QRscan2Page';
import IntroPage from './pages/IntroPage';
import StatusPage from './pages/StatusPage';


class TabIcon extends Component {
    render() {
      var color = this.props.selected ? '#00f240' : '#301c2a';
  
      return (
        <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
            <Icon style={{color: '#5D6D7E' }} name={this.props.iconName || "circle"} size={20}/>
        </View>
      );
    }
  }

class Routes extends Component {
    render() {
        return(
            <Router>
                <Stack key="root"  >
                    <Scene 
                        key="intro" 
                        component={ IntroPage } 
                        title="Intro" 
                        initial={ true }
                        hideNavBar={ true }
                        scorllBar
                    />
                    <Scene 
                        key="login" 
                        component={ LoginPage } 
                        title="Login" 
                        //initial={ true }
                        hideNavBar={ true }
                        scorllBar
                    />
                    <Scene 
                        key="register" 
                        component={ RegisterPage } 
                        title="Register"
                        hideNavBar={ true }  
                    />
                    <Scene 
                        key="qrscan" 
                        component={ QRscanPage } 
                        title="QR Scanner"
                        hideNavBar={ true }  
                    />
                    <Scene 
                        key="qrscan2" 
                        component={ QRscan2Page } 
                        title="QR Scanner2"
                        hideNavBar={ true }  
                    />
                    <Scene key="tabbar" tabs={true} hideNavBar={true} tabBarPosition="bottom">
                        <Scene key="tab1" 
                            hideNavBar={true} 
                            component={ HomePage } 
                            title="My Locker" 
                            initial={true} 
                            iconName="unlock-alt"
                            icon={TabIcon}
                        />
                        <Scene key="tab2" 
                            hideNavBar={true} 
                            component={ BookingPage } 
                            title="Rent"
                            iconName="plus-square"
                            icon={TabIcon}
                        />
                        <Scene key="tab3" 
                            hideNavBar={true} 
                            component={ SteamPage } 
                            title="Stream"
                            iconName="camera"
                            icon={TabIcon} 
                            
                        />
                        <Scene key="tab4" 
                            hideNavBar={true} 
                            component={ StatusPage }  
                            title="Status" 
                            iconName="archive"
                            icon={TabIcon}
                        />
                        <Scene key="tab5" 
                            hideNavBar={true} 
                            component={ ProfilePage }
                            title="Profile" 
                            iconName="user-circle"
                            icon={TabIcon}
                        />
                    </Scene>
                </Stack>
            </Router>
        );
    }
}
export default Routes;
