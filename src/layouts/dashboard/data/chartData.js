function getDefaultChartData(data) {
    return {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{ label: "visitor", color: "info", data }]
    }
}

export default getDefaultChartData 