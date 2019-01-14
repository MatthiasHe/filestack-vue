import vue from 'rollup-plugin-vue'

export default {
  input: 'src/Filestack.vue',
  output: {
    format: 'esm',
    file: 'dist/index.js'
  },
  external: ['vue'],
  plugins: [
    vue()
  ]
}
