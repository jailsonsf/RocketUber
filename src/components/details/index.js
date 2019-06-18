import React, { Component } from 'react';

import { 
    Container, TypeTitle, TypeDescription,
    TypeImage, RequestButton, RequestButtonText
 } from './styles';

 import Uberx from '../../assets/uberx';

export default class Details extends Component {
  render() {
    return (
        <Container>
            <TypeTitle>Popular</TypeTitle>
            <TypeDescription>Mais barato</TypeDescription>
            
            <TypeImage source={ Uberx } />
            <TypeTitle>Uberx</TypeTitle>
            <TypeDescription>R$ 10,00</TypeDescription>

            <RequestButton onPress={() => {} }>
                <RequestButtonText>Solicitar Uberx</RequestButtonText>
            </RequestButton>
        </Container>
    );
  }
}
