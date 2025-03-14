import Footer from "~/layouts/components/Footer";
import Header from "~/layouts/components/Header";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;