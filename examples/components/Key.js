class Key extends Component {
  constructor() {
    super();
    this.state = {
      hello: "2",
      hello1: "hello1",
    };
  }
  update() {
    this.setState({ hello: "1" });
  }

  render() {
    return {
      type: "div",
      props: {
        style:
          "display: flex;flex-direction: column; justify-between: center;align-items:center",
        children: [
          `${this.state.hello1}`,
          {
            type: "button",
            props: {
              children: JSON.stringify(this.state),
              onclick: this.update.bind(this),
            },
          },
        ],
      },
    };
  }
}
