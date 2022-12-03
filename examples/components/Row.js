class Row extends Component {
  render() {
    return {
      type: "section",
      props: {
        children: [
          "Hello from section",
          { type: Key },
          { type: Key },
          { type: Key },
          { type: Key },
          { type: ff },
        ],
      },
    };
  }
}

function ff() {
  return "funtional components";
}
