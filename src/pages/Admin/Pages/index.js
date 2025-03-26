import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialPages = [
    { id: 1, title: "Trang chủ", slug: "/" },
    { id: 2, title: "Chi Tiết", slug: "/:id_post" },
    { id: 3, title: "Liên Hệ", slug: "/contact" },
];

function Pages() {
    const [pages, setPages] = useState(initialPages);
    const [newPage, setNewPage] = useState({ title: "", slug: "" });
    const navigate = useNavigate();

    const handleAddPage = () => {
        if (!newPage.title || !newPage.slug) {
            alert("Vui lòng nhập tiêu đề và đường dẫn!");
            return;
        }

        setPages([...pages, { id: pages.length + 1, ...newPage }]);
        setNewPage({ title: "", slug: "" });
    };

    const handleDeletePage = (id) => {
        setPages(pages.filter(page => page.id !== id));
    };

    const handleUpdatePage = (slug) => {
        navigate(`${slug}?true`)
    }

    return (
        <div className="container mt-4">
            <h2 contentEditable className="text-center">Quản lý Trang</h2>

            {/* Form thêm trang */}
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Tiêu đề trang"
                    value={newPage.title}
                    onChange={(e) => setNewPage({ ...newPage, title: e.target.value })}
                />
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Đường dẫn (slug)"
                    value={newPage.slug}
                    onChange={(e) => setNewPage({ ...newPage, slug: e.target.value })}
                />
                <button className="btn btn-primary w-100" onClick={handleAddPage}>Thêm Trang</button>
            </div>

            {/* Danh sách các trang */}
            <table className="table table-bordered">
                <thead className="table-light">
                    <tr>
                        <th>ID</th>
                        <th>Tiêu đề</th>
                        <th>Slug</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {pages.map(page => (
                        <tr key={page.id}>
                            <td>{page.id}</td>
                            <td>{page.title}</td>
                            <td>{page.slug}</td>
                            <td>
                                <button className="btn btn-warning btn-sm mx-3" onClick={() => handleUpdatePage(page.slug)}>Update</button>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDeletePage(page.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Pages;
