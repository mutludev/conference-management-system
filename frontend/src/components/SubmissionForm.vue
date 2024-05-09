<script setup>
import { ref } from 'vue'
import { UploadOutlined } from '@ant-design/icons-vue'
let formState = ref({
  degreeProgram: '',
  title: '',
  abstract: '',
  paper: ''
})
function onSubmit(value) {
  console.log(value)
}

const open = defineModel()
</script>

<template>
  <a-modal :style="{ width: '800px' }" :footer="null" v-model:open="open">
    <a-form layout="vertical" :model="formState" @finish="onSubmit">
      <h1>Paper Submission Form</h1>
      <hr />
      <a-form-item
        name="degreeProgram"
        label="Degree Program"
        :rules="[{ required: true, message: 'Please enter your degree program!' }]"
      >
        <a-radio-group v-model:value="formState.degreeProgram">
          <a-radio value="MA">M.A.</a-radio>
          <a-radio value="PhD">Ph.D.</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item
        name="title"
        label="Title of your paper"
        :rules="[
          { required: true, message: 'Please enter the title of your paper!' },
          { max: 50, message: 'Length should be 50 at max!', trigger: 'change' }
        ]"
      >
        <a-input v-model:value="formState.title" placeholder="Maximum of 50 characters" />
      </a-form-item>
      <a-form-item
        name="abstract"
        label="Abstract"
        :rules="[{ required: true, message: 'Please enter the abstract of your paper!' }]"
      >
        <a-textarea v-model:value="formState.abstract" :rows="5" />
      </a-form-item>
      <a-form-item
        name="paper"
        label="Full Paper"
        :rules="[{ required: true, message: 'Please upload your paper!' }]"
      >
        <a-upload
          v-model:value="formState.paper"
          v-model:fileList="fileList"
          name="file"
          :multiple="false"
          accept=".pdf"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        >
          <a-button><UploadOutlined />Upload</a-button>
        </a-upload>
      </a-form-item>
      <button class="submit" type="submit">Submit</button>
    </a-form>
  </a-modal>
</template>

<style scoped>
.form-wrapper {
  max-width: 600px;
  height: auto;
  background-color: white;
  padding: 16px;
  border-radius: 20px;
}

h1 {
  color: hsl(0, 0%, 20%);
}

.submit {
  width: 100%;
  height: 40px;
  border-radius: 6px;
  color: white;
  background-color: hsl(11, 100%, 60%);
  border: none;
}

.submit:hover {
  background-color: hsl(11, 100%, 55%);
  cursor: pointer;
}

.submit:active {
  background-color: hsl(11, 100%, 50%);
}

hr {
  margin: 16px 0;
  border: none;
  border-top: 1px solid hsl(0, 0%, 85%);
}
</style>
