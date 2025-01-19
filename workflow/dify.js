import { WorkflowClient } from '../sdk/dify.js'
import env from '../utils/env.js'
import Notify from "../utils/notify.js";

class Task {
    constructor(dify) {
      this.dify = dify;
    }

    taskName = "";

    async run() {}

    toString() {
      return `[${this.taskName}]`;
    }
}

class WorkflowTask extends Task {
    taskName = "Difyワークフロータスク";

    async run() {
      if(!env.DIFY_BASE_URL) {
        throw new Error("Dify APIアドレスが設定されていません。確認してから実行してください!");
      }
      let inputs = {}
      try {
        inputs = env.DIFY_INPUTS ? JSON.parse(env.DIFY_INPUTS) : {}
      } catch (error) {
        console.error('DIFY_INPUTSの形式が間違っています。JSON形式であることを確認してください。タスクの実行に影響を与える可能性があります。')
      }
      const user = 'dify-schedule'
      const workflow = new WorkflowClient(this.dify.token, env.DIFY_BASE_URL);
      console.log(`Difyワークフローの基本情報を取得中...`)
      const info = await workflow.info(user);
      this.workfolwName = info.data?.name || '';
      console.log(`Difyワークフロー【${info.data.name}】を実行開始...`)
      const response =  await workflow.getWorkflowResult(inputs, user,true)
      this.result = response.text || ''
    }

    toString() {
        return this.result
    }
}

async function run(args) {
    const tokens = env.DIFY_TOKENS.split(';');
    let messageList = [];
    for (let token of tokens) {
      const workflow = new WorkflowTask({token});

      await workflow.run(); // 実行

      const content = workflow.toString();

      console.log(content); // 結果を出力

      messageList.push(content);
    }

    const message = messageList.join(`\n${"-".repeat(15)}\n`);
    Notify.pushMessage({
      title: "Difyワークフロースケジューラー",
      content: message,
      msgtype: "text"
    });
  }

  run(process.argv.splice(2)).catch(error => {
    Notify.pushMessage({
      title: "",
      content: `Error: ${error.message}`,
      msgtype: "html"
    });

    throw error;
  });
