import app from './app';

const port = 3000;

app.listen(port, () => {
  console.log(`El servidor se está ejecutando en http://localhost:${port}/`);
});