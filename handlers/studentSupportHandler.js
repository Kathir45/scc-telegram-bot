// Student support handler
const studentSupportHandler = {
  showOptions: (bot, chatId, messageId) => {
    const message = `What do you need help with? 🎓`;

    const options = {
      chat_id: chatId,
      message_id: messageId,
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: '📚 Course Selection',
              callback_data: 'student_course_selection'
            }
          ],
          [
            {
              text: '📝 Exam Preparation',
              callback_data: 'student_exam_prep'
            }
          ],
          [
            {
              text: '🎯 Career Guidance',
              callback_data: 'student_career'
            }
          ],
          [
            {
              text: '❓ Subject Doubts',
              callback_data: 'student_doubts'
            }
          ],
          [
            {
              text: '📖 Learning Resources',
              callback_data: 'student_resources'
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

  handleStudentQuery: (bot, chatId, action, messageId) => {
    let response = '';
    let actionUrl = '';

    switch (action) {
      case 'student_course_selection':
        response = `📚 **Course Selection Help**

We offer courses across multiple boards and subjects:

✅ CBSE Courses
✅ ICSE Courses
✅ IGCSE Courses
✅ State Board Courses

Would you like personalized course recommendations?
Tap "🎯 Find a Course" from the main menu to get started!

Or visit: https://smartclassconnect.com/courses`;
        actionUrl = 'https://smartclassconnect.com/courses';
        break;

      case 'student_exam_prep':
        response = `📝 **Exam Preparation Resources**

We provide comprehensive exam preparation materials:

✔ Previous Year Papers
✔ Practice Tests
✔ Revision Notes
✔ Mock Exams
✔ Chapter-wise Questions

👉 Visit our Study Materials section for more resources
📲 Download: https://smartclassconnect.com/exam-prep`;
        break;

      case 'student_career':
        response = `🎯 **Career Guidance**

Our expert counsellors can help you with:

✓ Career Path Selection
✓ Stream Recommendations (Science, Commerce, Arts)
✓ University Guidance
✓ Skill Development Advice

📞 **Connect with Our Counsellors:**
Phone: +971 56 777 8216
Email: support@smartclassconnect.com

Click "📞 Talk to Counsellor" to get started!`;
        break;

      case 'student_doubts':
        response = `❓ **Subject Doubts**

Have questions about your studies?

Our resources include:
📖 Detailed Explanations
📝 Solution Videos
💬 Expert Q&A
🎓 Live Class Interactions

Check out our courses and materials for comprehensive support!`;
        break;

      case 'student_resources':
        response = `📖 **Learning Resources**

Access a wealth of study materials:

📚 Notes & Summaries
🎥 Video Lectures
📝 Practice Questions
🔍 Formula Sheets
📊 Diagrams & Flowcharts

👉 Visit: https://smartclassconnect.com/resources`;
        break;

      default:
        response = 'How can I help you further? 😊';
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
              callback_data: 'student_support'
            }
          ]
        ]
      }
    });
  }
};

module.exports = studentSupportHandler;
