import express from 'express';
import resizeImage from '../../utilities/SharpResize';
import fs from 'fs';
import path from 'path';

const img = express.Router();

const inputFolder = path.resolve(__dirname, '../../../Images/original');
const outputFolder = path.resolve(__dirname, '../../../Images/thumbnail');

img.use('/', async (req, res) => {
  const filename = req.query.filename as string;
  const width = req.query.width as string;
  const height = req.query.height as string;
  if (!filename) {
    res.send('Please type a valid Filename');
  } else if (!width || isNaN(Number(width))) {
    res.send('please type a valid width, it must be number');
  } else if (!height || isNaN(Number(height))) {
    res.send('please type a valid height, it must be number');
  } else if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  } else {
    try {
      await resizeImage({
        source: path.join(inputFolder, `${filename}.jpg`),
        width: Number(width),
        height: Number(height),
        target: path.join(outputFolder, `${filename}_${width}x${height}.jpg`),
      });
      res.sendFile(
        path.join(outputFolder, `${filename}_${width}x${height}.jpg`)
      );
    } catch (e) {
      console.log(e);
    }
  }
});

export default img;
