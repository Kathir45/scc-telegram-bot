// FAQ handler
const faqHandler = {
  showFAQ: (bot, chatId, messageId) => {
    const message = `❓ **Frequently Asked Questions**

Select a topic:`;

    const keyboard = [
      [
        {
          text: '💰 Fees',
          callback_data: 'faq_fees'
        }
      ],
      [
        {
          text: '🎓 Certificate',
          callback_data: 'faq_certificate'
        }
      ],
      [
        {
          text: '🎥 Live Classes',
          callback_data: 'faq_live_classes'
        }
      ],
      [
        {
          text: '📹 Recordings',
          callback_data: 'faq_recordings'
        }
      ],
      [
        {
          text: '👥 Batch Size',
          callback_data: 'faq_batch_size'
        }
      ],
      [
        {
          text: '⏰ Schedule',
          callback_data: 'faq_schedule'
        }
      ],
      [
        {
          text: '← Back to Menu',
          callback_data: 'back_to_start'
        }
      ]
    ];

    bot.editMessageText(message, {
      chat_id: chatId,
      message_id: messageId,
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: keyboard
      }
    });
  },

  // Handle FAQ callback
  handleFAQ: (bot, chatId, action, messageId) => {
    // This is called from index.js - routing callback queries
    // The actual FAQ content is in handleFAQ method below
  },

  handleFAQ: (bot, chatId, action, messageId) => {
    const faqs = {
      faq_fees: {
        title: '💰 Fees',
        answer: `**What is the course fee?**

Our fees vary based on:
• Class Level (9th to 12th)
• Board (CBSE, ICSE, IGCSE, State)
• Course Duration (Monthly/Quarterly/Annual)

**Pricing:**
✓ Monthly: Starting from د.إ 179
✓ Quarterly: Starting from د.إ 499
✓ Annual: Starting from د.إ 1,799

**Special Offers:**
🎁 Early Bird Discount - 20% off
🎁 Student Group Discount - 15% off for 3+ students
🎁 Referral Rewards - Share & Earn

Contact: fees@smartclassconnect.com`
      },

      faq_certificate: {
        title: '🎓 Certificate',
        answer: `**Will I receive a certificate?**

Yes! All students who complete their course receive:

✅ Completion Certificate
✅ Merit Certificate (for top performers)
✅ Course Report Card
✅ Digital Badge

**Certificate includes:**
• Your Name
• Course Completed
• Duration
• Grade/Score
• Validity Period

Certificates are recognized and can be added to your resume!`
      },

      faq_live_classes: {
        title: '🎥 Live Classes',
        answer: `**Are classes live?**

Yes! We conduct live interactive classes:

⏰ **Schedule:** Fixed timings every week
👥 **Batch Size:** Small batches for personalized attention
🎯 **Interactive:** Q&A, polls, and interaction during class
📹 **Recorded:** All classes are recorded for later viewing
📱 **Platform:** Available on web and mobile app

**Class Features:**
✓ Real-time Doubt Resolution
✓ Interactive Quizzes
✓ Breakout Sessions
✓ Notes Sharing
✓ Screen Sharing by Teachers`
      },

      faq_recordings: {
        title: '📹 Recordings',
        answer: `**Can I watch recordings later?**

Absolutely! All class recordings are available:

📱 **Lifetime Access:** Watch anytime, anywhere
♻️ **Unlimited Views:** Rewatch as many times as needed
⏸️ **Pause & Resume:** Study at your own pace
🎯 **Organized:** Classes organized by chapter/topic
📥 **Download:** Available for offline viewing (premium)

**Access:**
1. Log in to your account
2. Go to "My Classes" → "Recordings"
3. Select the class you want to watch

*Premium members can download videos for offline access*`
      },

      faq_batch_size: {
        title: '👥 Batch Size',
        answer: `**What is the batch size?**

We maintain small batch sizes for quality education:

👥 **Maximum Students per batch:** 30-40 students
🎯 **Reason:** Better interaction and personalized attention
💬 **Doubt Sessions:** 1-on-1 or small group doubt sessions

**Benefits of Small Batches:**
✓ Individual Attention
✓ Better Interaction
✓ Quick Doubt Resolution
✓ High Pass Rate
✓ Personalized Feedback`
      },

      faq_schedule: {
        title: '⏰ Schedule',
        answer: `**What is the class schedule?**

Classes are scheduled at convenient times:

📅 **Frequency:** 2-3 classes per week
⏰ **Duration:** 60-90 minutes per class
🕐 **Timing:** Evening and weekend slots available

**Flexible Options:**
✓ Morning Batch: 8:00 AM - 9:00 AM
✓ Afternoon Batch: 3:00 PM - 4:00 PM
✓ Evening Batch: 6:00 PM - 7:00 PM
✓ Weekend Batch: Saturday & Sunday

You can choose your preferred slot during enrollment!`
      }
    };

    const faq = faqs[action];
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
};

module.exports = faqHandler;
