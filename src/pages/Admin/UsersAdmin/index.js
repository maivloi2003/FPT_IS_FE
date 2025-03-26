import { useState } from "react";

const dummyUsers = [
    { id: 1, name: "Nguyễn Văn A", email: "nguyenvana@gmail.com" },
    { id: 2, name: "Trần Thị B", email: "tranthib@gmail.com" },
    { id: 3, name: "Lê Văn C", email: "levanc@gmail.com" },
];

function UsersAdmin() {
    const [users, setUsers] = useState(dummyUsers);
    const [search, setSearch] = useState("");

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <h2 className="text-center">Quản lý người dùng</h2>

            {/* Tìm kiếm */}
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Tìm kiếm theo tên hoặc email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Bảng danh sách người dùng */}
            <table className="table table-bordered">
                <thead className="table-light">
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.length > 0 ? (
                        filteredUsers.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">Không tìm thấy người dùng</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default UsersAdmin;
