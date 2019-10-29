import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
export default class SignIn extends Component {

    signIn = (screenName) => {
        Navigation.push(this.props.componentId,{
            component: {
                name: screenName
            }
        })


    }


    render() {
        return (
            <View style = {{justifyContent: "center", alignItems:"center"}}>
                <Text>
                    hello from Signinn ========
                </Text>
                <TouchableOpacity style={{ borderWidth:1 , borderRadius: 0.5, padding: 10 }}
                onPress = {()=>this.signIn('mainmenu')}
                // onPress = {this.props.push({
                //     name: 'mainmenu'
                // })}
                >
                    <Text>
                    Sign In
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

