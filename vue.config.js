module.exports = {
    pwa: {
        name: 'portfolio',
        themeColor: '#05294a',
        msTileColor: '#000000',
        workboxOptions: {
            exclude: [/\.map$/, /manifest\.json$/, 'index.html']
        },
        iconPaths: {
            msTileImage: 'img/icons/mstile-150x150.png'
        }
    }
}