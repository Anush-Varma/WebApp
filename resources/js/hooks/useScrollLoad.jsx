import {useState, useEffect} from "react";

const useScrollLoad = ({url, initialData=[], limit=10}) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(initialData);

    const onScroll = e => {
        const threshold = 30;
        const scrollTop = e.target.scrollTop;
        const clientHeight = e.target.clientHeight;
        const scrollHeight = e.target.scrollHeight;

        if(clientHeight + scrollTop >= scrollHeight - threshold) {
            loadData()
        }
    }

    const loadData = async () => {
        if(!loading) {
            setLoading(true);

            const skip = data.length;

            const response = await fetch(`${url}?skip=${skip}&limit=${limit}`);
            const json = await response.json()
            
            setData(data => [...data, ...json.posts])
        }
    }

    useEffect(() => {
        setLoading(false);
    }, [data])

    return {
        loading,
        setLoading,
        data,
        setData,
        onScroll,
        loadData
    }
}

export default useScrollLoad;