json.extract! user, :id, :First, :Last, :Street, :City, :Country, :DL, :created_at, :updated_at
json.url user_url(user, format: :json)