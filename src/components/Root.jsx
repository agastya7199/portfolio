import { Outlet } from 'react-router';
import MainNavigation from './MainNavigation.jsx';
import ScrollToTop from './ScrollToTop.jsx';

export default function Root() {
    return (
        <div className="content">
            <MainNavigation />
            <main>
                <ScrollToTop />
                <Outlet />
            </main>
        </div>
    );
}
