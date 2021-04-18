importScripts('https://g.alicdn.com/kg/workbox/4.3.1/workbox-sw.js');
// 缓存静态资源
workbox.routing.registerRoute(
    /([\/|.|\w|\s|-])*\.(?:png|gif|jpg|jpeg|webp|svg|ico|ttf|woff|js|woff2|eot|otf|css)/,
    new workbox.strategies.CacheFirst({
        cacheName: 'static-resources',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 100, // 最大保存项目
                maxAgeSeconds: 1 * 60 * 60, // 缓存 1 小时
                purgeOnQuotaError: true,
            }),
        ],
    })
);
// 缓存主页
workbox.precaching.precacheAndRoute(
    [
        {
            revision: '158947',
            url: 'index.html',
        },
    ],
    {}
);
