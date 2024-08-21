const { generateDomainList, generateRandomEmail, getEmails } = require('./api');

module.exports = {
    name: 'generate',
    description: 'Generate a temporary email',
    async execute(message, args) {
        const domains = await generateDomainList();

        if (!domains) {
            return message.reply('Could not fetch domain list.');
        }

        const selectedDomain = domains[Math.floor(Math.random() * domains.length)];
        const email = await generateRandomEmail(selectedDomain);

        if (!email) {
            return message.reply('Could not generate email.');
        }

        message.reply(`Generated email: \`${email}\`\nUse \`${config.prefix}check ${email}\` to check for emails.`);
    },
};
