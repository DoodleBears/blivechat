<template>
  <div class='monaco-editor' ref='monacoEditor'></div>
</template>

<script>
import * as monaco from 'monaco-editor'
import _ from 'lodash'
export default {
  name: 'MonacoEditor',
  props: {
    value: {
      default: '',
    },
  },
  data() {
    return {
      editor: null,
    }
  },
  watch: {
    value(newValue) {
      if (this.editor) {
        if (newValue !== this.editor.getValue()) {
          this.editor.setValue(newValue)
        }
      }
    },
  },
  mounted() {
    if (!this.editor) {
      this.editor = monaco.editor.create(this.$refs.monacoEditor, {
        value: this.value,
        language: 'css',
        theme: 'vs-dark',
        tabSize: 2,
        fixedOverflowWidgets: true,
        minimap: {
          size: "fit"
        },
      })
    }
    this.editor.onDidChangeModelContent(() => {
      const value = this.editor.getValue()
      this.$emit('input', value)
    })
    window.addEventListener("resize", _.throttle(() => {
      this.editor.layout()
    }, 300))
  },
  beforeDestroy() {
    if (this.editor) {
      this.editor.dispose()
    }
  },
}
</script>

<style scoped>
.monaco-editor {
  height: 100%;
  width: 100%;
}
</style>
