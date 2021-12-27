module.exports = {
    mode: "jit",
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        colors: {
            primary: "#25396F",
            secondary: "#7C8DB5",
            accent: "#ECEFF7",
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
