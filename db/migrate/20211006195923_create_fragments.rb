class CreateFragments < ActiveRecord::Migration[7.0]
  def change
    create_table :fragments do |t|
      t.string :element, null: false, default: "p"
      t.string :data, null: false, default: ""
      t.integer :position
      t.string :meta, default: ""

      t.timestamps
    end
  end
end
