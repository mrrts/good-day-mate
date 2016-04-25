
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

Tracker.create(creator_id: 1, label: "Tires", unit: "PSI")
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

Podcast.create(creator_id: 0, label: "Pop Culture Happy Hour", genre: "TV & Film", url: "http://www.npr.org/podcasts/510282/pop-culture-happy-hour", duration: "approx. 1 hour")
Podcast.create(creator_id: 0, label: "Radiolab", genre: "Society & Culture", url: "http://www.npr.org/podcasts/452538884/radiolab", duration: "30 minutes to 1 hour")
Podcast.create(creator_id: 0, label: "TED Radio Hour", genre: "Technology", url: "http://www.npr.org/podcasts/510298/ted-radio-hour", duration: "approx. 1 hour")
Podcast.create(creator_id: 0, label: "Stuff You Should Know", genre: "Many", url: "http://www.stuffyoushouldknow.com/podcasts", duration: "approx. 1 hour")
Podcast.create(creator_id: 0, label: "Planet Money", genre: "Business", url:"http://www.npr.org/podcasts/510289/planet-money", duration: "20-30 minutes")
Podcast.create(creator_id: 0, label: "Star Talk Radio Show", genre: "Science", url: "http://www.startalkradio.net/shows-archive/", duration: "approx. 1 hour")
Podcast.create(creator_id: 0, label: "Sawbones", genre: "Medicine/History", url: "http://www.maximumfun.org/shows/sawbones", duration: "approx. 1 hour")
Podcast.create(creator_id: 0, label: "Judge John Hodgman", genre: "Comedy", url: "http://www.maximumfun.org/shows/judge-john-hodgman", duration: "approx. 1 hour")


Inclusion.create(stream_id: 1, order: 1,
  includable_id: 1, includable_type: "Placeholder")

NewsList.create(label: "Top Stories from The Guardian", creator_id: 0)
Inclusion.create(stream_id: 1, order: 4, includable_id: 1, includable_type: "NewsList")




gratitudes = ["family", "friends", "nice weather", "books", "a good night's sleep",
"excellent food", "health", "food", "sleep", "Corgis", "moon & stars",
"biking", "sunsets", "coffee", "hot showers", "movie night", "cats", "puppies",
"summer coming", "graduating soon", "learning", "great experience at DBC",
"new friends", "old friends", "change", "travel", "clean sheets", "soap", "chairs"]


