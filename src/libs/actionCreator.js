'use strict';

// Plain action creators:
export function actionCreator (type, ...argNames) {
    return function (...args) {

      let action = { type };
      argNames.forEach((arg, index) => {
        action[argNames[index]] = args[index];
      });

      return action;
    };
}
