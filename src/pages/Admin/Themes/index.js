import { useContext } from "react";
import images from "~/assets/images";
import { LayoutContext } from "~/context/LayoutContext";

const themesData = [
    { id: 1, name: "Giao diện 1", image: images.layout1 },
    { id: 2, name: "Giao diện 2", image: images.layout2 },
    { id: 3, name: "Giao diện 3", image: images.layout3 },
];

function Themes() {
    const { selectedLayout, setSelectedLayout } = useContext(LayoutContext);

    const handleSelectTheme = (layout) => {
        setSelectedLayout(`layout${layout.id}`);
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Chọn Giao Diện Website</h2>

            <div className="row">
                {themesData.map((theme) => {
                    const isActive = selectedLayout === `layout${theme.id}`;
                    return (
                        <div className="col-md-4" key={theme.id}>
                            <div className="card">
                                <img src={theme.image} className="card-img-top" alt={theme.name} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{theme.name}</h5>
                                    <button className={`btn ${isActive ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleSelectTheme(theme)}>
                                        {isActive ? 'Đang Chọn' : 'Chọn'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }

                )}
            </div>
        </div>
    );
}

export default Themes;
