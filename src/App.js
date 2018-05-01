import React, { Component, Fragment, createContext } from 'react';
import logo from './logo.svg';
import './App.css';

const LevelContext = createContext();

class TestComp extends Component {
  componentDidMount() {
    console.log(this.props.data);
  }

  render() {
    return (
      <Fragment>
        <span>TestComp</span>
        <br />
      </Fragment>
    );
  }
}

const TestCompContainer = () => <LevelContext.Consumer>{({ data }) => <TestComp data={data} />}</LevelContext.Consumer>;

const Level6 = () => (
  <LevelContext.Consumer>
    {({ data, onChange }) => (
      <Fragment>
        <span>Level6</span>
        <br />
        <span>{data}</span>
        <button onClick={onChange}>Change</button>
      </Fragment>
    )}
  </LevelContext.Consumer>
);

const Level5 = () => (
  <Fragment>
    <span>Level5</span>
    <br />
    <Level6 />
    <TestCompContainer />
  </Fragment>
);

const Level4 = () => (
  <Fragment>
    <span>Level4</span>
    <br />
    <Level5 />
  </Fragment>
);

const Level3 = () => (
  <Fragment>
    <span>Level3</span>
    <br />
    <Level4 />
  </Fragment>
);

const Level2 = () => (
  <Fragment>
    <span>Level2</span>
    <br />
    <Level3 />
  </Fragment>
);

const Level1 = () => (
  <Fragment>
    <span>Level1</span>
    <br />
    <Level2 />
  </Fragment>
);

class App extends Component {
  state = {
    data: 'Some data'
  };

  onClickHandler = () => {
    this.setState({ data: 'Some changed data' });
  };

  render() {
    return (
      <LevelContext.Provider value={{ data: this.state.data, onChange: this.onClickHandler }}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to the React Context Demo</h1>
          </header>
          <p className="App-intro">
            <Level1 />
          </p>
        </div>
      </LevelContext.Provider>
    );
  }
}

export default App;
