function getChartData(data) {
    return {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{ label: "total", color: "info", data }]
    }
}

export default getChartData