export const isEmptyObj = obj => {
    for(const [, value] of Object.entries(obj)) {
        if (value) return false;
    }

    return true;
};
