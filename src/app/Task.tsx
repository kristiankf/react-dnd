import React from "react";
import { Task as TaskType } from "./initial-data";
import { Draggable } from "@hello-pangea/dnd";

const Task = ({ task, index }: { task: TaskType; index: number }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`border p-2 mb-2 rounded bg-white transition-colors ${
            snapshot.isDragging ? "bg-green-300" : "bg-white"
          }`}
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
