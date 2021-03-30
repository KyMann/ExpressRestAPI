module.exports = {
    plugins: [
        '@babel/plugin-syntax-dynamic-import'
        '@babel/plugins-syntax-import-meta'
    ],
    presets: [
        ['@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ]
    ]    
};