const app = require('./app');
const logger = require('./config/logger');

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});