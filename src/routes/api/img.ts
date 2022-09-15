import express from 'express';
import resizeImage from '../../utilities/SharpResize';
import fs from 'fs';
import path from 'path';

const img = express.Router();

const inputFolder = path.resolve(__dirname, '../../../Images/original');
const outputFolder = path.resolve(__dirname, '../../../Images/thumbnail');

img.use(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    const filename = req.query.filename as string;
    const width = req.query.width as string;
    const height = req.query.height as string;
    const outputFile = path.join(
      outputFolder,
      `${filename}_${width}x${height}.jpg`
    );
    if (!filename) {
      res.send('Please type a valid Filename');
    } else if (!width || isNaN(Number(width)) || Number(width) <= 0) {
      res.send('please type a valid width, it must be positive number');
    } else if (!height || isNaN(Number(height)) || Number(height) <= 0) {
      res.send('please type a valid height, it must be positive number');
    } else if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder);
    } else if (fs.existsSync(outputFile)) {
      try {
        res.sendFile(outputFile);
      } catch (e) {
        console.log(e);
      }
    } else if (!fs.existsSync(outputFile)) {
      try {
        await resizeImage({
          source: path.join(inputFolder, `${filename}.jpg`),
          width: Number(width),
          height: Number(height),
          target: outputFile,
        });
        res.sendFile(outputFile);
      } catch (e) {
        console.log(e);
      }
    }
  }
);

export default img;
