import {createBrowserRouter} from 'react-router-dom'

import Home from '../pages/HomePage'
import About from '../pages/aboutPage'
import DashboardPage from '../pages/dashboardPage'
import Exprience from '../pages/expriencePage'
import Projects from '../pages/projects'
import DetailProject from '../pages/projects/_id'
import NotFoundPage from '../pages/404'
import { CertificatedPage } from '../pages/CertificatedPage'
import { BlogsPage } from '../pages/BlogsPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/dashboard',
        element: <DashboardPage/>
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/experience',
        element: <Exprience />
    },
    {
        path: '/myprojects',
        element: <Projects />
    },
    {
        path: '/myprojects/:id',
        element: <DetailProject />
    },
    {
        path: '/certificated',
        element: <CertificatedPage/>
    },
    {
        path: '/blogs',
        element: <BlogsPage/>
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
 ])

export default router