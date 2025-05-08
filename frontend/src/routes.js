// src/routes.js
import { lazy } from 'react';

export const routes = [
  { path: '/', component: lazy(() => import('./pages/HomePage')) },
  { path: '/console', component: lazy(() => import('./pages/ConsolePage')) },
  { path: '/javascript-basics', component: lazy(() => import('./pages/JavaScriptBasicsPage')) },
  { path: '/about', component: lazy(() => import('./pages/AboutPage')) },
  { path: '/topics', component: lazy(() => import('./pages/TopicsPage')) },
  { path: '/examples', component: lazy(() => import('./pages/ExamplesPage')) },
  { path: '/c-programming', component: lazy(() => import('./pages/CProgrammingPage')) },
  { path: '/functions', component: lazy(() => import('./pages/Functions')) },
  { path: '/java-oops', component: lazy(() => import('./pages/JavaOOPs')) },
  { path: '/python-loops', component: lazy(() => import('./pages/PythonLoops')) },
  { path: '/git-cheat-sheet', component: lazy(() => import('./pages/GitCheatSheet')) },
  { path: '/community', component: lazy(() => import('./pages/communityForum')) },
  { path: '/profile', component: lazy(() => import('./pages/UserProfileForm')) },

];
