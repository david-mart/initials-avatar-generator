import {getInitials} from '..';

describe('generate', () => {
  describe('getInitials', () => {
    it('should return initials for the provided name', () => {
      expect(getInitials()('David Mart')).toEqual('DM');
      expect(getInitials(1)('david mart')).toEqual('D');
      expect(getInitials()('davidmart')).toEqual('D');
      expect(getInitials()('davidmart@gmail.com')).toEqual('D');
      expect(getInitials()('1 d')).toEqual('1D');
      expect(getInitials()('')).toEqual('');
    });
  });
});
