calculateDifferenceBetweenHours = (startTime, endTime) => {
    const times = coversionTimeChainToTimeNumber(startTime, endTime);
    let minutes = (times.endofworktime - times.startofworktime) / 1000 / 60;
    const hours = Math.floor(minutes / 60);
    minutes = Math.floor(minutes % 60);

    return hours + '.' + ( (minutes < 10) ? '0' + minutes : minutes );
}

coversionTimeChainToTimeNumber = (startTime, endTime) => {
    const initialDate = new Date();
    const arrInitTime = startTime.split(':');
    initialDate.setHours(arrInitTime[0]);
    initialDate.setMinutes(arrInitTime[1]);

    const finalDate = new Date();
    const arrFinalDate = endTime.split(':');
    finalDate.setHours(arrFinalDate[0]);
    finalDate.setMinutes(arrFinalDate[1]);

    const startofworktime = initialDate.getTime();
    const endofworktime = finalDate.getTime();

    return { startofworktime, endofworktime };
}

module.exports = {
    calculateDifferenceBetweenHours,
    coversionTimeChainToTimeNumber
};