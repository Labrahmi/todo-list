/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Main.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: macbook <macbook@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/03/10 22:36:44 by macbook           #+#    #+#             */
/*   Updated: 2023/03/13 01:45:11 by macbook          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as React from "react";
import Task from "./Task.js";
import AddIcon from "@mui/icons-material/Add";
import CircularIndeterminate from "./CircularProg";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myTask: [],
    };
    this.addNewTask = this.addNewTask.bind(this);
  }
  hundelAddIcon = (event) => {
    let taskValue = document.getElementById("input-task").value;
    if (taskValue != "") {
      this.addNewTask(taskValue);
    }
  };
  handleKeyPress = (event) => {
    let taskValue = document.getElementById("input-task").value;
    if (event.key === "Enter" && taskValue != "") {
      this.addNewTask(taskValue);
    }
  };
  deleteTask(dataToDelete) {
    delete this.state.myTask[dataToDelete];
    this.setState({
      myTask: this.state.myTask,
    });
  }
  addNewTask(dataToAdd) {
    let taskValue = dataToAdd;
    document
      .getElementById("tasks-container")
      .classList.add("bg-white", "border", "border-gray-300");
    this.state.myTask.push(
      <Task
        key={this.state.myTask.length}
        data={taskValue}
        id={this.state.myTask.length}
      />
    );
    this.setState({
      myTask: this.state.myTask,
    });
    document.getElementById("input-task").value = "";
  }
  render() {
    const { myTask } = this.state;
    return (
      <div className="w-full flex justify-center py-4">
        <div className="w-[90%] tablet:w-[60%] desktop:w-[40%]">
          <div className="flex justify-center w-full my-4">
            <div className="flex justify-center items-center w-full border border-gray-300 bg-white rounded-lg">
              <input
                onKeyPress={this.handleKeyPress}
                id="input-task"
                placeholder="Add new task"
                className="w-full rounded-lg p-4 focus-within:outline-none rounded-r-none bg-white"
              ></input>
              <div className="hover:fill-gray-500 cursor-pointer transit h-full flex items-center p-4 rounded-lg rounded-l-none">
                <AddIcon onClick={this.hundelAddIcon} className="" />
              </div>
            </div>
          </div>
          <div id="tasks-container" className="my-4 rounded-lg  p-4 py-8">
            {myTask && myTask}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
