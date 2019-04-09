import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ],
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  }
}
  