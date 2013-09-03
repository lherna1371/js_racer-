  # Look in app/views/index.erb

get '/' do
    erb :index
end





####POST 

post '/game' do
  @player_one = Player.create(name: params["player1"])
  @player_two = Player.create(name: params["player2"])
  p params
	erb :game
end

post '/winner' do
  timetowin = params[:time]
  if params[:winner_id] == "player_1"
    @game = Game.create(winner_id: (Player.last.id)-1, time: timetowin)
    @winner = Player.find(@game.winner_id)
    puts @winner.name
    puts @game.time
    erb :winners, layout: false
  elsif 
    params[:winner_id] == "player_2" 
    @game = Game.create(winner_id: Player.last.id, time: timetowin)
    @winner = Player.find(@game_two.winner_id)
    puts @winner.name
    puts @game.time
    erb :winners, layout: false
  end 

end
