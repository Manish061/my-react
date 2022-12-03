class Component {
  constructor(props) {
    this.props = props;
  }
}

Component.prototype.setState = function setState(partialState) {
  if (!partialState) {
    return;
  }
  this.state = { ...this.state, ...partialState };
  // enqueueUpdate();
};
