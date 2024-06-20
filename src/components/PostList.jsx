import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
const PostList = () => {
    const [posts, setPosts] = useState([]);
    const { threadId } = useParams();
    useEffect(() => {
        const getPost = async () => {

            try {
                //const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`);
                const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`);
                const data = await response.json();
                // データが配列であることを確認
                if (Array.isArray(data.posts)) {
                    setPosts(data.posts);
                } else {
                    console.error('Expected data to be an array:', data);
                }
               
            } catch (error) {
                console.error('error', error);
            }
        }
        getPost();
    }, [threadId]);
    return (
        <>
            <h3 className='title'>投稿一覧</h3>
            <table className='list'>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.post}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default PostList
