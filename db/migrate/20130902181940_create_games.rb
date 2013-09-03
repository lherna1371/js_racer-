class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |game|
      game.integer :winner_id
      game.float :time
      game.timestamps
    end
  end
end
