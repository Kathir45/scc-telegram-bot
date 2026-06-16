// Pricing plans handler
const pricingPlansHandler = {
  showPricingPlans: (bot, chatId, messageId) => {
    const message = `💰 Subscription Plans

Choose the plan that fits your learning needs!`;

    const options = {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: '📅 Monthly Plan',
              callback_data: 'plan_monthly'
            }
          ],
          [
            {
              text: '📊 Quarterly Plan',
              callback_data: 'plan_quarterly'
            }
          ],
          [
            {
              text: '🎯 Annual Plan',
              callback_data: 'plan_annual'
            }
          ],
          [
            {
              text: '⭐ Compare Plans',
              callback_data: 'plan_compare'
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

  handlePlanClick: (bot, chatId, data, messageId) => {
    const plans = {
      plan_monthly: {
        title: '📅 Monthly Plan',
        content: `**Monthly Subscription**

💰 **Price:** د.إ 179-349/month
⏱️ **Duration:** 1 month (auto-renew)

**Includes:**
✅ 30 live classes
✅ Unlimited video access
✅ Weekly doubt sessions
✅ 50+ practice problems
✅ Performance tracking
✅ Certificate on completion

**Best For:**
👨‍🎓 Students wanting to try first
👨‍🎓 Those with tight budgets
👨‍🎓 Short-term preparation

**Cancel Anytime** - No lock-in period`
      },
      plan_quarterly: {
        title: '📊 Quarterly Plan',
        content: `**Quarterly Subscription (3 Months)**

💰 **Price:** د.إ 499-999/quarter
⏱️ **Duration:** 3 months (save 15%)

**Includes:**
✅ 90 live classes
✅ Unlimited video access
✅ Bi-weekly doubt sessions
✅ 150+ practice problems
✅ Monthly progress report
✅ Certificate on completion
✅ 1 Free Mock Test

**Best For:**
👨‍🎓 Regular learners
👨‍🎓 Semester preparation
👨‍🎓 Better value & savings

**Save 15%** compared to monthly`
      },
      plan_annual: {
        title: '🎯 Annual Plan',
        content: `**Annual Subscription (12 Months)**

💰 **Price:** د.إ 1,799-3,299/year
⏱️ **Duration:** 12 months (save 30%)

**Includes:**
✅ 360 live classes
✅ Unlimited video access
✅ Weekly doubt sessions
✅ 600+ practice problems
✅ Quarterly progress reports
✅ Certificate on completion
✅ 4 Free Mock Tests
✅ Priority support
✅ 1 Free Counselling Session

**Best For:**
👨‍🎓 Dedicated learners
👨‍🎓 Multiple subjects
👨‍🎓 Full year preparation

**Save 30%** compared to monthly
**Best Value** - Most popular!`
      },
      plan_compare: {
        title: '⭐ Compare Plans',
        content: `**Plan Comparison**

| Feature | Monthly | Quarterly | Annual |
|---------|---------|-----------|--------|
| Price | د.إ 179-349 | د.إ 499-999 | د.إ 1,799-3,299 |
| Duration | 1 month | 3 months | 12 months |
| Live Classes | 30 | 90 | 360 |
| Doubt Sessions | Weekly | Bi-weekly | Weekly |
| Practice Problems | 50+ | 150+ | 600+ |
| Mock Tests | - | 1 free | 4 free |
| Support | Standard | Standard | Priority |
| Savings | - | 15% | 30% |

✨ **All plans include:**
- Unlimited video access
- Performance tracking
- Certificate on completion
- 24/7 support`
      }
    };

    const plan = plans[data];
    if (plan) {
      const options = {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: '✅ Subscribe Now',
                callback_data: 'subscribe_plan'
              }
            ],
            [
              {
                text: '🎁 Book Demo',
                callback_data: 'demo_class'
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

      bot.editMessageText(`*${plan.title}*\n\n${plan.content}`, {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: options.reply_markup,
        parse_mode: 'Markdown'
      });
    }
  }
};

module.exports = pricingPlansHandler;
