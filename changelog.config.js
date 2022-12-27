module.exports = {
    disableEmoji: false,
    format: "{type}{scope}: {emoji}{subject}",
    list: ["test", "feat", "fix", "chore", "docs", "refactor", "style", "ci", "perf",],
    maxMessageLength: 64,
    minMessageLength: 3,
    questions: ["type", "scope", "subject", "body", "breaking", "issues", "lerna",],
    scopes: [],
    types: {
        chore: {
            description: "构建过程或辅助工具更改",
            emoji: "🤖",
            value: "chore",
        },
        ci: {
            description: " CI 相关更改",
            emoji: "🎡",
            value: "ci",
        },
        docs: {
            description: "仅文档更改",
            emoji: "✏️",
            value: "docs",
        },
        feat: {
            description: "一个新功能",
            emoji: "🎸",
            value: "feat",
        },
        fix: {
            description: "错误修复",
            emoji: "🐛",
            value: "fix",
        },
        perf: {
            description: "提高性能的代码更改",
            emoji: "⚡️",
            value: "perf",
        },
        refactor: {
            description: "既不修复错误也不添加功能的代码更改",
            emoji: "💡",
            value: "refactor",
        },
        release: {
            description: "创建发布提交",
            emoji: "🏹",
            value: "release",
        },
        style: {
            description: "标记、空格、格式、缺少分号……",
            emoji: "💄",
            value: "style",
        },
        test: {
            description: "添加测试",
            emoji: "💍",
            value: "test",
        },
        messages: {
            type: "选择你要提交的类型:",
            customScope: "选择此提交影响的范围:",
            subject: "写一篇简短的命令式语气描述:\n",
            body: "提供更改的详细描述:\n ",
            breaking: "列出任何破坏性的更改:\n",
            footer: "发布此提交关闭，例如 #123:",
            confirmCommit: "此提交影响的包:\n",
        },
    },
};
