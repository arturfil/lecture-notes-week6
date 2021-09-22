import axios from "axios";
import React from "react";

class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meetings: [],
      apiUrl: "http://localhost:5000/api/meetings",
    };
  }

  componentDidMount() {
    this.getMeetings();
  }

  async getMeetings() {
    const response = await axios.get(this.state.apiUrl);

    this.setState({
      ...this.state,
      meetings: response.data,
    });
  }

  render() {
    return (
      <div>
        <h2>Class based Component</h2>
        {this.state.meetings.map((meeting) => (
          <h2 key={meeting._id}>
            {meeting.concept} :D
          </h2>
        ))}
      </div>
    );
  }
}

export default App2;
