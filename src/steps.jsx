import React from "react";

export default class STEPS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      head: "hello"
    };
  }

  render() {
    return (
      <>
        <h1 className="text-3xl font-bold underline">
          {this.props.stepsnumber}
        </h1>

        <div className="w-[50px] bg-black">
          <button>previous</button>
          <button>step</button>
        </div>
      </>
    );
  }
}
