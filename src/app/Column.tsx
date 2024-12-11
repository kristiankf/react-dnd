import React from "react";
import { Column as ColumnType, Task as TaskType } from "./initial-data";
import Task from "./Task";
import { Draggable, Droppable } from "@hello-pangea/dnd";

interface ColumnProps {
  column: ColumnType;
  tasks: TaskType[];
  index: number;
}
const Column = ({ column, tasks, index }: ColumnProps) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <div
          className="m-2 border rounded w-[220px] flex flex-col"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <h2 {...provided.dragHandleProps} className="p-2 font-bold text-xl">
            {column.title}
          </h2>

          <Droppable droppableId={column.id} type="tasks">
            {(provided, snapshot) => (
              <div
                className={`p-2 transition-colors grow min-h-[100px] ${
                  snapshot.isDraggingOver && "bg-blue-200"
                }`}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
