module.exports = class MathHelper {
  static getRandom(MAX_NUM) {
    return Math.floor( Math.random() * MAX_NUM);
  }
}