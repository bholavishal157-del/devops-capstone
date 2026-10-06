const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <div style="text-align: center; margin-top: 50px; font-family: Arial;">
            <h1>🚀 DevOps Capstone Project 🚀</h1>
            <p>Automated CI/CD Pipeline running on Azure & Kubernetes</p>
            <p>Status: <b>Live & Working</b></p>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});