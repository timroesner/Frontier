class SearchController < ApplicationController
  def index
  	@cars = Car.all
  end
end
