import { createBrowserRouter, Navigate } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import HomePage from './pages/HomePage'
import TheForestPage from './pages/TheForestPage'
import TreeDetailPage from './pages/TreeDetailPage'
import YourDayPage from './pages/YourDayPage'
import ReviewsPage from './pages/ReviewsPage'
import PhilosophyPage from './pages/PhilosophyPage'
import TeamPage from './pages/TeamPage'
import GalleryPage from './pages/GalleryPage'
import NotFoundPage from './pages/NotFoundPage'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'the-forest', element: <TheForestPage /> },
        { path: 'the-forest/:treeId', element: <TreeDetailPage /> },
        { path: 'the-experience', element: <YourDayPage /> },
        { path: 'the-experience/trail/*', element: <Navigate to="/the-experience" replace /> },
        { path: 'the-experience/recipes/*', element: <Navigate to="/the-experience" replace /> },
        { path: 'philosophy', element: <PhilosophyPage /> },
        { path: 'the-wada', element: <Navigate to="/philosophy" replace /> },
        { path: 'meditation-cave', element: <Navigate to="/philosophy" replace /> },
        { path: 'team', element: <TeamPage /> },
        { path: 'visionaries', element: <Navigate to="/team" replace /> },
        { path: 'reviews', element: <ReviewsPage /> },
        { path: 'gallery', element: <GalleryPage /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL.replace(/\/$/, ''),
  },
)
