// helpers for adding and removing items without mutating the parent object

export const insertItem = (array, action, item) =>([
    ...array.slice(0, action.payload.index),
    action.payload[item],
    ...array.slice(action.payload.index)
]);

export const removeItem = (array, action) =>([
    ...array.slice(0, action.payload.index),
    ...array.slice(action.payload.index + 1)
]);
