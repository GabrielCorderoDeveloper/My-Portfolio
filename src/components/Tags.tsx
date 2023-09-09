import './Tags.css';
import {DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';

const Tags = () => {
  const [zones, setZones] = useState([
    {
      id: 'zone1',
      elements: [
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
      ]
    },
    {
      id: 'zone2',
      elements: [
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
      ]
    },
    {
      id: 'zone3',
      elements: [
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
      ]
    },
    {
      id: 'zone4',
      elements: [
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
      ]
    },
    {
      id: 'zone5',
      elements: [
        {
          id: 'Bilingual',
          class: 'tag text-lightBlack bg-secondaryColor',
          name: 'Bilingual'
        },
      ]
    },
  ]);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const updatedZones = [...zones];

    // Encuentra la zona de origen y destino
    const sourceZone = updatedZones.find((zone) => zone.id === result.source.droppableId);
    const destZone = updatedZones.find((zone) => zone.id === result.destination.droppableId);

    // Mueve el elemento de la zona de origen a la zona de destino
    const [movedElement] = sourceZone.elements.splice(result.source.index, 1);
    destZone.elements.splice(result.destination.index, 0, movedElement);

    setZones(updatedZones);
  };

  return (
    <div className="tag-container">
      <DragDropContext onDragEnd={onDragEnd}>
        {zones.map((zone) => (
          <Droppable key={zone.id} droppableId={zone.id} direction="horizontal">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="d-flex flex-wrap zone"
              >
                {zone.elements.map(({ id, class: className, name }, index) => (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div
                        className={className}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {name}
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
  );
};

export default Tags;