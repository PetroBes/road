// all classes, modules, functions, anything inside of the code
// that can be put into a single part - should have ONE single responsibility
// it should only ever one reason to change

class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }
  // this is the first reason to change
  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      this.logCalorieSurplus();
    }
  }
  // this is the second reason to change
  // so it violates the single responsibility principle
  logCalorieSurplus() {
    console.log('Max calories exceeded');
  }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);

