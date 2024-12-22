
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'html_project',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/html_project"
  }
],
  assets: {
    'index.csr.html': {size: 519, hash: '46b03a1178025e4703ab9c2e5c28c7ed564efbba682488253fe25d51762c06c3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1032, hash: '66b5e2b163c2e5671aa26449f886350e8ed4df7186e69f9a46caf86f52bc3290', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20850, hash: '7b9b13a8ac110c1a76a08075c385f10e752ea1764758fdde4c89a5a62b12818c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
