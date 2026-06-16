#!/usr/bin/env node

/**
 * Quick Start Script for Smart Class Connect Bot
 * Run: node quick-start.js
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise(resolve => rl.question(query, resolve));

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

const log = {
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  header: (msg) => console.log(`\n${colors.bright}${colors.cyan}${msg}${colors.reset}\n`)
};

async function main() {
  console.clear();
  console.log(`${colors.bright}${colors.cyan}`);
  console.log('╔════════════════════════════════════════════════╗');
  console.log('║  🤖 Smart Class Connect Bot - Quick Setup      ║');
  console.log('╚════════════════════════════════════════════════╝');
  console.log(`${colors.reset}\n`);

  // Check if .env exists
  const envPath = path.join(__dirname, '.env');
  const envExists = fs.existsSync(envPath);

  if (!envExists) {
    log.warning('.env file not found');
    const create = await question('Create .env file? (y/n): ');
    
    if (create.toLowerCase() === 'y') {
      log.header('📋 Bot Configuration Setup');
      
      const token = await question('Enter your Telegram Bot Token: ');
      const port = await question('Enter Bot Port (default 3000): ') || '3000';
      const env = await question('Environment (development/production): ') || 'development';
      
      if (!token) {
        log.error('Bot token is required!');
        rl.close();
        return;
      }

      const envContent = `TELEGRAM_BOT_TOKEN=${token}
BOT_PORT=${port}
DATABASE_URL=mongodb://localhost:27017/smartclassconnect
NODE_ENV=${env}`;

      fs.writeFileSync(envPath, envContent);
      log.success('.env file created!');
    } else {
      log.warning('Skipping .env creation. You can create it manually later.');
    }
  } else {
    log.success('.env file already exists');
  }

  log.header('⚙️ Customization Setup');
  
  const customize = await question('Would you like to customize bot settings now? (y/n): ');
  
  if (customize.toLowerCase() === 'y') {
    const phone = await question('Enter your phone number: ');
    const email = await question('Enter your email: ');
    const website = await question('Enter your website URL: ');

    if (phone || email || website) {
      log.info('Note: Update the following files manually:');
      log.info('  - handlers/counsellorHandler.js (contact info)');
      log.info('  - handlers/websiteLinksHandler.js (website links)');
      log.info('  - CONFIG_GUIDE.md (for detailed instructions)');
    }
  }

  log.header('📦 Dependencies Check');
  
  const packagePath = path.join(__dirname, 'package.json');
  if (fs.existsSync(packagePath)) {
    log.success('package.json found');
    log.info('Run: npm install');
  }

  log.header('✅ Setup Complete!');
  console.log(`
${colors.bright}Next Steps:${colors.reset}

1. Install dependencies:
   ${colors.cyan}npm install${colors.reset}

2. Customize your bot (see CONFIG_GUIDE.md):
   - Update phone/email in handlers/counsellorHandler.js
   - Add your website links
   - Update course information

3. Start the bot:
   ${colors.cyan}npm start${colors.reset}

4. Test in Telegram:
   - Search for your bot
   - Send /start command
   - Test all features

${colors.bright}Documentation:${colors.reset}
   - README.md - Full documentation
   - CONFIG_GUIDE.md - Configuration guide
   - SETUP.js - Setup guide (run: node SETUP.js)

${colors.bright}Need Help?${colors.reset}
   Check CONFIG_GUIDE.md for troubleshooting

${colors.green}Happy Botting! 🚀${colors.reset}
  `);

  rl.close();
}

main().catch(err => {
  log.error('Setup failed:', err.message);
  rl.close();
  process.exit(1);
});
