import {atom, selectorFamily} from 'recoil';
import initialState from "../initialState";

export const dataState = atom({
  key: 'dataState',
  default: initialState.data,
});

export const typeState = atom({
  key: 'typeState',
  default: {},
});

export const layoutsState = atom({
  key: 'layoutsState',
  default: initialState.layouts,
});

export const breakpointState = atom({
  key: 'breakpointState',
  default: initialState.breakpoint,
});

export const chartLayoutState = atom({
  key: 'chartLayoutStates',
  default: initialState.chartLayout,
});

export const breakpointStates = atom({
  key: 'breakpointStateRe',
  default: initialState.breakpoints,
});

export const setType = selectorFamily({
  key: 'setTypeSelector',
  get: (root) => ({get}) => get(typeState)[root] || '',
  set: (root) => ({set}, newValue) => {
    set(typeState, (prevTypes) => ({
      ...prevTypes,
      [root]: newValue
    }));
  }
});

