class Reconciler {
  constructor(config) {
    this.old = null;
    this.new = null;
    this.config = config;
  }
  reconcile(root) {
    let tree = {};
    if (!root) {
      return;
    }
    if (typeof root.type === "string") {
      //   native elements
      tree.type = root.type;
    } else if (typeof root.type === "function") {
      if (root.type.prototype instanceof Component) {
        // class based components
        const newTree = new root.type();
        tree = this.reconcile(newTree.render());
      } else {
        // functional components
        tree = this.reconcile(root.type());
      }
    } else {
      // text node
      return root;
    }
    if (!root.props) {
      return tree;
    }
    tree.props = {};
    for (let [key, value] of Object.entries(root.props)) {
      if (key !== "children") {
        tree.props[key] = value;
      }
    }
    if (typeof root.props.children === "string") {
      //   handle string only children
      tree.props.children = root.props.children;
    } else if (Array.isArray(root.props.children)) {
      //   recurse over children props
      tree.props.children = [];
      root.props.children.forEach((child) => {
        tree.props.children = [...tree.props.children, this.reconcile(child)];
      });
    }
    return tree;
  }
}
