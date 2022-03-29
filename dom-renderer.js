function renderChildren(children, rootNode) {
  if (Array.isArray(children)) {
    children.forEach((child) => {
      render(child, rootNode);
    });
  } else {
    render(children, rootNode);
  }
}

export function render(app, rootNode) {
  switch (app.type) {
    case "text": {
      rootNode.appendChild(document.createTextNode(app.data));
      break;
    }
    default: {
      const newNode = document.createElement(app.type);
      rootNode.appendChild(newNode);
      if (!app.props) {
        return;
      }
      for (let [key, value] of Object.entries(app.props)) {
        if (key !== "children") {
          if (typeof value === "function") {
            newNode.addEventListener(key.slice(2), value);
          } else {
            newNode.setAttribute(key, value);
          }
        }
      }
      renderChildren(app.props.children, newNode);
      break;
    }
  }
}
