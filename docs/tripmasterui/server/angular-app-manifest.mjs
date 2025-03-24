
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
    'index.csr.html': {size: 3926, hash: 'f96240fc8ee1a31434a2d8e7e0c7e289d0fcc3742b59888992c2bcf9c1b2ae83', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1060, hash: '84f01c8e5dcf3418bead0c6dbe7eb69e30b78a084fd4769fe082c8134f9943be', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 13578, hash: 'dbab593ff710e0f7c57047de019dae7d89630137daeb0851f2364771384ed697', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'features/index.html': {size: 10637, hash: '945b0118d3f553af80abc4c520a0f6722f4f74356b552f8dcfcbf4b4499fd330', text: () => import('./assets-chunks/features_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 11380, hash: '4ee01c3bd4b419dba2caf438fba2349f804eabcf80b13c38b64a7da5d8fe6400', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 12603, hash: '7c92d5b9e2e190da78bcea5413f05d9ea8fb20ab2ceca5439f485c40e3abc5b5', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 13078, hash: '7855f17ebab55975fa3c990d058d9c5201be0389c22cfa4ffda21aee2d0fbf68', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'styles-FM6I5GCT.css': {size: 12726, hash: 'TV0fYIwNz2w', text: () => import('./assets-chunks/styles-FM6I5GCT_css.mjs').then(m => m.default)}
  },
};
