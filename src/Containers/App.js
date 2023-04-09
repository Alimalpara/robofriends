import React from "react";
import CardArray from "../Components/CardArray";
// import { robots } from "./robots";
import SearchBox from "../Components/SearchBox";
import "./App.css";
import Scroll from "../Components//Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  //function for search change

  onSearchChange = (event) => {
    //to set the value of search field to pass to the return statement
    this.setState({ searchField: event.target.value });
  };

  // lifecycle event for react to load the data
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  render() {
    const {robots, searchField} = this.state;
    //will pass this into props of cardArray so it displays the refreshed list
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });

    //  if not load yet
   
      return !robots.length ? (
        <h1 className="tc">Loading</h1>
      ) : (
        //  after loading is done
        <>
          <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <ErrorBoundary>
                <CardArray robots={filteredRobots} />
              </ErrorBoundary>
            </Scroll>
          </div>
        </>
      );
      
  }
  
}

export default App;
