'use strict';
// TODO #1
// I prefer to learn from the full version logic,
// so no shortcut assignment here
// const e = React.createElement;

// https://reactjs.org/docs/react-api.html#createelement
// TODO #2 - Create and return a new React element of the given type.
// The type argument can be either a tag name string
//(such as 'div' or 'span'), a React component type
// (a class or a function), or a React fragment type.

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    // return e(  // TODO #1
    return React.createElement(
      // TODO #2 - using type as tag-name-string
      'button',
      // Defining PROPS
      {
        onClick: () =>
          this.setState({
            liked: true
          })
      },
      // Defining Children (in this case a text node)
      'Like'
    );
  }
}

const domContainer = document.querySelector('#target');
//TODO #1 Also repeated here
ReactDOM.render(
  React.createElement(
    LikeButton // TODO #2 - using type as React component(class/function)
  ),
  domContainer
);
