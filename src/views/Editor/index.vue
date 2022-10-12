<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden;"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
</template>

<script setup>
import '@wangeditor/editor/dist/css/style.css'
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Toolbar, Editor } from '@wangeditor/editor-for-vue'

const editorRef = shallowRef()
const valueHtml = ref('<p>Hello</p>')
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }
const mode = 'default'

onBeforeUnmount(() => {
  if (!editorRef.value) return
  editorRef.value.destroy()
})

const handleCreated = (editor) => editorRef.value = editor

</script>

<style scoped>

</style>