import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  CHANGE_SERVICE_FIELD,
  SET_EDIT_SERVICE_FIELD,
  RESET_EDIT_SERVICE_FIELD,
  RESET_SERVICE_FIELD
 } from './actionTypes';

export function addService(name, price) {
  return {type: ADD_SERVICE, payload: {name, price}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function setEditServiceField() {
  return {type: SET_EDIT_SERVICE_FIELD}
}

export function resetEditServiceField() {
  return {type: RESET_EDIT_SERVICE_FIELD}
}

export function resetServiceField() {
  return {type: RESET_SERVICE_FIELD}
}
