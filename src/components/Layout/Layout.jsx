import { Link, Header, Section } from "components/Layout/Layout.styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "components/Loader/Loader";

const Layout = () => {
    return (
        <Section>
            <Header>
                <Link to="/" end>Home</Link>
                <Link to="/movies">Movies</Link>
            </Header>
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </Section>
    );
}

export default Layout;