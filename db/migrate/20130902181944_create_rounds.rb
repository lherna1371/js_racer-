class CreateRounds < ActiveRecord::Migration
  def change
    create_table :rounds do |round|
      round.belongs_to :player
      round.belongs_to :game
      round.timestamps
    end
    add_index :rounds, [:player_id, :game_id], unique: true
  end
end
