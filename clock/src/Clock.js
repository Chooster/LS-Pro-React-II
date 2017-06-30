// import React, { Component } from 'react';
//
// export default class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.clock = this.clock.bind(this);
//     this.state = {
//       count: 0
//     };
//   }
//
//   clock() {
//     this.setState(currentState => {
//       return {
//         count: currentState.count + 1
//       }
//     });
//   }
//
//   render() {
//     return (
//       <div>
//         {this.state.count}
//         <button onClick={this.clock}>Time Keeper</button>
//       </div>
//     );
//   }
// }

// solutions per:
// http://infoheap.com/react-component-clock-using-setinterval/
// https://codepen.io/anuragasaurus/post/react-basics-making-a-clock
// https://facebook.github.io/react/docs/state-and-lifecycle.html
// https://facebook.github.io/react/docs/rendering-elements.html#react-only-updates-whats-necessary

import React, { Component } from 'react';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.timeTicker = this.timeTicker.bind(this);
        this.state = {
            now: new Date()
        };
    }

    timeTicker() {
        this.setState({
            now: new Date()
        })
    }

    componentDidMount() {
        this.interval = setInterval(this.timeTicker, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return(
            <div>
                <div>
                    {this.state.now.toLocaleTimeString()}
                </div>
            </div>
        );
    };
};
