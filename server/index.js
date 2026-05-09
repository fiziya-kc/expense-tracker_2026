import express from 'express';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

const distPath = resolve(__dirname, '..', 'client', 'dist');
app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(resolve(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
