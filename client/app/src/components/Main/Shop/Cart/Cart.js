import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Cart extends Component{
    render(){
        return(
            <View style={{flex: 1, alignItems: "center"}}>
                <Text>Cart Component</Text>
            </View>
        );
    }
}