class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |player|
      player.string :name
      player.timestamps
    end
  end
end
