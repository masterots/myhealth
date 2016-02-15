import * as injectTapEventPlugin from 'react-tap-event-plugin';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RaisedButton } from 'material-ui';
const { ExerciseForm } = require('../components/admin-app/ExerciseForm');

injectTapEventPlugin();


interface AppProps extends React.Props<any> {
}

class App extends React.Component<AppProps, {}> {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>My admin screen for react stuff</h1>
        <ExerciseForm />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
