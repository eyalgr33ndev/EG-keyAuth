import { Router } from 'express';
import { KeyAuth } from '../models/KeyAuth';

const router = Router();

router.post('/add', async ({ body: { key, user } }, res) => {
    try {
        res.status(201).json(await new KeyAuth({ key, user }).save());
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.get('/keys', async (_, res) => {
    try {
        res.json(await KeyAuth.find());
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.delete('/remove/:key', async ({ params: { key } }, res) => {
    try {
        const deletedKey = await KeyAuth.findOneAndDelete({ key });
        res.status(deletedKey ? 200 : 404).json(deletedKey ? { message: 'Key deleted' } : { error: 'Key not found' });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

export default router;
