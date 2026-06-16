// Referral program handler
const referralHandler = {
  showReferralOptions: (bot, chatId, messageId) => {
    const message = `🎁 Refer & Earn Program

Share the power of Smart Class Connect and earn rewards!

**How It Works:**
1. Share your unique referral code
2. Your friends join using your code
3. You earn rewards when they subscribe

**What You Earn:**
💰 AED 50 cash reward per successful referral
🎓 Free month of courses (after 3 referrals)
📱 Exclusive merchandise
📈 Loyalty bonuses

Your Code: *SCC_FRIEND_001*
Referrals Made: 0
Rewards Earned: AED 0`;

    const options = {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: '📤 Share Your Code',
              callback_data: 'referral_share'
            }
          ],
          [
            {
              text: '📊 View Referrals',
              callback_data: 'referral_view'
            }
          ],
          [
            {
              text: '🎯 Referral Terms',
              callback_data: 'referral_terms'
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

  handleReferralAction: (bot, chatId, data, messageId) => {
    if (data === 'referral_share') {
      const message = `📤 Share Your Referral Code

Your Unique Code: **SCC_FRIEND_001**

**Copy & Share this message with friends:**

"Join me on Smart Class Connect! 🎓
Use my referral code: **SCC_FRIEND_001**
Get premium education from expert teachers.
We both get rewards when you join! 🎁"

**Share on:**`;

      const options = {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: 'WhatsApp 💬',
                url: 'https://wa.me/?text=Join%20Smart%20Class%20Connect%20using%20code%20SCC_FRIEND_001'
              }
            ],
            [
              {
                text: 'Telegram 📱',
                url: 'https://t.me/share/url?url=smartclassconnect.com&text=Use%20code%20SCC_FRIEND_001'
              }
            ],
            [
              {
                text: 'Copy Code 📋',
                callback_data: 'referral_copy'
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

    } else if (data === 'referral_view') {
      const message = `📊 Your Referral Dashboard

**Total Referrals:** 0
**Active Subscriptions:** 0
**Total Earnings:** AED 0

**Recent Activity:**
No referrals yet

Start sharing your code to earn rewards! 🚀`;

      const options = {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: '📤 Share Code',
                callback_data: 'referral_share'
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

    } else if (data === 'referral_terms') {
      const message = `📋 Referral Program Terms

**Eligibility:**
✓ Must be an active subscriber
✓ Friend must be new customer
✓ Valid referral code required

**Rewards:**
💰 AED 50 per new referral
🎓 Free month after 3 referrals
🏆 Special bonuses for 10+ referrals

**Terms:**
- Reward credited within 7 days of subscription
- Friend must remain subscribed for 30 days
- Unlimited referrals allowed
- Not valid with other offers

Questions? Contact: support@smartclassconnect.com`;

      const options = {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: '📤 Start Sharing',
                callback_data: 'referral_share'
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
  }
};

module.exports = referralHandler;
