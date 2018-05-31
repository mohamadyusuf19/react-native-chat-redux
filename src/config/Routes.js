import React from 'react'
import { Scene, Router } from 'react-native-router-flux';
import Home from '../screen/home/Home';
import Login from '../screen/auth/Login';
import FriendList from '../screen/friends/FriendList';
import Messages from '../screen/messages/Messages';

const ComponentRouter = () => {
    return (
        <Router>
            <Scene key="root" >
                <Scene key="auth" hideNavBar={true} initial={true}>
                    <Scene key="login" component={Login}/>            
                </Scene>
                <Scene key="main" hideNavBar={true}>
                    <Scene key="home" component={Home} />                     
                    <Scene key="chats" component={FriendList} />                     
                    <Scene key="messages" component={Messages}/>
                </Scene>
            </Scene>            
        </Router>
    )
}

export default ComponentRouter;