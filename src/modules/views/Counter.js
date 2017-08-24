import React from 'react';
import { connect } from 'react-redux';

import { Title, Bold } from '../../components/styled/Text';
import { Centered, FlexRow } from '../../components/styled/Layout';
import { Button } from '../../components/styled/Branding';
import { increment, reset } from '../../state/counter';

const mapStateToProps = state => ({
  value: state.counter.value,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(increment()),
  onReset: () => dispatch(reset()),
});

export class Counter extends React.Component {
  static navigationOptions = {
    title: 'Counter',
  };

  renderTitle = () =>
    <Title>
      <Bold>Counter</Bold>
    </Title>;

  renderValue = () =>
    <Title>
      <Bold>
        {this.props.value}
      </Bold>
    </Title>;

  renderButtons = () =>
    <FlexRow>
      <Button onPress={this.props.onIncrement}>
        <Title>Increment</Title>
      </Button>
      <Button onPress={this.props.onReset}>
        <Title>Reset</Title>
      </Button>
    </FlexRow>;

  renderDescription = () =>
    <Title>
      This is an example of <Bold>Redux</Bold> usage with the{' '}
      <Bold>Pepperoni app kit</Bold>.
    </Title>;

  render = () =>
    <Centered>
      {this.renderTitle()}
      {this.renderValue()}
      {this.renderButtons()}
      {this.renderDescription()}
    </Centered>;
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);