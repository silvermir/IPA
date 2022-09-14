import sharp from 'sharp';

interface ImgData {
  source: string;
  width: number;
  height: number;
  target: string;
}

const resizeImage = async (data: ImgData): Promise<unknown | string> => {
  try {
    await sharp(data.source)
      .resize(data.width, data.height, {
        fit: 'contain',
      })
      .toFile(data.target);
    return null;
  } catch (e) {
    console.log(e, 'An error occurred, image could not be resized');
  }
};

export default resizeImage;
