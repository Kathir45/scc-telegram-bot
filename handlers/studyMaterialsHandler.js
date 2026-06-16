// Study materials handler
const studyMaterialsHandler = {
  showClassOptions: (bot, chatId, messageId) => {
    const message = `📚 **Study Materials**

Select your class:`;

    const keyboard = [];
    ['Class 9', 'Class 10', 'Class 11', 'Class 12'].forEach(cls => {
      keyboard.push([
        {
          text: cls,
          callback_data: `material_class_${cls.replace(' ', '_').toLowerCase()}`
        }
      ]);
    });

    keyboard.push([
      {
        text: '← Back to Menu',
        callback_data: 'back_to_start'
      }
    ]);

    bot.editMessageText(message, {
      chat_id: chatId,
      message_id: messageId,
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: keyboard
      }
    });
  },

  handleClassSelection: (bot, chatId, data, messageId) => {
    const selectedClass = data.replace('material_class_', '').replace('_', ' ').toUpperCase();

    const message = `What materials do you need? 📖

(Selected: ${selectedClass})`;

    const keyboard = [
      [
        {
          text: '📝 Notes & Summaries',
          callback_data: `material_${selectedClass.replace(' ', '_').toLowerCase()}_notes`
        }
      ],
      [
        {
          text: '📄 PDFs',
          callback_data: `material_${selectedClass.replace(' ', '_').toLowerCase()}_pdf`
        }
      ],
      [
        {
          text: '❓ Practice Questions',
          callback_data: `material_${selectedClass.replace(' ', '_').toLowerCase()}_questions`
        }
      ],
      [
        {
          text: '📊 Previous Year Papers',
          callback_data: `material_${selectedClass.replace(' ', '_').toLowerCase()}_papers`
        }
      ],
      [
        {
          text: '← Back',
          callback_data: 'study_materials'
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

  handleMaterialType: (bot, chatId, data, messageId) => {
    const parts = data.split('_');
    const selectedClass = parts[1].toUpperCase();
    const materialType = parts[2];

    let typeText = '';
    let typeUrl = '';

    switch (materialType) {
      case 'notes':
        typeText = '📝 Notes & Summaries';
        typeUrl = 'https://smartclassconnect.com/notes';
        break;
      case 'pdf':
        typeText = '📄 PDFs';
        typeUrl = 'https://smartclassconnect.com/materials/pdf';
        break;
      case 'questions':
        typeText = '❓ Practice Questions';
        typeUrl = 'https://smartclassconnect.com/practice-questions';
        break;
      case 'papers':
        typeText = '📊 Previous Year Papers';
        typeUrl = 'https://smartclassconnect.com/previous-papers';
        break;
    }

    const message = `📖 **${typeText}**

Class: ${selectedClass}

We have comprehensive materials for all subjects including:

✅ Science
✅ Mathematics
✅ English
✅ Social Studies
✅ History
✅ Geography
✅ And More...

👉 Access all materials: ${typeUrl}

*Login with your account to download*`;

    bot.editMessageText(message, {
      chat_id: chatId,
      message_id: messageId,
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: '📥 Download Materials',
              url: typeUrl
            }
          ],
          [
            {
              text: '← Back',
              callback_data: 'study_materials'
            }
          ]
        ]
      }
    });
  }
};

module.exports = studyMaterialsHandler;
