import { useState } from "react";

const initialPosts = [
    { id: 1, title: "Bài viết đầu tiên", content: "Đây là nội dung của bài viết đầu tiên..." },
    { id: 2, title: "Hướng dẫn ReactJS", content: "ReactJS là một thư viện JavaScript mạnh mẽ..." },
];

function PostsAdmin() {
    const [posts, setPosts] = useState(initialPosts);
    const [newPost, setNewPost] = useState({ title: "", content: "" });

    const handleAddPost = () => {
        if (!newPost.title || !newPost.content) {
            alert("Vui lòng nhập tiêu đề và nội dung!");
            return;
        }
        setPosts([...posts, { id: posts.length + 1, ...newPost }]);
        setNewPost({ title: "", content: "" });
    };

    const handleDeletePost = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Quản lý Bài Viết</h2>

            {/* Form thêm bài viết */}
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Tiêu đề bài viết"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                />
                <textarea
                    className="form-control mb-2"
                    placeholder="Nội dung bài viết"
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    rows={3}
                />
                <button className="btn btn-primary w-100" onClick={handleAddPost}>Thêm Bài Viết</button>
            </div>

            {/* Danh sách bài viết */}
            <table className="table table-bordered">
                <thead className="table-light">
                    <tr>
                        <th>ID</th>
                        <th>Tiêu đề</th>
                        <th>Nội dung</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.content.length > 50 ? post.content.slice(0, 50) + "..." : post.content}</td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDeletePost(post.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PostsAdmin;
