import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidaProps from './componentes/ValidaProps'
import Eventos from './componentes/Eventos'
import { Avo } from './componentes/ComunicacaoDireta'
import { TextoSincronizado } from './componentes/ComunicaoIndireta'
import ListaFlex from './componentes/ListaFlex'

export default createDrawerNavigator({
    ListaFlex: {
        screen: () => <ListaFlex />,
        navigationOptions: { title: 'Lista Flex' }
    },
    TextoSincronizado: {
        screen: () => <TextoSincronizado />,
        navigationOptions: { title: 'Texto Sincronizado' }
    },
    Avo: {
        screen: () => <Avo nome='Sebastião' sobrenome='Lioni' />
    },
    Eventos: {
        screen: () => <Eventos />
    },

    ValidaProps: {
        screen: () => <ValidaProps ano={18} />
    },
    Plataformas: {
        screen: () => <Plataformas />
    },
    Contador: {
        screen: () => <Contador />
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='Pedro' />,
    },
    ParImpar: {
        screen: () => <ParImpar numeros={10} />,
        navigationOptions: { title: 'Par e Impar' }

    },
    Simples: {
        screen: () => <Simples texto='flexivel' />,

    },
}, { drawerWidth: 300 })