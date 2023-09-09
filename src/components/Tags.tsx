import './Tags.css';
import {DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';

const Tags = () => {
  const [elements, setElements] = useState([
    {
      id: 'HTML',
      class: 'tag text-clearWhite bg-mainColor',
      name: 'HTML'
    },
    {
      id: 'CSS',
      class: 'tag text-lightBlack bg-secondaryColor',
      name: 'CSS'
    },
    {
      id: 'JavaScript',
      class: 'tag text-clearWhite bg-mainColor',
      name: 'JavaScript'
    },
    {
      id: 'TypeScript',
      class: 'tag text-clearWhite bg-lightBlack',
      name: 'TypeScript'
    },
    {
      id: 'Bootstrap',
      class: 'tag text-clearWhite bg-darkBlue',
      name: 'Bootstrap'
    },
    {
      id: 'React',
      class: 'tag text-clearWhite bg-lightBlack',
      name: 'React'
    },
    {
      id: 'NodeJS',
      class: 'tag text-lightBlack bg-lightGray',
      name: 'NodeJS'
    },
    {
      id: 'UX/UI Design',
      class: 'tag text-clearWhite bg-lightBlack',
      name: 'UX/UI Design'
    },
    {
      id: 'SASS',
      class: 'tag text-clearWhite bg-mainColor',
      name: 'SASS'
    },
    {
      id: 'Vite',
      class: 'tag text-clearWhite bg-darkBlue',
      name: 'Vite'
    },
    {
      id: 'Git',
      class: 'tag text-lightBlack bg-secondaryColor',
      name: 'Git'
    },
    {
      id: 'Figma',
      class: 'tag text-clearWhite bg-darkBlue',
      name: 'Figma'
    },
    {
      id: 'Jest',
      class: 'tag text-lightBlack bg-lightGray',
      name: 'Jest'
    },
    {
      id: 'Vitest',
      class: 'tag text-clearWhite bg-mainColor',
      name: 'Vitest'
    },
    {
      id: 'SQL',
      class: 'tag text-clearWhite bg-darkBlue',
      name: 'SQL'
    },
    {
      id: 'MySQL',
      class: 'tag text-lightBlack bg-lightGray',
      name: 'MySQL'
    },
    {
      id: 'Bilingual',
      class: 'tag text-lightBlack bg-secondaryColor',
      name: 'Bilingual'
    },
  ]);
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedElements = [...elements];
    const [movedElement] = updatedElements.splice(result.source.index, 1);
    updatedElements.splice(result.destination.index, 0, movedElement);

    setElements(updatedElements);
  };

  return (
    <div className="tag-container">
      <DragDropContext onDragEnd={onDragEnd}>
        {elements.map((element, index) => (
          <Droppable key={element.id} droppableId={element.id} direction="horizontal">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="d-flex flex-wrap zone"
              >
                <Draggable key={element.id} draggableId={element.id} index={index}>
                  {(provided) => (
                    <div
                      className={element.class}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {element.name}
                    </div>
                  )}
                </Draggable>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
};

export default Tags;