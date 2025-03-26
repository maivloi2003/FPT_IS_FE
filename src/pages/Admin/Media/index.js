import { useState } from "react";

function Media() {
    const [mediaFiles, setMediaFiles] = useState([
        { id: 1, name: "Ảnh 1", type: "image", url: "https://via.placeholder.com/150" },
        { id: 2, name: "Ảnh 2", type: "image", url: "https://via.placeholder.com/150" },
        { id: 3, name: "Video 1", type: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    ]);

    const handleUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const url = URL.createObjectURL(file);
        const newFile = {
            id: mediaFiles.length + 1,
            name: file.name,
            type: file.type.startsWith("image") ? "image" : "video",
            url: url,
        };

        setMediaFiles([...mediaFiles, newFile]);
    };

    const handleDelete = (id) => {
        setMediaFiles(mediaFiles.filter(file => file.id !== id));
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Quản lý Media</h2>

            {/* Upload Media */}
            <div className="mb-3">
                <input type="file" className="form-control" onChange={handleUpload} />
            </div>

            {/* Danh sách media */}
            <div className="row">
                {mediaFiles.map((file) => (
                    <div className="col-md-3 mb-3" key={file.id}>
                        <div className="card">
                            {file.type === "image" ? (
                                <img src={file.url} className="card-img-top" alt={file.name} />
                            ) : (
                                <video controls className="card-img-top">
                                    <source src={file.url} type="video/mp4" />
                                    Trình duyệt của bạn không hỗ trợ video.
                                </video>
                            )}
                            <div className="card-body text-center">
                                <p className="card-text">{file.name}</p>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(file.id)}>
                                    Xóa
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Media;
