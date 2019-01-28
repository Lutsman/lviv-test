export const currentDate = store => next => action => {
    if (!action.generateDate) return next(action);

    next({
        ...action,
        currentDate: new Date().toISOString(),
    });
};
