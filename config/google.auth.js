export const config = {
    mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/auth-app',
    googleClientId: process.env.GOOGLE_CLIENT_ID || '',
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
    clientUrl: process.env.CLIENT_URL || 'http://localhost:5173'
  };