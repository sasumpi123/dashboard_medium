import { useState, useEffect } from "react";
import visitor from "./visitor.json";



function getLastYearMonthData(year, month) {
    const isJanuary = month === 0
    let data;
    if (isJanuary) {
        const haveData = visitor[year - 1] !== undefined;
        if (haveData) {
            [, , , , , , , , , , , data] = visitor[year - 1]
        } else {
            data = 0
        }
    } else {
        data = visitor[year][month - 1]
    }
    return data
}

function useVisitorData(year, month) {
    const now = new Date();

    const yearVisitor = visitor[now.getFullYear()];
    const thisMonth = now.getMonth();

    const [totalVisitor, setTotalVisitor] = useState(yearVisitor);
    const [targetMonthVisitor, setTargetMonthVisitor] = useState(visitor[thisMonth]);
    const [lastMonthVisitor, setLastMonthVisitor] = useState(getLastYearMonthData(year, thisMonth));

    useEffect(() => {
        setTotalVisitor(visitor[year]);
        setTargetMonthVisitor(visitor[year][month]);
        setLastMonthVisitor(getLastYearMonthData(year, month))
    }, [year])

    return { totalVisitor, targetMonthVisitor, lastMonthVisitor }
}

export default useVisitorData