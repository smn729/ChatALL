<template>
  <v-list-subheader>{{ bot.getBrandName() }}</v-list-subheader>
  <login-setting :bot="bot"></login-setting>
</template>

<script>
import Bot from "src/bots/microsoft/BingChatBot";
import LoginSetting from "src/components/BotSettings/LoginSetting.vue";

export default {
  components: {
    LoginSetting,
  },
  data() {
    return {
      bot: Bot.getInstance(),
    };
  },
};
</script>
