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
      class: 'tag text-clearWhite bg-mainColor',
      name: 'CSS'
    },
    {
      id: 'JavaScript',
      class: 'tag text-clearWhite bg-mainColor',
      name: 'JavaScript'
    },
    {
      id: 'TypeScript',
      class: 'tag text-clearWhite bg-mainColor',
      name: 'TypeScript'
    },
    {
      id: 'Bootstrap',
      class: 'tag text-lightBlack bg-secondaryColor',
      name: 'Bootstrap'
    },
    {
      id: 'Sass',
      class: 'tag text-lightBlack bg-secondaryColor',
      name: 'Sass'
    },
    {
      id: 'UX/UI Design',
      class: 'tag text-lightBlack bg-secondaryColor',
      name: 'UX/UI Design'
    },
    {
      id: 'Figma',
      class: 'tag text-lightBlack bg-secondaryColor',
      name: 'Figma'
    },
    {
      id: 'Node JS',
      class: 'tag text-lightBlack bg-lightGray',
      name: 'Node JS'
    },
    {
      id: 'React',
      class: 'tag text-lightBlack bg-lightGray',
      name: 'React'
    },
    {
      id: 'Express',
      class: 'tag text-lightBlack bg-lightGray',
      name: 'Express'
    },
    {
      id: 'MySQL/SQL',
      class: 'tag text-lightBlack bg-lightGray',
      name: 'MySQL/SQL'
    },
    {
      id: 'Jira',
      class: 'tag text-clearWhite bg-darkBlue',
      name: 'Jira'
    },
    {
      id: 'APIs',
      class: 'tag text-clearWhite bg-darkBlue',
      name: 'APIs'
    },
    {
      id: 'Vite',
      class: 'tag text-clearWhite bg-darkBlue',
      name: 'Vite'
    },
    {
      id: 'Git',
      class: 'tag text-clearWhite bg-darkBlue',
      name: 'Git'
    },
    {
      id: 'Jest',
      class: 'tag text-clearWhite bg-darkBlue',
      name: 'Jest'
    },
    {
      id: 'Heroku',
      class: 'tag text-clearWhite bg-lightBlack',
      name: 'Heroku'
    },
    {
      id: 'Loom',
      class: 'tag text-clearWhite bg-lightBlack',
      name: 'Loom'
    },
    {
      id: 'Bilingual EN/ES',
      class: 'tag text-clearWhite bg-lightBlack',
      name: 'Bilingual EN/ES'
    },
  ]);
  const onDragEnd = (result: any) => {
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