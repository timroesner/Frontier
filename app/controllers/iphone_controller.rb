class IphoneController < ApplicationController
	def index
      @cars = Car.all
  	end
  	def search
      @cars = Car.all
 	end
	def show
      @cars = Car.all
  	end
end
