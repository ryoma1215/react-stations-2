import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPosts] = useState('');
    const { threadId } = useParams();
    useEffect(() => {
        const getPost = async () => {

            try {
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

    const handleInputChange = (event) => {
        setNewPosts(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ post: newPost }),
            });
            const data = await response.json();
            setPosts([...posts, data]);

        } catch (error) {
            console.error('error', error);
        }
    }


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
            <form onSubmit={handleSubmit}>
                <input className="inputfield"
                    type='text' placeholder='投稿しよう!!'
                    value={newPost}
                    onChange={handleInputChange}>
                </input>
                <button className="button" type="submit">追加</button>
                <Link to="/">Topに戻る</Link>
            </form>


        </>
    )
}

export default PostList
