const plugins = [
    process.env.NODE_ENV === 'development' && 'react-refresh/babel'
].filter(Boolean);

module.exports = {
    presets:[
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript"
    ],
    plugins
}