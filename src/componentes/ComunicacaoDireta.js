import React from 'react'
import { Text, View } from 'react-native'

const fonte = { style: { fontSize: 30 } }

function filhosComProps(props) {
    return React.Children.map(props.children,
        c => React.cloneElement(c, { ...props, ...c.props }))
}

export const Filho = props =>
    //Spreed ...
    <View>
        <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>

    </View>

export const Pai = props =>
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {/*props.children*/}
        {filhosComProps(props)}
    </View>

export const Avo = props =>
    <View>
        <Text {...fonte}>Avô: {props.nome} {props.sobrenome}</Text>
        <Pai nome='Pedro' sobrenome={props.sobrenome}>
            <Filho nome='Anthony' />
            <Filho nome='Laura' />
        </Pai>
        <Pai {...props}>
            <Filho nome='Calebe' />
            <Filho nome='Alfred' />
        </Pai>
    </View>

