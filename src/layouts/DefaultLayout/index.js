import images from "~/assets/images";
import Footer from "~/layouts/components/Footer";
import Header from "~/layouts/components/Header";
import Menu from "~/layouts/components/Menu";

function DefaultLayout({ children }) {
    return (
        <div className="container-fluid p-0">
            <Header logo={images.logo} />
            <Menu />
            <div className="container-xxl">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;