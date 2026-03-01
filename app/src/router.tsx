import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import HomePage from './pages/HomePage'
import TheBecomingPage from './pages/TheBecomingPage'
import TheForestPage from './pages/TheForestPage'
import TreeDetailPage from './pages/TreeDetailPage'
import TheExperiencePage from './pages/TheExperiencePage'
import TrailChapterPage from './pages/TrailChapterPage'
import RecipeDetailPage from './pages/RecipeDetailPage'
import ComePage from './pages/ComePage'
import NotFoundPage from './pages/NotFoundPage'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'the-becoming', element: <TheBecomingPage /> },
        { path: 'the-forest', element: <TheForestPage /> },
        { path: 'the-forest/:treeId', element: <TreeDetailPage /> },
        { path: 'the-experience', element: <TheExperiencePage /> },
        { path: 'the-experience/trail/:chapterId', element: <TrailChapterPage /> },
        { path: 'the-experience/recipes/:recipeId', element: <RecipeDetailPage /> },
        { path: 'come', element: <ComePage /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL.replace(/\/$/, ''),
  },
)
