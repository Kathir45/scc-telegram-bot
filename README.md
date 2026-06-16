# Smart Class Connect Telegram Bot 🤖

A comprehensive Telegram bot for Smart Class Connect that handles student queries, guides parents, recommends courses, and collects leads automatically.

## Features 🌟

### 1. **Student Support** 🧑‍🎓
- Course Selection Help
- Exam Preparation Resources
- Career Guidance
- Subject Doubts Resolution
- Learning Resources

### 2. **Parent Support** 👨‍👩‍👧
- Academic Counselling
- Student Performance Tracking
- Course Information
- Fee Information
- Expert Advisor Connection

### 3. **Course Recommendation Engine** 🎯
- Multi-step course discovery
- Class Selection (9-12)
- Board Selection (CBSE, ICSE, IGCSE, State)
- Subject Selection
- Direct course links and enrollments

### 4. **Study Materials** 📚
- Class-wise Materials
- Notes & Summaries
- PDFs
- Practice Questions
- Previous Year Papers

### 5. **Website Quick Links** 🌐
- Home
- Courses
- Admissions
- Contact Us
- FAQ

### 6. **FAQ Section** ❓
- Fees Information
- Certificate Details
- Live Classes Info
- Recording Access
- Batch Size
- Schedule Details

### 7. **Lead Generation** 💼
- Automatic lead collection
- Name, Phone, Email capture
- Leads stored in JSON database
- Lead status tracking

### 8. **Counsellor Support** 📞
- Direct contact information
- WhatsApp integration
- Email contact
- Phone number

## Project Structure 📁

```
smartclassconnect-bot/
├── index.js                          # Main bot file
├── .env                              # Environment variables
├── package.json                      # Dependencies
├── handlers/
│   ├── startHandler.js               # /start command
│   ├── studentSupportHandler.js      # Student queries
│   ├── parentSupportHandler.js       # Parent support
│   ├── courseRecommendationHandler.js # Course engine
│   ├── websiteLinksHandler.js        # Website links
│   ├── studyMaterialsHandler.js      # Study materials
│   ├── counsellorHandler.js          # Counsellor info
│   ├── faqHandler.js                 # FAQ section
│   └── leadCollectionHandler.js      # Lead collection
├── utils/
│   └── validators.js                 # Validation utilities
└── data/
    ├── courses.js                    # Course database
    └── leads.json                    # Collected leads
```

## Installation & Setup 🚀

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Telegram Bot Token (from @BotFather)

### Steps

1. **Clone or navigate to the project**
```bash
cd smartclassconnect-bot
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file with:
```env
TELEGRAM_BOT_TOKEN=YOUR_BOT_TOKEN_HERE
BOT_PORT=3000
DATABASE_URL=mongodb://localhost:27017/smartclassconnect
NODE_ENV=development
```

4. **Get your Telegram Bot Token**
- Open Telegram and search for `@BotFather`
- Send `/start` and follow instructions to create a bot
- Copy the bot token and paste in `.env`

5. **Run the bot**
```bash
node index.js
```

You should see:
```
🤖 Smart Class Connect Bot is running on port 3000
Telegram bot is polling for messages...
```

## Usage 💻

### Start the Bot
1. Open Telegram
2. Search for your bot name
3. Send `/start` command
4. Follow the interactive menu

### User Flow

```
/start
    ↓
Welcome Menu
    ↓
├─ Student Support → Course Selection, Exam Prep, etc.
├─ Parent Support → Counselling, Performance, etc.
├─ Find a Course → Class → Board → Subject → Recommendation
├─ Study Materials → Class → Material Type
├─ Talk to Counsellor → Contact Info
├─ Website Links → Quick Links
└─ FAQ → Common Questions
```

## Lead Collection 💼

### How It Works

1. **Student sees course recommendation** and clicks "Free Counselling"
2. **Bot asks for details:**
   - Name
   - Phone Number
   - Email Address
3. **Lead is saved** to `data/leads.json`
4. **Confirmation sent** to student
5. **Counselling team notified** for follow-up

### View Collected Leads

```bash
# Read leads.json to see all collected leads
cat data/leads.json
```

## Configuration Guide ⚙️

### Update Contact Information

Edit `handlers/counsellorHandler.js`:
```javascript
Phone: +91 XXXXXXXXXX        // Your phone
WhatsApp: +91 XXXXXXXXXX     // WhatsApp number
Email: support@smartclassconnect.com
```

### Update Website Links

Edit each handler to update your website URLs:
```javascript
url: 'https://smartclassconnect.com/courses'
```

### Add/Modify Courses

Edit `data/courses.js` to add new courses or modify existing ones.

### Update FAQ Answers

Edit `handlers/faqHandler.js` to add or modify FAQ content.

## Future Enhancements 🔮

### Phase 2 Features
- **AI Integration** - Connect OpenAI API for instant answers
- **Student Dashboard** - Progress tracking, attendance, certificates
- **Parent Dashboard** - Child performance monitoring
- **Daily Quiz** - Automated daily quizzes
- **Reminder System** - Class and assignment reminders
- **Broadcast Feature** - Announcements to all students
- **Database Integration** - Replace JSON with MongoDB
- **Payment Integration** - Direct course purchases

### Technical Improvements
- Add database persistence (MongoDB)
- Implement caching for better performance
- Add logging and error tracking
- Create admin dashboard
- Add user authentication
- Implement session management

## Deployment 🌐

### Deploy on Render
1. Push code to GitHub
2. Connect to Render
3. Set environment variables
4. Deploy with `npm start`

### Deploy on Railway
1. Connect GitHub repo
2. Add environment variables
3. Deploy automatically

### Deploy on VPS
1. SSH to your VPS
2. Clone repository
3. Install Node.js
4. Run `npm install && node index.js`
5. Use PM2 for process management

## Troubleshooting 🔧

### Bot not responding
- Check if bot token is correct in `.env`
- Verify bot is running: `node index.js`
- Check internet connection

### Leads not saving
- Verify `data/` folder exists
- Check file permissions
- Ensure JSON file is valid

### Messages not formatting correctly
- Verify `parse_mode: 'Markdown'` is set
- Check emoji support in messages

## API Reference 📚

### Bot Methods Used

- `bot.sendMessage()` - Send text messages
- `bot.editMessageText()` - Edit messages with inline buttons
- `bot.answerCallbackQuery()` - Handle button clicks
- `bot.onText()` - Handle text commands
- `bot.on('callback_query')` - Handle button interactions
- `bot.on('message')` - Handle all messages

## Database Schema 📊

### Leads Collection

```json
{
  "id": 1718473200000,
  "userId": 123456789,
  "name": "John Doe",
  "phone": "+91 9876543210",
  "email": "john@example.com",
  "timestamp": "2024-06-15T10:00:00.000Z",
  "status": "new"
}
```

## Contributing 🤝

Feel free to contribute improvements:
1. Fork the repository
2. Create a feature branch
3. Make changes
4. Submit a pull request

## Support 💬

For issues or questions:
- Email: support@smartclassconnect.com
- Phone: +91 XXXXXXXXXX
- WhatsApp: +91 XXXXXXXXXX

## License 📄

This project is proprietary to Smart Class Connect.

---

**Made with ❤️ for Smart Class Connect**
