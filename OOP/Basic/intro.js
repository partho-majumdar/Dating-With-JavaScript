// Proccedual

var width = 10;
var height = 20;

function calculateArea(width, height) {
  return width * height;
}

function calculateRange(width, height) {
  return 2 * (width, height);
}

var area = calculateArea(width, height);
var range = calculateRange(width, height);

// Object Oriented

var ract = {
  width1: 10,
  height1: 20,

  calculateArea1: function (width1, height1) {
    return (this.width1 * this.height1);
  },

  calculateRange1: function (width1, height1) {
    return 2 * (this.width1 * this.height1);
  },
};

var area1 = ract.calculateArea();
var range1 = ract.calculateRange();
