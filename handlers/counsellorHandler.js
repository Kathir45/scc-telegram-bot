// Counsellor handler
const counsellorHandler = {
  showContactInfo: (bot, chatId, messageId) => {
    const message = `📞 **Talk to Our Counsellors**

Our expert educational counsellors are here to help you!

**Contact Information:**

📞 **Phone:** +971 56 777 8216
📧 **Email:** support@smartclassconnect.com
💬 **WhatsApp:** +971 56 777 8216

⏰ **Available:** Sat-Thu, 9 AM - 8 PM (UAE Time)

**We Can Help With:**
✓ Course Selection
✓ Academic Planning
✓ Career Guidance
✓ Fee Information
✓ Student Performance
✓ Admission Process
✓ General Inquiries`;

    const keyboard = [
      [
        {
          text: '💬 Chat on WhatsApp',
          url: 'https://wa.me/971567778216'
        }
      ],
      [
        {
          text: '📧 support@smartclassconnect.com',
          callback_data: 'email_inquiry'
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
  }
};

module.exports = counsellorHandler;
