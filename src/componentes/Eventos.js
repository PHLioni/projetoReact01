import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Evento extends Component {

    state = {
        texto: ''
    }

    alterarTexto = texto => {
        //Como o valor do parametro e o atributo são iguais podemos usar apenas um unico nome e não texto: texto
        this.setState({ texto })
    }

    render() {
        return (
            <View>
                <Text style={Padrao.fonte40}>{this.state.texto}</Text>
                <TextInput value={this.state.texto}
                    style={Padrao.input}
                    onChangeText={this.alterarTexto}
                />
            </View>
        )
    }
}