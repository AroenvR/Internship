export const checkForFalsy = (data) => {
    if (data === undefined || data === null || data[0] === "") return true;
    return false;
}