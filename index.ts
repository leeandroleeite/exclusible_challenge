import express from 'express';

const app = express();

app.get('/', (req: any, res: any) => {
    res.send('Hello Exclusible')
})

app.listen(8000)