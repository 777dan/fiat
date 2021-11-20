let fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Blue",
    passengers: 2,
    mileage: 88000,
    started: false,
    fuel: 0,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started == true && this.fuel > 1) {
            alert("Бип!");
            this.fuel -= 2;
        }
        else if (this.fuel < 1) {
            this.started == false;
            alert("Сначала налейте в бак топливо!");
        }
        else {
            alert("Сначала запустите двигатель!");
        }
    },
    showFuel: function () {
        alert("У меня в баке " + this.fuel + " литров бензина!");
    },
    addFuel: function () {
        this.fuel += amount;
        alert("Теперь у меня в баке " + this.fuel + " литров бензина!");
    },
    toString: function () {
        return "Автомобиль " + this.make + this.year;
    },
};

console.log(fiat.toString());
alert(fiat.make);
// fiat.start();
// fiat.drive();
// fiat.showFuel();
// fiat.addFuel(amount = 8);

alert(fiat);