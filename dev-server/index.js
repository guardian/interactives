
const express = require('express')
const app = express()

// TODO: Replace this with using rollup.watch https://rollupjs.org/guide/en/#rollupwatch
const requireUncached = (module) => {
    delete require.cache[require.resolve(module)];
    return require(module);
}

app.get('/', (req, res) => {
    const { renderToString } = requireUncached('../dist/bundle');
    const webTitle = req.query.webTitle || 'default title'

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>interactives dev-server</title>
        </head>
        <body>
            ${renderToString({ webTitle })}
        </body>
        </html>
    `)
})

app.listen(process.env.port || 3000, () => console.log('Dev server started'))