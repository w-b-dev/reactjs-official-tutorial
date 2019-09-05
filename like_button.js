'use strict';

// const e = React.createElement;

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

    // return e(
    return React.createElement(
      'button',
      {
        onClick: () =>
          this.setState({
            liked: true
          })
      },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#target');
ReactDOM.render(React.createElement(LikeButton), domContainer);
