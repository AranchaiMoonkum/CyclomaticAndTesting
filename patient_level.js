function seven_colors_patient(pressure, sugar) {
  if (pressure <= 120 && sugar < 100) {
    return "White";
  }

  if (pressure > 120 && pressure <= 139 && sugar >= 100 && sugar <= 125) {
    return "Green";
  }

  if (pressure >= 140 && pressure <= 159 && sugar >= 125 && sugar <= 154) {
    return "Yellow";
  }

  if (pressure >= 160 && pressure <= 179 && sugar >= 155 && sugar <= 182) {
    return "Orange";
  }

  if (pressure >= 180 || sugar >= 183) {
    return "Red";
  }
}

module.exports = seven_colors_patient;
