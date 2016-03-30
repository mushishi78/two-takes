(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(1);

	var _routes = __webpack_require__(43);

	var _routes2 = _interopRequireDefault(_routes);

	var _templatesLayout = __webpack_require__(44);

	var _templatesLayout2 = _interopRequireDefault(_templatesLayout);

	var _templatesFeed = __webpack_require__(45);

	var _templatesFeed2 = _interopRequireDefault(_templatesFeed);

	function toFilename(path) {
	  if (path.indexOf('.') < 0) {
	    path += '/index.html';
	  }
	  return path.replace(/^(\\|\/)+/, '');
	}

	exports['default'] = function (render, done) {
	  render('feed.xml', _templatesFeed2['default']);
	  _routes2['default'].forEach(function (route) {
	    return render(toFilename(route), '<!doctype html>' + (0, _templatesLayout2['default'])(route));
	  });
	  done();
	};

	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	__webpack_require__(6);

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _data = __webpack_require__(11);

	var _home = __webpack_require__(34);

	var _home2 = _interopRequireDefault(_home);

	var _page = __webpack_require__(37);

	var _page2 = _interopRequireDefault(_page);

	var _post = __webpack_require__(39);

	var _post2 = _interopRequireDefault(_post);

	var _posts = __webpack_require__(40);

	var _posts2 = _interopRequireDefault(_posts);

	var _video = __webpack_require__(41);

	var _video2 = _interopRequireDefault(_video);

	var _videos = __webpack_require__(42);

	var _videos2 = _interopRequireDefault(_videos);

	exports['default'] = function (path) {
	  return path === '/' ? _home2['default'] : path === '/posts' ? _posts2['default'] : path === '/videos' ? _videos2['default'] : _data.pages[path] ? (0, _page2['default'])(_data.pages[path]) : _data.posts[path] ? (0, _post2['default'])(_data.posts[path]) : _data.videos[path] ? (0, _video2['default'])(_data.videos[path]) : (0, _page2['default'])(_data.pages['/404.html']);
	};

	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _siteYml = __webpack_require__(12);

	var _siteYml2 = _interopRequireDefault(_siteYml);

	_siteYml2['default'].baseurl = _siteYml2['default'].baseurl || '';

	var toPath = function toPath(file) {
	  return file.replace(/\.\/.*?\//, '/').replace(/\..*$/, '');
	};

	function reduceFn(obj, file) {
	  var _extends2;

	  file = _extends({ path: toPath(file) }, __webpack_require__(13)(file));
	  var values = obj.values.concat(file);
	  return _extends({}, obj, (_extends2 = {}, _defineProperty(_extends2, file.path, file), _defineProperty(_extends2, 'values', values), _extends2));
	};

	var pages = __webpack_require__(31).keys().reduce(reduceFn, { values: [] });
	var posts = __webpack_require__(32).keys().reduce(reduceFn, { values: [] });
	var videos = __webpack_require__(33).keys().reduce(reduceFn, { values: [] });

	posts.values.reverse();
	videos.values.reverse();

	exports['default'] = { pages: pages, posts: posts, site: _siteYml2['default'], videos: videos };
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Two Takes",
		"url": "http://www.twotakes.co.uk",
		"description": "TwoTakes is a channel featuring Em and Dec, as they take on the film industry with their unique blend of piercing analysis and drunken observation.",
		"facebook": "https://www.facebook.com/twotakesreviews",
		"twitter": "https://twitter.com/TwoTakesReviews",
		"youtube": "https://www.youtube.com/channel/UC8329b3fYwBT0uHUuVzgPbg"
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./index": 11,
		"./index.js": 11,
		"./pages/404.md": 14,
		"./pages/about.md": 15,
		"./posts/2015-07-29-hector-and-the-search-for-happiness.md": 16,
		"./posts/2015-11-20-kungfu-panda-review.md": 17,
		"./posts/2015-11-20-miami-connection-review.md": 18,
		"./posts/2015-11-20-rick-and-morty-review.md": 19,
		"./posts/2016-01-20-B-Movie-Cult-Blog-Double-Impact.md": 20,
		"./site.yml": 12,
		"./videos/2015-10-01-dog-story-little-heros-2.md": 21,
		"./videos/2015-10-02-channel-trailer.md": 22,
		"./videos/2015-10-25-sydney-white.md": 23,
		"./videos/2015-11-16-deck-dogz.md": 24,
		"./videos/2015-12-20-fantastic-mr-fox.md": 25,
		"./videos/2016-01-25-stay-alive.md": 26,
		"./videos/2016-02-07-into-the-grizzly-maze.md": 27,
		"./videos/2016-02-21-samurai-cop.md": 28,
		"./videos/2016-03-10-best-tv-shows-to-binge-on.md": 29,
		"./videos/2016-03-25-one-punch-man.md": 30
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 13;


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = {"title":"Page Not Found","path":"/404.html","__content":"<p>These are not the webpages you are looking for.</p>\n"}

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = {"title":"About","__content":"<p>TwoTakes is a channel featuring super hot couple Em and Dec, as they take on the film industry with their unique blend of piercing analysis and drunken observation. Main shows are:</p>\n<h3 id=\"bargain-bin-blunder\">Bargain Bin Blunder</h3>\n<p>Fishing their luck in the murky depths of the local bargain bin, Em and Dec hand their evening over to fate and find out just why nobody wanted to buy the film in the first place.</p>\n<h3 id=\"two-takes-takes-on\">Two Takes Takes On</h3>\n<p>Coming at a film from two sides, Em and Dec catch the unwitting movie in a pincer movement of vivacious critique, exploring in detail what works and why.</p>\n<h3 id=\"check-it-or-chuck-it\">Check It Or Chuck It</h3>\n<p>Two Takes makes a passionate case for why you should check out or chuck out a particular film or TV show.</p>\n"}

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = {"title":"Hector and the Search for Happiness Review","author":"Em","date":"2015-07-29T00:00:00.000Z","__content":"<p>I\u0019&#39;m not sure if I&#39;\u0019ve just been accidentally living in an invisible bubble for the past year, but I had never heard of this film when I randomly came across it on Netflix. Or maybe I hadn&#39;\u0019t heard of it because...well it really isn&#39;\u0019t anything that special. Let me explain why in a bit more detail. </p>\n<p>Let me set the scene for you - this film is a comedy-drama starring Simon Pegg as a middle-aged man called Hector. The beginning of the film focuses on his day to day life - he lives in London, his occupation is a psychiatrist and he lives with his successful marketer girlfriend Clara (Rosamund Pike). Unfortunately, as in many a film in recent history - Hector suffers a classic \u0018men in crisis\u0019 thing and becomes fed up with the mundanities of everyday life and has a bit of a break down. After a combination of flipping out at one of his patients, and another one of his patients doing a bit of palm reading \u0018mystic Meg\u0019 type stuff to him- predicting that a journey and some shizz is about to begin, he decides to take up and leave for awhile and go travelling. Clara (understandably) is pretty peed off about it as he is pretty flippant about where he is going and when he\u0019s going to return. </p>\n<p>So off he trots and begins his adventure. During this film, he travels to three locations - China (Shanghai and some unspecified mountain place), Africa (though for some reason we are never told  where in Africa he goes to...quite odd as Africa is a pretty big place after all) and Los Angeles. During this time, he meets and gets to know an array of characters and asks them \u0018what is happiness\u0019? Throughout the film, he writes down different ideas about what happiness is in a notebook that Clara has given him as a present for his travels. As you can see, the title of the film pretty much sums up what this film is about.</p>\n<p>Before I start ranting about this film, which inevitably I will be soon, one thing this film deserves praise for is the cinematography - it is gorgeous. Beautiful scenic shots, clever editing, excellent use of lighting - I especially like the moments that the sun is setting and it is casting shadow over the people in shot and the objects around them, it\u0019s just lovely and creates a real sense of tranquility. Peter Chelsom, the director, really did make fantastic use of the scenery for this film and it\u0019s a good job he did as this film is about travelling, beauty and discovery. \nAnother element I liked was the illustrations/animations that were added when he was writing in his notebook, it added another lovely visual dimension to the film- which I appreciate.</p>\n<p>Now for a super-big negative point...this film is supposed to be a comedy but in actual fact, it never made me laugh. Don\u0019t get me wrong, the film makes a decent attempt at creating a kind of comical feeling through sound, editing and physical acting, but it just didn&#39;t make me laugh. I appreciate the efforts that have gone into this film as what has been created is a comedy that is more than just reading from a script like a lot of \u0018comedy\u0019 films do these days. But, unfortunately that still doesn&#39;t stop the film from being unfunny. It stars Simon Pegg for cripes sake, he is an actual decent comedy actor, so why am I not laughing? Because this story has been done many times before. I am bored of films with men having a midlife crisis, I am bored of films where the main character has to go off travelling to discover that happiness was at home the whole time, it\u0019s predictable, bland, and we as an audience deserve more. The script is nothing special either, it\u0019s cheesy and predictable and the only near funny bits are when there is an attempt at a heart-warming emotional scene.</p>\n<p>Now that I am off on a rant I need to point out that as much as I like Simon Pegg as a comedy actor, in this film, he really sucks at doing emotional bits. I was cringing like mad at the end when he was scrunching his face up and doing a gasping/sobbing voice trying to trick the audience into believing he was crying - it just didn\u0019&#39;t work. Any time he needed to do anything emotional, it just felt unnatural, I don\u0019t know what had gotten into him with this role but just any emotion didn\u0019&#39;t seem sincere and it really did suck. Rosamund Pike is wasted in this film as Hector\u0019s pushover girlfriend - go back to films where you get to shine Rosamund Pike - go back to films like Gone Girl where you can be appreciated for how good an actress you are! In this she is just a mopey muppet, waiting for Hector and whether or not he\u0019s gonna come back. </p>\n<p>Also, why is it that everyone in this film can speak perfect English? He travels across China and Africa, how is it that everyone he encounters speaks amazing English?! Gah! </p>\n<p>Anyway, to conclude, I think that this film does not present to us anything in regards to story that we have not seen before, and it presents these ideas average at best. If you want to see a film about a man having a crisis watch Up in the Air (2009), if you want to watch a film about travelling and self discovery watch Into the Wild (2007) and if you want to watch a comedy that\u0019ll make you laugh watch pretty much any other film Simon Pegg has starred in (except maybe The World\u0019s End (2013) which isn&#39;\u0019t that great but I won\u0019t get into that now). Don\u0019t waste your time with Hector and the Search for Happiness. Even though the cinematography is great, I just don\u0019t think it is worth spending two hours of your life watching this film to see that- go out for a nice walk instead. </p>\n"}

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = {"title":"Kung Fu Panda and Kung Fu Panda 2 Review","author":"Dec","date":"2015-11-20T00:00:00.000Z","__content":"<p>Having heard these Dreamworks family martial arts films were worth checking out I was probably less dubious than most, Jack Black is a panda who overcomes&amp; being a panda to become a kung fu warrior. Sounds ridiculous snorted the people in general.\nBut, since I have played Tekken, I know pandas can be great at martial arts, plus I absolutely love School of Rock and even if I haven\u0019t really enjoyed other Jack Black outings to the same degree- he always gets the benefit of the doubt from me!</p>\n<p>So Kung Fu Panda came out in 2008 which at time of writing this review makes it seven years old and I am glad its taken me this long to get around to watching it. The reason for this is the the film really feels like the first bite of something tasty that leaves you wanting more. I think if I hadn\u0019t known the sequel was readily available for my greedy consumption I may have been a little unsatisfied with Kung Fu Panda.</p>\n<p>The film is about Poe, a panda who dreams of becoming a Kung Fu legend and escaping his life working in his dad\u0019s noodle bar. An evil leopard with formidable fighting skills escapes a high security prison and thus a showdown is set up as he returns to wreak his revenge on the town Poe lives in.</p>\n<p>As you can probably tell the plot is nothing new really. The scenes do bounce along at a fair old pace though, with loads of in your face visual humour and every dramatic moment is punctured by some kind of silly joke just before the point where it would start to get a bit boring and drag the pace down.</p>\n<p>When the film finished I thought&amp; Is that it? It felt quite short, covering all of the requisite plot points with efficient professionalism. This is not really a criticism as such, Poe is a delight to watch and has a satisfying character arch but there are a whole host of interesting side characters who are introduced but do not get much screen time to shine. I love the wise old tortoise, who throws out wise sayings and jokes in equal measure but most of the others do not get much of a look in, for example Seth Rogen as a feisty Praying Mantis and Lucy Lui as an ass-kickin\u0019 snake. </p>\n<p>In particular, the antagonist seems underdeveloped, you get a bare-bones backstory, but not much sense of his motivation or much evidence of his inherent evilness that the film insists he possesses. This should surely ooze out of every pore like alcohol and chicken grease does from me on a Sunday morning, filling the room with undeniable detestability, making hairs stand up and cause small children to weep&amp; </p>\n<p>This means however, that the the film has a tight narrative focus, it is never tedious and every scene has a point. The action is uniformly great; fast paced but not confusing, imaginative but not farcical. The desire to entertain with the sheer visuals literally had us laughing delightedly- such as a truly wonderful scene in which Poe duels against his master (an extremely cute red panda who is kinda like Yoda or something) using chopsticks for the last dumpling. The graceful dance-like movements feel inspired by such Chinese films as Crouching Tiger Hidden Dragon but it never feels like a parody, as most family films will do- instead it is a flamboyant celebration of the style.</p>\n<p>This all plays out in front of gorgeous sweeping backgrounds with subtle palettes of creamy colours and purple skies. Another feature worth mentioning are the segments of 2D animation in Chinese style illustrations which really place the film in its geographic setting, I really felt the look and soundtrack created something really cohesive in terms of style and it pulls off a convincing job at appearing somewhat authentic- out-performing Hollywood peers such as Mulan.</p>\n<p>When the film ended, I just wanted more, I was curious about the characters and the world introduced in Kung Fu Panda and as I alluded to earlier, it really feels like a film that counted on having sequels to flesh out the creation introduced in the first installment. Which of course leads me to Kung Fu Panda 2- the surprisingly un-subtitled follow up that takes things to the next level of panda-monium! (the pun that just had to be punned.)</p>\n<p>The plot catches up with Poe and the gang when Poe has achieved celebrity status as the Dragon Warrior- women want to sleep with him, men want to have a pint with him&amp; or whatever the PG animated Panda version of that is! Poe has come a long way and seems confident and self-assured in his Kung Fu skills, he has accepted his new identity with characteristic gusto and along with the Furious Five he watches over the villagers, protecting them from all harm.</p>\n<p>Meanwhile a dangerous, twisted peacock has harnessed the power of fireworks into a fiery new weapon that looks like a cross between a cannon and that fire-pig battering ram thing from the third Lord of the Rings film! Turning that which heralded revelry and brought joy into something which rains destruction and shatters dreams. Our black and white hero Poe must challenge this evil doer and in doing so, confront his own mysterious past.</p>\n<p>Tonally it feels like the makes of this sequel have gone for something a little more dramatic, there are still lots of laughs to be had and more of the superb slapstick visual humour from part one, but this time it is balanced by some well constructed dramatic scenes too. Unlike in the the first film, this installment does not throw jokes into every scene to diffuse potentially emotional moments and I think it works really well. There are some genuinely sad moments and complex emotions present.</p>\n<p>A lot of this may be due to the villain being a lot more fleshed out in KP2. He seems a lot more threatening and interesting than he predecessor and his personal connection to Poe\u0019s past means that our main character has much more reason to be invested in defeating his vile machinations! </p>\n<p>Although the plot is easy to follow, there are definitely lot more twists and turns. Poe and the Furious Five travel beyond their own village out into the wide world of ancient China. There is a hilarious scene where they try to infiltrate a town that is controlled by the Peacock\u0019s (Gary Oldman) wolf soldiers. They do this by getting in a giant dragon costume, swallowing up unsuspecting guards through the mouth and then dropping them subdued out of the ehem, rear. The mischievous, fast-paced scene unfolds fluidly and when the camera pulls back for an amusing wide-shot from above, I was reminded of Wes Anderson films such as Fantastic Mr Fox (which I love by the way).</p>\n<p>I think one of the reasons this film series really works is that Poe is such a lovely character. He is almost always upbeat, unfailingly enthusiastic and good natured. He takes insults in his stride (they slide off him like water off a crane\u0019s back) This means that when something manages to upset him it is heartbreaking, you can see the beautiful innocence die before your eyes.</p>\n<p>Poe\u0019s happy go lucky nature and boundless enthusiasm contrasts nicely with the characters around him, most of which are more worldly and ironically-aware by comparison. I think this point of view is like how children see the the adult world of weariness and doubt that they just cannot comprehend as they leap with every bit of energy they have all through the day. Poe the irrepressible rascal wins respect by staying true to his nature, even when he is confronted by danger and tragedy. In the end he discovers new strength through finding inner peace, an idea which is not explored as much as it could be but is a nice nod to Eastern philosophies and provides a vehicle for Poe to further develop his mad-skillz with truly spectacular results!</p>\n<p>Although everything is tied up nicely at the end, there is still plenty of room for part three, I would love to see something that looks further into the Tigress\u0019 character. Her insecurities and fears have featured in both films but have yet to be given full treatment and be fully developed. </p>\n<p>All in all, this is a brilliant film series. I think they should have broad appeal for different ages and I cannot wait to see the next one that is surely coming soon, if the Kung Fu Panda series keeps improving like this, its going to be sweeeeeeeet! </p>\n"}

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = {"title":"Miami Connection Review","author":"Dec","date":"2015-11-20T00:00:00.000Z","__content":"<p>Miami Connection (1987)</p>\n<p>The setting is Miami, Florida. A city gripped by drug gang violence.\nEnter our heroes, just your everyday 80s synth-rock band who just so happen to be black belts in TaeKwonDo.\nAll they want to do is spread their message of peace and friendship and tell the world that TaeKwonDo is life, but when bass-guitarist John starts going steady with the sister of the local gang leader a deadly chain of events involving Ninjas who ride motorbikes is begun...</p>\n<p>There is always a slight heady rush of anticipation that commandeers my senses when I sit down to watch a film which lists one person predominantly across the credits. In this case Y.K.Kim makes it into the writing, producer, acting and casting credits (although he is uncredited he also directed a scene at the end of the film, but more about that later). This does not necessarily mean the film is going to be bad, far from it in many cases, but it does mean there will be a certain single minded drive to it. One person\u0019s view on the world given public platform for all to see, bypassing all the checks and balances that a team of professional peers might bring to the mix. In some cases this might mean a brilliant writer/director is able to push the envelope of contemporary drudgery, smashing expectations and changing the game for all the big Hollywood filmmakers for years to come&amp; Most of the time, however, you get Miami Connection.</p>\n<p>Something you cannot help but notice about Miami Connection is that it was made in the 80s, it is an 83 minute all out assault of chest hair, mullets, and epic rock anthems. It almost seems to exist in the Wayne\u0019s World universe 5 years early and they\u0019re playing it straight, without the knowing winks to camera that Myers comically delivers. This film is literally bursting with earnest intent, wearing its misdirected heart on its vest- top- sleeve. There is something so heartwarming about how clumsy its pretensions to have a message are; when it finishes with a text message reading: \n\u001cOnly through the elimination of violence can we achieve world peace\u001d<br>I did not know whether to laugh or to cry. In the end I laughed because it was so at odds with what I had just seen to the point of ridiculousness!</p>\n<p> The film is set in Miami but shot in Orlando and I\u0019ve read somewhere that Y.K. Kim was so popular in Orlando the authorities let him film where-ever he wanted without requiring a permit. I\u0019m not sure why the film is set in Miami if that is true, seems like a bit of a slap in the face after such generosity but maybe Miami is considered more edgy or a more suitable setting for such high-voltage ninja/gang/rock antics, I have no idea being an ignorant Brit. But enough of circling around this like a ninja on a motorbike ambushing an 80s rock band made up of black belts in tae kwon do (That is a legitimate analogy from now on) let&#39;s get down to what makes this film so bad it is great!</p>\n<p>Miami Connection opens with some kind of shady looking gang, wielding sub-machine guns and  standing around in a GTA Vice City villa, but the film wastes no time to establish characters or interest before a gang of ninjas dart in and set about mercilessly killing the gangsters with an arsenal of archaic ninja weapons such as swords, shurikens and a bow and arrow. It\u0019s funny how in films if opposing forces clash, the ones with guns with always succumb to those wielding bows and arrows, but given a choice who in the right mind would choose a sword over an Uzi!? Perhaps they prefer the silent approach, I just don\u0019t know. There is some gratifying violence and the action seems well polished and performed but so far it could be any generic ninja movie spurned out by the likes of Godfrey Ho on an uninspired day when he isn\u0019t having fish exploding into ninjas. But wait! Waa? as they make their escape the ninjas saddle up onto an array of motorcycles and speed off enigmatically (and noisily) into the night&amp; Well so much for the silent approach, but hey this film just got interesting! </p>\n<p>A lot of the dialogue in the film is badly dubbed which can be pretty funny, however, when its not being dubbed it is somehow even worse. Conversations between characters are drowned out by background extras in some scenes and there are many scenes involving groups of characters such as gang members or band members where they all seem to be ad-libbing and talking at the same time and so you cannot make out a word anybody is saying. This is not really as big a problem as you might think since 90% of the dialogue is aimless chit-chat which does nothing to move the story along or develop the characters. One scene that particularly stands out is one where the moustachioed lead guitarist of the band Tom (played by Angelo Jannotti whose name seems to have been tragically misspelled on the IMDB page) hands out mail to his band mate/ flatmates. They are sitting around with their tops off, eating breakfast and he reads out all of the mail, carefully handing it out to all the right people, then the scene ends. Nothing important happens apart from the audience is further shown a cute insight into the daily life of the world&#39;s strangest but most loving family. The only other thing I can think of that this scene achieves is that it establishes that they get mail, which, boy oh boy, certainly comes back into play is a BIG way but as far as setups go it seems a bit unnecessary. </p>\n<p>This theory definitely has legs because it would not be the only deft directorial set up on display. The boys from the band practice sparring with Y.K. Kim on a lawn somewhere, in a scene which really seems to drag on and on... This scene had better have some kind of significance later on!! I complained to my long suffering companion in B-movie watching Emma, and lo and behold their training move is later used to grisly effect in the climactic fight scene at the end of the movie. The climatic fight scene was not, however, in the original cut of the film and was later shot without the director Woo-sang Park by Y.K. Kim himself! So maybe the deft directorial move was simply an afterthought? Or an accident? I fear I will never really know but I like to think Kim knew what he was doing all along.</p>\n<p>There does seem to be a nod towards good directing spattered about this film like fake blood off a ninja\u0019s sword, and these moments really stand out because the rest of the film is made up of long drawn out montages set to synth rock music or long drawn out scenes of the band playing synth rock music which seem to just be time filler in between the next gang-brawl fight scene. My favourite of the former was definitely a bemusing montage of mangy bikers hanging out in a biker bar, doing wheelies and getting drunk, set to a cheesy rock song with the lyrics: \u001cWhen things are getting rough, and you know you\u0019ve had enough, you need the right stuuuuff, to be a tough guy, tough guy!\u001d  I definitely found myself not paying any attention to half the dialogue scenes which is perhaps a shame because there are some really brilliant lines hidden in there like: \n\u001cI didn\u0019t know you had a father?\u001d and \u001cTaeKwonDo is life\u001d. \nThe highlights of the film are definitely found in the action scenes which are actually surprisingly well done although get a bit repetitive after a while.  The Formula basically seems to go like:</p>\n<p>TaeKwonDo rockers cruising in their white convertible until they are ambushed by a gang who have formed some kind of road block\nGang are standing or sitting around doing menacing things like sharpening knives or exposing their hairy chests and navels and rocking bandannas with biker leathers. \nThe band meekly drives up to the road block and calmly stop in front of it, making no attempt to drive away or turn around\nThe gang stalk over to the car baseball bats in their hands\nSome indecipherable dialogue \nY.K. Kim flying kicks out of the car and the band set about beating the mullets off the hapless gang members.</p>\n<p>I swear this scenario seems to happen at least 3 or 4 times, although I might be missing some of the subtle deviations because I was barely following the plot beyond the basic overview owing to not being able/ having the will to understand half the dialogue! </p>\n<p>Anyway, this film is best enjoyed with friends of a similar mind. The laughter you can have will easily outstrip a Hollywood so called comedy. And most excitingly of all, the full soundtrack is available online to stream. This may not sound so thrilling right now, but once you know how amazing the songs are in this accidental masterpiece, come back here and click the link below. I myself have been listening on a loop whilst writing this review and I\u0019m not crazy, I\u0019m the only one who isn\u0019t crazy so shut up!</p>\n<p><a href=\"https://soundcloud.com/drafthousefilms/sets/miami-connection-soundtrack\">https://soundcloud.com/drafthousefilms/sets/miami-connection-soundtrack</a> </p>\n"}

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = {"title":"Rick and Morty Review","author":"Dec","date":"2015-11-20T00:00:00.000Z","__content":"<p>Let me tell you about a crazy little show that may have flown underneath your radar called Ricky and Morty. An anarchistic, belch infused, Sci-fi comedy full of time bending storylines, shocking twists and dark, dark humour- Rick and Morty is just hilarious fun!</p>\n<p>The program follows the exploits of a boy named Morty who lives with his family. His grandpa Rick is a foul mouthed, narcissistic, megalomaniacal, scientific genius who is always inventing incredible gadgets to do awful, selfish things, all over the multi-verse; Imagine if you will, Professor Farnsworth but with the morals of Eric Cartman and you will be somewhere close to the mark. </p>\n<p>Rick is very much the antagonistic agent of chaos- wreaking havoc in a way which is quite delightful to behold. Unlike other comparable characters such as Homer, Bender, or Roger the alien, Rick is also the only person capable of calming the storms of madness he has conjured- in a typical episode, he causes a problem, stokes the fires of catastrophe while trying to solve the problem, and then finally brings things back to nearish normal through such sickening means that Morty becomes increasingly closer and closer to complete mental breakdown as the episodes go on.</p>\n<p>The rest of his family bring a realistic grounding to the mad-cap adventures, as the action cuts from some kind of inter-dimensional sentient fart explosion, to the mum and dad bickering about something. The slightly miserable relationship of Morty\u0019s parents is a marriage failing on grounds of deep rooted lack of connection and real attraction. This counterpoints the main part of the show, adding a farcical dramatic tension, which makes everything all the more funny. It is almost as if the show is making fun of the mundanity of your life and your problems by contrasting choices of galactic importance with whether or not Mum is having an affair with the handsome assistant horse doctor (she\u0019s horse doctor). </p>\n<p>A pervasive theme is that of chaos theory- that one small action or decision, leads to a whole bunch of unexpected consequences and Rick is involved, shit escalates FAST. It is joyful watching events slide out of control like greased pig at a children&#39;s birthday party and lots of episodes can actually be quite hard to predict what will happen, which is certainly unusual for the \u001cepisodic\u001d cartoon comedy format.</p>\n<p>So what about our main characters?  Rick is a blase, arrogant, extrovert- who dominates those around him. He seems to have a certain soft spot for Morty but can be ruthless in order to get his way. Rick also has a lot of fun, he basically uses his scientific chops to party his way around the galaxy- selling weapons to alien hitmen, and stealing precious time crystals from galactic federations, cavorting and generally acting as a law unto himself. His speech is constantly interrupted by burps and belches. I didn\u0019t even realise there was a difference between a burp and a belch before I saw this performance, but it is there. The burp is a brasher, higher, more tinny rasping sound, whereas the belch comes from deep inside the gut and spills out the corner of your mouth in acrid spirals. Rick spits out his words like chewing tobaccos between gulps and burps and belches and half choking sounds. This works well because he often has to explain things very quickly and these urgent messages are punctuated (and delayed) by these gaseous intrusions. He walks a knife edge of extreme competence and extreme incompetence- similar perhaps to Archer and therefore most plot points are driven/ resolved by Rick in someway or another.</p>\n<p>Morty, on the other hand, is timid, anxious, not too bright and generally quite an unfortunate little boy. His voice is a nervous little whimper, and he is at the awkward pre-teen stage of development but despite this discovers a certain taste for the adventures he embarks on with Rick. This lukewarm enthusiasm usually freezes cold pretty sharpish however, as Morty does not react to stressful situations with much composure and struggles to keep up with his grandpa\u0019s intellect when assessing a difficult situation. His relationship with Rick, does to some extent empower him but fate has a way of bringing him crashing back to earth. Sometimes Morty will try to stick up for himself to Rick but this has disastrous consequences. And so Morty, and us the audience are reminded- don\u0019t get too cocky kid, a little knowledge can be a dangerous thing!</p>\n<p>The visual style of the show is bright and cartoony. Its wackyness shares much more in common with children&#39;s shows such as Adventure Time or Gravity Falls than more adult fare. This could be very misleading as Rick and Morty is a million miles from being suitable for kids (I remember when I was young, my dad accidentally rented the South Park Movie from blockbusters thinking it was a children&#39;s film&amp; Woops!) Quite apart from the language in Rick and Morty, they could easily get nightmares from some of the dark shit that goes down! It is on Adult Swim which has lots of programs which look like they must be for children but contain adult only humour such as Robot Chicken so I suppose it must their thing. I think there is something inherently funny and \u001cnaughty\u001d about making crude jokes presented in a style that is normally associated with children, a kind of corrupt nostalgia that adds to the overall experience.</p>\n<p>One of my overall impressions of Rick and Morty is that it somehow feels like more than the sum of its parts. The first series was made on a relatively small budget and was supposedly somewhat of a labour of love for the co-creators Dan Harmon and Justin Roiland (creator of Community and voice of Lemongrab from adventure time- respectively). This scrappy outsider feel comes through in the finished work, by which I mean; it has many conventional elements that come together to create something unconventional. In fact in many ways, it can be seen to be subverting these conventions and playing with the sci-fi tropes we are all familiar with. Often time Morty will be expecting or acting in a way that is in line with these narrative cliches and Rick will stop and berate him- \u001cwhy would you think that would work like that Morty?!\u001d pointing out the absurdity of certain tropes and then of course we get to laugh at them backfiring on poor Morty.</p>\n<p>This twist on your expectations gives the jokes extra punching power and gives the allure of an exciting edginess, rather than broad strokes crassness. It sits in, and happily occupies a little niche that you never knew you needed- like a child of futurama that grew up, got a leather jacket, a motorbike and now just wheelies around, flipping the bird and playing slide guitar solos with a beer bottle. Maybe it isn\u0019t timelessly entertaining, and its heritage is worn on his sleeves, but while caught up in the moment it is undeniable, smile inducing fun. Plus, it\u0019s great to stick it to the old timers- it satirises its predecessors with a joyful savagery that they once did for their predecessors, and so on it goes, the circle of comedy and moves us all.</p>\n<p>A great example of this is found in one of my favourite episodes, when Morty is going to his high school prom, and asks Rick to make him a love potion so he can seduce the girl of his dreams. So pretty standard set up- a storyline we has seen done plenty of times- so I guess it will probably be something about Morty learning he should have confidence in himself- because no-one will respect you till you respect yourself, and that is the greatest love potion of them all, but that you should also offer respect to others and their wishes if they do not feel the same way that you do&amp; NOOOPE! </p>\n<p>Actually all hell breaks lose and as the narrative hurtles out of control into a boiling pot of armageddon and multidimensional genocide and the moral lesson becomes one of far more reaching profound proportions- Morty\u0019s desire is responsible for terrible events and he must either accept or reject that guilt- I do not want to give too much away as you should definitely see it but the ending is balmy, wickedly hilarious- reveling in the absurd misery of the events and leaves the characters permanently affected. </p>\n<p>The second series is halfway through airing at time of writing and the quality has not dropped off- there are a few episodes that do not hit home quite as hard as others, but you get that with all shows to a certain extent- the ones that do are quite incredible- I feel like some have a premise you could get a whole film out of, crammed into 20 minutes of pure unadulterated amusement and I do not see them running out of ideas anytime soon because with a sci-fi premise that has already introduced time travel and interdimensional exploration, the tardis doors are wide open for fantastical plots of all kinds.</p>\n<p>I\u0019ll leave you with a favourite quote from the show:</p>\n<blockquote>\n<p>\u001cnobody exists on purpose; nobody belongs anywhere; everyone is going to die; come watch TV.\u001d </p>\n</blockquote>\n"}

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = {"title":"B Movie Cult Blog","author":"Dec","date":"2016-01-20T00:00:00.000Z","__content":"<p>Cult night was a packed affair 20/01/2016 as we settled in for the first meeting of the new year.</p>\n<p>Double Impact was an early  90s film in which Jean Claude Van Dam plays two twins who are separated whilst young because their parents are murdered. Why were they murdered? We were not paying attention closely enough not know- but it seemed a bit like the set up of batman.</p>\n<p>The film was generally quite mild... the highlights included:</p>\n<p>Evil twin constantly smoking a cigar so you know he is evil.\nThe complete and utter destruction of anything made of glass- once we noticed this it became more and more more funny- culminating in a scene in which we were sure a fish tank would be smashed, but it wasn&#39;t, but then suddenly we went back and it was thoroughly exploded\nReally baggy 90s style suits\nJean did the splits\nJean kept mentioning his adequate penis size in a case of The Lady Doth Protest Too Much!\nEnd scene involves our good guys: two hulking muscley martial artist brutes, chasing and killing the baddies: two old, frail looking men who stood absolutely no chance... Erm YAY</p>\n<p>Overall, the film was a solid start to the year, but by no means the best/worst movie we have seen. This means we have room to improve though so there are no complaints here!</p>\n"}

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = {"title":"Dog Story: Little Heroes 2","youtube_id":"6dq9nRwYXvQ","date":"2015-10-01T00:00:00.000Z","category":"Bargain Bin Blunder","__content":"<p>Em and Dec delve into the the bargain bin and found Dog Story: Little Heroes 2 for a frankly overpriced 25p. Join them on a magical journey of discovery and whimsy in this debut Two Takes film review.</p>\n"}

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = {"title":"Channel Trailer","youtube_id":"oKhmw12mWsM","date":"2015-09-30T00:00:00.000Z","category":"Xtras","__content":"<p>The trailer for our channel.</p>\n"}

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = {"title":"Sydney White","youtube_id":"E0PfgDM_Rzo","date":"2015-10-25T00:00:00.000Z","category":"Bargain Bin Blunder","__content":"<p>Em and Dec delve into the the bargain bin and find Sydney White, a self purported modern telling of Snow White. </p>\n<p>Join them in discovering a film so uninspiring that it will magically put you into an enchanted sleep then cheer your heroes as they take it out into the woods and leave to be eaten by whimsical woodland critters.</p>\n"}

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = {"title":"Deck Dogz","youtube_id":"vx3xOWRgisw","date":"2015-11-16T00:00:00.000Z","category":"Bargain Bin Blunder","__content":"<p>Em &amp; Dec pop an ollie and an artery over this shambolic yet bogus/righteous/gervic mess of a film(?) that crashed it&#39;s way into their hearts. Follow them on this journey where they learn new words, gain a lotta love for Tony Hawk and once and for all prove that finger-boarding sooooucks.</p>\n"}

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = {"title":"Why We Love Fantastic Mr Fox","youtube_id":"xHWCvRrecn4","date":"2015-12-20T00:00:00.000Z","category":"TwoTakes Takes On","__content":"<p>Seeing as it is the season of goodwill, Em and Dec give their thoughts on one of their favourite films: Fantastic Mr Fox. </p>\n<p>Copyrighted clips used under Fair Use for the purpose of review.</p>\n<p>Clips From:\nFantastic Mr Fox (2009)\nShaun Of The Dead (2004)\nMinions (2015)\nScott Pilgrim Vs The World (2010)\nReservoir Dogs (1992)\nPulp Fiction (1994)\nThe Grand Budapest Hotel (2014)\nMoonrise Kingdom (2012)\nThe Royal Tenenbaums (2001)\nThe Life Aquatic with Steve Zissou (2004)</p>\n<p>Music Used:\nLatch Swing: Rythme Gitan\nSergey Cheremisinov: Destroyer</p>\n"}

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = {"title":"Stay Alive","youtube_id":"rVS2uvhzcTo","date":"2016-01-25T00:00:00.000Z","category":"Bargain Bin Blunder","__content":"<p>In this film review Em and Dec discover the true horror that lies within their latest DVD disaster... A terrible movie. If this horror film was a sandwich it would be two layers of bread with a slice of stale bread in between and a old mayonnaise stain that looks slightly like Frankie Muniz&#39;s face.</p>\n<p>Moving on they seek to understand why jump scares are scary... Spoiler, they&#39;re not, and why poor old Frankie agreed to this mess... They still have no idea.</p>\n"}

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = {"title":"Into The Grizzly Maze","youtube_id":"-qkMr7PsZjI","date":"2016-02-07T00:00:00.000Z","category":"Check it or Chuck it","__content":"<p>In this short and sweet film review, Twotakes take a cheeky dip into whether you should check out or chuck out a movie called Into The Grizzly Maze (2015). Will Em and Dec give this film their full su-paw-t? Or will it be too much to bear? </p>\n<p>The film follows a character played by James Marsden (Cyclops from Xmen) who for some reason has to go somewhere where a grizzly bear is on the rampage. Along the way, we are surprised when he ends up encountering said bear! </p>\n<p>Copyrighted clips used under Fair Use for the purpose of review.</p>\n<p>Music:\nBeautiful Danger\nMusic by Jay Man - OurMusicBox\n<a href=\"http://www.youtube.com/c/ourmusicbox\">http://www.youtube.com/c/ourmusicbox</a>\n<a href=\"http://ourmusicbox.com/\">http://ourmusicbox.com/</a></p>\n<p>and check out: <a href=\"http://www.dl-sounds.com\">http://www.dl-sounds.com</a> for great royalty free music.</p>\n"}

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = {"title":"Samurai Cop","youtube_id":"LE0TK7-oQy8","date":"2016-02-21T00:00:00.000Z","category":"Check it or Chuck it","__content":"<p>This movie review sees Twotakes look back on one of their favourite bad movies: Samurai Cop, to celebrate the release of its sequel Samurai Cop 2. They kindly ask that you keep your wig on throughout.</p>\n<p>Samurai Cop is a cop who has &quot;mastered&quot; the ways of the Samurai and must fight to take down a very strange drug gang in a series of baffling encounters. Along the way, our friend manages to make jokes, cut off limbs and discover the true meaning of friendship.</p>\n<p>Copyrighted clips used under Fair Use for the purpose of review.</p>\n<p>Clips:\nSamurai Cop (1991)\nLethal Weapon (1987)</p>\n<p>Music:\nCheck out: <a href=\"http://www.dl-sounds.com\">http://www.dl-sounds.com</a> for great royalty free music.</p>\n<p>Follow us on:\nTwitter: <a href=\"https://twitter.com/TwoTakesReviews\">https://twitter.com/TwoTakesReviews</a>\nFacebook: <a href=\"https://www.facebook.com/twotakesreviews\">https://www.facebook.com/twotakesreviews</a></p>\n"}

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = {"title":"The Best TV Shows to Binge On","youtube_id":"Tim7fnvfSF0","date":"2016-03-10T00:00:00.000Z","category":"TwoTakes Takes On","__content":"<p>In an era in which auto-play technology has been gloriously realised, Twotakes (joined by their fellow youtuber: Jumpcut Thoughts) present some of their favourite shows to binge on... Truly a more random collection of choices has nay graced a Youtube video before.</p>\n<p>Copyrighted clips used under Fair Use for the purpose of review.</p>\n<p>Clips:\nPeep Show (2003-2015)\nHunter x Hunter (2011- 2013)\nGilmore Girls (2000-2007)\nPower Rangers (1993-)\nDiners, Drive-ins and Dives (2006-)\nBrooklyn Nine-Nine (2013-)\nThe Office U.S. (2005- 2013)\n30 Rock (2006- 2013)\nParks and Recreation (2009- 2015)</p>\n<p>Music:\nCheck out: <a href=\"http://www.dl-sounds.com\">http://www.dl-sounds.com</a> for great royalty free music.</p>\n<p>Follow us on:\nTwitter: <a href=\"https://twitter.com/TwoTakesReviews\">https://twitter.com/TwoTakesReviews</a>\nFacebook: <a href=\"https://www.facebook.com/twotakesreviews\">https://www.facebook.com/twotakesreviews</a>\nYoutube: <a href=\"https://www.youtube.com/channel/UC8329b3fYwBT0uHUuVzgPbg\">https://www.youtube.com/channel/UC8329b3fYwBT0uHUuVzgPbg</a></p>\n<p>Check out Jumpcut Thoughts:</p>\n<ul>\n<li>Website: <a href=\"http://jumpcutthoughts.com\">http://jumpcutthoughts.com</a></li>\n<li>Twitter: <a href=\"http://twitter.com/@JumpCutSimon\">http://twitter.com/@JumpCutSimon</a></li>\n<li>Facebook: <a href=\"http://www.facebook.com/jumpcutthoughts\">http://www.facebook.com/jumpcutthoughts</a></li>\n</ul>\n"}

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = {"title":"One Punch Man","youtube_id":"u5U_ncq0g_8","date":"2016-03-25T00:00:00.000Z","category":"Check it or Chuck it","__content":"<p>Without spoiling any plot, Twotakes review One Punch Man (2015-) an action comedy anime about a shiny headed hero named Saitama. Will this TV show be given the Check it seal of approval, or will Em and Dec Chuck it away and fart in its general direction??</p>\n<p>Copyrighted clips used under Fair Use for the purpose of review.</p>\n<p>Clips:\nOne Punch Man (2015-)\nBobs Burgers (2011-)</p>\n<p>Music:\nDave Depper: Swagger 1\nDave Depper: Southern Excitement</p>\n<p>Follow us on:\nTwitter: <a href=\"https://twitter.com/TwoTakesReviews\">https://twitter.com/TwoTakesReviews</a>\nFacebook: <a href=\"https://www.facebook.com/twotakesreviews\">https://www.facebook.com/twotakesreviews</a></p>\n"}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./pages/404.md": 14,
		"./pages/about.md": 15
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 31;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./posts/2015-07-29-hector-and-the-search-for-happiness.md": 16,
		"./posts/2015-11-20-kungfu-panda-review.md": 17,
		"./posts/2015-11-20-miami-connection-review.md": 18,
		"./posts/2015-11-20-rick-and-morty-review.md": 19,
		"./posts/2016-01-20-B-Movie-Cult-Blog-Double-Impact.md": 20
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 32;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./videos/2015-10-01-dog-story-little-heros-2.md": 21,
		"./videos/2015-10-02-channel-trailer.md": 22,
		"./videos/2015-10-25-sydney-white.md": 23,
		"./videos/2015-11-16-deck-dogz.md": 24,
		"./videos/2015-12-20-fantastic-mr-fox.md": 25,
		"./videos/2016-01-25-stay-alive.md": 26,
		"./videos/2016-02-07-into-the-grizzly-maze.md": 27,
		"./videos/2016-02-21-samurai-cop.md": 28,
		"./videos/2016-03-10-best-tv-shows-to-binge-on.md": 29,
		"./videos/2016-03-25-one-punch-man.md": 30
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 33;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _data = __webpack_require__(11);

	var _utils = __webpack_require__(35);

	var _videoListItem = __webpack_require__(36);

	var _videoListItem2 = _interopRequireDefault(_videoListItem);

	var styles = (0, _utils.style)({
	  header: 'margin: 10px 0; font-size: 1.2em',
	  links: 'margin-top: -10px',
	  a: 'padding: 0 1%; color: #fff',
	  article: 'text-align: center',
	  icons: 'text-align: right',
	  icon: 'margin: 5px 0.5% 0; width: 30px',
	  logo: '\n    background: radial-gradient(rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 72%);\n    padding: 10px\n  '
	});

	exports['default'] = '\n  <main>\n    <header ' + styles.header + '>\n      <img src=\'' + _data.site.baseurl + '/img/logo.png\' ' + styles.logo + ' />\n      <nav ' + styles.links + '>\n        <a ' + styles.a + ' href=\'' + _data.site.baseurl + '/videos\'>Videos</a>\n        <a ' + styles.a + ' href=\'' + _data.site.baseurl + '/posts\'>Articles</a>\n        <a ' + styles.a + ' href=\'' + _data.site.baseurl + '/about\'>About</a>\n      </nav>\n    </header>\n\n    <article ' + styles.article + '>\n      ' + _data.videos.values.slice(0, 3).map(_videoListItem2['default']).join('') + '\n    </article>\n\n    <nav ' + styles.icons + '>\n      <a href=\'' + _data.site.facebook + '\' target=\'_blank\'>\n        <img src=\'' + _data.site.baseurl + '/img/fb.png\' ' + styles.icon + ' />\n      </a>\n      <a href=\'' + _data.site.twitter + '\' target=\'_blank\'>\n        <img src=\'' + _data.site.baseurl + '/img/twitter.png\' ' + styles.icon + ' />\n      </a>\n      <a href=\'' + _data.site.youtube + '\' target=\'_blank\'>\n        <img src=\'' + _data.site.baseurl + '/img/youtube.png\' ' + styles.icon + ' />\n      </a>\n      <a href=\'' + _data.site.baseurl + '/feed.xml\' target=\'_blank\'>\n        <img src=\'' + _data.site.baseurl + '/img/rss.png\' ' + styles.icon + ' />\n      </a>\n    </nav>\n  </main>\n';
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.escapeXML = escapeXML;
	exports.style = style;
	exports.collectProperty = collectProperty;

	var _data = __webpack_require__(11);

	var all = _extends({}, _data.pages, _data.posts, _data.videos);
	var title = function title(path) {
	  return _data.site.name + (all[path] ? ' | ' + all[path].title : '');
	};

	exports.title = title;
	var prettyDate = function prettyDate(date) {
	  return new Date(date).toDateString();
	};
	exports.prettyDate = prettyDate;
	var stripHTML = function stripHTML(str) {
	  return str.replace(/<(?:.|\n)*?>/gm, '');
	};

	exports.stripHTML = stripHTML;

	function escapeXML(str) {
	  return str && str.replace(/[<>&'"]/g, function (c) {
	    switch (c) {
	      case '<':
	        return '&lt;';
	      case '>':
	        return '&gt;';
	      case '&':
	        return '&amp;';
	      case '\'':
	        return '&apos;';
	      case '"':
	        return '&quot;';
	    }
	  });
	}

	function style(styles) {
	  for (var k in styles) {
	    styles[k] = 'style=\'' + styles[k].replace(/\s+/g, ' ') + '\'';
	  }
	  return styles;
	}

	function collectProperty(ary, prop) {
	  return ary.reduce(function (res, elem) {
	    return res.indexOf(elem[prop]) < 0 ? res.concat(elem[prop]) : res;
	  }, []);
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _utils = __webpack_require__(35);

	var _data = __webpack_require__(11);

	var styles = (0, _utils.style)({
	  a: '\n    display: inline-block;\n    text-align: left;\n    margin: 15px 1%;\n    width: 350px;\n    max-width: 90%;\n  ',
	  img: '\n    width: 100%;\n    border-radius: 10px;\n    border: 5px solid #F7911D;\n    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.45);\n  ',
	  time: 'padding-bottom: 10px'
	});

	exports['default'] = function (video) {
	  return '\n  <a href=\'' + (_data.site.baseurl + video.path) + '\' ' + styles.a + '>\n    <h3>' + video.title + '</h3>\n    <time ' + styles.time + '>' + (0, _utils.prettyDate)(video.date) + '</time>\n    <img src=\'//img.youtube.com/vi/' + video.youtube_id + '/hqdefault.jpg\'\n         ' + styles.img + ' />\n  </a>\n';
	};

	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utils = __webpack_require__(35);

	var _homeButton = __webpack_require__(38);

	var _homeButton2 = _interopRequireDefault(_homeButton);

	var styles = (0, _utils.style)({ article: 'margin: 0 10%', body: 'color: #fff' });

	exports['default'] = function (page) {
	  return '\n  <main>\n    ' + _homeButton2['default'] + '\n    <article ' + styles.article + '>\n      <h1>' + page.title + '</h1>\n      <div ' + styles.body + '>' + page.__content + '</div>\n    </article>\n  </main>\n';
	};

	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _data = __webpack_require__(11);

	var _utils = __webpack_require__(35);

	var styles = (0, _utils.style)({
	  img: '\n    margin-top: 10px;\n    width: 100px;\n    padding: 5px;\n    background: radial-gradient(rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 72%);\n  '
	});

	exports['default'] = '\n  <a href=\'' + _data.site.baseurl + '/\'>\n    <img src=\'' + _data.site.baseurl + '/img/logo.png\' ' + styles.img + ' />\n  </a>\n';
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utils = __webpack_require__(35);

	var _homeButton = __webpack_require__(38);

	var _homeButton2 = _interopRequireDefault(_homeButton);

	var styles = (0, _utils.style)({
	  article: '\n    background: rgba(255, 255, 255, 0.35);\n    padding: 15px 10%;\n    border-radius: 10px;\n  ',
	  body: 'color: #fff'
	});

	exports['default'] = function (post) {
	  return '\n  <main itemscope itemtype=\'http://schema.org/BlogPosting\'>\n    ' + _homeButton2['default'] + '\n    <article ' + styles.article + '>\n      <h1 itemprop=\'headline\'>' + post.title + '</h1>\n      <time itemprop=\'datePublished\' content=' + post.date + '>\n        ' + (0, _utils.prettyDate)(post.date) + '\n      </time>\n      <div>By: <span itemprop=\'author\'>' + post.author + '</span></div>\n      <div itemprop=\'articleBody\' ' + styles.body + '>' + post.__content + '</div>\n    </article>\n  </main>\n';
	};

	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utils = __webpack_require__(35);

	var _data = __webpack_require__(11);

	var _homeButton = __webpack_require__(38);

	var _homeButton2 = _interopRequireDefault(_homeButton);

	var styles = (0, _utils.style)({
	  a: '\n    display: block;\n    padding: 15px 2%;\n    margin: 15px 1%;\n    color: #000;\n    border-radius: 6px;\n    box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.5);\n    background: #F8921F\n  ',
	  time: 'color: #fff',
	  p: 'margin: 0'
	});

	var summary = function summary(post) {
	  return (0, _utils.stripHTML)(post.__content).substring(0, 300) + '...';
	};

	var PostListItem = function PostListItem(post) {
	  return '\n  <a href=\'' + (_data.site.baseurl + post.path) + '\' class=\'post-link\' ' + styles.a + '>\n    <h3>' + post.title + '</h3>\n    <time ' + styles.time + '>' + (0, _utils.prettyDate)(post.date) + '</time>\n    <p ' + styles.p + '>' + summary(post) + '</p>\n  </a>\n';
	};

	exports['default'] = '<main>' + _homeButton2['default'] + _data.posts.values.map(PostListItem).join('') + '</main>';
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utils = __webpack_require__(35);

	var _homeButton = __webpack_require__(38);

	var _homeButton2 = _interopRequireDefault(_homeButton);

	var styles = (0, _utils.style)({
	  h2: 'margin: 0',
	  videoWrapper: '\n    position: relative;\n    padding-bottom: 56.25%;\n    height: 0;\n    overflow: hidden;\n    max-width: 100%;\n    margin: 25px 0\n  ',
	  iframe: '\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%\n  ',
	  description: 'margin: 25px 2%; color: #FFF'
	});

	exports['default'] = function (video) {
	  return '\n  <main itemscope itemtype=\'http://schema.org/VideoObject\'>\n    ' + _homeButton2['default'] + '\n    <header>\n  \t  <h2 ' + styles.h2 + ' itemprop=\'name\'>' + video.title + '</h2>\n  \t  <time itemprop=\'uploadDate\' content=' + video.date + '>\n  \t    ' + (0, _utils.prettyDate)(video.date) + '\n  \t  </time>\n  \t</header>\n  \t<section ' + styles.videoWrapper + '>\n  \t\t<iframe src=\'//www.youtube.com/embed/' + video.youtube_id + '\'\n  \t\t        itemprop=\'embedUrl\'\n  \t\t        frameborder=\'0\'\n              ' + styles.iframe + '\n  \t\t        allowfullscreen></iframe>\n  \t</section>\n    <section itemprop=\'description\' ' + styles.description + '>\n      ' + video.__content + '\n    </section>\n  </main>\n';
	};

	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utils = __webpack_require__(35);

	var _data = __webpack_require__(11);

	var _homeButton = __webpack_require__(38);

	var _homeButton2 = _interopRequireDefault(_homeButton);

	var _videoListItem = __webpack_require__(36);

	var _videoListItem2 = _interopRequireDefault(_videoListItem);

	var Category = function Category(category) {
	  return '\n  <section>\n    <h1>' + category + '</h1>\n    ' + _data.videos.values.filter(function (video) {
	    return video.category === category;
	  }).map(_videoListItem2['default']) + '\n  </section>\n';
	};

	exports['default'] = '\n  <main>\n    ' + _homeButton2['default'] + '\n    <article>\n      ' + (0, _utils.collectProperty)(_data.videos.values, 'category').sort().map(Category).join('') + '\n    </article>\n  </main>\n';
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	var _data = __webpack_require__(11);

	exports['default'] = ['/', '/posts', '/videos'].concat(_toConsumableArray(Object.keys(_data.pages)), _toConsumableArray(Object.keys(_data.posts)), _toConsumableArray(Object.keys(_data.videos)));
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _data = __webpack_require__(11);

	var _utils = __webpack_require__(35);

	var _app = __webpack_require__(10);

	var _app2 = _interopRequireDefault(_app);

	exports['default'] = function (path) {
	  return '\n  <html>\n    <head>\n      <meta charset=\'utf-8\' />\n      <meta http-equiv=\'X-UA-Compatible\' content=\'IE=edge\' />\n      <meta name=\'viewport\' content=\'width=device-width, initial-scale=1.0\' />\n      <meta name=\'description\' content=' + _data.site.description + ' />\n      <meta name=\'google-site-verification\' content=\'5qF5thfeCpp34VSol64wDMDIm1KmMIEgIimF8KlSP9E\' />\n      <link rel=\'canonical\' href=' + (_data.site.url + _data.site.baseurl + path) + ' />\n      <title>' + (0, _utils.title)(path) + '</title>\n      <link href=\'' + _data.site.baseurl + '/styles.css\' rel=\'stylesheet\' type=\'text/css\'>\n      <link href=\'//fonts.googleapis.com/css?family=Poppins\' rel=\'stylesheet\' type=\'text/css\'>\n    </head>\n    <body>\n      <div id=\'app\'>' + (0, _app2['default'])(path) + '</div>\n      <script src=\'' + _data.site.baseurl + '/client.js\'></script>\n    </body>\n  </html>\n';
	};

	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _data = __webpack_require__(11);

	var _utils = __webpack_require__(35);

	exports['default'] = '<?xml version="1.0" encoding="UTF-8"?>\n  <rss version=\'2.0\' xmlns:atom=\'http://www.w3.org/2005/Atom\'>\n    <channel>\n      <title>' + (0, _utils.escapeXML)(_data.site.name) + '</title>\n      <description>' + (0, _utils.escapeXML)(_data.site.description) + '</description>\n      <link>' + (_data.site.url + _data.site.baseurl) + '/</link>\n      <atom:link href=\'' + (_data.site.url + _data.site.baseurl) + '/feed.xml\' rel=\'self\' type=\'application/rss+xml\' />\n      <pubDate>' + new Date().toUTCString() + '</pubDate>\n      <lastBuildDate>' + new Date().toUTCString() + '</lastBuildDate>' + _data.videos.values.map(function (video) {
	  return '\n          <item>\n            <title>' + (0, _utils.escapeXML)(video.title) + '</title>\n            <description>' + (0, _utils.escapeXML)((0, _utils.stripHTML)(video.__content)) + '</description>\n            <pubDate>' + new Date(video.date).toUTCString() + '</pubDate>\n            <link>' + (_data.site.url + _data.site.baseurl + video.path) + '</link>\n            <guid isPermaLink=\'true\'>' + (_data.site.url + _data.site.baseurl + video.path) + '</guid>\n            <category>' + (0, _utils.escapeXML)(video.category) + '</category>\n          </item>\n        ';
	}).join('\n') + '</channel>\n  </rss>\n';
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;