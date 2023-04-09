import fs from "fs";
const saveToCSV = async (winnersOfMonth, type) => {
  const file = "winners.csv";
  const dirPath = "winners";
  const fullPath = `${dirPath}/${file}`;
  const csvHeaders = "name,date,type";
  if(!fs.existsSync(dirPath)) {
    await fs.promises.mkdir(dirPath);
    await fs.promises.writeFile(`${fullPath}`, csvHeaders);
  }
  const currentData = (new Date()).toLocaleDateString();
  winnersOfMonth.map(async (winner) =>  
  await fs.promises.appendFile(`${fullPath}`, `\n${winner},${currentData},${type}`, {flag: "a"}))
}

export default saveToCSV;
