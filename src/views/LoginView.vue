<template>
  <a-form layout="inline" :model="formState" @finish="handleFinish" @finishFailed="handleFinishFailed">
    <a-form-item>
      <a-input v-model:value="formState.user" placeholder="Username">
        <template #prefix>
          <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input v-model:value="formState.password" type="password" placeholder="Password">
        <template #prefix>
          <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" :disabled="formState.user === '' || formState.password === ''">
         登 录
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script setup lang="ts">
import { reactive } from 'vue';

const formState = reactive({
  user: '222',
  password: '11111',
});

const handleFinish = (values: any) => {
  console.log(formState.user);
};
const handleFinishFailed = (errors:any) => {
  console.log(errors);
};
</script>
