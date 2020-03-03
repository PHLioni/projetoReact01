import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'


const alunos = [
    { id: 1, nome: 'Pedro', nota: 9.5 },
    { id: 2, nome: 'Ariane', nota: 9.6 },
    { id: 3, nome: 'Anthony', nota: 9.7 },
    { id: 4, nome: 'Laura', nota: 9.8 },
    { id: 1, nome: 'Pedro', nota: 9.5 },
    { id: 2, nome: 'Ariane', nota: 9.6 },
    { id: 3, nome: 'Anthony', nota: 9.7 },
    { id: 4, nome: 'Laura', nota: 9.8 },
    { id: 1, nome: 'Pedro', nota: 9.5 },
    { id: 2, nome: 'Ariane', nota: 9.6 },
    { id: 3, nome: 'Anthony', nota: 9.7 },
    { id: 4, nome: 'Laura', nota: 9.8 },
    { id: 1, nome: 'Pedro', nota: 9.5 },
    { id: 2, nome: 'Ariane', nota: 9.6 },
    { id: 3, nome: 'Anthony', nota: 9.7 },
    { id: 4, nome: 'Laura', nota: 9.8 },
    { id: 1, nome: 'Pedro', nota: 9.5 },
    { id: 2, nome: 'Ariane', nota: 9.6 },
    { id: 3, nome: 'Anthony', nota: 9.7 },
    { id: 4, nome: 'Laura', nota: 9.8 },
    { id: 1, nome: 'Pedro', nota: 9.5 },
    { id: 2, nome: 'Ariane', nota: 9.6 },
    { id: 3, nome: 'Anthony', nota: 9.7 },
    { id: 4, nome: 'Laura', nota: 9.8 },

]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 70,
    backgroundColor: '#666',
    borderWidth: 0.5,
    borderColor: '#222',
    //justifyContent: 'center'
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{ fontWeight: 'bold' }}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }
    return (

        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}