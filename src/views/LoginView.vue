<template>
  <a-form layout="inline" :model="formState" @finish="handleFinish" @finishFailed="handleFinishFailed">
    <a-form-item>
      <a-input v-model:value="formState.userName" placeholder="Username">
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
      <a-button type="primary" html-type="submit" :disabled="formState.userName === '' || formState.password === ''">
        登 录
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { login } from '@/api/login'

const formState = reactive({
  userName: '',
  password: '',
});

const handleFinish = (values: any) => {
  login(formState).then(res => {

  })
};
const handleFinishFailed = (errors: any) => {
  console.log(errors);
};
</script>
