import { useState, useEffect } from "react";
import newUser from "./newUser.json";
import visitor from "./visitor.json";

const NOW = new Date();
const THISMONTH = NOW.getMonth();

function getLastYearMonthData(year, month, userData) {
    const isJanuary = month === 0
    let data;
    const tempData = userData;
    if (tempData[year] === undefined) {
        tempData[year] = Array.from({ length: 12 }, () => 0)
        tempData[year - 1] = Array.from({ length: 12 }, () => 0)
    }
    if (isJanuary) {
        const haveData = tempData[year - 1] !== undefined;
        if (haveData) {
            [, , , , , , , , , , , data] = tempData[year - 1];
        } else {
            data = 0;
        }
    } else {
        data = tempData[year][month - 1];
    }
    return data;
}

function useVisitorData(year, month) {
    const [targetMonthVisitor, setTargetMonthVisitor] = useState(visitor[THISMONTH]);
    const [lastMonthVisitor, setLastMonthVisitor] = useState(getLastYearMonthData(year, THISMONTH, visitor));

    useEffect(() => {
        setTargetMonthVisitor(visitor[year][month]);
        setLastMonthVisitor(getLastYearMonthData(year, month, visitor))
    }, [year, month])

    return { targetMonthVisitor, lastMonthVisitor }
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

function useYearVisitorData(year) {
    const targetYearVistor = visitor[NOW.getFullYear()];

    const [yearVisitor, setYearVisitor] = useState(targetYearVistor);
    if (visitor[year] === undefined) {
        return Array.from({ length: 12 }, () => 0)
    }
    useEffect(() => {
        setYearVisitor(visitor[year]);
    }, [year])
    return { yearVisitor }
}

export { useVisitorData, useNewUserData, useYearVisitorData }