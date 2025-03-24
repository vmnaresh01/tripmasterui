
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FSMNOBKL.js"
    ],
    "route": "/features"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZYSVHVLE.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AFTUSH4Y.js"
    ],
    "route": "/pricing"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6GPLZX7Z.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/signup"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4434, hash: '2b0701326a2f25d28289e0712cc2922bf24aa34a302f32ab7dbcb4ac97f378eb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1060, hash: 'f2d2e857c669863994687ca2690d028ddd53a99aec90a1e561272f007bec4651', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'features/index.html': {size: 11175, hash: 'c6311b0a576e4c914166aaae27acb54049b4f47e571099c33e07fb96342e0a88', text: () => import('./assets-chunks/features_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 13141, hash: 'f7feb49619d55b11a55895041da39fe83bb81efb489ac298301df25c94cb4dc0', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 11918, hash: 'fb57d16d15637d9f9248bb7eabdffb02bf2de9614ee6c50df0702311a09db4ae', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 13616, hash: '62029500781b8993989b0d1d245cf4350eb2a33332c8b4353ede6270afb966b9', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'index.html': {size: 14116, hash: '8639221b7219c5f6581b5b99a6e9f0ef8e3d7de784afb1e069c1b44fecb4fc71', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-2GOTBU2L.css': {size: 14164, hash: 'Jvrou2q/OgU', text: () => import('./assets-chunks/styles-2GOTBU2L_css.mjs').then(m => m.default)}
  },
};
