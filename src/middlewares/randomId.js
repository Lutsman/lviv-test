export const randomId = store => next => action => {
    if (!action.generateId) return next(action);
    next({
        ...action,
        randomId: (Date.now() + Math.random()).toString(),
    })
};
