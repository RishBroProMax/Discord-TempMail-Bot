const axios = require('axios');

const BASE_URL = 'https://www.1secmail.com/api/v1/';

async function generateDomainList() {
    try {
        const response = await axios.get(`${BASE_URL}?action=getDomainList`);
        return response.data;
    } catch (error) {
        console.error('Error fetching domain list:', error);
        return null;
    }
}

async function generateRandomEmail(domain) {
    try {
        const response = await axios.get(`${BASE_URL}?action=genRandomMailbox&count=1&domain=${domain}`);
        return response.data[0];
    } catch (error) {
        console.error('Error generating random email:', error);
        return null;
    }
}

async function getEmails(email) {
    const [login, domain] = email.split('@');
    try {
        const response = await axios.get(`${BASE_URL}?action=getMessages&login=${login}&domain=${domain}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching emails:', error);
        return null;
    }
}

module.exports = { generateDomainList, generateRandomEmail, getEmails };
