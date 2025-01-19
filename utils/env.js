const env = process.env || {};

export default {
    /** Dify API アドレス デフォルト https://api.dify.ai/v1 */
  DIFY_BASE_URL: env.DIFY_BASE_URL || 'https://api.dify.ai/v1',  
  /* Dify Token, 複数のワークフロートークンを設定可能、各トークンは;で区切る */
  DIFY_TOKENS: env.DIFY_TOKENS,
  /* Dify Inputs, inputs パラメータは複数のキーと値のペア（Key/Value pairs）を含みます。各キーは特定の変数に対応し、各値はその変数の具体的な値です。JSON形式であることを確認してください。例: { name: '', topic: '' } */
  DIFY_INPUTS: env.DIFY_INPUTS,
  /**
   * メール設定
   * user 送信者のメールアドレス, pass 送信者のパスワード, to 受信者
   */
  EMAIL_USER: env.EMAIL_USER,
  EMAIL_PASS: env.EMAIL_PASS,
  EMAIL_TO: env.EMAIL_TO,
  /**
   * DingTalk設定
   * https://open.dingtalk.com/document/robots/custom-robot-access
   */
  DINGDING_WEBHOOK: env.DINGDING_WEBHOOK,
  /**
   * PushPlus設定
   * http://www.pushplus.plus/doc/guide/openApi.html
   */
  PUSHPLUS_TOKEN: env.PUSHPLUS_TOKEN,
  /**
   * WeCom（企業微信）ボット設定
   * https://developer.work.weixin.qq.com/document/path/91770
   */
  WEIXIN_WEBHOOK: env.WEIXIN_WEBHOOK,
  /**
   * Server酱プッシュキー
   * https://sct.ftqq.com/sendkey
   */
  SERVERPUSHKEY: env.SERVERPUSHKEY,
  /**
   * Feishu設定
   */
  FEISHU_WEBHOOK: env.FEISHU_WEBHOOK,
  /**
   * WeChat Assistant設定
   * https://wechat.aibotk.com
   * 個人センターでapikeyを取得
   */
  AIBOTK_HOOK: env.AIBOTK_HOOK || 'https://api-bot.aibotk.com',
  AIBOTK_KEY: env.AIBOTK_KEY,
  // グループ名を設定
  AIBOTK_ROOM_RECIVER: env.AIBOTK_ROOM_RECIVER,
  // 友達のニックネームを設定
  AIBOTK_CONTACT_RECIVER: env.AIBOTK_CONTACT_RECIVER,
};
