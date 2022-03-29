export class Component {
  constructor(props) {
    this.props = props;
  }
}

Component.prototype.setState = function setState(partialState) {
  if (!partialState) {
    return;
  }
  this.state = { ...this.state, ...partialState };
  const el = document.querySelector("#root");
  while (el.lastChild) {
    el.removeChild(el.lastChild);
  }
  render(this.render(), document.querySelector("#root"));
};
