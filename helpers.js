module.exports = {
  stamped: {
    name: "Letters (Stamped)",
    getPrice: (weight) => {
      let result = "";
      switch(weight) {
        case weight < 1:
          result = "0.55";
          break;
        case weight < 2:
          result = "0.75";
          break;
        case weight < 3:
          result = "0.95";
          break;
        case weight < 3.5:
          result = "1.15";
          break;
        default:
          result = "1.15";
      }
      return result;
    }
  },
  metered: {
    name: "Letters (Metered)",
    getPrice: (weight) => {
      let result = "";
      switch(weight) {
        case weight < 1:
          result = "0.51";
          break;
        case weight < 2:
          result = "0.71";
          break;
        case weight < 3:
          result = "0.91";
          break;
        case weight < 3.5:
          result = "1.11";
          break;
        default:
          result = "1.11";
      }
      return result;
    }
  },
  flats: {
    name: "Large Envelopes (Flats)",
    getPrice: (weight) => {
      let result = 1;
      if (weight === 1) {
        return result; 
      } 

      if (weight > 13) {
        result = "3.40";
      } else {
        for (var i = 2; i <= weight; i++) {
          result += 0.20;
        }
        result = Math.round(result * 100) / 100;
        result = result.toString();
      }
      
      return result;
    }
  },
  firstClass: {
    name: "First-Class Package Service—Retail",
    getPrice: (weight) => {
      let result = "";
      switch(weight) {
        case weight < 4:
          result = "4.00";
          break;
        case weight < 8:
          result = "4.80";
          break;
        case weight < 12:
          result = "5.50";
          break;
        default:
          result = "6.25";
      }
      return result;
    }
  }
}