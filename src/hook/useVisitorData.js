import { useState, useEffect } from "react";
import visitor from "./visitor.json";


function useVisitorData(year) {
    const now = new Date();
    const [data, setData] = useState(visitor[now.getFullYear()]);
    useEffect(() => {
        setData(visitor[year]);
    }, [year])

    return { data }
}

export default useVisitorData