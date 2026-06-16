// Parent support handler
const parentSupportHandler = {
  showOptions: (bot, chatId, messageId) => {
    const message = `👨‍👩‍👧 **Parent Support Center**

Select an option:`;

    const options = {
      chat_id: chatId,
      message_id: messageId,
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: '👨‍👩‍👧 Academic Counselling',
              callback_data: 'parent_counselling'
            }
          ],
          [
            {
              text: '📊 Student Performance',
              callback_data: 'parent_performance'
            }
          ],
          [
            {
              text: '🎓 Course Information',
              callback_data: 'parent_courses'
            }
          ],
          [
            {
              text: '💰 Fee Information',
              callback_data: 'parent_fees'
            }
          ],
          [
            {
              text: '📞 Speak with Advisor',
              callback_data: 'parent_advisor'
            }
          ],
          [
            {
              text: '← Back to Menu',
              callback_data: 'back_to_start'
            }
          ]
        ]
      }
    };

    bot.editMessageText(message, options);
  },

  handleParentQuery: (bot, chatId, action, messageId) => {
    let response = '';

    switch (action) {
      case 'parent_counselling':
        response = `👨‍👩‍👧 **Academic Counselling**

Our expert counsellors provide:

✓ Academic Progress Review
✓ Learning Strategy Consultation
✓ Subject-specific Guidance
✓ Study Plan Development
✓ Motivation & Encouragement

📞 **Book a Free Counselling Session**

Phone: +971 56 777 8216
Email: parents@smartclassconnect.com
WhatsApp: +971 56 777 8216

*Sessions available: Sat-Thu, 9 AM - 8 PM (UAE Time)*`;
        break;

      case 'parent_performance':
        response = `📊 **Student Performance Tracking**

Monitor your child's progress:

📈 Grades & Scores
✅ Attendance Records
📝 Assignment Completion
🎯 Test Performance
📋 Progress Reports

*To access the parent dashboard:*
1️⃣ Visit: https://smartclassconnect.com/parent-login
2️⃣ Enter your credentials
3️⃣ View real-time progress

Need help? Contact us: support@smartclassconnect.com`;
        break;

      case 'parent_courses':
        response = `🎓 **Course Information for Parents**

We offer comprehensive courses in:

📚 **Boards:** CBSE | ICSE | IGCSE | State Boards
🎯 **Classes:** 9th to 12th & Beyond
📖 **Subjects:** All major subjects

Each course includes:
✔ Live Interactive Classes
✔ Recorded Sessions
✔ Study Materials & Notes
✔ Practice Tests
✔ Doubt Resolution
✔ Certificate on Completion

👉 Explore all courses: https://smartclassconnect.com/courses`;
        break;

      case 'parent_fees':
        response = `💰 **Fee Information**

Flexible pricing options available in UAE Dirham (د.إ):

📦 **Course Plans:**
• Monthly Subscription - Starting from د.إ 179
• Quarterly Package - Starting from د.إ 479
• Annual Membership - Starting from د.إ 1,599
• Customized Plans Available

💳 **Payment Options:**
✓ Credit/Debit Card
✓ Bank Transfer
✓ Installments Available
✓ Corporate Plans

📞 For detailed pricing & offers:
Email: fees@smartclassconnect.com
WhatsApp: +971 56 777 8216

*Special discounts for early enrollment!*`;
        break;

      case 'parent_advisor':
        response = `📞 **Speak with an Advisor**

Our education advisors are ready to help!

🎯 They can guide you on:
✓ Best course selection for your child
✓ Academic planning
✓ Career counselling
✓ Fee & subscription options

📞 **Contact Information:**

Phone: +971 56 777 8216
WhatsApp: +971 56 777 8216
Email: advisor@smartclassconnect.com

⏰ Available: Sat-Thu, 9 AM - 8 PM (UAE Time)
✉️ Or click below to schedule a call!`;
        break;

      default:
        response = 'How can we assist you? 😊';
    }

    bot.editMessageText(response, {
      chat_id: chatId,
      message_id: messageId,
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: '← Back',
              callback_data: 'parent_support'
            }
          ]
        ]
      }
    });
  }
};

module.exports = parentSupportHandler;
