import * as React from 'react';
import { TextField, SelectField, MenuItem, RaisedButton } from 'material-ui';

interface ExerciseFormProps extends React.Props<ExerciseForm> {

}

interface ExerciseFormState {
  value: number;
}

module ExerciseForm {
  export class ExerciseForm extends React.Component<ExerciseFormProps, ExerciseFormState> {
    constructor() {
      super();
      this.state = {
        value: 1
      }
    }

    handleChange(e) {
      console.log(e.target.value);
    }

    render() {
      return (
        <form>
          <SelectField value={this.state.value} onChange={this.handleChange}>
            <MenuItem />
            <MenuItem />
          </SelectField>
          <TextField
            hintText="Name"
            floatingLabelText="Name"
          />
          <RaisedButton
            label="My Button"
          />
        </form>
      );
    }
  }
}
