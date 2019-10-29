//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation'

// create a component
class MainMenu extends Component {
    createTeam = ( screenName ) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName
            }
        })
    }
    createLeague = ( screenName ) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName
            }
        })
    }
    joinTeam = ( screenName ) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>MainMenu</Text>
                <View>
                    <TouchableOpacity style ={styles.button}
                    onPress = {()=> {this.createTeam('createteam')}}
                    >
                        <Text>Create team</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style ={styles.button}
                    onPress = {()=> {this.createLeague('createleague')}}
                    >
                        <Text>Create League</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style ={styles.button}
                    onPress = {()=> {this.joinTeam('jointeam')}}
                    >
                        <Text>Join Team</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#333',
        padding: 5,
        margin: 8

    }
});

//make this component available to the app
export default MainMenu;
