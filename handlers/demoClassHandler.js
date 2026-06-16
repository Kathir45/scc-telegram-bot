// Demo class booking handler
const demoClassHandler = {
  showDemoOptions: (bot, chatId, messageId) => {
    const message = `📚 Book Your Free Demo Class

Get a taste of our teaching methodology! Our expert educators will guide you through an interactive demo session.

Select your preferred option:`;

    const options = {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: '✅ Book Demo Now',
              callback_data: 'demo_book'
            }
          ],
          [
            {
              text: '📅 View Available Slots',
              callback_data: 'demo_slots'
            }
          ],
          [
            {
              text: '👥 Why Try Demo?',
              callback_data: 'demo_benefits'
            }
          ],
          [
            {
              text: '⬅️ Back',
              callback_data: 'back_to_start'
            }
          ]
        ]
      }
    };

    bot.editMessageText(message, {
      chat_id: chatId,
      message_id: messageId,
      reply_markup: options.reply_markup,
      parse_mode: 'Markdown'
    });
  },

  handleDemoAction: (bot, chatId, data, messageId) => {
    if (data === 'demo_book') {
      const message = `📝 Book Your Demo Class

Please share your details (separated by commas):

**Format:** Name, Class, Subject

Example: Ahmed, Class 10, Mathematics`;

      bot.editMessageText(message, {
        chat_id: chatId,
        message_id: messageId,
        parse_mode: 'Markdown',
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: '⬅️ Back',
                callback_data: 'demo_class'
              }
            ]
          ]
        }
      });

      // Set state for demo booking
      global.demoBookingState = global.demoBookingState || {};
      global.demoBookingState[chatId] = { step: 'details' };

    } else if (data === 'demo_slots') {
      const message = `📅 Available Demo Slots

**This Week:**
🕐 Monday - 4:00 PM (UAE Time)
🕐 Tuesday - 3:30 PM (UAE Time)
🕐 Wednesday - 5:00 PM (UAE Time)
🕐 Thursday - 4:00 PM (UAE Time)
🕐 Friday - 3:00 PM (UAE Time)
🕐 Saturday - 11:00 AM (UAE Time)
🕐 Sunday - 2:00 PM (UAE Time)

**Next Week:**
Available from Monday onwards

⏰ Each session is 45 minutes
📌 Limited slots available!

Ready to join? Select:`;

      const options = {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: '✅ Book Demo',
                callback_data: 'demo_book'
              }
            ],
            [
              {
                text: '⬅️ Back',
                callback_data: 'back_to_start'
              }
            ]
          ]
        }
      };

      bot.editMessageText(message, {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: options.reply_markup,
        parse_mode: 'Markdown'
      });

    } else if (data === 'demo_benefits') {
      const message = `✨ Why Take Our Free Demo?

✅ **Understand Our Teaching Style**
Get a feel for how we teach and explain concepts

✅ **Meet Your Potential Teacher**
Interact directly with one of our experienced educators

✅ **Experience Interactive Learning**
See our unique teaching methodology in action

✅ **No Commitment Required**
Completely free with no hidden charges

✅ **Personalized Guidance**
Get recommendations based on your learning needs

✅ **Access Course Materials**
Receive sample study materials during the session

👉 Ready to experience the difference?`;

      const options = {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: '✅ Book Demo',
                callback_data: 'demo_book'
              }
            ],
            [
              {
                text: '⬅️ Back',
                callback_data: 'back_to_start'
              }
            ]
          ]
        }
      };

      bot.editMessageText(message, {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: options.reply_markup,
        parse_mode: 'Markdown'
      });
    }
  },

  handleDemoBookingInput: (bot, msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (!global.demoBookingState || !global.demoBookingState[chatId]) {
      return; // User is not in demo booking process
    }

    const userState = global.demoBookingState[chatId];

    if (userState.step === 'details') {
      // Parse input: "Name, Class, Subject"
      const parts = text.split(',').map(part => part.trim());
      
      if (parts.length < 3) {
        bot.sendMessage(chatId, `❌ Please provide all details in the format:\n\nName, Class, Subject\n\nExample: Ahmed, Class 10, Mathematics`);
        return;
      }

      const name = parts[0];
      const demoClass = parts[1];
      const subject = parts[2];

      // Send confirmation
      const confirmMessage = `✅ **Demo Booking Confirmed!**

📝 **Your Details:**
👤 Name: ${name}
📚 Class: ${demoClass}
📖 Subject: ${subject}

**What's Next?**
Our team will contact you within 2 hours to confirm your demo session slot.

📱 WhatsApp: +971 56 777 8216
📧 Email: demo@smartclassconnect.com

**Get Ready For:**
🎥 Interactive live session
📚 Expert teaching demonstration
🎁 Free course materials sample
💡 Personalized guidance`;

      bot.sendMessage(chatId, confirmMessage, {
        parse_mode: 'Markdown',
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: '⬅️ Back to Menu',
                callback_data: 'back_to_start'
              }
            ]
          ]
        }
      });

      // Clear state
      delete global.demoBookingState[chatId];
    }
  }
};

module.exports = demoClassHandler;
