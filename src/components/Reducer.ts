import { IState } from './GameContext';

const GameReducer = (state: IState, action: any) => {
  switch (action.type) {
    case 'CHECK':
      return { ...state, checked: action.payload };
    case 'UNCHECK':
      const elements = document.getElementsByClassName('clicked-square');
      if (elements && elements[0]) {
        elements[0].classList.remove('clicked-square');
      }
      return { ...state, checked: false };
    default:
      throw new Error();
  }
};

export default GameReducer;
