// Start command handler
const startHandler = {
  handle: (bot, msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.from.first_name || 'Friend';

    const welcomeMessage = `Welcome to Smart Class Connect 🎓

Hi ${firstName}! 👋

How can I help you today?`;

    const options = {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: '🧑‍🎓 Student Support',
              callback_data: 'student_support'
            },
            {
              text: '👨‍👩‍👧 Parent Support',
              callback_data: 'parent_support'
            }
          ],
          [
            {
              text: '🎯 Find a Course',
              callback_data: 'find_course'
            },
            {
              text: '📚 Study Materials',
              callback_data: 'study_materials'
            }
          ],
          [
            {
              text: '📞 Talk to Counsellor',
              callback_data: 'talk_counsellor'
            },
            {
              text: '🌐 Website Links',
              callback_data: 'website_links'
            }
          ],
          [
            {
              text: '❓ FAQ',
              callback_data: 'faq'
            },
            {
              text: '📋 Pricing Plans',
              callback_data: 'pricing_plans'
            }
          ],
          [
            {
              text: '🎁 Book Demo',
              callback_data: 'demo_class'
            },
            {
              text: '🎓 Success Stories',
              callback_data: 'success_stories'
            }
          ]
        ]
      }
    };

    bot.sendMessage(chatId, welcomeMessage, options);
  },

  // For editing existing message (back button)
  showMenu: (bot, chatId, messageId) => {
    const welcomeMessage = `Welcome to Smart Class Connect 🎓

How can I help you today?`;

    const keyboard = [
      [
        {
          text: '🧑‍🎓 Student Support',
          callback_data: 'student_support'
        },
        {
          text: '👨‍👩‍👧 Parent Support',
          callback_data: 'parent_support'
        }
      ],
      [
        {
          text: '🎯 Find a Course',
          callback_data: 'find_course'
        },
        {
          text: '📚 Study Materials',
          callback_data: 'study_materials'
        }
      ],
      [
        {
          text: '📞 Talk to Counsellor',
          callback_data: 'talk_counsellor'
        },
        {
          text: '🌐 Website Links',
          callback_data: 'website_links'
        }
      ],
      [
        {
          text: '❓ FAQ',
          callback_data: 'faq'
        },
        {
          text: '📋 Pricing Plans',
          callback_data: 'pricing_plans'
        }
      ],
      [
        {
          text: '🎁 Book Demo',
          callback_data: 'demo_class'
        },
        {
          text: '🎓 Success Stories',
          callback_data: 'success_stories'
        }
      ]
    ];

    bot.editMessageText(welcomeMessage, {
      chat_id: chatId,
      message_id: messageId,
      reply_markup: {
        inline_keyboard: keyboard
      }
    });
  }
};

module.exports = startHandler;
