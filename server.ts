import { Hono } from 'hono'
import JSObstruction from 'npm:javascript-obfuscator'
import minify from 'npm:babel-minify'

const app = new Hono()

app.get('/',async (c) => {
    return c.html(await Deno.readTextFile('./index.html'));
})

app.post('/minify', async (c) => {
    const code = c.req.body ? await c.req.text() : "console.log('You have no code!')";
    let result = {
        code: code
    };

    if (code) {
        result = minify(code, {})
    }

    return c.json({
        code: result.code
    })
})

app.post('/obstruction', async (c) => {
    let code = c.req.body ? await c.req.text() : "console.log('You have no code!')";

    if (code) {
        code = JSObstruction.obfuscate(code).getObfuscatedCode()
    }

    return c.json({
        code
    })
})

Deno.serve(app.fetch)