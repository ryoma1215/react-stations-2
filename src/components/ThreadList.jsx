import { Link } from "react-router-dom"
import "./ThreadList.css"

const ThreadList = ({threads}) => {

    return (
        <>
            <h3 className='title'>新着スレッド</h3>   
            <table className='list'>
                <tbody>
                {threads.map((thread) => (
                    <tr key={thread.id}>
                        <td>
                        <Link to={`/threads/${thread.id}`}>{thread.title}</Link>
                            </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default ThreadList
