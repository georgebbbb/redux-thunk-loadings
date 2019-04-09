

const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        browsers: ['ie >= 9']
      },
      exclude: ['transform-async-to-generator', 'transform-regenerator'],

      modules: false,
      loose: true
    }
  ],
]

const plugins = ['@babel/plugin-proposal-object-rest-spread']

module.exports = { presets, plugins }
