class CreateCarts < ActiveRecord::Migration[6.0]
  def change
    create_table :carts do |t|
      t.integer :owner_id
      t.string :contents, array: true, default: []
      t.boolean :ordered, default: false

      t.timestamps
    end
    add_index :carts, :owner_id
  end
end
