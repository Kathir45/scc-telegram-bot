// Lead collection handler - Supabase version
const supabase = require('../utils/supabaseClient');

const leadCollectionHandler = {
  startLeadCollection: (bot, chatId, messageId) => {
    const message = `🎉 **Great Choice!**

We'd love to help you with a FREE counselling session!

📋 Please enter your name:`;

    bot.editMessageText(message, {
      chat_id: chatId,
      message_id: messageId,
      reply_markup: {
        inline_keyboard: []
      }
    });

    // Store that this user is in lead collection process
    global.leadCollectionState = global.leadCollectionState || {};
    global.leadCollectionState[chatId] = { step: 'name' };
  },

  handleUserInput: async (bot, msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (!global.leadCollectionState) {
      global.leadCollectionState = {};
    }

    const userState = global.leadCollectionState[chatId];

    if (!userState) {
      return; // User is not in lead collection process
    }

    switch (userState.step) {
      case 'name':
        userState.name = text;
        userState.step = 'phone';
        bot.sendMessage(chatId, '📞 Now, please enter your phone number:');
        break;

      case 'phone':
        // Validate phone number (basic validation)
        if (!/^\+?[\d\s\-()]{7,}$/.test(text)) {
          bot.sendMessage(chatId, '❌ Invalid phone number. Please enter a valid phone number:');
          break;
        }
        userState.phone = text;
        userState.step = 'email';
        bot.sendMessage(chatId, '📧 Finally, please enter your email address:');
        break;

      case 'email':
        // Validate email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
          bot.sendMessage(chatId, '❌ Invalid email address. Please enter a valid email:');
          break;
        }

        // Save the lead to Supabase
        const lead = {
          id: Date.now(),
          user_id: chatId,
          name: userState.name,
          phone: userState.phone,
          email: text,
          status: 'new'
        };

        try {
          const { data, error } = await supabase
            .from('leads')
            .insert([lead])
            .select();

          if (error) throw error;

          // Send confirmation message
          bot.sendMessage(chatId, `✅ **Thank You!**

Your details have been recorded:
📝 Name: ${userState.name}
📞 Phone: ${userState.phone}
📧 Email: ${text}

Our counselling team will contact you soon!
⏰ Expected: Within 24 hours

Thank you for choosing Smart Class Connect! 🎓`, {
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: 'Back to Menu',
                    callback_data: 'back_to_start'
                  }
                ]
              ]
            }
          });

          // Clear the state
          delete global.leadCollectionState[chatId];

          // Log lead to console
          console.log('✅ New Lead Saved to Supabase:', lead);

        } catch (error) {
          console.error('Error saving lead to Supabase:', error);
          bot.sendMessage(chatId, '❌ An error occurred. Please try again later.');
        }
        break;
    }
  }
};

module.exports = leadCollectionHandler;
