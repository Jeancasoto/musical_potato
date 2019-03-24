import React from 'react';
import {
  Text,
} from 'react-native';

export default class Atractivo extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.state = {
      id: props.id,
      name: props.name,
      url: props.url,
      lugares: props.lugares,
    };
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const { id, name, url, lugares } = this.state;

    return (
      <React.Fragment>
        <Text>Lugares de atractivo: {name}</Text>
        {lugares}
      </React.Fragment>
    );
  }
}
