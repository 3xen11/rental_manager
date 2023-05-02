"use strict";

class App {
  // To co ja wynajmuję komuś
  #myRentals = [];

  constructor() {}

  _addNewRental() {
    // dodać VALUE z inputów które będą w "formularzu" dodawania lokum
    // mieszkanie, pokój i dom powinno się wybierać z selecta i na podstawie jego VALUE budować warunki dla if'ów
    // let rental;
    // zrobić 3 if'y z walidacja (mieszkanie, pokój, dom)
    // w każdym if'ie ma zostać dodany nowy wynajem:
    // rental = new Apartament/Room/House(tutaj dane z inputów)
    // this.#myRentals.push(rental)
  }

  _deleteRental() {
    // każde dodane lokum ma przycisk na usunięcie, po kliknięciu w usunięcie znajduje ID które jest zaszyte w elemencie
    // przelecieć po tavblicy #myRentals z pobranym wcześniej ID
    // usunąć z tablicy element który zawiera to ID
  }

  _addTenantNote() {
    //! tablica powinna być chyba w klasie lokatora
    // stworzyć tablicę na notatki
    // każde dodane lokum ma przycisk na dodanie notatki, po kliknięciu w dodanie znajduje ID które jest zaszyte w elemencie
    // utwiera się popup z dodaniem notatki
    // notatka zostaje wpushowana do tablicy obiektu który ma dane ID
  }

  _removeTenantNote() {
    //
  }

  _addRentalNote() {
    //! tablica powinna być chyba w klasie lokum
  }

  _removeRentalNote() {
    //
  }

  _renderMyRental() {
    //! jeżeli zrobię MVC to to powinno być w View
    // renderowanie dodanych lokum
    // trzeba zrobić tutaj markup i użyć insertAdjacentHHTML do dodania go
  }

  _calculateTotalEarning() {
    //! nie wiem czy nie dać tego do klasy Rental
    // przelecieć po tablicy z obiektami lokatorów i wyciągnąć czynsz z każdego lokatora
    // return (koszt spółdzielni - rachunki) + suma czynszów
  }
}

class Rental {
  #id;
  #tenants = [];
  #rentTotal;

  constructor(
    housingAssociationCost,
    bills,
    roomsNumber,
    floor,
    zipCode,
    city,
    street,
    apartamentNumber,
    title,
    area,
    deposit,
    mail,
    phoneNumber,
    facilities
  ) {
    this.housingAssociationCost = housingAssociationCost;
    this.bills = bills;
    this.roomsNumber = roomsNumber;
    this.floor = floor;
    this.zipCode = zipCode;
    this.city = city;
    this.street = street;
    this.apartamentNumber = apartamentNumber;
    this.title = title;
    this.area = area;
    this.deposit = deposit;
    this.mail = mail;
    this.phoneNumber = phoneNumber;
    this.facilities = facilities;
  }

  _addNewTenant() {
    // let tenant;
    // this.#tenants.push(tenant);
  }

  _deleteTenant() {}

  _calculateTotalRent() {}
}

class Apartament extends Rental {}
class Room extends Rental {}
class House extends Rental {}

const navigation = document.querySelector(".navigation").clientHeight;
const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const body = document.querySelector("body");

console.log(navigation);

const resizeMenu = () => {
  menu.classList.add(`h-[calc(100vh-${navigation}px)]`);
  menu.classList.toggle(`max-md:hidden`);
  body.classList.toggle("overflow-hidden");
  console.log(`SZEROKOŚĆ: ${navigation}`);
};

hamburger.addEventListener("click", resizeMenu);
