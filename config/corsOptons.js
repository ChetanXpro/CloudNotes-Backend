

const allowedOrigins = ["http://localhost:3000","http://localhost:5173","https://du-web-mp5m.vercel.app/","https://63c1b4bb30717f08a80bfd9c--transcendent-yeot-eeb75a.netlify.app"];



const corsOption = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not alowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOption;
