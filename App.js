import React from 'react';
import AppNavigator from './navigation/Navigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <AppNavigator />
    );
  }
}