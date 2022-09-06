import App from './App.svelte'

export const renderToString = ({ webTitle }: { webTitle: string }) => {
    const { head, html, css } = App.render({
        webTitle
    });
    console.log(head, html, css)
    return html
}