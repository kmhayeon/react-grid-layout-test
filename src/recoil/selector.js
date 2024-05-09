import { selectorFamily, selector } from 'recoil';
import { appState } from '../recoil/atom';


export const updateData = selectorFamily({
  key: 'updateData',
  get: (param) => ({get}) => {
    return get(appState).data[param.key][param.item];
  },
  set: (param) => ({set}, newValue) => {
    set(appState, (prevState) => ({
      ...prevState,
      data: {
        ...prevState.data,
        [param.key]: {
          ...prevState.data[param.key],
          [param.item]: newValue
        }
      }
    }));
  }
});

export const updateLayout = selectorFamily({
  key: 'updateLayout',
  set: (param) => ({set}, newValue) => {
    set(appState, (prevState) => {
      const index = prevState.layouts[param.breakpoint].findIndex(({ i }) => i === param.root);
      if (index === -1) return prevState;
      
      const layouts = prevState.layouts[param.breakpoint];
      return {
        ...prevState,
        layouts: {
          ...prevState.layouts,
          [param.breakpoint]: [
            ...layouts.slice(0, index),
            newValue,
            ...layouts.slice(index + 1)
          ]
        }
      };
    });
  }
});

export const updateBreakpoint = selector({
  key: 'updateBreakpoint',
  set: ({set}, newValue) => {
    set(appState, (prevState) => ({
      ...prevState,
      breakpoint: newValue
    }));
  }
});
