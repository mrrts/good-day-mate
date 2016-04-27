
Journal.create(label: "Journal", creator_id: 0)



User.create(
  first_name: "Ryan",
  last_name: "Smith",
  email: "ryan@something.com",
  password: "password")

User.create(
  first_name: "Taylor",
  last_name: "Daugherty",
  email: "taylor@something.com",
  password: "password")

User.create(
  first_name: "Jack",
  last_name: "Pults",
  email: "jack@something.com",
  password: "password")

User.create(
  first_name: "Heather",
  last_name: "Conklin",
  email: "heather@something.com",
  password: "password")

Stream.create(label: "Ryan Stream", user_id: 1)
Stream.create(label: "Taylor Stream", user_id: 2)
Stream.create(label: "Jack Stream", user_id: 3)
Stream.create(label: "Heather Stream", user_id: 4)

Tracker.create(creator_id: 0, label: "Tires", unit: "PSI")
TrackerValue.create(tracker_id: 1, value: 36.2)
Inclusion.create(stream_id: 1, order: 2,
  includable_id: 1, includable_type: "Tracker")

Timer.create(creator_id: 0, label: "10 Second Timer", duration: 10)
Timer.create(creator_id: 0, label: "5 Minute Timer", duration: 300)
Timer.create(creator_id: 0, label: "10 Minute Timer", duration: 600)
Inclusion.create(stream_id: 1, order: 3,
  includable_id: 1, includable_type: "Timer")

Placeholder.create(creator_id: 0, icon: 'free_breakfast', label: "Coffee")
Placeholder.create(creator_id: 0, icon: 'fitness_center', label: "Gym")
Placeholder.create(creator_id: 0, icon: 'child_care', label: "Daycare")
Placeholder.create(creator_id: 0, icon: 'school', label: "Class")
Placeholder.create(creator_id: 0, icon: 'phone_in_talk', label: "Call")
Placeholder.create(creator_id: 0, icon: 'drive_eta', label: "Drive")
Placeholder.create(creator_id: 0, icon: 'local_post_office', label: "Mail Letter")
Placeholder.create(creator_id: 0, icon: 'local_laundry_service', label: "Laundry")

Podcast.create(creator_id: 0, label: "Pop Culture Happy Hour", genre: "TV & Film", url: "http://www.npr.org/podcasts/510282/pop-culture-happy-hour", duration: "approx. 1 hour", icon: "http://media.npr.org/assets/img/2015/04/02/popculturehour_sq-3a232a02eaf552912ea7ccb57db2dc9a30ce5f69-s300-c85.jpg")
Podcast.create(creator_id: 0, label: "Radiolab", genre: "Society & Culture", url: "http://www.npr.org/podcasts/452538884/radiolab", duration: "30 minutes to 1 hour", icon: "https://upload.wikimedia.org/wikipedia/en/b/b8/WNYC_Radiolab_logo.svg")
Podcast.create(creator_id: 0, label: "TED Radio Hour", genre: "Technology", url: "http://www.npr.org/podcasts/510298/ted-radio-hour", duration: "approx. 1 hour", icon: "http://media.npr.org/assets/img/2015/03/18/ted_sq-3426270a541795b78233a698dd7965d407545cf3-s300-c85.jpg")
Podcast.create(creator_id: 0, label: "Stuff You Should Know", genre: "Many", url: "http://www.stuffyoushouldknow.com/podcasts", duration: "approx. 1 hour", icon: "http://www.stuffyoushouldknow.com/static/skins/stuffyoushouldknow/img/og_image.jpg")
Podcast.create(creator_id: 0, label: "Planet Money", genre: "Business", url:"http://www.npr.org/podcasts/510289/planet-money", duration: "20-30 minutes", icon: "http://d217i264rvtnq0.cloudfront.net/images/fanfare/icon_510289.png")
Podcast.create(creator_id: 0, label: "Star Talk Radio Show", genre: "Science", url: "http://www.startalkradio.net/shows-archive/", duration: "approx. 1 hour", icon: "http://www.dailyemerald.com/wp-content/uploads/2015/01/startalk.jpg")
Podcast.create(creator_id: 0, label: "Sawbones", genre: "Medicine/History", url: "http://www.maximumfun.org/shows/sawbones", duration: "approx. 1 hour", icon: "http://static.libsyn.com/p/assets/9/7/e/b/97ebad626b4d937f/Sawbones-logo-final.png")
Podcast.create(creator_id: 0, label: "Judge John Hodgman", genre: "Comedy", url: "http://www.maximumfun.org/shows/judge-john-hodgman", duration: "approx. 1 hour", icon: "http://33.media.tumblr.com/30d89f758bd74b84263edc64f2decb6b/tumblr_inline_n4rfr1ueFn1r09pw6.jpg")


Inclusion.create(stream_id: 1, order: 1,
  includable_id: 1, includable_type: "Placeholder")

NewsList.create(label: "Top Stories from The Guardian", creator_id: 0)
Inclusion.create(stream_id: 1, order: 4, includable_id: 1, includable_type: "NewsList")

PhotoCollection.create(creator_id: 0, label: "Cute Animals")
Photo.create(photo_collection_id: 1, filename: "baboon.jpg")
Photo.create(photo_collection_id: 1, filename: "babushka_dog.jpg")
Photo.create(photo_collection_id: 1, filename: "black_dog.jpg")
Photo.create(photo_collection_id: 1, filename: "chihuahua.jpg")
Photo.create(photo_collection_id: 1, filename: "dirty_llama.jpg")
Photo.create(photo_collection_id: 1, filename: "dog_in_a_cup.jpg")
Photo.create(photo_collection_id: 1, filename: "elephant_and_baby.jpg")
Photo.create(photo_collection_id: 1, filename: "giraffe.jpg")
Photo.create(photo_collection_id: 1, filename: "hedgehog.jpg")
Photo.create(photo_collection_id: 1, filename: "hippos.jpg")
Photo.create(photo_collection_id: 1, filename: "kitten_playing.jpg")
Photo.create(photo_collection_id: 1, filename: "koalas.jpg")
Photo.create(photo_collection_id: 1, filename: "large_pig.jpg")
Photo.create(photo_collection_id: 1, filename: "piglets.jpg")
Photo.create(photo_collection_id: 1, filename: "sofa_cat.jpg")

JokeList.create(creator_id: 0, label: 'Random Jokes')
Joke.create(joke_list_id: 1, joke: 'I went to the zoo the other day, there was only one dog in it, it was a shitzu.')
Joke.create(joke_list_id: 1, joke: 'A sandwich walks into a bar. The barman says "Sorry we don\'t serve food in here"')
Joke.create(joke_list_id: 1, joke: 'There\'s two fish in a tank, and one says "How do you drive this thing?"')
Joke.create(joke_list_id: 1, joke: "Today a man knocked on my door and asked for a small donation towards the local swimming pool. I gave him a glass of water.")
Joke.create(joke_list_id: 1, joke: 'Change is inevitable, except from a vending machine.')
Joke.create(joke_list_id: 1, joke: "There's too much blood in my caffeine system.")
Joke.create(joke_list_id: 1, joke: "Before the new spaghetti factory could open, it had to pasta inspection.")
Joke.create(joke_list_id: 1, joke: 'Upon removing his boots at Waterloo, Napoleon could smell defeat.')
Joke.create(joke_list_id: 1, joke: 'Said the potato: "I think therefore I yam."')
Joke.create(joke_list_id: 1, joke: 'Did you hear about the unruly circus driver? He refused to tow the lion.')
Joke.create(joke_list_id: 1, joke: 'When a clock is hungry, it goes back four seconds.')




gratitudes = ["family", "friends", "nice weather", "books", "a good night's sleep",
"excellent food", "health", "food", "sleep", "Corgis", "moon & stars",
"biking", "sunsets", "coffee", "hot showers", "movie night", "cats", "puppies",
"summer coming", "graduating soon", "learning", "great experience at DBC",
"new friends", "old friends", "change", "travel", "clean sheets", "soap", "chairs"]

feels = ["tired", "happy", "excited", "anxious", "interested", "content", "fabulous", "frustrated", "dense"]

tomorrow = ["more features"]

20.times do
  CheckIn.create(
    user_id: 4,
    feeling: feels.sample,
    thankful1: gratitudes.sample,
    thankful2: gratitudes.sample,
    thankful3: gratitudes.sample,
    horizon: tomorrow.sample
    )
end


