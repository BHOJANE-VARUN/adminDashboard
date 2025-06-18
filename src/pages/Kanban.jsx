import React from 'react'
import Header from '../components/Header'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useState } from 'react';
import { kanbanData } from './../data/dummy';

const statuses = ['Open', 'InProgress', 'Testing', 'Review', 'Validate', 'Close'];

function Kanban() {
    const [columns, setColumns] = useState(() =>
    statuses.map((status) => ({
      id: status,
      title: status,
      tasks: kanbanData.filter((item) => item.Status === status),
    }))
  );

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = columns[source.droppableId];
    const destCol = columns[destination.droppableId];

    const sourceTasks = [...sourceCol.tasks];
    const destTasks = [...destCol.tasks];

    const [removed] = sourceTasks.splice(source.index, 1);
    destTasks.splice(destination.index, 0, removed);

    const newColumns = [...columns];
    newColumns[source.droppableId] = { ...sourceCol, tasks: sourceTasks };
    newColumns[destination.droppableId] = { ...destCol, tasks: destTasks };
    setColumns(newColumns);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-[#33373E] rounded-3xl">
      <Header category={"App"} title={"Kanban"}/>
      <div className="flex overflow-x-auto gap-4 p-4">
      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map((col, colIndex) => (
          <Droppable droppableId={colIndex.toString()} key={col.id}>
            {(provided) => (
              <div
                className="bg-gray-100 min-w-[250px] rounded p-2"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2 className="font-bold text-lg mb-2">{col.title}</h2>
                {col.tasks.map((task, taskIndex) => (
                  <Draggable
                    draggableId={task.Id.toString()}
                    index={taskIndex}
                    key={task.Id}
                  >
                    {(provided) => (
                      <div
                        className="bg-white p-3 rounded shadow mb-2"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="font-semibold">{task.Title}</div>
                        <div className="text-sm text-gray-600">
                          {task.Summary}
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
    </div>
  )
}

export default Kanban


