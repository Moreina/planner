

var character_amazon = {class_name:"Amazon", strength:20, dexterity:25, vitality:20, energy:15, life:50, mana:15, defense:6, ar:100, stamina:184, levelup_life:2.5, levelup_stamina:1, levelup_mana:1.5, gain_dexterity:[5,0.25], gain_vitality:[3,1], gain_energy:1.5, starting_strength:20, starting_dexterity:25, starting_vitality:20, starting_energy:15, skill_layout:"./images/amazon.png", tab1:"Javelins & Spears", tab2:"Passives", tab3:"Bows & Crossbows",
	updateSkill : function(skill, lvl, elem) {
	var result = skill.data.values[elem][lvl]
	if (skill.name == "Poison Javelin" && elem < 2) { result = ((1 + (0.15*skills[6].level)) * (1 + 0.02*character.dexterity) * skill.data.values[elem][lvl]) }
	if (skill.name == "Decoy" && elem == 0) { result = Math.max(1, skills[22].level) }
	if (skill.name == "Decoy" && elem < 3 && elem > 0) { result = 1 }
	if (skill.name == "Freezing Arrow" && elem == 2) { result = (2 * (1 + 0.05*skills[24].level)) }
	// passive effects
	if (skill.name == "Lethal Strike") { if (skill.level > 0) {character.cstrike_bonus = skill.data.values[0][skill.level+skill.extra_levels]} else {character.cstrike_bonus = 0} }
	if (skill.name == "Penetrate") { if (skill.level > 0) {character.penetrate_bonus = skill.data.values[0][skill.level+skill.extra_levels]} else {character.penetrate_bonus = 0} }
	if (skill.name == "Pierce") { if (skill.level > 0) {character.pierce_bonus = skill.data.values[0][skill.level+skill.extra_levels]} else {character.pierce_bonus = 0} }
	// is character moving?
	//if (skill.name == "Dodge") {character.dodge_bonus = skill.data.values[0][skill.level+skill.extra_levels]}
	//if (skill.name == "Avoid") {character.avoid_bonus = skill.data.values[0][skill.level+skill.extra_levels]}
	//if (skill.name == "Evade") {character.evade_bonus = skill.data.values[0][skill.level+skill.extra_levels]}
	return result
	}
};

/*[ 0] Jab		*/ var d111 = {index:[0,""], synergies:[], values:[["attack rating",40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390,400,410,420,430,440,450,460,470,480,490,500,510,520,530,540,550,560,570,580,590,600,610,620,630], ["damage",30,36,42,48,54,60,66,72,78,84,90,96,102,108,114,120,126,132,138,144,150,156,162,168,174,180,186,192,198,204,210,216,222,228,234,240,246,252,258,264,270,276,282,288,294,300,306,312,318,324,330,336,342,348,354,360,366,372,378,384], ["mana cost",2,2.2,2.5,2.7,3,3.2,3.5,3.7,4,4.2,4.5,4.7,5,5.2,5.5,5.7,6,6.2,6.5,6.7,7,7.2,7.5,7.7,8,8.2,8.5,8.7,9,9.2,9.5,9.7,10,10.2,10.5,10.7,11,11.2,11.5,11.7,12,12.2,12.5,12.7,13,13.2,13.5,13.7,14,14.2,14.5,14.7,15,15.2,15.5,15.7,16,16.2,16.5,16.7]]};
/*[ 1] Power Strike	*/ var d122 = {index:[0,""], synergies:[[], [0.2,5,0.2,8], [0.2,5,0.2,8],[]], values:[["attack rating",20,32,44,56,68,80,92,104,116,128,140,152,164,176,188,200,212,224,236,248,260,272,284,296,308,320,332,344,356,368,380,392,404,416,428,440,452,464,476,488,500,512,524,536,548,560,572,584,596,608,620,632,644,656,668,680,692,704,716,728], ["lightning min",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], ["lightning max",16,36,56,76,96,116,136,156,206,256,306,356,406,456,506,556,636,716,796,876], ["mana cost",2,2.2,2.5,2.7,3,3.2,3.5,3.7,4,4.2,4.5,4.7,5,5.2,5.5,5.7,6,6.2,6.5,6.7,7,7.2,7.5,7.7,8,8.2,8.5,8.7,9,9.2,9.5,9.7,10,10.2,10.5,10.7,11,11.2,11.5,11.7,12,12.2,12.5,12.7,13,13.2,13.5,13.7,14,14.2,14.5,14.7,15,15.2,15.5,15.7,16,16.2,16.5,16.7]]};
/*[ 2] Poison Javelin	*/ var d123 = {index:[0,""], synergies:[], values:[["poison min",15,23,31,39,46,54,62,70,85,101,117,132,148,164,179,195,218,242,265,289], ["poison max",23,31,39,46,54,62,70,78,95,113,130,148,166,183,201,218,244,269,294,320], ["mana cost",4,4.2,4.5,4.7,5,5.2,5.5,5.7,6,6.2,6.5,6.7,7,7.2,7.5,7.7,8,8.2,8.5,8.7,9,9.2,9.5,9.7,10,10.2,10.5,10.7,11,11.2,11.5,11.7,12,12.2,12.5,12.7,13,13.2,13.5,13.7,14,14.2,14.5,14.7,15,15.2,15.5,15.7,16,16.2,16.5,16.7,17,17.2,17.5,17.7,18,18.2,18.5,18.7]]};
/*[ 3] Fend		*/ var d131 = {index:[0,""], synergies:[], values:[["attack rating",25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175,180,185,190,195,200,205,210,215,220,225,230,235,240,245,250,255,260,265,270,275,280,285,290,295,300,305,310,315,320], ["damage",40,47,54,61,68,75,82,89,96,103,110,117,124,131,138,145,152,159,166,173,180,187,194,201,208,215,222,229,236,243,250,257,264,271,278,285,292,299,306,313,320,327,334,341,348,355,362,369,376,383,390,397,404,411,418,425,432,439,446,453]]};
/*[ 4] Lightning Bolt	*/ var d133 = {index:[0,""], synergies:[[0.12,1,0.12,9], [0.12,1,0.12,9],[]], values:[["lightning min",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], ["lightning max",40,55,70,85,100,115,130,145,165,185,205,225,245,265,285,305,345,385,425,465], ["mana cost",6,6.2,6.5,6.7,7,7.2,7.5,7.7,8,8.2,8.5,8.7,9,9.2,9.5,9.7,10,10.2,10.5,10.7,11,11.2,11.5,11.7,12,12.2,12.5,12.7,13,13.2,13.5,13.7,14,14.2,14.5,14.7,15,15.2,15.5,15.7,16,16.2,16.5,16.7,17,17.2,17.5,17.7,18,18.2,18.5,18.7,19,19.2,19.5,19.7,20,20.2,20.5,20.7]]};
/*[ 5] Charged Strike	*/ var d142 = {index:[0,""], synergies:[[], [0.2,1,0.2,8], [0.2,1,0.2,8],[]], values:[["bolts",3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10,11,11,11,11,11,12,12,12,12,12,13,13,13,13,13,14,14,14,14,14,15], ["lightning min",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], ["lightning max",30,45,60,75,90,105,120,135,155,175,195,215,235,255,275,295,318,343,367,391], ["mana cost",4,4.2,4.5,4.7,5,5.2,5.5,5.7,6,6.2,6.5,6.7,7,7.2,7.5,7.7,8,8.2,8.5,8.7,9,9.2,9.5,9.7,10,10.2,10.5,10.7,11,11.2,11.5,11.7,12,12.2,12.5,12.7,13,13.2,13.5,13.7,14,14.2,14.5,14.7,15,15.2,15.5,15.7,16,16.2,16.5,16.7,17,17.2,17.5,17.7,18,18.2,18.5,18.7]]};
/*[ 6] Plague Javelin	*/ var d143 = {index:[0,""], synergies:[[], [0.22,2], [0.22,2],[]], values:[["attack rating",30,39,48,57,66,75,84,93,102,111,120,129,138,147,156,165,174,183,192,201,210,219,228,237,246,255,264,273,282,291,300,309,318,327,336,345,354,363,372,381,390,399,408,417,426,435,444,453,462,471,480,489,498,507,516,525,534,543,552,561], ["poison min",39,70,101,132,163,195,226,257,316,375,433,492,550,609,667,726,843,960,1077,1195], ["poison max",62,101,140,179,218,257,296,335,413,492,570,648,726,804,882,960,1097,1234,1370,1507], ["mana cost",7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,17,17.5,18,18.5,19,19.5,20,20.5,21,21.5,22,22.5,23,23.5,24,24.5,25,25.5,26,26.5,27,27.5,28,28.5,29,29.5,30,30.5,31,31.5,32,32.5,33,33.5,34,34.5,35,35.5,36,36.5]]};
/*[ 7] Ground Slam	*/ var d151 = {index:[0,""], synergies:[], values:[["explosion size",2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120]]};
/*[ 8] Lightning Strike	*/ var d162 = {index:[0,""], synergies:[[], [0.15,1,0.15,5], [0.15,1,0.15,5]], values:[["hits",2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61], ["lightning min",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], ["lightning max",25,40,55,70,85,100,115,130,160,190,220,250,280,310,340,370,410,450,490,530]]};
/*[ 9] Lightning Fury	*/ var d163 = {index:[0,""], synergies:[[], [0.06,4], [0.06,4],[]], values:[["bolts",2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61], ["lightning min",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], ["lightning max",40,55,70,85,100,114,129,144,170,194,220,244,270,294,320,344,375,405,435,464], ["mana cost",10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,17,17.5,18,18.5,19,19.5,20,20.5,21,21.5,22,22.5,23,23.5,24,24.5,25,25.5,26,26.5,27,27.5,28,28.5,29,29.5,30,30.5,31,31.5,32,32.5,33,33.5,34,34.5,35,35.5,36,36.5,37,37.5,38,38.5,39,39.5]]};

/*[10] Inner Sight	*/ var d211 = {index:[0,""], synergies:[], values:[["enemy defense",-40,-65,-90,-115,-140,-165,-190,-215,-260,-305,-350,-395,-440,-485,-530,-575,-635,-695,-755,-815,-875,-935,-1015,-1095,-1175,-1255,-1335,-1415,-1515,-1615,-1715,-1815,-1915,-2015,-2115,-2215,-2315,-2415,-2515,-2615,-2715,-2815,-2915,-3015,-3115,-3215,-3315,-3415,-3515,-3615,-3715,-3815,-3915,-4015,-4115,-4215,-4315,-4415,-4515,-4615], ["radius",6,6.6,7.3,8,8.6,9.3,10,10.6,11.3,12,12.6,13.3,14,14.6,15.3,16,16.6,17.3,18,18.6,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3]]};
/*[11] Lethal Strike	*/ var d213 = {index:[0,""], synergies:[], values:[["critical chance",16,25,32,38,42,46,49,51,54,56,58,59,61,62,63,65,65,66,67,68,68,69,70]]};
/*[12] Phase Run	*/ var d221 = {index:[0,""], synergies:[], values:[["duration",7,7.3,7.7,8,8.4,8.8,9.1,9.5,9.8,10.2,10.6,10.9,11.3,11.6,12,12.4,12.7,13.1,13.4,13.8,14.2,14.5,14.9,15.2,15.6,16,16.3,16.7,17,17.4,17.8,18.1,18.5,18.8,19.2,19.6,19.9,20.3,20.6,21,21.4,21.7,22.1,22.4,22.8,23.2,23.5,23.9,24.2,24.6,25,25.3,25.7,26,26.4,26.8,27.1,27.5,27.8,28.2], ["mana cost",1,1,1,1.2,1.5,1.7,2,2.2,2.5,2.7,3,3.2,3.5,3.7,4,4.2,4.5,4.7,5,5.2,5.5,5.7,6,6.2,6.5,6.7,7,7.2,7.5,7.7,8,8.2,8.5,8.7,9,9.2,9.5,9.7,10,10.2,10.5,10.7,11,11.2,11.5,11.7,12,12.2,12.5,12.7,13,13.2,13.5,13.7,14,14.2,14.5,14.7,15,15.2]]};
/*[13] Dodge		*/ var d222 = {index:[0,""], synergies:[], values:[["chance",9,14,18,21,24,26,27,29,30,31,32,33,34,35,35,36,37,37,37,38,38]]};
/*[14] Avoid		*/ var d232 = {index:[0,""], synergies:[], values:[["chance",8,12,16,19,22,24,25,26,28,29,30,31,32,32,33,34,34,34,35,35,36]]};
/*[15] Penetrate	*/ var d233 = {index:[0,""], synergies:[], values:[["attack rating",75,90,105,120,135,150,165,180,195,210,225,240,255,270,285,300,315,330,345,360,375,390,405,420,435,450,465,480,495,510,525,540,555,570,585,600,615,630,645,660,675,690,705,720,735,750,765,780,795,810,825,840,855,870,885,900,915,930,945,960]]};
/*[16] Evade		*/ var d242 = {index:[0,""], synergies:[], values:[["chance",6,11,14,17,20,21,23,24,26,26,27,28,29,30,30,31,31,32,32,32,33]]};
/*[17] Decoy		*/ var d251 = {index:[3,""], synergies:[], values:[[], [], [], ["damage min",12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12], ["damage max",7,13,19,25,31,37,43,49,55,61,67,73,79,85,91,97,103,109,115,121,127,133,139,145,151,157,163,169,175,181,187,193,199,205,211,217,223,229,235,241,247,253,259,265,271,277,283,289,295,301,307,313,319,325,331,337,343,349,355,361], ["resistances",4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,72,76,80,84,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85], ["attack rating",40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390,400,410,420,430,440,450,460,470,480,490,500,510,520,530,540,550,560,570,580,590,600,610,620,630], ["life",10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390,400,410,420,430,440,450,460,470,480,490,500,510,520,530,540,550,560,570,580,590,600], ["duration",3,3.2,3.4,3.6,3.8,4,4.2,4.4,4.6,4.8,5,5.2,5.4,5.6,5.8,6,6.2,6.4,6.6,6.8,7,7.2,7.4,7.6,7.8,8,8.2,8.4,8.6,8.8,9,9.2,9.4,9.6,9.8,10,10.2,10.4,10.6,10.8,11,11.2,11.4,11.6,11.8,12,12.2,12.4,12.6,12.8,13,13.2,13.4,13.6,13.8,14,14.2,14.4,14.6,14.8], ["mana cost",19,19,18,18,17,17,16,16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]};
/*[18] Valkyrie		*/ var d261 = {index:[0,""], synergies:[[0.2,1,0.2,8], [0.2,1,0.2,8], [0.18,0], [0.18,0],[],[],[],[]], values:[["lightning min",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], ["lightning max",30,45,60,75,90,105,120,135,155,175,195,215,235,255,275,295,319,343,367,391,415,439,467,495,523], ["damage min",8,13,18,24,28,33,38,43,48,53,58,63,68,73,78,83,88,93,98,103,108,113,118,123,128,133,138,143,148,153,158,163,168,173,178,183,188,193,198,203,208,213,218,223,228,233,238,243,248,253,258,263,268,273,278,283,288,293,298], ["damage max",21,27,33,42,45,51,57,63,69,75,81,87,93,99,105,111,117,123,129,135,141,147,153,159,165,171,177,183,189,195,201,207,213,219,225,231,237,243,249,255,261,267,273,279,285,291,297,303,309,315,321,327,333,339,345,351,357,363,369], ["life",528,616,704,792,880,968,1056,1144,1232,1320,1408,1496,1584,1672,1760,1848,1936,2024,2112,2200,2288,2376,2464,2552,2640,2728,2816,2904,2992,3080,3168,3256,3344,3432,3520,3608,3696,3784,3872,3960,4048,4136,4224,4312,4400,4488,4576,4664,4752,4840,4928,5016,5104,5192,5280,5368,5456,5544,5632,5720], ["attack rating",40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390,400,410,420,430,440,450,460,470,480,490,500,510,520,530,540,550,560,570,580,590,600,610,620,630], ["defense",10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390,400,410,420,430,440,450,460,470,480,490,500,510,520,530,540,550,560,570,580,590,600], ["resistances",2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120]]};
/*[19] Pierce		*/ var d263 = {index:[0,""], synergies:[], values:[["chance",24,34,41,48,53,57,60,63,66,68,70,72,74,75,76,78,79,80,80,81,82,83,84,85,85,85,86,86,87,87,88,88,89,89,89,90]]};

/*[20] Cold Arrow	*/ var d311 = {index:[1,"% Physical Damage to Elemental Damage<br>Deals 100% of Weapon Damage"], synergies:[[], [0.12,24], [0.12,24],[],[]], values:[["convert",52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100], ["cold min",2,5,8,11,14,17,20,23,29,35,41,47,53,59,65,71,79,87,95,103], ["cold max",3,7,11,15,19,23,27,31,37,43,49,55,61,67,73,79,88,97,106,115], ["cold length",4,5.2,6.4,7.6,8.8,10,11.2,12.4,13.6,14.8,16,17.2,18.4,19.6,20.8,22,23.2,24.4,25.6,26.8,28,29.2,30.4,31.6,32.8,34,35.2,36.4,37.6,38.8,40,41.2,42.4,43.6,44.8,46,47.2,48.4,49.6,50.8,52,53.2,54.4,55.6,56.8,58,59.2,60.4,61.6,62.8,64,65.2,66.4,67.6,68.8,70,71.2,72.4,73.6,74.8], ["mana cost",3.5,3.6,3.7,3.8,4,4.1,4.2,4.3,4.5,4.6,4.7,4.8,5,5.1,5.2,5.3,5.5,5.6,5.7,5.8,6,6.1,6.2,6.3,6.5,6.6,6.7,6.8,7,7.1,7.2,7.3,7.5,7.6,7.7,7.8,8,8.1,8.2,8.3,8.5,8.6,8.7,8.8,9,9.1,9.2,9.3,9.5,9.6,9.7,9.8,10,10.1,10.2,10.3,10.5,10.6,10.7,10.8]]};
/*[21] Magic Arrow	*/ var d312 = {index:[1,"% Physical Damage to Magic Damage<br>Deals 100% of Weapon Damage"], synergies:[], values:[["convert",34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65], ["damage min",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60], ["damage max",2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61], ["mana cost",1.5,1.3,1.2,1.1,1,0.8,0.7,0.6,0.5,0.3,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]};
/*[22] Multiple Shot	*/ var d322 = {index:[0,""], synergies:[], values:[["damage min",2,4,6,8,10,12,14,16,19,22,25,28,31,34,37,40,44,48,52,56,60], ["damage max",3,6,9,12,15,18,21,24,28,32,36,40,44,48,52,56,61,66,71,76,81], ["arrows",2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24], ["mana cost",4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63]]};
/*[23] Fire Arrow	*/ var d323 = {index:[1,"% Physical Damage to Elemental Damage<br>Deals 100% of Weapon Damage"], synergies:[[], [0.12,26], [0.12,26],[], [0.12,26], [0.12,26],[]], values:[["convert",52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100], ["avg fire min",5,10,16,21,26,31,37,42,50,58,67,75,83,91,99,108,120,132,145,157], ["avg fire max",7,12,17,22,28,33,38,43,52,60,68,76,84,93,101,109,121,134,146,158], ["attack rating",10,19,28,37,46,55,64,73,82,91,100,109,118,127,136,145,154,163,172,181,190,199,208,217,226,235,244,253,262,271,280,289,298,307,316,325,334,343,352,361,370,379,388,397,406,415,424,433,442,451,460,469,478,487,496,505,514,523,532,541], ["fire min",3,7,11,15,19,23,27,31,37,43,49,55,61,67,73,79,88,97,106,115], ["fire max",6,10,14,18,22,26,30,34,42,50,58,66,74,82,90,98,110,122,134,146], ["mana cost",3,3.1,3.2,3.3,3.5,3.6,3.7,3.8,4,4.1,4.2,4.3,4.5,4.6,4.7,4.8,5,5.1,5.2,5.3,5.5,5.6,5.7,5.8,6,6.1,6.2,6.3,6.5,6.6,6.7,6.8,7,7.1,7.2,7.3,7.5,7.6,7.7,7.8,8,8.1,8.2,8.3,8.5,8.6,8.7,8.8,9,9.1,9.2,9.3,9.5,9.6,9.7,9.8,10,10.1,10.2,10.3]]};
/*[24] Ice Arrow	*/ var d341 = {index:[0,""], synergies:[[0.1,20], [0.1,20], [0.05,29],[]], values:[["cold min",6,12,19,25,32,38,45,51,64,77,90,103,116,129,142,155,174,194,213,233], ["cold max",10,19,28,36,45,54,62,71,90,110,129,149,168,187,207,226,252,278,304,330], ["freeze length",2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10,11,11,11,11,11,12,12,12,12,12,13,13,13,13,13,14,14], ["mana cost",4,4.2,4.5,4.7,5,5.2,5.5,5.7,6,6.2,6.5,6.7,7,7.2,7.5,7.7,8,8.2,8.5,8.7,9,9.2,9.5,9.7,10,10.2,10.5,10.7,11,11.2,11.5,11.7,12,12.2,12.5,12.7,13,13.2,13.5,13.7,14,14.2,14.5,14.7,15,15.2,15.5,15.7,16,16.2,16.5,16.7,17,17.2,17.5,17.7,18,18.2,18.5,18.7]]};
/*[25] Guided Arrow	*/ var d342 = {index:[0,""], synergies:[], values:[["damage",10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175,180,185,190,195,200,205,210,215,220,225,230,235,240,245,250,255,260,265,270,275,280,285,290,295,300,305], ["mana cost",8,7.7,7.5,7.2,7,6.7,6.5,6.2,6,5.7,5.5,5.2,5,4.7,4.5,4.2,4,3.7,3.5,3.2,3,2.7,2.5,2.2,2,1.7,1.5,1.2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]};
/*[26] Exploding Arrow	*/ var d343 = {index:[0,""], synergies:[[0.2,21,0.2,23], [0.2,21,0.2,23],[]], values:[["fire min",9,16,23,30,36,44,51,58,73,88,103,118,133,148,163,178,198,218,238,258], ["fire max",14,23,31,41,50,59,68,76,94,111,128,145,161,179,196,213,235,256,279,301], ["mana cost",5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,17,17.5,18,18.5,19,19.5,20,20.5,21,21.5,22,22.5,23,23.5,24,24.5,25,25.5,26,26.5,27,27.5,28,28.5,29,29.5,30,30.5,31,31.5,32,32.5,33,33.5,34,34.5]]};
/*[27] Strafe		*/ var d352 = {index:[0,""], synergies:[], values:[["damage_min",3,5,7,9,11,13,15,17,20,23,26,29,32,35,38,41,45,49,53,57,61], ["damage_max",4,7,10,13,16,19,22,25,28,33,37,41,45,49,53,57,62,67,72,77,82], ["targets",5,6,7,8,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], ["damage bonus",5,11,17,23,29,35,41,47,53,59,65,71,77,83,89,95,101,107,113,119,125,131,137,143,149,155,161,167,173,179,185,191,197,203,209,215,221,227,233,239,245,251,257,263,269,275,281,287,293,299,305,311,317,323,329,335,341,347,353,359], ["mana cost",11,10.9,10.8,10.8,10.7,10.6,10.6,10.5,10.5,10.4,10.3,10.3,10.2,10.1,10.1,10,10,9.9,9.8,9.8,9.7]]};
/*[28] Immolation Arrow	*/ var d353 = {index:[0,""], synergies:[[0.15,26], [0.15,26], [0.16,23], [0.16,23],[]], values:[["explosion min",16,37,60,82,103,125,148,170,198,228,257,285,315,343,372,402,440,477,516,554], ["explosion max",27,49,70,92,115,137,158,181,210,238,268,297,325,355,383,412,450,489,527,564], ["avg fire min",18,44,69,96,121,147,172,198,232,266,301,334,368,403,436,471,515,559,603,648], ["avg fire max",31,56,83,108,134,159,185,210,245,279,313,347,381,415,449,484,528,572,617,661], ["mana cost",8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,17,17.5,18,18.5,19,19.5,20,20.5,21,21.5,22,22.5,23,23.5,24,24.5,25,25.5,26,26.5,27,27.5,28,28.5,29,29.5,30,30.5,31,31.5,32,32.5,33,33.5,34,34.5,35,35.5,36,36.5,37,37.5]]};
/*[29] Freezing Arrow	*/ var d361 = {index:[0,""], synergies:[[0.21,20,0.02,24], [0.21,20,0.02,24], [],[]], values:[["cold min",40,55,70,85,100,115,130,144,165,185,205,225,244,265,285,305,330,352,376,401,424], ["cold max",50,65,80,95,110,125,40,155,175,195,215,235,255,275,295,315,340,362,387,411,435], [], ["mana cost",8,8.2,8.5,8.7,9,9.2,9.5,9.7,10,10.2,10.5,10.7,11,11.2,11.5,11.7,12,12.2,12.5,12.7,13,13.2,13.5,13.7,14,14.2,14.5,14.7,15,15.2,15.5,15.7,16,16.2,16.5,16.7,17,17.2,17.5,17.7,18,18.2,18.5,18.7,19,19.2,19.5,19.7,20,20.2,20.5,20.7,21,21.2,21.5,21.7,22,22.2,22.5,22.7]]};

var skills_amazon = [
{data:d111, key:"111", name:"Jab", level:0, req:[], reqlvl:1, extra_levels:0, style:"display: block; top: 82px; left: 2px;", description:"Attacks with a series of rapid thrusts<br>using a javelin or spear class weapon<br><br>Deals 100% of Weapon Damage<br>Attacks three times", syn_title:"", syn_text:"", graytext:"", text:["Attack Rating: +"," percent<br>Damage: +"," percent<br>Mana Cost: ",""]},
{data:d122, key:"122", name:"Power Strike", req:[0], reqlvl:6, level:0, extra_levels:0, style:"display: block; top: 150px; left: 72px;", description:"Adds lightning damage to attacks with<br>javelin and spear class weapons<br><br>Deals 100% of Weapon Damage", syn_title:"<br>Power Strike Receives Bonuses From:<br>", syn_text:"Charged Strike: +20% Lightning Damage per Level<br>Lightning Strike: +20% Lightning Damage per Level", graytext:"", text:["To Attack Rating: +"," percent<br>Lightning Damage: ","-","<br>Mana Cost: ",""]},
{data:d123, key:"123", name:"Poison Javelin", req:[], reqlvl:6, level:0, extra_levels:0, style:"display: block; top: 150px; left: 142px;", description:"Magically enhances your javelin<br>to leave a trail of poison clouds", syn_title:"<br>Poison Javelin Receives Bonuses From:<br>", syn_text:"Plague Javelin: +15% Poison Damage per Level<br>2% Increased Poison Damage per Dexterity<br>+2 Additional Javelins While Having 100+ Total Dexterity", graytext:"", text:["Poison Damage: ","-","<br>over 5 seconds<br>Mana Cost: ",""]},
{data:d131, key:"131", name:"Fend", req:[0], reqlvl:12, level:0, extra_levels:0, style:"display: block; top: 218px; left: 2px;", description:"Attacks all adjacent targets<br><br>Deals 125% of Weapon Damage<br>Attacks up to twelve times", syn_title:"", syn_text:"", graytext:"", text:["Attack Rating: +"," percent<br>Damage: +"," percent<br>Mana Cost: 5",""]},
{data:d133, key:"133", name:"Lightning Bolt", req:[1,2,0], reqlvl:12, level:0, extra_levels:0, style:"display: block; top: 218px; left: 142px;", description:"Magically converts your javelin into a bolt of lightning<br><br>Deals 100% of Weapon Damage<br>100% of Physical Damage converted to Lightning", syn_title:"<br>Lightning Bolt Receives Bonuses From:<br>", syn_text:"Lightning Fury: +12% Lightning Damage per Level<br>Power Strike: +12% Lightning Damage per Level", graytext:"", text:["Lightning Damage: ","-","<br>Mana Cost: ",""]},
{data:d142, key:"142", name:"Charged Strike", req:[1,0], reqlvl:18, level:0, extra_levels:0, style:"display: block; top: 286px; left: 72px;", description:"Adds lightning damage to javelin and spear class weapons<br>and releases charged bolts upon impact", syn_title:"<br>Charged Strike Receives Bonuses From:<br>", syn_text:"Power Strike: +20% Lightning Damage per Level<br>Lightning Strike: +20% Lightning Damage per Level", graytext:"", text:["Releases "," charged bolts<br>Lightning Damage: ","-","<br>Mana Cost: ",""]},
{data:d143, key:"143", name:"Plague Javelin", req:[4,1,0], reqlvl:18, level:0, extra_levels:0, style:"display: block; top: 286px; left: 142px;", description:"Magically enhances your javelin to release<br>expanding clouds of poison upon impact", syn_title:"<br>Plague Javelin Receives Bonuses From:<br>", syn_text:"Poison Javelin: +22% Poison Damage per Level", graytext:"", text:["Attack Rating: +"," percent<br>Poison Damage: ","-","<br>over 5 seconds<br>Mana Cost: ",""]},
{data:d151, key:"151", name:"Ground Slam", req:[3,0], reqlvl:24, level:0, extra_levels:0, style:"display: block; top: 354px; left: 2px;", description:"Forcefully drive your spear into the eart<br>creating fissures that explode on impact<br><br>Waves: 3<br>Deals 85% of Weapon Damage", syn_title:"", syn_text:"", graytext:"", text:["+","% increased explosion size<br>Mana Cost: ",""]},
{data:d162, key:"162", name:"Lightning Strike", req:[5,1,0], reqlvl:30, level:0, extra_levels:0, style:"display: block; top: 422px; left: 72px;", description:"Adds lightning damage to javelin and spear class weapons<br>and releases chain lightning upon impact", syn_title:"<br>Lightning Strike Receives Bonuses From:<br>", syn_text:"Power Strike: +15% Lightning Damage per Level<br>Charged Strike: +15% Lightning Damage per Level", graytext:"", text:[""," hits<br>Lightning Damage: ","-","<br>Mana Cost: 9",""]},
{data:d163, key:"163", name:"Lightning Fury", req:[6,4,1,0], reqlvl:30, level:0, extra_levels:0, style:"display: block; top: 422px; left: 142px;", description:"Changes a thrown javelin into a powerful<br>bolt of lightning that splits on impact", syn_title:"<br>Lightning Fury Receives Bonuses From:<br>", syn_text:"Lightning Bolt: +6% Lightning Damage per Level", graytext:"", text:["Releases "," bolts<br>Lightning Damage: ","-","<br>Mana Cost: ",""]},

{data:d211, key:"211", name:"Inner Sight", req:[], reqlvl:1, level:0, extra_levels:0, style:"display: block; top: 82px; left: 204px;", description:"Illuminates nearby enemies<br>making them easier to hit<br>for you and your party", syn_title:"", syn_text:"", graytext:"", text:["Enemy Defense: ","<br>Radius: "," yards",""]},
{data:d213, key:"213", name:"Lethal Strike", req:[], reqlvl:1, level:0, extra_levels:0, style:"display: block; top: 82px; left: 254px;", description:"Passive - Your attacks have a chance to do double damage", syn_title:"", syn_text:"", graytext:"", text:[""," percent critical strike chance",""]},
{data:d221, key:"221", name:"Phase Run", req:[10], reqlvl:6, level:0, extra_levels:0, style:"display: block; top: 150px; left: 194px;", description:"Transcend to a heighten state, granting<br>faster movement and recovery speed", syn_title:"", syn_text:"", graytext:"", text:["Faster Hit Recovery: +30 percent<br>Walk/Run Speed: +30 percent<br>Duration: "," seconds<br>Mana Cost: ",""]},
{data:d222, key:"222", name:"Dodge", req:[], reqlvl:6, level:0, extra_levels:0, style:"display: block; top: 150px; left: 234px;", description:"Passive - You have a chance to dodge<br>a melee attack when attacking<br>or standing still", syn_title:"", syn_text:"", graytext:"", text:[""," percent chance",""]},
{data:d232, key:"232", name:"Avoid", req:[], reqlvl:12, level:0, extra_levels:0, style:"display: block; top: 218px; left: 194px;", description:"Passive - You have a chance to dodge enemy missiles<br>when attacking or standing still", syn_title:"", syn_text:"", graytext:"", text:[""," percent chance",""]},
{data:d233, key:"233", name:"Penetrate", req:[11], reqlvl:12, level:0, extra_levels:0, style:"display: block; top: 218px; left: 334px;", description:"Passive - Increases your attack rating", syn_title:"", syn_text:"", graytext:"", text:["To Attack Rating: +"," percent",""]},
{data:d242, key:"242", name:"Evade", req:[], reqlvl:18, level:0, extra_levels:0, style:"display: block; top: 286px; left: 254px;", description:"Passive - You have a chance to dodge<br>a melee or missile attack<br>when walking or running", syn_title:"", syn_text:"", graytext:"", text:[""," percent chance",""]},
{data:d251, key:"251", name:"Decoy", req:[12,10], reqlvl:24, level:0, extra_levels:0, style:"display: block; top: 354px; left: 134px;", description:"Creates a stationary duplicate of yourself that<br>draws fire from enemies and shoots arrows", syn_title:"<br>Decoy Receives Bonuses From:<br>", syn_text:"Pierce<br>Penetrate<br>Lethal Strike<br>Multiple Shot", graytext:"", text:["Decoy has 100% of your Bows Physical Damage<br>Decoy has 50% of your Maximum Life<br>Uses Multiple Shot Skill Level: ","<br>Damage: ","-","Damage: ","-","<br>Elemental Resistances: +","<br>Attack Rating: +","<br>Life: +"," percent<br>Duration: "," seconds<br>Mana Cost: ",""]},
{data:d261, key:"261", name:"Valkyrie", req:[17,12,10], reqlvl:30, level:0, extra_levels:0, style:"display: block; top: 422px; left: 134px;", description:"Summons a powerful Valkyrie ally<br><br>Mana Cost: 30", syn_title:"<br>Valkyrie Receives Bonuses From:<br>", syn_text:"Jab: +18% Damage Per Level<br>Lightning Strike: +20% Lightning Damage Per Level<br>Power Strike: +20% Lightning Damage Per Level<br>Phase Run<br>Penetrate<br>Lethal Strike<br>Dodge<br>Avoid<br>Evade", graytext:"", text:["Lightning Damage: ","-","<br>Damage: ","-","<br>Life: ","<br>Attack Rating: +","<br>Defense Bonus: +"," percent<br>Elemental Resistances: +",""]},
{data:d263, key:"263", name:"Pierce", req:[15,11], reqlvl:30, level:0, extra_levels:0, style:"display: block; top: 422px; left: 324px;", description:"Passive - Your missiles have a chance to<br>pass through enemies that they hit", syn_title:"", syn_text:"", graytext:"", text:[""," percent pierce chance",""]},

{data:d311, key:"311", name:"Cold Arrow", req:[], reqlvl:1, level:0, extra_levels:0, style:"display: block; top: 82px; left: 216px;", description:"Magically enhances your arrows or bolts<br>by adding cold damage and a slowing effect", syn_title:"<br>Cold Arrow Receives Bonuses From:<br>", syn_text:"Ice Arrow: +12% Cold Damage per Level", graytext:"", text:["Converts ","Cold Damage: ","-","<br>Cold Length: "," seconds<br>Mana Cost: ",""]},
{data:d312, key:"312", name:"Magic Arrow", req:[], reqlvl:1, level:0, extra_levels:0, style:"display: block; top: 82px;  left: 326px;", description:"Creates a magical arrow or bolt<br>that does extra damage<br><br>Always Pierces", syn_title:"", syn_text:"", graytext:"", text:["Converts ","Damage: ","-","<br>Mana Cost: ",""]},
{data:d322, key:"322", name:"Multiple Shot", req:[21], reqlvl:6, level:0, extra_levels:0, style:"display: block; top: 150px; left: 406px;", description:"Magically splits one arrow<br>or bolt into many<br><br>Deals 100% of Weapon Damage", syn_title:"", syn_text:"", graytext:"", text:["Damage: ","-","<br>"," arrows<br>Mana Cost: ",""]},
{data:d323, key:"323", name:"Fire Arrow", req:[21], reqlvl:6, level:0, extra_levels:0, style:"display: block; top: 150px; left: 240px;", description:"Magically enhances your arrows or bolts<br>with fire, which leaves a burning trail behind it", syn_title:"<br>Fire Arrow Receives Bonuses From:<br>", syn_text:"Exploding Arrow: +12% Fire Damage per Level<br>Exploding Arrow: +12% Average Fire Damage per Second per Level", graytext:"", text:["Converts ","Average Fire Damage: ","-"," per second<br>To Attack Rating: +"," percent<br>Fire Damage: ","-","<br>Mana Cost: ",""]},
{data:d341, key:"341", name:"Ice Arrow", req:[20], reqlvl:18, level:0, extra_levels:0, style:"display: block; top: 286px; left: 266px;", description:"Magically enhances your arrow or bolt<br>to freeze your enemies", syn_title:"<br>Ice Arrow Receives Bonuses From:<br>", syn_text:"Cold Arrow: +10% Cold Damage per Level<br>Freezing Arrow: +5% Freeze Length per Level", graytext:"", text:["Cold Damage: ","-","<br>Freezes for "," seconds<br>Mana Cost: ",""]},
{data:d342, key:"342", name:"Guided Arrow", req:[20,22,21], reqlvl:18, level:0, extra_levels:0, style:"display: block; top: 286px; left: 416px;", description:"Enhances your arrows and bolts<br>to track your target<br>or seek one of its own<br><br>Always Hits<br><br>Deals 150% of Weapon Damage", syn_title:"", syn_text:"", graytext:"", text:["Damage: +"," percent<br>Mana Cost: ",""]},
{data:d343, key:"343", name:"Exploding Arrow", req:[23,21], reqlvl:18, level:0, extra_levels:0, style:"display: block; top: 286px; left: 398px;", description:"Enchants an arrow or bolt that explodes on<br>contact, damaging all nearby enemies", syn_title:"<br>Exploding Arrow Receives Bonuses From:<br>", syn_text:"Fire Arrow: +20% Fire Damage per Level<br>Magic Arrow: +20% Fire Damage per Level", graytext:"", text:["Fire Damage: ","-","<br>Mana Cost: ",""]},
{data:d352, key:"352", name:"Strafe", req:[25,20,22,21], reqlvl:24, level:0, extra_levels:0, style:"display: block; top: 354px; left: 376px;", description:"Magically splits one arrow into several<br>that target multiple nearby enemies<br><br>Deals 100% of Weapon Damage", syn_title:"", syn_text:"", graytext:"", text:["Damage: ","-","<br>Attacks up to "," targets<br>Damage: +"," percent<br>Mana Cost: ",""]},
{data:d353, key:"353", name:"Immolation Arrow", req:[26,23,21], reqlvl:24, level:0, extra_levels:0, style:"display: block; top: 354px; left: 281px;", description:"Enhances arrows or bolts to<br>cause severe fire damage and<br>creates a pyre upon impact", syn_title:"<br>Immolation Arrow Receives Bonuses From:<br>", syn_text:"Fire Arrow: +16% Average Fire Damage per Second per Level<br>Exploding Arrow: +15% Fire Damage per Level", graytext:"", text:["Fire Explosion Damage: ","-","<br>Fire Duration: 4 seconds<br>Average Fire Damage: ","-"," per second<br>Mana Cost: ",""]},
{data:d361, key:"361", name:"Freezing Arrow", req:[24,20], reqlvl:30, level:0, extra_levels:0, style:"display: block; top: 422px; left: 266px;", description:"Magically enhances an arrow or bolt<br>to freeze entire groups of monsters<br><br>Radius: 3.3 yards", syn_title:"<br>Freezing Arrow Receives Bonuses From:<br>", syn_text:"Cold Arrow: +21% Cold Damage per Level<br>Ice Arrow: +2% Cold Damage per Level<br>Ice Arrow: +5% Freeze Length per Level", graytext:"", text:["Cold Damage: ","-","<br>Freezes for "," seconds<br>Mana Cost: ",""]}
];
