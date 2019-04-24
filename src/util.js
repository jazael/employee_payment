calculateDifferenceBetweenHours = (startTime, endTime) => {
    const initialDate = new Date(0, startTime.split(':')[0]);
    const finalDate = new Date(endTime.split(':')[1]);
    console.log(initialDate)
    console.log(finalDate)
    let minutes = (initialDate - finalDate) / 1000 / 60;
    const hours = Math.floor(minutes / 60);
    minutes = minutes % 60;

    console.log(hours)
    console.log(minutes)

    return hours + '.' + minutes;
}

module.exports = calculateDifferenceBetweenHours;