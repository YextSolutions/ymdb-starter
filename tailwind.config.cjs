const { ComponentsContentPath } = require("@yext/search-ui-react");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx}",
    ComponentsContentPath,
  ],
  theme: {
    extend: {
      boxShadow: {
        movie: "rgba(243, 244, 246, 0.35) 0px 5px 15px",
      },
      fontFamily: {
        logo: ["Yanone"],
        heading: ["Orbitron"],
        body: ["Poppins"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
