import { mkdir, readFile, writeFile } from 'node:fs/promises';

const names = ['index.html', 'styles.css', 'game.js'];
const files = Object.fromEntries(await Promise.all(names.map(async (name) => [name, await readFile(name, 'utf8')])));
const types = { 'index.html': 'text/html; charset=utf-8', 'styles.css': 'text/css; charset=utf-8', 'game.js': 'text/javascript; charset=utf-8' };
const coinImage = (await readFile('assets/shiny-coin.png')).toString('base64');
const worker = `const files=${JSON.stringify(files)};const types=${JSON.stringify(types)};const coinImage='${coinImage}';export default {async fetch(request){const url=new URL(request.url);const key=(url.pathname==='/'?'index.html':decodeURIComponent(url.pathname).replace(/^\\//,''));if(key==='assets/shiny-coin.png'){const raw=atob(coinImage);const bytes=Uint8Array.from(raw,c=>c.charCodeAt(0));return new Response(bytes,{headers:{'content-type':'image/png','cache-control':'public, max-age=31536000, immutable'}})}return new Response(files[key]??files['index.html'],{headers:{'content-type':types[key]??types['index.html'],'cache-control':'no-store'}})}};`;

await mkdir('dist/server', { recursive: true });
await mkdir('dist/.openai', { recursive: true });
await writeFile('dist/server/index.js', worker);
await writeFile('dist/.openai/hosting.json', await readFile('.openai/hosting.json', 'utf8'));
