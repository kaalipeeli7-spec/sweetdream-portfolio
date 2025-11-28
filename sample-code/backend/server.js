const express = require('express');
const app = express();
app.use(express.json());

app.post('/event', (req, res) => {
    console.log('Sample event received:', req.body);
    res.json({ received: true });
});

app.get('/command', (req, res) => {
    res.json({ command: 'sample:demo' });
});

app.listen(3000, () => console.log('Sample backend running (demo only)'));
