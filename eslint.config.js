import markdown from "@eslint/markdown";

export default [
    {
        plugins: {
            markdown
        }
    },
    {
        files: ["**/*.md"],
        processor: "markdown/markdown"
    },
    {
        files: ["**/*.md/*.js"],
        rules: {
            "space-in-parens": 2
        }
    }
];