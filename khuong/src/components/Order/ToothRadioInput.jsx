import React from "react";
import {CREATE_ORDER_ACTIONS} from "../../reducers/Orders/CreateReducer";

export default function ToothRadioInput({dispatch}) {
  const toothPositions = [
    {id: 8, label: "1-8", img: "r1.png"},
    {id: 32, label: "4-8", img: "r32.png"},
    {id: 7, label: "1-7", img: "r2.png"},
    {id: 31, label: "4-7", img: "r31.png"},
    {id: 6, label: "1-6", img: "r3.png"},
    {id: 30, label: "4-6", img: "r30.png"},
    {id: 5, label: "1-5", img: "r4.png"},
    {id: 29, label: "4-5", img: "r29.png"},
    {id: 4, label: "1-4", img: "r5.png"},
    {id: 28, label: "4-4", img: "r28.png"},
    {id: 3, label: "1-3", img: "r6.png"},
    {id: 27, label: "4-3", img: "r27.png"},
    {id: 2, label: "1-2", img: "r7.png"},
    {id: 26, label: "4-2", img: "r26.png"},
    {id: 1, label: "1-1", img: "r8.png"},
    {id: 25, label: "4-1", img: "r25.png"},
    {id: 9, label: "2-1", img: "r9.png"},
    {id: 17, label: "3-1", img: "r24.png"},
    {id: 10, label: "2-2", img: "r10.png"},
    {id: 18, label: "3-2", img: "r23.png"},
    {id: 11, label: "2-3", img: "r11.png"},
    {id: 19, label: "3-3", img: "r22.png"},
    {id: 12, label: "2-4", img: "r12.png"},
    {id: 20, label: "3-4", img: "r21.png"},
    {id: 13, label: "2-5", img: "r13.png"},
    {id: 21, label: "3-5", img: "r20.png"},
    {id: 14, label: "2-6", img: "r14.png"},
    {id: 22, label: "3-6", img: "r19.png"},
    {id: 15, label: "2-7", img: "r15.png"},
    {id: 23, label: "3-7", img: "r18.png"},
    {id: 16, label: "2-8", img: "r16.png"},
    {id: 24, label: "3-8", img: "r17.png"},
  ];

  const handleSelectTeethRadioInput = (value) => {
    console.log(value)
    dispatch({
      type: CREATE_ORDER_ACTIONS.setField,
      field: "selectedTeethPosition",
      value,
    });
    dispatch({
      type: CREATE_ORDER_ACTIONS.setField,
      field: "previousSelectedTeethPosition",
      value,
    });
  };

  return (
    <div className="grid grid-rows-2 grid-flow-col gap-4 text-center">
      {toothPositions.map((position) => (
        <div key={position.id}>
          <img
            src={`./imgMenu/${position.img}`}
            className="max-w-2rem"
            alt={position.label}
          />
          <p className="text-base">{position.label}</p>
          <input
            type="radio"
            id={position.id}
            name="tooth-position"
            className="radio checkbox-xs checkbox-info"
            value={position.id}
            onChange={() => handleSelectTeethRadioInput(position.id)}
          />
        </div>
      ))}
    </div>
  );
}
