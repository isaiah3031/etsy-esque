class CreateCarts < ActiveRecord::Migration[6.0]
  def change
    create_table :carts do |t|
      t.integer :author_id
      t.hash :contents
      t.boolean :ordered

      t.timestamps
    end
    add_index :carts, :author_id
  end
end
