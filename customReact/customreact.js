//this javascript code is created to show the inner working of react

function constomeRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);

  for (prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

// like this element will be converted in react

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me",
};

//this is used totake the root element from the document

const mainContainer = document.querySelector("#root"); // if we are using query selector then we need to use the symbol #

//this is used to call the function

constomeRender(reactElement, mainContainer);
