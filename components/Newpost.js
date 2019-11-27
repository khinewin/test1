import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {Header} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default class Newpost extends Component{
    render(){
        return(
            <View>
                <Header
    
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Add New Post', style: { color: '#fff' } }}
                rightComponent={
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                        <Text>
                            <Icon name="home" size={14} color="#fff"></Icon>
                        </Text>
                    </TouchableOpacity>
                }
            />
            </View>
        )
    }
}

//drawer
//stack
//tab bar
//npm install react-navigation --save
//expo install react-native-gesture-handler react-native-reanimated
//npm install react-navigation-stack --save