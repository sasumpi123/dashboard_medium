function getMonthStr(month) {
    const monthStr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthStr[month];
}
function addComma(number) {
    if (number) return number.toLocaleString();
    return number
}

export { getMonthStr, addComma }