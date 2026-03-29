import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import HomePage from './pages/HomePage'
// TheBecomingPage removed — narrative now lives on landing page
import TheForestPage from './pages/TheForestPage'
import TreeDetailPage from './pages/TreeDetailPage'
import TheExperiencePage from './pages/TheExperiencePage'
import TrailChapterPage from './pages/TrailChapterPage'
import RecipeDetailPage from './pages/RecipeDetailPage'
import ComePage from './pages/ComePage'
import TheWadaPage from './pages/TheWadaPage'
import VisionariesPage from './pages/VisionariesPage'
import MeditationCavePage from './pages/MeditationCavePage'
import NotFoundPage from './pages/NotFoundPage'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        /* The Becoming content now lives on the landing page */
        { path: 'the-forest', element: <TheForestPage /> },
        { path: 'the-forest/:treeId', element: <TreeDetailPage /> },
        { path: 'the-experience', element: <TheExperiencePage /> },
        { path: 'the-experience/trail/:chapterId', element: <TrailChapterPage /> },
        { path: 'the-experience/recipes/:recipeId', element: <RecipeDetailPage /> },
        { path: 'the-wada', element: <TheWadaPage /> },
        { path: 'meditation-cave', element: <MeditationCavePage /> },
        { path: 'visionaries', element: <VisionariesPage /> },
        { path: 'come', element: <ComePage /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL.replace(/\/$/, ''),
  },
)
