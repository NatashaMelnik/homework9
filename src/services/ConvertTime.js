function ConvertTime(strOffset) {
    let now = new Date();

    let dateParam = {
        tempHr: now.getHours(),
        tempMn: now.getMinutes()
    };

    let dateParse = {
        hoursParse: parseInt(strOffset.substring(1, 3)),
        minParse: parseInt(strOffset.substring(4, 6))
    };

    let condition = (strOffset[0] === "+") ? true : false;

    dateParam.tempHr = condition ? dateParam.tempHr + dateParse.hoursParse : dateParam.tempHr - dateParse.hoursParse;
    dateParam.tempMn = condition ? dateParam.tempMn + dateParse.minParse : dateParam.tempMn - dateParse.minParse;

    now.setHours(dateParam.tempHr);
    now.setMinutes(dateParam.tempMn);

    return now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
}

export default ConvertTime