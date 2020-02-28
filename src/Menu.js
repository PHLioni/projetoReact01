import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'

export default createDrawerNavigator({
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='Pedro' />,       
    }, 
    ParImpar:{
        screen:() => <ParImpar numeros={10}/>,
        navigationOptions: { title: 'Par e Impar' }

    }, 
    Simples:{
        screen:() => <Simples texto='flexivel'/>,      

    },
}, {drawerWidth: 300})