const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "In progress",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: [],
    },
  },
  //   facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;

export interface Task {
  id: string;
  content: string;
}

export interface Column {
  id: string;
  title: string;
  taskIds: string[]; // Array of task IDs
}

export interface InitialData {
  tasks: {
    [key: string]: Task; // Dynamic key, each task will have a unique string key
  };
  columns: {
    [key: string]: Column; // Dynamic key, each column will have a unique string key
  };
  columnOrder: string[]; // Array of column IDs to facilitate column reordering
}

const initialData2 = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" },
    "task-12": { id: "task-12", content: "Take out the garbage" },
    "task-11": { id: "task-11", content: "Watch my favorite show" },
    "task-10": { id: "task-10", content: "Charge my phone" },
    "task-9": { id: "task-9", content: "Cook dinner" },
    "task-8": { id: "task-8", content: "Take out the garbage" },
    "task-7": { id: "task-7", content: "Watch my favorite show" },
    "task-6": { id: "task-6", content: "Charge my phone" },
    "task-5": { id: "task-5", content: "Cook dinner" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "In progress",
      taskIds: ["task-5", "task-6", "task-7", "task-8"],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: ["task-9", "task-10", "task-11", "task-12"],
    },
  },
  //   facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"],
};
