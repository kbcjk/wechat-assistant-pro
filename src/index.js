import { WechatyBuilder } from 'wechaty'
import { WechatyWebPanelPlugin } from 'wechaty-web-panel'

const name = 'wechat-assistant-pro';
let bot = '';


console.log('默认使用uos web版微信协议')
bot = WechatyBuilder.build({
    name, // generate xxxx.memory-card.json and save login data for the next login
    puppetOptions: {
        uos: true
    },
    puppet: 'wechaty-puppet-wechat',
});


bot.use(
        WechatyWebPanelPlugin({
            apiKey: 'f76186128e212748868bb3bc913022076fe7bb9c',
            apiSecret: '4fdfd1d4c3319d0206830cbca144ca959d6c890b',
        })
    )
bot.start()
    .catch((e) => console.error(e));

