/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Task.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: macbook <macbook@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/03/11 07:00:20 by macbook           #+#    #+#             */
/*   Updated: 2023/03/13 01:58:59 by macbook          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as React from "react";
import LongMenu from "./LongMenu.js";
import Checkbox from "@mui/material/Checkbox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Main from "./Main";

export default function Task(props) {
  function checkBoxFuntion() {
    // let checkId = document.getElementById("checkbox-id-" + props.id);
    // let taskText = document.getElementsByClassName("taskText")[props.id];
    // console.log("id", checkId);
    // console.log("tx", taskText);
    // taskText.classList.toggle("line-through");
    // taskText.classList.toggle("text-gray-500");
  }
  function deleteTask() {
    let DeleteLength = document.getElementsByClassName(
      "DeleteOutlineIcon-class"
    ).length;
    if (DeleteLength == 1) {
      document
        .getElementById("tasks-container")
        .classList.remove("bg-white", "border", "border-gray-300");
    }
    document.getElementById("task-id-" + props.id).classList.add("opacity-0");
    setTimeout(() => {
      document.getElementById("task-id-" + props.id).remove();
    }, 350);
    let DeleteOutlineIcon = document.getElementsByClassName(
      "DeleteOutlineIcon-class"
    );
  }
  setTimeout(() => {
    document
      .getElementById("task-id-" + props.id)
      .classList.remove("opacity-0");
  }, 50);
  return (
    <div>
      <div
        id={"task-id-" + props.id}
        className="transit opacity-0 tasks-class p-1 border-b flex items-center justify-between mb-1 "
      >
        <div className="flex items-center overflow-scroll">
          <div>
            <Checkbox
              color="default"
              className="opacity-40"
              value={props.id}
              id={"checkbox-id-" + props.id}
              onChange={checkBoxFuntion}
            />
          </div>
          <div
            contentEditable="true"
            suppressContentEditableWarning={true}
            className="taskText focus-visible:outline-none"
          >
            {props.data}
          </div>
        </div>
        <div
          onClick={deleteTask}
          className={"cursor-pointer DeleteOutlineIcon-class"}
        >
          <DeleteOutlineIcon />
        </div>
      </div>
    </div>
  );
}
