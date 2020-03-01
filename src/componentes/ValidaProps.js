import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const ValidaProps = props =>
    <Text style={{ fontSize: 35 }}>
        {props.label}
        {props.ano + 2000}
    </Text>

ValidaProps.defaultProps = {
    label: 'Ano: '
}

ValidaProps.propTypes = {
    ano: PropTypes.number.isRequired
}

export default ValidaProps