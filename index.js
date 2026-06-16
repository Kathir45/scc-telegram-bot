require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

// Initialize bot
const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });
const app = express();

// Import handlers
const startHandler = require('./handlers/startHandler');
const studentSupportHandler = require('./handlers/studentSupportHandler');
const parentSupportHandler = require('./handlers/parentSupportHandler');
const courseRecommendationHandler = require('./handlers/courseRecommendationHandler');
const websiteLinksHandler = require('./handlers/websiteLinksHandler');
const studyMaterialsHandler = require('./handlers/studyMaterialsHandler');
const counsellorHandler = require('./handlers/counsellorHandler');
const faqHandler = require('./handlers/faqHandler');
const leadCollectionHandler = require('./handlers/leadCollectionHandler');
const demoClassHandler = require('./handlers/demoClassHandler');
const referralHandler = require('./handlers/referralHandler');
const successStoriesHandler = require('./handlers/successStoriesHandler');
const pricingPlansHandler = require('./handlers/pricingPlansHandler');

// Middleware
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Bot is running' });
});

// Handle /start command
bot.onText(/\/start/, (msg) => {
  startHandler.handle(bot, msg);
});

// Handle callback queries (button clicks)
bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;
  const messageId = query.message.message_id;

  console.log(`Callback from ${chatId}: ${data}`);

  // Handle different actions
  if (data === 'student_support') {
    studentSupportHandler.showOptions(bot, chatId, messageId);
  } else if (data === 'parent_support') {
    parentSupportHandler.showOptions(bot, chatId, messageId);
  } else if (data === 'find_course') {
    courseRecommendationHandler.startRecommendation(bot, chatId, messageId);
  } else if (data === 'study_materials') {
    studyMaterialsHandler.showClassOptions(bot, chatId, messageId);
  } else if (data === 'talk_counsellor') {
    counsellorHandler.showContactInfo(bot, chatId, messageId);
  } else if (data === 'website_links') {
    websiteLinksHandler.showLinks(bot, chatId, messageId);
  } else if (data === 'faq') {
    faqHandler.showFAQ(bot, chatId, messageId);
  } else if (data === 'demo_class') {
    demoClassHandler.showDemoOptions(bot, chatId, messageId);
  } else if (data === 'success_stories') {
    successStoriesHandler.showSuccessStories(bot, chatId, messageId);
  } else if (data === 'pricing_plans') {
    pricingPlansHandler.showPricingPlans(bot, chatId, messageId);
  } else if (data === 'back_to_start') {
    startHandler.showMenu(bot, chatId, messageId);
  } else if (data.startsWith('student_')) {
    studentSupportHandler.handleStudentQuery(bot, chatId, data, messageId);
  } else if (data.startsWith('parent_')) {
    parentSupportHandler.handleParentQuery(bot, chatId, data, messageId);
  } else if (data.startsWith('class_')) {
    courseRecommendationHandler.handleClassSelection(bot, chatId, data, messageId);
  } else if (data.startsWith('board_')) {
    courseRecommendationHandler.handleBoardSelection(bot, chatId, data, messageId);
  } else if (data.startsWith('subject_')) {
    courseRecommendationHandler.handleSubjectSelection(bot, chatId, data, messageId);
  } else if (data.startsWith('material_class_')) {
    studyMaterialsHandler.handleClassSelection(bot, chatId, data, messageId);
  } else if (data.startsWith('material_')) {
    studyMaterialsHandler.handleMaterialType(bot, chatId, data, messageId);
  } else if (data.startsWith('demo_')) {
    demoClassHandler.handleDemoAction(bot, chatId, data, messageId);
  } else if (data.startsWith('referral_')) {
    referralHandler.handleReferralAction(bot, chatId, data, messageId);
  } else if (data.startsWith('story_')) {
    successStoriesHandler.handleStoryClick(bot, chatId, data, messageId);
  } else if (data.startsWith('plan_')) {
    pricingPlansHandler.handlePlanClick(bot, chatId, data, messageId);
  } else if (data.startsWith('faq_')) {
    const faqs = {
      faq_fees: {
        title: '💰 Fees',
        answer: `**What is the course fee?**\n\nOur fees vary based on:\n• Class Level (9th to 12th)\n• Board (CBSE, ICSE, IGCSE, State)\n• Course Duration (Monthly/Quarterly/Annual)\n\n**Pricing:**\n✓ Monthly: Starting from د.إ 179\n✓ Quarterly: Starting from د.إ 499\n✓ Annual: Starting from د.إ 1,799\n\n**Special Offers:**\n🎁 Early Bird Discount - 20% off\n🎁 Student Group Discount - 15% off for 3+ students\n🎁 Referral Rewards - Share & Earn\n\nContact: fees@smartclassconnect.com`
      },
      faq_certificate: {
        title: '🎓 Certificate',
        answer: `**Will I receive a certificate?**\n\nYes! All students who complete their course receive:\n\n✅ Completion Certificate\n✅ Merit Certificate (for top performers)\n✅ Course Report Card\n✅ Digital Badge\n\n**Certificate includes:**\n• Your Name\n• Course Completed\n• Duration\n• Grade/Score\n• Validity Period\n\nCertificates are recognized and can be added to your resume!`
      },
      faq_live_classes: {
        title: '🎥 Live Classes',
        answer: `**Are classes live?**\n\nYes! We conduct live interactive classes:\n\n⏰ **Schedule:** Fixed timings every week\n👥 **Batch Size:** Small batches for personalized attention\n🎯 **Interactive:** Q&A, polls, and interaction during class\n📹 **Recorded:** All classes are recorded for later viewing\n📱 **Platform:** Available on web and mobile app\n\n**Class Features:**\n✓ Real-time Doubt Resolution\n✓ Interactive Quizzes\n✓ Breakout Sessions\n✓ Notes Sharing\n✓ Screen Sharing by Teachers`
      },
      faq_recordings: {
        title: '📹 Recordings',
        answer: `**Can I watch recordings later?**\n\nAbsolutely! All class recordings are available:\n\n📱 **Lifetime Access:** Watch anytime, anywhere\n♻️ **Unlimited Views:** Rewatch as many times as needed\n⏸️ **Pause & Resume:** Study at your own pace\n🎯 **Organized:** Classes organized by chapter/topic\n📥 **Download:** Available for offline viewing (premium)\n\n**Access:**\n1. Log in to your account\n2. Go to "My Classes" → "Recordings"\n3. Select the class you want to watch\n\n*Premium members can download videos for offline access*`
      },
      faq_batch_size: {
        title: '👥 Batch Size',
        answer: `**What is the batch size?**\n\nWe maintain small batch sizes for quality education:\n\n👥 **Maximum Students per batch:** 30-40 students\n🎯 **Reason:** Better interaction and personalized attention\n💬 **Doubt Sessions:** 1-on-1 or small group doubt sessions\n\n**Benefits of Small Batches:**\n✓ Individual Attention\n✓ Better Interaction\n✓ Quick Doubt Resolution\n✓ High Pass Rate\n✓ Personalized Feedback`
      },
      faq_schedule: {
        title: '⏰ Schedule',
        answer: `**What is the class schedule?**\n\nClasses are scheduled at convenient times:\n\n📅 **Frequency:** 2-3 classes per week\n⏰ **Duration:** 60-90 minutes per class\n🕐 **Timing:** Evening and weekend slots available\n\n**Flexible Options:**\n✓ Morning Batch: 8:00 AM - 9:00 AM\n✓ Afternoon Batch: 3:00 PM - 4:00 PM\n✓ Evening Batch: 6:00 PM - 7:00 PM\n✓ Weekend Batch: Saturday & Sunday\n\nYou can choose your preferred slot during enrollment!`
      }
    };

    const faq = faqs[data];
    if (faq) {
      const message = `${faq.title}\n\n${faq.answer}`;

      bot.editMessageText(message, {
        chat_id: chatId,
        message_id: messageId,
        parse_mode: 'Markdown',
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: '← Back to FAQ',
                callback_data: 'faq'
              }
            ]
          ]
        }
      });
    }
  } else if (data === 'lead_yes') {
    leadCollectionHandler.startLeadCollection(bot, chatId, messageId);
  } else if (data === 'lead_no') {
    bot.editMessageText('Thank you for your interest! 👋\nFeel free to reach out anytime.', {
      chat_id: chatId,
      message_id: messageId,
      reply_markup: { inline_keyboard: [] }
    });
  }

  // Answer the callback query with error handling
  try {
    bot.answerCallbackQuery(query.id);
  } catch (err) {
    console.log('Callback query answer error (non-critical):', err.message);
  }
});

// Handle text messages for lead collection and other interactions
bot.on('message', (msg) => {
  if (msg.text && !msg.text.startsWith('/')) {
    leadCollectionHandler.handleUserInput(bot, msg);
    demoClassHandler.handleDemoBookingInput(bot, msg);
  }
});

// Start Express server
const PORT = process.env.BOT_PORT || 3000;
app.listen(PORT, () => {
  console.log(`🤖 Smart Class Connect Bot is running on port ${PORT}`);
  console.log('Telegram bot is polling for messages...');
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Bot stopped.');
  process.exit(0);
});

module.exports = { bot, app };
