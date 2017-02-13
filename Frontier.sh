#!/bin/bash

rails new Frontier

cd Frontier

bin/rails generate scaffold Cars licenseplate:string make:string model:string category:string doors:string

bin/rails generate scaffold Users First:string Last:string Street:string City:string Country:string DL:string

bin/rails generate controller Welcome index

bin/rake db:migrate

bin/rails console

Car.create licenseplate: "CA-6LIK367", make: "Honda", model: "Civic", category: "Standard", doors: "4"

Car.create licenseplate: "CA-9GRH23L", make: "VW", model: "Jetta", category: "Standard", doors: "4"

Car.create licenseplate: "CA-7BDB752", make: "Ford", model: "Fusion", category: "Full-Size", doors: "4"

Car.create licenseplate: "CA-6XNX264", make: "Ford", model: "Focus", category: "Compact", doors: "4"

Users.create First: "John", Last: "Appleseed", Street: "123 Fake Street", City: "Faketown", Country: "Fakeland", DL: "1W34TY65L"

