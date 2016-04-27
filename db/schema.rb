# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160427181938) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bottle_messages", force: :cascade do |t|
    t.integer  "user_id"
    t.text     "content"
    t.date     "delivery_date"
    t.boolean  "seen",          default: false
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
  end

  create_table "check_ins", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "feeling"
    t.string   "thankful1"
    t.string   "thankful2"
    t.string   "thankful3"
    t.string   "horizon"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "inclusions", force: :cascade do |t|
    t.integer  "stream_id"
    t.integer  "order"
    t.integer  "includable_id"
    t.string   "includable_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "joke_lists", force: :cascade do |t|
    t.integer  "creator_id", default: 0
    t.string   "label"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "jokes", force: :cascade do |t|
    t.string   "joke"
    t.integer  "joke_list_id", default: 1
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  create_table "journal_entries", force: :cascade do |t|
    t.integer  "user_id"
    t.text     "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "journals", force: :cascade do |t|
    t.string   "label"
    t.integer  "creator_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "news_lists", force: :cascade do |t|
    t.string   "label"
    t.integer  "creator_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "url"
    t.string   "search_term"
  end

  create_table "news_updates", force: :cascade do |t|
    t.integer "news_list_id"
    t.string  "type"
    t.string  "sectionName"
    t.string  "url"
    t.string  "title"
  end

  create_table "photo_collections", force: :cascade do |t|
    t.integer  "creator_id"
    t.string   "label"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "photos", force: :cascade do |t|
    t.integer  "photo_collection_id"
    t.string   "filename"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  create_table "placeholders", force: :cascade do |t|
    t.integer  "creator_id"
    t.string   "icon"
    t.string   "label"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "podcasts", force: :cascade do |t|
    t.string   "label"
    t.string   "genre"
    t.string   "url"
    t.string   "duration"
    t.integer  "creator_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "icon"
  end

  create_table "quotes", force: :cascade do |t|
    t.string   "label"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "streams", force: :cascade do |t|
    t.string   "label"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "timers", force: :cascade do |t|
    t.integer  "creator_id"
    t.string   "label"
    t.integer  "duration"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tracker_values", force: :cascade do |t|
    t.integer  "tracker_id"
    t.decimal  "value"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "trackers", force: :cascade do |t|
    t.integer  "creator_id"
    t.string   "label"
    t.string   "unit"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
