import React from "react";

export const INITIAL_STATE_CREATE_ORDER = {
  categoryListName: [],
  dentistName: "",
  dentistNameError: "",
  gender: "",
  note: "",
  openCardOrder: false,
  patientName: "",
  patientNameError: "",
  patientPhoneError: "",
  phoneNumber: "",
  productListName: [],
  selectedProduct: {},
  selectedTeethPosition: 0,
  sharedInfo: {},
  shoppingCart: [],
  toothPositionError: "",
  previousSelectedTeethPosition: 0
};

const handleSetField = (state, field, value) => ({...state, [field]: value});

const handleSetErrors = (state, errors) => ({
  ...state,
  dentistNameError: errors.dentistNameError,
  patientNameError: errors.patientNameError,
  patientPhoneError: errors.phoneNumberError,
  toothPositionError: errors.toothPositionError,
});

const handleAddToCart = (state, payload) => {
  const {sharedInfo, ...shoppingCart} = payload;
  return {
    ...state,
    shoppingCart: [shoppingCart, ...state.shoppingCart],
    sharedInfo: sharedInfo,
    selectedTeethPosition: 0,
  };
};

export const CREATE_ORDER_ACTIONS = {
  setField: "setField",
  setErrors: "setErrors",
  addToCart: "addToCart",
};

export const createOrderReducer = (state, action) => {
  switch (action.type) {
    case CREATE_ORDER_ACTIONS.setField:
      return handleSetField(state, action.field, action.value);
    case CREATE_ORDER_ACTIONS.setErrors:
      return handleSetErrors(state, action.errors);
    case CREATE_ORDER_ACTIONS.addToCart:
      return handleAddToCart(state, action.payload);
    default:
      return state;
  }
};
