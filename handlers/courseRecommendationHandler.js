// Course recommendation engine
const courses = require('../data/courses');

const courseRecommendationHandler = {
  startRecommendation: (bot, chatId, messageId) => {
    const message = `🎯 **Course Recommendation Engine**

Let's find the perfect course for you!

What class are you in?`;

    const keyboard = [
      [
        {
          text: '🌐 Explore All Courses',
          url: 'https://www.smartclassconnect.com/s/store'
        }
      ]
    ];
    
    ['Class 9', 'Class 10', 'Class 11', 'Class 12'].forEach(cls => {
      keyboard.push([
        {
          text: cls,
          callback_data: `class_${cls.replace(' ', '_').toLowerCase()}`
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
    const selectedClass = data.replace('class_', '').replace('_', ' ').toUpperCase();

    const message = `Which board are you studying? 📚

(You selected: ${selectedClass})`;

    const keyboard = [
      [
        {
          text: '🇦🇪 CBSE',
          callback_data: `board_${selectedClass.replace(' ', '_').toLowerCase()}_cbse`
        }
      ],
      [
        {
          text: '🇦🇪 ICSE',
          callback_data: `board_${selectedClass.replace(' ', '_').toLowerCase()}_icse`
        }
      ],
      [
        {
          text: '🌍 IGCSE',
          callback_data: `board_${selectedClass.replace(' ', '_').toLowerCase()}_igcse`
        }
      ],
      [
        {
          text: '← Back',
          callback_data: 'find_course'
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

  handleBoardSelection: (bot, chatId, data, messageId) => {
    const parts = data.split('_');
    // data format: board_class_9_cbse or board_class_10_icse
    const classNum = parts[2]; // e.g., "9", "10", "11", "12"
    const selectedBoard = parts[3].toLowerCase(); // e.g., "cbse", "icse", "igcse"

    const message = `Which subject are you interested in?

📚 Class: Class ${classNum}
📋 Board: ${selectedBoard.toUpperCase()}`;

    const keyboard = [];
    
    // Get available subjects for this board and class
    let classKey = `class${classNum}`;
    
    // For IGCSE, use grade format instead of class
    if (selectedBoard === 'igcse') {
      const gradeMap = { 'class9': 'grade9', 'class10': 'grade10', 'class11': 'grade11', 'class12': 'grade12' };
      classKey = gradeMap[classKey] || classKey;
    }

    let availableSubjects = [];
    if (courses[selectedBoard] && courses[selectedBoard][classKey]) {
      availableSubjects = Object.keys(courses[selectedBoard][classKey]);
    }

    availableSubjects.forEach(subject => {
      keyboard.push([
        {
          text: subject.charAt(0).toUpperCase() + subject.slice(1),
          callback_data: `subject_${classKey}_${selectedBoard}_${subject}`
        }
      ]);
    });

    keyboard.push([
      {
        text: '← Back',
        callback_data: `class_class_${classNum}`
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

  handleSubjectSelection: (bot, chatId, data, messageId) => {
    const parts = data.split('_');
    // data format: subject_class9_cbse_science or subject_grade10_igcse_mathematics
    const classKey = parts[1]; // e.g., "class9", "grade10"
    const selectedBoard = parts[2]; // e.g., "cbse", "icse", "igcse"
    const selectedSubject = parts[3]; // e.g., "science", "mathematics"

    // Get the actual course from database
    let courseData = null;
    
    if (courses[selectedBoard] && courses[selectedBoard][classKey] && courses[selectedBoard][classKey][selectedSubject]) {
      courseData = courses[selectedBoard][classKey][selectedSubject];
    }

    if (!courseData) {
      const message = `❌ Course not found for ${selectedBoard.toUpperCase()} ${classKey} ${selectedSubject}`;
      bot.editMessageText(message, {
        chat_id: chatId,
        message_id: messageId,
        parse_mode: 'Markdown',
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: '← Back',
                callback_data: 'find_course'
              }
            ]
          ]
        }
      });
      return;
    }

    const subjectDisplay = selectedSubject.charAt(0).toUpperCase() + selectedSubject.slice(1);
    const classDisplay = classKey.replace('class', 'Class ').replace('grade', 'Grade ').toUpperCase();

    const message = `✅ **Recommended Course**

📚 **${courseData.title}**

📝 **Description:** ${courseData.description}

💰 **Price:** ${courseData.price}

**Course Highlights:**
✔ Live Interactive Classes
✔ Recorded Sessions for Revision
✔ Comprehensive Notes & Study Materials
✔ Regular Practice Tests
✔ Doubt Resolution Sessions
✔ Certificate on Completion

**What You'll Get:**
🎥 Video Lectures
📝 Chapter-wise Notes
📊 Practice Questions
🏆 Progress Tracking
📱 Mobile App Access`;

    const keyboard = [
      [
        {
          text: '❤️ Get Course Info',
          url: courseData.url
        }
      ],
      [
        {
          text: '💬 Free Counselling',
          callback_data: 'lead_yes'
        }
      ],
      [
        {
          text: '← Back',
          callback_data: 'find_course'
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

module.exports = courseRecommendationHandler;
