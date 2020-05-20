module.exports = {
    title: 'Peg-Top',
    base: "/peg-top/",
    description: '一个简易的Vue UI',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' }
        ],
        sidebar: [
            {
                title: '开始',
                path: '/get-started/',
            },
            {
                title: '快速上手',   // 必要的
                children: ['/install/'],
            },
            {
                title: '组件',
                children: ['/components/button.md', '/components/buttonGroup.md', '/components/input.md', '/components/icon.md', '/components/grid.md', '/components/layout.md', '/components/tab.md', '/components/toast.md', '/components/collapse.md', './components/popover.md']
            }
        ]
    }
}