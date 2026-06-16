// Success stories handler
const successStoriesHandler = {
  showSuccessStories: (bot, chatId, messageId) => {
    const message = `🌟 Student Success Stories

Read inspiring stories from our successful students who achieved their goals!

🔗 View all stories: https://www.smartclassconnect.com/s/pages/stories`;

    const options = {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: '🎯 Medical Stream Success',
              callback_data: 'story_medical'
            }
          ],
          [
            {
              text: '💻 Engineering Stream Success',
              callback_data: 'story_engineering'
            }
          ],
          [
            {
              text: '📚 Board Exam Toppers',
              callback_data: 'story_toppers'
            }
          ],
          [
            {
              text: '🚀 International (IGCSE)',
              callback_data: 'story_igcse'
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

  handleStoryClick: (bot, chatId, data, messageId) => {
    const stories = {
      story_medical: {
        title: '🎯 Medical Stream Success',
        content: `**Fatima's Journey to Medical Success**

📊 **Before:** 65% average
📊 **After:** 92% NEET qualified! ✅

"Smart Class Connect's structured teaching helped me master Biology and Chemistry. The live classes and doubt sessions were game-changers. The teachers explained complex concepts so simply!" - Fatima, Dubai

**Results:**
✓ Improved from 65% to 92%
✓ Selected for MBBS program
✓ Regular quiz practice boosted confidence
✓ Personalized guidance from mentors

Started 8 months before exams. Dedicated 2 hours daily.

🔗 Learn more: https://www.smartclassconnect.com/s/pages/stories`
      },
      story_engineering: {
        title: '💻 Engineering Stream Success',
        content: `**Ahmed's Path to Engineering Excellence**

📊 **Before:** Physics was his weakness (58%)
📊 **After:** Physics expert (88%)

"The video lectures could be watched multiple times, and the practice problems were exactly like board exams. I went from failing Physics to scoring 88!" - Ahmed, Abu Dhabi

**Results:**
✓ Physics improvement: 58% → 88%
✓ Overall: 78% → 86%
✓ Cracked JEE Advanced
✓ Got admission in Top Engineering College

Consistency and practice with Smart Class Connect made all the difference!

🔗 Learn more: https://www.smartclassconnect.com/s/pages/stories`
      },
      story_toppers: {
        title: '📚 Board Exam Toppers',
        content: `**Zainab - CBSE Class 10 Topper**

🏆 **Score:** 97/100 in Science
🏆 **Overall:** 95% aggregate

"The Science course materials were comprehensive. Mock tests made exam day feel easy. I scored 97 in Science!" - Zainab, Dubai

**Her Strategy:**
✓ Joined 6 months before exams
✓ Completed all recorded lectures
✓ Solved 500+ practice problems
✓ Attended doubt sessions weekly
✓ Took 20+ mock tests

Result: Top of her school! 🎓

🔗 Learn more: https://www.smartclassconnect.com/s/pages/stories`
      },
      story_igcse: {
        title: '🚀 International (IGCSE) Success',
        content: `**Yousuf's IGCSE Excellence**

📊 **Grades:** A*, A*, A (Extended Math & Science)
🌍 **Accepted:** Top universities in UK & US

"The IGCSE curriculum is different, but Smart Class Connect's teachers understood it perfectly. The international teaching methodology was key!" - Yousuf, Dubai

**Achievements:**
✓ Grade A* in Extended Mathematics
✓ Grade A* in Extended Science
✓ Grade A in English
✓ Got scholarship offers
✓ Joining Cambridge

The preparation started 1 year before exams with consistent effort!

🔗 Learn more: https://www.smartclassconnect.com/s/pages/stories`
      }
    };

    const story = stories[data];
    if (story) {
      const options = {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: '🎯 Medical Success',
                callback_data: 'story_medical'
              }
            ],
            [
              {
                text: '💻 Engineering Success',
                callback_data: 'story_engineering'
              }
            ],
            [
              {
                text: '📚 Board Toppers',
                callback_data: 'story_toppers'
              }
            ],
            [
              {
                text: '🚀 IGCSE Success',
                callback_data: 'story_igcse'
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

      bot.editMessageText(`*${story.title}*\n\n${story.content}`, {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: options.reply_markup,
        parse_mode: 'Markdown'
      });
    }
  }
};

module.exports = successStoriesHandler;
