import React, { useEffect, useState } from 'react'
import "./ThreadList.css"

const ThreadList = () => {
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        const fetchThreads = async () => {
            try {
                const response = await fetch("https://railway.bulletinboard.techtrain.dev/threads");
                const data = await response.json();
                setThreads(data);

            } catch (error) {
                console.error('error', error);
            }
        }
        fetchThreads();
    }, []);

    return (
        <>
            <h3 className='title'>新着スレッド</h3>   
            <table className='list'>
                <tbody>
                {threads.map((thread) => (
                    <tr key={thread.id}>
                        <td>{thread.title}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default ThreadList
