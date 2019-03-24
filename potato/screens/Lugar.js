import React from 'react';
import {
  Image,
  Text,
} from 'react-native';

export default class Lugar extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.state = {
      name: props.name,
      desc: props.desc,
      fotos: props.fotos,
    };
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const { name, desc, fotos } = this.state;

    const imagenes = [];
    for (let fotoKey in fotos) {
      console.log(fotos[fotoKey]);
      imagenes.push(
        <Image
          key={fotoKey}
          style={{width: 66, height: 58}}
          source={{ uri: fotos[fotoKey] }}
        />
      );
    }

    return (
      <React.Fragment>
        <Text>Lugar: {name}</Text>
        <Text>Descripcion de {name}: {desc}</Text>
        <Text>Imagenes de {name}:</Text>
        {imagenes}
      </React.Fragment>
    );
  }
}
