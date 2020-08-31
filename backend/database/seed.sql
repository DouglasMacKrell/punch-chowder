-- DROP DATABASE IF EXISTS punchchowder;  
-- CREATE DATABASE punchchowder;  
-- \c punchchowder;

DROP TABLE IF EXISTS episodes;
CREATE TABLE episodes (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    episodeUrl VARCHAR,
    season_id INT
);

DROP TABLE IF EXISTS bonus;
CREATE TABLE bonus (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    episodeUrl VARCHAR,
    bonus_id INT
);

-- Seed data

INSERT INTO episodes (title, episodeUrl, season_id)
    VALUES('1: Mystic Mayhem', 'https://drive.google.com/file/d/1u874EX3ffJVmjGtKLdELAIsA8n03ze8G/preview', 1),
    ('2A: Origami Tsunami', 'https://drive.google.com/file/d/1aUKuhGJ99MR9uKwTMHKih_PP7z_cEBbs/preview', 1),
    ('2B: Donnie''s Gifts', 'https://drive.google.com/file/d/1xPaosvhGRk6fzSAYejQVBdFrU0jRexSd/preview', 1),
    ('3A: War and Pizza', 'https://drive.google.com/file/d/15v4SOKIZOlgZ1ZdWwAIREX3MMP_fG7Mh/preview', 1),
    ('3B: Newsworthy', 'https://drive.google.com/file/d/1qaCozVmWExVsSmOs3jYMblPqi8aUvZ87/preview', 1),
    ('4A: Repo Mantis', 'https://drive.google.com/file/d/1B1oAspNsi9fzUj3iXVIszOJatRIYZlvn/preview', 1),
    ('4B: Down with the Sickness', 'https://drive.google.com/file/d/1QtErdJE-HgrYfdYdfTSUXoZtwgEy-GWk/preview', 1),
    ('5A: The Fast and the Furriest', 'https://drive.google.com/file/d/1hrPK1cup9m_DuCJdJ8ol0wdcHZA5D-KQ/preview', 1),
    ('5B: Mascot Melee', 'https://drive.google.com/file/d/1uLOBQEwt5RUIV4THmnFgAxZ6sEuM-soI/preview', 1),
    ('6A: Shell in a Cell', 'https://drive.google.com/file/d/1f19nI6m0t827MGM9Jkh3iard-rYY5rop/preview', 1),
    ('6B: Minotaur Maze', 'https://drive.google.com/file/d/18Go0tznmoKKmULg8jIhjUVtFmtZAqcQZ/preview', 1),
    ('7: Bug Busters', 'https://drive.google.com/file/d/1rQtOAyZDhOMSU5HpeNG4ZyNJqqW4AXqa/preview', 1),
    ('8A: The Longest Fight', 'https://drive.google.com/file/d/1bSwevx3ULS1BhONwGmAYByLrhN8T8xs9/preview', 1),
    ('8B: Hypno Part Deux', 'https://drive.google.com/file/d/1peg-kroAjo85vZy3cIGu0KcdfRBghZrQ/preview', 1),
    ('9A: The Gumbus', 'https://drive.google.com/file/d/1tzZc6vzz6Cjxv6l5Yol0bBzm5upO2E6A/preview', 1),
    ('9B: Mrs. Cuddles', 'https://drive.google.com/file/d/1eWTn1Je6zzJToG8kH1xkvhNp2qWT8xFz/preview', 1),
    ('10A: Stuck on You', 'https://drive.google.com/file/d/1hSmyl2McQVarndbGUrqQ73NL7pwNkv-k/preview', 1),
    ('10B: Al Be Back', 'https://drive.google.com/file/d/18n3_X_drkrPzXTnOyM80Ehd0RY_O-CbI/preview', 1),
    ('11A: The Purple Jacket', 'https://drive.google.com/file/d/1T91x20G0mQwgijJyd7q9PUA8Yy7qbc0-/preview', 1),
    ('11B: Pizza Pit', 'https://drive.google.com/file/d/1T32tDCghHj6hrTp2p8w3suKcOIAjiDmi/preview', 1),
    ('12A: Smart Lair', 'https://drive.google.com/file/d/1sGVAOHjg7wDx1cwEnF3T8WxyoLbRVQ38/preview', 1),
    ('12B: Hot Soup The Game', 'https://drive.google.com/file/d/12N3Pn6ct1eX0qLQ8GEzW5DafAQ_hZIj1/preview', 1),
    ('13: The Evil League of Mutants', 'https://drive.google.com/file/d/1oHGEhTMtKyp8btbblclyocmdqIs9BYV5/preview', 1),
    ('14A: Late Fee', 'https://drive.google.com/file/d/1gWXetJRRnUWr1PQg69R3SY6PsCPe3O9g/preview', 1),
    ('14B: Bullhop', 'https://drive.google.com/file/d/1k7b9xU-jyThHgywJXpGju-hgtReG4j7J/preview', 1),
    ('15A: Mind Meld', 'https://drive.google.com/file/d/1UaBPdioRFY2ODB27nDwA5G3s6OyQ8tkN/preview', 1),
    ('15B: Nothing but Truffle', 'https://drive.google.com/file/d/1ZPc48HJd1AsJ4xVL5lL_E_bvYbQ-UNnY/preview', 1),
    ('16: Shadow of Evil', 'https://drive.google.com/file/d/1HQpRu0NaQBwF58UQi2g57jsw9hvoq6MA/preview', 1),
    ('17A: Portal Jacked!', 'https://drive.google.com/file/d/1he_uWbf6R_8oe-mnsGQbKMAHGbT8-w7S/preview', 1),
    ('17B: Warren & Hypno, Sitting in a Tree', 'https://drive.google.com/file/d/1Yz-BsoXt_D6_DOwtoJok-W4l_aH4yrht/preview', 1),
    ('18A: Operation Normal', 'https://drive.google.com/file/d/1Nqau4l6ya6oisgrvs-DOosuVEEaB8Qn6/preview', 1),
    ('18B: Sparring Partner', 'https://drive.google.com/file/d/1yZNRgMYDJ2EiJCq9qxCGRGtrT0CVhspb/preview', 1),
    ('19A: You Got Served', 'https://drive.google.com/file/d/1RgFsZfmXDLDraRScXuMX88rc4idc-UAL/preview', 1),
    ('19B: How to Make Enemies and Bend People to Your Will', 'https://drive.google.com/file/d/1wYf00KB2Itijz2UQv3uRD7uBEjSQrafz/preview', 1),
    ('20A: Mystic Library', 'https://drive.google.com/file/d/1fNdDj_Li1SyRqffdvdkXzlZBv3erTC5I/preview', 1),
    ('20B: The Purple Game', 'https://drive.google.com/file/d/1HmC8dtJrgpsrWLhy_9ceyfy8fmdmJF-1/preview', 1),
    ('21A: Man vs. Sewer', 'https://drive.google.com/file/d/18K1u3HKd7hOjMkevk4sZHI8ATk-ucPee/preview', 1),
    ('21B: The Mutant Menace', 'https://drive.google.com/file/d/118tJKn7uU_HojEQiIlDxfqJB-YOc7a-G/preview', 1),
    ('22A: Turtle-dega Nights The Ballad of Rat Man', 'https://drive.google.com/file/d/108Ehf82dNdc8Ghp_mVvV6teTWc49oxLs/preview', 1),
    ('22B: The Ancient Art of Ninja Hide and Seek', 'https://drive.google.com/file/d/12qwFpMLZypNX-aLhTp3xJwzVTEk0diSY/preview', 1),
    ('23A: One Man''s Junk', 'https://drive.google.com/file/d/1A4SIoMxgWv3iKmczvpe5Fi0vBbETY_mq/preview', 1),
    ('23B: Snow Day', 'https://drive.google.com/file/d/1W3Z-X8aDbgZyuQ5C7d5_QFGixAQKg_CI/preview', 1),
    ('24A: Cloak and Swaggart', 'https://drive.google.com/file/d/1CAAEUIOZp-joKlcA4sVsQVOhFCKm13SS/preview', 1),
    ('24B: Jupiter Jim Ahoy!', 'https://drive.google.com/file/d/1YKTM6W1ODgiDf0rclTsM6GHK8Qfjw9sh/preview', 1),
    ('25: Insane in the Mama Train', 'https://drive.google.com/file/d/1OACJ7My4a6hS1My17MxpdvLkJpR4lwOC/preview', 1),
    ('26: End Game', 'https://drive.google.com/file/d/1g2lP8pOAKvw8mzNHj0yC5wEBv06Ss1Pl/preview', 1),
    ('1: Many Unhappy Returns', 'https://drive.google.com/file/d/181vp-Kuvh8bSnWcd2lKcsi3LE-BhOiXR/preview', 2),
    ('2A: Todd Scouts', 'https://drive.google.com/file/d/12TvUqnFKX_VtSpr6r9PvMVWJ_HaXoTty/preview', 2),
    ('2B: Goyles Goyles Goyles', 'https://drive.google.com/file/d/1IR3PKwH9ueKrfGUMnh-FVVK3tlDHhxsT/preview', 2),
    ('3A: Flushed But Never Forgotten', 'https://drive.google.com/file/d/1VylzLeZlgw2ta6Ogmg9qre_9Vf6tCB_w/preview', 2),
    ('3B: Lair Games', 'https://drive.google.com/file/d/1pzSp_ABRUfjIgLqz5kJfSKYb1r8xl3Ni/preview', 2),
    ('4A: Breaking Purple', 'https://drive.google.com/file/d/1LWwe8Nq7CUuhkWdBrVzuvwFCcfkBj0R4/preview', 2),
    ('4B: Reparin the Baron', 'https://drive.google.com/file/d/1peow_neeGaZr7ApsP7eO8cC7OFt9Tmel/preview', 2),
    ('5A: Air Turtle', 'https://drive.google.com/file/d/1Io_TV44vVpkWahozx73L1T66VqOV6_p4/preview', 2),
    ('5B: Pizza Puffs', 'https://drive.google.com/file/d/1GWuCQP3Eg7H6IwCziG2sKOVnG2rRqyDj/preview', 2),
    ('6A: Sidekick Ahoy!', 'https://drive.google.com/file/d/1D0Xk7SoalQiFxyccVonZPErvQv4HyYMc/preview', 2),
    ('6B: Hidden City Job', 'https://drive.google.com/file/d/1BFFSbC6pUQaz_b8u4FazZJ4rWFX-kT_2/preview', 2),
    ('7A: Always be Brownies', 'https://drive.google.com/file/d/1s8hIneBjHWUYpbtg2g7nK9VzQ-KqRqBm/preview', 2),
    ('7B: Mystery Meat', 'https://drive.google.com/file/d/11_-kycLtASEwoCnumLGBdos1IlbqGvpd/preview', 2),
    ('8A: Donnie vs Witch Town', 'https://drive.google.com/file/d/1KFgWK7YZroS65AXnSSHfiFE3nv9VIXyt/preview', 2),
    ('8B: Raph''s Ride along', 'https://drive.google.com/file/d/1OHlRewTk0y2last-1PN5ojYG4BDL27Xh/preview', 2),
    ('9A: Hidden City''s Most Wanted', 'https://drive.google.com/file/d/1HCE7BJqAXg281r65hJUhnEsp0uAiapGb/preview', 2),
    ('9B: Bad Hair Day', 'https://drive.google.com/file/d/15MkNJfp-Is8ktjGxX24uXdB_hBhQLtUU/preview', 2),
    ('10A: Fists of Furry', 'https://drive.google.com/file/d/1PDiDxDUGL_IpD_FBAyElqmpwLUdcbZnv/preview', 2),
    ('10B: Clothes Dont Make the Turtle', 'https://drive.google.com/file/d/1pOQr5QPMsi-ocGPboDaRfAuGRArnpyaF/preview', 2),
    ('11: Battle Nexus New York', 'https://drive.google.com/file/d/1hYxdbVVWZiLrNzickMFBNaBlYMKGoIZS/preview', 2),
    ('12A: E-Turtle Sunshine of the Spotless Mind', 'https://drive.google.com/file/d/1kXRtB_6slRmrABOXdvcTgEfbj6DYCHWr/preview', 2),
    ('12B: Shreddy or Not', 'https://drive.google.com/file/d/17Dbneh711B4JvT_-_Tb7x3g7BUiFX8LS/preview', 2),
    ('13A: Anatawa Hitorijanai', 'https://drive.google.com/file/d/1im7pCmVLUIKSppkJ30P_j1193TIYgGPm/preview', 2),
    ('13B: Rise', 'https://drive.google.com/file/d/1rqMX3Pt0oPdZtG5UHGkmVYd4FFBruEz0/preview', 2);

INSERT INTO bonus (title, episodeUrl, bonus_id)
    VALUES('1: Turtle Teens in: PIZZA RACE', 'https://drive.google.com/file/d/1Oh3sTnpKUCW9LqWmznYyfOObksQQN3pm/preview', 1),
    ('2: Turtle Tots in: WEAPONS AHOY', 'https://drive.google.com/file/d/1z9WyLyn_QXdZ3Eq8p68A1EZPcj3P9N1X/preview', 1),
    ('Rise Of The Teenage Mutant Ninja Turtles Virtual Reality Experience - Inside Nick Animation', 'https://drive.google.com/file/d/1dUX9DXLvxJn96qc8RImKB85nYfVgRO5t/preview', 2),
    ('Making Of Rise Of The Teenage Mutant Ninja Turtles - From Sketch To Screen', 'https://drive.google.com/file/d/1Fn-TcB8R1RVruF-MTQC7EKG1ltHEciwH/preview', 2),
    ('Rise Of The Teenage Mutant Ninja Turtles Theme Song in DIFFERENT LANGUAGES', 'https://drive.google.com/file/d/1Dw6bdsAAefICMGGn6ME3Nbh1hgsDvErA/preview', 2),
    ('35 Years Of TMNT Drawing Challenge', 'https://drive.google.com/file/d/1Mk9FWTXtGRFEO996vYIb22cKJajsiRcP/preview', 2),
    ('How To Draw Raph', 'https://drive.google.com/file/d/1pRHSshgGaPKU5KwjDFoYUQHJym6I2qBF/preview', 2),
    ('How To Draw Mikey', 'https://drive.google.com/file/d/1UGWnAshubTj-_K_GukgCsl86XBuM5I0c/preview', 2),
    ('How To Draw Leo', 'https://drive.google.com/file/d/1epbgfrfO44rGD5p3JKgyK1YPkxyrzu0I/preview', 2),
    ('How To Draw Donnie', 'https://drive.google.com/file/d/1Lc3GmKu256ao_RvveliHwdS4Q1QK9oVK/preview', 2),
    ('Meet The Creators Of Rise Of The Teenage Mutant Ninja Turtles', 'https://drive.google.com/file/d/12887R6okkLhumFnbhqtT5KW3YEr1mAex/preview', 2),
    ('Rise of the TMNT Mural at Para Los Niños - Nick Community Efforts', 'https://drive.google.com/file/d/1WzN30SkBIdRzBSJPD2T1hd7LlGQlIgbl/preview', 2),
    ('Origami Tsunami - Animatic', 'https://drive.google.com/file/d/1PsryYr-C4mAGUxh68OULLIQyTfLmHsbL/preview', 3),
    ('Repo Mantis - Animatic', 'https://drive.google.com/file/d/1BQejS6vePKSLLxay0J1BdDc7Fyo6PQEP/preview', 3),
    ('The Fast And The Furriest - Animatic','https://drive.google.com/file/d/1ZmrfcX9gn5AbzFEoK4AmwypxoMFq9rEo/preview', 3),
    ('Shell In A Cell - Animatic', 'https://drive.google.com/file/d/1jEwPFucNRrTtM_7-hM7JuvkMFSjIuxGC/preview', 3),
    ('Bug Busters Part 1 - Animatic', 'https://drive.google.com/file/d/1zhyHqrvb1beO44GkP84jEqMZCZ4MmXNb/preview', 3),
    ('Bug Busters Part 2 - Animatic', 'https://drive.google.com/file/d/1pOEChNzEstYj0SBaOd5buIXtebKXiNry/preview', 3),
    ('The Longest Fight - Animatic', 'https://drive.google.com/file/d/1J7FEidK3pX_5q52v4Z4aTdCoNUhlEXKU/preview', 3),
    ('The Gumbus - Animatic', 'https://drive.google.com/file/d/1HcsCn5ILiA3Ka5wbXqE6VjmG5bMaXMyL/preview', 3),
    ('The Purple Jacket - Animatic', 'https://drive.google.com/file/d/1wee8mkip65QyIL32gs7-aPiDxfV0i6Yh/preview', 3),
    ('Pizza Pit - Animatic', 'https://drive.google.com/file/d/1Ebqw96-3M3nwrKLHKOiVKL3BxTxUoUsN/preview', 3),
    ('Shadow Of Evil - Animatic', 'https://drive.google.com/file/d/1eoTU7YxtpM-q25mBW1CJ5SnAhkGN9jVK/preview', 3),
    ('Warren & Hypno, Sitting In A Tree - Animatic', 'https://drive.google.com/file/d/1RVeecCSduv2LlJTVxPmSLBOJ_LgAmNgz/preview', 3),
    ('Sparring Partner - Animatic', 'https://drive.google.com/file/d/1DHucvR1dlo9VMxH7f3sycMOxzUaf9H1B/preview', 3),
    ('You Got Served - Animatic', 'https://drive.google.com/file/d/1_cjyqewpn4Q35aacwRd3KHAL262eYQe5/preview', 3),
    ('Mystic Library - Animatic', 'https://drive.google.com/file/d/1ML2eX8yy2FTTDhhbEsWmwrez3O1EN-O8/preview', 3),
    ('The Purple Game - Animatic', 'https://drive.google.com/file/d/1Q7qoX9uRJI7VxtKN5t0posnIEuSzwTkf/preview', 3),
    ('Many Unhappy Returns - Animatic', 'https://drive.google.com/file/d/1AC-NRqcD1ZKlyTSEMK2HdbogNAzs0W0w/preview', 3),
    ('Breaking Purple - Animatic', 'https://drive.google.com/file/d/1jmuRzTuALh_9d81dwgkbpSiSTbCsczO-/preview', 3),
    ('Reparin'' The Baron - Animatic', 'https://drive.google.com/file/d/1AfpMC04oW7ZyH_ve_QOMOzun52pW2C2s/preview', 3),
    ('Air Turtle - Animatic', 'https://drive.google.com/file/d/1vgv4HnX0ISofzyrQtcwbkcnYUyOQ9O8v/preview', 3),
    ('Pizza Puffs - Animatic', 'https://drive.google.com/file/d/1XN1QJp-yqPqvd-nJc7kYPreGESP4q4eU/preview', 3),
    ('Rise - Animatic', 'https://drive.google.com/file/d/1KvPO0CW-xphvyNCa3vFqhEBup8S-rV7o/preview', 3);

    -- Tests

    SELECT * FROM episodes;
    SELECT * FROM bonus;