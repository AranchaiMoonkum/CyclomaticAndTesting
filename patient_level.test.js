const seven_colors_patient = require('./patient_level');

describe('seven_colors_patient function', () => {
  test('should return "White" when pressure is 115 and sugar is 90', () => {
    expect(seven_colors_patient(115, 90)).toBe('White');
  });

  test('should return "Green" when pressure is 130 and sugar is 110', () => {
    expect(seven_colors_patient(130, 110)).toBe('Green');
  });

  test('should return "Yellow" when pressure is 145 and sugar is 130', () => {
    expect(seven_colors_patient(145, 130)).toBe('Yellow');
  });

  test('should return "Orange" when pressure is 165 and sugar is 170', () => {
    expect(seven_colors_patient(165, 170)).toBe('Orange');
  });

  test('should return "Red" when pressure is 185 and sugar is 190', () => {
    expect(seven_colors_patient(185, 190)).toBe('Red');
  });
});
