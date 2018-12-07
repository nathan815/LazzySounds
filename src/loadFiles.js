const requireMp3 = require.context("./assets/mp3", false, /\.mp3$/);
const fileNames = [];
requireMp3.keys().forEach(fileName => {
    fileNames.push(fileName.substring(2));
});
export default fileNames;