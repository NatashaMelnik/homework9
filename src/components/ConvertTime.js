function ConvertTime(strOffset) {
    let now = new Date();
    let tempHr = now.getHours();
    let tempMn = now.getMinutes();
    if (strOffset[0] === "+") {
        tempHr = tempHr + parseInt(strOffset.substring(1, 3));
        tempMn = tempMn + parseInt(strOffset.substring(4, 6));
    }
    else {
        tempHr = tempHr - parseInt(strOffset.substring(1, 3));
        tempMn = tempMn - parseInt(strOffset.substring(4, 6));
    }
    now.setHours(tempHr);
    now.setMinutes(tempMn);
    return now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
}

export default ConvertTime