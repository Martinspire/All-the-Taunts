var taunter = angular.module('Taunter');
angular.module('Taunter')
	.factory('tauntsFactory', ['$resource',
		function tauntsFactory($resource)
		{
			var taunts = [
				[101, "101 furself.wav",
					"Why don't you go outside and play hide and go fuck yourself?", 0
				],
				[102, "102 haha.wav", "Haha!", 0],
				[103, "103 tnt_tick.wav", "*Bomb*", 0],
				[104, "104 chicken.wav", "Chicken!", 0],
				[105, "105 goodbad.wav", "*Western Sound*", 0],
				[106, "106 clearout.wav", "Better Clear out!", 0],
				[107, "107 AwwMan.wav", "Aww Man", 0],
				[108, "108 Awwcrap.wav", "AWW Crap.", 0],
				[109, "109 lostlead.wav", "Lost Lead.", 0],
				[110, "110 takenlead.wav", "Taken Lead", 0],
				[111, "111 tiedlead.wav", "Tied For Lead, Better get going.", 0],
				[112, "112 futileattemps.wav", "Your attempts are futile", 0],
				[113, "113 omega.wav", "Cheating Bastard.", 0],
				[114, "114 whin.wav", "Stop Whining.", 0],
				[115, "115 daddy.wav", "Who's your daddy?.", 0],
				[116, "116 excellant.wav", "Excellent.", 0],
				[117, "117 shutup.wav", "Shut up fool!.", 0],
				[118, "118 idontthinkso.wav", "I don't think so.", 0],
				[119, "119 startgame.wav", "Start the game already!", 0],
				[120, "120 iamweak.wav", "I am weak.", 0],
				[121, "121 gotsomesatisfaction.wav", "I just got some satisfaction.", 0],
				[122, "122 zerotolerance.wav", "Zero Tolerance.", 0],
				[123, "123 ohyeah.wav", "Oh Yeah.", 0],
				[124, "124 South Park - Towelie - I am so high.wav", "I am so high.", 0],
				[125, "125 why.wav", "Why is everybody riding me today?", 0],
				[126, "126 bitch.wav", "You're goin' down!", 0],
				[127, "127 outnow.wav",
					"Well now you'll gonna get it motherfucker! That's right, you and me, right now, we're havin' it out ! Let's go ! C'mon ! C'mon !",
					0
				],
				[128, "128 righton.wav", "Right on!", 0],
				[129, "129 attacked.wav", "I'm being attacked!", 0],
				[130, "130 sucks.wav", "Sucks to be you.", 0],
				[131, "131 hello baby.wav", "Hello... baby", 0],
				[132, "132 goodlookin.wav", "Hehe! Good-looking", 0],
				[133, "133 goodmorning vietnam.wav", "Goooooood Morning Vietnam!", 0],
				[134, "134 ladies and gentlemen welcome to my underground lair.wav",
					"Ladies and Gentlemen, Welcome to my underground lair", 0
				],
				[135, "135 master master we have a visitor.wav",
					"Master, Master, We have a visitor...", 0
				],
				[136, "136 welcome my brother.wav", "Welcome my brother.", 0],
				[137, "137 welcome back my friend.wav", "Welcome back my friend!", 0],
				[138, "138 All Hail.wav", "All Hail for da King!", 0],
				[139, "139 so hmmm how you doing.wav", "So, how you doing?", 0],
				[140, "140 shall we play a game.wav", "Shall we play a game?", 0],
				[141, "141 Is everyone on a break.wav",
					"Someone here? Hello? Is everyone on a break???", 0
				],
				[142, "142 Where your waiting for Christmas.wav",
					"What are your waiting for? Christmas?", 0
				],
				[143, "143 everybody online looking good.wav",
					"Everybody online?? Looking good!", 0
				],
				[144, "144 Oh joy what a beautifull day.wav",
					"Oh joy! What a beautiful day...", 0
				],
				[145, "145 welcome to the internet my friend how can i help you.wav",
					"Welcome to the internet my friend, How can I help you???", 0
				],
				[146, "146 So you are a user.wav", "So you are a user...fascinating!", 0],
				[147, "147 oh oh we got a moron here.wav",
					"Oh, Oh... We got a moron here...", 0
				],
				[148, "148 newbie.wav", "Newbie!", 0],
				[149, "149 Let's See what you're made of.wav",
					"Let's see, what you're made of!!!", 0
				],
				[150, "150 I show you a function or two.wav",
					"I show you, a function or two...", 0
				],
				[151, "151 Shut Up.wav", "Shut Up!!!", 0],
				[152, "152 remember the force will be with you always.wav",
					"FSF Remember the force will be with you... Always!", 0
				],
				[153, "153 Attack them now.wav", "Attack them now!!!", 0],
				[154, "154 Im in position.wav", "I'm in position...", 0],
				[155, "155 We're beying watched.wav",
					"We're being watched... (by scout and/or spies)", 0
				],
				[156, "156 Why did you do that for.wav",
					"You clumsy poop! Why did you do that for???", 0
				],
				[157, "157 Sir Yes Sir!.wav", "Sir!, Yes!, Sir!", 0],
				[158, "158 woody laugh.wav", "Laughing Out Loud!", 0],
				[159, "159 infinity.wav",
					"I start my attack! Back me up when needed... I don't like a 2vs1", 0
				],
				[160, "160 Rock and Roll.wav",
					"Rock and Roll!!! I attack all who dare to face me!!!", 0
				],
				[161, "161 you cant hide from me i know all the shortcuts.wav",
					"You can run, but you can't hide from me...I know all the shortcuts!", 0
				],
				[162, "162 You Will Bow.wav",
					"Before this is over, you Will kneel and bow before me, begging to spare your live...",
					0
				],
				[163, "163 feelthecorruption.wav", "Feel the corruption...", 0],
				[164, "164 He I'm in your town.wav", "He! I'm in your town!", 0],
				[165, "165 Were Taking This Place.wav",
					"I think, I like this city, We're taking this place over...", 0
				],
				[166, "166 Sorry I only ment to wound you.wav",
					"Resigned?!? Sorry, I only meant to wound you...", 0
				],
				[167, "167 You die too easily.wav", "You die too easily!!!", 0],
				[168, "168 See You In Hell.wav", "See You In Hell.", 0],
				[169, "169 Damn Im Good.wav", "Damn I'm Good!!!", 0],
				[170, "170 Yeh man that team sucked.wav",
					"Yeh, man that team sucked... It was too easy!!!", 0
				],
				[171, "171 Couldn't let you have all the glory.wav",
					"Couldn't let you have all the glory...", 0
				],
				[172, "172 Stinker.wav", "Am I a stinker???", 0],
				[173, "173 Remind me.wav",
					"Remind me to kill you later!! Well... Let's do it now...", 0
				],
				[174, "174 Here They Come.wav", "Here They Come... Fire!!!", 0],
				[175, "175 Leave Me Alone.wav", "Leave Me Alone!", 0],
				[176, "176 Will evil never rest.wav", "Will evil never rest?!?", 0],
				[177, "177 Ill Teach You.wav",
					"I'll teach you to come near to my cities, I eat people like you for breakfast!!!",
					0
				],
				[178, "178 Help I need somebody01.wav",
					"Help, I need somebody, Help, not just anybody, Help, you know I need someone, help!!!",
					0
				],
				[179, "179 Help me if you can.wav",
					"Help me if you can, I'm feeling down... And I do appreciate you being round...",
					0
				],
				[180, "180 Would you please please help me.wav",
					"Help me, get my feet back on the ground... Won't you please, please help me?!?",
					0
				],
				[181, "181 I cant take it anymore.wav", "I can't take it anymore...", 0],
				[182, "182 Thank you.wav", "THANK YOU! My friend.", 0],
				[183, "183 now go away or i shall taunt you a second time.wav",
					"Now go away... or I shall taunt you a second time...", 0
				],
				[184, "184 they are coming to take me away.wav",
					"They are coming to take me away...", 0
				],
				[185, "185 We Surrender.wav", "We Surrender...Move a little closer.", 0],
				[186, "186 I Hate You.wav", "I hate you!", 0],
				[187, "187 i will leave you now but you wont defeat me.wav",
					"I will leave you now... but you wont defeat me...", 0
				],
				[188, "188 goodnite stupid.wav", "Goodnight stupid.", 0],
				[189, "189 forgoing.wav",
					"I regret to announce, this is the end! I am going now... I bid you all, a very fond farewell...",
					0
				],
				[190, "190 gnight ladies- goodnight Sir.wav",
					"G'night ladies...Goodnight Sir!", 0
				],
				[191, "191 fragmentedperformance.wav", "Shit... This game is laggy...=(", 0],
				[192, "192 getaloadofthatjunkdata.wav",
					"Please all turn off other programs running in the background... please!",
					0
				],
				[193, "193 illegalprogramtermination.wav", "It's GameSpy again...", 0],
				[194, "194 lowsamplejunk.wav", "Man... This tauntpack sucks...", 0],
				[195, "195 nopermissionnoadmission.wav",
					"Woooo... holdup script no permission no admission...READ THE DESCRIPTION PLEASE!!!",
					0
				],
				[196, "196 addressthosebugsinnextpatch.wav",
					"You address those bugs in the next patch???", 0
				],
				[197, "197 therecanbeonlyonemaster.wav",
					"There can be only one Master... IN THIS CASE: _FSF_[NL]Fedomar!!!", 0
				],
				[198, "198 therecanbeonlyonemaster.wav", "There can be only one Master!", 0],
				[199, "199 mmm unprocessed FishSticks.wav",
					"Hmmm unprocessed FishSticks...", 0
				],
				[200, "200 keep_risin-1.wav", "The Fish Stick Foundation!", 0],
				[201, "201 Darth.wav", "Indeed you are powerful.", 0],
				[202, "202 av-ohyes.wav",
					"Yes! Yes! Oh, yeah! Can you feel that buddy? Huh? Huh? Huh?!", 0
				],
				[203, "203 av2-selfish.wav",
					"Of course, how selfish of me... let's do all the things that you wanna do.",
					0
				],
				[204, "204 beveryquiet.wav", "Be vewy vewy quiet. I'm hunting wabbits.", 0],
				[205, "205 excuse_me.wav", "Excuseeeeeeeeeeeee meeeeeeeeeeeeeeeee!", 0],
				[206, "206 911.wav", "Somebody call 911!", 0],
				[207, "207 musthaveprecious.wav",
					"We wants it. We needs it. Must have the precious!", 0
				],
				[208, "208 precious1.wav", "My Precious!", 0],
				[209, "209 precious2.wav", "My Precious!!!", 0],
				[210, "210 doesntanyonelisten.wav",
					"Doesn't anyone listen to one damn word I say?!?", 0
				],
				[211, "211 simp193.wav",
					"I didn't think it was physically possible that this both sucks and blows.",
					0
				],
				[212, "212 ohno2.wav", "Oh no! Oh no! Oho oh no! No! No! No! No! Nooo!", 0],
				[213, "213 feelgood.wav",
					"Whoa! I feel good, I knew that I would now, so good, so good, I've got you!",
					0
				],
				[214, "214 10secs.wav", "Is it possible for you to STFU for ten seconds?",
					0
				],
				[215, "215 av-loser.wav", "La-hew... Za-her.", 0],
				[216, "216 av-right.wav", "All-righty then!", 0],
				[217, "217 badolputty.wav", "Bad ol' putty cat !", 0],
				[218, "218 destruction.wav", "Prepare yourself for destruction!!!", 0],
				[219, "219 dumb-idea.wav", "I think I just... yeah... I just had an idea.",
					0
				],
				[220, "220 awesome.wav",
					"This is awesome... We're going to be like 'pow-pow-pow' and they going to be like 'arrghhhh'",
					0
				],
				[221, "221 happening2.wav", "Why does this keep happening to me?!", 0],
				[222, "222 pitiful2human.wav", "Pitiful human!!!", 0],
				[223, "223 razorsharp.wav",
					"Oh no! How could my razor-sharp intellect betray me?", 0
				],
				[224, "224 tick3.wav", "I am mighty!", 0],
				[225, "225 bendover.wav",
					"It is time for me to bend over and receive my destiny.", 0
				],
				[226, "226 3steps.wav",
					"You'd need three promotions to get to be an asshole.", 0
				],
				[227, "227 dissapointed.wav", "Disappointed!!!", 0],
				[228, "228 assholemio.asp.wav", "Assholemioooo!!!!", 0],
				[229, "229 assmine.wav", "Your ass is mine.", 0],
				[230, "230 beavisheheheheh.wav", "Heheheheh.", 0],
				[231, "231 stopme.asp.wav", "Somebody stop me !", 0],
				[232, "232 let's rock.asp.wav", "Let's ROCK this joint !", 0],
				[233, "233 smokin.asp.wav", "SMOKIN' !!!!", 0],
				[234, "234 meepmeep.asp.wav", "Meep Meep!", 0],
				[235, "235 speedy.asp.wav", "Faster, faster!", 0],
				[236, "236 goodmen.wav",
					"The marines are looking for a few good men. Unfortunately you ain't it.",
					0
				],
				[237, "237 flesh.wav", "You will taste man flesh!", 0],
				[238, "238 remove.wav", "We have only to remove those who oppose us.", 0],
				[239, "239 Duke5.wav", "You're gonna get accidentally shot!", 0],
				[240, "240 work.wav", "We have work to do!", 0],
				[241, "241 bibi.wav", "Bibbidi-bobbidi-boo!", 0],
				[242, "242 bitch.wav", "Oh bitch bitch bitch!", 0],
				[243, "243 chrischicken.wav",
					"Hey! Guess who's here... What are we serving today, chicken or... chicken?",
					0
				],
				[244, "244 adult.wav",
					"Due to mature adult content parental discretion is advised.", 0
				],
				[245, "245 child.wav",
					"To say you behave childishly is an insult to children everywhere.", 0
				],
				[246, "246 dexter.wav",
					"It never fails to surprise me how completely without intelligence you are.",
					0
				],
				[247, "247 youranidiot.wav",
					"First of all you are an idiot, and second... nah.. that pretty much covers it.",
					0
				],
				[248, "248 ruamoron.wav", "Are you some kind of moron?", 0],
				[249, "249 shag.wav", "Shall we shag now or shall we shag later?", 0],
				[250, "250 failure.wav",
					"Let this be a reminder to you all that this organization will not tolerate failure.",
					0
				],
				[251, "251 sexybody.wav", "Look at my sexy body.", 0],
				[252, "252 hallelujah.wav", "Hallelujah!", 0],
				[253, "253 mymomma.wav", "My momma can do better than that!", 0],
				[254, "254 comeforyou.wav", "I have come for you! I am death!", 0],
				[255, "255 goaway.wav", "Go away!!!", 0],
				[256, "256 ask.wav", "May I ask sir what more you require?", 0],
				[257, "257 gogirl.wav", "You go girl!", 0],
				[258, "258 aspirin.wav", "Where is my Aspirin?", 0],
				[259, "259 momgod.wav", "Sweet mother of God, what is the hold up?!", 0],
				[260, "260 nobodylikesyou.wav",
					"You don't have any friends. Nobody likes you.", 0
				],
				[261, "261 strikenow.wav",
					"We have to strike now, sir! Annihilate! Kill! Kill! Kill!", 0
				],
				[262, "262 genius.wav", "You're such a genius!", 0],
				[263, "263 lovegame.wav", "I love this game.", 0],
				[264, "264 onlypower.wav",
					"There is no Good and Evil. There is only Power, and those too weak to seek it.",
					0
				],
				[265, "265 nervous.wav", "Should I be nervous?", 0],
				[266, "266 runaway.wav", "RUN AWAY!", 0],
				[267, "267 death.wav", "Death has come to your little town.", 0],
				[268, "268 weapon.wav", "My body is a weapon. Use it!", 0],
				[269, "269 yeahbaby.wav", "Yeah baby!", 0],
				[270, "270 meow.wav", "Meow! Meow! Meow!", 0],
				[271, "271 madcow.wav", "*MAD COW*", 0],
				[272, "272 Sheep.wav", "*SHEEP*", 0],
				[273, "273 moo.wav", "*COW*", 0],
				[274, "274 turkey.wav", "*TURKEY*", 0],
				[275, "275 goat.wav", "*GOAT*", 0],
				[276, "276 chicken.wav", "*CHICKEN*", 0],
				[277, "277 frogs.wav", "*FROG*", 0],
				[278, "278 lion.wav", "*LION*", 0],
				[279, "279 momma2.wav", "Stay away from me you horse's ass!", 0],
				[280, "280 hasta.wav", "Hasta la vista, baby.", 0],
				[281, "281 weakest.wav", "You are the weakest link. Goodbye!", 0],
				[282, "282 back.wav", "I'll be back.", 0],
				[283, "283 friend.wav", "I'm having an old friend for dinner.", 0],
				[284, "284 weasel.wav",
					"I've got a plan so cunning you could put a tail on it and call it a weasel.",
					0
				],
				[285, "285 talk.wav",
					"If I wanted to talk to a vegetable I would bought one at the market.", 0
				],
				[286, "286 powerofisengard.wav",
					"The power of Isengard is at your command, Sauron, Lord of the Earth.", 0
				],
				[287, "287 rulemiddle-earth.wav",
					"Together, my lord Sauron, we shall rule this Middle–Earth.", 0
				],
				[288, "288 offer.wav", "I'm gonna make him an offer he can't refuse.", 0],
				[289, "289 seedead.wav", "I see dead people.", 0],
				[290, "290 change.wav", "Keep a change you filthy animal.", 0],
				[291, "291 idiots.wav", "I'm surrounded by idiots.", 0],
				[292, "292 meme.wav", "Me, me, me, me, me, me!", 0],
				[293, "293 fu.wav", "Fuck you asshole.", 0],
				[294, "294 stick.wav", "I stick my neck out for nobody.", 0],
				[295, "295 lock.wav",
					"That would be all, just be sure to lock the door behind you. Good night.",
					0
				],
				[296, "296 cant.wav",
					"I can't let this happen. I will not allow it. I mean look at this people.",
					0
				],
				[297, "297 fame.wav", "Clearly fame is not everything.", 0],
				[298, "298 jump.wav", "When I give an order, you jump!", 0],
				[299, "299 good.wav", "Why are you so good to me?", 0],
				[300, "300 boom.wav", "Boom baby boom!", 0],
				[301, "301 clapping.wav", "*CLAPPING*", 0],
				[302, "302 growup.wav", "Oh for Christ's sake, grow up!", 0],
				[303, "303 mind.wav", "Have you lost your fucking mind?", 0],
				[304, "304 shit.wav", "He's full of shit!", 0],
				[305, "305 warn.wav", "I warned you, you fat piece of shit!", 0],
				[306, "306 crazy.wav", "*CRAZY LAUGHTER*", 0],
				[307, "307 TANKYOU.wav", "Thank you very much!", 0],
				[308, "308 run.wav", "Running away won't save ya!", 0],
				[309, "309 taps.wav", "*FUNERAL TRUMPETS*", 0],
				[310, "310 theend.wav", "The end.", 0],
				[311, "311 clueless.wav", "Hello!", 0],
				[312, "312 urabitch.wav", "You are a bitch!", 0],
				[313, "313 dontfail.wav", "Don't fail me again!", 0],
				[314, "314 failed.wav", "You have failed me for the last time.", 0],
				[315, "315 scully.wav", "You did something incredibly stupid!", 0],
				[316, "316 fucku.wav", "Fuck you!", 0],
				[317, "317 unaccept.wav",
					"You made a mistake an that was entirely unacceptable.", 0
				],
				[318, "318 allwrong.wav", "No, no, no, you're doing it all wrong!", 0],
				[319, "319 lt_screwy.wav", "There's something screwy around here.", 0],
				[320, "320 Imperial.wav", "*IMPERIAL MARCH*", 0],
				[321, "321 annoyou.wav",
					"We interrupt this program to annoy you and make things generally irritating.",
					0
				],
				[322, "322 pussy.wav",
					"_FSF_[PL]Muad'Dib: 'This is paradise, this town is like a great big pussy, Just waiting to get fucked'.",
					0
				],
				[323, "323 Zornmeister in da house!.wav",
					"_FSF_Zornmeister is in da House!!!", 0
				],
				[324, "324 godfather2_certain.wav",
					"_FSF_Godfather: 'If anything in this life is certain, if history has thaught us anything... 't is that you could kill anyone'.",
					0
				],
				[325, "325 depressedmyself.wav",
					"Oh, Fish Sticks. I've depressed myself. I have to go lie down.", 0
				],
				[326, "326 fisharefriends.wav", "Fish are friends, not food.", 0],
				[327, "327 fishnetwork.wav",
					"You're watching the Fish Network. All fish, all the time.", 0
				],
				[328, "328 wheeloffish.wav",
					"Today, one of these lucky contestants will win his-or-her weight in fish, right here on… –Wheel Of Fish!",
					0
				],
				[329, "329 wilkommen.wav", "Wilkommen. Bienvenue. Welcome. Come on in", 0],
				[330, "330 sogladyoucame.wav", "Helloooo!!!! OH!! So glad you could come!",
					0
				],
				[331, "331 Bhereiam.wav", "Here I am… hehehe", 0],
				[332, "332 Bhhey.wav", "Hehehe Hé!", 0],
				[333, "333 agelimit.wav", "Liar! There is not an age-limit...", 0],
				[334, "334 187langs.wav",
					"If you do not speak English, I am at your disposal with 187 other languages along with their various dialects and subtongues.",
					0
				],
				[335, "335 amusing.wav",
					"Actually I think you are going to find this very amusing.", 0
				],
				[336, "336 awayforamin.wav", "I was only away for a minute, Master.", 0],
				[337, "337 beenthere.wav", "Nahhh!!! Been there, Done that!", 0],
				[338, "338 bonehead.wav", "How long have you boneheads been here?", 0],
				[339, "339 botherme.wav", "Go away, boy, ya bother me.", 0],
				[340, "340 changemind.wav",
					"Sure you won't change your mind? –Is there something wrong with the one I have?'",
					0
				],
				[341, "341 chatrats.wav",
					"Ever seen any rats in this room? -All the time, why?", 0
				],
				[342, "342 choiceisillusion.wav",
					"Choice is an illusion created between those with power and those without.",
					0
				],
				[343, "343 choiceswedontunderstand.wav",
					"We can never see past the choices we don't understand.", 0
				],
				[344, "344 chosenwisely.wav", "You have chosen wisely.", 0],
				[345, "345 chosepoorly.wav", "He chose poorly.", 0],
				[346, "346 clik.wav", "That’s it dick. Click!", 0],
				[347, "347 comeandgo.wav", "My! People come and go so quickly here!", 0],
				[348, "348 dumber.wav", "Whoaa! Dumber then advertised.", 0],
				[349, "349 falseadvertising.wav",
					"Do you know what this is? This, my friends, is false advertising!", 0
				],
				[350, "350 have2wait.wav", "You mean we have to wait?!?", 0],
				[351, "351 homer_boring.wav", "Boring!", 0],
				[352, "352 ladiesngentlemen.wav", "Ladies... and Gentlemen", 0],
				[353, "353 langbarrier.wav", "There's defiantly a language barrier here", 0],
				[354, "354 Ln_wait.wav",
					"If I sit here any longer I'm gonna have one severe case of asteroids", 0
				],
				[355, "355 lookinto.wav",
					"And now, ladies and gentlemen, as I look into your faces, and believe me, some of your faces need looking into…",
					0
				],
				[356, "356 lowerclasses.wav",
					"Sir, I consider you a member of the lower classes", 0
				],
				[357, "357 machinefriends.wav",
					"I cannot stay here too long before my machine friends will become nervous and do something rash.",
					0
				],
				[358, "358 next.wav", "Oh, perfect. You'll hear from us. Next!", 0],
				[359, "359 noshedidnt.wav", "Damn! No she didn't...", 0],
				[360, "360 notgettingpaid.wav",
					"This is ridiculous. It's crazy. I feel like I'm babysitting, except I'm not getting paid.",
					0
				],
				[361, "361 playingvideogame.wav",
					"God damn it. Can we please just get back to playing our videogame, please?!",
					0
				],
				[362, "362 replaced.wav", "You can be replaced, you know...", 0],
				[363, "363 scat.wav",
					"Scat. Skedaddle. Adios. Arrividerci. Ciao. Aloha. Bug off.", 0
				],
				[364, "364 thatsforbabies.wav", "Héééé that's for babies!", 0],
				[365, "365 voteplease.wav", "Vote, please. Vote, please.", 0],
				[366, "366 watchmate.wav",
					"If I'm not mistaken, they are preparing to mate. -Do you think they might let me watch?",
					0
				],
				[367, "367 chitchat.wav", "What do you say we cut the chit-chat, a-hole?",
					0
				],
				[368, "368 dayone.wav",
					"If I were creating a world, I wouldn't mess about with butterflies and daffodils. I would've started with lasers, eight o'clock, day one. (explosion) Sorry.",
					0
				],
				[369, "369 dontlikeme.wav",
					"Now answer my question. You don't like me, why?", 0
				],
				[370, "370 famebitch.wav", "Fame, ain't it a bitch?", 0],
				[371, "371 finalanswer.wav", "Is that your final answer?", 0],
				[372, "372 fineday.wav",
					"Well, it looks like it's going to be another fine day.", 0
				],
				[373, "373 for5minutes.wav",
					"For five minutes could you not be yourself? For five minutes!", 0
				],
				[374, "374 game.wav", "Ohh… I love this game!", 0],
				[375, "375 getnthru.wav", "Any of this gettin' through to you, son?", 0],
				[376, "376 gettothepoint.wav",
					"You want to get to the point, mister? Now what is it? What are you trying to tell us?",
					0
				],
				[377, "377 gmorningimhere.wav", "Good morning… I'm here...", 0],
				[378, "378 groucho3.wav",
					"The next time I see you, remind me not to talk to you, will you?", 0
				],
				[379, "379 halches2.wav",
					"Would you like to play a game of chess? I play very well.", 0
				],
				[380, "380 chekmate.wav", "Checkmate!", 0],
				[381, "381 lostsense.wav",
					"Don't tell me you lost your sense of humor already.", 0
				],
				[382, "382 lovetalk.wav", "I just love the way you talk.", 0],
				[383, "383 militaryschool.wav",
					"Well kids… How was military school??? -Yes Sir! Fine Sir!", 0
				],
				[384, "384 needsofmany1.wav",
					"Logic clearly dictates that the needs of the many outweigh the needs of the few.",
					0
				],
				[385, "385 notech.wav",
					"God isn't interested in technology. He knows nothing of the potential of the microchip or the silicon revolution. Look how he spends his time, 43 species of parrots. . .nipples for men!",
					0
				],
				[386, "386 notworthyofu.wav", "This conversation is not worthy of you!", 0],
				[387, "387 nowords.wav", "For some moments in life there are no words.", 0],
				[388, "388 offworldcolonies.wav",
					"A new life awaits you in the Off-World Colonies... The chance to begin again in a golden land of opportunity and adventure.",
					0
				],
				[389, "389 personalquestion.wav",
					"By the way, do you mind if I ask you a personal question?", 0
				],
				[390, "390 reputation.wav", "Once again our reputation precedes us.", 0],
				[391, "391 rosesarered.wav",
					"Roses are red, violets are blue -I can't write poems, but I've been told I've many other good qualities.",
					0
				],
				[392, "392 Yeehaa2.wav", "Yeehaa", 0],
				[393, "393 Sb_lord.wav", "I am Lord of this place", 0],
				[394, "394 shutup2.wav", "Shut up' includes you.", 0],
				[395, "395 ShutUp.wav", "Shut Up! Shut up! Shut up!", 0],
				[396, "396 spam2.wav", "I don't want any Spam.", 0],
				[397, "397 spam5.wav", "I don't like Spam!", 0],
				[398, "398 smalldreams.wav",
					"But where is it written that all our dreams must be small ones?", 0
				],
				[399, "399 st_11_2.wav",
					"You bought your ticket, might as well enjoy the show.", 0
				],
				[400, "400 st_19_2.wav", "Death to the fascists!", 0],
				[401, "401 precisly.wav", "Precisely!", 0],
				[402, "402 brothersgonnaworkitout.wav", "The brothers gonna work it out…",
					0
				],
				[403, "403 TheVonBondies-C_monC_mon.wav",
					"Come' on Come' on Come' on Come' on Come' on Come' on", 0
				],
				[404, "404 Chug.wav", "*chugging and burping*", 0],
				[405, "405 cookies.wav", "Cookies mean so much to me!", 0],
				[406, "406 damngoodcoffee.wav", "Damn good coffee... and hot!", 0],
				[407, "407 dinner.wav", "Master, dinner is prepared!", 0],
				[408, "408 drugreal.wav", "I know drug-real from real-real!", 0],
				[409, "409 drunktest.wav", "Damn your drunk tests are hard!", 0],
				[410, "410 foodfite.wav",
					"Food fight!!! #ICON1#ICON1#ICON1#ICON1#ICON1#ICON1", 0
				],
				[411, "411 foodservices.wav",
					"And for those with less, uh, robust scores there's still wonderful opportunities in the food services sector.",
					0
				],
				[412, "412 whatscookin.wav", "Eh, what's cookin', Doc?", 0],
				[413, "413 hadenoughrum.wav",
					"I'm not entirely sure that I've had enough rum to allow that kind of talk.",
					0
				],
				[414, "414 wetmove.wav", "I farted, it's wet and I don't wanna move", 0],
				[415, "415 st_16_3.wav", "Did you have a nice tea-break?", 0],
				[416, "416 idrankwhat.wav",
					"I was thinking of the immortal words of Socrates who said… 'I drank what?'",
					0
				],
				[417, "417 livevan.wav",
					"…We gonna end up eating a steady diet of government cheese and living in a van down by the river!",
					0
				],
				[418, "418 Ln_bnch.wav",
					"I'm hungry enough to eat a baby's butt through a park fence!", 0
				],
				[419, "419 Ln_fried.wav", "Double battered n' Dixie fried!", 0],
				[420, "420 morecoffee.wav",
					"Oh, you look like a man who could use more coffee.", 0
				],
				[421, "421 pizzasense.wav", "Great Scott! My pizza-sense is tingling!", 0],
				[422, "422 roomservice.wav", "I want room service!!!", 0],
				[423, "423 snack.wav", "Snack? Did somebody say snack?", 0],
				[424, "424 hownovel.wav",
					"Oh, take it easy, will ya? Come on, be nice. For you, I'm doing this show straight. No booze, no pot, no coke, no nothing... Oh, god. Oh, don't get me wrong, really. I don't snort cocaine. I just like the way it smells, that's all.",
					0
				],
				[425, "425 stoned2.wav", "But I am stoned!", 0],
				[426, "426 stoned.wav", "What, are you stoned or stupid?", 0],
				[427, "427 wannagethigh.wav", "You wanna get high?", 0],
				[428, "428 takealittlebreak.wav",
					"We will take a little break, but we will be back in awhile… so..ehh.. don't nobody go nowhere.",
					0
				],
				[429, "429 greedy.wav",
					"I can't help it, I'm a greedy slob. It's my hobby.", 0
				],
				[430, "430 6inspikepenis.wav",
					"No, seriously, listen. If there's ever anything I can do for you, or, more to the point, to you, you let me know, OK? –Can you hammer a 6-inch spike through a board with your penis? –Not right now. –A girl's got to have her standards.",
					0
				],
				[431, "431 eunuch.wav", "You're not a eunuch, are you?", 0],
				[432, "432 wife2orgasm.wav",
					"I've tried everything; the Embassy, the German government, the Consulate, I even talked to the U.N. Ambassador. It's no use. I just can't bring my wife to orgasm.",
					0
				],
				[433, "433 lasttimesex.wav",
					"The other day I called up my wife. I said to her, 'Honey, I've been thinking about the last time we had sex and I'm getting excited.' She said, 'Who is this?'",
					0
				],
				[434, "434 lewinsky1.wav",
					"I did not have sexual relations with that woman, Miss Lewinsky.", 0
				],
				[435, "435 noquestion.wav",
					"There isn't a question we can't answer! –Here's one, geniuses. What's it like to kiss a girl? –Shut up.",
					0
				],
				[436, "436 noquickfix.wav", "No quick fix for porn!", 0],
				[437, "437 not2mentionass.wav",
					"You know, before you turn around you guys will be our age. –God, don't remind me. –And you'll regret every night you didn't go out and grab a little life! –Not to mention a little ass!",
					0
				],
				[438, "438 pleasure.wav",
					"There's no crime in giving yourself over to pleasure.", 0
				],
				[439, "439 talkdirty.wav", "I love it when you talk dirty...", 0],
				[440, "440 urgay2.wav",
					"You're--You're gay! -Me? No, I'm not gay. -You're not? But y-y-you just kissed me. -O.k., I'm gay.",
					0
				],
				[441, "441 Vx_die1.wav", "But I love you", 0],
				[442, "442 Vx_die6.wav", "Please, …Come with me...", 0],
				[443, "443 computersnevermakemistakes.wav",
					"Computers never make mistakes. –Hard drive crash. Twenty seconds to meltdown. –Gotta go.",
					0
				],
				[444, "444 damnyouinternet.wav", "Damn you, Internet!", 0],
				[445, "445 Dexterdp.wav",
					"Please, please don't push the button, you have no idea what it... ...does",
					0
				],
				[446, "446 dratcomp.wav",
					"Oh, drat these computers. They're so naughty and so complex I could pinch them.",
					0
				],
				[447, "447 globalcommsystem.wav",
					"Our story can be that this is nothing more than a freakish malfunction of a highly–sophisticated global comm system",
					0
				],
				[448, "448 knowbetr.wav",
					"You know better than to trust a strange computer.", 0
				],
				[449, "449 knowproblem.wav",
					"I think you know what the problem is just as well as I do...", 0
				],
				[450, "450 launchdesign.wav",
					"Would you classify that as a launch problem or a design problem?", 0
				],
				[451, "451 merecomp.wav",
					"Could a mere computer solve the problem of Life, the Universe, and Everything?",
					0
				],
				[452, "452 software.wav", "Nice software!", 0],
				[453, "453 thesystemsucks.wav",
					"The system's failed us. –The system sucks. We're going to have to go outside the system.",
					0
				],
				[454, "454 WTFinternet.wav",
					"What the fuck is the internet? –The internet is a communications tool used the world over where people can come together to bitch about movies and share pornography with one another.",
					0
				],
				[455, "455 alive.wav", "It's alive!", 0],
				[456, "456 ally.wav", "You are my ally. I will not abandon you.", 0],
				[457, "457 bigdecisions.wav",
					"If you can't make the big decisions, commander, I suggest you make room for someone who can.",
					0
				],
				[458, "458 Bk_heynb.wav", "Hey neighbor!!!", 0],
				[459, "459 cantchange.wav", "What can I do? I can't change my family.", 0],
				[460, "460 Ch_2468.wav", "Two, Four, Six, Eight, Who do we appreciate?", 0],
				[461, "461 Ch_gogog.wav", "And Team, And spirit And GoGoGoGooo", 0],
				[462, "462 Ch_gteam.wav", "Goooo Team!!!", 0],
				[463, "463 Ch_redok.wav", "Ready-OK", 0],
				[464, "464 challenge.wav",
					"I realize how difficult it's going to be in this god-forsaken place where you can't find what you need, but there's the challenge.",
					0
				],
				[465, "465 dcorrect.wav", "You're absolutely correct!", 0],
				[466, "466 conduct.wav",
					"Enough! If this is what passes for conduct becoming of world leaders, I don't want any part of it!",
					0
				],
				[467, "467 disturbg.wav", "I find your lack of faith disturbing.", 0],
				[468, "468 dofirst.wav",
					"So, what would you little maniacs like to do first?", 0
				],
				[469, "469 doitself.wav",
					"I can see if I want anything done around here I gotta do it myself.", 0
				],
				[470, "470 dontutrustme.wav", "What's the matter, don't you trust me?", 0],
				[471, "471 fitin.wav",
					"I just thought I found a way to--to fit in. –You'll never fit in!!!", 0
				],
				[472, "472 who2trust.wav", "You won't know who to trust.", 0],
				[473, "473 iwillbringuhope.wav",
					"I will bring you hope, old friend, and I ask only one thing in return: don't get in my way.",
					0
				],
				[474, "474 jointheclub.wav", "Join the club, we've got jackets.", 0],
				[475, "475 joinus.wav", "He will join us or die, Master.", 0],
				[476, "476 master.wav",
					"I am looking forward to completing your training. In time, you will call me . . . Master.",
					0
				],
				[477, "477 monkchant.wav", "*Monk-chant with gunshots*", 0],
				[478, "478 need2know.wav",
					"Damn it, I need to know and I need to know now!", 0
				],
				[479, "479 needinfo.wav",
					"Throw me a friggin' bone, here. I'm the boss. . .need the info.", 0
				],
				[480, "480 notworking.wav", "Looks like somebody's not working.", 0],
				[481, "481 peopleswar.wav",
					"This is the People's War. It is our war. We are the fighters. Fight it then! Fight it with all that is in us and may God defend the Right.",
					0
				],
				[482, "482 standup2friends.wav",
					"It takes a great deal of bravery to stand up to your enemies, but a great deal more to stand up to your friends.",
					0
				],
				[483, "483 stuart.wav",
					"Because I'm good enough, I'm smart enough, and doggone it, people like me.",
					0
				],
				[484, "484 urscary.wav",
					"You're a little scary sometimes, you know that. Brilliant, but scary.", 0
				],
				[485, "485 wantfrnd.wav", "All I want is a friend!", 0],
				[486, "486 battle.wav",
					"Now throw the switch and let us begin the battle for the planet!", 0
				],
				[487, "487 bomb_x.wav", "*Falling Bomb*", 0],
				[488, "488 boombaby.wav",
					"Boom, baby, boom! I'm the Evil Midnight Bomber what bombs at midnight!",
					0
				],
				[489, "489 byyourcommandslow.wav", "By your command...", 0],
				[490, "490 comeout2.wav", "Come out, come out, where ever you are.", 0],
				[491, "491 crush.wav", "Crush! Kill! Destroy!", 0],
				[492, "492 feellikekillingsomeone.wav", "Feel like killing someone?", 0],
				[493, "493 glryhonr.wav", "May glory and honor follow you on your journey.",
					0
				],
				[494, "494 iswear.wav", "I swear I will not kill anyone.", 0],
				[495, "495 itsshowtime.wav", "It's Showtime!", 0],
				[496, "496 lettheattackbegin.wav", "Let the attack begin.", 0],
				[497, "497 onlychaos.wav", "There will be no order, only chaos.", 0],
				[498, "498 patton.wav",
					"We are advancing constantly and we're not interested in holding onto anything except the enemy! We're going to hold onto him by the nose and kick him in the ass! ..And we're going to go through him like crap through a goose!",
					0
				],
				[499, "499 readiness.wav",
					"Everything is in readiness, master. We merely await your word.", 0
				],
				[500, "500 reaganbomb.wav",
					"My fellow Americans, I'm pleased to tell you today that I've signed legislation that will outlaw Russia forever. We begin bombing in five minutes.",
					0
				],
				[501, "501 Sb_min1.wav", "Go minions!", 0],
				[502, "502 Sb_min2.wav", "Take him down minions!", 0],
				[503, "503 Sb_min3.wav", "Get them minions! Get them!", 0],
				[504, "504 sitight.wav",
					"Ok, you people sit tight, hold the fort and keep the home fires burning, and if we're not back by dawn, call the president.",
					0
				],
				[505, "505 sittingduck.wav",
					"Roger, Bravo Delta, this is Sitting Duck. I have Bogie Queen in my sights, and I’m, uh, going to shoot bullets at it now.",
					0
				],
				[506, "506 takewhatyoucan.wav", "Take what you can! Give nothing back!", 0],
				[507, "507 terminator.wav",
					"Jesus, you were going to kill that guy! –Of course. I'm a Terminator.", 0
				],
				[508, "508 triangulate.wav",
					"All right, I'll take point, you two flank. Let's triangulate. –Equilateral or isosceles?",
					0
				],
				[509, "509 trumpet_x.wav", "*Trumpet*", 0],
				[510, "510 trynot.wav", "Try not! Do. Or do not. There is no 'try.'", 0],
				[511, "511 uhavedestiny.wav",
					"You have a destiny, and now is your time to fulfill it.", 0
				],
				[512, "512 warweapons.wav",
					"Now let's see how destructive you are without your war weapons!", 0
				],
				[513, "513 whatcouldhappen.wav",
					"Hey, come on, we're superheroes. What could happen?", 0
				],
				[514, "514 worshipped.wav",
					"Now remember, I do my best work when I'm being worshipped as a god", 0
				],
				[515, "515 assistance.wav", "Your assistance would be welcomed.", 0],
				[516, "516 bartles.wav", "Thanks for your support.", 0],
				[517, "517 d-day_flash.wav",
					"We interrupt our program to bring you a special broadcast. The German news agency Transoceanic said today in a broadcast that the Allied invasion had begun. There was no Allied confirmation.",
					0
				],
				[518, "518 dirtywork.wav", "Get someone else to do your dirty work!", 0],
				[519, "519 help.wav", "Help!!! Somebody… Help!!!", 0],
				[520, "520 howcanyousitthere.wav",
					"How can you two just sit there and watch this happen?", 0
				],
				[521, "521 ifat1st.wav",
					"You mean it's like 'if at first you don't succeed, try, try again.' –Yes. –I thought so.",
					0
				],
				[522, "522 importantassignment.wav",
					"Important assignment!  Important assignment!", 0
				],
				[523, "523 kennedy.wav",
					"So, my fellow Americans, ask not what your country can do for you. Ask what you can do for your country.",
					0
				],
				[524, "524 machothings.wav",
					"What are you doing? Is this one of those macho things?", 0
				],
				[525, "525 mrknowitall.wav", "OK, then, thank you, Mr. Know-It-All.", 0],
				[526, "526 natlemergency.wav",
					"Scuse me, national emergency! Coming through!", 0
				],
				[527, "527 ohlook.wav", "Oh! Oh! Oh! Oh! Oh, look!", 0],
				[528, "528 see.wav", "This you gotta see to believe.", 0],
				[529, "529 st_5_1.wav", "Taking fire, need some help!", 0],
				[530, "530 takeover2.wav",
					"Hey, I got him this far. You take over from here.", 0
				],
				[531, "531 thisisamatteroflifeanddeath.wav",
					"This is a matter of life and death!!!", 0
				],
				[532, "532 Vx_die4.wav", "Please help me...", 0],
				[533, "533 whatthehell3.wav",
					"What the hell is going on around here?! Who the hell are you people?!", 0
				],
				[534, "534 arentyouforgetting.wav",
					"Chicken, Aren't you forgetting something?", 0
				],
				[535, "535 firstmatecow.wav", "First mate Cow ready for duty.", 0],
				[536, "536 assistnc.wav",
					"How may I, in all humble servitude, be of assistance?", 0
				],
				[537, "537 bepolite.wav", "You know, I was only trying to be polite!", 0],
				[538, "538 bow2sensei.wav", "Bow to your sensei! Bow to your sensei!!!", 0],
				[539, "539 cunning.wav",
					"I have a cunning plan that could get you out of this problem.", 0
				],
				[540, "540 disclosureaverted.wav",
					"Disclosure averted. Continue observation.", 0
				],
				[541, "541 dontunderstand.wav", "You do not understand… but you will.", 0],
				[542, "542 failure1.wav",
					"What we've got here is... failure to communicate.", 0
				],
				[543, "543 figureout.wav", "Ok, so what did we just figure out?", 0],
				[544, "544 gowhereactionis.wav", "Then let's go where the action is!", 0],
				[545, "545 hecanfixanything.wav",
					"His name is MacGyver. He can fix anything. He could fix a computer with a hairpin and a piece of duct tape.",
					0
				],
				[546, "546 itsnasty.wav",
					"Oh, who did this to you? This is just not right. In fact, it's nasty...",
					0
				],
				[547, "547 judasrockingpriest.wav",
					"What in Judas-Rocking-Priest is going on around here?!?", 0
				],
				[548, "548 killyoutwice.wav",
					"This damn well better be worth it. Because if this story of yours turns out to be bogus, I'm going to kill you twice. Now you got that?",
					0
				],
				[549, "549 liketohelp.wav",
					"Well, I'd like to help, but not as much as I'd like not to.", 0
				],
				[550, "550 listentome.wav", "Why do you listen to me when I'm wrong?", 0],
				[551, "551 Ln_bacon.wav", "There you go, now your makin' bacon", 0],
				[552, "552 Ln_sorry.wav", "Sorry, I guess I just got caught up", 0],
				[553, "553 neverwasteit.wav", "Time is a precious thing, never waste it.",
					0
				],
				[554, "554 oldtech.wav", "It's old technology!", 0],
				[555, "555 opportunemoment.wav",
					"If you were waiting for the opportune moment, that was it.", 0
				],
				[556, "556 owemebigtime.wav", "You owe me big-time.", 0],
				[557, "557 payattn.wav", "Pay attention, son, this is for your own good.",
					0
				],
				[558, "558 st_4_2.wav", "You’re doing great guys, hang in there!", 0],
				[559, "559 st_10_2.wav", "You defend brat don’t you stop!", 0],
				[560, "560 stupid2.wav",
					"There are no stupid questions, just stupid people", 0
				],
				[561, "561 whoare.wav", "Who are those guys?!?", 0],
				[562, "562 whyask.wav",
					"Why do you ask questions to which you already know the answers?", 0
				],
				[563, "563 yourang2.wav", "You rang?", 0],
				[564, "564 angry.wav", "You have made me very angry, very angry indeed!", 0],
				[565, "565 anhonor.wav",
					"It is an honor to protect my country and my family.", 0
				],
				[566, "566 betlife.wav", "Well, now don't you bet your life on it.", 0],
				[567, "567 blowskirt.wav",
					"So far, this is not blowing my skirt up, gentlemen.", 0
				],
				[568, "568 youshallnotpasss.wav", "You shall not pass!", 0],
				[569, "569 dangersover.wav", "Danger is over...", 0],
				[570, "570 destroy2.wav", "Don't make me destroy you!", 0],
				[571, "571 destroytheworld.wav",
					"Everything is back to normal. I-I think… I think I can go back to trying to destroy the world again.",
					0
				],
				[572, "572 Dexterun.wav", "This is unacceptable!", 0],
				[573, "573 difficult.wav", "You're always making things difficult!", 0],
				[574, "574 disturbslumber.wav", "Who disturbs my slumber?", 0],
				[575, "575 donkeysenses.wav",
					"Hey, man, this don't feel right. My donkey senses are tingling all over.",
					0
				],
				[576, "576 dothat.wav", "I wouldn’t do that if I were you…", 0],
				[577, "577 duke_freedom_x.wav",
					"I don't know who you are, where you're from, or what you want... but if you threaten my freedom, I'll kill you.",
					0
				],
				[578, "578 enemyneutralized.wav",
					"Enemy neutralized, ladies and gentlemen.", 0
				],
				[579, "579 st_10_3.wav", "I don’t bloody believe it!", 0],
				[580, "580 fdrfear.wav",
					"Let me assert my firm belief... that the only thing we have to fear is... fear itself.",
					0
				],
				[581, "581 freak.wav",
					"Please, I don't wanna go back there! You don't know what it's like to be considered a freak! Well, maybe you do.",
					0
				],
				[582, "582 gropos.wav",
					"All right, you ground-pounders, if it's fighting you want then you're about to get your share.",
					0
				],
				[583, "583 it_takes.wav", "You think you’ve got what it takes?!?", 0],
				[584, "584 itakethatback.wav", "I take that back. This is real bad", 0],
				[585, "585 itsyou.wav", "Huh? It's you?!?", 0],
				[586, "586 iwouldnt.wav", "Oh! I wouldn't do that. I really wouldn't.", 0],
				[587, "587 killingme.wav", "Killing me won't help you.", 0],
				[588, "588 killya.wav", "You do that and I'll kill ya.", 0],
				[589, "589 hanbar04.wav", "*Cartoon sound of running away*", 0],
				[590, "590 Ln_run.wav", "Run for your lives!", 0],
				[591, "591 Ln_shit.wav", "Holy shit!", 0],
				[592, "592 Ln_slow.wav", "Slower n' molasses in January", 0],
				[593, "593 myswamp.wav", "What are you doing in my swamp?", 0],
				[594, "594 noeffect.wav",
					"There is a weapons deactivator in effect here. Your destructive machines will have no effect.",
					0
				],
				[595, "595 noproblemo.wav", "No problemo!", 0],
				[596, "596 offmyland.wav", "Get off my land!!!", 0],
				[597, "597 screamandrun.wav",
					"Well, I don't know about you, but I am planning to scream and run.", 0
				],
				[598, "598 serioustherapy.wav",
					"You know, before this is over I'm going to need a whole lot of serious therapy.",
					0
				],
				[599, "599 Sf_hold.wav", "Hold it right there, boy!!!", 0],
				[600, "600 Sf_rload.wav", "Slow down boy. I'm trying to reload my gun...",
					0
				],
				[601, "601 Sf_shoot.wav", "Stop or I'll shoot!", 0],
				[602, "602 sointrouble.wav", "Man, I'm so in trouble!", 0],
				[603, "603 financialfuture.wav",
					"Go! Hurry! My financial future is at stake!", 0
				],
				[604, "604 whathaveyoudone.wav", "What have you done?!?", 0],
				[605, "605 whatwasthat2.wav",
					"What was that? –I have no idea. But it would be really great if it didn't do it again.",
					0
				],
				[606, "606 whyhere.wav", "I am wondering, why are you here?", 0],
				[607, "607 whyme.wav", "Why is it always me?", 0],
				[608, "608 1autodestruct.wav", "One minute to autodestruct…", 0],
				[609, "609 autshtdn.wav", "Auto-shutdown sequence in progress...", 0],
				[610, "610 3minutes.wav",
					"Scotty, I need warp speed in three minutes or we're all dead.", 0
				],
				[611, "611 aintafraid2die.wav",
					"Yeah? Well, I ain't afraid to die. I just hate being killed, that's all.",
					0
				],
				[612, "612 manfallingtoground.wav",
					"*Cartoon sound of someone fall to the ground*", 0
				],
				[613, "613 battlywar.wav",
					"OK, the battle is yours, Raymond. But it's just one battle in a huge, battly, war–thing with lots of other battles.",
					0
				],
				[614, "614 begone.wav", "Be gone, evil one!", 0],
				[615, "615 breathstinks.wav",
					"Ooh! Aah! That was really scary! And if you don't mind me saying, if that don't work your breath will certainly get the job done because you definitely need some Tic-Tacs or something because your breath stinks!!!",
					0
				],
				[616, "616 bribe.wav", "Yes, truly, a little bribe never hurts.", 0],
				[617, "617 burninhell.wav",
					"I'm just afraid that you're going to burn in Hell for all this.", 0
				],
				[618, "618 couldbeworse.wav",
					"What a filthy job! –Could be worse. –How? –Could be raining...", 0
				],
				[619, "619 cristalball.wav",
					"Look into my crystal ball to see your future... -This is not going to work cow... -Please big brother... concentrate!",
					0
				],
				[620, "620 curse.wav", "There a curse upon it! A curse I say...", 0],
				[621, "621 damnyou.wav",
					"You maniacs! You blew it up! Oh, damn you! God damn you all to hell!", 0
				],
				[622, "622 destiny.wav",
					"Yes, Destiny has her hand on my back -And she's pushing!", 0
				],
				[623, "623 dontpanc.wav", "Oh, don't panic! Don't panic!", 0],
				[624, "624 duke_this_sux.wav", "Oops. This sucks!", 0],
				[625, "625 everyman.wav", "Every man for himself!", 0],
				[626, "626 exitdoubletime.wav", "Exit double-quick time, stage right!", 0],
				[627, "627 goingdown.wav", "We're going down, Captain!", 0],
				[628, "628 hangon.wav",
					"All you can do at a time like this is just hang on until the scenery changes.",
					0
				],
				[629, "629 hangover.wav", "Oh, boy, what a hangover!", 0],
				[630, "630 humiliation.wav",
					"Must one person's triumph be another's humiliation? -Of course.", 0
				],
				[631, "631 imafailure.wav", "I'm a failure...", 0],
				[632, "632 imamess.wav", "Oh, don't look at me! I'm a mess!", 0],
				[633, "633 imustsavemyself.wav", "I must save myself. But what can I do?!?",
					0
				],
				[634, "634 Banjo1.wav", "*Banjo Melody 1*", 0],
				[635, "635 Banjo2.wav", "*Banjo Melody 2*", 0],
				[636, "636 Banjo3.wav", "*Banjo Melody 3*", 0],
				[637, "637 madhouse.wav", "It's a madhouse! A madhouse!", 0],
				[638, "638 makesomethingup.wav",
					"Oh, crap! We never planned for this contingency. Quick, make something up!",
					0
				],
				[639, "639 ministryofpain.wav",
					"The Ministry Of Pain?! Aaah! We're doomed! We're all doomed!", 0
				],
				[640, "640 mostawful.wav",
					"Well… Yeh… Ok… That’s just about the most awful thing I’ve ever seen.", 0
				],
				[641, "641 movefast.wav", "Don't move until it opens fire, then move fast!",
					0
				],
				[642, "642 myfault.wav", "You're acting like this is all my fault.", 0],
				[643, "643 mymistak.wav", "Oh, heh heh heh, my mistake.", 0],
				[644, "644 needhug.wav", "I think I need a hug.", 0],
				[645, "645 nevergiveup.wav", "Never give up, never surrender!", 0],
				[646, "646 not_yet_over.wav",
					"This is important. The race is not yet over!", 0
				],
				[647, "647 notfinished.wav", "I'm not finished yet!", 0],
				[648, "648 ohmy2.wav",
					"Oh, no, not again! Oh my! Oh my! Oh, my goodness gracious!", 0
				],
				[649, "649 pagesofhistory.wav",
					"Oh, this is one of those days which the pages of history teach us are best spent lying in bed.",
					0
				],
				[650, "650 please.wav", "Oh, that'll teach me to say please.", 0],
				[651, "651 remembered.wav",
					"This is not the way how I wish to be remembered.", 0
				],
				[652, "652 s~fire.wav", "Oh, Shit fire and fuck me running!", 0],
				[653, "653 Sb_hrt1.wav", "Always hurting me...", 0],
				[654, "654 Sb_hrt3.wav", "You hurt me!", 0],
				[655, "655 SCreek.wav", "Damn, reckon I'm up shit creek now!", 0],
				[656, "656 shouldyouhearscreeming.wav",
					"Should you hear screaming or anything, don't worry about it!", 0
				],
				[657, "657 st_8_3.wav", "Who here wants revenge?!?", 0],
				[658, "658 suffer.wav",
					"We seem to be made to suffer, it's our lot in life.", 0
				],
				[659, "659 superherobutton.wav",
					"Quickly, before it's too late! Press the Superhero button!", 0
				],
				[660, "660 thanicandiehappy.wav", "Than I can die happy!", 0],
				[661, "661 torturingme.wav", "Why do you delight in torturing me?", 0],
				[662, "662 Vx_die5.wav", "It’s not over…", 0],
				[663, "663 werealldoomed.wav",
					"Ehh, e-everyone stay calm… because we're all doomed!", 0
				],
				[664, "664 whatplanet.wav", "What planet is this guy from?", 0],
				[665, "665 abunchofcommies.wav",
					"Ohh… What are you people? A bunch of communists?", 0
				],
				[666, "666 und theme 2.wav", "kn0bi da undertaker - diggin your grave!", 0],
				[667, "667 beast.wav",
					"You beast... You savage... C'mon, bark like a dog for me!", 0
				],
				[668, "668 Bk_road.wav", "Let’s hit the road neighbor!", 0],
				[669, "669 Ch_teas2.wav", "Ha ha ha ha, sigh", 0],
				[670, "670 Ch_teas1.wav", "Ooh, ha ha ha ha ha", 0],
				[671, "671 doesthatsuck.wav", "Oh, my gosh, does that suck.", 0],
				[672, "672 dontdoitatall.wav",
					"If you can't do something right, don't do it at all.", 0
				],
				[673, "673 dontgiveup.wav", "Ohh don’t give-up so easily. I don’t.", 0],
				[674, "674 dontknowme.wav", "Heh heh. He don't know me vewy well, do he?",
					0
				],
				[675, "675 dontlooknow.wav",
					"Don't look now… but there's one man too many in this room, and I think it's you.",
					0
				],
				[676, "676 dontmakemecomeoverthere.wav", "Don't make me come over there!",
					0
				],
				[677, "677 duke_back_2_work_y.wav", "Get back to work, you slacker.", 0],
				[678, "678 duke_out_of_gum_x.wav",
					"It's time to kick ass and chew bubblegum... and I'm all outta gum.", 0
				],
				[679, "679 efficiency.wav",
					"We can teach these barbarians a lesson in Western methods and efficiency that will put them to shame. We'll show them what the British soldier is capable of doing.",
					0
				],
				[680, "680 fun.wav", "Hey! This promises to be fun!", 0],
				[681, "681 geekboy.wav", "Leave me alone, geek-boy!", 0],
				[682, "682 hasbeen.wav",
					"I'm just an untalented old has-been. -Were you ever famous? -No. -Then how can you be a has-been?",
					0
				],
				[683, "683 intolerance.wav", "Your intolerance infuriates me!", 0],
				[684, "684 justiceisblind.wav", "Who says justice is blind?", 0],
				[685, "685 landwar.wav",
					"Ha ha, you fool! You fell victim to one of the classic blunders!", 0
				],
				[686, "686 messyoassup.wav", "Ooh, child, he gonna mess your ass up!", 0],
				[687, "687 ohgoody.wav",
					"Oh, goody, My Illudium Pu–36 Explosive Space Modulator!", 0
				],
				[688, "688 prettyneat.wav", "Oh, you got to admit that is pretty neat.", 0],
				[689, "689 Sf_getya.wav", "I'm gonna get you boy!", 0],
				[690, "690 showingoffdont.wav",
					"And the next time you feel like showing off, Don't!", 0
				],
				[691, "691 shyonehorse.wav",
					"Well, heh heh, looks like we're, heh heh heh, looks like we're shy one horse.",
					0
				],
				[692, "692 st_6_2.wav", "I think the Germans are out of real man!", 0],
				[693, "693 whatsitmeantobegijoe.wav",
					"What's it mean to be GI Joe? –America's number one fighting force, sir! –And that means? –Big muscles, sir! –And? –Big missiles, sir!",
					0
				],
				[694, "694 allgay.wav", "All my friends are gay. All my friends are gay!",
					0
				],
				[695, "695 assholex3.wav",
					"You're an asshole, you're an asshole, and you're an asshole.", 0
				],
				[696, "696 4fuck1cool.wav",
					"Fuck you. Fuck you. Fuck you. You're cool. And fuck you!", 0
				],
				[697, "697 Bk_bourb.wav", "Where's my bourbon?", 0],
				[698, "698 Bk_cheer.wav", "Why don't ya cheer Bitch!", 0],
				[699, "699 Bk_dienb.wav", "Die neighbor!", 0],
				[700, "700 Bk_dntlk.wav", "Don't you look at me!", 0],
				[701, "701 Bk_fun.wav", "Fun's just starting neighbor!", 0],
				[702, "702 Bk_keepa.wav", "Keep away from my cheerleader neighbor!", 0],
				[703, "703 Bk_tohel.wav", "I'll send you straight to hell neighbor!", 0],
				[704, "704 smelfear.wav", "I can smell your fear…", 0],
				[705, "705 Ch_barn.wav", "Were you raised in a barn?!?", 0],
				[706, "706 Ch_donit.wav", "Now you've gone and done it!", 0],
				[707, "707 Ch_whoop.wav",
					"I reckon I'm gonna have to open a can of whoop ass on you!", 0
				],
				[708, "708 Ct_get.wav", "I'm gonna get ya boy, I'm gonna get ya...", 0],
				[709, "709 damn.wav", "Damn... You Suck!!!", 0],
				[710, "710 dorkalert.wav", "Oh, god, here we go again. Dork alert!", 0],
				[711, "711 duke_pisses_me.wav", "This pisses me off!", 0],
				[712, "712 embarrassment2nature.wav",
					"You're an embarrassment to nature, do you know that?", 0
				],
				[713, "713 fullofcrap.wav", "You're full of crap.", 0],
				[714, "714 ignored.wav", "Hey, I will not be ignored!", 0],
				[715, "715 justthinkoftheheadache.wav",
					"Just think of the havoc this little succor would play on history...", 0
				],
				[716, "716 L_smonkeys.wav",
					"I bet this place is just crawling with their damn shit monkeys.", 0
				],
				[717, "717 Ln_bbq.wav", "I'll barbecue your ass in molasses!", 0],
				[718, "718 Ln_bitch.wav", "Son of a bitch!", 0],
				[719, "719 Ln_blow.wav", "Them boys blowed up real good!", 0],
				[720, "720 Ln_busy.wav",
					"I'm busier than a one legged man in an ass-kicking contest!", 0
				],
				[721, "721 Ln_city.wav", "City folk!", 0],
				[722, "722 Ln_fkyo.wav", "Screw you and the horse you rode in on!", 0],
				[723, "723 Ln_Hog'sbt.wav",
					"This is like looking up a hogs butt for a ham sandwich!", 0
				],
				[724, "724 Ln_nosht.wav", "We don’t take no shit from no suckers!", 0],
				[725, "725 Ln_stink.wav", "I'm on you like stink on shit!", 0],
				[726, "726 Ln_whup.wav",
					"I'm gonna have to open up a can of whoop ass on you now.", 0
				],
				[727, "727 Lnfoot.wav", "Don't make me break my foot off in your ass!", 0],
				[728, "728 massivewuss.wav", "You are such a massive wuss!", 0],
				[729, "729 myeyes.wav", "Oh, my god! My eyes! Oh, my eyes!", 0],
				[730, "730 onamission.wav", "We're on a mission, you nit!", 0],
				[731, "731 paranoid.wav",
					"This is an extremely primitive and paranoid culture.", 0
				],
				[732, "732 pathetic.wav",
					"You're useless and pathetic, like a useless and pathetic thing.", 0
				],
				[733, "733 practicemakesperfect.wav",
					"You might want to practice a little more…", 0
				],
				[734, "734 promqueen.wav",
					"Losers always whine about 'their best'. Winners go home and fuck the prom queen.",
					0
				],
				[735, "735 pullpstl.wav",
					"Are you going to pull those pistols or whistle Dixie?", 0
				],
				[736, "736 pussyboy.wav", "So, how did you do, pussy-boy?", 0],
				[737, "737 ripuanewbutthole.wav",
					"And one more thing… The next time you talk to me like that, I'm going to rip you a new butthole so big you can be able to take a cannon up your ass.",
					0
				],
				[738, "738 sickensme.wav",
					"I was being sarcastic, which is another big word you'll learn in school. But you wouldn't know that considering you've never attended one of this country's great educational facilities, which is a thought that just sickens me.",
					0
				],
				[739, "739 silence.wav", "Silence, you mental midget!", 0],
				[740, "740 smackedbottom1.wav",
					"All right, you're going the right way for a smacked bottom.", 0
				],
				[741, "741 weirdestthing.wav",
					"That is the weirdest thing you have ever said.", 0
				],
				[742, "742 sonofbitch.wav",
					"Oh, son–of–a–b–b–– son–of–a–b–b–– son–of–a–b–b–– uh, gun. Heh, heh, heh. You thought I was going to, uh, say son–of–a–bitch, didn't you? Heh, heh.",
					0
				],
				[743, "743 st_1_2.wav", "Your next!", 0],
				[744, "744 st_11_3.wav", "Bloody Hell!", 0],
				[745, "745 st_15_2.wav", "Is that all you got?!?", 0],
				[746, "746 good, good - then what.wav", "Good...Good... Then what!?!", 0],
				[747, "747 strongox.wav",
					"That boy's as strong as an ox. . .and just about as smart.", 0
				],
				[748, "748 surroundedbyfreaks.wav", "I am surrounded by freaks!", 0],
				[749, "749 thissuckerisnuclear.wav",
					"Are you telling me that this sucker is nuclear?!?", 0
				],
				[750, "750 threatenedyoubefore.wav",
					"You seem somewhat familiar. Have I threatened you before?", 0
				],
				[751, "751 throwup.wav",
					"I'm constantly in the state of wanting to throw up.", 0
				],
				[752, "752 usostupid.wav", "Stupid! You're so stupid!", 0],
				[753, "753 Vx_hurt2.wav", "Did that hurt?!?", 0],
				[754, "754 wanker.wav", "Why do you have to be such a wanker?", 0],
				[755, "755 welcome2.wav", "Welcome to my nightmare!", 0],
				[756, "756 bevictim.wav", "Be my victim!", 0],
				[757, "757 what.wav", "What would you do with a brain if you had one?", 0],
				[758, "758 whatareyougonnado.wav",
					"Just what are you sissies gonna do?!? Huh?", 0
				],
				[759, "759 whatsyourpoint.wav", "And??? What’s your point!", 0],
				[760, "760 whoopass.wav", "Don't make me open a can of Whoop-Ass, buster!",
					0
				],
				[761, "761 worldfavor.wav",
					"Why don't you do the world a favor? Pull your lip over your head and swallow.",
					0
				],
				[762, "762 youreasucker.wav", "You're a sucker!!!", 0],
				[763, "763 ambitious.wav", "Are you blackmailing me, you ambitious shit?",
					0
				],
				[764, "764 asifwecare.wav", "As if we care.", 0],
				[765, "765 betterthanthis.wav",
					"It just doesn't get better than this, does it?", 0
				],
				[766, "766 bigman.wav", "Big mouth don't make a big man.", 0],
				[767, "767 bigwords.wav", "Stop now! Or I shall use more big words at you.",
					0
				],
				[768, "768 bitnice.wav", "That wasn’t a bit nice!", 0],
				[769, "769 Bk_pleas.wav", "Don't say please neighbor!", 0],
				[770, "770 Bk_shtup.wav", "Shut up cheer-bitch!", 0],
				[771, "771 Bk_tryin.wav",
					"Shut up cheer girl. I'm trying to kill somebody here!", 0
				],
				[772, "772 chillthat.wav", "Chill that you pile of crap!", 0],
				[773, "773 dizzy.wav",
					"I'm gonna hit you so hard it'll make your ancestors dizzy.", 0
				],
				[774, "774 dontfuck.wav", "Don’t fuck with me fellows!", 0],
				[775, "775 dontslap.wav", "Don't you slap me no more. We clear on that?", 0],
				[776, "776 dontstartfights.wav",
					"Ladies do not start fights… But they can finish them!", 0
				],
				[777, "777 learned.wav", "You have learned much, young one.", 0],
				[778, "778 dramaking.wav", "Oh, stop being such a drama king.", 0],
				[779, "779 duke_blow_it_x.wav", "Blow it out your ass!", 0],
				[780, "780 duke_come_get_some_x.wav", "Come get some!", 0],
				[781, "781 no sense.wav", "That plan makes no sense!", 0],
				[782, "782 father.wav", "No, I am your father.", 0],
				[783, "783 fkngidot.wav", "Personally, I think you're a fucking idiot.", 0],
				[784, "784 xsqueeze.wav", "X'squeeze me.", 0],
				[785, "785 friendlyargument.wav",
					"It's all right. It's all right, mate. We're just having a friendly little argument.",
					0
				],
				[786, "786 fudgem.wav",
					"Wife got you down? Boss makin' you angry? Kids yellin' at you? Well, Fudge 'Em!",
					0
				],
				[787, "787 greatscott.wav", "Great Scott!", 0],
				[788, "788 hurtme.wav",
					"Why do you say things that you know will hurt me?!?", 0
				],
				[789, "789 hushmouth.wav", "Hush your mouth!", 0],
				[790, "790 knack.wav",
					"Boy, oh boy, you got a knack for getting yourself out of trouble.", 0
				],
				[791, "791 laughwhileucan.wav", "Laugh while you can, monkey-boy!", 0],
				[792, "792 Ln_bull.wav", "Ya screw with the bull, ya get the horn!", 0],
				[793, "793 Ln_stank.wav",
					"My head hurts, my feet stink and I don't love Jesus!", 0
				],
				[794, "794 madashell.wav",
					"I'm as mad as hell, and I'm not going to take this anymore!", 0
				],
				[795, "795 mistake2.wav",
					"You do and it'll be the biggest mistake you ever made, you Texas brush popper!",
					0
				],
				[796, "796 mocking.wav", "You're mocking me, aren't you?", 0],
				[797, "797 mthshut.wav",
					"Maybe that'll learn ya to keep your big mouth shut!", 0
				],
				[798, "798 nasty.wav", "Oh, that is nasty!", 0],
				[799, "799 zoo.wav", "What do you think this is?!? A zoo?!?", 0],
				[800, "800 nobodytellsme.wav",
					"I don't know what kind of people you're used to dealing with. Nobody tells me what to do in my place.",
					0
				],
				[801, "801 notcricket.wav",
					"Do not speak to me of rules. This is war! This is not a game of cricket!",
					0
				],
				[802, "802 noterror.wav", "There is no terror in your threats.", 0],
				[803, "803 notlistening.wav",
					"Don't bother responding. We're not listening.", 0
				],
				[804, "804 ohreally.wav", "Oh, really?!?", 0],
				[805, "805 peopleskills2.wav",
					"You know, we have to work on your people skills.", 0
				],
				[806, "806 point2this.wav", "I'm sure there's a point to all of this.", 0],
				[807, "807 poontang.wav",
					"Yeah, I could use some goddamn poontang, myself, right now.", 0
				],
				[808, "808 ratsass.wav",
					"The answers to these questions, and more, on next week's episode of Who Gives A Rat's Ass.",
					0
				],
				[809, "809 Sf_over.wav", "I said get over here boy!", 0],
				[810, "810 shdntlaf.wav", "We shouldn't laugh. -We really shouldn't.", 0],
				[811, "811 someoneelseannoy.wav",
					"Oh, isn't there someone else you can annoy? Friends? Family? Poisonous reptiles?",
					0
				],
				[812, "812 st_9_2.wav", "You’re crazy!", 0],
				[813, "813 takeyourbestshot.wav", "Take your best shot.", 0],
				[814, "814 thinkyourenuts.wav",
					"I think you're nuts, but this isn't the best time to argue.", 0
				],
				[815, "815 tickevil.wav",
					"Villains, I say to you now, knock off all that evil!", 0
				],
				[816, "816 tsktsk.wav", "Tsk, tsk. –Yeah, tsk. –And another tsk!", 0],
				[817, "817 Vx_baby2.wav", "Oh, poor baby...", 0],
				[818, "818 Vx_bring.wav", "Bring it on!", 0],
				[819, "819 worstthing.wav",
					"Well, if that is the worst thing that happens today, I'll be thrilled.",
					0
				],
				[820, "820 dreddlaw.wav", "I am ‘The Law’!", 0],
				[821, "821 wav69.wav",
					"It’s a lie…the evidence have been falsified. I never broke the law, I am the law!",
					0
				],
				[822, "822 whatthehell2.wav", "What the hell are you talking about?!?", 0],
				[823, "823 whatwasthat.wav", "What was that?!?", 0],
				[824, "824 whogives.wav", "Who gives a shit?!?", 0],
				[825, "825 willnot.wav",
					"I will not be pushed, filed, stamped, indexed, briefed, debriefed, or numbered!",
					0
				],
				[826, "826 wonthurt.wav", "Now, this won't hurt a bit.", 0],
				[827, "827 2010_02.wav", "What's going to happen? Something wonderful...",
					0
				],
				[828, "828 allyourbase.wav", "All your base are belong to us!", 0],
				[829, "829 andnow.wav", "And now, you die!", 0],
				[830, "830 appraisl.wav",
					"The Emperor does not share your optimistic appraisal of the situation.",
					0
				],
				[831, "831 badthing.wav", "Ooh, I done a bad thing.", 0],
				[832, "832 imabadboy.wav", "Oohhoho I am a bad boy… A very bad boy…", 0],
				[833, "833 reflexes.wav", "It’s all in the reflexes!", 0],
				[834, "834 Sf_hands.wav", "Hands up, son!", 0],
				[835, "835 st_5_2.wav", "They’re a bunch of cowards!", 0],
				[836, "836 st_8_2.wav", "This is too easy!!!", 0],
				[837, "837 startrunning.wav", "It's time to start running!", 0],
				[838, "838 strengthirrelevant.wav",
					"Strength is irrelevant. Resistance is futile. We wish to improve ourselves. We will add your biological and technological distinctiveness to our own. Your culture will adapt to service ours.",
					0
				],
				[839, "839 freedomirrelevant.wav",
					"Freedom is irrelevant. Self-determination is irrelevant. You must comply.",
					0
				],
				[840, "840 xterm01.wav", "Exterminate! Annihilate! Destroy!", 0],
				[841, "841 itisdone.wav", "It is done imperious leader", 0],
				[842, "842 obey2.wav",
					"The choice is yours: obey me and live, or disobey and die.", 0
				],
				[843, "843 unhapend.wav",
					"Well, you're just in time for what might be a very unhappy ending.", 0
				],
				[844, "844 despot.wav",
					"The entire world will beg to bow before me, their charismatic despot!", 0
				],
				[845, "845 destroy1.wav", "There is no escape...", 0],
				[846, "846 donttellme.wav", "Don't tell me you didn't see that coming...",
					0
				],
				[847, "847 duke_gotta_hurt.wav", "Ooo, that's gotta hurt!", 0],
				[848, "848 duke_mess.wav", "Heh, heh, heh. What a mess!", 0],
				[849, "849 takapicture.wav",
					"Why don't you take a picture? It'll last longer, ha ha!", 0
				],
				[850, "850 future.wav", "Gentlemen, I give you the future.", 0],
				[851, "851 hmmm blabla.wav", "Hmm. Blah-blah-blah...", 0],
				[852, "852 getnothing.wav", "So you get nothing! You lose! Good day, sir!",
					0
				],
				[853, "853 victoryismine.wav", "At last, victory is mine!", 0],
				[854, "854 leavemealone.wav",
					"I told you people to leave me alone… I told you to beat it!", 0
				],
				[855, "855 lesson4u.wav", "Well, there's a lesson for you...", 0],
				[856, "856 letthatbealesson.wav",
					"Let that be a lesson to the two of you little…", 0
				],
				[857, "857 Ln_sob.wav", "Die you son of a bitch!", 0],
				[858, "858 wereallhere.wav",
					"We're all here to do what we're all here to do.", 0
				],
				[859, "859 oohbusted.wav", "Ooh, busted!", 0],
				[860, "860 peepldie.wav",
					"Some people die before their time, so that others can live… It’s a cornerstone of civilization.",
					0
				],
				[861, "861 Jukebox.wav", "*Jukebox*", 0],
				[862, "862 intruder.wav", "Intruder alert! Intruder alert!", 0],
				[863, "863 redalert1.wav", "Red alert! Red alert!", 0],
				[864, "864 secalert.wav", "Security alert, all decks!", 0],
				[865, "865 tarzan.wav", "*Tarzan-yell*", 0],
				[866, "866 slippedmymind.wav",
					"Well you know huh, it must have slipped my mind!", 0
				],
				[867, "867 anyquestionsladies.wav",
					"Any questions! ladies? Nooo?!? Well I didn’t think so… tataa that’s the real end.",
					0
				],
				[868, "868 goodevil.wav",
					"Now you see that evil will always triumph, because good is dumb!", 0
				],
				[869, "869 goodshow.wav", "Good show… Jolly good show Major!", 0],
				[870, "870 grudge.wav",
					"I thought you said you don't hold a grudge. -I don't. I have no surviving enemies. . .at all.",
					0
				],
				[871, "871 hal_bye.wav",
					"This conversation can serve no purpose anymore, goodbye.", 0
				],
				[872, "872 littlepeople.wav",
					"I'd like to thank all the little people I stepped on to get where I am today.",
					0
				],
				[873, "873 neverhappened.wav",
					"Uh, l-let's pretend like this never happened.", 0
				],
				[874, "874 st_16_2.wav", "Good job, Lads!", 0],
				[875, "875 okloveya.wav", "OK, Love you… Bye-Bye", 0],
				[876, "876 phewthatwasclose.wav",
					"Phew, well that was close, we was nearly eaten alive!", 0
				],
				[877, "877 neverrest.wav",
					"I shall never rest until I bring him to justice.", 0
				],
				[878, "878 thankyou2.wav",
					"Ladies and gentlemen, my mother thanks you... my father thanks you... my sister thanks you... and I thank you.",
					0
				],
				[879, "879 Do you want MoR.wav",
					"Do you want MoR?!? Check out:\nHttp://www.mastersleague.net", 0
				],
				[880, "880 - Don't be alarmed.wav",
					"Hello, we’re your new neighbours, don’t be alarmed, we’re Negroes.", 0
				],
				[881, "881 - Want something.wav", "Y’all want something", 0],
				[882, "882 - Wtf's going on here.wav", "What the fuck’s going on here", 0],
				[883, "883 - who tf are you.wav",
					"Who the fuck are you, what you doing here", 0
				],
				[884, "884 - Power ranger stuck up my ass.wav",
					"I got a power ranger stuck up my ass", 0
				],
				[885, "885 - You two mofo need Jesus.wav",
					"You two motherfuckers need Jesus ………. Cover your ears baby", 0
				],
				[886, "886 - Bottom line.wav", "Bottom line, I will knock you the fuck out",
					0
				],
				[887, "887 - Lets finish strong.wav", "Oh yeah, let’s finish strong", 0],
				[888, "888 - Not that easy.wav",
					"Hey man, it’s not that easy. If it was that easy you guys would be doing it.",
					0
				],
				[889, "889 - Hey does it look like i care.wav",
					"Hey, does it look like I care.", 0
				],
				[890, "890 - Hey you want me to yell.wav",
					"Hey, you want me to yell at you? Cos I can do that", 0
				],
				[891, "891 - Freeze mother bitches.wav",
					"Freeze mother bitches! …. Don’t you move", 0
				],
				[892, "892 - I blow you.wav", "I blow you then I blow yooou.", 0],
				[893, "893 - Ooh shit.wav", "Ooh shit !", 0],
				[894, "894 - So sad.wav", "So sad", 0],
				[895, "895 - That was cool.wav", "That was cool", 0],
				[896, "896 - I need some details.wav",
					"Awww c’mon, I need some details. You get some booby, some assy, a pull on your poi poi? C’mon",
					0
				],
				[897, "897 - beautifuleyes.wav", "You have beautiful eyes", 0],
				[898, "898 - iloveyou.wav", "I love you", 0],
				[899, "899 - Valkurie_intro.wav", "*Ride of the Valkyrie*", 0],
				[900, "900 nokaboom.wav",
					"Where is the KABOOM??? There were supposed to be an earth shuttering KABOOM!!!",
					0
				],
				[901, "901 ct_affirm.wav", "Affirmative.", 0],
				[902, "902 negative.wav", "Negative.", 0],
				[903, "903 maybe.wav",
					"Maaaaaybeeeeee... you'll think of meeeee, when you are all alone...", 0
				],
				[904, "904 crying.wav", "*Baby crying*", 0],
				[905, "905 ply.wav", "Let's play some Tetris motherfucker!", 0],
				[906, "906 specialol.wav",
					"Darrrr. Durrrr. I wanna be in the Special Olympics.", 0
				],
				[907, "907 whiz.wav", "Don't whiz on the electric fence.", 0],
				[908, "908 gaym sux.wav", "Thiz Gaym sux!!!", 0],
				[909, "909 dac.wav", "It's a bomb, Duck And Cover!", 0],
				[910, "910 bloodycats.wav",
					"Bloody things, I hate those bloody cats. They meow, they piss everywhere and their shit smells just bloody awful.",
					0
				],
				[911, "911 Fishversions.wav",
					"I don't bloody believe it. They've got fish-versions of that little bastards now.",
					0
				],
				[912, "912 villagers.wav", "Oh, shit! The villagers again...", 0],
				[913, "913 Enjoyable Game.wav", "Thank you for a very enjoyable game.", 0],
				[914, "914 suck again.wav", "Oh no! We suck again!!", 0],
				[915, "915 Led Zeppelin - Immigrant Song(laugh).wav",
					"*Led Zeppelin - Immigrant Song*", 0
				],
				[916, "916 ninja.wav", "*Ninja*", 0],
				[917, "917 Thats it man Game Over.wav",
					"That's it man, GAME OVER MAN, Game Over!!", 0
				],
				[918, "918 doh doh doh.wav",
					"D'oh! D'oh! D'oh! D'oh! D'oh! D'oh! D'oh! D'oh! D'oh! D'oh! D'oh! D'oh! D'oh! D'oh! D'oh!",
					0
				],
				[919, "919 Twilight Zone.wav", "*Twilight Zone theme*", 0],
				[920, "920 Always look on the bright side of life.wav",
					"And... always look on the bright side of life... *whistle* Come on!", 0
				],
				[921, "921 Go ahead make my day.wav", "Go ahead, make my day!", 0],
				[922, "922 who needs english.wav",
					"Pffft! English who needs that, i'm never going to England!", 0
				],
				[923, "923 Whos the Man Huh.wav", "Who's the man, huh!? Who's the MAN!?", 0],
				[924, "924 Houston we have a problem.wav", "Houston, we have a problem.", 0],
				[925, "925 Artoo says that chances of survival are 725 to 1.wav",
					"Artoo says that chances of survival are 725 to 1.", 0
				],
				[926, "926 Banzai.wav", "Banzai!", 0],
				[927, "927 you're my hero.wav", "You're my hero!", 0],
				[928, "928 Roggan.wav", "Roggan.", 0],
				[929, "929 Raiding Party.wav", "Raiding Party!!!", 0],
				[930, "930 wololo.wav", "Wololo!", 0],
				[931, "931 laugh.wav", "Ahahahahahahahahahaha uh!!", 0],
				[932, "932 respect.wav",
					"People have got to show the appropriate levels of respect. When you step outta line, you can expect to be respected... back.",
					0
				],
				[933, "933 bestbud.wav",
					"I'll do anything for you! Cause you is my bestest buddy in the whoooole wide world!!",
					0
				],
				[934, "934 ruleno1.wav",
					"Rule number one: My way, or he's a dead Motherf%#¤'s way. There ain't no more rules.",
					0
				],
				[935, "935 crocket.wav",
					"Let's see how you like my cock rocket ... COCK ROCKET!!!", 0
				],
				[936, "936 unbloody dead.wav",
					"Bloody undead! Un-bloody dead! I mean, it's even worse than bloody cats! Undead! What's the bloody point?!",
					0
				],
				[937, "937 sue.wav", "I tell ya, life aint easy for a boy named Sue.", 0],
				[938, "938 war.wav",
					"That's right. It's war once again... We are fighting an enemy like we have never encountered before. They're evil beyond reproach. Where they've come from? I don't know. We need to send them back to wherever it was.",
					0
				],
				[939, "939 killed_kenny.wav",
					"Oh my god! They killed Kenny! You bastards!!!", 0
				],
				[940, "940 killtomato-song.wav", "*Attack of the Killer Tomatoes theme*", 0],
				[941, "941 a-team.wav", "*A-Team theme*", 0],
				[942, "942 jamesbond.wav", "*James Bond theme*", 0],
				[943, "943 bananaphone.wav",
					"Ding-a-ling-ling-ling-ling-ling-ling-ling! Boo-ba-doo-ba-doop! Boo-ba-doo-ba-doop! Ring ring ring ring ring ring ring banana phone! Ring ring ring ring ring ring ring banana phone!!",
					0
				],
				[944, "944 bananaphone2.wav",
					"Ring ring ring ring ring ring ring banana phone. Ding dong ding dong ding dong ding banana phone. It grows in bunches, I've got my hunches, It's the best! Beats the rest! Cellular, Modular, Interactivodular!",
					0
				],
				[945, "945 ct_backup.wav", "Need backup!", 0],
				[946, "946 howdy.wav", "Howdy-ho!", 0],
				[947, "947 roger.wav", "Roger that!", 0],
				[948, "948 sabre_dance.wav", "*Sabre Dance*", 0],
				[949, "949 lovely countdown.wav",
					"Oooh, and what is that? A lovely countdown. I wonder what's going to happen now...",
					0
				],
				[950, "950 mario.wav", "It's-e me! Mario!", 0],
				[951, "951 pikachu3.wav", "Pikachu!", 0],
				[952, "952 pikasong.wav",
					"Pi, pika pikachu. Pi, pi-ka pikachu. Pi, pika pikachu. Pi pi-ka chaaaaaaa!",
					0
				],
				[953, "953 elephants.wav", "Ohhhh, elephants, yeah! Elephants, yeah!", 0],
				[954, "954 elephantsyeah.wav",
					"Ohhhhhhhhhhhhhhhhh, EeeeeeeeeeeeeleeeeeeeeeeeeeePHANTS YEAAAAAAAAAHHHHHHHHHHHHH!!!",
					0
				],
				[955, "955 disco.wav",
					"Burn, baby, burn! - Disco Inferno! - Burn, baby, burn! Burn that Mama down! Burn, baby, burn! - Disco Infernooo, yeah - Burn, baby, burn! Burn thah Mama down!",
					0
				],
				[956, "956 fuhrersface.wav",
					"When der Führer says: 'We iz de Master race', we Heil!, Heil!, right in the Führer's face! Not to love the Führer is a great disgrace, so we Heil!, Heil!, right in the Führer's face!",
					0
				],
				[957, "957 dogout.wav",
					"Who let the dogs out!? Who, who, who, who? Who let the dogs out!? Who, who, who, who? Who let the dogs out!?",
					0
				],
				[958, "958 pok2.wav",
					"Pokémon, (Gotta catch'em all!) A heart so true, our courage will pull us through. You teach me and I'll teach you. Po-ké-mon! Gotta catch'em all, gotta catch'em all. Pokémon!!!",
					0
				],
				[959, "959 konnichiwa.wav",
					"KONNICHIWAAAAAA! Guys do it. Guys do it. Guys do it... Hoia! Hoia! Hoia!....",
					0
				],
				[960, "960 marseillese.wav",
					"Aux armes, citoyens! Formez vos bataillons! Marchons, marchons, qu'un sang impur abreuve nos sillons!!",
					0
				],
				[961, "961 greatmightypoo.wav",
					"Mememememe... I am the Great Mighty Poo and I'm going to throw my shit at you. A huge supply of tish come from my chocolate starfish. How about some scat, you little twat?",
					0
				],
				[962, "962 finland.wav",
					"Finland, Finland, Finland. The country where I want to be, pony trekking or camping, or just watching TV... Finland, Finland, Finland, it's the country for me.",
					0
				],
				[963, "963 ilike`-´.wav",
					"I like Chinese. I like Chinese, they only come up to your knees, yet they're always friendly and they're ready to please. `-´",
					0
				],
				[964, "964 america.wav",
					"America, fuck yeah! Coming again to save the motherfucking day, yeah!", 0
				],
				[965, "965 bad boys.wav",
					"Bad boys, bad boys! Whatcha gonna do, whatcha gonna do, when they come for you?",
					0
				],
				[966, "966 young_man.wav",
					"Young man! There's no need to feel down. I said, young man! Pick yourself off the ground! I said, YOUNG MAN! 'Cause you're in a new town! There's no need to be unhappy!",
					0
				],
				[967, "967 navy.wav",
					"In the navy! Yes, you can sail the seven seas. In the navy! Yes, you can put your mind at ease. In the navy! Come on now, people, make a stand. In the navy, in the navy! Can't you see we need a hand.",
					0
				],
				[968, "968 Macho man.wav",
					"Macho, macho man! (MACHO MAN!) I've got to be, a macho man! Macho, MACHO MAN! I've got to be a macho! Ow....",
					0
				],
				[969, "969 ymca.wav",
					"It's fun to stay in the Y-M-C-A! It's fun to stay in the Y-M-C-A! They have everything for you men to enjoy, you can hang out with all the boys ... It's fun to stay in the Y-M-C-A! It's fun to stay in the Y-M-C-A-A!",
					0
				],
				[970, "970 homer meow meow meow.wav",
					"Meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow!",
					0
				],
				[971, "971 beotches.wav",
					"Hello again my hacker beotches. Ramzi in da hizz house.", 0
				],
				[972, "972 warez.wav",
					"Ok, lets find some Ware...Ez.. I will search for Bonzi Buddy....", 0
				],
				[973, "973 its adolf.wav",
					"I'm Mason Dixon and this is... My god it's Adolf Hitler!!!", 0
				],
				[974, "974 gutenmorgenhitler.wav",
					"This is Sam Smith. He's our undercoverexpert! He's only disguised as Adolf Hitler... Guten Morgen Herr Hitler ... Sprechen sie deutsch?",
					0
				],
				[975, "975 tomatoes are fags.wav",
					"This is Man versus Vegetable. - Technically sir, tomatoes are fags. He means fruits. Ahh fruits... See what I mean....",
					0
				],
				[976, "976 i love to singa.wav",
					"I love to sing-a. About the moon-a and the June-a and the spring-a. I love to sing-a. About a sky of blue-a, or a tea for two-a. Anything-a with a swing-a to an 'I love you-a'. I love to, I love to sing!",
					0
				],
				[977, "977 germans_arrived.wav", "The Germans have arrived.", 0],
				[978, "978 real world.wav", "Welcome - to the real world.", 0],
				[979, "979 made a mistake.wav",
					"You made a mistake, and that was entirely unacceptable", 0
				],
				[980, "980 taking fire.wav", "Taking fire, need assistance!", 0],
				[981, "981 fire in the hole.wav", "Fire in the hole!", 0],
				[982, "982 i need help.wav", "I need help!", 0],
				[983, "983 i luv ya man.wav", "I luv ya, man!", 0],
				[984, "984 bluepill.wav", "Why oh why didn't I take the BLUE pill?", 0],
				[985, "985 force.wav", "The Force will be with you, always.", 0],
				[986, "986 gowest.wav",
					"(Go west!) Life is peaceful there. (Go west!) Lots of open air. (Go west!) To begin life new, (Go west!) This is what we'll do.",
					0
				],
				[987, "987 you're very brave.wav",
					"You're very brave, when you're killing unarmed farmers!", 0
				],
				[988, "988 jail.wav",
					"If you were in the county jail, the first thing they'll do is look at those tennis shoes. And then some guy of a different race, probably ten times bigger then you, ALL MUSCLE and says 'I want those shoes'...",
					0
				],
				[989, "989 garrison-you_go_to_hell.wav",
					"You go to Hell! You go to Hell and you die!", 0
				],
				[990, "990 damnit.wav", "Goddamnit!", 0],
				[991, "991 cartman-son_of_a_bitch_2.wav", "Ahh, son of a bitch!", 0],
				[992, "992 garrison-you_talkin_to_me.wav",
					"You talkin' to me? I don't see anyone else around here, so you must be talkin to me...",
					0
				],
				[993, "993 grandpa-kill_me_god_damn_it.wav", "Kill me, goddamnit!", 0],
				[994, "994 cartman-oh_look_another_hippie.wav", "Oh, look, another hippie.",
					0
				],
				[995, "995 anos.wav", "My anus is bleeding. Yaaaaaaay!", 0],
				[996, "996 Empty your mind.wav",
					"Empty your mind, be formless. Shapeless, like water. Now, you put water into a cup, it becomes the cup. You put water into a bottle it becomes the bottle. You put it in a teapot it becomes the teapot... Be water, my friend.",
					0
				],
				[997, "997 kikrazz.wav",
					"Tey may kik r azz, but tey'll nevfr kik our FREEDUM!!!!!", 0
				],
				[998, "998 braveheart.wav",
					"Would you be willing to trade all the days from this day to that for one chance -- just one chance -- to come back here and tell our enemies that they may take our lives, but they'll never take our freedom!!",
					0
				],
				[999, "999 i_love_horses.wav",
					"I love horses, best of all the animals! I love horses, they're my friends!",
					0
				]
			];

			return {
				getTaunts: function ()
				{
					return taunts;
				},
				getTauntById: function (taunt)
				{
					console.log(taunt);
					for (var t in taunts)
					{
						if (taunts[t][0] === taunt)
						{
							return taunts[t];
						}
					}
					return false;
				},
				getTauntsByText: function (tauntString)
				{
					var result = [];
					for (var s in taunts)
					{
						if (taunts[s][2].match(tauntString))
						{
							result.push(taunts[s]);
						}
					}
					if (result === [])
					{
						result = false;
					}
					return result;
				}
			};
		}
	]);
