import resizeImage from '../../../utilities/SharpResize';

describe('Test image resizing', () => {
  it('should output error: inputfile is missing', async () => {
    const error = await resizeImage({
      source: 'source',
      width: 250,
      height: 250,
      target: 'traget',
    });
    expect(error).not.toBeFalse();
  });
});
