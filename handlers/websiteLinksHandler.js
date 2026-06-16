// Website links handler
const websiteLinksHandler = {
  showLinks: (bot, chatId, messageId) => {
    const message = `🌐 **Smart Class Connect - Quick Links**

Browse our website:`;

    const keyboard = [
      [
        {
          text: '📖 Blog',
          url: 'https://www.smartclassconnect.com/blog'
        }
      ],
      [
        {
          text: '🎥 Webinars',
          url: 'https://www.smartclassconnect.com/sessions#nav_bar'
        }
      ],
      [
        {
          text: '🛍️ Digital Products',
          url: 'https://www.smartclassconnect.com/products#nav_bar'
        }
      ],
      [
        {
          text: '🎁 Book Free Demo',
          url: 'https://www.smartclassconnect.com/s/pages/bookclass'
        }
      ],
      [
        {
          text: '👨‍🏫 Join as a Teacher',
          url: 'https://www.smartclassconnect.com/s/pages/become-teacher'
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

module.exports = websiteLinksHandler;
