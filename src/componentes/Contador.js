import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

export default class Contador extends Component {

    state ={
        numero:0
    }

    maisUm = () => {
        this.setState({numero: this.state.numero + 1})
    }

    limpar = () =>{
        this.setState({numero: 0})
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 40 }}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress={this.maisUm}
                    onLongPress={this.limpar}
                >
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}