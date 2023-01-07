import { CloudinaryMiddleware } from './cloudinary.middleware';

describe('CloudinaryMiddleware', () => {
  it('should be defined', () => {
    expect(new CloudinaryMiddleware()).toBeDefined();
  });
});
