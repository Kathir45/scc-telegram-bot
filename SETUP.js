// Quick deployment guide
// This file helps with quick setup

const setupGuide = `
╔════════════════════════════════════════════════════════════╗
║  🤖 SMART CLASS CONNECT BOT - QUICK START GUIDE            ║
╚════════════════════════════════════════════════════════════╝

📝 STEP-BY-STEP SETUP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1️⃣  CREATE TELEGRAM BOT
   • Open Telegram
   • Search: @BotFather
   • Send: /start
   • Send: /newbot
   • Follow instructions
   • Copy Bot Token (SAVE THIS!)
   
2️⃣  UPDATE .env FILE
   TELEGRAM_BOT_TOKEN=YOUR_TOKEN_HERE
   BOT_PORT=3000
   NODE_ENV=development

3️⃣  INSTALL DEPENDENCIES
   npm install

4️⃣  RUN BOT
   npm start
   
   Expected output:
   🤖 Smart Class Connect Bot is running on port 3000
   Telegram bot is polling for messages...

5️⃣  TEST BOT
   • Open Telegram
   • Find your bot
   • Send: /start
   • Click buttons to test

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 CONFIGURATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Update these files with YOUR information:

1. handlers/counsellorHandler.js
   - Add your phone number
   - Add your email
   - Add your WhatsApp number

2. handlers/websiteLinksHandler.js
   - Update all website URLs

3. handlers/parentSupportHandler.js
   - Add actual contact details
   - Update fee information

4. data/courses.js
   - Add your actual courses
   - Update prices
   - Update course URLs

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 MONITOR LEADS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

View collected leads:
• Open: data/leads.json
• See all student information
• Contact details for follow-up

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚀 DEPLOYMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Option 1: RENDER.COM (Recommended)
✓ Free tier available
✓ Automatic deployments
✓ Easy setup

Option 2: RAILWAY.APP
✓ Pay-as-you-go pricing
✓ Great uptime
✓ Easy GitHub integration

Option 3: VPS (Hostinger, AWS, DigitalOcean)
✓ Full control
✓ Best for production
✓ Requires technical knowledge

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❓ COMMON ISSUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Q: Bot doesn't respond
A: 1. Check bot token in .env
   2. Verify internet connection
   3. Restart bot: npm start

Q: Leads not saving
A: 1. Check data/ folder exists
   2. Verify file permissions
   3. Check JSON syntax

Q: Messages look weird
A: 1. Check emoji support
   2. Verify parse_mode in messages
   3. Check text formatting

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📚 PROJECT STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

smartclassconnect-bot/
├── index.js ......................... Main bot file
├── .env ............................ Config variables
├── package.json ................... Dependencies
├── README.md ....................... Full documentation
├── handlers/ ....................... Message handlers
│   ├── startHandler.js ........... /start command
│   ├── studentSupportHandler.js . Student queries
│   ├── parentSupportHandler.js .. Parent help
│   ├── courseRecommendationHandler.js (Core feature!)
│   ├── websiteLinksHandler.js ... Links
│   ├── studyMaterialsHandler.js . Materials
│   ├── counsellorHandler.js ..... Contact info
│   ├── faqHandler.js ............ Q&A
│   └── leadCollectionHandler.js . Lead capture
├── utils/
│   └── validators.js .............. Utilities
└── data/
    ├── courses.js ............... Course database
    └── leads.json ............... Collected leads

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ FEATURES INCLUDED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Student Support
✅ Parent Support
✅ Course Recommendation (Multi-step!)
✅ Study Materials
✅ Website Quick Links
✅ FAQ Section
✅ Lead Generation & Storage
✅ Counsellor Contact Info
✅ Error Handling
✅ Data Persistence

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎉 YOU'RE READY!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Next steps:
1. Update .env with your bot token
2. Customize contact info in handlers/
3. Update website URLs
4. Run: npm start
5. Test in Telegram!

Questions? Check README.md for detailed docs.

Happy botting! 🚀
`;

console.log(setupGuide);
