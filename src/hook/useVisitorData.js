import { useState, useEffect } from "react";
import newUser from "./newUser.json";
import visitor from "./visitor.json";

const NOW = new Date();
const THISMONTH = NOW.getMonth();


function getLastYearMonthData(year, month, userData) {
    const isJanuary = month === 0
    let data;
    if (isJanuary) {
        const haveData = userData[year - 1] !== undefined;
        if (haveData) {
            [, , , , , , , , , , , data] = userData[year - 1];
        } else {
            data = 0;
        }
    } else {
        data = userData[year][month - 1];
    }
    return data;
}

function useVisitorData(year, month) {
    const yearVisitor = visitor[NOW.getFullYear()];

    const [totalVisitor, setTotalVisitor] = useState(yearVisitor);
    const [targetMonthVisitor, setTargetMonthVisitor] = useState(visitor[THISMONTH]);
    const [lastMonthVisitor, setLastMonthVisitor] = useState(getLastYearMonthData(year, THISMONTH, visitor));

    useEffect(() => {
        setTotalVisitor(visitor[year]);
        setTargetMonthVisitor(visitor[year][month]);
        setLastMonthVisitor(getLastYearMonthData(year, month, visitor))
    }, [year, month])

    return { totalVisitor, targetMonthVisitor, lastMonthVisitor }
}

function useNewUserData(year, month) {
    const [targetMonthNewUser, setTargetMonthNewUser] = useState(newUser[THISMONTH]);
    const [lastMonthNewUser, setLastMonthNewUser] = useState(getLastYearMonthData(year, THISMONTH, newUser));

    useEffect(() => {
        setTargetMonthNewUser(newUser[year][month])
        setLastMonthNewUser(getLastYearMonthData(year, month, newUser))
    }, [year, month])

    return { targetMonthNewUser, lastMonthNewUser }
}

export { useVisitorData, useNewUserData }