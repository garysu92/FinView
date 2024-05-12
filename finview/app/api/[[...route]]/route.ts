import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { clerkMiddleware, getAuth } from '@hono/clerk-auth';

export const runtime = 'edge';

const app = new Hono().basePath('/api')

app.get('/test',
    clerkMiddleware(),
    (c) => {
        console.log(c);
        const auth = getAuth(c);
        if (!auth?.userId) {
            return c.json({ error: "Not Authorized"})
        }
        return c.json({
            userId: auth.userId,
        })
    });

export const GET = handle(app)