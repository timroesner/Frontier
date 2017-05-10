class SearchController < ApplicationController
  def index
  	@cars = Car.all
  end
  
  def show
      @cars = Car.all
  end
end
