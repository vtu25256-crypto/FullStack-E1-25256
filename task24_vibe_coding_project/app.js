const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// 1. Security Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// 2. Modular Routes
app.use('/api/v1/contact', contactRoutes);

// 3. Global Error Handling
app.use(errorHandler);

module.exports = app;

// Local development server
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
