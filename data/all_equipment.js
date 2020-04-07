

var equipped = { helm:{name:"none"}, armor:{name:"none"}, gloves:{name:"none"}, boots:{name:"none"}, belt:{name:"none"}, amulet:{name:"none"}, ring1:{name:"none"}, ring2:{name:"none"}, weapon:{name:"none", twoHanded:0, type:""}, offhand:{name:"none", type:""}, charms:{name:"none"}};

var unequipped = {name:"none", strength:0, dexterity:0, vitality:0, energy:0, life:0, mana:0, defense:0, ar:0, stamina:0, block:0, base_defense:0, 
/* main stats		*/	fRes_max:0, cRes_max:0, lRes_max:0, pRes_max:0, mRes_max:0, fRes:0, cRes:0, lRes:0, pRes:0, mRes:0,
/* stats		*/	cdr:0, fcr:0, fbr:0, fhr:0, frw:0, ias:0, pierce:0, cblow:0, dstrike:0, cstrike:0, owounds:0, fDamage:0, cDamage:0, lDamage:0, pDamage:0, fPierce:0, cPierce:0, lPierce:0, pPierce:0, pdr:0, damage_reduced:0, mDamage_reduced:0, mf:0, gf:0, life_leech:0, mana_leech:0, life_per_hit:0, mana_per_hit:0, life_per_ranged_hit:0, mana_per_ranged_hit:0, fAbsorb:0, cAbsorb:0, lAbsorb:0, mAbsorb:0, fAbsorb_flat:0, cAbsorb_flat:0, lAbsorb_flat:0, mAbsorb_flat:0, 
/* stats (indirect)	*/	all_skills:0, all_attributes:0, all_res:0, velocity:0, max_life:0, max_mana:0, damage_bonus:0, defense_bonus:0, ar_bonus:0, ar_bonus_per_level:0, ias_per_8_dexterity:0, max_energy:0, ar_per_socketed:0, 
/* stats (per level)	*/	life_per_level:0, mana_per_level:0, defense_per_level:0, ar_per_level:0, stamina_per_level:0, strength_per_level:0, dexterity_per_level:0, vitality_per_level:0, energy_per_level:0, fRes_per_level:0, cRes_per_level:0, lRes_per_level:0, pRes_per_level:0, fAbsorb_flat_per_level:0, cAbsorb_flat_per_level:0, lAbsorb_flat_per_level:0, mAbsorb_flat_per_level:0, mf_per_level:0, gf_per_level:0, fcr_per_level:0, dstrike_per_level:0, e_def_per_level:0, 
/* attack damage	*/	base_damage_min:0, base_damage_max:0, damage_min:0, damage_max:0, fDamage_min:0, fDamage_max:0, cDamage_min:0, cDamage_max:0, lDamage_min:0, lDamage_max:0, pDamage_min:0, pDamage_max:0, pDamage_all:0, pDamage_duration:0, mDamage_min:0, mDamage_max:0, min_damage_per_level:0, max_damage_per_level:0, kick_min:0, fDamage_max_per_level:0, cDamage_max_per_level:0, lDamage_max_per_level:0, pDamage_max_per_level:0, kick_damage_per_level:0, smite_min:0, smite_max:0, e_damage:0, e_damage_per_level:0, e_max_damage_per_level:0, lDamage_max_per_2_energy:0,
/* other (not in-game)	*/	ibc:0, life_per_kill:0, mana_per_kill:0, damage_vs_demons:0, damage_vs_undead:0, ar_vs_demons:0, ar_vs_undead:0, damage_to_mana:0, life_replenish:0, life_regen:0, mana_regen:0, missile_defense:0, melee_defense:0, ar_vs_undead_per_level:0, damage_vs_undead_per_level:0, ar_vs_demons_per_level:0, damage_vs_demons_per_level:0, poison_length_reduced:0, thorns_lightning:0, life_per_demon_kill:0, light_radius:0, thorns:0, thorns_per_level:0, slower_stam_drain:0, heal_stam:0, heal_stam_per_level:0, 
/* other, affects enemy	*/	enemy_fRes:0, enemy_cRes:0, enemy_lRes:0, enemy_pRes:0, slow_target:0, target_defense:0, flee_on_hit:0, blind_on_hit:0, monster_defense_per_hit:0, freezes_target:0,
/* other, boolean	*/	itd:0, pmh:0, cbf:0, peace:0, knockback:0, half_freeze_duration:0,
/* item qualities	*/	indestructible:0, req:0, autorepair:0, autoreplenish:0, stack_size:0, sockets:0, e_def:0, group:"", tier:0, type:"", def_low:0, def_high:0, durability:0, max_sockets:0, upgrade:"", downgrade:"", 
/* sets			*/	set_IK:0, set_Mav:0, set_Gris:0, set_TO:0, set_TR:0, set_Nat:0, set_Ald:0, set_Disciple:0, set_Angelic:0, set_Cathan:0, set_Cow:0, set_Brethren:0, set_Hwanin:0, set_Naj:0, set_Orphan:0, set_Sander:0, set_Sazabi:0, set_Arcanna:0, set_Arctic:0, set_Berserker:0, set_Civerb:0, set_Cleglaw:0, set_Death:0, set_Hsarus:0, set_Infernal:0, set_Iratha:0, set_Isenhart:0, set_Milabrega:0, set_Sigon:0, set_Tancred:0, set_Vidala:0,
/* misc			*/	ar_shrine_bonus:0, bonus_corpse_explosion:0, skill_random_sorc:0, max_stamina:0, thorns_reflect:0, absorb:0, curse_length_reduced:0, enemy_defense:0, slow_enemies:0, hammer_bonus:0, skeleton_bonus:0, stun_length:0, charge_ember:0, charge_thunder:0, charge_ice:0, wisp:0, blessed_hammer_on_hit:0, discount:15, 

/* skill tabs		*/	skills_javelins:0, skills_passives:0, skills_bows:0, skills_martial:0, skills_shadow:0, skills_traps:0, skills_warcries:0, skills_masteries:0, skills_combat_barbarian:0, skills_elemental:0, skills_shapeshifting:0, skills_summoning_druid:0, skills_summoning_necromancer:0, skills_poisonBone:0, skills_curses:0, skills_offensive:0, skills_defensive:0, skills_combat_paladin:0, skills_cold:0, skills_lightning:0, skills_fire:0, skills_amazon:0, skills_assassin:0, skills_barbarian:0, skills_druid:0, skills_necromancer:0, skills_paladin:0, skills_sorceress:0, skills_fire_all:0, skills_cold_all:0, skills_poison_all:0,
/* skills   amazon	*/	skill_Jab:0, skill_Power_Strike:0, skill_Poison_Javelin:0, skill_Fend:0, skill_Lightning_Bolt:0, skill_Charged_Strike:0, skill_Plague_Javelin:0, skill_Ground_Slam:0, skill_Lightning_Strike:0, skill_Lightning_Fury:0, skill_Inner_Sight:0, skill_Lethal_Strike:0, skill_Phase_Run:0, skill_Dodge:0, skill_Avoid:0, skill_Penetrate:0, skill_Evade:0, skill_Decoy:0, skill_Valkyrie:0, skill_Pierce:0, skill_Cold_Arrow:0, skill_Magic_Arrow:0, skill_Multiple_Shot:0, skill_Fire_Arrow:0, skill_Ice_Arrow:0, skill_Guided_Arrow:0, skill_Exploding_Arrow:0, skill_Strafe:0, skill_Immolation_Arrow:0, skill_Freezing_Arrow:0, 
/* skills   assassin	*/	skill_Dual_Strike:0, skill_Fists_of_Ember:0, skill_Fists_of_Thunder:0, skill_Fists_of_Ice:0, skill_Static_Strike:0, skill_Dragon_Talon:0, skill_Emberstorm:0, skill_Dragon_Flight:0, skill_Blades_of_Ice:0, skill_Claw_Mastery:0, skill_Psychic_Hammer:0, skill_Burst_of_Speed:0, skill_Mind_Barrier:0, skill_Weapon_Block:0, skill_Cloak_of_Shadows:0, skill_Fade:0, skill_Shadow_Warrior:0, skill_Mind_Blast:0, skill_Venom:0, skill_Shadow_Master:0, skill_Fire_Blast:0, skill_Shock_Web:0, skill_Blade_Throw:0, skill_Charged_Bolt_Sentry:0, skill_Wake_of_Fire:0, skill_Blade_Fury:0, skill_Lightning_Sentry:0, skill_Wake_of_Inferno:0, skill_Death_Sentry:0, skill_Blade_Shield:0, skill_Dragon_Tail:0, 
/* skills   barbarian	*/	skill_Howl:0, skill_Find_Potion:0, skill_Taunt:0, skill_Shout:0, skill_Find_Item:0, skill_Battle_Cry:0, skill_Battle_Orders:0, skill_Grim_Ward:0, skill_War_Cry:0, skill_Battle_Command:0, skill_Edged_Weapon_Mastery:0, skill_Pole_Weapon_Mastery:0, skill_Blunt_Weapon_Mastery:0, skill_Thrown_Weapon_Mastery:0, skill_Increased_Stamina:0, skill_Iron_Skin:0, skill_Increased_Speed:0, skill_Natural_Resistance:0, skill_Frenzy:0, skill_Concentrate:0, skill_Cleave:0, skill_Stun:0, skill_Leap:0, skill_Power_Throw:0, skill_Bash:0, skill_Leap_Attack:0, skill_Ethereal_Throw:0, skill_Whirlwind:0, skill_One_Handed_Weapon_Mastery:0, skill_Two_Handed_Weapon_Mastery:0, 
/* skills   druid	*/	skill_Firestorm:0, skill_Molten_Boulder:0, skill_Flame_Dash:0, skill_Arctic_Blast:0, skill_Fissure:0, skill_Cyclone_Armor:0, skill_Twister:0, skill_Volcano:0, skill_Tornado:0, skill_Armageddon:0, skill_Hurricane:0, skill_Werewolf:0, skill_Lycanthropy:0, skill_Werebear:0, skill_Feral_Rage:0, skill_Maul:0, skill_Rabies:0, skill_Fire_Claws:0, skill_Hunger:0, skill_Shock_Wave:0, skill_Fury:0, skill_Raven:0, skill_Poison_Creeper:0, skill_Heart_of_Wolverine:0, skill_Summon_Spirit_Wolf:0, skill_Carrion_Vine:0, skill_Oak_Sage:0, skill_Summon_Dire_Wolf:0, skill_Solar_Creeper:0, skill_Spirit_of_Barbs:0, skill_Summon_Grizzly:0, 
/* skills   necromancer	*/	skill_Summon_Mastery:0, skill_Raise_Skeleton_Warrior:0, skill_Bone_Offering:0, skill_Clay_Golem:0, skill_Flesh_Offering:0, skill_Raise_Skeletal_Mage:0, skill_Blood_Golem:0, skill_Convocation:0, skill_Iron_Golem:0, skill_Fire_Golem:0, skill_Revive:0, skill_Deadly_Poison:0, skill_Teeth:0, skill_Bone_Armor:0, skill_Corpse_Explosion:0, skill_Desecrate:0, skill_Bone_Spear:0, skill_Bone_Wall:0, skill_Bone_Spirit:0, skill_Poison_Nova:0, skill_Amplify_Damage:0, skill_Dim_Vision:0, skill_Hemorrhage:0, skill_Weaken:0, skill_Iron_Maiden:0, skill_Terror:0, skill_Confuse:0, skill_Life_Tap:0, skill_Attract:0, skill_Decrepify:0, skill_Lower_Resist:0, 
/* skills   paladin	*/	skill_Prayer:0, skill_Resist_Fire:0, skill_Defiance:0, skill_Resist_Cold:0, skill_Cleansing:0, skill_Resist_Lightning:0, skill_Vigor:0, skill_Meditation:0, skill_Redemption:0, skill_Salvation:0, skill_Might:0, skill_Holy_Fire:0, skill_Precision:0, skill_Blessed_Aim:0, skill_Concentration:0, skill_Holy_Freeze:0, skill_Holy_Shock:0, skill_Sanctuary:0, skill_Fanaticism:0, skill_Conviction:0, skill_Sacrifice:0, skill_Smite:0, skill_Holy_Bolt:0, skill_Zeal:0, skill_Charge:0, skill_Vengeance:0, skill_Blessed_Hammer:0, skill_Conversion:0, skill_Holy_Shield:0, skill_Fist_of_the_Heavens:0, skill_Dashing_Strike:0, 
/* skills   sorceress	*/	skill_Ice_Bolt:0, skill_Frigerate:0, skill_Frost_Nova:0, skill_Ice_Blast:0, skill_Shiver_Armor:0, skill_Glacial_Spike:0, skill_Blizzard:0, skill_Freezing_Pulse:0, skill_Chilling_Armor:0, skill_Frozen_Orb:0, skill_Cold_Mastery:0, skill_Charged_Bolt:0, skill_Static_Field:0, skill_Telekinesis:0, skill_Nova:0, skill_Lightning_Surge:0, skill_Chain_Lightning:0, skill_Teleport:0, skill_Discharge:0, skill_Energy_Shield:0, skill_Lightning_Mastery:0, skill_Thunder_Storm:0, skill_Fire_Bolt:0, skill_Warmth:0, skill_Blaze:0, skill_Immolate:0, skill_Fire_Ball:0, skill_Fire_Wall:0, skill_Enflame:0, skill_Meteor:0, skill_Fire_Mastery:0, skill_Hydra:0, 
/* oskills		*/	oskill_Warp:0, oskill_Ball_Lightning:0,	// Enigma, Ondal's Wisdom
/* oskills  amazon	*/	oskill_Inner_Sight:0, oskill_Lethal_Strike:0, oskill_Valkyrie:0, oskill_Magic_Arrow:0, oskill_Guided_Arrow:0, oskill_Multiple_Shot:0,	// Blackoak Shield, Insight, Harmony, Witherstring, Wizendraw, Witchwild String, Widowmaker, Doomslinger
/* oskills  barbarian	*/	oskill_Battle_Command:0, oskill_Battle_Orders:0, oskill_Battle_Cry:0, oskill_Bash:0, oskill_Edged_Weapon_Mastery:0,	// Call to Arms, Passion, The Grandfather
/* oskills  druid	*/	oskill_Lycanthropy:0, oskill_Werebear:0, oskill_Werewolf:0, oskill_Feral_Rage:0, oskill_Flame_Dash:0, oskill_Summon_Dire_Wolf:0,	// Wolfhowl, Beast, Flamebellow, Boneflesh, (Frostwind)
/* oskills  necromancer	*/	oskill_Desecrate:0,	// Radament's Sphere
/* oskills  paladin	*/	oskill_Zeal:0, oskill_Vengeance:0,	// Chaos, Passion, Kingslayer
/* oskills  sorceress	*/	oskill_Frigerate:0, oskill_Shiver_Armor:0, oskill_Cold_Mastery:0, oskill_Hydra:0, oskill_Fire_Ball:0, oskill_Fire_Wall:0, oskill_Meteor:0, oskill_Fire_Mastery:0, oskill_Enflame:0,	// Frostwind, Medusa's Gaze, Bing Sz Wang, Dragonscale, Trang-Oul's Set, Lava Gout
// ...to confirm:
//	oskill_Guided_Arrow (Widowmaker)
//	oskill_Two_Handed_Weapon_Mastery / oskill_Edged_Weapon_Mastery (The Grandfather)
};

var oskills = ["oskill_Warp","oskill_Ball_Lightning","oskill_Inner_Sight","oskill_Lethal_Strike","oskill_Valkyrie","oskill_Magic_Arrow","oskill_Guided_Arrow","oskill_Multiple_Shot","oskill_Battle_Command","oskill_Battle_Orders","oskill_Battle_Cry","oskill_Bash","oskill_Edged_Weapon_Mastery","oskill_Lycanthropy","oskill_Werebear","oskill_Werewolf","oskill_Feral_Rage","oskill_Flame_Dash","oskill_Summon_Dire_Wolf","oskill_Desecrate","oskill_Zeal","oskill_Vengeance","oskill_Frigerate","oskill_Shiver_Armor","oskill_Cold_Mastery","oskill_Hydra","oskill_Fire_Ball","oskill_Fire_Wall","oskill_Meteor","oskill_Fire_Mastery","oskill_Enflame"];
var oskills_info = {
	oskill_Warp:{name:"Warp",native_class:"none",i:0}, oskill_Ball_Lightning:{name:"Ball Lightning",native_class:"none",i:1},
	oskill_Inner_Sight:{name:"Inner Sight",native_class:"amazon",i:10}, oskill_Lethal_Strike:{name:"Lethal Strike",native_class:"amazon",i:11}, oskill_Valkyrie:{name:"Valkyrie",native_class:"amazon",i:18}, oskill_Magic_Arrow:{name:"Magic Arrow",native_class:"amazon",i:21}, oskill_Guided_Arrow:{name:"Guided Arrow",native_class:"amazon",i:25}, oskill_Multiple_Shot:{name:"Multiple Shot",native_class:"amazon",i:22},
	oskill_Battle_Command:{name:"Battle Command",native_class:"barbarian",i:9}, oskill_Battle_Orders:{name:"Battle Orders",native_class:"barbarian",i:6}, oskill_Battle_Cry:{name:"Battle Cry",native_class:"barbarian",i:5}, oskill_Bash:{name:"Bash",native_class:"barbarian",i:24}, oskill_Edged_Weapon_Mastery:{name:"Edged Weapon Mastery",native_class:"barbarian",i:10},
	oskill_Lycanthropy:{name:"Lycanthropy",native_class:"druid",i:12}, oskill_Werebear:{name:"Werebear",native_class:"druid",i:13}, oskill_Werewolf:{name:"Werewolf",native_class:"druid",i:11}, oskill_Feral_Rage:{name:"Feral Rage",native_class:"druid",i:14}, oskill_Flame_Dash:{name:"Flame Dash",native_class:"druid",i:2}, oskill_Summon_Dire_Wolf:{name:"Summon Dire Wolf",native_class:"druid",i:27}, 
	oskill_Desecrate:{name:"Desecrate",native_class:"necromancer",i:15}, 
	oskill_Zeal:{name:"Zeal",native_class:"paladin",i:23}, oskill_Vengeance:{name:"Vengeance",native_class:"paladin",i:25}, 
	oskill_Frigerate:{name:"Frigerate",native_class:"sorceress",i:1}, oskill_Shiver_Armor:{name:"Shiver Armor",native_class:"sorceress",i:4}, oskill_Cold_Mastery:{name:"Cold Mastery",native_class:"sorceress",i:10}, oskill_Hydra:{name:"Hydra",native_class:"sorceress",i:31}, oskill_Fire_Ball:{name:"Fire Ball",native_class:"sorceress",i:26}, oskill_Fire_Wall:{name:"Fire Wall",native_class:"sorceress",i:27}, oskill_Meteor:{name:"Meteor",native_class:"sorceress",i:29}, oskill_Fire_Mastery:{name:"Fire Mastery",native_class:"sorceress",i:30}, oskill_Enflame:{name:"Enflame",native_class:"sorceress",i:28}, 
};

var non_items = [
{name:"Miscellaneous"},
{i:1, name:"Shrine: Skill", all_skills:2, duration:96, recharge:240, effect:"Skill"},					// TODO: verify whether this applies to skills gained solely from items
{i:2, name:"Shrine: Combat", damage_bonus:200, ar_shrine_bonus:200, duration:96, recharge:240, effect:"Combat"},	// AR bonus can stack with other Combat shrines
{i:3, name:"Shrine: Armor", defense_bonus:100, duration:96, recharge:240, effect:"Armor"},
{i:4, name:"Shrine: Mana Regeneration", mana_regen:400, duration:96, recharge:240, effect:"Mana_Regeneration"},
{i:5, name:"Shrine: Fire Resist", fRes:75, duration:144, recharge:240, effect:"Resist_Fire"},
{i:6, name:"Shrine: Cold Resist", cRes:75, duration:144, recharge:240, effect:"Resist_Cold"},
{i:7, name:"Shrine: Lightning Resist", lRes:75, duration:144, recharge:240, effect:"Resist_Lightning"},
{i:8, name:"Shrine: Poison Resist", pRes:75, duration:144, recharge:240, effect:"Resist_Poison"},
{i:9, name:"Potion: Thawing", cRes:50, duration:30, effect:"Thawing"},							// stackable duration
{i:10, name:"Potion: Antitode", pRes:50, duration:30, effect:"Antidote"},						// stackable duration
/*
{i:11, name:"Mercenary: Inner Sight", aura:"Inner Sight"},	//enemy_defense:0, 
{i:12, name:"Mercenary: Blessed Aim", aura:"Blessed Aim"},	//ar_bonus:0, blessed_hammer_on_hit:0, 
{i:13, name:"Mercenary: Defiance", aura:"Defiance"},		//defense_bonus:0, 
{i:14, name:"Mercenary: Prayer", aura:"Prayer"},		//life_regen:0, life_replenish:0, 
{i:15, name:"Mercenary: Meditation", aura:"Meditation"},	//mana_regen:0, 
{i:16, name:"Mercenary: Cleansing", aura:"Cleansing"},		//poison_length_reduced:0, curse_length_reduced:0, 
{i:17, name:"Mercenary: Thorns", aura:"Thorns"},		//thorns_reflect:0, 
{i:18, name:"Mercenary: Might", aura:"Might"},			//damage_bonus:0, 
*/
];

var auras = [
/* 0*/	{name:"Prayer", values:[["heals",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,20,22,24,26,28,30,32,34,36,38,40,43,46,49,52,55,58,61,64,67,70,73,76,79,82,85,88,91,94,97,100,103,106,109,112,115,118,121,124,127,130,133,136], []]},
/* 1*/	{name:"Resist Fire", values:[[], ["resist",65,77,86,94,100,105,109,112,116,118,121,123,125,127,128,130,131,132,133,134,135,136,137,138,138,139,140,140,141,141,142,142,143,143,143,144,144,145,145,145,145,146,146,146,147,147,147,147,148,148,148,148,148,149,149,149,149,149,149,150], ["max resist",1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,30,30]]},
/* 2*/	{name:"Defiance", values:[["defense",80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390,400,410,420,430,440,450,460,470,480,490,500,510,520,530,540,550,560,570,580,590,600,610,620,630,640,650,660,670]]},
/* 3*/	{name:"Resist Cold", values:[[], ["resist",65,77,86,94,100,105,109,112,116,118,121,123,125,127,128,130,131,132,133,134,135,136,137,138,138,139,140,140,141,141,142,142,143,143,143,144,144,145,145,145,145,146,146,146,147,147,147,147,148,148,148,148,148,149,149,149,149,149,149,150], ["max resist",1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,30,30]]},
/* 4*/	{name:"Cleansing", values:[[], ["duration reduction",39,46,51,56,60,63,65,67,69,70,72,73,75,76,76,78,78,79,79,80,81,81,82,82,82,83,84,84,84,84,85,85,85,85,85,86,86,87,87,87,87,87,87,87,88,88,88,88,88,88,88,88,88,89,89,89,89,89,89,90]]},
/* 5*/	{name:"Resist Lightning", values:[[], ["resist",65,77,86,94,100,105,109,112,116,118,121,123,125,127,128,130,131,132,133,134,135,136,137,138,138,139,140,140,141,141,142,142,143,143,143,144,144,145,145,145,145,146,146,146,147,147,147,147,148,148,148,148,148,149,149,149,149,149,149,150], ["max resist",1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,30,30]]},
/* 6*/	{name:"Vigor", values:[["velocity",13,18,22,25,28,30,32,33,35,36,37,38,39,40,40,41,41,42,42,43,43,43,44,44,44,45,45,45,46,46,46,46,46,46,46,47,47,47,47,47,47,48,48,48,48,48,48,48,49,49,49,49,49,49,49,49,49,49,49,50], ["stamina",50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500,525,550,575,600,625,650,675,700,725,750,775,800,825,850,875,900,925,950,975,1000,1025,1050,1075,1100,1125,1150,1175,1200,1225,1250,1275,1300,1325,1350,1375,1400,1425,1450,1475,1500,1525], ["stamina recovery",50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500,525,550,575,600,625,650,675,700,725,750,775,800,825,850,875,900,925,950,975,1000,1025,1050,1075,1100,1125,1150,1175,1200,1225,1250,1275,1300,1325,1350,1375,1400,1425,1450,1475,1500,1525]]},
/* 7*/	{name:"Meditation", values:[[], ["mana recovery",80,88,96,104,112,120,128,136,144,152,160,168,176,184,192,200,208,216,224,232,240,248,256,264,272,280,288,296,304,312,320,328,336,344,352,360,368,376,384,392,400,408,416,424,432,440,448,456,464,472,480,488,496,504,512,520,528,536,544,552]]},
/* 8*/	{name:"Redemption", values:[["redeem chance",14,25,33,40,45,49,53,56,59,61,64,65,67,69,70,72,73,73,74,75,76,77,78,79,79,80,81,81,81,81,82,82,83,83,83,84,84,85,85,85,85,86,86,86,87,87,87,87,88,88,88,88,88,89,89,89,89,89,89,90], ["recover amount",25,33,41,49,57,65,73,81,89,97,105,113,121,129,137,145,153,161,169,177,185,193,201,209,217,225,233,241,249,257,265,273,281,289,297,305,313,321,329,337,345,353,361,369,377,385,393,401,409,417,425,433,441,449,457,465,473,481,489,497]]},
/* 9*/	{name:"Salvation", values:[["elemental damage",6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65], ["resist",40,48,55,60,65,68,71,73,76,77,79,81,82,83,84,86,86,87,88,88,89,90,90,91,91,92,93,93,93,93,94,94,95,95,95,95,95,96,96,96,96,97,97,97,97,97,97,97,98,98,98,98,98,99,99,99,99,99,99,100]]},

/*10*/	{name:"Might", values:[["damage",50,58,66,74,82,90,98,106,114,122,130,138,146,154,162,170,178,186,194,202,210,218,226,234,242,250,258,266,274,282,290,298,306,314,322,330,338,346,354,362,370,378,386,394,402,410,418,426,434,442,450,458,466,474,482,490,498,506,514,522]]},
/*11*/	{name:"Holy Fire", values:[["attack min",5,10,15,20,25,30,35,40,50,60,70,80,90,100,110,120,145,170,195,220,245,270,320,370,420,470,520,570,660,750,840,930,1020,1110,1200,1290,1380,1470,1560,1650,1740,1830,1920,2010,2100,2190,2280,2370,2460,2550,2640,2730,2820,2910,3000,3090,3180,3270,3360,3450], ["attack max",15,25,35,45,55,65,75,85,100,115,130,145,160,175,190,205,240,275,310,345,380,415,490,565,640,715,790,865,980,1095,1210,1325,1440,1555,1670,1785,1900,2015,2130,2245,2360,2475,2590,2705,2820,2935,3050,3165,3280,3395,3510,3625,3740,3855,3970,4085,4200,4315,4430,4545], ["aura min",1,2,3,4,5,6,7,8,10,12,14,16,18,20,22,24,29,34,39,44,49,54,64,74,84,94,104,114,132,150,168,186,204,222,240,258,276,294,312,330,348,366,384,402,420,438,456,474,492,510,528,546,564,582,600,618,636,654,672,690], ["aura max",3,5,7,9,11,13,15,17,20,23,26,29,32,35,38,41,48,55,62,69,76,83,98,113,128,143,158,173,196,219,242,265,288,311,334,357,380,403,426,449,472,495,518,541,564,587,610,633,656,679,702,725,748,771,794,817,840,863,886,909]]},
/*12*/	{name:"Precision", values:[["pierce",9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68], ["party pierce",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60], ["crit chance",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60], ["attack rating",50,70,90,110,130,150,170,190,210,230,250,270,290,310,330,350,370,390,410,430,450,470,490,510,530,550,570,590,610,630,650,670,690,710,730,750,770,790,810,830,850,870,890,910,930,950,970,990,1010,1030,1050,1070,1090,1110,1130,1150,1170,1190,1210,1230]]},
/*13*/	{name:"Blessed Aim", values:[[], ["hammer chance",2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61], ["attack rating",100,115,130,145,160,175,190,205,220,235,250,265,280,295,310,325,340,355,370,385,400,415,430,445,460,475,490,505,520,535,550,565,580,595,610,625,640,655,670,685,700,715,730,745,760,775,790,805,820,835,850,865,880,895,910,925,940,955,970,985]]},
/*14*/	{name:"Concentration", values:[["attack rating",300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,2200,2300,2400,2500,2600,2700,2800,2900,3000,3100,3200,3300,3400,3500,3600,3700,3800,3900,4000,4100,4200,4300,4400,4500,4600,4700,4800,4900,5000,5100,5200,5300,5400,5500,5600,5700,5800,5900,6000,6100,6200], ["damage",50,56,62,68,74,80,86,92,98,104,110,116,122,128,134,140,146,152,158,164,170,176,182,188,194,200,206,212,218,224,230,236,242,248,254,260,266,272,278,284,290,296,302,308,314,320,326,332,338,344,350,356,362,368,374,380,386,392,398,404], ["hammer damage",50,56,62,68,74,80,86,92,98,104,110,116,122,128,134,140,146,152,158,164,170,176,182,188,194,200,206,212,218,224,230,236,242,248,254,260,266,272,278,284,290,296,302,308,314,320,326,332,338,344,350,356,362,368,374,380,386,392,398,404]]},
/*15*/	{name:"Holy Freeze", values:[["attack min",20,30,40,50,60,70,80,90,110,130,150,170,190,210,230,250,290,330,370,410,450,490,570,650,730,810,890,970,1100,1230,1360,1490,1620,1750,1880,2010,2140,2270,2400,2530,2660,2790,2920,3050,3180,3310,3440,3570,3700,3830,3960,4090,4220,4350,4480,4610,4740,4870,5000,5130], ["attack max",40,50,60,70,80,90,100,110,140,170,200,230,260,290,320,350,410,470,530,590,650,710,830,950,1070,1190,1310,1430,1610,1790,1970,2150,2330,2510,2690,2870,3050,3230,3410,3590,3770,3950,4130,4310,4490,4670,4850,5030,5210,5390,5570,5750,5930,6110,6290,6470,6650,6830,7010,7190], ["aura min",4,6,8,10,12,14,16,18,22,26,30,34,38,42,46,50,58,66,74,82,90,98,114,130,146,162,178,194,220,246,272,298,324,350,376,402,428,454,480,506,532,558,584,610,636,662,688,714,740,766,792,818,844,870,896,922,948,974,1000,1026], ["aura max",8,10,12,14,16,18,20,22,28,34,40,46,52,58,64,70,82,94,106,118,130,142,166,190,214,238,262,286,322,358,394,430,466,502,538,574,610,646,682,718,754,790,826,862,898,934,970,1006,1042,1078,1114,1150,1186,1222,1258,1294,1330,1366,1402,1438], ["enemies slowed",14,18,20,23,25,26,27,28,29,30,31,31,32,33,33,34,34,34,34,35,35,36,36,36,36,36,37,37,37,37,37,37,37,37,37,38,38,38,38,38,38,38,38,38,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,40]]},
/*16*/	{name:"Holy Shock", values:[["attack min",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], ["attack max",50,100,150,200,250,300,350,400,500,600,700,800,900,1000,1100,1200,1375,1550,1725,1900,2075,2250,2500,2750,3000,3250,3500,3750,4050,4350,4650,4950,5250,5550,5850,6150,6450,6750,7050,7350,7650,7950,8250,8550,8850,9150,9450,9750,10050,10350,10650,10950,11250,11550,11850,12150,12450,12750,13050,13350], ["aura min",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], ["aura max",10,20,30,40,50,60,70,80,100,120,140,160,180,200,220,240,275,310,345,380,415,450,500,550,600,650,700,750,810,870,930,990,1050,1110,1170,1230,1290,1350,1410,1470,1530,1590,1650,1710,1770,1830,1890,1950,2010,2070,2130,2190,2250,2310,2370,2430,2490,2550,2610,2670]]},
/*17*/	{name:"Sanctuary", values:[["damage to undead",50,80,110,140,170,200,230,260,290,320,350,380,410,440,470,500,530,560,590,620,650,680,710,740,770,800,830,860,890,920,950,980,1010,1040,1070,1100,1130,1160,1190,1220,1250,1280,1310,1340,1370,1400,1430,1460,1490,1520,1550,1580,1610,1640,1670,1700,1730,1760,1790,1820], ["magic damage min",12,16,20,24,28,32,36,40,46,52,58,64,70,76,82,88,98,108,118,128,138,148,162,176,190,204,218,232,250,268,286,304,322,340,358,376,394,412,430,448,466,484,502,520,538,556,574,592,610,628,646,664,682,700,718,736,754,772,790,808], ["magic damage max",24,30,36,42,48,54,60,66,74,82,90,98,106,114,122,130,142,154,166,178,190,202,218,234,250,266,282,298,318,338,358,378,398,418,438,458,478,498,518,538,558,578,598,618,638,658,678,698,718,738,758,778,798,818,838,858,878,898,918,938]]},
/*18*/	{name:"Fanaticism", values:[["party damage",25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175,180,185,190,195,200,205,210,215,220,225,230,235,240,245,250,255,260,265,270,275,280,285,290,295,300,305,310,315,320], ["damage",50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390,400,410,420,430,440,450,460,470,480,490,500,510,520,530,540,550,560,570,580,590,600,610,620,630,640], ["attack speed",14,18,20,23,25,26,27,28,29,30,31,31,32,33,33,34,34,34,34,35,35,35,36,36,36,36,37,37,37,37,37,37,37,37,37,38,38,38,38,38,38,38,38,38,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,40], ["attack rating",40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175,180,185,190,195,200,205,210,215,220,225,230,235,240,245,250,255,260,265,270,275,280,285,290,295,300,305,310,315,320,325,330,335]]},
/*19*/	{name:"Conviction", values:[["defense",-32,-38,-43,-47,-50,-52,-54,-56,-58,-59,-60,-61,-62,-63,-64,-65,-65,-66,-66,-67,-67,-68,-68,-69,-69,-69,-70,-70,-70,-70,-71,-71,-71,-71,-71,-72,-72,-72,-72,-72,-72,-73,-73,-73,-73,-73,-73,-73,-74,-74,-74,-74,-74,-74,-74,-74,-74,-74,-74,-75], ["resist",-30,-35,-40,-45,-50,-55,-60,-65,-70,-75,-80,-85,-90,-95,-100,-105,-110,-115,-120,-125,-130,-135,-140,-145,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150,-150]]},

/*20^*/	{name:"Thorns", values:[["thorns",250,290,330,370,410,450,490,530,570,610,650,690,730,770,810,850,890,930,970,1010,1050,1090,1130,1170,1210,1250,1290,1330,1370,1410,1450,1490,1530,1570,1610,1650,1690,1730,1770,1810,1850,1890,1930,1970,2010,2050,2090,2130,2170,2210,2250,2290,2330,2370,2410,2450,2490,2530]]},

// TODO: Should these be added the same as item auras, or implemented differently?
/**/	{name:"Inner Sight", values:[["enemy defense",-40,-65,-90,-115,-140,-165,-190,-215,-260,-305,-350,-395,-440,-485,-530,-575,-635,-695,-755,-815,-875,-935,-1015,-1095,-1175,-1255,-1335,-1415,-1515,-1615,-1715,-1815,-1915,-2015,-2115,-2215,-2315,-2415,-2515,-2615,-2715,-2815,-2915,-3015,-3115,-3215,-3315,-3415,-3515,-3615,-3715,-3815,-3915,-4015,-4115,-4215,-4315,-4415,-4515,-4615], ["radius",6,6.6,7.3,8,8.6,9.3,10,10.6,11.3,12,12.6,13.3,14,14.6,15.3,16,16.6,17.3,18,18.6,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3,19.3]]},
/**/	{name:"Frigerate", values:[["damage min",4,5,6,7,8,9,10,11,14,17,20,23,26,29,32,35,41,47,53,59,65,71,80,89,98,107,116,125,141,157,173,189,205,221,237,253,269,285,301,317,333,349,365,381,397,413,429,445,461,477,493,509,525,541,557,573,589,605,621,637], ["damage max",6,8,10,12,14,16,18,20,25,30,35,40,45,50,55,60,69,78,87,96,105,114,129,144,159,174,189,204,228,252,276,300,324,348,372,396,420,444,468,492,516,540,564,588,612,636,660,684,708,732,756,780,804,828,852,876,900,924,948,972], ["enemy defense",-8,-10,-12,-13,-15,-16,-16,-17,-18,-18,-19,-19,-20,-20,-20,-21,-21,-21,-21,-21,-22,-22,-22,-22,-22,-22,-23,-23,-23,-23,-23,-23,-23,-23,-23,-23,-23,-24,-24,-24,-24,-24,-24,-24,-24,-24,-24,-24,-24,-24,-24,-24,-24,-24,-24,-24,-24,-24,-24,-25], ["mana cost",25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84]]},
/**/	{name:"Enflame", values:[["duration",320,322,324,326,328,330,332,334,336,338,340,342,344,346,348,350,352,354,356,358,360,362,364,366,368,370,372,374,376,378,380,382,384,386,388,390,392,394,396,398,400,402,404,406,408,410,412,414,416,418,420,422,424,426,428,430,432,434,436,438], ["fire min",9,13,17,21,25,29,32,37,45,53,61,69,77,85,93,101,121,141,161,180,201,221,250,279,307,337,365,395,429,463,496,530,564,598,632,667,701,735,769,803,837,871,904,938,972,1006,1040,1074,1108,1142,1176,1210,1244,1278,1312,1346,1379,1413,1447,1481], ["fire max",12,18,23,29,36,42,47,54,63,73,84,94,104,113,123,134,160,186,212,238,264,290,320,350,379,410,439,470,504,539,575,610,645,679,714,750,785,820,854,889,925,960,995,1029,1064,1100,1135,1170,1204,1239,1275,1310,1345,1379,1414,1450,1485,1520,1554,1589], ["attack rating",50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175,180,185,190,195,200,205,210,215,220,225,230,235,240,245,250,255,260,265,270,275,280,285,290,295,300,305,310,315,320,325,330,335,340,345], ["mana cost",25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84]]},
	// Righteous Fire (Todesfaelle Flamme)
	// Lifted Spirit (Wisp Projector)
];

// getAuraData - gets a list of stats corresponding to the aura
//	aura: name of the aura
//	lvl: level of the aura
// result: indexed array of stats granted and their values
// ---------------------------------
function getAuraData(aura, lvl) {
	var result = {};
	var a = 0;
	for (let u = 0; u < auras.length; u++) {
		if (auras[u].name == aura) { a = u }
	}
	
    // Defensive Auras
	if (aura == "Prayer") {
		result.life_regen = 1;
		result.life_replenish = auras[a].values[0][lvl]; }
	else if (aura == "Resist Fire") {
		result.fRes = auras[a].values[1][lvl];
		result.fRes_max = auras[a].values[2][lvl]; }
	else if (aura == "Defiance") {
		result.defense_bonus = auras[a].values[0][lvl]; }
	else if (aura == "Resist Cold") {
		result.cRes = auras[a].values[1][lvl];
		result.cRes_max = auras[a].values[2][lvl]; }
	else if (aura == "Cleansing") {
		//result.life_replenish = ~~auras[0].data.values[0][auras[0].level];
		result.poison_length_reduced = auras[a].values[1][lvl];
		result.curse_length_reduced = auras[a].values[1][lvl]; }
	else if (aura == "Resist Lightning") {
		result.lRes = auras[a].values[1][lvl];
		result.lRes_max = auras[a].values[2][lvl]; }
	else if (aura == "Vigor") {
		result.velocity = auras[a].values[0][lvl];
		result.max_stamina = auras[a].values[1][lvl];
		result.heal_stam = auras[a].values[2][lvl]; }
	else if (aura == "Meditation") {
		//result.life_replenish = ~~auras[0].data.values[0][auras[0].level];
		result.mana_regen = auras[a].values[1][lvl]; }
	else if (aura == "Redemption") {
		//result. = auras[a].values[0][lvl];		// redeem soul
		//result. = auras[a].values[1][lvl];		// life & mana recovered
	}
	else if (aura == "Salvation") {
		result.fDamage = auras[a].values[0][lvl];
		result.cDamage = auras[a].values[0][lvl];
		result.lDamage = auras[a].values[0][lvl];
		result.all_res = auras[a].values[1][lvl]; }
	else if (aura == "Thorns") {
		result.thorns_reflect = auras[a].values[0][lvl]; }
    // Offensive Auras
	else if (aura == "Might") {
		result.damage_bonus = auras[a].values[0][lvl]; }
	else if (aura == "Holy Fire") {
		result.fDamage_min = auras[a].values[0][lvl];
		result.fDamage_max = auras[a].values[1][lvl]; }
	else if (aura == "Precision") {
		result.pierce = auras[a].values[0][lvl];
		result.cstrike = auras[a].values[2][lvl];
		result.ar_bonus = auras[a].values[3][lvl]; }
	else if (aura == "Blessed Aim") {
		result.ar_bonus = auras[a].values[2][lvl]; }
	else if (aura == "Concentration") {
		result.ar_bonus = auras[a].values[0][lvl];
		result.damage_bonus = auras[a].values[1][lvl];
		result.hammer_bonus = auras[a].values[2][lvl]; }
	else if (aura == "Holy Freeze") {
		result.cDamage_min = auras[a].values[0][lvl];
		result.cDamage_max = auras[a].values[1][lvl];
		result.slow_enemies = auras[a].values[2][lvl]; }
	else if (aura == "Holy Shock") {
		result.lDamage_min = auras[a].values[0][lvl];
		result.lDamage_max = auras[a].values[1][lvl];
	//	result.lDamage_max_aura = auras[a].values[2][lvl];
	//	result.lDamage_max_aura = auras[a].values[3][lvl];
	}
	else if (aura == "Sanctuary") {
		result.damage_vs_undead = auras[a].values[0][lvl]; }
	else if (aura == "Fanaticism") {
		result.damage_bonus = auras[a].values[1][lvl];
		result.ias = auras[a].values[2][lvl];
		result.ar_bonus = auras[a].values[3][lvl]; }
	else if (aura == "Conviction") {
		result.enemy_defense = auras[a].values[0][lvl];
		result.enemy_fRes = auras[a].values[1][lvl];
		result.enemy_cRes = auras[a].values[1][lvl];
		result.enemy_lRes = auras[a].values[1][lvl];
		result.enemy_pRes = auras[a].values[1][lvl]; }
    // Others
	else if (aura == "Inner Sight") {
		result.enemy_defense = skills_all["amazon"][10].data.values[0][lvl]; }
	else if (aura == "Frigerate") {
		result.cDamage_min = auras[a].values[0][lvl];
		result.cDamage_max = auras[a].values[1][lvl];
		result.enemy_defense = auras[a].values[2][lvl]; }
	else if (aura == "Enflame") {
		result.fDamage_min = auras[a].values[1][lvl];
		result.fDamage_max = auras[a].values[2][lvl];
		result.ar_bonus = auras[a].values[3][lvl]; }
	else if (aura == "Righteous Fire") {
		//similar to holy fire?		TODO: calculate
		result.light_radius = 0; }
	else if (aura == "Lifted Spirit") {
		// wisp				TODO: calculate
		result.light_radius = 0; }
	
	return result;
};

var equipment = {
    helm: [
{name:"Helm"},
{only:"barbarian", name:"Arreat's Face", req_level:42, e_def:200, skills_barbarian:2, fhr:30, ar_bonus:20, life_leech:6, all_res:30, strength:20, dexterity:20, skills_combat_barbarian:2, base:"Slayer Guard"},
{only:"barbarian", name:"Wolfhowl", req_level:79, e_def:150, skills_warcries:3, oskill_Lycanthropy:6, oskill_Werewolf:6, oskill_Feral_Rage:6, strength:15, dexterity:15, vitality:15, charges_summon_dire_wolf:15, base:"Fury Visor"},
{only:"barbarian", name:"Demonhorn's Edge", req_level:61, e_def:160, ias:10, life_leech:6, thorns:77, skills_warcries:3, skills_masteries:3, skills_combat_barbarian:3, base:"Destroyer Helm"},
{only:"barbarian", name:"Halaberd's Reign", req_level:77, e_def:170, life_replenish:23, fhr:20, skills_barbarian:2, skills_masteries:1, skill_Battle_Command:2, skill_Battle_Orders:2},
{only:"barbarian", set_IK:1, name:"Immortal King's Will", req_level:47, defense:125, light_radius:4, gf:37, mf:40, skills_warcries:2, sockets:2, base:"Avenger Guard", set_bonuses:["set_IK",{},{},{},{},{},{}]},
{only:"druid", name:"Jalal's Mane", req_level:42, e_def:200, fhr:30, ar_bonus:20, skills_druid:2, all_res:30, mana_per_kill:5, strength:20, energy:20, skills_shapeshifting:2, base:"Totemic Mask"},
{only:"druid", name:"Cerebus' Bite", req_level:63, e_def:140, ar_bonus:120, life_leech:10, owounds:33, skills_shapeshifting:4, skill_Feral_Rage:2, base:"Blood Spirit"},
{only:"druid", name:"Spirit Keeper", req_level:67, e_def:190, skills_druid:2, fhr:20, pRes_max:10, fRes:40, lAbsorb_flat:14, cAbsorb:25, base:"Earth Spirit"},
{only:"druid", name:"Ravenlore", req_level:74, e_def:150, energy:30, enemy_fRes:-20, all_res:25, skills_elemental:3, skill_Raven:7, base:"Sky Spirit"},
{only:"druid", set_Ald:1, name:"Aldur's Stony Gaze", req_level:36, defense:90, fhr:25, mana_regen:17, cRes:50, light_radius:5, sockets:2, base:"Hunter's Guise", set_bonuses:["set_Ald",{},{energy:15},{energy:15},{energy:15}]},
{only:"amazon", rarity:"magic", name:"Athlete's Diadem of Speed", req_level:64, frw:30, skills_passives:3},
{only:"assassin", rarity:"magic", name:"Kenshi's Diadem of Speed", req_level:64, frw:30, skills_martial:3},
{only:"assassin", rarity:"magic", name:"Shadow Diadem of Speed", req_level:64, frw:30, skills_shadow:3},
{only:"assassin", rarity:"magic", name:"Cunning Diadem of Speed", req_level:64, frw:30, skills_traps:3},
{only:"barbarian", rarity:"magic", name:"Echoing Carnage Helm of the Magus", req_level:64, fcr:20, skills_warcries:3, skill_War_Cry:3, skill_Battle_Orders:3, skill_Find_Item:3},
{only:"barbarian", rarity:"magic", name:"Furious Carnage Helm of Speed", req_level:64, frw:30, skills_masteries:3, skill_Battle_Orders:3, skill_Increased_Speed:3, skill_Whirlwind:3},
{only:"barbarian", rarity:"magic", name:"Master's Carnage Helm of Speed", req_level:64, frw:30, skills_combat_barbarian:3, skill_Edged_Weapon_Mastery:3, skill_Frenzy:3, skill_Find_Item:3},
{only:"druid", rarity:"magic", name:"Gaea's Sun Spirit of the Magus", req_level:64, fcr:20, skills_elemental:3, skill_Hurricane:3, skill_Armageddon:3, skill_Tornado:3},
{only:"druid", rarity:"magic", name:"Communal Sun Spirit of Speed", req_level:64, frw:30, skills_shapeshifting:3, skill_Lycanthropy:3, skill_Werewolf:3, skill_Rabies:3},
{only:"druid", rarity:"magic", name:"Keeper's Sun Spirit of Speed", req_level:64, frw:30, skills_summoning_druid:3, skill_Summon_Grizzly:3, skill_Summon_Dire_Wolf:3, skill_Hurricane:3},
{only:"necromancer", rarity:"magic", name:"Golemlord's Diadem of the Magus", req_level:64, fcr:20, skills_summoning_necromancer:3},
{only:"necromancer", rarity:"magic", name:"Venomous Diadem of the Magus", req_level:64, fcr:20, skills_poisonBone:3},
{only:"necromancer", rarity:"magic", name:"Cursing Diadem of the Magus", req_level:64, fcr:20, skills_curses:3},
{only:"paladin", rarity:"magic", name:"Guardian's Diadem of Speed", req_level:64, frw:30, skills_defensive:3},
{only:"paladin", rarity:"magic", name:"Marshal's Diadem of Speed", req_level:64, frw:30, skills_offensive:3},
{only:"paladin", rarity:"magic", name:"Rose Branded Diadem of Speed", req_level:64, frw:30, skills_combat_paladin:3},
{only:"sorceress", rarity:"magic", name:"Glacial Diadem of the Magus", req_level:64, fcr:20, skills_cold:3},
{only:"sorceress", rarity:"magic", name:"Powered Diadem of the Magus", req_level:64, fcr:20, skills_lightning:3},
{only:"sorceress", rarity:"magic", name:"Volcanic Diadem of the Magus", req_level:64, fcr:20, skills_fire:3},
{limit:["barbarian","druid"], rw:1, name:"Delirium ­ ­ - ­ ­ Diadem", req_level:51, defense:261, vitality:10, gf:50, mf:25, all_skills:2, base:"Diadem"},	// also has other ctc effects, and Attract charges
{limit:["barbarian","druid"], rw:1, name:"Lore ­ ­ - ­ ­ War Hat", req_level:27, all_skills:1, energy:10, lRes:30, damage_reduced:7, mana_per_kill:2, light_radius:2, base:"War Hat"},
{limit:["barbarian","druid"], rw:1, name:"Radiance ­ ­ - ­ ­ Death Mask", req_level:27, e_def:75, missile_defense:30, vitality:10, energy:10, mana:33, damage_reduced:7, mDamage_reduced:3, damage_to_mana:15, light_radius:5, base:"Death Mask"},
{only:"barbarian", rw:1, name:"Delirium ­ ­ - ­ ­ Lion Helm", req_level:51, defense:261, vitality:10, gf:50, mf:25, all_skills:2, skill_War_Cry:3, skill_Grim_Ward:3, skill_Battle_Orders:3, base:"Lion Helm"},	// also has other ctc effects, and Attract charges
{only:"barbarian", rw:1, name:"Lore ­ ­ - ­ ­ Jawbone Visor", req_level:27, all_skills:1, energy:10, lRes:30, damage_reduced:7, mana_per_kill:2, light_radius:2, skill_Battle_Orders:3, skill_Shout:3, skill_Iron_Skin:3, base:"Jawbone Visor"},
{only:"barbarian", rw:1, name:"Radiance ­ ­ - ­ ­ Rage Mask", req_level:27, e_def:75, missile_defense:30, vitality:10, energy:10, mana:33, damage_reduced:7, mDamage_reduced:3, damage_to_mana:15, light_radius:5, skill_Battle_Orders:3, skill_Leap:1, skill_Shout:3, base:"Rage Mask"},
{only:"druid", rw:1, name:"Delirium ­ ­ - ­ ­ Griffon Headdress", req_level:51, defense:261, vitality:10, gf:50, mf:25, all_skills:2, skill_Oak_Sage:3, skill_Summon_Grizzly:3, skill_Summon_Dire_Wolf:3, base:"Griffon Headdress"},	// also has other ctc effects, and Attract charges
{only:"druid", rw:1, name:"Lore ­ ­ - ­ ­ Alpha Helm", req_level:27, all_skills:1, energy:10, lRes:30, damage_reduced:7, mana_per_kill:2, light_radius:2, skill_Summon_Spirit_Wolf:3, skill_Heart_of_Wolverine:3, skill_Raven:3, base:"Alpha Helm"},
{only:"druid", rw:1, name:"Radiance ­ ­ - ­ ­ Sacred Feathers", req_level:27, e_def:75, missile_defense:30, vitality:10, energy:10, mana:33, damage_reduced:7, mDamage_reduced:3, damage_to_mana:15, light_radius:5, skill_Cyclone_Armor:3, skill_Armageddon:3, skill_Hurricane:3, base:"Sacred Feathers"},
{rw:1, name:"Dream ­ ­ - ­ ­ Diadem", req_level:65, e_def:30, defense:220, fhr:30, vitality:10, mana_per_level:0.625, all_res:20, mf:25, max_life:5, base:"Diadem", aura:"Holy Shock", aura_lvl:13},	// 10% ctc level 15 Confuse when struck
{rw:1, name:"Nadir ­ ­ - ­ ­ Bone Helm", req_level:13, e_def:50, defense:10, missile_defense:30, strength:5, mana_per_kill:2, gf:-33, light_radius:-3, base:"Bone Helm"},	// level 13 Cloak of Shadows (9 charges)
{name:"Biggin's Bonnet", req_level:3, defense:14, e_damage:30, ar:30, mana:15, life:15, base:"Cap"},
{name:"Tarnhelm", req_level:15, all_skills:1, mf:50, gf:75, base:"Skull Cap"},
{name:"Coif of Glory", req_level:14, defense:10, thorns_lightning:7, blind_on_hit:1, lRes:15, missile_defense:100, base:"Helm"},
{name:"Duskdeep", req_level:17, defense:20, e_def:50, damage_reduced:7, all_res:15, damage_max:8, light_radius:-2, base:"Full Helm"},
{name:"Howltusk", req_level:25, e_def:80, damage_to_mana:35, mDamage_reduced:2, thorns:3, knockback:1, flee_on_hit:25, base:"Great Helm"},
{name:"The Face of Horror", req_level:20, defense:25, damage_vs_undead:50, flee_on_hit:50, all_res:10, strength:20, base:"Mask"},
{name:"Undead Crown", req_level:29, defense:40, e_def:60, damage_vs_undead:50, ar_vs_undead:100, half_freeze:1, life_leech:5, pRes:50, skill_Summon_Mastery:3, base:"Crown"},
{name:"Wormskull", req_level:21, skills_necromancer:1, pDamage_all:80, pDamage_duration:8, life_leech:5, pRes:25, mana:10, base:"Bone Helm"},
{name:"Peasant Crown", req_level:28, e_def:100, all_skills:1, frw:15, life_replenish:12, energy:20, vitality:20, base:"War Hat"},
{name:"Rockstopper", req_level:31, e_def:220, pdr:10, fhr:30, cRes:40, fRes:50, lRes:40, vitality:15, base:"Sallet"},
{name:"Stealskull", req_level:35, e_def:400, ias:10, fhr:10, life_leech:5, mana_leech:5, mf:50, base:"Casque"},
{name:"Darksight Helm", req_level:38, defense_per_level:2, cbf:1, fRes:40, mana_leech:5, light_radius:-4, base:"Basinet"},	// 6% ctc level 3 Dim Vision when struck, level 5 Cloak of Shadows (30 charges)
{name:"Valkyrie Wing", req_level:44, e_def:200, skills_amazon:2, frw:20, fhr:20, mana_per_kill:4, base:"Winged Helm"},
{name:"Blackhorn's Face", req_level:41, d_def:220, slows_target:20, thorns_lightning:25, pmh:1, lAbsorb_flat:20, lRes:15, base:"Death Mask"},
{name:"Crown of Thieves", req_level:49, e_def:200, life_leech:12, fRes:33, mana:35, life:50, dexterity:25, gf:100, base:"Grand Crown"},
{name:"Vampire Gaze", req_level:41, e_def:100, life_leech:8, mana_leech:8, pdr:20, slower_stam_drain:15, cDamage_min:6, cDamage_max:22, mDamage_reduced:15, base:"Grim Helm"},
{name:"Harlequin Crest (Shako)", req_level:62, mf:50, all_skills:2, life_per_level:1.5, mana_per_level:1.5, pdr:10, all_attributes:2, base:"Shako"},
{name:"Steel Shade", req_level:62, e_def:130, ias:15, life_replenish:18, mana_leech:8, fAbsorb_flat:11, life_per_hit:89, base:"Armet", pod_changes:1},
{name:"Veil of Steel", req_level:73, defense:140, e_def:60, all_res:50, strength:15, vitality:15, light_radius:-4, base:"Spired Helm"},
{name:"Nightwing's Veil", req_level:67, e_def:120, all_skills:2, cDamage:15, dexterity:20, cAbsorb_flat:9, base:"Spired Helm"},
{name:"Andariel's Visage", req_level:83, e_def:150, all_skills:2, ias:20, life_leech:10, strength:30, fRes:-30, pRes:70, pRes_max:10, base:"Demonhead"},	// 15% ctc level 15 Poison Nova when struck, level 3 Venom (20 charges)
{name:"Crown of Ages", req_level:82, defense:150, e_def:50, all_skills:1, pdr:15, all_res:30, fhr:30, indestructible:1, ethereal:0, sockets:2, base:"Corona"},
{name:"Giant Skull", req_level:65, defense:320, cblow:10, knockback:1, strength:35, pierce:10, sockets:2, base:"Bone Visage", pod_changes:1},
{name:"Kira's Guardian", req_level:77, defense:120, fhr:20, cbf:1, all_res:70, base:"Tiara"},
{name:"Griffon's Eye", req_level:76, defense:200, all_skills:1, lDamage:15, fcr:25, enemy_lRes:-20, base:"Diadem"},
{set_TR:1, name:"Tal Rasha's Horadric Crest", req_level:66, defense:45, life_leech:10, mana_leech:10, all_res:15, mana:30, life:60, base:"Death Mask", set_bonuses:["set_TR",0,{},{},{},{}]},
{set_Gris:1, name:"Griswold's Valor", req_level:69, e_def:75, req:-40, e_def:75, all_res:5, mf:30, cAbsorb_flat_per_level:0.25, sockets:2, base:"Corona", set_bonuses:["set_Gris",{},{skills_offensive:2},{},{}]},
{set_Nat:1, name:"Natalya's Totem", req_level:59, defense:175, all_res:20, dexterity:30, strength:20, mDamage_reduced:3, base:"Grim Helm", set_bonuses:["set_Nat",{},{},{},{}]},
{set_TO:1, name:"Trang-Oul's Guise", req_level:65, defense:100, fhr:25, life_replenish:5, mana:150, thorns:20, base:"Bone Visage", set_bonuses:["set_TO",{},{},{},{},{}]},
{set_Mav:1, name:"M'avina's True Sight", req_level:64, defense:150, life_replenish:10, mana:25, ias:30, base:"Diadem", set_bonuses:["set_Mav",{},{all_skills:1},{ar_bonus:50},{all_res:25},{}]},
{set_Orphan:1, name:"Guillaume's Face", req_level:34, e_def:120, fhr:30, dstrike:15, cblow:35, strength:15, base:"Winged Helm", set_bonuses:["set_Orphan",{},{},{},{}]},
{set_Brethren:1, name:"Ondal's Almighty", req_level:69, defense:50, fhr:24, dexterity:15, strength:10, req:-40, base:"Spired Helm", set_bonuses:["set_Brethren",{},{},{},{}], pod_changes:1},	// 10% ctc level 3 Weaken on striking, Gain 50% Reduced Skill Cooldown For 4 Seconds On Striking (EFFECT)
{set_Naj:1, name:"Naj's Circlet", req_level:28, defense:75, fDamage_min:25, fDamage_max:35, strength:15, light_radius:5, base:"Circlet", set_bonuses:["set_Naj",{},{},{}], pod_changes:1},	// 12% ctc level 5 Chain Lightning when struck, 22% Chance to Reset Skill Cooldown on Kill
{set_Sazabi:1, name:"Sazabi's Mental Sheath", req_level:43, defense:100, lRes:20, fRes:20, all_skills:1, base:"Basinet", set_bonuses:["set_Sazabi",{},{},{},{}]},
{set_Cow:1, name:"Cow King's Horns", req_level:25, defense:75, half_freeze:1, thorns:10, damage_to_mana:35, base:"War Hat", set_bonuses:["set_Cow",{},{},{},{}]},
{set_Sander:1, name:"Sander's Paragon", req_level:25, defense_per_level:1, thorns:8, mf:35, base:"Cap", set_bonuses:["set_Sander",{},{},{},{}]},
{set_Hwanin:1, name:"Hwanin's Splendor", req_level:45, e_def:100, life_replenish:20, mDamage_reduced:10, cRes:37, base:"Grand Crown", set_bonuses:["set_Hwanin",{},{},{},{}]},
{set_Tancred:1, name:"Tancred's Skull", req_level:20, e_damage:10, ar:40, base:"Bone Helm", set_bonuses:["set_Tancred",{},{all_res:10},{},{},{}]},
{set_Milabrega:1, name:"Milabrega's Diadem", req_level:17, mana:15, life:15, base:"Crown", set_bonuses:["set_Milabrega",{},{cRes:40},{},{}]},
{set_Iratha:1, name:"Iratha's Coil", req_level:15, lRes:30, fRes:30, base:"Crown", set_bonuses:["set_Iratha",{},{defense_per_level:2},{},{}]},
{set_Arcanna:1, name:"Arcanna's Head", req_level:15, life_replenish:4, thorns:2, base:"Skull Cap", set_bonuses:["set_Arcanna",{},{defense_per_level:3},{lRes:15},{}]},
{set_Cathan:1, name:"Cathan's Visage", req_level:11, cRes:25, mana:20, base:"Mask", set_bonuses:["set_Cathan",{},{defense_per_level:2},{},{},{}]},
{set_Isenhart:1, name:"Isenhart's Horns", req_level:8, damage_reduced:2, dexterity:6, base:"Full Helm", set_bonuses:["set_Isenhart",{},{all_res:8},{},{}]},
{set_Sigon:1, name:"Sigon's Visor", req_level:6, defense:25, mana:30, base:"Great Helm", set_bonuses:["set_Sigon",{},{ar_per_level:8},{},{},{},{}]},
{set_Infernal:1, name:"Infernal Cranium", req_level:5, damage_to_mana:20, all_res:10, base:"Cap", set_bonuses:["set_Infernal",{},{defense_per_level:2},{}]},
{set_Berserker:1, name:"Berserker's Headgear", req_level:3, defense:15, fRes:25, base:"Helm", set_bonuses:["set_Berserker",{},{ar_per_level:8},{}]},
{rarity:"rare", name:"Speed Diadem", req_level:64, frw:30, fcr:20, strength:30, all_res:20, damage_bonus:30, skills_amazon:2, skills_assassin:2, skills_barbarian:2, skills_druid:2, skills_necromancer:2, skills_paladin:2, skills_sorceress:2, base:"Diadem"},	// check level requirement of affixes?
{only:"assassin", rarity:"crafted", name:"Psychic Caster Demonhead", req_level:55, mana_regen:10, mana:20, mana_leech:4, skills_shadow:2, mana_per_level:0.75, life:60, e_def:200, fhr:10, ar_bonus:5, light_radius:5, base:"Demonhead"},
{only:"assassin", rarity:"crafted", name:"Sensei's Blood Armet", req_level:51, dstrike:10, life:80, life_leech:4, skills_martial:2, ar_bonus_per_level:1, e_def:200, fhr:10, ar_bonus:5, light_radius:5, base:"Armet"},
{only:"barbarian", rarity:"crafted", name:"Veteran's Blood Armet", req_level:51, dstrike:10, life:80, life_leech:4, skills_combat_barbarian:2, ar_bonus_per_level:1, e_def:200, fhr:10, ar_bonus:5, light_radius:5, base:"Armet"},
	],
    armor: [
{name:"Armor"},
{rw:1, name:"Bramble ­ ­ - ­ ­ Archon Plate", req_level:63, defense:300, fhr:50, pDamage:50, max_mana:5, mana_regen:15, cRes_max:5, fRes:30, pRes:100, life_per_kill:13, base:"Archon Plate", aura:"Thorns", aura_level:21},	// level 13 Spirit of Barbs (33 charges)
{rw:1, name:"Chains of Honor ­ ­ - ­ ­ Archon Plate", req_level:65, e_def:70, all_skills:2, strength:20, life_leech:8, pdr:8, all_res:65, life_replenish:7, damage_vs_demons:200, damage_vs_undead:100, mf:25, base:"Archon Plate"},
{rw:1, name:"Enigma ­ ­ - ­ ­ Archon Plate", req_level:65, defense:775, all_skills:2, frw:45, strength_per_level:0.75, max_life:5, pdr:8, life_per_kill:14, damage_to_mana:15, mf_per_level:1, oskill_Warp:1, base:"Archon Plate", pod_changes:1},
{rw:1, name:"Fortitude ­ ­ - ­ ­ Archon Plate", req_level:63, defense:15, e_def:200, fcr:25, life_per_level:1.5, life_replenish:7, lRes_max:5, all_res:30, damage_to_mana:12, light_radius:1, damage_reduced:7, damage_bonus:300, base:"Archon Plate"},
{rw:1, name:"Dragon ­ ­ - ­ ­ Archon Plate", req_level:61, defense:360, missile_defense:230, all_attributes:5, strength_per_level:0.375, lRes_max:5, damage_reduced:7, max_mana:5, base:"Archon Plate", aura:"Holy Fire", aura_lvl:14},	// 20% ctc level 18 Venom when struck, 12% ctc level 15 Hydra on striking
{rw:1, name:"Rain ­ ­ - ­ ­ Wyrmhide", req_level:63, skills_druid:2, mana:150, lRes:30, mDamage_reduced:7, damage_to_mana:15, base:"Wyrmhide", pod_changes:1},	// also has 5% ctc level 15 Cyclone Armor when struck (EFFECT), extra Grizzly ...TODO: add effect
{rw:1, name:"Principle ­ ­ - ­ ­ Wyrmhide", req_level:55, skills_paladin:2, damage_vs_undead:50, life:150, slower_stam_drain:15, pRes_max:5, fRes:30, base:"Wyrmhide"},	// 100% ctc level 5 Holy Bolt on striking
{rw:1, name:"Prudence ­ ­ - ­ ­ Dusk Shroud", req_level:49, fhr:25, e_def:170, all_res:35, damage_reduced:3, mDamage_reduced:17, mana_per_kill:2, light_radius:1, autorepair:1, base:"Dusk Shroud"},
{rw:1, name:"Bone ­ ­ - ­ ­ Wyrmhide", req_level:47, skills_necromancer:2, mana:150, all_res:30, damage_reduced:7, base:"Wyrmhide", pod_changes:1},	// 15% ctc level 3 Terror when struck, extra Fire Golem
{rw:1, name:"Gloom ­ ­ - ­ ­ Scarab Husk", req_level:47, fhr:10, e_def:260, strength:10, all_res:45, half_freeze:1, damage_to_mana:5, light_radius:-3, base:"Scarab Husk"},	// 15% ctc level 3 Dim Vision when struck
{rw:1, name:"Stone ­ ­ - ­ ­ Scarab Husk", req_level:47, fhr:60, e_def:290, missile_defense:300, strength:16, vitality:16, energy:10, all_res:15, base:"Scarab Husk"},	// level 16 Molten Boulder (80 charges), level 16 Clay Golem (16 charges)
{rw:1, name:"Duress ­ ­ - ­ ­ Scarab Husk", req_level:47, fhr:40, e_damage:20, cDamage_min:37, cDamage_max:133, cblow:15, owounds:33, e_def:200, slower_stam_drain:-20, cRes:30, all_res:15, base:"Scarab Husk"},
{rw:1, name:"Enlightenment ­ ­ - ­ ­ Wyrmhide", req_level:45, skills_sorceress:2, skill_Warmth:1, e_def:30, fRes:30, damage_reduced:7, base:"Wyrmhide"},	// 5% ctc level 15 Blaze when struck, 5% ctc level 15 Fire Ball on striking
{rw:1, name:"Wealth ­ ­ - ­ ­ Dusk Shroud", req_level:43, dexterity:10, mana_per_kill:2, gf:300, mf:100, base:"Dusk Shroud"},
{rw:1, name:"Treachery ­ ­ - ­ ­ Wyrmhide", req_level:43, skills_assassin:2, ias:45, fhr:20, cRes:30, gf:50, base:"Wyrmhide"},	// 5% ctc level 15 Fade when struck, 25% ctc level 15 Venom on striking
{rw:1, name:"Lionheart ­ ­ - ­ ­ Dusk Shroud", req_level:41, e_damage:20, strength:25, dexterity:15, vitality:20, energy:10, life:50, all_res:30, req:-30, base:"Dusk Shroud"},
{rw:1, name:"Smoke ­ ­ - ­ ­ Dusk Shroud", req_level:37, fhr:20, e_defense:75, missile_defense:280, energy:10, all_res:50, light_radius:-1, base:"Dusk Shroud"},	// level 6 Weaken (18 charges)
{rw:1, name:"Myth ­ ­ - ­ ­ Mage Plate", req_level:25, skills_barbarian:2, missile_defense:30, life_replenish:10, thorns:14, req:-15, base:"Mage Plate"},	// 3% ctc level 1 Howl when struck, 10% ctc level 1 Taunt on striking
{rw:1, name:"Peace ­ ­ - ­ ­ Mage Plate", req_level:29, skills_amazon:2, oskill_Lethal_Strike:2, fhr:20, cRes:30, thorns:14, base:"Mage Plate", pod_changes:1},	// extra Valkyrie
{rw:1, name:"Stealth ­ ­ - ­ ­ Light Plate", req_level:17, frw:25, fcr:25, fhr:25, dexterity:6, mana_regen:15, stamina:15, pRes:30, mDamage_reduced:3, base:"Light Plate"},
{name:"Greyform", defense:20, life_leech:5, mDamage_reduced:3, cRes:20, fRes:20, dexterity:10, base:"Quilted Armor"},
{name:"Blinkbat's Form", req_level:12, defense:25, missile_defense:50, frw:10, fhr:40, fDamage_min:3, fDamage_max:6, base:"Leather Armor"},
{name:"The Centurion", req_level:14, defense:30, life_replenish:5, ar:50, mana:15, stamina:15, life:15, slower_stam_drain:25, damage_reduced:2, base:"Hard Leather Armor"},
{name:"Twitchthroe", req_level:16, defense:25, ibc:25, fhr:20, ias:20, dexterity:10, strength:10, base:"Studded Leather"},
{name:"Darkglow", req_level:14, e_def:100, pRes_max:5, cRes_max:5, lRes_max:5, fRes_max:5, missile_defense:50, ar:20, all_res:10, light_radius:3, base:"Ring Mail"},
{name:"Hawkmail", req_level:15, e_def:100, frw:10, cRes_max:15, cRes:15, cbf:1, base:"Scale Mail"},
{name:"Venom Ward", req_level:20, e_def:100, light_radius:2, pRes_max:15, pRes:90, poison_length_reduced:50, base:"Breast Plate"},
{name:"Sparking Mail", req_level:17, e_def:85, lRes:30, thorns_lightning:14, lDamage_min:1, lDamage_max:20, base:"Chain Mail"},
{name:"Iceblink", req_level:22, e_def:80, freezes_target:1, cRes:30, mDamage_reduced:1, light_radius:4, base:"Splint Mail"},
{name:"Boneflesh", req_level:26, e_def:120, life_leech:5, owounds:25, ar:35, oskill_Summon_Dire_Wolf:3, base:"Plate Mail", pod_changes:1},
{name:"Rockfleece", req_level:28, e_def:130, req:-10, pdr:10, strength:5, damage_reduced:5, base:"Field Plate"},
{name:"Rattlecage", req_level:29, defense:200, cblow:25, flee_on_hit:40, ar:45, base:"Gothic Plate"},
{name:"Heavenly Garb", req_level:29, e_def:100, mana_regen:25, all_res:10, energy:15, damage_vs_undead:50, ar_vs_undead:100, base:"Light Plate"},
{name:"Goldskin", req_level:28, e_def:150, light_radius:2, all_res:35, thorns:10, gf:100, base:"Full Plate"},
{name:"Silks of the Victor", req_level:28, e_def:120, all_skills:1, mana_leech:5, light_radius:2, base:"Ancient Armor"},
{name:"The Spirit Shroud", req_level:28, e_def:150, cbf:1, all_skills:1, life_replenish:10, mDamage_reduced:11, base:"Ghost Armor"},
{name:"Skin of the Vipermagi", req_level:29, e_def:120, all_skills:1, fcr:30, mDamage_reduced:13, all_res:35, base:"Serpentskin Armor"},
{name:"Skin of the Flayed One", req_level:31, e_def:190, autorepair:1, life_leech:7, life_replenish:25, thorns:15, base:"Demonhide Armor"},
{name:"Iron Pelt", req_level:33, e_def:100, defense_per_level:3, damage_reduced:20, mDamage_reduced:16, life:25, base:"Trellised Armor"},
{name:"Spirit Forge", req_level:35, e_def:160, life_per_level:1.25, fRes:5, fDamage_min:20, fDamage_max:65, strength:15, light_radius:4, sockets:2, base:"Linked Mail"},
{name:"Crow Caw", req_level:37, e_def:180, ias:15, fhr:15, owounds:35, dexterity:15, base:"Tigulated Mail"},
{name:"Shaftstop", req_level:38, defense:220, velocity:-5, pdr:30, missile_defense:250, life:60, base:"Mesh Armor"},
{name:"Duriel's Shell", req_level:41, e_def:200, defense_per_level:1.25, life_per_level:1, fRes:20, lRes:20, pRes:20, cRes:50, cbf:1, strength:15, base:"Cuirass"},	// defense per level does not include 200% enhanced defense
{name:"Skullder's Ire", req_level:42, e_def:200, autorepair:1, mf_per_level:1.25, all_skills:1, mDamage_reduced:10, base:"Russet Armor"},
{name:"Guardian Angel", req_level:45, e_def:200, velocity:-10, ibc:20, fbr:30, light_radius:4, all_res:15, fRes_max:7, cRes_max:7, lRes_max:7, pRes_max:7, ar_per_level:2.5, skills_paladin:1, base:"Templar Coat", pod_changes:1},
{name:"Toothrow", req_level:48, e_def:220, defense:60, owounds:40, fRes:15, strength:10, thorns:40, base:"Sharktooth Armor"},
{name:"Atma's Wail", req_level:51, e_def:160, defense_per_level:2, fhr:30, life_replenish:10, max_mana:15, dexterity:15, mf:20, base:"Embossed Plate"},
{name:"Que-Hegan's Wisdom", req_level:51, e_def:160, all_skills:1, mana_per_kill:3, fcr:20, fhr:20, mDamage_reduced:10, energy:15, base:"Mage Plate"},
{name:"Black Hades", req_level:53, e_def:200, damage_vs_demons:60, ar_vs_demons:250, half_freeze:1, light_radius:-2, sockets:3, base:"Chaos Armor"},
{name:"Corpsemourn", req_level:55, e_def:180, velocity:-5, fDamage_min:12, fDamage_max:36, strength:8, vitality:10, cRes:35, bonus_corpse_explosion:5, base:"Ornate Plate", pod_changes:1},	// level 5 Desecrate (50 charges), implement corpse explosion bonus
{name:"Ormus' Robes", req_level:75, defense:20, fcr:20, cDamage:15, fDamage:15, lDamage:15, mana_regen:15, skill_frozen_orb:3, base:"Dusk Shroud"},	// TODO: many possible skills
{name:"The Gladiator's Bane", req_level:85, defense:50, e_def:200, cbf:1, fhr:30, poison_length_reduced:50, thorns:20, damage_reduced:20, mDamage_reduced:20, base:"Wire Fleece"},
{name:"Arkaine's Valor", req_level:85, e_def:180, velocity:-5, all_skills:2, fhr:30, damage_reduced:15, vitality_per_level:0.5, base:"Balrog Skin"},
{name:"Leviathan", req_level:65, defense:150, e_def:200, indestructible:1, strength:50, pdr:25, ethereal:0, base:"Kraken Shell"},
{name:"Steel Carapace", req_level:66, e_def:220, mana_regen:15, fhr:20, cRes:60, damage_reduced:14, autorepair:1, base:"Shadow Plate"},	// 8% ctc level 6 Iron Maiden when struck
{name:"Templar's Might", req_level:74, e_def:220, velocity:-5, missile_defense:300, strength:15, vitality:15, fhr:20, stamina:50, skills_offensive:2, base:"Sacred Armor"},
{name:"Tyrael's Might", req_level:84, e_def:150, velocity:-5, frw:20, damage_vs_demons:100, strength:30, all_res:30, cbf:1, cdr:10, peace:1, req:-100, ethereal:0, base:"Sacred Armor", pod_changes:1},
{set_IK:1, name:"Immortal King's Soul Cage", req_level:76, defense:400, velocity:-5, pRes:50, skills_combat_barbarian:2, base:"Sacred Armor", set_bonuses:["set_IK",{},{fhr:25},{cRes:40},{fRes:40},{lRes:40},{defense:300}]},	// +50% Enhanced Defense ~= 300 defense (set bonus for 6 items)
{set_TR:1, name:"Tal Rasha's Guardianship", req_level:71, defense:400, velocity:-5, mDamage_reduced:15, cRes:40, lRes:40, fRes:40, mf:88, req:-60, base:"Lacquered Plate", set_bonuses:["set_TR",0,{fcr:10},{},{},{}]},
{set_Mav:1, name:"M'avina's Embrace", req_level:70, defense:350, velocity:-5, defense_per_level:4, skills_passives:2, req:-30, base:"Kraken Shell", set_bonuses:["set_Mav",{},{},{fhr:30},{},{}], pod_changes:1},	// +40% to Freezing Arrow Radius
{set_Ald:1, name:"Aldur's Deception", req_level:76, defense:300, velocity:-10, req:-50, lRes:50, dexterity:15, strength:20, skills_elemental:1, skills_shapeshifting:1, base:"Shadow Plate", set_bonuses:["set_Ald",{},{vitality:15},{vitality:15},{vitality:15}]},
{set_TO:1, name:"Trang-Oul's Scales", req_level:49, e_def:150, velocity:-10, e_def:150, req:-40, frw:40, pRes:40, missile_defense:100, skills_summoning_necromancer:2, base:"Chaos Armor", set_bonuses:["set_TO",{},{},{lRes:50},{},{pdr:25}]},
{set_Gris:1, name:"Griswold's Heart", req_level:45, defense:500, velocity:-5, req:-40, strength:2, skills_defensive:2, sockets:3, base:"Ornate Plate", set_bonuses:["set_Gris",{},{},{},{}]},
{set_Nat:1, name:"Natalya's Shadow", req_level:73, defense:225, velocity:-10, life_per_level:1, poison_length_reduced:75, pRes:25, skills_shadow:2, sockets:3, base:"Loricated Mail", set_bonuses:["set_Nat",{},{},{},{}]},
{set_Naj:1, name:"Naj's Light Plate", req_level:71, defense:300, velocity:-10, all_skills:1, damage_to_mana:45, all_res:25, life:65, req:-60, base:"Hellforge Plate", set_bonuses:["set_Naj",{},{},{}]},
{set_Brethren:1, name:"Haemosu's Adamant", req_level:44, defense:500, missile_defense:35, melee_defense:40, req:-20, life:75, base:"Cuirass", set_bonuses:["set_Brethren",{},{},{},{}]},
{set_Disciple:1, name:"Dark Adherent", req_level:49, defense:415, fRes:24, pDamage_min:24, pDamage_max:34, pDamage_duration:2, base:"Dusk Shroud", set_bonuses:["set_Disciple",{},{},{},{},{}], pod_changes:1},	// 25% ctc level 3 Nova when struck
{set_Sazabi:1, name:"Sazabi's Ghost Liberator", req_level:67, defense:400, fhr:30, ar_vs_demons:300, strength:25, life:75, base:"Balrog Skin", set_bonuses:["set_Sazabi",{},{},{},{}]},
{set_Cow:1, name:"Cow King's Hide", req_level:18, e_def:60, all_res:18, life:30, base:"Studded Leather", set_bonuses:["set_Cow",{},{},{},{}]},	//18% ctc level 5 Chain Lightning when struck
{set_Hwanin:1, name:"Hwanin's Refuge", req_level:30, defense:200, pRes:27, life:100, base:"Tigulated Mail", set_bonuses:["set_Hwanin",{},{},{},{}]},	// 10% ctc level 10 Static Field when struck
{set_Tancred:1, name:"Tancred's Spine", req_level:20, life:40, strength:15, base:"Full Plate", set_bonuses:["set_Tancred",{},{defense_per_level:2},{},{},{}]},
{set_Milabrega:1, name:"Milabrega's Robe", req_level:17, damage_reduced:2, thorns:3, base:"Ancient Armor", set_bonuses:["set_Milabrega",{},{e_def:100},{},{}]},
{set_Arcanna:1, name:"Arcanna's Flesh", req_level:15, light_radius:2, damage_reduced:2, base:"Light Plate", set_bonuses:["set_Arcanna",{},{defense:100},{energy:10},{}]},
{set_Vidala:1, name:"Vidala's Ambush", req_level:14, defense:50, dexterity:11, base:"Leather Armor", set_bonuses:["set_Vidala",{},{fRes:24},{defense_per_level:2.5},{}]},
{set_Angelic:1, name:"Angelic Mantle", req_level:12, e_def:40, damage_reduced:3, base:"Ring Mail", set_bonuses:["set_Angelic",{},{defense:150},{fRes:50},{}]},
{set_Cathan:1, name:"Cathan's Mesh", req_level:11, defense:15, req:-50, base:"Chain Mail", set_bonuses:["set_Cathan",{},{thorns:5},{},{},{}]},
{set_Isenhart:1, name:"Isenhart's Case", req_level:8, defense:40, mDamage_reduced:2, base:"Breast Plate", set_bonuses:["set_Isenhart",{},{defense_per_level:2},{},{}]},
{set_Sigon:1, name:"Sigon's Shelter", req_level:6, e_def:25, velocity:-5, e_def:25, lRes:30, base:"Gothic Plate", set_bonuses:["set_Sigon",{},{thorns:20},{},{},{},{}]},
{set_Berserker:1, name:"Berserker's Hauberk", req_level:3, skills_barbarian:1, mDamage_reduced:2, velocity:-5, base:"Splint Mail", set_bonuses:["set_Berserker",{},{defense_per_level:3},{}]},
{set_Arctic:1, name:"Arctic Furs", req_level:2, e_def:325, all_res:10, base:"Quilted Armor", set_bonuses:["set_Arctic",{},{defense_per_level:3},{cRes:15},{}]},
	],
    gloves: [
{name:"Gloves"},
{only:"amazon", rarity:"magic", name:"Lancer's Mitts of Quickness", req_level:42, skills_javelins:3, ias:20, base:"Bramble Mitts"},
{only:"amazon", rarity:"magic", name:"Athlete's Mitts of Quickness", req_level:42, skills_passives:3, ias:20, base:"Bramble Mitts"},
{only:"amazon", rarity:"magic", name:"Archer's Mitts of Quickness", req_level:42, skills_bows:3, ias:20, base:"Bramble Mitts"},
{only:"assassin", rarity:"magic", name:"Kenshi's Mitts of Quickness", req_level:42, skills_martial:3, ias:20, base:"Bramble Mitts"},
{name:"The Hand of Broc", req_level:5, defense:10, e_def:20, life_leech:3, mana_leech:3, pRes:10, mana:20, base:"Leather Gloves"},
{name:"Bloodfist", req_level:9, defense:10, e_def:20, ias:10, fhr:30, life:40, damage_min:5, base:"Heavy Gloves"},
{name:"Chance Guards", req_level:15, defense:15, e_def:30, ar:25, mf:40, gf:200, light_radius:2, base:"Chain Gloves"},
{name:"Magefist", req_level:23, defense:10, e_def:30, skills_fire_all:1, fcr:20, mana_regen:25, fDamage_min:1, fDamage_max:6, base:"Light Gauntlets"},
{name:"Frostburn", req_level:29, defense:30, e_def:20, max_mana:35, damage_bonus:5, cDamage_min:6, cDamage_max:12, base:"Gauntlets", pod_changes:1},
{name:"Venom Grip", req_level:29, defense:25, e_def:160, cblow:5, pDamage_all:60, pDamage_duration:4, life_leech:5, pRes_max:5, pRes:30, base:"Demonhide Gloves"},
{name:"Gravepalm", req_level:32, e_def:180, damage_vs_undead:200, ar_vs_undead:200, energy:10, strength:10, base:"Sharkskin Gloves"},
{name:"Ghoulhide", req_level:36, e_def:190, ar_vs_undead_per_level:8, damage_vs_undead_per_level:2, mana_leech:5, life:20, base:"Heavy Bracers"},
{name:"Lava Gout", req_level:42, e_def:200, half_freeze:1, fDamage_min:13, fDamage_max:46, ias:20, fRes:24, oskill_Enflame:10, base:"Battle Gauntlets", pod_changes:1},
{name:"Hellmouth", req_level:47, e_def:200, fAbsorb_flat:15, fDamage_min:15, fDamage_max:72, base:"War Gauntlets"},	// 4% ctc level 12 Firestorm on striking, 2% ctc level 4 Meteor on striking
{name:"Dracul's Grasp", req_level:76, e_def:120, strength:15, life_per_kill:10, owounds:25, life_leech:10, base:"Vampirebone Gloves"},	// 5% ctc level 10 Life Tap on striking	...TODO: add effect
{name:"Soul Drainer", req_level:74, e_def:120, pierce:7, life_leech:7, mana_leech:7, monster_defense_per_hit:-50, dexterity:7, base:"Vambraces", pod_changes:1},	// level 8 Weaken (34 charges)
{name:"Steelrend", req_level:70, defense:210, e_damage:60, cblow:10, strength:20, base:"Ogre Gauntlets"},
{set_IK:1, name:"Immortal King's Forge", req_level:30, defense:65, dexterity:20, strength:20, base:"War Gauntlets", set_bonuses:["set_IK",{},{ias:25},{defense:120},{life_leech:10},{mana_leech:10},{freezes_target:2}]},
{set_Mav:1, name:"M'avina's Icy Clutch", req_level:32, defense:50, cDamage_min:6, cDamage_max:18, half_freeze:1, gf:56, strength:10, dexterity:15, base:"Battle Gauntlets", set_bonuses:["set_Mav",{},{},{},{cDamage_min:131, cDamage_max:252},{cDamage:20}]},
{set_TO:1, name:"Trang-Oul's Claws", req_level:45, defense:30, skills_curses:2, fcr:20, cRes:30, pDamage:25, base:"Heavy Bracers", set_bonuses:["set_TO",{},{},{},{},{}]},
{set_Disciple:1, name:"Laying of Hands", req_level:63, defense:25, ias:20, fRes:50, damage_vs_demons:250, set_bonuses:["set_Disciple",{},{},{},{},{}], pod_changes:1},	// 10% ctc level 3 Holy Bolt on striking
{set_Orphan:1, name:"Magnus' Skin", req_level:37, e_def:50, ias:20, ar:100, light_radius:3, fRes:15, base:"Sharkskin Gloves", set_bonuses:["set_Orphan",{},{},{},{}]},
{set_Sander:1, name:"Sander's Taboo", req_level:28, defense:25, pDamage_min:9, pDamage_max:11, pDamage_duration:3, life:40, ias:20, base:"Heavy Gloves", set_bonuses:["set_Sander",{},{},{},{}]},
{set_Iratha:1, name:"Irath's Cuff", req_level:15, half_freeze:1, cRes:30, base:"Light Gauntlets", set_bonuses:["set_Iratha",{},{ias:20},{},{}]},
{set_Sigon:1, name:"Sigon's Gage", req_level:6, ar:20, strength:10, base:"Gauntlets", set_bonuses:["set_Sigon",{},{ias:30},{},{},{},{}]},
{set_Death:1, name:"Death's Hand", req_level:6, poison_length_reduced:75, pRes:50, base:"Leather Gloves", set_bonuses:["set_Death",{},{ias:30},{}]},
{set_Cleglaw:1, name:"Cleglaw's Pincers", req_level:4, slows_target:25, knockback:1, base:"Chain Gloves", set_bonuses:["set_Cleglaw",{},{ar_per_level:10},{}]},
{set_Arctic:1, name:"Arctic Mitts", req_level:2, life:20, ias:10, base:"Light Gauntlets", set_bonuses:["set_Arctic",{},{ar:50},{dexterity:10},{}]},
{only:"amazon", rarity:"crafted", name:"Bowyer's Hitpower Vambraces", req_level:51, thorns:7, knockback:1, life_leech:5, mana_leech:5, ias:20, fRes:30, cRes:30, skills_bows:2, base:"Vambraces"},	// 5% ctc level 4 Frost Nova when hit
{only:"amazon", rarity:"crafted", name:"Spearmaiden's Blood Gloves", req_level:47, life:20, life_leech:8, mana_leech:5, cblow:10, ias:20, fRes:30, cRes:30, skills_javelins:2, base:"Vampirebone Gloves"},
{only:"amazon", rarity:"crafted", name:"Gymnast's Caster Mitts", req_level:42, mana_regen:10, mana:20, mana_per_kill:3, mana_leech:5, ias:20, mf:25, fRes:30, lRes:30, skills_passives:2, base:"Bramble Mitts"},
{only:"assassin", rarity:"crafted", name:"Sensei's Blood Gloves", req_level:51, life:20, life_leech:8, mana_leech:5, cblow:10, ias:20, fRes:30, cRes:30, skills_martial:2, base:"Vampirebone Gloves"},	// 5% ctc level 4 Frost Nova when hit
{limit:["assassin","amazon"], rarity:"crafted", name:"Blood Gloves", req_level:47, life:20, life_leech:8, mana_leech:5, cblow:10, ias:20, fRes:30, cRes:30, lRes:30, base:"Vampirebone Gloves"},
{limit:["amazon"], rarity:"crafted", name:"Caster Mitts", req_level:42, mana_regen:10, mana:20, mana_per_kill:3, mana_leech:5, ias:20, mf:25, fRes:30, cRes:30, lRes:30, base:"Bramble Mitts"},
	],
    boots: [
    // remove kick_min and use data from base items?
{name:"Boots"},
{name:"Hotspur", req_level:5, defense:6, e_def:20, kick_min:3, fRes:45, fRes_max:15, fDamage_min:3, fDamage_max:6, life:15, base:"Boots"},
{name:"Gorefoot", req_level:9, defense:12, e_def:30, kick_min:4, frw:20, mana_leech:2, thorns:2, skill_Leap:2, base:"Heavy Boots"},
{name:"Treads of Cthon", req_level:15, defense:12, e_def:40, kick_min:6, slower_stam_drain:50, frw:30, missile_defense:50, life:10, base:"Chain Boots"},
{name:"Goblin Toe", req_level:22, defense:15, e_def:60, kick_min:8, cblow:25, light_radius:-1, damage_reduced:1, mDamage_reduced:1, base:"Light Plated Boots"},
{name:"Tearhaunch", req_level:29, defense:35, e_def:80, kick_min:10, frw:20, all_res:10, dexterity:5, strength:5, skill_Vigor:2, base:"Greaves"},
{name:"Infernostride", req_level:29, defense:15, e_def:150, kick_min:26, frw:20, fRes:30, fRes_max:10, fire_min:12, fire_max:33, gf:70, light_radius:2, base:"Demonhide Boots"},
{name:"Waterwalk", req_level:32, e_def:210, kick_min:28, frw:20, dexterity:15, fRes_max:5, stamina:40, life:65, missile_defense:100, heal_stam:50, base:"Sharkskin Boots"},
{name:"Silkweave", req_level:36, e_def:190, kick_min:32, frw:30, mana_per_kill:5, max_mana:10, missile_defense:200, base:"Mesh Boots"},
{name:"War Traveler", req_level:42, e_def:190, kick_min:37, frw:25, vitality:10, strength:10, mf:50, damage_min:15, damage_max:25, thorns:10, slower_stam_drain:40, base:"Battle Boots"},
{name:"Gore Rider", req_level:47, e_def:200, kick_min:39, frw:30, owounds:10, cblow:15, dstrike:15, stamina:20, base:"War Boots"},
{name:"Sandstorm Trek", req_level:64, e_def:170, kick_min:60, frw:20, fhr:20, stamina_per_level:1, strength:15, vitality:15, slower_stam_drain:50, pRes:70, base:"Scarabshell Boots"},
{name:"Marrowwalk (Flesh)", req_level:66, e_def:200, kick_min:69, frw:20, e_def:200, strength:20, dexterity:17, mana_regen:10, heal_stam:10, half_freeze:1, skill_Summon_Mastery:2, skill_Flesh_Offering:1, skill_Bone_Offering:0, base:"Boneweave Boots", pod_changes:1},	// level 12 Life Tap (10 charges)
{only:"necromancer", name:"Marrowwalk (Bone)", req_level:66, e_def:200, kick_min:69, frw:20, e_def:200, strength:20, dexterity:17, mana_regen:10, heal_stam:10, half_freeze:1, skill_Summon_Mastery:2, skill_Flesh_Offering:0, skill_Bone_Offering:1, base:"Boneweave Boots", pod_changes:1},	// level 12 Life Tap (10 charges)
{name:"Shadow Dancer", req_level:71, e_def:100, kick_min:83, skills_shadow:2, frw:30, fhr:30, dexterity:25, req:-20, base:"Myrmidon Greaves"},
{set_IK:1, name:"Immortal King's Pillar", req_level:31, defense:75, kick_min:39, frw:40, ar:110, life:44, base:"War Boots", set_bonuses:["set_IK",{},{mf:25},{skills_combat_barbarian:2},{defense:140},{half_freeze:1},{}]},
{set_Nat:1, name:"Natalya's Soul", req_level:25, defense:125, kick_min:23, frw:40, heal_stam_per_level:0.25, cRes:25, lRes:25, base:"Mesh Boots", set_bonuses:["set_Nat",{},{},{},{}]},
{set_Ald:1, name:"Aldur's Advance", req_level:45, kick_min:37, frw:40, stamina:180, damage_to_mana:10, heal_stam:32, life:50, fRes:50, indestructible:1, base:"Battle Boots", set_bonuses:["set_Ald",{},{dexterity:15},{dexterity:15},{dexterity:15}]},
{set_Disciple:1, name:"Rite of Passage", req_level:29, kick_min:26, defense:25, frw:30, stamina:25, half_freeze:1, base:"Demonhide Boots", set_bonuses:["set_Disciple",{},{},{},{},{}], pod_changes:1},
{set_Sander:1, name:"Sander's Riprap", req_level:20, kick_min:4, frw:40, ar:100, dexterity:10, strength:5, base:"Heavy Boots", set_bonuses:["set_Sander",{},{},{},{},{}]},
{set_Tancred:1, name:"Tancred's Hobnails", req_level:20, kick_min:3, heal_stam:25, dexterity:10, base:"Boots", set_bonuses:["set_Tancred",{},{frw:30},{strength:10},{},{}]},
{set_Vidala:1, name:"Vidala's Fetlock", req_level:14, kick_min:8, frw:30, stamina:150, pierce:15, base:"Light Plated Boots", set_bonuses:["set_Vidala",{},{all_res:8},{},{}], pod_changes:1},
{set_Cow:1, name:"Cow King's Hooves", req_level:13, defense:35, kick_min:4, frw:30, fDamage_min:25, fDamage_max:35, dexterity:20, mf:25, base:"Heavy Boots", set_bonuses:["set_Cow",{},{},{}]},
{set_Sigon:1, name:"Sigon's Sabot", req_level:6, kick_min:10, frw:20, cRes:40, base:"Greaves", set_bonuses:["set_Sigon",{},{ar:50},{mf:50},{},{},{}]},
{set_Hsarus:1, name:"Hsarus' Iron Heel", req_level:3, kick_min:6, frw:20, fRes:25, base:"Chain Boots", set_bonuses:["set_Hsarus",{},{ar_per_level:10},{}]},
{rarity:"rare", name:"High Resistance Boots", req_level:37, kick_min:3, frw:30, fRes:40, cRes:40, lRes:40, mf:25, gf:80, base:"Boots"},
{rarity:"crafted", name:"Blood Boots", req_level:25, kick_min:37, life_leech:3, life:20, life_replenish:10, frw:30, fRes:40, cRes:40, lRes:40, mf:25, gf:80, base:"Battle Boots"},
{rarity:"crafted", name:"Caster Boots", req_level:45, kick_min:65, mana_regen:10, mana:20, max_mana:5, frw:30, fRes:40, cRes:40, lRes:40, mf:25, gf:80, base:"Wyrmhide Boots"},
	],
    belt: [
{name:"Belt"},
{name:"Lenymo", req_level:7, mana_regen:30, all_res:5, mana:15, light_radius:1, base:"Sash"},
{name:"Snakecord", req_level:12, defense:10, e_def:30, life_replenish:10, pRes:25, poison_length_reduced:50, pDamage_all:12, pDamage_duration:3, base:"Light Belt"},
{name:"Nightsmoke", req_level:20, defense:15, e_def:50, damage_to_mana:50, damage_reduced:2, all_res:10, mana:20, base:"Belt"},
{name:"Goldwrap", req_level:27, defense:25, e_def:60, ias:10, mf:30, gf:80, light_radius:2, base:"Heavy Belt"},
{name:"Bladebuckle", req_level:29, defense:30, e_def:100, fhr:30, dexterity:10, strength:5, damage_reduced:3, thorns:8, base:"Plated Belt"},
{name:"String of Ears", req_level:29, defense:15, e_def:180, life_leech:8, pdr:15, mDamage_reduced:15, base:"Demonhide Sash"},
{name:"Razortail", req_level:32, defense:15, e_def:150, damage_max:10, pierce:33, dexterity:15, thorns_per_level:1, base:"Sharkskin Belt"},
{name:"Gloom's Trap", req_level:36, e_def:150, mana_leech:5, max_mana:15, mana_regen:15, vitality:15, light_radius:-3, base:"Mesh Belt"},
{name:"Snowclash", req_level:42, e_def:170, cDamage_min:13, cDamage_max:21, skills_cold_all:1, cAbsorb_flat:15, skill_Glacial_Spike:3, cRes_max:5, base:"Battle Belt", pod_changes:1},	// 5% ctc level 7-19 Blizzard when struck
{name:"Thundergod's Vigor", req_level:47, e_def:200, lAbsorb_flat:20, lRes_max:10, strength:20, vitality:20, skill_Lightning_Fury:3, skill_Lightning_Strike:3, lDamage_min:1, lDamage_max:50, base:"War Belt"},	// 5% ctc level 7 Fist of the Heavens when struck
{name:"Arachnid Mesh", req_level:80, e_def:120, all_skills:1, fcr:20, max_mana:5, slow_target:10, base:"Spiderweb Sash"},	// level 3 Venom (11 charges)(EFFECT)
{name:"Nosferatu's Coil", req_level:51, slows_target:10, mana_per_kill:2, life_leech:7, strength:15, ias:10, light_radius:-3, base:"Vampirefang Belt"},
{name:"Verdungo's Hearty Cord", req_level:63, e_def:140, pdr:15, fhr:10, vitality:40, life_replenish:13, stamina:120, base:"Mithril Coil"},
{set_IK:1, name:"Immortal King's Detail", req_level:29, defense:36, lRes:31, fRes:28, strength:25, base:"War Belt", set_bonuses:["set_IK",{},{defense:105},{fhr:25},{defense:52},{pdr:20},{skills_masteries:2}]},	// set bonus (defense:193) does not include enhanced defense
{set_TR:1, name:"Tal Rasha's Fine-Spun Cloth", req_level:53, req:-20, damage_to_mana:37, mana:30, dexterity:20, mf:15, base:"Mesh Belt", set_bonuses:["set_TR",0,{defense:60},{fcr:10},{},{}]},
{set_Mav:1, name:"M'avina's Tenet", req_level:45, defense:50, frw:20, light_radius:5, mana_leech:5, base:"Sharkskin Belt", set_bonuses:["set_Mav",{},{},{},{all_res:25},{}]},
{set_TO:1, name:"Trang-Oul's Girth", req_level:62, defense:100, req:-40, cbf:1, life_replenish:5, mana:50, stamina:30, life:66, base:"Troll Belt", set_bonuses:["set_TO",{},{},{cRes:40},{},{}]},
{set_Disciple:1, name:"Credendum", req_level:65, defense:50, all_res:15, dexterity:10, strength:10, base:"Mithril Coil", set_bonuses:["set_Disciple",{},{},{},{},{}], pod_changes:1},
{set_Orphan:1, name:"Wilhelm's Pride", req_level:42, e_def:75, life_leech:5, mana_leech:5, cRes:10, base:"Battle Belt", set_bonuses:["set_Orphan",{},{},{},{}]},
{set_Hwanin:1, name:"Hwanin's Blessing", req_level:35, defense_per_level:1.5, lDamage_min:3, lDamage_max:33, pmh:1, damage_to_mana:12, base:"Belt", set_bonuses:["set_Hwanin",{},{},{},{}]},
{set_Iratha:1, name:"Iratha's Cord", req_level:15, defense:25, damage_min:5, base:"Heavy Belt", set_bonuses:["set_Iratha",{},{dexterity:10},{},{}]},
{set_Sigon:1, name:"Sigon's Wrap", req_level:6, fRes:20, life:20, base:"Plated Belt", set_bonuses:["set_Sigon",{},{defense_per_level:2},{},{},{},{}]},
{set_Death:1, name:"Death's Guard", req_level:6, defense:20, cbf:1, base:"Sash", set_bonuses:["set_Death",{},{all_res:15},{}]},
{set_Infernal:1, name:"Infernal Sign", req_level:5, defense:25, life:20, base:"Heavy Belt", set_bonuses:["set_Infernal",{},{pRes:25},{half_freeze:1}]},
{set_Hsarus:1, name:"Hsarus' Iron Stay", req_level:3, cRes:20, life:20, base:"Belt", set_bonuses:["set_Hsarus",{},{defense_per_level:2.5},{}]},
{set_Arctic:1, name:"Arctic Binding", req_level:2, defense:30, cRes:40, base:"Light Belt", set_bonuses:["set_Arctic",{},{mf:40},{cRes:10},{}]},
{rarity:"crafted", name:"Blood Coil", req_level:56, life:80, life_leech:3, owounds:10, fhr:24, strength:30, fRes:30, cRes:30, lRes:30, base:"Mithril Coil"},
{rarity:"crafted", name:"Caster Belt", req_level:51, mana_regen:10, mana:20, fcr:10, life:60, fhr:24, strength:30, fRes:30, cRes:30, lRes:30, base:"Vampirefang Belt"},
	],
    amulet: [
{name:"Amulet"},
{name:"Amulet of the Viper", pRes:25, mana:10, life:10},
{name:"Nokozan Relic", req_level:10, fhr:20, fRes:50, fRes_max:10, fDamage_min:3, fDamage_max:6, light_radius:3},
{name:"The Eye of Etlich", req_level:15, all_skills:1, life_leech:7, cDamage_min:2, cDamage_max:5, missile_defense:40, light_radius:5},
{name:"The Mahim-Oak Curio", req_level:25, defense:10, defense_bonus:10, ar_bonus:10, all_res:10, all_attributes:10},
{name:"Saracen's Chance", req_level:47, all_res:25, all_attributes:12},	// 10% ctc level 2 Iron Maiden when struck
{name:"Crescent Moon", req_level:50, damage_to_mana:10, mana:45, life_leech:6, mana_leech:15, mDamage_reduced:10, light_radius:-2},
{name:"The Cat's Eye", req_level:50, frw:30, ias:20, defense:100, dexterity:25, missile_defense:100},
{name:"Atma's Scarab", req_level:60, ar_bonus:20, pDamage_all:40, pDamage_duration:4, pRes:75, thorns:5, light_radius:3},	// 5% chance to cast Level 2 Amplified Damage on Striking
{name:"The Rising Sun", req_level:65, skills_fire_all:2, fAbsorb_flat_per_level:0.75, fDamage_min:24, fDamage_max:48, life_replenish:10, light_radius:4},	// 2% ctc level 13-19 Meteor when struck
{name:"Seraph's Hymn", req_level:65, all_skills:2, skills_defensive:2, damage_vs_demons:50, damage_vs_undead:50, ar_vs_demons:250, ar_vs_undead:250, light_radius:2},
{name:"Highlord's Wrath", req_level:65, all_skills:1, ias:20, dstrike_per_level:0.375, lRes:35, lDamage_min:1, lDamage_max:30, thorns:15},
{name:"Mara's Kaleidoscope", req_level:67, all_skills:2, all_res:30, all_attributes:5},
{name:"Metalgrid", req_level:81, ar:450, all_res:35, defense:350},	// level 22 Iron Golem (11 charges), level 12 Iron Maiden (20 charges)	...(EFFECT - Iron Golem auras?)
{set_TR:1, name:"Tal Rasha's Adjudication", req_level:67, skills_sorceress:2, lRes:33, mana:42, life:50, lDamage_min:3, lDamage_max:32, set_bonuses:["set_TR",0,{},{},{fcr:10},{}]},
{set_Disciple:1, name:"Telling of Beads", req_level:30, all_skills:1, pRes:50, cRes:18, thorns:10, set_bonuses:["set_Disciple",{},{},{},{},{}], pod_changes:1},
{set_Tancred:1, name:"Tancred's Weird", req_level:20, damage_reduced:2, mDamage_reduced:1, set_bonuses:["set_Tancred",{},{mf:78},{ar:60},{},{}]},
{set_Iratha:1, name:"Iratha's Collar", req_level:15, poison_length_reduced:75, pRes:30, set_bonuses:["set_Iratha",{},{all_res:15},{},{}]},
{set_Arcanna:1, name:"Arcanna's Sign", req_level:15, mana_regen:20, mana:15, set_bonuses:["set_Arcanna",{},{mf:50},{fRes:20},{}]},
{set_Vidala:1, name:"Vidala's Snare", req_level:14, cRes:20, life:15, set_bonuses:["set_Vidala",{},{mf:50},{},{}]},
{set_Civerb:1, name:"Civerb's Icon", req_level:9, life_replenish:4, mana_regen:40, set_bonuses:["set_Civerb",{},{cRes:25},{defense:25}]},
{set_Cathan:1, name:"Cathan's Sigil", req_level:11, fhr:10, thorns_lightning:5, set_bonuses:["set_Cathan",{},{ar:50},{mf:25},{},{}]},
{set_Angelic:1, name:"Angelic Wings", req_level:12, damage_to_mana:20, light_radius:3, set_bonuses:["set_Angelic",{},{life:75},{all_skills:1},{}]},
{rarity:"magic", name:"+3 Amulet of the Whale", req_level:75, all_skills:3, life:100},
{only:"amazon", rarity:"magic", name:"+4 Athlete's Amulet", req_level:42, skills_passives:3, all_skills:1},
{only:"assassin", rarity:"magic", name:"+4 Kenshi's Amulet", req_level:42, skills_martial:3, all_skills:1},
{only:"assassin", rarity:"magic", name:"+4 Shadow Amulet", req_level:42, skills_shadow:3, all_skills:1},
{only:"assassin", rarity:"magic", name:"+4 Cunning Amulet", req_level:42, skills_traps:3, all_skills:1},
{only:"barbarian", rarity:"magic", name:"+4 Echoing Amulet", req_level:42, skills_warcries:3, all_skills:1},
{only:"barbarian", rarity:"magic", name:"+4 Furious Amulet", req_level:42, skills_masteries:3, all_skills:1},
{only:"druid", rarity:"magic", name:"+4 Gaea's Amulet", req_level:42, skills_elemental:3, all_skills:1},
{only:"druid", rarity:"magic", name:"+4 Communal Amulet", req_level:42, skills_shapeshifting:3, all_skills:1},
{only:"druid", rarity:"magic", name:"+4 Keeper's Amulet", req_level:42, skills_summoning_druid:3, all_skills:1},
{only:"necromancer", rarity:"magic", name:"+4 Golemlord's Amulet", req_level:42, skills_summoning_necromancer:3, all_skills:1},
{only:"necromancer", rarity:"magic", name:"+4 Venomous Amulet", req_level:42, skills_poisonBone:3, all_skills:1},
{only:"necromancer", rarity:"magic", name:"+4 Cursing Amulet", req_level:42, skills_curses:3, all_skills:1},
{only:"paladin", rarity:"magic", name:"+4 Guardian's Amulet", req_level:42, skills_defensive:3, all_skills:1},
{only:"paladin", rarity:"magic", name:"+4 Marshal's Amulet", req_level:42, skills_offensive:3, all_skills:1},
{only:"paladin", rarity:"magic", name:"+4 Rose Branded Amulet", req_level:42, skills_combat_paladin:3, all_skills:1},
{only:"sorceress", rarity:"magic", name:"+4 Glacial Amulet", req_level:42, skills_cold:3, all_skills:1},
{only:"sorceress", rarity:"magic", name:"+4 Powered Amulet", req_level:42, skills_lightning:3, all_skills:1},
{only:"sorceress", rarity:"magic", name:"+4 Volcanic Amulet", req_level:42, skills_fire:3, all_skills:1},
{rarity:"crafted", name:"Blood Amulet", req_level:89, life_leech:12, life:20, frw:10, strength:30, mana_leech:5, all_res:20, skills_amazon:2, skills_assassin:2, skills_barbarian:2, skills_druid:2, skills_necromancer:2, skills_paladin:2, skills_sorceress:2},
{rarity:"crafted", name:"Caster Amulet", req_level:89, mana_regen:10, mana:100, fcr:20, all_res:20, strength:30, dexterity:20, skills_amazon:2, skills_assassin:2, skills_barbarian:2, skills_druid:2, skills_necromancer:2, skills_paladin:2, skills_sorceress:2},
	],
    ring1: [
{name:"Ring"},
{name:"Nagelring", req_level:7, mDamage_reduced:3, ar:75, thorns:3, mf:30},
{name:"Manald Heal", req_level:15, mana_leech:7, life_replenish:8, mana_regen:20, life:20},
{name:"Carrion Wind", req_level:60, life_leech:9, missile_defense:160, pRes:55, damage_to_mana:10},	// level 21 Poison Creeper (15 charges)
{name:"Nature's Peace", req_level:69, peace:1, pmh:1, pRes:30, damage_reduced:11},	// level 5 Oak Sage (27 charges)
{name:"Dwarf Star", req_level:45, fAbsorb:15, stamina:40, life:40, heal_stam:15, gf:100, mDamage_reduced:15},
{name:"Raven Frost", req_level:45, ar:250, cbf:1, dexterity:20, mana:40, cAbsorb:20, cDamage_min:15, cDamage_max:45},
{name:"The Stone of Jordan", req_level:29, all_skills:1, mana:20, max_mana:25, lDamage_min:1, lDamage_max:12},
{name:"Bul-Kathos' Wedding Band", req_level:58, all_skills:1, life_per_level:0.5, life_leech:5, stamina:50},
{name:"Wisp Projector", req_level:76, lAbsorb:12, mf:20, frw:8, wisp:10, pod_changes:1},	// level 9 Heart of Wolverine (17 charges)(EFFECT)
{set_Cathan:0.5, name:"Cathan's Seal", req_level:11, life_leech:6, damage_reduced:2, set_bonuses:["set_Cathan",{},{strength:10},{},{},{}]},
{set_Angelic:0.5, name:"Angelic Halo", req_level:12, life_replenish:6, life:20, set_bonuses:["set_Angelic",{},{ar_per_level:12},{mf:50},{}]},
{rarity:"crafted", name:"Blood Ring", req_level:0, life_leech:11, life:20, strength:25, ar:120, all_res:11, fcr:10, mana_leech:5},
{rarity:"crafted", name:"Caster Ring", req_level:0, mana_regen:10, mana:100, energy:20, all_res:11, fcr:10, strength:20, life:40},
	],
    ring2: [
{name:"Ring"},
{name:"Nagelring", req_level:7, mDamage_reduced:3, ar:75, thorns:3, mf:30},
{name:"Manald Heal", req_level:15, mana_leech:7, life_replenish:8, mana_regen:20, life:20},
{name:"Carrion Wind", req_level:60, life_leech:9, missile_defense:160, pRes:55, damage_to_mana:10},	// level 21 Poison Creeper (15 charges)
{name:"Nature's Peace", req_level:69, peace:1, pmh:1, pRes:30, damage_reduced:11},	// level 5 Oak Sage (27 charges)
{name:"Dwarf Star", req_level:45, fAbsorb:15, stamina:40, life:40, heal_stam:15, gf:100, mDamage_reduced:15},
{name:"Raven Frost", req_level:45, ar:250, cbf:1, dexterity:20, mana:40, cAbsorb:20, cDamage_min:15, cDamage_max:45},
{name:"The Stone of Jordan", req_level:29, all_skills:1, mana:20, max_mana:25, lDamage_min:1, lDamage_max:12},
{name:"Bul-Kathos' Wedding Band", req_level:58, all_skills:1, life_per_level:0.5, life_leech:5, stamina:50},
{name:"Wisp Projector", req_level:76, lAbsorb:12, mf:20, frw:8, wisp:10, pod_changes:1},	// level 9 Heart of Wolverine (17 charges)(EFFECT)
{set_Cathan:0.5, name:"Cathan's Seal", req_level:11, life_leech:6, damage_reduced:2, set_bonuses:["set_Cathan",{},{strength:10},{},{},{}]},
{set_Angelic:0.5, name:"Angelic Halo", req_level:12, life_replenish:6, life:20, set_bonuses:["set_Angelic",{},{ar_per_level:12},{mf:50},{}]},
{rarity:"crafted", name:"Blood Ring", req_level:0, life_leech:11, life:20, strength:25, ar:120, all_res:11, fcr:10, mana_leech:5},
{rarity:"crafted", name:"Caster Ring", req_level:0, mana_regen:10, mana:100, energy:20, all_res:11, fcr:10, strength:20, life:40},
	],
    weapon: [
{name:"Weapon"},
// Class Weapons
{only:"amazon", name:"Titan's Revenge", req_level:42, e_damage:200, damage_min:25, damage_max:50, skills_amazon:2, life_leech:9, frw:30, strength:20, dexterity:20, autoreplenish:1, skills_javelins:2, type:"javelin", base:"Ceremonial Javelin"},
{only:"amazon", name:"Thunderstroke", req_level:69, e_damage:200, lDamage_min:1, lDamage_max:511, ias:15, enemy_lRes:-15, skills_javelins:4, skill_Lightning_Bolt:3, type:"javelin", base:"Matriarchal Javelin"},
{rarity:"magic", only:"amazon", name:"Lancer's Javelin of Quickness", req_level:45, skills_javelins:6, ias:40, type:"javelin", base:"Maiden Javelin"},
{only:"amazon", name:"Blood Raven's Charge", twoHanded:1, req_level:71, e_damage:230, ar_bonus:300, skills_bows:4, type:"bow", base:"Matriarchal Bow"},	// level 5 Revive (30 charges)
{only:"amazon", name:"Lycander's Aim", twoHanded:1, req_level:42, e_damage:200, damage_min:25, damage_max:50, ias:20, skills_amazon:2, mana_leech:8, energy:20, dexterity:20, defense_bonus:20, skills_bows:2, type:"bow", base:"Ceremonial Bow"},	// bonus defense on weapon
{only:"amazon", set_Mav:1, name:"M'avina's Caster", twoHanded:1, req_level:70, e_damage:188, ias:40, ar:50, type:"bow", base:"Grand Matron Bow", set_bonuses:["set_Mav",{},{mDamage_min:114, mDamage_max:377},{},{skills_bows:2},{}]},
{only:"amazon", name:"Lycander's Flank", twoHanded:1, req_level:42, e_damage:200, damage_min:25, damage_max:50, skills_amazon:2, ias:30, life_leech:9, strength:20, vitality:20, defense_bonus:20, skills_javelins:2, type:"spear", base:"Ceremonial Pike"},	// bonus defense on weapon
{only:"amazon", name:"Stoneraven", twoHanded:1, req_level:64, e_damage:280, mDamage_min:101, mDamage_max:187, defense:600, all_res:50, skills_javelins:3, type:"spear", base:"Matriarchal Spear"},
{only:"assassin", rw:1, name:"Chaos ­ ­ - ­ ­ Scissors Suwayyah", req_level:57, e_damage:290, ias:35, mDamage_min:216, mDamage_max:471, owounds:25, oskill_Zeal:1, strength:10, life_per_demon_kill:15, skill_Wake_of_Fire:3, skill_Blade_Shield:3, skill_Fade:3, type:"claw", base:"Scissors Suwayyah", pod_changes:1},	// 9% ctc level 11 Frozen Orb on striking, 11% ctc level 9 Charged Bolt on striking
{only:"assassin", rw:1, name:"Pattern ­ ­ - ­ ­ Greater Claws", req_level:21, e_damage:80, fbr:30, ar_bonus:10, fDamage_min:12, fDamage_max:32, lDamage_min:1, lDamage_max:50, pDamage_all:75, pDamage_duration:5, strength:6, dexterity:6, all_res:15, mana_per_kill:2, skill_Wake_of_Fire:3, skill_Blade_Fury:3, skill_Fade:3, type:"claw", base:"Greater Claws", pod_changes:1},
{only:"assassin", name:"Bartuc's Cut-Throat", req_level:42, e_damage:200, damage_min:25, damage_max:50, fhr:30, bonus_ar:20, life_leech:9, strength:20, dexterity:20, skills_assassin:2, skills_martial:1, type:"claw", base:"Greater Talons"},
{only:"assassin", name:"Jade Talon", type:"claw", req_level:66, e_damage:240, skills_martial:2, skills_shadow:2, fhr:30, mana_leech:15, all_res:50, base:"Wrist Sword"},
{only:"assassin", name:"Shadow Killer", type:"claw", req_level:78, e_damage:220, target_defense:-25, freezes_target:2, mana_per_kill:15, indestructible:1, ethereal:1, base:"Battle Cestus", pod_changes:1},	// cDamage_per_charge_ice:16 (+16 cold damage per active ice charge; 16*5 = 80) TODO: implement 
{only:"assassin", name:"Firelizard's Talons", type:"claw", req_level:67, e_damage:270, fDamage_min:236, fDamage_max:480, ias:15, skills_martial:3, skills_fire_all:2, skill_Fists_of_Ember:2, fRes:70, base:"Feral Claws", pod_changes:1},	// all_skills_with_full_charge_ember:1 (+1 all skills when 5 ember charges are active) TODO: implement
{only:"assassin", set_Nat:1, name:"Natalya's Mark", type:"claw", req_level:79, e_damage:200, damage_vs_undead:200, damage_vs_demons:200, fDamage_min:12, fDamage_max:17, itd:1, ias:40, cDamage_min:50, cDamage_max:50, base:"Scissors Suwayyah", set_bonuses:["set_Nat",{},{},{},{}]},
{only:"sorceress", name:"The Oculus", req_level:42, skills_sorceress:3, mana_per_kill:5, all_res:20, fcr:30, vitality:20, energy:20, defense_bonus:20, mf:50, type:"orb", base:"Swirling Crystal"},
{only:"sorceress", name:"Eschuta's Temper", req_level:72, skills_sorceress:3, fcr:40, fDamage:20, lDamage:20, energy:30, type:"orb", base:"Eldritch Orb"},
{only:"sorceress", name:"Death's Fathom", req_level:73, skills_sorceress:3, fcr:20, cDamage:30, lRes:40, fRes:40, type:"orb", base:"Dimensional Shard"},
{only:"sorceress", set_TR:1, name:"Tal Rasha's Lidless Eye", req_level:65, fcr:20, mana:77, life:57, energy:10, skill_Lightning_Mastery:2, skill_Fire_Mastery:2, skill_Cold_Mastery:2, type:"orb", base:"Swirling Crystal", set_bonuses:["set_TR",0,{skills_sorceress:1},{enemy_fRes:-15},{enemy_lRes:-15},{cDamage:15}]},
{only:"sorceress", rw:1, name:"Plague ­ ­ - ­ ­ Jared's Stone", req_level:67, damage_vs_demons:380, enemy_pRes:-23, dstrike_per_level:0.375, owounds:25, freezes_target:3, strength:10, all_skills:2, skill_Cold_Mastery:3, skill_Frozen_Orb:3, skill_Hydra:3, type:"orb", base:"Jared's Stone", pod_changes:1, aura:"Cleansing", aura_lvl:17},	// 25% ctc level 15 Poison Nova on striking, 20% ctc level 12 Lower Resist when struck
{only:"assassin", rw:1, name:"Plague ­ ­ - ­ ­ Suwayyah", req_level:67, damage_vs_demons:380, enemy_pRes:-23, dstrike_per_level:0.375, owounds:25, freezes_target:3, strength:10, all_skills:2, skill_Blade_Shield:3, skill_Venom:3, skill_Fade:3, type:"claw", base:"Suwayyah", pod_changes:1, aura:"Cleansing", aura_lvl:17},	// 25% ctc level 15 Poison Nova on striking, 20% ctc level 12 Lower Resist when struck
{only:"assassin", rarity:"magic", name:"Cunning Suwayyah of Evisceration", type:"claw", req_level:65, damage_max:63, skills_traps:3, skill_Wake_of_Fire:3, skill_Blade_Shield:3, skill_Lightning_Sentry:3, base:"Suwayyah"},
{only:"sorceress", rarity:"magic", name:"Volcanic Vortex Orb of the Magus", type:"orb", req_level:67, life:60, fcr:20, skills_fire:3, skill_Enflame:3, skill_Fire_Mastery:3, skill_Immolate:3, base:"Vortex Orb"},
{only:"sorceress", rarity:"magic", name:"Glacial Vortex Orb of the Magus", type:"orb", req_level:67, life:60, fcr:20, skills_cold:3, skill_Freezing_Pulse:3, skill_Cold_Mastery:3, skill_Frozen_Orb:3, base:"Vortex Orb"},
{only:"necromancer", rarity:"magic", name:"Golemlord's Lich Wand", type:"wand", req_level:65, skills_summoning_necromancer:3, skill_Summon_Mastery:3, skill_Raise_Skeleton_Warrior:3, skill_Raise_Skeletal_Mage:3, base:"Lich Wand"},
// Bows
{only:"amazon", rw:1, name:"Brand ­ ­ - ­ ­ Matriarchal Bow", req_level:65, e_damage:340, itd:1, ar_bonus:20, damage_vs_demons:330, dstrike:20, pmh:1, knockback:1, skills_bows:3, twoHanded:1, type:"bow", base:"Matriarchal Bow"},	// 35% ctc level 14 Amplify Damage when struck, 100% ctc level 18 Bone Spear on striking, Fires explosive arrows/bolts (15)
{limit:["amazon"], rw:1, name:"Brand ­ ­ - ­ ­ Hydra Bow", req_level:65, e_damage:340, itd:1, ar_bonus:20, damage_vs_demons:330, dstrike:20, pmh:1, knockback:1, twoHanded:1, type:"bow", base:"Hydra Bow"},	// 35% ctc level 14 Amplify Damage when struck, 100% ctc level 18 Bone Spear on striking, Fires explosive arrows/bolts (15)
{only:"amazon", rw:1, name:"Faith ­ ­ - ­ ­ Grand Matron Bow", req_level:65, twoHanded:1, all_skills:2, e_damage:330, itd:1, ar_bonus:300, damage_vs_undead:75, ar_vs_undead:50, fDamage_min:120, fDamage_max:120, all_res:15, gf:75, skills_bows:3, type:"bow", base:"Grand Matron Bow", aura:"Fanaticism", aura_lvl:15},	// also has 10% reanimate as: Returned
{limit:["amazon"], rw:1, name:"Faith ­ ­ - ­ ­ Hydra Bow", req_level:65, twoHanded:1, all_skills:2, e_damage:330, itd:1, ar_bonus:300, damage_vs_undead:75, ar_vs_undead:50, fDamage_min:120, fDamage_max:120, all_res:15, gf:75, type:"bow", base:"Hydra Bow", aura:"Fanaticism", aura_lvl:15},	// also has 10% reanimate as: Returned
{only:"amazon", rw:1, name:"Ice ­ ­ - ­ ­ Matriarchal Bow", req_level:65, e_damage:210, ias:20, itd:1, cDamage:30, life_leech:7, enemy_cRes:-20, dstrike:20, gf_per_level:3.125, skills_bows:3, twoHanded:1, type:"bow", base:"Matriarchal Bow", aura:"Holy Freeze", aura_lvl:18},	// 100% ctc level 40 Blizzard when you level-up, 25% ctc level 22 Frost Nova on striking
{limit:["amazon"], rw:1, name:"Ice ­ ­ - ­ ­ Hydra Bow", req_level:65, e_damage:210, ias:20, itd:1, cDamage:30, life_leech:7, enemy_cRes:-20, dstrike:20, gf_per_level:3.125, twoHanded:1, type:"bow", base:"Hydra Bow", aura:"Holy Freeze", aura_lvl:18},	// 100% ctc level 40 Blizzard when you level-up, 25% ctc level 22 Frost Nova on striking
{only:"amazon", rw:1, name:"Wrath ­ ­ - ­ ­ Matriarchal Bow", req_level:63, damage_vs_demons:375, damage_vs_undead:300, ar_vs_demons:100, mDamage_min:85, mDamage_max:120, lDamage_min:41, lDamage_max:240, cblow:20, pmh:1, energy:10, cbf:1, skills_bows:3, twoHanded:1, type:"bow", base:"Matriarchal Bow"},	// 30% ctc level 1 Decrepify on striking, 5% ctc level 10 Life Tap on striking
{limit:["amazon"], rw:1, name:"Wrath ­ ­ - ­ ­ Hydra Bow", req_level:63, damage_vs_demons:375, damage_vs_undead:300, ar_vs_demons:100, mDamage_min:85, mDamage_max:120, lDamage_min:41, lDamage_max:240, cblow:20, pmh:1, energy:10, cbf:1, twoHanded:1, type:"bow", base:"Hydra Bow"},	// 30% ctc level 1 Decrepify on striking, 5% ctc level 10 Life Tap on striking
{only:"amazon", rw:1, name:"Melody ­ ­ - ­ ­ Matriarchal Bow", req_level:39, e_damage:50, ias:20, damage_vs_undead:300, skills_bows:6, skill_Dodge:3, skill_Phase_Run:3, skill_Lethal_Strike:3, knockback:1, dexterity:10, twoHanded:1, type:"bow", base:"Matriarchal Bow", pod_changes:1},
{limit:["amazon"], rw:1, name:"Melody ­ ­ - ­ ­ Hydra Bow", req_level:39, e_damage:50, ias:20, damage_vs_undead:300, skills_bows:3, skill_Dodge:3, skill_Phase_Run:3, skill_Lethal_Strike:3, knockback:1, dexterity:10, twoHanded:1, type:"bow", base:"Hydra Bow", pod_changes:1},
{only:"amazon", rw:1, name:"Harmony ­ ­ - ­ ­ Matriarchal Bow", req_level:39, e_damage:275, damage_min:9, damage_max:9, fDamage_min:55, fDamage_max:160, cDamage_min:55, cDamage_max:160, lDamage_min:55, lDamage_max:160, oskill_Valkyrie:6, dexterity:10, mana_regen:20, mana_per_kill:2, light_radius:2, skills_bows:3, twoHanded:1, type:"bow", base:"Matriarchal Bow", aura:"Vigor", aura_lvl:10},	// level 20 Revive (25 charges)
{limit:["amazon"], rw:1, name:"Harmony ­ ­ - ­ ­ Ward Bow", req_level:39, e_damage:275, damage_min:9, damage_max:9, fDamage_min:55, fDamage_max:160, cDamage_min:55, cDamage_max:160, lDamage_min:55, lDamage_max:160, oskill_Valkyrie:6, dexterity:10, mana_regen:20, mana_per_kill:2, light_radius:2, twoHanded:1, type:"bow", base:"Ward Bow", aura:"Vigor", aura_lvl:10},	// level 20 Revive (25 charges)
{only:"amazon", rw:1, name:"Edge ­ ­ - ­ ­ Matriarchal Bow", req_level:25, ias:35, damage_vs_demons:380, damage_vs_undead:280, pDamage_all:75, pDamage_duration:5, life_leech:7, pmh:1, all_attributes:10, mana_per_kill:2, discount:15, skills_bows:3, twoHanded:1, type:"bow", base:"Matriarchal Bow", aura:"Thorns", aura_lvl:15},
{limit:["amazon"], rw:1, name:"Edge ­ ­ - ­ ­ Ward Bow", req_level:25, ias:35, damage_vs_demons:380, damage_vs_undead:280, pDamage_all:75, pDamage_duration:5, life_leech:7, pmh:1, all_attributes:10, mana_per_kill:2, discount:15, twoHanded:1, type:"bow", base:"Ward Bow", aura:"Thorns", aura_lvl:15},
{only:"amazon", rw:1, name:"Zephyr ­ ­ - ­ ­ Matriarchal Bow", req_level:21, e_damage:33, frw:25, ias:25, target_defense:-25, ar:66, lDamage_min:1, lDamage_max:50, defense:25, skill_Phase_Run:3, skills_bows:3, twoHanded:1, type:"bow", base:"Matriarchal Bow", pod_changes:1},
{limit:["amazon"], rw:1, name:"Zephyr ­ ­ - ­ ­ Razor Bow", req_level:21, e_damage:33, frw:25, ias:25, target_defense:-25, ar:66, lDamage_min:1, lDamage_max:50, defense:25, skill_Phase_Run:3, twoHanded:1, type:"bow", base:"Razor Bow", pod_changes:1},
//{only:"amazon", rw:1, name:"Silence ­ ­ - ­ ­ Grand Matron Bow", req_level:58, e_damage:200, all_skills:2, ias:20, fhr:20, damage_vs_undead:75, ar_vs_undead:50, mana_leech:11, blind_on_hit:33, flee_on_hit:25, all_res:75, mana_per_kill:2, mf:30, req:-20, skills_bows:3, twoHanded:1, type:"bow", base:"Grand Matron Bow", pod_changes:1, aura:"Cleansing", aura_lvl:7},
// Runewords
{only:"amazon", rw:1, name:"Breath of the Dying ­ ­ - ­ ­ Matriarchal Pike", req_level:69, twoHanded:1, indestructible:1, ias:60, e_damage:400, target_defense:-25, ar:50, damage_vs_undead:200, ar_vs_undead:50, mana_leech:7, life_leech:15, pmh:1, all_attributes:30, light_radius:1, req:-20, skills_javelins:3, type:"spear", base:"Matriarchal Pike"},
{limit:["amazon"], rw:1, name:"Breath of the Dying ­ ­ - ­ ­ War Pike", req_level:69, twoHanded:1, indestructible:1, ias:60, e_damage:400, target_defense:-25, ar:50, damage_vs_undead:200, ar_vs_undead:50, mana_leech:7, life_leech:15, pmh:1, all_attributes:30, light_radius:1, req:-20, type:"spear", base:"War Pike"},
{rw:1, name:"Pride ­ ­ - ­ ­ Giant Thresher", req_level:67, ar_bonus:300, damage_vs_demons_per_level:1, lDamage_min:50, lDamage_max:280, dstrike:20, blind_on_hit:1, freezes_target:3, vitality:10, life_replenish:8, gf_per_level:1.875, twoHanded:1, type:"polearm", base:"Giant Thresher", aura:"Concentration", aura_lvl:20},	// 25% ctc level 17 Fire Wall when struck
{rw:1, name:"Hand of Justice ­ ­ - ­ ­ Caduceus", req_level:67, ias:33, e_damage:330, itd:1, enemy_fRes:-20, life_leech:7, dstrike:20, blind_on_hit:1, freezes_target:3, type:"scepter", base:"Caduceus", aura:"Holy Fire", aura_lvl:16},	// 100% ctc level 36 Blaze when you level-up, 100% ctc level 48 Meteor when you die
{rw:1, name:"Eternity ­ ­ - ­ ­ Colossus Sword", req_level:63, e_damage:310, indestructible:1, damage_min:9, life_leech:7, cblow:20, blind_on_hit:1, slows_target:33, mana_regen:16, cbf:1, mf:30, ethereal:1, twoHanded:1, type:"sword", base:"Colossus Sword"},	// level 8 Revive (88 charges)
{rw:1, name:"Doom ­ ­ - ­ ­ Cryptic Axe", req_level:67, e_damage:370, all_skills:2, ias:45, enemy_cRes:-60, dstrike:20, owounds:25, pmh:1, freezes_target:3, req:-20, twoHanded:1, type:"polearm", base:"Cryptic Axe", aura:"Holy Freeze", aura_lvl:12},	// 5% ctc level 18 Volcano on striking
{rw:1, name:"Last Wish ­ ­ - ­ ­ Colossus Blade", req_level:65, e_damage:375, itd:1, cblow:70, pmh:1, blind_on_hit:1, mf_per_level:0.5, twoHanded:1, type:"sword", base:"Colossus Blade", aura:"Might", aura_lvl:17},	// 6% ctc level 11 Fade when struck, 10% ctc level 18 Life Tap on striking, 20% ctc level 20 Charged Bolt on attack, 
{rw:1, name:"Destruction ­ ­ - ­ ­ Colossus Sword", req_level:65, e_damage:350, itd:1, mDamage_min:100, mDamage_max:180, mana_leech:7, cblow:20, dstrike:20, pmh:1, dexterity:10, twoHanded:1, type:"sword", base:"Colossus Sword"},	// 23% ctc level 12 Volcano on striking, 5% ctc level 23 Molten Boulder on striking, 100% ctc level 45 Meteor when you die, 15% ctc level 22 Nova on attack
{rw:1, name:"Famine ­ ­ - ­ ­ Legendary Mallet", req_level:65, e_damage:370, ias:30, itd:1, mDamage_min:180, mDamage_max:200, fDamage_min:50, fDamage_max:200, cDamage_min:50, cDamage_max:200, lDamage_min:51, lDamage_max:250, life_leech:12, pmh:1, strength:10, type:"hammer", base:"Legendary Mallet"},
{rw:1, name:"Fury ­ ­ - ­ ­ Berserker Axe", req_level:65, e_damage:209, ias:40, itd:1, target_defense:-25, ar_bonus:20, life_leech:6, dstrike:33, owounds:66, pmh:1, skill_Frenzy:5, type:"axe", base:"Berserker Axe"},
{rw:1, name:"Infinity ­ ­ - ­ ­ Giant Thresher", req_level:63, e_damage:170, frw:35, enemy_lRes:-55, cblow:40, pmh:1, vitality_per_level:0.5, mf:30, twoHanded:1, type:"polearm", base:"Giant Thresher", pod_changes:1, aura:"Conviction", aura_lvl:21},	// 50% ctc level 20 Chain Lightning on kill, level 21 Cyclone Armor (30 charges)
{rw:1, name:"Beast ­ ­ - ­ ­ Berserker Axe", req_level:63, e_damage:270, ias:40, cblow:20, owounds:25, oskill_Werebear:3, oskill_Lycanthropy:3, pmh:1, strength:40, energy:10, mana_per_kill:2, type:"axe", base:"Berserker Axe", aura:"Fanaticism", aura_lvl:9},	// level 13 Summon Grizzly (5 charges)
{rw:1, name:"Wind ­ ­ - ­ ­ Tomahawk", req_level:61, e_damage:160, frw:20, ias:40, fhr:15, target_defense:-50, ar:50, blind_on_hit:1, light_radius:1, type:"axe", base:"Tomahawk"},	// 10% ctc level 9 Tornado on striking, level 13 Twister (127 charges)
{rw:1, name:"Grief ­ ­ - ­ ­ Phase Blade", req_level:59, type:"sword", ias:40, itd:1, target_defense:-25, enemy_pRes:-25, dstrike:20, pmh:1, mana_per_kill:2, life_per_kill:15, fDamage_min:5, fDamage_max:30, min_damage_per_level:3.375, max_damage_per_level:3.625, base:"Phase Blade", pod_changes:1},
{rw:1, name:"Call to Arms ­ ­ - ­ ­ Scourge", req_level:57, e_damage:290, all_skills:1, ias:40, fDamage_min:5, fDamage_max:30, life_leech:7, oskill_Battle_Cry:4, oskill_Battle_Orders:6, oskill_Battle_Command:6, pmh:1, life_replenish:12, mf:30, type:"mace", base:"Scourge", pod_changes:1},	// Battle Order's life and mana bonuses are halved
{rw:1, name:"Death ­ ­ - ­ ­ Colossus Sword", req_level:68, e_damage:385, ar_bonus:20, ar:50, lDamage_min:1, lDamage_max:50, mana_leech:7, cblow:50, dstrike_per_level:0.5, light_radius:1, req:-20, indestructible:1, type:"sword", twoHanded:1, base:"Colossus Sword"},	// 100% ctc level 44 Chain Lightning on death, 25% ctc level 18 Glacial Spike on attack, level 22 Blood Golem (15 charges)
{rw:1, name:"Silence ­ ­ - ­ ­ Colossus Blade", req_level:55, e_damage:200, all_skills:2, ias:20, fhr:20, damage_vs_undead:75, ar_vs_undead:50, mana_leech:11, blind_on_hit:33, flee_on_hit:25, all_res:75, mana_per_kill:2, mf:30, req:-20, twoHanded:1, type:"sword", base:"Colossus Blade", pod_changes:1, aura:"Cleansing", aura_lvl:7},
{rw:1, name:"Heart of the Oak ­ ­ - ­ ­ Flail", req_level:55, type:"mace", all_skills:3, fcr:40, mana_leech:7, dexterity:10, life_replenish:20, max_mana:15, all_res:40, max_life:8, cDamage_min:3, cDamage_max:14, base:"Flail", pod_changes:1},
{rw:1, name:"Kingslayer ­ ­ - ­ ­ Champion Sword", req_level:53, e_damage:270, ias:30, target_defense:-25, ar_bonus:20, cblow:33, owounds:50, oskill_Vengeance:1, pmh:1, strength:10, gf:40, twoHanded:1, type:"sword", base:"Champion Sword"},
{rw:1, name:"Rift ­ ­ - ­ ­ Caduceus", req_level:53, ar_bonus:20, mDamage_min:160, mDamage_max:250, fDamage_min:60, fDamage_max:180, all_attributes:10, dexterity:10, damage_to_mana:38, gf:75, req:-20, type:"scepter", base:"Caduceus"},	// 20% ctc level 16 Tornado on striking, 16% ctc level 21 Frozen Orb on attack, level 15 Iron Maiden (40 charges)
{rw:1, name:"Oath ­ ­ - ­ ­ Thunder Maul", req_level:59, e_damage:340, ias:50, damage_vs_demons:75, ar_vs_demons:100, pmh:1, energy:10, mAbsorb_flat:15, indestructible:1, ethereal:1, twoHanded:1, type:"hammer", base:"Thunder Maul"},	// 30% ctc level 20 Bone Spirit on striking, level 16 Heart of Wolverine (20 charges), level 17 Iron Golem (14 charges)
{rw:1, name:"Venom ­ ­ - ­ ­ Fanged Knife", req_level:49, itd:1, pDamage_all:273, pDamage_duration:6, mana_leech:7, pmh:1, flee_on_hit:25, type:"dagger", base:"Fanged Knife", pod_changes:1},	// level 13 Poison Nova (11 charges), level 15 Desecrate (27 charges)
{rw:1, name:"Crescent Moon ­ ­ - ­ ­ Thresher", req_level:47, e_damage:220, ias:20, enemy_lRes:-35, owounds:25, mAbsorb_flat:11, mana_per_kill:2, twoHanded:1, type:"polearm", base:"Thresher"},	// 10% ctc level 17 Chain Lightning on striking, 7% ctc level 13 Static Field on striking, level 18 Summon Spirit Wolf (30 charges)
{rw:1, name:"Lawbringer ­ ­ - ­ ­ Legend Sword", req_level:43, target_defense:-50, fDamage_min:150, fDamage_max:210, cDamage_min:130, cDamage_max:180, life_leech:7, peace:1, missile_defense:250, dexterity:10, gf:75, twoHanded:1, type:"sword", base:"Legend Sword", pod_changes:1, aura:"Sanctuary", aura_lvl:18},	// 20% ctc level 7 Decrepify on striking
{rw:1, name:"Voice of Reason ­ ­ - ­ ­ Champion Sword", req_level:43, ar:50, damage_vs_demons:350, damage_vs_undead:375, ar_vs_undead:50, cDamage_min:100, cDamage_max:220, enemy_cRes:-24, dexterity:10, cbf:1, gf:75, light_radius:1, twoHanded:1, type:"sword", base:"Champion Sword"},	// 15% ctc level 13 Frozen Orb on striking, 18% ctc level 20 Ice Blast on striking
{rw:1, name:"Passion ­ ­ - ­ ­ Berserker Axe", req_level:43, e_damage:210, ias:25, ar_bonus:80, damage_vs_undead:75, ar_vs_undead:50, lDamage_min:1, lDamage_max:50, oskill_Bash:1, oskill_Zeal:1, blind_on_hit:10, flee_on_hit:25, gf:75, twoHanded:1, type:"axe", base:"Berserker Axe", pod_changes:1},	// level 3 Heart of Wolverine (12 charges)
{rw:1, name:"Obedience ­ ­ - ­ ­ Great Poleaxe", req_level:41, e_damage:370, fhr:40, target_defense:-25, cDamage_min:3, cDamage_max:14, enemy_fRes:-25, cblow:40, defense:300, strength:10, dexterity:10, all_res:30, req:-20, twoHanded:1, type:"polearm", base:"Great Poleaxe"},	// 30% ctc level 21 Enflame on kill	TEST: Enflame oskill?
{rw:1, name:"Black ­ ­ - ­ ­ Tyrant Club", req_level:35, e_damage:120, ias:15, ar:200, cDamage_min:3, cDamage_max:14, cblow:40, knockback:1, vitality:10, mDamage_reduced:2, type:"mace", base:"Tyrant Club"},	// level 4 Corpse Explosion (12 charges)
{rw:1, name:"Honor ­ ­ - ­ ­ Scourge", req_level:27, e_damage:160, all_skills:1, damage_min:9, damage_max:9, ar:250, life_leech:7, dstrike:25, strength:10, life_replenish:10, mana_per_kill:2, light_radius:1, type:"mace", base:"Scourge"},
{rw:1, name:"Insight ­ ­ - ­ ­ Thresher", req_level:27, e_damage:260, fcr:35, damage_min:9, ar_bonus:250, fDamage_min:5, fDamage_max:30, pDamage_all:75, pDamage_duration:5, oskill_Lethal_Strike:6, all_attributes:5, mana_per_kill:2, mf:23, twoHanded:1, type:"polearm", base:"Thresher", aura:"Meditation", aura_lvl:17},
{rw:1, name:"Spirit ­ ­ - ­ ­ Crystal Sword", req_level:25, type:"sword", all_skills:2, fcr_per_level:0.375, fhr:55, life_leech:7, mana_per_level:1, missile_defense:75, mAbsorb_flat:8, pDamage_all:75, pDamage_duration:5, lDamage_min:1, lDamage_max:50, cDamage_min:3, cDamage_max:14, base:"Crystal Sword", pod_changes:1},
{rw:1, name:"King's Grace ­ ­ - ­ ­ Zweihander", req_level:25, e_damage:100, ar:150, damage_vs_demons:100, ar_vs_demons:100, damage_vs_undead:50, ar_vs_undead:100, fDamage_min:5, fDamage_max:30, cDamage_min:3, cDamage_max:14, life_leech:7, twoHanded:1, type:"sword", base:"Zweihander"},
{rw:1, name:"Strength ­ ­ - ­ ­ Cutlass", req_level:25, e_damage:35, life_leech:7, cblow:25, strength:20, vitality:10, mana_per_kill:2, life_per_hit:8, type:"sword", base:"Cutlass", pod_changes:1},
{rw:1, name:"Malice ­ ­ - ­ ­ Barbed Club", req_level:15, e_damage:33, damage_max:9, target_defense:-25, ar:50, owounds:100, pmh:1, monster_defense_per_hit:-100, life_replenish:-5, type:"club", base:"Barbed Club"},
{rw:1, name:"Steel ­ ­ - ­ ­ Scimitar", req_level:13, e_damage:20, ias:25, damage_min:3, damage_max:3, ar:50, owounds:50, mana_per_kill:2, light_radius:1, type:"sword", base:"Scimitar"},
{rw:1, name:"Holy Thunder ­ ­ - ­ ­ Divine Scepter", req_level:25, e_damage:60, damage_max:10, target_defense:-25, fDamage_min:5, fDamage_max:30, lDamage_min:21, lDamage_max:110, pDamage_all:75, pDamage_duration:5, lRes_max:5, lRes:60, skill_Fist_of_the_Heavens:3, skill_Vigor:3, skill_Holy_Shock:6, type:"scepter", base:"Divine Scepter", pod_changes:1},	// level 7 Teleport (60 charges)
{rw:1, name:"Leaf ­ ­ - ­ ­ Short Staff", req_level:19, skills_fire_all:3, fDamage_min:5, fDamage_max:30, skill_Blaze:6, skill_Warmth:6, skill_Fire_Bolt:6, defense_per_level:2, cRes:33, mana_per_kill:2, twoHanded:1, type:"staff", base:"Short Staff", pod_changes:1},
{rw:1, name:"Memory ­ ­ - ­ ­ Shillelagh", req_level:37, skills_sorceress:3, fcr:33, damage_min:9, target_defense:-25, defense_bonus:50, vitality:10, energy:10, max_mana:20, skill_Lightning_Mastery:3, skill_Static_Field:2, skill_Lightning_Surge:3, skill_Energy_Shield:6, twoHanded:1, type:"staff", base:"Shillelagh", pod_changes:1},	// (also has Lightning Surge deals 35% extra damage as physical) TODO: implement
{rw:1, name:"White ­ ­ - ­ ­ Ghost Wand", req_level:35, skills_poisonBone:3, fcr:20, flee_on_hit:25, vitality:10, mana:13, mDamage_reduced:4, skill_Summon_Mastery:4, skill_Bone_Spear:5, skill_Bone_Armor:3, skill_Desecrate:3, skill_Deadly_Poison:3, type:"wand", base:"Ghost Wand"},

{name:"Horadric Malus", type:"hammer", req_strength:15, req_dexterity:15, damage_vs_undead:150, damage_min:6, damage_max:15},
{name:"Staff of Kings", type:"staff", twoHanded:1, req_strength:25, damage_vs_undead:50, damage_min:10, damage_max:15, ias:50, all_res:10},
{name:"Horadric Staff", type:"staff", twoHanded:1, req_strength:30, damage_vs_undead:50, damage_min:12, damage_max:20, ias:50, all_res:10, pRes:25, life:10, mana:10},
{name:"The Gidbinn", type:"dagger", req_strength:15, req_dexterity:25, damage_min:3, damage_max:7},
{name:"Khalim's Flail", req_strength:41, req_dexterity:35, type:"mace", ias:50, ar:40, damage_vs_undead:50, damage_min:1, damage_max:15, lDamage_min:1, lDamage_max:20},
{name:"Khalim's Will", type:"mace", ias:50, ar:40, life_leech:6, mana_leech:6, damage_vs_undead:50, damage_min:1, damage_max:15, lDamage_min:1, lDamage_max:40},
{name:"Hellforge Hammer", type:"hammer", defense:35, fRes:40, damage_vs_undead:50, damage_min:6, damage_max:15, fDamage_min:5, fDamage_max:20},
{rarity:"common", name:"Wirt's Leg", type:"mace", damage_vs_undead:50, damage_min:2, damage_max:8},

{name:"Bane Ash", req_level:5, e_damage:60, damage_vs_undead:50, ias:20, mana:30, fRes:50, fDamage_min:4, fDamage_max:6, skill_Fire_Bolt:5, skill_Warmth:2, twoHanded:1, type:"staff", base:"Short Staff"},
{name:"Serpent Lord", req_level:9, e_damage:40, damage_vs_undead:50, pDamage_all:12, pDamage_duration:3, mana_leech:100, target_defense:-50, mana:10, pRes:50, light_radius:-1, twoHanded:1, type:"staff", base:"Long Staff"},
{name:"Spire of Lazarus", req_level:18, damage_vs_undead:50, lDamage_min:1, lDamage_max:28, skills_sorceress:1, skill_Lightning_Surge:2, skill_Chain_Lightning:1, skill_Static_Field:3, mana_regen:43, energy:15, damage_reduced:5, lRes:75, twoHanded:1, type:"staff", base:"Gnarled Staff"},
{name:"The Salamander", req_level:21, damage_vs_undead:50, fDamage_min:15, fDamage_max:32, fRes:30, skills_fire_all:2, skill_Warmth:3, skill_Fire_Ball:2, skill_Fire_Wall:1, twoHanded:1, type:"staff", base:"Battle Staff"},
{name:"The Iron Jang Bong", req_level:28, e_damage:100, damage_vs_undead:50, ar_bonus:50, fcr:20, skills_sorceress:2, skill_Frost_Nova:3, skill_Blaze:2, skill_Nova:2, defense:30, twoHanded:1, type:"staff", base:"War Staff"},
{name:"Razorswitch", req_level:28, all_skills:1, fcr:30, life:80, mana:175, all_res:50, mDamage_reduced:15, thorns:15, damage_vs_undead:50, twoHanded:1, type:"staff", base:"Jo Staff"},
{name:"Ribcracker", req_level:31, damage_min:30, damage_max:65, e_damage:300, damage_vs_undead:50, cblow:50, ias:50, fhr:50, defense_bonus:100, defense:100, dexterity:15, twoHanded:1, type:"staff", base:"Quarterstaff"},
{name:"Chromatic Ire", req_level:35, damage_vs_undead:50, fcr:20, skills_sorceress:3, max_life:25, all_res:40, thorns_lightning:20, skill_Cold_Mastery:1, skill_Lightning_Mastery:1, skill_Fire_Mastery:1, twoHanded:1, type:"staff", base:"Cedar Staff"},
{name:"Warpspear", req_level:39, damage_vs_undead:50, itd:1, missile_defense:250, skills_sorceress:3, skill_Energy_Shield:3, skill_Telekinesis:3, skill_Teleport:3, twoHanded:1, type:"staff", base:"Gothic Staff"},
{name:"Skull Collector", req_level:41, damage_vs_undead:50, mana_per_kill:20, max_mana:20, mf_per_level:1, all_skills:2, twoHanded:1, type:"staff", base:"Rune Staff"},
{name:"Ondal's Wisdom", req_level:66, damage_vs_undead:50, fcr:45, defense:550, energy:50, mDamage_reduced:8, all_skills:4, oskill_Ball_Lightning:20, type:"staff", twoHanded:1, base:"Elder Staff", pod_changes:1},	// OSKILL
{name:"Mang Song's Lesson", req_level:82, all_skills:5, fcr:30, enemy_lRes:-15, enemy_cRes:-15, enemy_fRes:-15, mana_regen:10, damage_vs_undead:50, twoHanded:1, type:"staff", base:"Archon Staff"},

{name:"Torch of Iro", req_level:5, damage_vs_undead:50, fDamage_min:5, fDamage_max:9, skills_necromancer:1, energy:10, mana_regen:5, life_leech:6, light_radius:3, type:"wand", base:"Wand"},
{name:"Maelstrom", req_level:14, damage_vs_undead:50, lDamage_min:1, lDamage_max:9, mana:13, fcr:30, lRes:40, skill_Iron_Maiden:3, skill_Amplify_Damage:3, skill_Terror:3, skill_Corpse_Explosion:3, type:"wand", base:"Yew Wand"},
{name:"Gravenspine", req_level:20, damage_vs_undead:50, skills_necromancer:2, cDamage_min:4, cDamage_max:8, mana_leech:5, mana:50, dexterity:10, strength:10, type:"wand", base:"Bone Wand"},
{name:"Ume's Lament", req_level:28, damage_vs_undead:50, skills_necromancer:2, fcr:20, mana:40, flee_on_hit:50, skill_Decrepify:2, skill_Terror:3, type:"wand", base:"Grim Wand"},
{name:"Suicide Branch", req_level:33, damage_vs_undead:50, all_skills:1, fcr:50, max_mana:10, all_res:10, life:40, thorns:25, type:"wand", base:"Burnt Wand"},
{name:"Carin Shard", req_level:35, damage_vs_undead:50, mana_per_level:1.25, life_per_level:1.25, skills_necromancer:1, skills_summoning_necromancer:2, fcr:10, fhr:30, life_replenish:5, type:"wand", base:"Petrified Wand"},
{name:"Arm of King Leoric", req_level:36, damage_vs_undead:50, mana_per_level:1.25, fcr:10, skill_Terror:2, skill_Raise_Skeletal_Mage:2, skill_Summon_Mastery:3, skill_Raise_Skeleton_Warrior:3, skills_summoning_necromancer:2, skills_poisonBone:2, type:"wand", base:"Tomb Wand"},	// 10% ctc level 2 Bone Prison when struck? 5% ctc level 10 Bone Spirit when struck
{name:"Blackhand Key", req_level:41, damage_vs_undead:50, skills_necromancer:2, skills_curses:1, damage_to_mana:20, fcr:30, fRes:37, life:50, light_radius:-2, type:"wand", base:"Grave Wand"},	// level 13 Grim Ward (30 charges)
{name:"Boneshade", req_level:79, damage_vs_undead:50, skills_necromancer:2, skill_Bone_Spirit:2, skill_Bone_Spear:3, skill_Bone_Wall:3, skill_Bone_Armor:5, skill_Teeth:5, fcr:25, type:"wand", base:"Lich Wand"},
{name:"Death's Web", req_level:66, damage_vs_undead:50, enemy_pRes:-50, mana_per_kill:12, life_per_kill:12, all_skills:2, skills_poisonBone:2, type:"wand", base:"Unearthed Wand"},

{name:"Knell Striker", req_level:5, e_damage:80, damage_vs_undead:50, cblow:25, ar:35, pRes:20, fRes:20, mana:15, type:"scepter", base:"Scepter"},
{name:"Rusthandle", req_level:18, e_damage:60, damage_vs_undead:110, damage_min:3, damage_max:7, life_leech:8, skills_paladin:1, mDamage_reduced:1, skill_Precision:3, skill_Vengeance:3, type:"scepter", base:"Grand Scepter"},
{name:"Stormeye", req_level:30, e_damage:120, damage_vs_undead:50, cDamage_min:3, cDamage_max:5, lDamage_min:1, lDamage_max:6, life_replenish:10, skill_Fist_of_the_Heavens:1, skill_Holy_Shock:3, skill_Resist_Lightning:5, type:"scepter", base:"War Scepter"},
{name:"Zakarum's Hand", req_level:37, e_damage:220, damage_vs_undead:50, ias:30, mana_leech:8, itd:1, mana_regen:10, heal_stam:15, skill_Holy_Shock:2, skill_Holy_Freeze:2, type:"scepter", base:"Rune Scepter"},	// 6% ctc level 5 Blizzard on striking
{name:"The Fetid Sprinkler", req_level:38, e_damage:190, damage_vs_undead:50, damage_min:15, damage_max:25, skills_paladin:2, pDamage_all:160, pDamage_duration:4, ar:200, type:"scepter", base:"Holy Water Sprinkler"},	// 10% ctc level 1 Confuse on striking, 5% ctc level 1 Decrepify on striking
{name:"Hand of Blessed Light", req_level:42, e_damage:160, damage_vs_undead:50, damage_min:20, damage_max:45, skills_paladin:2, ar_bonus:100, mana_regen:15, defense:50, skill_Fist_of_the_Heavens:2, skill_Holy_Bolt:4, light_radius:4, type:"scepter", base:"Divine Scepter"},	// 5% ctc level 4 Fist of the Heavens on striking
{name:"Heaven's Light", req_level:61, e_damage:300, damage_vs_undead:50, target_defense:-33, ias:20, cblow:33, life_per_demon_kill:20, skills_paladin:3, light_radius:3, sockets:0, type:"scepter", base:"Mighty Scepter", pod_changes:1},	// pod_changes: +50% Increased Sanctuary Area Damage Rate (no longer comes with 1-2 sockets)
{name:"The Redeemer", req_level:72, e_damage:300, damage_vs_undead:50, damage_min:120, damage_vs_demons:250, skills_paladin:2, target_defense:-33, skill_Redemption:4, skill_Holy_Bolt:4, light_radius:3, req:-60, type:"scepter", base:"Mighty Scepter", pod_changes:1},	// pod_changes: ???
{name:"Astreon's Iron Ward", type:"scepter", req_level:66, e_damage:290, damage_vs_undead:50, damage_min:40, damage_max:85, mDamage_min:80, mDamage_max:240, cblow:33, slow_target:25, damage_reduced:7, skills_combat_paladin:4, ias:10, bonus_ar:200, base:"Caduceus"},
{name:"Felloak", req_level:3, e_damage:80, damage_vs_undead:50, fDamage_min:6, fDamage_max:8, knockback:1, lRes:60, fRes:20, type:"club", base:"Club"},
{name:"Stoutnail", req_level:5, e_damage:100, damage_vs_undead:50, vitality:7, thorns:10, mDamage_reduced:2, type:"club", base:"Spiked Club"},
{name:"Crushflange", req_level:9, e_damage:60, damage_vs_undead:50, cblow:33, knockback:1, fRes:50, strength:15, light_radius:2, type:"mace", base:"Mace"},
{name:"Bloodrise", req_level:15, e_damage:120, damage_vs_undead:50, owounds:25, ias:10, life_leech:5, ar_bonus:50, skill_Sacrifice:3, light_radius:2, type:"mace", base:"Morning Star"},
{name:"The General's Tan Do Li Ga", req_level:21, e_damage:60, damage_vs_undead:50, damage_min:1, damage_max:20, ias:20, mana_leech:5, slows_target:50, defense:25, type:"mace", base:"Flail"},
{name:"Ironstone", req_level:27, e_damage:150, damage_vs_undead:50, lDamage_min:1, lDamage_max:10, ar:150, strength:10, type:"hammer", base:"War Hammer"},
{name:"Bonesnap", req_level:24, e_damage:300, damage_vs_undead:100, cblow:40, cRes:30, fRes:30, type:"hammer", twoHanded:1, base:"Maul"},
{name:"Steeldriver", req_level:29, e_damage:250, damage_vs_undead:50, ias:40, req:-50, heal_stam:25, type:"hammer", twoHanded:1, base:"Great Maul"},
{name:"Dark Clan Crusher", req_level:34, e_damage:195, damage_vs_demons:200, damage_vs_undead:50, ar_vs_demons:200, ar_bonus:25, life_per_demon_kill:15, skills_druid:2, type:"club", base:"Cudgel"},
{name:"Fleshrender", req_level:38, e_damage:200, damage_vs_undead:50, damage_min:35, damage_max:50, dstrike:20, cblow:20, owounds:25, pmh:1, skills_druid:1, skills_shapeshifting:2, type:"club", base:"Barbed Club"},
{name:"Sureshrill Frost", req_level:39, e_damage:180, damage_vs_undead:50, damage_min:5, damage_max:10, cDamage_min:63, cDamage_max:112, freezes_target:3, cbf:1, type:"mace", base:"Flanged Mace"},	// level 9 Frozen Orb (50 charges)
{name:"Moonfall", req_level:41, e_damage:150, damage_vs_undead:50, damage_min:10, damage_max:15, fDamage_min:55, fDamage_max:115, mDamage_reduced:12, light_radius:2, type:"mace", base:"Jagged Star"},	// 5% ctc level 6 Meteor on striking, level 11 Meteor (60 charges)
{name:"Baezil's Vortex", req_level:45, e_damage:200, damage_vs_undead:50, lDamage_min:1, lDamage_max:150, ias:20, lRes:25, mana:100, type:"mace", base:"Knout"},	// 5% ctc level 8 Nova on striking, level 15 Nova (80 charges)
{name:"Earthshaker", req_level:43, e_damage:180, damage_vs_undead:50, ias:30, blind_on_hit:1, knockback:1, skills_elemental:3, type:"hammer", base:"Battle Hammer"},	// 5% ctc level 7 Fissure on striking
{name:"Bloodtree Stump", req_level:48, e_damage:220, damage_vs_undead:50, cblow:50, all_res:20, strength:25, skills_masteries:2, skill_Blunt_Weapon_Mastery:3, twoHanded:1, type:"hammer", base:"War Club"},
{name:"The Gavel of Pain", req_level:45, e_damage:160, damage_vs_undead:50, damage_min:12, damage_max:30, thorns:26, indestructible:1, ethereal:0, twoHanded:1, type:"hammer", base:"Martel de Fer"},	// 5% ctc level 1 Iron Maiden when struck, 5% ctc level 1 Amplify Damage on striking, level 8 Amplify Damage (3 charges)
{name:"Nord's Tenderizer", req_level:68, e_damage:330, damage_vs_undead:50, cDamage_min:205, cDamage_max:455, freezes_target:4, cAbsorb:15, ias:25, ar_bonus:180, type:"club", base:"Truncheon"},	// level 16 Blizzard (12 charges)
{name:"Demon Limb", req_level:63, e_damage:230, damage_vs_undead:50, damage_vs_demons:123, fDamage_min:222, fDamage_max:333, life_leech:13, fRes:20, autorepair:1, type:"club", base:"Tyrant Club"},	// level 23 Enflame (20 charges)
{name:"Baranar's Star", req_level:65, e_damage:200, damage_vs_undead:50, fDamage_min:1, fDamage_max:200, lDamage_min:1, lDamage_max:200, cDamage_min:1, cDamage_max:200, ias:50, ar_bonus:200, dexterity:15, strength:15, type:"mace", base:"Devil Star"},
{name:"Horizon's Tornado", req_level:64, e_damage:280, damage_vs_undead:50, ias:50, slows_target:20, req:-20, type:"mace", base:"Scourge"},	// 20% ctc level 15 Tornado on striking
{name:"Stone Crusher", req_level:68, e_damage:320, damage_vs_undead:50, damage_min:30, target_defense:-25, cblow:40, monster_defense_per_hit:-100, strength:30, type:"hammer", base:"Legendary Mallet"},
{name:"Schaefer's Hammer", req_level:79, e_damage:130, damage_vs_undead:50, max_damage_per_level:2, lDamage_min:50, lDamage_max:200, ar_per_level:8, lRes:75, life:50, light_radius:1, indestructible:1, ethereal:0, type:"hammer", base:"Legendary Mallet", pod_changes:1},	// 15% ctc level 26 Ball Lightning on striking
{name:"Windhammer", req_level:68, e_damage:230, damage_vs_undead:50, cblow:50, ias:60, type:"hammer", twoHanded:1, base:"Ogre Maul"},	// 33% ctc level 22 Twister on striking
{name:"Earth Shifter", req_level:69, e_damage:300, damage_vs_undead:50, skills_elemental:7, ias:10, cblow:33, fcr:10, type:"hammer", twoHanded:1, base:"Thunder Maul"},	// 25% ctc level 14 Fissure on striking, level 14 Volcano (30 charges)
{name:"The Cranium Basher", twoHanded:1, req_level:87, type:"hammer", cblow:75, ias:20, all_res:25, strength:25, damage_min:20, e_damage:240, damage_vs_undead:50, ethereal:0, base:"Thunder Maul"},

{name:"The Gnasher", req_level:5, e_damage:70, cblow:20, owounds:50, strength:8, type:"axe", base:"Hand Axe"},
{name:"Deathspade", req_level:9, e_damage:70, damage_min:8, ar_bonus:15, blind_on_hit:1, mana_per_kill:4, type:"axe", base:"Axe"},
{name:"Bladebone", req_level:15, e_damage:50, damage_vs_undead:100, fDamage_min:8, fDamage_max:12, ias:20, ar_vs_undead:40, defense:20, type:"axe", base:"Double Axe"},
{name:"Skull Splitter", req_level:21, e_damage:100, lDamage_min:1, lDamage_max:15, ar:100, owounds:15, blind_on_hit:1, mana_regen:20, type:"axe", base:"Military Pick"},
{name:"Rakescar", req_level:27, e_damage:150, pDamage_all:38, pDamage_duration:3, ias:30, ar:50, pRes:50, type:"axe", base:"War Axe"},
{name:"Axe of Fechmar", req_level:8, e_damage:90, freezes_target:3, cRes:50, light_radius:2, twoHanded:1, type:"axe", base:"Large Axe"},
{name:"Goreshovel", req_level:14, e_damage:50, damage_max:9, owounds:60, ias:30, strength:25, twoHanded:1, type:"axe", base:"Broad Axe"},
{name:"The Chieftain", req_level:19, e_damage:100, ias:20, lDamage_min:1, lDamage_max:40, all_res:20, mana_per_kill:6, twoHanded:1, type:"axe", base:"Battle Axe"},
{name:"Brainhew", req_level:25, e_damage:80, damage_min:14, fDamage_min:15, fDamage_max:35, mana_leech:13, mana:25, light_radius:4, twoHanded:1, type:"axe", base:"Great Axe"},
{name:"Humongous", req_level:29, e_damage:120, damage_min:8, damage_max:25, cblow:33, strength:30, req:20, twoHanded:1, type:"axe", base:"Giant Axe"},
{name:"Coldkill", req_level:36, e_damage:190, ias:30, cDamage_min:40, cRes_max:15, cRes:15, type:"axe", base:"Hatchet"},	// 10% ctc level 10 Ice Blast on striking, 10% ctc level 5 Frost Nova when struck
{name:"Butcher's Pupil", req_level:39, e_damage:200, damage_min:30, damage_max:50, dstrike:35, owounds:25, ias:30, indestructible:1, ethereal:0, type:"axe", base:"Cleaver"},
{name:"Islestrike", req_level:43, e_damage:190, cblow:25, skills_druid:2, missile_defense:50, all_attributes:10, skill_Fury:1, skill_Maul:1, type:"axe", base:"Twin Axe"},
{name:"Pompeii's Wrath", req_level:45, e_damage:170, fDamage_min:35, fDamage_max:150, slows_target:50, kick_damage_per_level:4, type:"axe", base:"Crowbill", pod_changes:1},	// 4% ctc level 8 Volcano on striking, 25% ctc level 17 Fissure when struck
{name:"Guardian Naga", req_level:48, e_damage:180, damage_max:20, pDamage_all:250, pDamage_duration:10, pRes:30, thorns:15, type:"axe", base:"Naga"},	// 5% ctc level 8 Poison Nova on striking
{name:"Warlord's Trust", req_level:35, e_damage:175, autorepair:1, vitality_per_level:0.5, life_replenish:20, all_res:10, defense:75, twoHanded:1, type:"axe", base:"Military Axe"},
{name:"Spellsteel", req_level:39, e_damage:165, fcr:10, req:-60, mana_regen:25, mana:100, mDamage_reduced:15, twoHanded:1, type:"axe", base:"Bearded Axe"},	// level 12 Firestorm (60 charges), level 10 Holy Bolt (100 charges), level 1 Teleport (20 charges)
{name:"Stormrider", req_level:41, e_damage:100, damage_min:35, damage_max:75, lDamage_min:1, lDamage_max:200, thorns_lightning:15, twoHanded:1, type:"axe", base:"Tabar"},	// 15% ctc level 5 Charged Bolt when struck, 10% ctc level 20 Charged Bolt on striking, 5% ctc level 10 Chain Lightning on striking
{name:"Boneslayer Blade", req_level:42, e_damage:220, ar_vs_undead_per_level:5, damage_vs_undead_per_level:2.5, ias:20, ar_bonus:35, strength:8, twoHanded:1, type:"axe", base:"Gothic Axe"},	// 50% ctc level 28 Holy Bolt when struck, level 20 Holy Bolt (200 charges)
{name:"The Minotaur", req_level:45, e_damage:200, damage_min:20, damage_max:30, slows_target:50, cblow:30, blind_on_hit:2, half_freeze:1, strength:20, twoHanded:1, type:"axe", base:"Ancient Axe"},
{name:"Razor's Edge", req_level:67, e_damage:225, ias:40, target_defense:-33, dstrike:50, owounds:50, type:"axe", base:"Tomahawk"},
{name:"Rune Master", req_level:72, e_damage:270, cbf:1, cRes_max:5, sockets:5, type:"axe", base:"Ettin Axe", pod_changes:1},	// cDamage_per_socketed:60 (runes/gems only - 60*5 = 300)
{name:"Cranebeak", req_level:63, e_damage:300, ias:40, target_defense:-25, lDamage_min:1, lDamage_max:305, mf:50, type:"axe", base:"War Spike"},	// level 8 Raven (15 charges)
{name:"Death Cleaver", req_level:70, type:"axe", e_damage:280, ias:40, target_defense:-33, dstrike:66, life_per_kill:9, base:"Berserker Axe"},
{name:"Ethereal Edge", req_level:74, e_damage:180, damage_vs_demons:200, ar:350, ias:25, fAbsorb_flat:12, life_per_demon_kill:10, indestructible:1, ethereal:1, twoHanded:1, type:"axe", base:"Silver-Edged Axe"},
{name:"Hellslayer", req_level:66, e_damage:100, max_damage_per_level:3, fDamage_min:150, fDamage_max:250, strength_per_level:0.5, dexterity_per_level:0.5, life:25, twoHanded:1, type:"axe", base:"Decapitator"},	// 10% ctc level 20 Fireball on attack
{name:"Messerschmidt's Reaver", req_level:70, e_damage:200, max_damage_per_level:2.5, fDamage_min:20, fDamage_max:240, ar_bonus:100, all_attributes:15, twoHanded:1, type:"axe", base:"Champion Axe"},
{name:"Executioner's Justice", twoHanded:1, type:"axe", req_level:75, cblow:25, ias:30, target_defense:-33, e_damage:290, base:"Glorious Axe"},

{name:"Rixot's Keen", req_level:2, e_damage:100, damage_min:5, cblow:25, ar_bonus:20, defense:25, light_radius:2, type:"sword", base:"Short Sword"},
{name:"Blood Crescent", req_level:7, e_damage:80, owounds:33, ias:15, life_leech:15, all_res:15, life:15, light_radius:4, type:"sword", base:"Scimitar"},
{name:"Skewer of Krintiz", req_level:10, e_damage:50, damage_min:3, damage_max:7, itd:1, mana_leech:7, dexterity:10, strength:10, type:"sword", base:"Saber"},
{name:"Gleamscythe", req_level:13, e_damage:100, cDamage_min:3, cDamage_max:5, ias:20, defense:20, mana:30, light_radius:3, type:"sword", base:"Falchion"},
{name:"Griswold's Edge", req_level:17, e_damage:120, fDamage_min:12, fDamage_max:25, ias:10, ar:100, strength:12, knockback:1, type:"sword", base:"Broad Sword"},
{name:"Hellplague", req_level:22, e_damage:80, skills_fire_all:2, fDamage_min:25, fDamage_max:75, pDamage_min:28, pDamage_max:56, pDamage_duration:6, life_leech:5, mana_leech:5, type:"sword", base:"Long Sword"},
{name:"Culwen's Point", req_level:29, e_damage:80, all_skills:1, poison_length_reduced:50, ias:20, fhr:20, ar:60, type:"sword", base:"War Sword"},
{name:"Shadowfang", req_level:12, e_damage:100, cDamage_min:10, cDamage_max:30, life_leech:9, mana_leech:9, cRes:20, light_radius:-2, twoHanded:1, type:"sword", base:"Two-handed Sword"},
{name:"Soulflay", req_level:19, e_damage:100, ias:10, life_leech:4, mana_leech:10, all_res:5, twoHanded:1, type:"sword", base:"Claymore"},
{name:"Kinemil's Awl", req_level:23, e_damage:100, ar:150, fDamage_min:6, fDamage_max:40, mana:20, skill_Holy_Fire:6, twoHanded:1, type:"sword", base:"Giant Sword"},
{name:"Blacktongue", req_level:26, e_damage:60, pDamage_max:113, pDamage_duration:6, pmh:1, ar:50, pRes:50, twoHanded:1, type:"sword", base:"Bastard Sword"},
{name:"Ripsaw", req_level:26, e_damage:100, damage_max:15, owounds:80, mana_leech:6, twoHanded:1, type:"sword", base:"Flamberge"},
{name:"The Patriarch", req_level:29, e_damage:120, blind_on_hit:1, strength:10, gf:100, mDamage_reduced:3, damage_reduced:3, twoHanded:1, type:"sword", base:"Great Sword"},
{name:"Bloodletter", req_level:30, e_damage:140, damage_min:12, damage_max:45, ar:90, ias:20, slower_stam_drain:10, life_leech:8, skill_Whirlwind:3, skill_Edged_Weapon_Mastery:4, type:"sword", base:"Gladius", pod_changes:1},
{name:"Coldsteel Eye", req_level:31, e_damage:250, dstrike:50, ias:20, mana_leech:6, slows_target:30, blind_on_hit:1, type:"sword", base:"Cutlass"},
{name:"Hexfire", req_level:33, e_damage:160, damage_min:35, damage_max:40, skills_fire_all:3, itd:1, fRes:25, fRes_max:10, type:"sword", base:"Shamshir", pod_changes:1},	// level 6 Hydra (36 charges), extra Hydra
{name:"Blade of Ali Baba", req_level:35, e_damage:120, gf_per_level:2.5, mf_per_level:1, mana:15, dexterity:15, sockets:2, type:"sword", base:"Tulwar"},
{name:"Ginther's Rift", req_level:37, e_damage:150, mDamage_min:50, mDamage_max:120, ias:30, mDamage_reduced:12, autorepair:1, type:"sword", base:"Dimensional Blade"},
{name:"Headstriker", req_level:39, e_damage:150, max_damage_per_level:1, dstrike_per_level:1.5, pmh:1, strength:15, type:"sword", base:"Battle Sword"},
{name:"Plague Bearer", req_level:41, e_damage:150, damage_min:10, damage_max:45, pDamage_all:300, pDamage_duration:8, pRes:45, skill_Rabies:5, type:"sword", base:"Rune Sword"},	// 5% ctc level 4 Poison Nova on striking
{name:"The Atlantean", req_level:42, e_damage:250, skills_paladin:2, ar_bonus:50, defense:75, vitality:8, dexterity:12, strength:16, type:"sword", base:"Ancient Sword"},
{name:"Crainte Vomir", req_level:42, e_damage:200, ias:50, slows_target:35, monster_defense_per_hit:-70, frw:20, pdr:10, twoHanded:1, type:"sword", base:"Espandon"},
{name:"Bing Sz Wang", req_level:43, e_damage:160, skills_cold_all:2, oskill_Cold_Mastery:5, ias:20, cDamage_min:50, cDamage_max:140, strength:20, req:-30, freezes_target:2, twoHanded:1, type:"sword", base:"Dacian Falx", pod_changes:1},	// 5% ctc level 3 Frozen Orb on striking
{name:"The Vile Husk", req_level:44, e_damage:200, damage_vs_undead_per_level:7.5, ar_vs_undead_per_level:10, pDamage_all:250, pDamage_duration:6, pRes:50, twoHanded:1, type:"sword", base:"Tusk Sword"},	// 6% ctc level 1 Amplify Damage on striking
{name:"Cloudcrack", req_level:45, e_damage:200, lDamage_min:1, lDamage_max:240, lRes_max:10, defense:30, thorns:15, skills_defensive:2, skills_offensive:2, light_radius:2, twoHanded:1, type:"sword", base:"Gothic Sword"},	// 6% ctc level 7 Fist of the Heavens on striking
{name:"Todesfaelle Flamme", req_level:46, e_damage:160, fDamage_min:150, fDamage_max:300, enemy_fRes:-5, fRes:40, twoHanded:1, type:"sword", base:"Zweihander", pod_changes:1, aura:"Righteous Fire", aura_level:1},	// 10% ctc level 11 Fire Ball on attack, level 15 Enflame (45 charges), Righteous Fire aura
{name:"Swordguard", req_level:48, e_damage:180, defense_per_level:5, damage_to_mana:30, req:-50, all_res:20, fhr:20, ibc:20, missile_defense:100, melee_defense:200, twoHanded:1, type:"sword", base:"Executioner Sword"},
{name:"Djinn Slayer", req_level:65, e_damage:240, damage_vs_demons:150, ar_vs_demons:300, fDamage_min:250, fDamage_max:500, mana_leech:6, lAbsorb_flat:7, sockets:2, type:"sword", base:"Ataghan"},
{name:"Bloodmoon", req_level:61, e_damage:260, life_leech:15, owounds:50, life_per_kill:13, type:"sword", base:"Elegant Blade"},	// level 15 Blood Golem (9 charges)
{name:"Frostwind", req_level:70, e_damage:230, ias:25, cDamage_min:237, cDamage_max:486, oskill_Frigerate:14, freezes_target:4, cAbsorb:15, half_freeze:1, type:"sword", base:"Cryptic Sword", pod_changes:1},
{name:"Flamebellow", req_level:71, e_damage:240, fDamage_min:233, fDamage_max:482, skills_fire_all:3, oskill_Flame_Dash:18, strength:20, vitality:10, fAbsorb:30, twoHanded:1, type:"sword", base:"Balrog Blade", pod_changes:1},	// 12% ctc level 16 Firestorm on striking
{name:"Doombringer", req_level:69, e_damage:250, damage_min:30, damage_max:100, ar_bonus:40, max_life:20, life_leech:7, indestructible:1, ethereal:0, twoHanded:1, type:"sword", base:"Champion Sword"},	// 8% ctc level 3 Weaken on striking
{name:"The Grandfather", req_level:81, e_damage:250, max_damage_per_level:2.5, ar_bonus:50, life:80, all_attributes:20, indestructible:1, oskill_Edged_Weapon_Mastery:3, life_regen:2, ethereal:0, type:"sword", twoHanded:1, base:"Colossus Blade", pod_changes:1},
{name:"Lightsabre", req_level:58, type:"sword", e_damage:200, mana_leech:7, ias:20, itd:1, lAbsorb:15, light_radius:7, damage_min:10, damage_max:30, mDamage_min:60, mDamage_max:120, lDamage_min:1, lDamage_max:200, ethereal:0, base:"Phase Blade", pod_changes:1},	// 5% ctc level 20 Chain Lightning on attack
{name:"Azurewrath", req_level:85, e_damage:270, ias:30, mDamage_min:250, mDamage_max:500, cDamage_min:250, cDamage_max:500, all_skills:1, all_attributes:10, light_radius:3, type:"sword", ethereal:0, base:"Phase Blade", aura:"Sanctuary", aura_lvl:13},

{name:"Gull", req_level:4, damage_min:1, damage_max:15, mf:100, mana:-5, type:"dagger", base:"Dagger"},
{name:"The Diggler", req_level:11, e_damage:50, itd:1, ias:30, cRes:25, fRes:25, dexterity:10, type:"dagger", base:"Dirk"},
{name:"The Jade Tan Do", req_level:19, ar:150, pDamage_all:180, pDamage_duration:4, pRes:95, pRes_max:20, cbf:1, type:"dagger", base:"Kriss"},
{name:"Spectral Shard", req_level:25, fcr:50, ar:55, all_res:10, mana:50, type:"dagger", base:"Blade"},
{name:"Spineripper", req_level:32, e_damage:240, damage_min:15, damage_max:27, ias:15, skills_necromancer:1, pmh:1, itd:1, life_leech:8, dexterity:10, type:"dagger", base:"Poignard"},
{name:"Heart Carver", req_level:36, e_damage:240, damage_min:15, damage_max:35, dstrike:35, itd:1, skill_Grim_Ward:4, skill_Find_Item:4, skill_Find_Potion:4, type:"dagger", base:"Rondel"},
{name:"Blackbog's Sharp", req_level:38, pDamage_all:488, pDamage_duration:10, damage_min:15, damage_max:45, ias:30, slows_target:50, defense:50, skill_Poison_Nova:4, skill_Desecrate:4, skill_Deadly_Poison:5, type:"dagger", base:"Cinquedeas"},
{name:"Stormspike", req_level:41, e_damage:150, lDamage_min:1, lDamage_max:120, lRes_per_level:1, thorns_lightning:20, ias_per_8_dexterity:1, lDamage_max_per_2_energy:1, type:"dagger", base:"Stilleto", pod_changes:1},	// ias_per_8_dexterity:1, lDamage_max_per_2_energy:1 TODO: implement
{name:"Wizardspike", req_level:61, mana_per_level:2, fcr:50, mana_regen:15, max_mana:15, all_res:75, indestructible:1, ethereal:0, type:"dagger", base:"Bone Knife"},
{name:"Fleshripper", req_level:68, e_damage:300, target_defense:-50, cblow:25, dstrike:33, owounds:50, pmh:1, slows_target:20, type:"dagger", base:"Fanged Knife"},
{name:"Ghostflame", req_level:66, e_damage:240, itd:1, mDamage_min:108, mDamage_max:108, mana_leech:15, light_radius:2, type:"dagger", indestructible:1, ethereal:1, base:"Legend Spike"},

{name:"Dimoak's Hew", req_level:8, e_damage:100, ias:20, dexterity:15, defense:-8, twoHanded:1, type:"polearm", base:"Bardiche"},
{name:"Steelgoad", req_level:14, e_damage:80, dstrike:30, ar:30, all_res:5, flee_on_hit:75, twoHanded:1, type:"polearm", base:"Voulge"},
{name:"Soul Harvest", req_level:19, e_damage:90, owounds:30, mana_leech:10, ar:45, energy:5, all_res:20, twoHanded:1, type:"polearm", base:"Scythe"},
{name:"The Battlebranch", req_level:25, e_damage:70, ias:30, ar:100, life_leech:7, dexterity:10, twoHanded:1, type:"polearm", base:"Poleaxe"},
{name:"Woestave", req_level:28, e_damage:40, owounds:50, slows_target:50, blind_on_hit:3, monster_defense_per_hit:-50, freezes_target:1, pmh:1, light_radius:-3, twoHanded:1, type:"polearm", base:"Halberd"},
{name:"The Grim Reaper", req_level:29, e_damage:20, damage_min:15, dstrike:100, mana_leech:5, pmh:1, twoHanded:1, type:"polearm", base:"War Scythe"},
{name:"The Meat Scraper", req_level:41, e_damage:200, owounds:50, ias:30, life_leech:10, mf:25, skills_masteries:3, twoHanded:1, type:"polearm", base:"Lochaber Axe"},
{name:"Blackleach Blade", req_level:41, e_damage:140, max_damage_per_level:1.25, req:-25, light_radius:-2, life_leech:8, twoHanded:1, type:"polearm", base:"Bill"},	// 5% ctc level 5 Weaken on striking
{name:"Athena's Wrath", req_level:42, e_damage:180, max_damage_per_level:1, life_per_level:1, ias:30, skills_druid:3, dexterity:15, twoHanded:1, type:"polearm", base:"Battle Scythe"},
{name:"Pierre Tombale Couant", req_level:43, e_damage:220, damage_min:12, damage_max:20, dstrike:55, ar:200, skills_barbarian:3, mana_leech:6, fhr:30, twoHanded:1, type:"polearm", base:"Partizan"},
{name:"Husoldal Evo", req_level:44, e_damage:200, damage_min:20, damage_max:32, ias:20, ar:250, pmh:1, life_replenish:20, twoHanded:1, type:"polearm", base:"Bec-de-Corbin"},
{name:"Grim's Burning Dead", req_level:45, e_damage:180, fDamage_min:131, fDamage_max:232, skills_necromancer:3, target_defense:-50, defense_bonus:20, ar:250, fRes:50, req:-50, thorns:8, twoHanded:1, type:"polearm", base:"Grim Scythe"},
{name:"Bonehew", req_level:64, e_damage:320, pmh:1, ias:30, max_energy:20, sockets:3, twoHanded:1, type:"polearm", base:"Ogre Axe", pod_changes:1},	// Bone Spear fires 2 Additional Projectiles, 50% ctc level 16 Bone Spear on attack	TODO: implement max_energy
{name:"Stormspire", req_level:70, e_damage:250, lDamage_min:1, lDamage_max:237, ias:30, lRes:50, strength:10, thorns_lightning:27, indestructible:1, ethereal:0, twoHanded:1, type:"polearm", base:"Giant Thresher", pod_changes:1},	// 9% ctc level 20 Charged Bolt when struck, 13% ctc level 24 Ball Lightning on attack
{name:"The Reaper's Toll", req_level:75, e_damage:240, itd:1, cDamage_min:4, cDamage_max:44, life_leech:15, dstrike:33, req:-25, type:"polearm", twoHanded:1, base:"Thresher"},	// 33% ctc level 1 Decrepify on striking
{name:"Tomb Reaver", req_level:84, e_damage:280, damage_vs_undead:230, ias:60, ar_vs_undead:350, all_res:50, life_per_kill:14, mf:80, light_radius:4, sockets:3, twoHanded:1, type:"polearm", base:"Cryptic Axe"},	// 10% Reanimate as: Returned (EFFECT)
{name:"The Dragon Chang", req_level:8, damage_vs_undead:100, damage_min:10, fDamage_min:3, fDamage_max:6, ar:35, light_radius:2, twoHanded:1, type:"spear", base:"Spear"},
{name:"Razortine", req_level:12, e_damage:50, slows_target:25, ias:30, target_defense:-50, dexterity:8, strength:15, twoHanded:1, type:"spear", base:"Trident"},
{name:"Bloodthief", req_level:17, e_damage:70, owounds:35, life_leech:12, life:26, strength:10, twoHanded:1, type:"spear", base:"Brandistock"},
{name:"Lance of Yaggai", req_level:22, lDamage_min:1, lDamage_max:60, all_res:15, ias:40, thorns:8, twoHanded:1, type:"spear", base:"Spetum"},
{name:"The Tannr Gorerod", req_level:27, e_damage:100, fDamage_min:23, fDamage_max:54, ar:60, fRes:15, fRes_max:15, life:30, light_radius:3, twoHanded:1, type:"spear", base:"Pike"},
{name:"The Impaler", req_level:31, e_damage:170, owounds:40, ias:20, itd:1, ar:150, pmh:1, skill_Impale:5, skill_Power_Strike:3, twoHanded:1, type:"spear", base:"War Spear"},
{name:"Kelpie Snare", req_level:33, e_damage:180, damage_min:30, damage_max:50, slows_target:75, life_per_level:1.25, fRes:50, strength:10, twoHanded:1, type:"spear", base:"Fuscina"},
{name:"Soulfeast Time", req_level:35, e_damage:190, ar:250, req:-20, life_leech:7, mana_leech:7, slower_stam_drain:20, twoHanded:1, type:"spear", base:"War Fork"},
{name:"Hone Sundan", req_level:37, e_damage:200, damage_min:20, damage_max:40, cblow:45, autorepair:1, sockets:3, twoHanded:1, type:"spear", base:"Yari"},
{name:"Spire of Honor", req_level:39, e_damage:200, damage_min:20, damage_max:40, damage_vs_demons_per_level:1.5, fhr:20, life_replenish:20, ar_bonus:25, defense_bonus:25, skills_combat_paladin:3, light_radius:3, twoHanded:1, type:"spear", base:"Lance"},
{name:"Arioc's Needle", req_level:81, e_damage:230, dstrike:50, pDamage_all:394, pDamage_duration:10, ias:30, all_skills:4, itd:1, twoHanded:1, type:"spear", base:"Hyperion Spear"},
{name:"Viperfork", req_level:71, e_damage:240, ar:250, pDamage_all:325, pDamage_duration:5, ias:50, pRes:50, pRes_max:7, twoHanded:1, type:"spear", base:"Mancatcher", pod_changes:1},	// 9% ctc level 16 Desecrate on attack
{name:"Steel Pillar", req_level:69, e_damage:260, cblow:25, target_defense:-20, ias:25, defense_bonus:80, indestructible:1, ethereal:0, twoHanded:1, type:"spear", base:"War Pike"},

{name:"Demon's Arch", req_level:68, e_damage:210, fDamage_min:232, fDamage_max:323, lDamage_min:23, lDamage_max:333, ias:30, life_leech:12, autoreplenish:1, type:"javelin", base:"Balrog Spear"},
{name:"Wraith Flight", req_level:76, e_damage:190, life_leech:13, mana_per_kill:15, autoreplenish:1, ethereal:1, type:"javelin", base:"Ghost Glaive"},
{name:"Gargoyle's Bite", req_level:70, e_damage:230, pDamage_all:293, pDamage_duration:10, life_leech:15, autoreplenish:1, type:"javelin", base:"Winged Harpoon"},	// level 11 Plague Javelin (60 charges)
{name:"Deathbit", req_level:44, e_damage:180, dstrike:40, ar:450, life_leech:9, mana_leech:6, autoreplenish:1, type:"thrown", base:"Battle Dart"},
{name:"The Scalper", req_level:57, e_damage:200, owounds:33, mana_per_kill:4, ias:20, ar_bonus:25, life_leech:6, autoreplenish:1, type:"thrown", base:"Francisca"},
{name:"Gimmershred", req_level:70, e_damage:210, fDamage_min:218, fDamage_max:483, lDamage_min:29, lDamage_max:501, cDamage_min:176, cDamage_max:397, ias:30, stack_size:1, type:"thrown", base:"Flying Axe"},
{name:"Lacerator", req_level:68, e_damage:210, ias:30, owounds:33, pmh:1, flee_on_hit:50, autoreplenish:1, type:"thrown", base:"Winged Axe"},	// 33% ctc level 3 Amplify Damage on striking
{name:"Warshrike", req_level:75, type:"thrown", e_damage:250, dstrike:50, ias:30, autoreplenish:1, lDamage_min:1, lDamage_max:80, base:"Winged Knife", pod_changes:1},

{set_IK:1, name:"Immortal King's Stone Crusher", twoHanded:1, type:"mace", req_level:76, e_damage:200, damage_vs_demons:200, damage_vs_undead:250, ias:40, indestuctible:1, cblow:40, sockets:2, base:"Ogre Maul", set_bonuses:["set_IK",{},{fDamage_min:211, fDamage_max:397},{lDamage_min:7, lDamage_max:477},{cDamage_min:127, cDamage_max:364},{pDamage_all:204, pDamage_duration:6},{mDamage_min:250, mDamage_max:361}]},
{set_Gris:1, name:"Griswold's Redemption", type:"scepter", req_level:66, e_damage:240, damage_vs_undead:250, req:-20, ias:40, sockets:4, base:"Caduceus", set_bonuses:["set_Gris",{},{skills_combat_paladin:2},{damage_min:10, damage_max:20},{damage_min:10, damage_max:20}]},
{set_Ald:1, name:"Aldur's Rhythm", type:"mace", req_level:42, damage_min:40, damage_max:62, damage_vs_demons:200, damage_vs_undead:50, lDamage_min:50, lDamage_max:75, ias:30, life_leech:10, mana_leech:5, sockets:3, base:"Jagged Star", set_bonuses:["set_Ald",{},{strength:15},{strength:15},{strength:15}]},
{set_Brethren:1, name:"Dangoon's Teaching", type:"mace", req_level:68, max_damage_per_level:1.5, damage_vs_undead:50, ias:40, fDamage_min:20, fDamage_max:30, max_mana:-27, base:"Reinforced Mace", set_bonuses:["set_Brethren",{},{},{},{}], pod_changes:1},	// 15% ctc level 21 Discharge on striking, 26% ctc level 31 Chain Lightning on attack
{set_Naj:1, name:"Naj's Puzzler", req_level:78, e_damage:150, damage_vs_undead:50, lDamage_min:6, lDamage_max:45, fcr:30, all_skills:1, mana:70, energy:35, type:"staff", twoHanded:1, base:"Elder Staff", set_bonuses:["set_Naj",{},{},{}]},	// level 11 Teleport (69 charges)
{set_BK:1, name:"Bul-Kathos' Sacred Charge", twoHanded:1, type:"sword", req_level:63, e_damage:120, cblow:30, all_res:20, ias:20, knockback:1, base:"Colossus Blade", set_bonuses:["set_BK",{},{}]},
{set_BK:1, name:"Bul-Kathos' Tribal Guardian", pDamage_all:50, pDamage_duration:2, fRes:50, strength:20, ias:20, type:"sword", req_level:66, base:"Mythical Sword", set_bonuses:["set_BK",{},{}]},
{set_Sazabi:1, name:"Sazabi's Cobalt Redeemer", e_damage:150, damage_vs_demons:318, cDamage_min:25, cDamage_max:35, ias:40, indestructible:1, dexterity:15, strength:5, type:"sword", base:"Cryptic Sword", set_bonuses:["set_Sazabi",{},{},{},{}]},
{set_Hwanin:1, name:"Hwanin's Justice", twoHanded:1, req_level:28, e_damage:200, lDamage_min:5, lDamage_max:25, ias:40, ar:330, type:"polearm", base:"Bill", set_bonuses:["set_Hwanin",{},{},{},{}]},	// 10% ctc level 3 Ice Blast on striking
{set_Sander:1, name:"Sander's Superstition", req_level:25, e_damage:75, damage_vs_undead:50, fcr:20, mana:25, mana_leech:8, cDamage_min:25, cDamage_max:75, type:"wand", base:"Bone Wand", set_bonuses:["set_Sander",{},{},{},{}]},
{set_Tancred:1, name:"Tancred's Crowbill", req_level:20, e_damage:80, ar:75, type:"axe", base:"Military Pick", set_bonuses:["set_Tancred",{},{mana:20},{ias:20},{},{}]},
{set_Civerb:1, name:"Civerb's Cudgel", req_level:9, max_damage_per_level:1, damage_max:23, damage_vs_undead:50, ar:75, type:"scepter", base:"Grand Scepter", set_bonuses:["set_Civerb",{},{},{}]},
{set_Arcanna:1, name:"Arcanna's Deathwand", twoHanded:1, req_level:15, damage_vs_undead:50, skills_sorceress:1, dstrike:25, type:"staff", base:"War Staff", set_bonuses:["set_Arcanna",{},{mana:50},{mana_regen:5},{}]},
{set_Cathan:1, name:"Cathan's Rule", twoHanded:1, req_level:11, skills_fire_all:1, fDamage_max:10, damage_vs_undead:50, type:"staff", base:"Battle Staff", set_bonuses:["set_Cathan",{},{mana:50},{all_res:10},{},{}]},
{set_Angelic:1, name:"Angelic Sickle", type:"sword", req_level:12, damage_vs_undead:250, ar:75, lDamage_min:1, lDamage_max:9, base:"Saber", set_bonuses:["set_Angelic",{},{e_damage:75},{ias:30},{}], pod_changes:1},
{set_Vidala:1, name:"Vidala's Barb", twoHanded:1, req_level:14, lDamage_min:1, lDamage_max:20, type:"bow", base:"Long Battle Bow", set_bonuses:["set_Vidala",{},{ar_per_level:8},{},{}]},
{set_Milabrega:1, name:"Milabrega's Rod", req_level:17, e_damage:50, damage_vs_undead:50, skills_paladin:1, light_radius:2, lDamage:15, type:"scepter", base:"War Scepter", set_bonuses:["set_Milabrega",{},{},{},{}], pod_changes:1},
{set_Isenhart:1, name:"Isenhart's Lightbrand", req_level:8, damage_min:8, ias:20, type:"sword", base:"Broad Sword", set_bonuses:["set_Isenhart",{},{ar_per_level:5},{},{}]},
{set_Infernal:1, name:"Infernal Torch", req_level:5, skills_necromancer:1, damage_min:8, damage_vs_undead:150, type:"wand", base:"Grim Wand", set_bonuses:["set_Infernal",{},{ar_per_level:10},{}]},
{set_Death:1, name:"Death's Touch", req_level:6, e_damage:25, life_leech:4, type:"sword", base:"War Sword", set_bonuses:["set_Death",{},{cDamage_min:25, cDamage_max:75},{}]},
{set_Cleglaw:1, name:"Cleglaw's Tooth", req_level:4, dstrike:50, ar_bonus:30, type:"sword", base:"Long Sword", set_bonuses:["set_Cleglaw",{},{max_damage_per_level:1.25},{}]},
{set_Berserker:1, name:"Berserker's Hatchet", req_level:3, ar_bonus:30, mana_leech:5, type:"axe", base:"Double Axe", set_bonuses:["set_Berserker",{},{e_damage:50},{}]},
{set_Arctic:1, name:"Arctic Horn", twoHanded:1, req_level:2, e_damage:50, ar_bonus:20, type:"bow", base:"Short War Bow", set_bonuses:["set_Arctic",{},{ar_per_level:8},{cDamage_min:20, cDamage_max:30},{}], pod_changes:1},	// Cold Arrow fires 2 additional projectiles
{name:"Pluckeye", req_level:7, e_damage:100, ar:28, mana_leech:3, life:10, mana_per_kill:2, light_radius:2, twoHanded:1, type:"bow", base:"Short Bow"},
{name:"Witherstring", req_level:13, e_damage:50, damage_min:1, damage_max:3, ias:30, ar:50, oskill_Magic_Arrow:3, twoHanded:1, type:"bow", base:"Hunter's Bow", pod_changes:1},
{name:"Raven Claw", req_level:15, e_damage:70, ar_bonus:50, dexterity:3, strength:3, twoHanded:1, type:"bow", base:"Long Bow"},	// fires Explosive Arrows
{name:"Rogue's Bow", req_level:20, e_damage:60, damage_vs_undead:100, dstrike:30, ias:50, ar:60, all_res:10, twoHanded:1, type:"bow", base:"Composite Bow"},
{name:"Stormstrike", req_level:25, e_damage:90, lDamage_min:1, lDamage_max:30, pierce:25, ar:28, lRes:25, strength:8, twoHanded:1, type:"bow", base:"Short Battle Bow"},
{name:"Wizendraw", req_level:26, e_damage:80, ar:100, ias:20, cRes:26, energy:15, mana:30, enemy_cRes:-35, oskill_Magic_Arrow:5, twoHanded:1, type:"bow", base:"Long Battle Bow", pod_changes:1},
{name:"Hellclap", req_level:27, e_damage:90, fDamage_min:15, fDamage_max:50, ias:10, ar:75, skills_fire_all:1, fRes:40, dexterity:12, twoHanded:1, type:"bow", base:"Short War Bow"},
{name:"Blastbark", req_level:28, e_damage:130, skills_amazon:1, mana_leech:3, strength:5, skill_Exploding_Arrow:2, twoHanded:1, type:"bow", base:"Long War Bow"},
{name:"Skystrike", req_level:28, e_damage:200, lDamage_min:1, lDamage_max:250, ias:30, ar:100, skills_amazon:1, energy:10, twoHanded:1, type:"bow", base:"Edge Bow"},	// 2% ctc level 6 Meteor on striking
{name:"Riphook", req_level:31, e_damage:220, slows_target:30, owounds:30, ias:30, life_leech:10, mana:35, twoHanded:1, type:"bow", base:"Razor Bow"},
{name:"Kuko Shakaku", req_level:33, e_damage:180, pierce:50, fDamage_min:40, fDamage_max:180, skills_bows:3, skill_Immolation_Arrow:3, type:"bow", twoHanded:1, base:"Cedar Bow"},	// fires explosive arrows (level 7)
{name:"Endlesshail", req_level:36, e_damage:220, cDamage_min:15, cDamage_max:30, cRes:35, missile_defense:50, mana:40, skill_Strafe:5, twoHanded:1, type:"bow", base:"Double Bow"},
{name:"Witchwild String", req_level:39, e_damage:170, dstrike_per_level:1, all_res:40, oskill_Magic_Arrow:20, sockets:2, twoHanded:1, type:"bow", base:"Short Siege Bow", pod_changes:1},	// 2% ctc level 5 Amplify Damage on striking
{name:"Cliffkiller", req_level:41, e_damage:230, damage_min:10, damage_max:30, skills_amazon:2, missile_defense:80, life:50, knockback:1, twoHanded:1, type:"bow", base:"Long Siege Bow"},
{name:"Magewrath", req_level:43, e_damage:150, damage_min:25, damage_max:50, ar:250, skills_amazon:1, blind_on_hit:1, mana_leech:15, mDamage_reduced:13, dexterity:10, skill_Magic_Arrow:3, twoHanded:1, type:"bow", base:"Rune Bow", pod_changes:1},	// Magic Arrow fires 2 Additional Arrows
{name:"Goldstrike Arch", req_level:46, e_damage:250, damage_vs_demons:200, damage_vs_undead:200, ias:50, life_replenish:12, ar_bonus:150, type:"bow", twoHanded:1, base:"Gothic Bow"},	// 5% ctc level 7 Fist of the Heavens on striking
{name:"Eaglehorn", req_level:69, e_damage:200, e_max_damage_per_level:2, skills_amazon:1, ar_per_level:6, dexterity:25, itd:1, twoHanded:1, type:"bow", base:"Crusader Bow"},	// e_max_damage_per_level implement
{name:"Widowmaker", req_level:65, e_damage:200, itd:1, dstrike:33, oskill_Guided_Arrow:5, oskill_Magic_Arrow:11, twoHanded:1, type:"bow", base:"Ward Bow", pod_changes:1},
{name:"Windforce", req_level:73, type:"bow", ias:20, mana_leech:8, strength:10, dexterity:5, knockback:1, e_damage:250, max_damage_per_level:3.125, heal_stam:30, twoHanded:1, base:"Hydra Bow"},
{name:"Leadcrow", req_level:9, e_damage:70, dstrike:25, ar:40, pRes:30, life:10, dexterity:10, twoHanded:1, type:"crossbow", base:"Light Crossbow"},
{name:"Ichorsting", req_level:18, e_damage:50, pDamage_all:30, pDamage_duration:3, ias:20, pierce:50, ar:50, dexterity:20, twoHanded:1, type:"crossbow", base:"Crossbow"},
{name:"Hellcast", req_level:27, e_damage:80, fDamage_min:15, fDamage_max:35, ias:20, ar:70, fRes_max:15, fRes:15, twoHanded:1, type:"crossbow", base:"Heavy Crossbow"},	// fires Explosive Bolts
{name:"Doomslinger", req_level:28, e_damage:100, pierce:35, life:15, oskill_Multiple_Shot:1, twoHanded:1, type:"crossbow", base:"Repeating Crossbow", pod_changes:1},		// OSKILL
{name:"Langer Briser", req_level:33, e_damage:200, damage_max:30, owounds:33, lDamage_min:1, lDamage_max:212, life:30, knockback:1, mf:60, twoHanded:1, type:"crossbow", base:"Arbalest"},
{name:"Pus Spitter", req_level:36, e_damage:220, pDamage_all:150, pDamage_duration:3, req:-60, ar_per_level:5, ias:10, all_skills:1, twoHanded:1, type:"crossbow", base:"Siege Crossbow", pod_changes:1},	// 9% ctc level 6 Terror when struck, 4% ctc level 10 Lower Resist on striking
{name:"Buriza-Do Kyanon", req_level:41, e_damage:200, max_damage_per_level:2.5, cDamage_min:32, cDamage_max:196, pierce:100, freezes_target:3, defense:150, dexterity:35, ias:80, twoHanded:1, type:"crossbow", base:"Ballista"},
{name:"Demon Machine", req_level:49, e_damage:123, damage_max:66, ar:632, pierce:66, defense:321, mana:36, twoHanded:1, type:"crossbow", base:"Chu-Ko-Nu"},	// level 6 Explosive Bolt
{name:"Hellrack", req_level:76, e_damage:230, ar_bonus:150, fDamage_min:63, fDamage_max:324, cDamage_min:63, cDamage_max:324, lDamage_min:63, lDamage_max:324, ias:20, sockets:2, twoHanded:1, type:"crossbow", base:"Colossus Crossbow"},	// level 18 Immolation Arrow (150 charges)
{name:"Gut Siphon", req_level:71, e_damage:220, pierce:33, life_leech:18, owounds:33, slows_target:25, twoHanded:1, type:"crossbow", base:"Demon Crossbow"},
	],
    offhand: [
    // remove smite_min/smite_max, block, and use data from base items?
{name:"Offhand"},
{only:"assassin", rw:1, name:"Chaos ­ ­ - ­ ­ Scissors Suwayyah", req_level:57, e_damage:290, ias:35, mDamage_min:216, mDamage_max:471, owounds:25, oskill_Zeal:1, strength:10, life_per_demon_kill:15, skill_Wake_of_Fire:3, skill_Blade_Shield:3, skill_Fade:3, type:"claw", base:"Scissors Suwayyah", pod_changes:1},	// 9% ctc level 11 Frozen Orb on striking, 11% ctc level 9 Charged Bolt on striking
{only:"assassin", rw:1, name:"Pattern ­ ­ - ­ ­ Greater Claws", req_level:21, e_damage:80, fbr:30, ar_bonus:10, fDamage_min:12, fDamage_max:32, lDamage_min:1, lDamage_max:50, pDamage_all:75, pDamage_duration:5, strength:6, dexterity:6, all_res:15, mana_per_kill:2, skill_Wake_of_Fire:3, skill_Blade_Fury:3, skill_Fade:3, type:"claw", base:"Greater Claws", pod_changes:1},
{only:"assassin", name:"Bartuc's Cut-Throat", req_level:42, e_damage:200, damage_min:25, damage_max:50, fhr:30, bonus_ar:20, life_leech:9, strength:20, dexterity:20, skills_assassin:2, skills_martial:1, type:"claw", base:"Greater Talons"},
{only:"assassin", name:"Jade Talon", type:"claw", req_level:66, e_damage:240, skills_martial:2, skills_shadow:2, fhr:30, mana_leech:15, all_res:50, base:"Wrist Sword"},
{only:"assassin", name:"Shadow Killer", type:"claw", req_level:78, e_damage:220, target_defense:-25, freezes_target:2, mana_per_kill:15, indestructible:1, ethereal:1, base:"Battle Cestus", pod_changes:1},	// cDamage_per_charge_ice:16 (+16 cold damage per active ice charge; 16*5 = 80) TODO: implement
{only:"assassin", name:"Firelizard's Talons", type:"claw", req_level:67, e_damage:270, fDamage_min:236, fDamage_max:480, ias:15, skills_martial:3, skills_fire_all:2, skill_Fists_of_Ember:2, fRes:70, base:"Feral Claws", pod_changes:1},	// all_skills_with_full_charge_ember:1 (+1 all skills when 5 ember charges are active) TODO: implement
{only:"assassin", set_Nat:1, name:"Natalya's Mark", type:"claw", req_level:79, e_damage:200, damage_vs_undead:200, damage_vs_demons:200, fDamage_min:12, fDamage_max:17, itd:1, ias:40, cDamage_min:50, cDamage_max:50, base:"Scissors Suwayyah", set_bonuses:["set_Nat",{},{},{},{}]},
{only:"assassin", rw:1, name:"Plague ­ ­ - ­ ­ Suwayyah", req_level:67, damage_vs_demons:380, enemy_pRes:-23, dstrike_per_level:0.375, owounds:25, freezes_target:3, strength:10, all_skills:2, skill_Blade_Shield:3, skill_Venom:3, skill_Fade:3, type:"claw", base:"Suwayyah", pod_changes:1, aura:"Cleansing", aura_lvl:17},	// 25% ctc level 15 Poison Nova on striking, 20% ctc level 12 Lower Resist when struck
{only:"assassin", rarity:"magic", name:"Cunning Suwayyah of Evisceration", type:"claw", req_level:65, damage_max:63, skills_traps:3, skill_Wake_of_Fire:3, skill_Blade_Shield:3, skill_Lightning_Sentry:3, base:"Suwayyah"},
{only:"necromancer", name:"Homunculus", req_level:42, block:72, e_def:200, mana_per_kill:5, ibc:40, fbr:30, skills_necromancer:2, energy:20, mana_regen:33, all_res:40, skills_curses:2, type:"shield", base:"Heirophant Trophy"},
{only:"necromancer", name:"Darkforce Spawn", req_level:65, block:32, e_def:180, skills_summoning_necromancer:3, skills_poisonBone:3, skills_curses:3, fcr:30, max_mana:10, type:"shield", base:"Bloodlord Skull"},
{only:"necromancer", name:"Boneflame", req_level:72, block:30, e_def:150, frw:20, skills_necromancer:3, all_res:30, type:"shield", base:"Succubae Skull"},
{only:"necromancer", set_TO:1, name:"Trang-Oul's Wing", req_level:54, defense:125, block:60, ibc:30, pRes:40, fRes:45, dexterity:15, strength:25, skills_poisonBone:2, type:"shield", base:"Cantor Trophy", set_bonuses:["set_TO",{},{},{enemy_pRes:-25},{life_replenish:15},{}]},
{only:"necromancer", rarity:"magic", name:"Golemlord's Bloodlord Skull of Deflecting", ibc:20, fbr:30, pDamage_min:13, pDamage_max:28, pDamage_duration:4, type:"shield", req_level:65, skills_summoning_necromancer:3, skill_Summon_Mastery:3, skill_Raise_Skeleton_Warrior:3, skill_Raise_Skeletal_Mage:3, block:37, base:"Bloodlord Skull"},
{only:"paladin", name:"Herald of Zakarum", req_level:42, block:82, e_def:200, ibc:30, fbr:30, ar_bonus:20, strength:20, vitality:20, all_res:50, skills_paladin:2, skills_combat_paladin:2, smite_min:20, smite_max:28, type:"shield", base:"Gilded Shield"},
{only:"paladin", name:"Alma Negra", req_level:77, block:78, e_def:210, cdr:30, skills_paladin:2, ibc:20, fbr:30, e_damage:75, ar_bonus:75, mDamage_reduced:9, smite_min:35, smite_max:58, type:"shield", base:"Sacred Rondache", pod_changes:1},
{only:"paladin", name:"Dragonscale", req_level:80, block:52, e_def:200, fDamage_min:211, fDamage_max:371, fDamage:15, oskill_Hydra:10, fRes_max:5, strength:25, fAbsorb:20, smite_min:46, smite_max:46, type:"shield", base:"Zakarum Shield"},
{only:"paladin", set_Gris:1, name:"Griswold's Honor", req_level:68, defense:108, block:69, fbr:65, ibc:20, all_res:45, sockets:3, smite_min:5, smite_max:87, type:"shield", base:"Vortex Shield", set_bonuses:["set_Gris",{},{},{},{}]},
{only:"paladin", rw:1, name:"Spirit ­ ­ - ­ ­ Sacred Targe", req_level:47, defense:158, block:60, all_skills:2, fcr:35, fhr:55, vitality:22, mana:112, cRes:35, lRes:35, pRes:35, missile_defense:250, thorns:14, mAbsorb_flat:8, smite_min:22, smite_max:70, all_res:45, type:"shield", base:"Sacred Targe"},
{only:"paladin", rw:1, name:"Phoenix ­ ­ - ­ ­ Sacred Targe", req_level:65, defense:158, block:60, e_damage:400, enemy_fRes:-28, missile_defense:400, fAbsorb_flat:21, life:50, lRes_max:5, fRes_max:10, aura:"Redemption", aura_lvl:10, smite_min:22, smite_max:70, all_res:45, type:"shield", base:"Sacred Targe", pod_changes:1},	// 100% ctc level 40 Blaze on level-up, 40% ctc level 22 Fire Ball on striking
{limit:["paladin"], rw:1, name:"Spirit ­ ­ - ­ ­ Monarch", req_level:54, defense:148, block:52, all_skills:2, fcr:35, fhr:55, vitality:22, mana:112, cRes:35, lRes:35, pRes:35, missile_defense:250, thorns:14, mAbsorb_flat:8, type:"shield", base:"Monarch"},
{limit:["paladin"], rw:1, name:"Phoenix ­ ­ - ­ ­ Monarch", req_level:65, defense:148, block:52, e_damage:400, enemy_fRes:-28, missile_defense:400, fAbsorb_flat:21, life:50, lRes_max:5, fRes_max:10, aura:"Redemption", aura_lvl:10, type:"shield", base:"Monarch", pod_changes:1},	// 100% ctc level 40 Blaze on level-up, 40% ctc level 22 Fire Ball on striking
{only:"paladin", rw:1, name:"Dream ­ ­ - ­ ­ Sacred Targe", req_level:65, e_def:30, defense:220, fhr:30, vitality:10, mana_per_level:0.625, all_res:20, mf:25, max_life:5, block:30, smite_min:22, smite_max:70, type:"shield", base:"Sacred Targe", pod_changes:1, aura:"Holy Shock", aura_lvl:15},	// 10% ctc level 15 Confuse when struck
{only:"paladin", rw:1, name:"Dragon ­ ­ - ­ ­ Sacred Targe", req_level:61, defense:360, missile_defense:230, all_attributes:5, strength_per_level:0.375, lRes_max:5, damage_reduced:7, mana:50, block:30, smite_min:22, smite_max:70, type:"shield", base:"Sacred Targe", aura:"Holy Fire", aura_level:14},	// 20% ctc level 18 Venom when struck, 12% ctc level 15 Hydra on striking
{only:"paladin", rw:1, name:"Exile ­ ­ - ­ ­ Sacred Targe", req_level:57, fbr:30, freezes_target:1, e_def:260, life_replenish:7, cRes_max:5, fRes_max:5, mf:25, autorepair:1, ethereal:1, block:30, smite_min:22, smite_max:70, type:"shield", base:"Sacred Targe", aura:"Defiance", aura_lvl:16},	// 15% ctc level 5 Life Tap on striking
{only:"paladin", rw:1, name:"Sanctuary ­ ­ - ­ ­ Sacred Targe", req_level:49, fhr:20, fbr:20, ibc:20, e_def:160, missile_defense:250, dexterity:20, all_res:115, mDamage_reduced:7, smite_min:22, smite_max:70, block:50, type:"shield", base:"Sacred Targe"},	// level 12 Slow Missiles (60 charges)	...TODO: check if this still has Slow Missile charges?
{limit:["paladin"], rw:1, name:"Sanctuary ­ ­ - ­ ­ Troll Nest", req_level:49, fhr:20, fbr:20, ibc:20, e_def:160, missile_defense:250, dexterity:20, all_res:70, mDamage_reduced:7, block:40, type:"shield", base:"Troll Nest"},	// level 12 Slow Missiles (60 charges)
{only:"paladin", rw:1, name:"Splendor ­ ­ - ­ ­ Gilded Shield", req_level:38, all_skills:1, fcr:10, fbr:20, e_def:100, energy:10, mana_regen:15, gf:50, mf:20, light_radius:3, smite_min:20, smite_max:28, block:22, type:"shield", all_res:45, base:"Gilded Shield"},
{only:"necromancer", rw:1, name:"Splendor ­ ­ - ­ ­ Hierophant Trophy", req_level:40, all_skills:1, fcr:10, fbr:20, e_def:100, energy:10, mana_regen:15, gf:50, mf:20, light_radius:3, skill_Summon_Mastery:3, skill_Bone_Armor:3, skill_Bone_Spear:3, block:17, type:"shield", base:"Hierophant Trophy"},
{limit:["paladin","necromancer"], rw:1, name:"Splendor ­ ­ - ­ ­ Troll Nest", req_level:37, all_skills:1, fcr:10, fbr:20, e_def:100, energy:10, mana_regen:15, gf:50, mf:20, light_radius:3, block:20, type:"shield", base:"Troll Nest"},
{only:"paladin", rw:1, name:"Rhyme ­ ­ - ­ ­ Protector Shield", req_level:34, fbr:40, ibc:20, mana_regen:15, all_res:70, cbf:1, gf:50, mf:25, smite_min:18, smite_max:24, block:40, type:"shield", base:"Protector Shield"},
{only:"necromancer", rw:1, name:"Rhyme ­ ­ - ­ ­ Demon Head", req_level:29, fbr:40, ibc:20, mana_regen:15, all_res:25, cbf:1, gf:50, mf:25, skill_Summon_Mastery:3, skill_Bone_Armor:3, skill_Blood_Golem:3, block:37, type:"shield", base:"Demon Head"},
{limit:["paladin","necromancer"], rw:1, name:"Rhyme ­ ­ - ­ ­ Grim Shield", req_level:29, fbr:40, ibc:20, mana_regen:15, all_res:25, cbf:1, gf:50, mf:25, block:40, type:"shield", base:"Grim Shield"},
{only:"paladin", rw:1, name:"Ancient's Pledge ­ ­ - ­ ­ Crown Shield", req_level:21, e_def:50, cRes:43, lRes:48, fRes:48, pRes:48, damage_to_mana:10, all_res:45, smite_min:4, smite_max:12, block:25, type:"shield", base:"Crown Shield"},
{limit:["paladin"], rw:1, name:"Ancient's Pledge ­ ­ - ­ ­ Grim Shield", req_level:21, e_def:50, cRes:43, lRes:48, fRes:48, pRes:48, damage_to_mana:10, block:20, type:"shield", base:"Grim Shield"},
{name:"Pelta Lunata", req_level:2, block:50, e_def:40, defense:30, ibc:20, fbr:40, energy:10, vitality:10, strength:2, smite_min:1, smite_max:3, type:"shield", base:"Buckler"},
{name:"Umbral Disk", req_level:9, block:65, e_def:50, defense:30, ibc:30, blind_on_hit:1, life:20, dexterity:10, light_radius:-2, durability:15, smite_min:2, smite_max:3, type:"shield", base:"Small Shield"},
{name:"Stormguild", req_level:13, block:72, e_def:60, defense:30, ibc:30, lRes:25, lDamage_min:1, lDamage_max:6, thorns:3, mDamage_reduced:1, smite_min:2, smite_max:4, type:"shield", base:"Large Shield"},
{name:"Steelclash", req_level:17, block:63, e_def:100, defense:20, ibc:20, all_res:15, skills_paladin:1, light_radius:3, damage_reduced:3, smite_min:2, smite_max:5, type:"shield", base:"Kite Shield"},
{name:"Swordback Hold", req_level:15, block:60, e_def:60, defense:10, ibc:20, owounds:50, thorns:10, smite_min:5, smite_max:9, type:"shield", base:"Spike Shield"},
{name:"Bverrit Keep", req_level:19, block:64, e_def:120, defense:30, ibc:10, fRes:75, strength:5, mDamage_reduced:5, smite_min:1, smite_max:5, type:"shield", base:"Tower Shield"},
{name:"Wall of the Eyeless", req_level:20, block:50, e_def:40, defense:10, mana_per_kill:5, fcr:20, mana_leech:3, pRes:20, smite_min:3, smite_max:6, type:"shield", base:"Bone Shield"},
{name:"The Ward", req_level:26, block:56, e_def:100, defense:40, ibc:10, all_res:50, mDamage_reduced:2, strength:10, smite_min:2, smite_max:6, type:"shield", base:"Gothic Shield"},
{name:"Visceratuant", req_level:28, block:70, e_def:150, ibc:30, fbr:30, skills_sorceress:1, thorns_lightning:10, smite_min:8, smite_max:12, type:"shield", base:"Defender"},
{name:"Moser's Blessed Circle", req_level:31, defense:179, block:67, e_def:220, ibc:25, fbr:30, all_res:25, sockets:2, smite_min:7, smite_max:14, type:"shield", base:"Round Shield"},
{name:"Stormchaser", req_level:35, block:64, e_def:220, ibc:20, fbr:10, ar:150, lRes:50, half_freeze:1, lDamage_min:1, lDamage_max:60, smite_min:11, smite_max:15, type:"shield", base:"Scutum"},	// 4% ctc level 5 Tornado when struck, 4% ctc level 6 Blizzard when struck
{name:"Lance Guard", req_level:35, block:47, e_def:120, damage_to_mana:15, fhr:30, dstrike:20, life:50, thorns:47, smite_min:18, smite_max:35, type:"shield", base:"Barbed Shield"},
{name:"Tiamat's Rebuke", req_level:38, block:48, e_def:200, cDamage_min:27, cDamage_max:53, fDamage_min:35, fDamage_max:95, lDamage_min:1, lDamage_max:120, all_res:35, smite_min:15, smite_max:24, type:"shield", base:"Dragon Shield"},	// 3% ctc level 6 Hydra when struck, 5% ctc level 7 Nova when struck, 5% ctc level 9 Frost Nova when struck
{name:"Gerke's Sanctuary", req_level:44, block:84, e_def:240, ibc:30, all_res:30, life_replenish:15, damage_reduced:16, mDamage_reduced:18, smite_min:10, smite_max:17, type:"shield", base:"Pavise"},
{name:"Lidless Wall", req_level:41, e_def:130, block:50, all_skills:1, max_mana:10, fcr:20, mana_per_kill:5, energy:10, light_radius:1, smite_min:14, smite_max:20, type:"shield", base:"Grim Shield"},
{name:"Radament's Sphere", req_level:50, e_def:200, block:66, e_def:200, ibc:20, pRes:75, fcr:20, skills_poisonBone:2, oskill_Desecrate:1, smite_min:12, smite_max:16, smite_min:12, smite_max:16, type:"shield", base:"Ancient Shield", pod_changes:1},
{name:"Blackoak Shield", req_level:61, e_def:200, block:50, oskill_Inner_Sight:1, fbr:50, e_def:200, dexterity_per_level:0.5, life_per_level:1.25, cAbsorb_flat_per_level:0.625, half_freeze:1, smite_min:17, smite_max:29, type:"shield", base:"Luna", pod_changes:1},
{name:"Spike Thorn", req_level:70, block:50, e_def:150, fhr:30, pdr:20, thorns_per_level:1.375, sockets:1, smite_min:26, smite_max:40, type:"shield", base:"Blade Barrier"},
{name:"Stormshield", req_level:73, block:77, pdr:30, fbr:35, cRes:60, lRes:25, strength:30, defense_per_level:3.75, ibc:25, thorns:10, smite_min:12, smite_max:34, ethereal:0, type:"shield", base:"Monarch", pod_changes:1},
{name:"Head Hunter's Glory", req_level:75, block:50, defense:420, missile_defense:350, fRes:30, pRes:40, life_per_kill:7, ar_per_socketed:150, sockets:3, smite_min:24, smite_max:38, type:"shield", base:"Troll Nest", pod_changes:1},	// 150 ar per socketed gem/rune		TODO: implement
{name:"Medusa's Gaze", req_level:76, e_def:200, block:54, enemy_cRes:-20, cRes_max:5, cRes:80, skills_cold_all:2, oskill_Shiver_Armor:3, req:-50, smite_min:18, smite_max:28, type:"shield", base:"Aegis", pod_changes:1},
{name:"Spirit Ward", req_level:68, block:84, e_def:180, fbr:25, ibc:30, all_res:40, cAbsorb_flat:11, smite_min:11, smite_max:35, type:"shield", base:"Ward"},	// 5% ctc level 8 Fade when struck
{set_Brethren:1, name:"Taebaek's Glory", req_level:81, defense:50, block:79, indestructible:1, ibc:25, lRes:30, fbr:30, mana:100, thorns:30, smite_min:11, smite_max:35, type:"shield", base:"Ward", set_bonuses:["set_Brethren",{},{},{},{}]},
{set_Orphan:1, name:"Whitstan's Guard", req_level:29, block:97, e_def:175, half_freeze:1, fbr:40, ibc:55, light_radius:5, smite_min:7, smite_max:14, type:"shield", base:"Round Shield", set_bonuses:["set_Orphan",{},{},{},{}]},
{set_Milabrega:1, name:"Milabrega's Orb", req_level:17, block:38, defense:25, mf:20, smite_min:2, smite_max:5, type:"shield", base:"Kite Shield", set_bonuses:["set_Milabrega",{},{life:50},{e_def:50},{}]},
{set_Civerb:1, name:"Civerb's Ward", req_level:9, block:57, defense:15, ibc:15, smite_min:2, smite_max:4, type:"shield", base:"Large Shield", set_bonuses:["set_Civerb",{},{mana:22},{pRes:26}]},	// bonuses depend on which other items are equipped?
{set_Isenhart:1, name:"Isenhart's Parry", req_level:8, block:46, defense:40, thorns:4, smite_min:2, smite_max:6, type:"shield", base:"Gothic Shield", set_bonuses:["set_Isenhart",{},{all_res:8},{},{}]},
{set_Sigon:1, name:"Sigon's Guard", req_level:6, block:74, all_skills:1, ibc:20, smite_min:1, smite_max:5, type:"shield", base:"Tower Shield", set_bonuses:["set_Sigon",{},{},{},{},{},{}]},
{set_Cleglaw:1, name:"Cleglaw's Claw", req_level:4, block:35, defense:17, poison_length_reduced:75, smite_min:2, smite_max:3, type:"shield", base:"Small Shield", set_bonuses:["set_Cleglaw",{},{all_res:15},{}]},
{set_Hsarus:1, name:"Hsarus' Iron Fist", req_level:3, block:30, damage_reduced:2, strength:10, smite_min:1, smite_max:3, type:"shield", base:"Buckler", set_bonuses:["set_Hsarus",{},{defense_per_level:2.5},{}]},
{only:"paladin", rarity:"crafted", name:"Priest's Safety Monarch", req_level:54, damage_reduced:4, mDamage_reduced:2, mRes:10, e_def:230, all_res:20, skills_paladin:2, block:72, ibc:20, fbr:30, req:-30, fhr:17, smite_min:12, smite_max:34, type:"shield", base:"Monarch"},	// check required level of affixes
{limit:["paladin"], rarity:"crafted", name:"Safety Monarch", req_level:54, damage_reduced:4, mDamage_reduced:2, mRes:10, e_def:230, all_res:20, defense_per_level:3, block:72, ibc:20, fbr:30, req:-30, fhr:17, type:"shield", base:"Monarch"},		// check required level of affixes
// Quivers
{limit:["amazon"], rarity:"rare", name:"Doom Bolts", type:"quiver", req_level:65, pierce:25, all_skills:1, mf_per_level:0.5, ias:16, mf:35, life_per_ranged_hit:16},	// check required level for quiver affixes?
{only:"amazon", rarity:"rare", name:"Bowyer's Arrows", type:"quiver", req_level:68, max_damage_per_level:0.625, pierce:25, skills_bows:2, damage_min:26, damage_max:31, ias:16, dstrike:20},
{limit:["amazon"], rarity:"rare", name:"King's Arrows", type:"quiver", req_level:65, max_damage_per_level:0.625, pierce:25, all_skills:1, damage_min:26, damage_max:31, ias:16, dstrike:20},
{name:"Dragonbreath", type:"quiver", req_level:12, fDamage_max_per_level:2, fRes:15, pod_changes:1},
{name:"Hailstorm", type:"quiver", req_level:12, cDamage_max_per_level:2, cRes:15, pod_changes:1},
{name:"Ice Shards", type:"quiver", req_level:18, skills_cold_all:2, ias:20, energy:20, pod_changes:1},
{name:"Moonfire", type:"quiver", req_level:21, ar_bonus:15, mDamage_reduced:4, pod_changes:1},
	],
    charms: [
{name:"Charms"},
{name:"Annihilus", type:"small", req_level:80, all_res:20, all_attributes:20, all_skills:1},
{name:"Hellfire Torch", type:"large", req_level:75,  all_res:20, all_attributes:20, light_radius:8, skills_amazon:3, skills_assassin:3, skills_barbarian:3, skills_druid:3, skills_necromancer:3, skills_paladin:3, skills_sorceress:3, pod_changes:1},
{name:"Gheed's Fortune", type:"grand", req_level:62, gf:160, mf:40},
{only:"amazon", rarity:"magic", name:"+1 Harpoonist's Grand Charm", type:"grand", req_level:42, skills_javelins:1},
{only:"amazon", rarity:"magic", name:"+1 Acrobat's Grand Charm", type:"grand", req_level:42, skills_passives:1},
{only:"amazon", rarity:"magic", name:"+1 Fletcher's Grand Charm", type:"grand", req_level:42, skills_bows:1},
{only:"assassin", rarity:"magic", name:"+1 Shogukusha's Grand Charm", type:"grand", req_level:42, skills_martial:1},
{only:"assassin", rarity:"magic", name:"+1 Mentalist's Grand Charm", type:"grand", req_level:42, skills_shadow:1},
{only:"assassin", rarity:"magic", name:"+1 Entrapping Grand Charm", type:"grand", req_level:42, skills_traps:1},
{only:"barbarian", rarity:"magic", name:"+1 Sounding Grand Charm", type:"grand", req_level:42, skills_warcries:1},
{only:"barbarian", rarity:"magic", name:"+1 Fanatic Grand Charm", type:"grand", req_level:42, skills_masteries:1},
{only:"barbarian", rarity:"magic", name:"+1 Expert's Grand Charm", type:"grand", req_level:42, skills_combat_barbarian:1},
{only:"druid", rarity:"magic", name:"+1 Nature's Grand Charm", type:"grand", req_level:42, skills_elemental:1},
{only:"druid", rarity:"magic", name:"+1 Spiritual Grand Charm", type:"grand", req_level:42, skills_shapeshifting:1},
{only:"druid", rarity:"magic", name:"+1 Trainer's Grand Charm", type:"grand", req_level:42, skills_summoning_druid:1},
{only:"necromancer", rarity:"magic", name:"+1 Graverobber's Grand Charm", type:"grand", req_level:42, skills_summoning_necromancer:1},
{only:"necromancer", rarity:"magic", name:"+1 Fungal Grand Charm", type:"grand", req_level:42, skills_poisonBone:1},
{only:"necromancer", rarity:"magic", name:"+1 Hexing Grand Charm", type:"grand", req_level:42, skills_curses:1},
{only:"paladin", rarity:"magic", name:"+1 Preserver's Grand Charm", type:"grand", req_level:42, skills_defensive:1},
{only:"paladin", rarity:"magic", name:"+1 Captain's Grand Charm", type:"grand", req_level:42, skills_offensive:1},
{only:"paladin", rarity:"magic", name:"+1 Lion Branded Grand Charm", type:"grand", req_level:42, skills_combat_paladin:1},
{only:"sorceress", rarity:"magic", name:"+1 Chilling Grand Charm", type:"grand", req_level:42, skills_cold:1},
{only:"sorceress", rarity:"magic", name:"+1 Sparking Grand Charm", type:"grand", req_level:42, skills_lightning:1},
{only:"sorceress", rarity:"magic", name:"+1 Burning Grand Charm", type:"grand", req_level:42, skills_fire:1},
{rarity:"magic", name:"Mana,Life Small Charm", type:"small", req_level:40, mana:17, life:20},			// Serpent's Small Charm of Vita
{rarity:"magic", name:"Res,FRW Small Charm", type:"small", req_level:36, all_res:5, frw:3},			// Shimmering Small Charm of Inertia
{rarity:"magic", name:"Res,MF Small Charm", type:"small", req_level:33, all_res:5, mf:7},			// Shimmering Small Charm of Good Luck
{rarity:"magic", name:"Res,Life Small Charm", type:"small", req_level:39, all_res:5, life:20},			// Shimmering Small Charm of Vita
{rarity:"magic", name:"F-Res,Life Small Charm", type:"small", req_level:39, fRes:11, life:20},			// Ruby Small Charm of Vita
{rarity:"magic", name:"C-Res,Life Small Charm", type:"small", req_level:39, cRes:11, life:20},			// Sapphire Small Charm of Vita
{rarity:"magic", name:"L-Res,Life Small Charm", type:"small", req_level:39, lRes:11, life:20},			// Amber Small Charm of Vita
{rarity:"magic", name:"P-Res,Life Small Charm", type:"small", req_level:39, pRes:11, life:20},			// Emerald Small Charm of Vita
{rarity:"magic", name:"AR,Damage,FHR Small Charm", type:"small", req_level:29, ar:20, damage_max:3, fhr:5},	// Fine Small Charm of Balance
{rarity:"magic", name:"AR,Damage,FRW Small Charm", type:"small", req_level:36, ar:20, damage_max:3, frw:3},	// Fine Small Charm of Inertia
{rarity:"magic", name:"Pestilent Small Charm of Anthrax", type:"small", req_level:80, pDamage_all:451, pDamage_duration:12},
{rarity:"magic", name:"AR,Damage,Life Small Charm", type:"small", req_level:39, ar:20, damage_max:3, life:20},	// Fine Small Charm of Vita
{rarity:"magic", name:"AR,Damage,Life Large Charm", type:"large", req_level:66, ar:48, damage_max:6, life:35},	// Sharp Large Charm of Vita
{rarity:"magic", name:"AR,Damage,Life Grand Charm", type:"grand", req_level:83, ar:76, damage_max:10, life:45},	// Sharp Grand Charm of Vita
//{debug:1, name:"+1 (each) skill", req_level:100,
	/* amazon	*///	skill_Jab:1, skill_Power_Strike:1, skill_Poison_Javelin:1, skill_Fend:1, skill_Lightning_Bolt:1, skill_Charged_Strike:1, skill_Plague_Javelin:1, skill_Ground_Slam:1, skill_Lightning_Strike:1, skill_Lightning_Fury:1, skill_Inner_Sight:1, skill_Lethal_Strike:1, skill_Phase_Run:1, skill_Dodge:1, skill_Avoid:1, skill_Penetrate:1, skill_Evade:1, skill_Decoy:1, skill_Valkyrie:1, skill_Pierce:1, skill_Cold_Arrow:1, skill_Magic_Arrow:1, skill_Multiple_Shot:1, skill_Fire_Arrow:1, skill_Ice_Arrow:1, skill_Guided_Arrow:1, skill_Exploding_Arrow:1, skill_Strafe:1, skill_Immolation_Arrow:1, skill_Freezing_Arrow:1,
	/* assassin	*///	skill_Dual_Strike:1, skill_Fists_of_Ember:1, skill_Fists_of_Thunder:1, skill_Fists_of_Ice:1, skill_Static_Strike:1, skill_Dragon_Talon:1, skill_Emberstorm:1, skill_Dragon_Flight:1, skill_Blades_of_Ice:1, skill_Claw_Mastery:1, skill_Psychic_Hammer:1, skill_Burst_of_Speed:1, skill_Mind_Barrier:1, skill_Weapon_Block:1, skill_Cloak_of_Shadows:1, skill_Fade:1, skill_Shadow_Warrior:1, skill_Mind_Blast:1, skill_Venom:1, skill_Shadow_Master:1, skill_Fire_Blast:1, skill_Shock_Web:1, skill_Blade_Throw:1, skill_Charged_Bolt_Sentry:1, skill_Wake_of_Fire:1, skill_Blade_Fury:1, skill_Lightning_Sentry:1, skill_Wake_of_Inferno:1, skill_Death_Sentry:1, skill_Blade_Shield:1, skill_Dragon_Tail:1,
	/* barbarian	*///	skill_Howl:1, skill_Find_Potion:1, skill_Taunt:1, skill_Shout:1, skill_Find_Item:1, skill_Battle_Cry:1, skill_Battle_Orders:1, skill_Grim_Ward:1, skill_War_Cry:1, skill_Battle_Command:1, skill_Edged_Weapon_Mastery:1, skill_Pole_Weapon_Mastery:1, skill_Blunt_Weapon_Mastery:1, skill_Thrown_Weapon_Mastery:1, skill_Increased_Stamina:1, skill_Iron_Skin:1, skill_Increased_Speed:1, skill_Natural_Resistance:1, skill_Frenzy:1, skill_Concentrate:1, skill_Cleave:1, skill_Stun:1, skill_Leap:1, skill_Power_Throw:1, skill_Bash:1, skill_Leap_Attack:1, skill_Ethereal_Throw:1, skill_Whirlwind:1, skill_One_Handed_Weapon_Mastery:1, skill_Two_Handed_Weapon_Mastery:1,
	/* druid	*///	skill_Firestorm:1, skill_Molten_Boulder:1, skill_Flame_Dash:1, skill_Arctic_Blast:1, skill_Fissure:1, skill_Cyclone_Armor:1, skill_Twister:1, skill_Volcano:1, skill_Tornado:1, skill_Armageddon:1, skill_Hurricane:1, skill_Werewolf:1, skill_Lycanthropy:1, skill_Werebear:1, skill_Feral_Rage:1, skill_Maul:1, skill_Rabies:1, skill_Fire_Claws:1, skill_Hunger:1, skill_Shock_Wave:1, skill_Fury:1, skill_Raven:1, skill_Poison_Creeper:1, skill_Heart_of_Wolverine:1, skill_Summon_Spirit_Wolf:1, skill_Carrion_Vine:1, skill_Oak_Sage:1, skill_Summon_Dire_Wolf:1, skill_Solar_Creeper:1, skill_Spirit_of_Barbs:1, skill_Summon_Grizzly:1,
	/* necromancer	*///	skill_Summon_Mastery:1, skill_Raise_Skeleton_Warrior:1, skill_Bone_Offering:1, skill_Clay_Golem:1, skill_Flesh_Offering:1, skill_Raise_Skeletal_Mage:1, skill_Blood_Golem:1, skill_Convocation:1, skill_Iron_Golem:1, skill_Fire_Golem:1, skill_Revive:1, skill_Deadly_Poison:1, skill_Teeth:1, skill_Bone_Armor:1, skill_Corpse_Explosion:1, skill_Desecrate:1, skill_Bone_Spear:1, skill_Bone_Wall:1, skill_Bone_Spirit:1, skill_Poison_Nova:1, skill_Amplify_Damage:1, skill_Dim_Vision:1, skill_Hemorrhage:1, skill_Weaken:1, skill_Iron_Maiden:1, skill_Terror:1, skill_Confuse:1, skill_Life_Tap:1, skill_Attract:1, skill_Decrepify:1, skill_Lower_Resist:1,
	/* paladin	*///	skill_Prayer:1, skill_Resist_Fire:1, skill_Defiance:1, skill_Resist_Cold:1, skill_Cleansing:1, skill_Resist_Lightning:1, skill_Vigor:1, skill_Meditation:1, skill_Redemption:1, skill_Salvation:1, skill_Might:1, skill_Holy_Fire:1, skill_Precision:1, skill_Blessed_Aim:1, skill_Concentration:1, skill_Holy_Freeze:1, skill_Holy_Shock:1, skill_Sanctuary:1, skill_Fanaticism:1, skill_Conviction:1, skill_Sacrifice:1, skill_Smite:1, skill_Holy_Bolt:1, skill_Zeal:1, skill_Charge:1, skill_Vengeance:1, skill_Blessed_Hammer:1, skill_Conversion:1, skill_Holy_Shield:1, skill_Fist_of_the_Heavens:1, skill_Dashing_Strike:1,
	/* sorceress	*///	skill_Ice_Bolt:1, skill_Frigerate:1, skill_Frost_Nova:1, skill_Ice_Blast:1, skill_Shiver_Armor:1, skill_Glacial_Spike:1, skill_Blizzard:1, skill_Freezing_Pulse:1, skill_Chilling_Armor:1, skill_Frozen_Orb:1, skill_Cold_Mastery:1, skill_Charged_Bolt:1, skill_Static_Field:1, skill_Telekinesis:1, skill_Nova:1, skill_Lightning_Surge:1, skill_Chain_Lightning:1, skill_Teleport:1, skill_Discharge:1, skill_Energy_Shield:1, skill_Lightning_Mastery:1, skill_Thunder_Storm:1, skill_Fire_Bolt:1, skill_Warmth:1, skill_Blaze:1, skill_Immolate:1, skill_Fire_Ball:1, skill_Fire_Wall:1, skill_Enflame:1, skill_Meteor:1, skill_Fire_Mastery:1, skill_Hydra:1	},
//{debug:0, name:"+1 O-skills", req_level:100,
			//	oskill_Warp:1, oskill_Ball_Lightning:1,
	/* amazon	*///	oskill_Inner_Sight:1, oskill_Lethal_Strike:1, oskill_Valkyrie:1, oskill_Magic_Arrow:1, oskill_Guided_Arrow:1, oskill_Multiple_Shot:1,
	/* barbarian	*///	oskill_Battle_Command:1, oskill_Battle_Orders:1, oskill_Battle_Cry:1, oskill_Bash:1, oskill_Edged_Weapon_Mastery:1,
	/* druid	*///	oskill_Lycanthropy:1, oskill_Werebear:1, oskill_Werewolf:1, oskill_Feral_Rage:1, oskill_Flame_Dash:1, oskill_Summon_Dire_Wolf:1,
	/* necromancer	*///	oskill_Desecrate:1,
	/* paladin	*///	oskill_Zeal:1, oskill_Vengeance:1,
	/* sorceress	*///	oskill_Frigerate:1, oskill_Shiver_Armor:1, oskill_Cold_Mastery:1, oskill_Hydra:1, oskill_Fire_Ball:1, oskill_Fire_Wall:1, oskill_Meteor:1, oskill_Fire_Mastery:1, oskill_Enflame:1	},
{debug:1, name:"+1 skill", req_level:100, all_skills:1},
{debug:1, name:"+20 skills", req_level:100, all_skills:20},
	],
};

var sets = {
	set_IK:[0,{},{ar:50},{ar:75},{ar:125},{ar:200},{skills_barbarian:3, life:150, all_res:50, mDamage_reduced:10}],
	set_Mav:[0,{},{strength:20},{dexterity:30},{},{skills_amazon:3, all_res:50, defense:100, ar:100, mf:100}],
	set_Ald:[0,{},{ar_bonus:150},{mf:50},{skills_druid:3, e_damage:350, mana_leech:10, all_res:50, defense:150, mana:150}],
	set_TO:[0,{},{oskill_Fire_Ball:18, mana_regen:15},{oskill_Fire_Wall:13, mana_regen:15},{oskill_Meteor:10, mana_regen:15},{skills_necromancer:3, life_leech:20, oskill_Fire_Mastery:3, defense:200, mana:100, mana_regen:15, life_replenish:5, all_res:50}],
	set_Gris:[0,{},{strength:20},{dexterity:30},{skills_paladin:3, fhr:30, ar:200, life:150, all_res:50}],
	set_Nat:[0,{},{mDamage_reduced:15},{defense:200},{skills_assassin:3, defense:150, life_leech:14, mana_leech:14, all_res:50, pdr:30}],
	set_TR:[0,{},{life_replenish:10},{mf:65},{fhr:25},{skills_sorceress:3, life:150, all_res:50, missile_defense:50, defense:150}],
	
	set_BK:[0,{},{all_skills:2, ar:200, damage_vs_demons:200}],
	set_Disciple:[0,{},{defense:150},{skills_poison_all:1},{strength:10},{skills_all:2, all_res:50, mana:100}],
	set_Cow:[0,{},{pRes:25},{stamina:100, strength:20, ias:30, mf:100}],
	set_Brethren:[0,{},{heal_stam:50},{life_replenish:20},{all_skills:2, all_res:50, cbf:1, light_radius:5}],
	set_Hwanin:[0,{},{defense:100},{defense:200},{all_skills:2, frw:30, life_leech:20, all_res:30}],
	set_Naj:[0,{},{defense:175},{dexterity:15, all_res:50, strength:20, mana:100, all_skills:1}],
	set_Orphan:[0,{},{life:35},{thorns:5},{life:50, all_res:15, defense:100, dexterity:10, strength:20, mf:80}],
	set_Sander:[0,{},{defense:50},{ar:75},{all_skills:1, life_leech:4, mana:50, mf:50}],
	set_Sazabi:[0,{},{frw:40},{life_leech:15, max_life:27, all_res:30}],
	
	set_Angelic:[0,{},{dexterity:10},{mana:50},{half_freeze:1, all_res:25, mf:40, mana_regen:8}],
	set_Arcanna:[0,{},{mana:25},{life:50},{fcr:20, mana_leech:5}],
	set_Arctic:[0,{},{strength:5},{life:50},{cbf:1, cDamage_min:6, cDamage_max:14}],
	set_Berserker:[0,{},{life:50},{defense:75, poison_length_reduced:75, pDamage_min:5, pDamage_max:9, pDamage_duration:3}],
	set_Cathan:[0,{},{fDamage_min:15, fDamage_max:20},{lRes:25},{},{fcr:10, mDamage_reduced:3, all_res:25, ar:60, mana:20}],
	set_Civerb:[0,{},{fRes:15},{damage_vs_undead:200, strength:15, lRes:25}],
	set_Cleglaw:[0,{},{defense:50},{defense:50, cblow:35, mana_leech:6, ias:20}],
	set_Death:[0,{},{life_leech:8},{ar_bonus:40, all_res:25, damage_min:10}],
	set_Hsarus:[0,{},{thorns:5},{cbf:1, lRes:25, damage_max:5}],
	set_Infernal:[0,{},{pDamage_all:8, pDamage_duration:3},{owounds:20, skills_necromancer:1, ar_bonus:20, mana_leech:6}],
	set_Iratha:[0,{},{defense:50},{frw:20},{dexterity:15, all_res:20, fRes_max:10, cRes_max:10, lRes_max:10, pRes_max:10}],
	set_Isenhart:[0,{},{strength:10},{dexterity:10},{frw:20, ibc:30, ar_bonus:35, life_leech:5, all_res:10}],
	set_Milabrega:[0,{},{ar:75},{ar:125},{skills_paladin:2, life_leech:8, mana_leech:10, pRes:15}],
	set_Sigon:[0,{},{life_leech:10},{defense:100},{},{},{mana:20, fRes:12, fDamage_max:24, thorns:12, damage_reduced:7}],
	set_Tancred:[0,{},{lDamage_min:15, lDamage_max:15},{life_leech:5},{},{slow_target:35, mana_leech:5, all_res:10, gf:75}],
	set_Vidala:[0,{},{ar:75},{dexterity:15},{cDamage_min:15, cDamage_max:20, pierce:50, freezes_target:1, dexterity:15, strength:10}],
};

var bases = {
	// helm
	Cap:{group:"armor", type:"helm", base_defense:5, def_low:3, def_high:5, durability:12, max_sockets:2, upgrade:"War_Hat"},
	Skull_Cap:{group:"armor", type:"helm", base_defense:11, def_low:8, def_high:11, req_strength:15, durability:18, max_sockets:2, upgrade:"Sallet"},
	Helm:{group:"armor", type:"helm", base_defense:18, def_low:15, def_high:18, req_strength:26, durability:24, max_sockets:2, upgrade:"Casque"},
	Full_Helm:{group:"armor", type:"helm", base_defense:26, def_low:23, def_high:26, req_strength:41, durability:30, max_sockets:2, upgrade:"Basinet"},
	Mask:{group:"armor", type:"helm", base_defense:27, def_low:9, def_high:27, req_strength:23, durability:20, max_sockets:3, upgrade:"Death_Mask"},
	Bone_Helm:{group:"armor", type:"helm", base_defense:36, def_low:33, def_high:36, req_strength:25, durability:40, max_sockets:2, upgrade:"Grim_Helm"},
	Great_Helm:{group:"armor", type:"helm", base_defense:35, def_low:30, def_high:35, req_strength:63, durability:40, max_sockets:3, upgrade:"Winged_Helm"},
	Crown:{group:"armor", type:"helm", base_defense:45, def_low:25, def_high:45, req_strength:55, durability:50, max_sockets:3, upgrade:"Grand_Crown"},
	War_Hat:{group:"armor", type:"helm", base_defense:53, def_low:45, def_high:53, req_level:22, req_strength:20, durability:12, max_sockets:2, upgrade:"Shako", downgrade:"Cap"},
	Sallet:{group:"armor", type:"helm", base_defense:62, def_low:52, def_high:62, req_level:25, req_strength:43, durability:18, max_sockets:2, upgrade:"Hydraskull", downgrade:"Skull_Cap"},
	Casque:{group:"armor", type:"helm", base_defense:72, def_low:63, def_high:72, req_level:25, req_strength:59, durability:24, max_sockets:2, upgrade:"Armet", downgrade:"Helm"},
	Basinet:{group:"armor", type:"helm", base_defense:84, def_low:75, def_high:84, req_level:25, req_strength:82, durability:30, max_sockets:2, upgrade:"Giant_Conch", downgrade:"Full_Helm"},
	Death_Mask:{group:"armor", type:"helm", base_defense:86, def_low:54, def_high:86, req_level:25, req_strength:55, durability:20, max_sockets:3, upgrade:"Demonhead", downgrade:"Mask"},
	Grim_Helm:{group:"armor", type:"helm", base_defense:125, def_low:60, def_high:125, req_level:25, req_strength:58, durability:40, max_sockets:2, upgrade:"Bone_Visage", downgrade:"Bone_Helm"},
	Winged_Helm:{group:"armor", type:"helm", base_defense:98, def_low:85, def_high:98, req_level:25, req_strength:115, durability:40, max_sockets:3, upgrade:"Spired_Helm", downgrade:"Great_Helm"},
	Grand_Crown:{group:"armor", type:"helm", base_defense:113, def_low:78, def_high:113, req_level:25, req_strength:103, durability:50, max_sockets:3, upgrade:"Corona", downgrade:"Crown"},
	Shako:{group:"armor", type:"helm", base_defense:141, def_low:98, def_high:141, req_level:43, req_strength:50, durability:12, max_sockets:2, downgrade:"War_Hat"},
	Hydraskull:{group:"armor", type:"helm", base_defense:145, def_low:101, def_high:145, req_level:47, req_strength:84, durability:18, max_sockets:2, downgrade:"Sallet"},
	Armet:{group:"armor", type:"helm", base_defense:149, def_low:105, def_high:149, req_level:51, req_strength:109, durability:24, max_sockets:2, downgrade:"Casque"},
	Giant_Conch:{group:"armor", type:"helm", base_defense:154, def_low:110, def_high:154, req_level:40, req_strength:142, durability:30, max_sockets:2, downgrade:"Basinet"},
	Demonhead:{group:"armor", type:"helm", base_defense:154, def_low:101, def_high:154, req_level:55, req_strength:102, durability:20, max_sockets:3, downgrade:"Death_Mask"},
	Bone_Visage:{group:"armor", type:"helm", base_defense:157, def_low:100, def_high:157, req_level:63, req_strength:106, durability:40, max_sockets:3, downgrade:"Grim_Helm"},
	Spired_Helm:{group:"armor", type:"helm", base_defense:159, def_low:114, def_high:159, req_level:59, req_strength:192, durability:40, max_sockets:3, downgrade:"Winged_Helm"},
	Corona:{group:"armor", type:"helm", base_defense:165, def_low:111, def_high:165, req_level:66, req_strength:174, durability:50, max_sockets:3, downgrade:"Grand_Crown"},
	Circlet:{group:"armor", type:"helm", base_defense:30, def_low:20, def_high:30, req_level:16, durability:35, max_sockets:2, upgrade:"Tiara"},
	Coronet:{group:"armor", type:"helm", base_defense:40, def_low:30, def_high:40, req_level:39, durability:30, max_sockets:2, upgrade:"Tiara"},
	Tiara:{group:"armor", type:"helm", base_defense:50, def_low:40, def_high:50, req_level:52, durability:25, max_sockets:3, upgrade:"Diadem", downgrade:"Coronet"},
	Diadem:{group:"armor", type:"helm", base_defense:60, def_low:50, def_high:60, req_level:64, durability:20, max_sockets:3, downgrade:"Tiara"},
	// armor
	Quilted_Armor:{group:"armor", type:"armor", base_defense:11, def_low:8, def_high:11, req_strength:12, durability:20, max_sockets:2, upgrade:"Ghost Armor", velocity:0},
	Leather_Armor:{group:"armor", type:"armor", base_defense:17, def_low:14, def_high:17, req_strength:15, durability:24, max_sockets:2, upgrade:"Serpentskin Armor", velocity:0},
	Hard_Leather_Armor:{group:"armor", type:"armor", base_defense:24, def_low:21, def_high:24, req_strength:20, durability:28, max_sockets:2, upgrade:"Demonhide Armor", velocity:0},
	Studded_Leather:{group:"armor", type:"armor", base_defense:35, def_low:32, def_high:35, req_strength:27, durability:32, max_sockets:2, upgrade:"Trellised Armor", velocity:0},
	Ring_Mail:{group:"armor", type:"armor", base_defense:48, def_low:45, def_high:48, req_strength:36, durability:26, max_sockets:3, upgrade:"Linked Mail", velocity:-5},
	Scale_Mail:{group:"armor", type:"armor", base_defense:60, def_low:57, def_high:60, req_strength:44, durability:36, max_sockets:2, upgrade:"Tigulated Mail", velocity:-10},
	Chain_Mail:{group:"armor", type:"armor", base_defense:75, def_low:72, def_high:75, req_strength:48, durability:45, max_sockets:2, upgrade:"Mesh Armor", velocity:-5},
	Breast_Plate:{group:"armor", type:"armor", base_defense:68, def_low:65, def_high:68, req_strength:30, durability:50, max_sockets:3, upgrade:"Cuirass", velocity:0},
	Splint_Mail:{group:"armor", type:"armor", base_defense:95, def_low:90, def_high:95, req_strength:51, durability:30, max_sockets:2, upgrade:"Russet Armor", velocity:-5},
	Plate_Mail:{group:"armor", type:"armor", base_defense:116, def_low:108, def_high:116, req_strength:65, durability:60, max_sockets:2, upgrade:"Templar Coat", velocity:-10},
	Field_Plate:{group:"armor", type:"armor", base_defense:105, def_low:101, def_high:105, req_strength:55, durability:48, max_sockets:2, upgrade:"Sharktooth", velocity:-5},
	Gothic_Plate:{group:"armor", type:"armor", base_defense:135, def_low:128, def_high:135, req_strength:70, durability:55, max_sockets:4, upgrade:"Embossed Plate", velocity:-5},
	Light_Plate:{group:"armor", type:"armor", base_defense:107, def_low:90, def_high:107, req_strength:41, durability:60, max_sockets:3, upgrade:"Mage Plate", velocity:0},
	Full_Plate:{group:"armor", type:"armor", base_defense:161, def_low:150, def_high:161, req_strength:80, durability:70, max_sockets:4, upgrade:"Chaos Armor", velocity:-10},
	Ancient_Armor:{group:"armor", type:"armor", base_defense:233, def_low:218, def_high:233, req_strength:100, durability:60, max_sockets:4, upgrade:"Ornate Armor", velocity:-5},
	Ghost_Armor:{group:"armor", type:"armor", base_defense:117, def_low:102, def_high:117, req_level:22, req_strength:38, durability:20, max_sockets:2, upgrade:"Dusk Shroud", downgrade:"Quilted Armor", velocity:0},
	Serpentskin_Armor:{group:"armor", type:"armor", base_defense:126, def_low:111, def_high:126, req_level:24, req_strength:43, durability:24, max_sockets:2, upgrade:"Wyrmhide", downgrade:"Leather Armor", velocity:0},
	Demonhide_Armor:{group:"armor", type:"armor", base_defense:136, def_low:122, def_high:136, req_level:25, req_strength:50, durability:28, max_sockets:2, upgrade:"Scarab Husk", downgrade:"Hard Leather Armor", velocity:0},
	Trellised_Armor:{group:"armor", type:"armor", base_defense:153, def_low:138, def_high:153, req_level:25, req_strength:61, durability:32, max_sockets:2, upgrade:"Wire Fleece", downgrade:"Studded Leather", velocity:0},
	Linked_Mail:{group:"armor", type:"armor", base_defense:172, def_low:158, def_high:172, req_level:25, req_strength:74, durability:26, max_sockets:3, upgrade:"Diamond Mail", downgrade:"Ring Mail", velocity:-5},
	Tigulated_Mail:{group:"armor", type:"armor", base_defense:190, def_low:176, def_high:190, req_level:25, req_strength:86, durability:36, max_sockets:3, upgrade:"Loricated Mail", downgrade:"Scale Mail", velocity:-10},
	Mesh_Armor:{group:"armor", type:"armor", base_defense:213, def_low:198, def_high:213, req_level:25, req_strength:92, durability:45, max_sockets:3, upgrade:"Boneweave", downgrade:"Chain Mail", velocity:-5},
	Cuirass:{group:"armor", type:"armor", base_defense:202, def_low:188, def_high:202, req_level:25, req_strength:65, durability:50, max_sockets:3, upgrade:"Great Hauberk", downgrade:"Breast Plate", velocity:0},
	Russet_Armor:{group:"armor", type:"armor", base_defense:243, def_low:225, def_high:243, req_level:25, req_strength:97, durability:30, max_sockets:3, upgrade:"Balrog Skin", downgrade:"Splint Mail", velocity:-5},
	Templar_Coat:{group:"armor", type:"armor", base_defense:274, def_low:252, def_high:274, req_level:25, req_strength:118, durability:60, max_sockets:3, upgrade:"Hellforge Plate", downgrade:"Plate Mail", velocity:-10},
	Sharktooth:{group:"armor", type:"armor", base_defense:258, def_low:242, def_high:258, req_level:25, req_strength:103, durability:48, max_sockets:3, upgrade:"Kraken Shell", downgrade:"Field Plate", velocity:-5},
	Embossed_Plate:{group:"armor", type:"armor", base_defense:303, def_low:282, def_high:303, req_level:25, req_strength:125, durability:55, max_sockets:4, upgrade:"Lacquered Plate", downgrade:"Gothic Plate", velocity:-5},
	Mage_Plate:{group:"armor", type:"armor", base_defense:261, def_low:225, def_high:261, req_level:25, req_strength:55, durability:60, max_sockets:3, upgrade:"Archon Plate", downgrade:"Light Plate", velocity:0},
	Chaos_Armor:{group:"armor", type:"armor", base_defense:342, def_low:315, def_high:342, req_level:25, req_strength:140, durability:70, max_sockets:4, upgrade:"Shadow Plate", downgrade:"Full Plate", velocity:-10},
	Ornate_Armor:{group:"armor", type:"armor", base_defense:450, def_low:417, def_high:450, req_level:25, req_strength:170, durability:60, max_sockets:4, upgrade:"Sacred Armor", downgrade:"Ancient Armor", velocity:-5},
	Dusk_Shroud:{group:"armor", type:"armor", base_defense:467, def_low:361, def_high:467, req_level:49, req_strength:77, durability:20, max_sockets:4, downgrade:"Ghost Armor", velocity:0},
	Wyrmhide:{group:"armor", type:"armor", base_defense:470, def_low:364, def_high:470, req_level:50, req_strength:84, durability:24, max_sockets:4, downgrade:"Serpentskin Armor", velocity:0},
	Scarab_Husk:{group:"armor", type:"armor", base_defense:474, def_low:369, def_high:474, req_level:51, req_strength:95, durability:28, max_sockets:4, downgrade:"Demonhide Armor", velocity:0},
	Wire_Fleece:{group:"armor", type:"armor", base_defense:481, def_low:375, def_high:481, req_level:53, req_strength:111, durability:32, max_sockets:4, downgrade:"Trellised Armor", velocity:0},
	Diamond_Mail:{group:"armor", type:"armor", base_defense:489, def_low:383, def_high:489, req_level:54, req_strength:131, durability:26, max_sockets:4, downgrade:"Linked Mail", velocity:-5},
	Loricated_Mail:{group:"armor", type:"armor", base_defense:496, def_low:390, def_high:496, req_level:55, req_strength:149, durability:36, max_sockets:4, downgrade:"Tigulated Mail", velocity:-10},
	Boneweave:{group:"armor", type:"armor", base_defense:505, def_low:399, def_high:505, req_level:47, req_strength:158, durability:45, max_sockets:4, downgrade:"Mesh Armor", velocity:-5},
	Great_Hauberk:{group:"armor", type:"armor", base_defense:501, def_low:395, def_high:501, req_level:56, req_strength:118, durability:50, max_sockets:4, downgrade:"Cuirass", velocity:0},
	Balrog_Skin:{group:"armor", type:"armor", base_defense:517, def_low:410, def_high:517, req_level:57, req_strength:165, durability:30, max_sockets:4, downgrade:"Russet Armor", velocity:-5},
	Hellforge_Plate:{group:"armor", type:"armor", base_defense:530, def_low:421, def_high:530, req_level:59, req_strength:196, durability:60, max_sockets:4, downgrade:"Templar Coat", velocity:-10},
	Kraken_Shell:{group:"armor", type:"armor", base_defense:523, def_low:417, def_high:523, req_level:61, req_strength:174, durability:48, max_sockets:4, downgrade:"Sharktooth", velocity:-5},
	Lacquered_Plate:{group:"armor", type:"armor", base_defense:541, def_low:433, def_high:541, req_level:62, req_strength:208, durability:55, max_sockets:4, downgrade:"Embossed Plate", velocity:-5},
	Archon_Plate:{group:"armor", type:"armor", base_defense:524, def_low:410, def_high:524, req_level:63, req_strength:103, durability:60, max_sockets:4, downgrade:"Mage Plate", velocity:0},
	Shadow_Plate:{group:"armor", type:"armor", base_defense:557, def_low:446, def_high:557, req_level:64, req_strength:230, durability:70, max_sockets:4, downgrade:"Chaos Armor", velocity:-10},
	Sacred_Armor:{group:"armor", type:"armor", base_defense:600, def_low:487, def_high:600, req_level:66, req_strength:232, durability:60, max_sockets:4, downgrade:"Ornate Armor", velocity:-5},
	// shield
	Buckler:{group:"armor", type:"shield", base_defense:6, def_low:4, def_high:6, req_strength:12, durability:12, max_sockets:1, upgrade:"Defender", velocity:0, block:30, smite_min:1, smite_max:3},
	Small_Shield:{group:"armor", type:"shield", base_defense:10, def_low:8, def_high:10, req_strength:22, durability:16, max_sockets:2, upgrade:"Round Shield", velocity:0, block:35, smite_min:2, smite_max:3},
	Large_Shield:{group:"armor", type:"shield", base_defense:14, def_low:12, def_high:14, req_strength:34, durability:24, max_sockets:3, upgrade:"Scutum", velocity:-5, block:42, smite_min:2, smite_max:4},
	Spiked_Shield:{group:"armor", type:"shield", base_defense:25, def_low:15, def_high:25, req_strength:30, durability:40, max_sockets:2, upgrade:"Barbed Shield", velocity:0, block:40, smite_min:5, smite_max:9},
	Kite_Shield:{group:"armor", type:"shield", base_defense:18, def_low:16, def_high:18, req_strength:47, durability:30, max_sockets:3, upgrade:"Dragon Shield", velocity:0, block:38, smite_min:2, smite_max:5},
	Bone_Shield:{group:"armor", type:"shield", base_defense:30, def_low:10, def_high:30, req_strength:25, durability:40, max_sockets:2, upgrade:"Grim Shield", velocity:0, block:50, smite_min:3, smite_max:6},
	Tower_Shield:{group:"armor", type:"shield", base_defense:25, def_low:22, def_high:25, req_strength:75, durability:60, max_sockets:3, upgrade:"Pavise", velocity:-10, block:54, smite_min:1, smite_max:5},
	Gothic_Shield:{group:"armor", type:"shield", base_defense:35, def_low:30, def_high:35, req_strength:60, durability:40, max_sockets:3, upgrade:"Ancient Shield", velocity:-5, block:46, smite_min:2, smite_max:6},
	Defender:{group:"armor", type:"shield", base_defense:49, def_low:41, def_high:49, req_level:22, req_strength:38, durability:68, max_sockets:1, upgrade:"Heater", downgrade:"Buckler", velocity:0, block:40, smite_min:8, smite_max:12},
	Round_Shield:{group:"armor", type:"shield", base_defense:55, def_low:47, def_high:55, req_level:25, req_strength:53, durability:64, max_sockets:2, upgrade:"Luna", downgrade:"Small Shield", velocity:0, block:42, smite_min:7, smite_max:14},
	Scutum:{group:"armor", type:"shield", base_defense:61, def_low:53, def_high:61, req_level:25, req_strength:71, durability:62, max_sockets:3, upgrade:"Hyperion", downgrade:"Large Shield", velocity:-5, block:44, smite_min:11, smite_max:15},
	Barbed_Shield:{group:"armor", type:"shield", base_defense:78, def_low:68, def_high:78, req_level:25, req_strength:65, durability:55, max_sockets:2, upgrade:"Blade Barrier", downgrade:"Spiked Shield", velocity:0, block:47, smite_min:18, smite_max:35},
	Dragon_Shield:{group:"armor", type:"shield", base_defense:67, def_low:59, def_high:67, req_level:25, req_strength:91, durability:76, max_sockets:3, upgrade:"Monarch", downgrade:"Kite Shield", velocity:0, block:48, smite_min:15, smite_max:24},
	Grim_Shield:{group:"armor", type:"shield", base_defense:151, def_low:50, def_high:151, req_level:25, req_strength:58, durability:70, max_sockets:2, upgrade:"Troll Nest", downgrade:"Bone Shield", velocity:0, block:50, smite_min:14, smite_max:20},
	Pavise:{group:"armor", type:"shield", base_defense:78, def_low:68, def_high:78, req_level:25, req_strength:133, durability:72, max_sockets:3, upgrade:"Aegis", downgrade:"Tower Shield", velocity:-10, block:54, smite_min:10, smite_max:17},
	Ancient_Shield:{group:"armor", type:"shield", base_defense:93, def_low:80, def_high:93, req_level:25, req_strength:110, durability:80, max_sockets:3, upgrade:"Ward", downgrade:"Gothic Shield", velocity:-5, block:46, smite_min:12, smite_max:16},
	Heater:{group:"armor", type:"shield", base_defense:110, def_low:95, def_high:110, req_level:43, req_strength:77, durability:88, max_sockets:2, downgrade:"Defender", velocity:0, block:52, smite_min:16, smite_max:30},
	Luna:{group:"armor", type:"shield", base_defense:123, def_low:108, def_high:123, req_level:45, req_strength:100, durability:84, max_sockets:2, downgrade:"Round Shield", velocity:0, block:50, smite_min:17, smite_max:29},
	Hyperion:{group:"armor", type:"shield", base_defense:135, def_low:119, def_high:135, req_level:48, req_strength:127, durability:82, max_sockets:3, downgrade:"Scutum", velocity:-5, block:54, smite_min:14, smite_max:32},
	Blade_Barrier:{group:"armor", type:"shield", base_defense:163, def_low:147, def_high:163, req_level:51, req_strength:118, durability:83, max_sockets:3, downgrade:"Barbed Shield", velocity:0, block:50, smite_min:26, smite_max:40},
	Monarch:{group:"armor", type:"shield", base_defense:148, def_low:133, def_high:148, req_level:54, req_strength:156, durability:86, max_sockets:4, downgrade:"Dragon Shield", velocity:0, block:52, smite_min:12, smite_max:34},
	Troll_Nest:{group:"armor", type:"shield", base_defense:173, def_low:158, def_high:173, req_level:57, req_strength:106, durability:74, max_sockets:3, downgrade:"Grim Shield", velocity:0, block:50, smite_min:24, smite_max:38},
	Aegis:{group:"armor", type:"shield", base_defense:161, def_low:145, def_high:161, req_level:59, req_strength:219, durability:92, max_sockets:4, downgrade:"Pavise", velocity:-10, block:54, smite_min:18, smite_max:28},
	Ward:{group:"armor", type:"shield", base_defense:170, def_low:153, def_high:170, req_level:63, req_strength:185, durability:100, max_sockets:4, downgrade:"Ancient Shield", velocity:-5, block:54, smite_min:11, smite_max:35},
	// gloves
	Leather_Gloves:{group:"armor", type:"gloves", base_defense:3, def_low:2, def_high:3, durability:12, upgrade:"Demonhide Gloves"},
	Heavy_Gloves:{group:"armor", type:"gloves", base_defense:6, def_low:5, def_high:6, durability:14, upgrade:"Sharkskin Gloves"},
	Chain_Gloves:{group:"armor", type:"gloves", base_defense:9, def_low:8, def_high:9, req_strength:25, durability:16, upgrade:"Heavy Bracers"},
	Light_Gauntlets:{group:"armor", type:"gloves", base_defense:11, def_low:9, def_high:11, req_strength:45, durability:18, upgrade:"Battle Gauntlets"},
	Gauntlets:{group:"armor", type:"gloves", base_defense:15, def_low:12, def_high:15, req_strength:60, durability:24, upgrade:"War Gauntlets"},
	Demonhide_Gloves:{group:"armor", type:"gloves", base_defense:35, def_low:28, def_high:35, req_level:21, req_strength:20, durability:12, upgrade:"Bramble Mitts", downgrade:"Leather Gloves"},
	Sharkskin_Gloves:{group:"armor", type:"gloves", base_defense:39, def_low:33, def_high:39, req_level:25, req_strength:20, durability:14, upgrade:"Vampirebone Gloves", downgrade:"Heavy Gloves"},
	Heavy_Bracers:{group:"armor", type:"gloves", base_defense:44, def_low:37, def_high:44, req_level:25, req_strength:58, durability:16, upgrade:"Vambraces", downgrade:"Chain Gloves"},
	Battle_Gauntlets:{group:"armor", type:"gloves", base_defense:47, def_low:39, def_high:47, req_level:25, req_strength:88, durability:18, upgrade:"Crusader Gauntlets", downgrade:"Light Gauntlets"},
	War_Gauntlets:{group:"armor", type:"gloves", base_defense:53, def_low:43, def_high:53, req_level:25, req_strength:110, durability:24, upgrade:"Ogre Gauntlets", downgrade:"Gauntlets"},
	Bramble_Mitts:{group:"armor", type:"gloves", base_defense:62, def_low:54, def_high:62, req_level:42, req_strength:50, durability:12, downgrade:"Demonhide Gloves"},
	Vampirebone_Gloves:{group:"armor", type:"gloves", base_defense:65, def_low:56, def_high:65, req_level:47, req_strength:50, durability:14, downgrade:"Sharkskin Gloves"},
	Vambraces:{group:"armor", type:"gloves", base_defense:67, def_low:59, def_high:67, req_level:51, req_strength:106, durability:16, downgrade:"Heavy Bracers"},
	Crusader_Gauntlets:{group:"armor", type:"gloves", base_defense:68, def_low:59, def_high:68, req_level:57, req_strength:151, durability:18, downgrade:"Battle Gauntlets"},
	Ogre_Gauntlets:{group:"armor", type:"gloves", base_defense:71, def_low:62, def_high:71, req_level:64, req_strength:185, durability:24, downgrade:"War Gauntlets"},
	// boots
	Boots:{group:"armor", type:"boots", base_defense:3, def_low:2, def_high:3, durability:12, kick_min:3, upgrade:"Demonhide Boots"},
	Heavy_Boots:{group:"armor", type:"boots", base_defense:6, def_low:5, def_high:6, req_strength:18, durability:14, kick_min:4, upgrade:"Sharkskin Boots"},
	Chain_Boots:{group:"armor", type:"boots", base_defense:9, def_low:8, def_high:9, req_strength:30, durability:16, kick_min:6, upgrade:"Mesh Boots"},
	Light_Plated_Boots:{group:"armor", type:"boots", base_defense:11, def_low:9, def_high:11, req_strength:50, durability:18, kick_min:8, upgrade:"Battle Boots"},
	Greaves:{group:"armor", type:"boots", base_defense:15, def_low:12, def_high:15, req_strength:70, durability:24, kick_min:10, upgrade:"War Boots"},
	Demonhide_Boots:{group:"armor", type:"boots", base_defense:35, def_low:28, def_high:35, req_level:24, req_strength:20, durability:12, kick_min:26, upgrade:"Wyrmhide Boots", downgrade:"Boots"},
	Sharkskin_Boots:{group:"armor", type:"boots", base_defense:39, def_low:33, def_high:39, req_level:25, req_strength:47, durability:14, kick_min:28, upgrade:"Scarabshell Boots", downgrade:"Heavy Boots"},
	Mesh_Boots:{group:"armor", type:"boots", base_defense:44, def_low:37, def_high:44, req_level:25, req_strength:65, durability:16, kick_min:23, upgrade:"Boneweave Boots", downgrade:"Chain Boots"},
	Battle_Boots:{group:"armor", type:"boots", base_defense:47, def_low:39, def_high:47, req_level:25, req_strength:95, durability:18, kick_min:37, upgrade:"Mirrored Boots", downgrade:"Light Plated Boots"},
	War_Boots:{group:"armor", type:"boots", base_defense:53, def_low:43, def_high:53, req_level:25, req_strength:125, durability:24, kick_min:39, upgrade:"Myrmidon Greaves", downgrade:"Greaves"},
	Wyrmhide_Boots:{group:"armor", type:"boots", base_defense:62, def_low:54, def_high:62, req_level:45, req_strength:50, durability:12, kick_min:65, downgrade:"Demonhide Boots"},
	Scarabshell_Boots:{group:"armor", type:"boots", base_defense:65, def_low:56, def_high:65, req_level:49, req_strength:91, durability:14, kick_min:60, downgrade:"Sharkskin Boots"},
	Boneweave_Boots:{group:"armor", type:"boots", base_defense:67, def_low:59, def_high:67, req_level:54, req_strength:118, durability:16, kick_min:69, downgrade:"Mesh Boots"},
	Mirrored_Boots:{group:"armor", type:"boots", base_defense:68, def_low:59, def_high:68, req_level:60, req_strength:163, durability:18, kick_min:50, downgrade:"Battle Boots"},
	Myrmidon_Greaves:{group:"armor", type:"boots", base_defense:71, def_low:62, def_high:71, req_level:65, req_strength:208, durability:24, kick_min:83, downgrade:"War Boots"},
	// belt
	Sash:{group:"armor", type:"belt", base_defense:2, def_low:2, def_high:2, durability:12, upgrade:"Demonhide Sash"},	// rows:-2
	Light_Belt:{group:"armor", type:"belt", base_defense:3, def_low:3, def_high:3, durability:14, upgrade:"Sharkskin Belt"},	// rows:-2
	Belt:{group:"armor", type:"belt", base_defense:5, def_low:5, def_high:5, req_strength:25, durability:16, upgrade:"Mesh Belt"},	// rows:-1
	Heavy_Belt:{group:"armor", type:"belt", base_defense:6, def_low:6, def_high:6, req_strength:45, durability:18, upgrade:"Battle Belt"},	// rows:-1
	Plated_Belt:{group:"armor", type:"belt", base_defense:11, def_low:8, def_high:11, req_strength:60, durability:24, upgrade:"War Belt"},
	Demonhide_Sash:{group:"armor", type:"belt", base_defense:34, def_low:29, def_high:34, req_level:24, req_strength:20, durability:12, upgrade:"Spiderweb Sash", downgrade:"Sash"},
	Sharkskin_Belt:{group:"armor", type:"belt", base_defense:36, def_low:31, def_high:36, req_level:25, req_strength:20, durability:14, upgrade:"Vampirefang Belt", downgrade:"Light Belt"},
	Mesh_Belt:{group:"armor", type:"belt", base_defense:40, def_low:35, def_high:40, req_level:25, req_strength:58, durability:16, upgrade:"Mithril Coil", downgrade:"Belt"},
	Battle_Belt:{group:"armor", type:"belt", base_defense:42, def_low:37, def_high:42, req_level:25, req_strength:88, durability:18, upgrade:"Troll Belt", downgrade:"Heavy Belt"},
	War_Belt:{group:"armor", type:"belt", base_defense:52, def_low:41, def_high:52, req_level:25, req_strength:110, durability:24, upgrade:"Colossus Girdle", downgrade:"Plated Belt"},
	Spiderweb_Sash:{group:"armor", type:"belt", base_defense:62, def_low:55, def_high:62, req_level:46, req_strength:50, durability:12, downgrade:"Demonhide Sash"},
	Vampirefang_Belt:{group:"armor", type:"belt", base_defense:63, def_low:56, def_high:63, req_level:51, req_strength:50, durability:14, downgrade:"Sharkskin Belt"},
	Mithril_Coil:{group:"armor", type:"belt", base_defense:65, def_low:58, def_high:65, req_level:56, req_strength:106, durability:16, downgrade:"Mesh Belt"},
	Troll_Belt:{group:"armor", type:"belt", base_defense:66, def_low:59, def_high:66, req_level:62, req_strength:151, durability:18, downgrade:"Battle Belt"},
	Colossus_Girdle:{group:"armor", type:"belt", base_defense:71, def_low:61, def_high:71, req_level:67, req_strength:185, durability:24, downgrade:"War Belt"},
	// helm (class)
	Wolf_Head:{group:"armor", type:"helm", base_defense:11, def_low:8, def_high:11, req_level:3, req_strength:16, durability:20, max_sockets:3, upgrade:"Alpha Helm"},
	Hawk_Helm:{group:"armor", type:"helm", base_defense:15, def_low:4, def_high:15, req_level:6, req_strength:20, durability:20, max_sockets:3, upgrade:"Griffon Headress"},
	Antlers:{group:"armor", type:"helm", base_defense:24, def_low:18, def_high:24, req_level:12, req_strength:24, durability:20, max_sockets:3, upgrade:"Hunter's Guise"},
	Falcon_Mask:{group:"armor", type:"helm", base_defense:28, def_low:12, def_high:28, req_level:15, req_strength:28, durability:20, max_sockets:3, upgrade:"Sacred Feathers"},
	Spirit_Mask:{group:"armor", type:"helm", base_defense:35, def_low:22, def_high:35, req_level:18, req_strength:30, durability:20, max_sockets:3, upgrade:"Totemic Mask"},
	Alpha_Helm:{group:"armor", type:"helm", base_defense:62, def_low:52, def_high:62, req_level:26, req_strength:44, durability:20, max_sockets:3, upgrade:"Blood Spirit", downgrade:"Wolf Head"},
	Griffon_Headress:{group:"armor", type:"helm", base_defense:68, def_low:46, def_high:68, req_level:30, req_strength:50, durability:20, max_sockets:3, upgrade:"Sun Spirit", downgrade:"Hawk Helm"},
	Hunters_Guise:{group:"armor", type:"helm", base_defense:81, def_low:67, def_high:81, req_level:29, req_strength:56, durability:20, max_sockets:3, upgrade:"Earth Spirit", downgrade:"Antlers"},
	Sacred_Feathers:{group:"armor", type:"helm", base_defense:87, def_low:58, def_high:87, req_level:32, req_strength:62, durability:20, max_sockets:3, upgrade:"Sky Spirit", downgrade:"Falcon Mask"},
	Totemic_Mask:{group:"armor", type:"helm", base_defense:98, def_low:73, def_high:98, req_level:41, req_strength:65, durability:20, max_sockets:3, upgrade:"Dream Spirit", downgrade:"Spirit Mask"},
	Blood_Spirit:{group:"armor", type:"helm", base_defense:145, def_low:101, def_high:145, req_level:46, req_strength:86, durability:20, max_sockets:3, downgrade:"Alpha Helm"},
	Sun_Spirit:{group:"armor", type:"helm", base_defense:147, def_low:98, def_high:147, req_level:51, req_strength:95, durability:20, max_sockets:3, downgrade:"Griffon Headress"},
	Earth_Spirit:{group:"armor", type:"helm", base_defense:152, def_low:107, def_high:152, req_level:57, req_strength:104, durability:20, max_sockets:3, downgrade:"Hunter's Guise"},
	Sky_Spirit:{group:"armor", type:"helm", base_defense:155, def_low:103, def_high:155, req_level:62, req_strength:113, durability:20, max_sockets:3, downgrade:"Sacred Feathers"},
	Dream_Spirit:{group:"armor", type:"helm", base_defense:159, def_low:109, def_high:159, req_level:66, req_strength:118, durability:20, max_sockets:3, downgrade:"Totemic Mask"},
	Jawbone_Cap:{group:"armor", type:"helm", base_defense:15, def_low:10, def_high:15, req_level:3, req_strength:25, durability:25, max_sockets:3, upgrade:"Jawbone Visor"},
	Fanged_Helm:{group:"armor", type:"helm", base_defense:20, def_low:15, def_high:20, req_level:6, req_strength:35, durability:35, max_sockets:3, upgrade:"Lion Helm"},
	Horned_Helm:{group:"armor", type:"helm", base_defense:30, def_low:25, def_high:30, req_level:12, req_strength:45, durability:45, max_sockets:3, upgrade:"Rage Mask"},
	Assault_Helmet:{group:"armor", type:"helm", base_defense:35, def_low:30, def_high:35, req_level:15, req_strength:55, durability:50, max_sockets:3, upgrade:"Savage Helmet"},
	Avenger_Guard:{group:"armor", type:"helm", base_defense:50, def_low:35, def_high:50, req_level:18, req_strength:65, durability:55, max_sockets:3, upgrade:"Slayer Guard"},
	Jawbone_Visor:{group:"armor", type:"helm", base_defense:68, def_low:55, def_high:68, req_level:25, req_strength:58, durability:25, max_sockets:3, upgrade:"Carnage Helm", downgrade:"Jawbone Cap"},
	Lion_Helm:{group:"armor", type:"helm", base_defense:75, def_low:63, def_high:75, req_level:29, req_strength:73, durability:35, max_sockets:3, upgrade:"Fury Visor", downgrade:"Fanged Helm"},
	Rage_Mask:{group:"armor", type:"helm", base_defense:90, def_low:78, def_high:90, req_level:29, req_strength:88, durability:45, max_sockets:3, upgrade:"Destroyer Helm", downgrade:"Horned Helm"},
	Savage_Helmet:{group:"armor", type:"helm", base_defense:98, def_low:85, def_high:98, req_level:32, req_strength:103, durability:50, max_sockets:3, upgrade:"Conqueror Crown", downgrade:"Assault Helmet"},
	Slayer_Guard:{group:"armor", type:"helm", base_defense:120, def_low:93, def_high:120, req_level:40, req_strength:118, durability:55, max_sockets:3, upgrade:"Guardian Crown", downgrade:"Avenger Guard"},
	Carnage_Helm:{group:"armor", type:"helm", base_defense:147, def_low:102, def_high:147, req_level:45, req_strength:106, durability:25, max_sockets:3, downgrade:"Jawbone Visor"},
	Fury_Visor:{group:"armor", type:"helm", base_defense:150, def_low:105, def_high:150, req_level:49, req_strength:129, durability:35, max_sockets:3, downgrade:"Lion Helm"},
	Destroyer_Helm:{group:"armor", type:"helm", base_defense:156, def_low:111, def_high:156, req_level:54, req_strength:151, durability:45, max_sockets:3, downgrade:"Rage Mask"},
	Conqueror_Crown:{group:"armor", type:"helm", base_defense:159, def_low:114, def_high:159, req_level:60, req_strength:174, durability:50, max_sockets:3, downgrade:"Savage Helmet"},
	Guardian_Crown:{group:"armor", type:"helm", base_defense:168, def_low:117, def_high:168, req_level:65, req_strength:196, durability:55, max_sockets:3, downgrade:"Slayer Guard"},
	// shield (class)
	Targe:{group:"armor", type:"shield", base_defense:12, def_low:8, def_high:12, req_level:3, req_strength:16, durability:20, max_sockets:4, upgrade:"Akaran Targe", block:40, smite_min:2, smite_max:6},
	Rondache:{group:"armor", type:"shield", base_defense:18, def_low:10, def_high:18, req_level:6, req_strength:26, durability:30, max_sockets:4, upgrade:"Akaran Rondache", block:45, smite_min:2, smite_max:8},
	Heraldic_Shield:{group:"armor", type:"shield", base_defense:26, def_low:16, def_high:26, req_level:12, req_strength:40, durability:40, max_sockets:4, upgrade:"Protector Shield", block:50, smite_min:3, smite_max:9},
	Aerin_Shield:{group:"armor", type:"shield", base_defense:36, def_low:26, def_high:36, req_level:15, req_strength:50, durability:50, max_sockets:4, upgrade:"Gilded Shield", block:52, smite_min:4, smite_max:10},
	Crown_Shield:{group:"armor", type:"shield", base_defense:40, def_low:30, def_high:40, req_level:18, req_strength:65, durability:60, max_sockets:4, upgrade:"Royal Shield", block:55, smite_min:4, smite_max:12},
	Akaran_Targe:{group:"armor", type:"shield", base_defense:125, def_low:101, def_high:125, req_level:26, req_strength:44, durability:20, max_sockets:4, upgrade:"Sacred Targe", downgrade:"Targe", block:40, smite_min:12, smite_max:16},
	Akaran_Rondache:{group:"armor", type:"shield", base_defense:137, def_low:113, def_high:137, req_level:30, req_strength:59, durability:30, max_sockets:4, upgrade:"Sacred Rondache", downgrade:"Rondache", block:45, smite_min:15, smite_max:20},
	Protector_Shield:{group:"armor", type:"shield", base_defense:153, def_low:129, def_high:153, req_level:34, req_strength:69, durability:40, max_sockets:4, upgrade:"Kurast Shield", downgrade:"Heraldic Shield", block:50, smite_min:18, smite_max:24},
	Gilded_Shield:{group:"armor", type:"shield", base_defense:168, def_low:144, def_high:168, req_level:38, req_strength:89, durability:50, max_sockets:4, upgrade:"Zakarum Shield", downgrade:"Aerin Shield", block:52, smite_min:20, smite_max:28},
	Royal_Shield:{group:"armor", type:"shield", base_defense:181, def_low:156, def_high:181, req_level:41, req_strength:114, durability:60, max_sockets:4, upgrade:"Vortex Shield", downgrade:"Crown Shield", block:55, smite_min:24, smite_max:32},
	Sacred_Targe:{group:"armor", type:"shield", base_defense:158, def_low:126, def_high:158, req_level:47, req_strength:86, durability:45, max_sockets:4, downgrade:"Akaran Targe", block:60, smite_min:22, smite_max:70},
	Sacred_Rondache:{group:"armor", type:"shield", base_defense:164, def_low:138, def_high:164, req_level:52, req_strength:109, durability:68, max_sockets:4, downgrade:"Akaran Rondache", block:58, smite_min:35, smite_max:58},
	Kurast_Shield:{group:"armor", type:"shield", base_defense:172, def_low:154, def_high:172, req_level:55, req_strength:124, durability:55, max_sockets:4, downgrade:"Protector Shield", block:55, smite_min:10, smite_max:82},
	Zakarum_Shield:{group:"armor", type:"shield", base_defense:193, def_low:169, def_high:193, req_level:61, req_strength:142, durability:65, max_sockets:4, downgrade:"Gilded Shield", block:52, smite_min:46, smite_max:46},
	Vortex_Shield:{group:"armor", type:"shield", base_defense:225, def_low:182, def_high:225, req_level:66, req_strength:148, durability:90, max_sockets:4, downgrade:"Royal Shield", block:49, smite_min:5, smite_max:87},
	Preserved_Head:{group:"armor", type:"shield", base_defense:5, def_low:2, def_high:5, req_level:3, req_strength:12, durability:20, max_sockets:2, upgrade:"Minion Skull", block:23},
	Zombie_Head:{group:"armor", type:"shield", base_defense:8, def_low:4, def_high:8, req_level:6, req_strength:14, durability:20, max_sockets:2, upgrade:"Hellspawn Skull", block:25},
	Unraveller_Head:{group:"armor", type:"shield", base_defense:10, def_low:6, def_high:10, req_level:12, req_strength:18, durability:20, max_sockets:2, upgrade:"Overseer Skull", block:28},
	Gargoyle_Head:{group:"armor", type:"shield", base_defense:16, def_low:10, def_high:16, req_level:15, req_strength:20, durability:20, max_sockets:2, upgrade:"Succubae Skull", block:30},
	Demon_Head:{group:"armor", type:"shield", base_defense:20, def_low:15, def_high:20, req_level:18, req_strength:25, durability:20, max_sockets:2, upgrade:"Bloodlord Skull", block:32},
	Mummified_Trophy:{group:"armor", type:"shield", base_defense:48, def_low:38, def_high:48, req_level:24, req_strength:38, durability:20, max_sockets:2, upgrade:"Minion Skull", downgrade:"Preserved Head", block:23},
	Fetish_Trophy:{group:"armor", type:"shield", base_defense:52, def_low:41, def_high:52, req_level:29, req_strength:41, durability:20, max_sockets:2, upgrade:"Hellspawn Skull", downgrade:"Zombie Head", block:25},
	Sexton_Trophy:{group:"armor", type:"shield", base_defense:55, def_low:44, def_high:55, req_level:33, req_strength:47, durability:20, max_sockets:2, upgrade:"Overseer Skull", downgrade:"Unraveller Head", block:28},
	Cantor_Trophy:{group:"armor", type:"shield", base_defense:64, def_low:50, def_high:64, req_level:36, req_strength:50, durability:20, max_sockets:2, upgrade:"Succubae Skull", downgrade:"Gargoyle Head", block:30},
	Heirophant_Trophy:{group:"armor", type:"shield", base_defense:70, def_low:58, def_high:70, req_level:40, req_strength:58, durability:20, max_sockets:2, upgrade:"Bloodlord Skull", downgrade:"Demon Head", block:32},
	Minion_Skull:{group:"armor", type:"shield", base_defense:139, def_low:95, def_high:139, req_level:44, req_strength:77, durability:20, max_sockets:2, downgrade:"Minion Skull", block:23},
	Hellspawn_Skull:{group:"armor", type:"shield", base_defense:141, def_low:96, def_high:141, req_level:50, req_strength:82, durability:20, max_sockets:2, downgrade:"Hellspawn Skull", block:25},
	Overseer_Skull:{group:"armor", type:"shield", base_defense:142, def_low:98, def_high:142, req_level:49, req_strength:91, durability:20, max_sockets:2, downgrade:"Overseer Skull", block:28},
	Succubae_Skull:{group:"armor", type:"shield", base_defense:146, def_low:100, def_high:146, req_level:60, req_strength:95, durability:20, max_sockets:2, downgrade:"Succubae Skull", block:30},
	Bloodlord_Skull:{group:"armor", type:"shield", base_defense:148, def_low:103, def_high:148, req_level:65, req_strength:106, durability:20, max_sockets:2, downgrade:"Bloodlord Skull", block:32},

	// axe
	Hand_Axe:{group:"weapon", type:"axe", base_damage_min:3, base_damage_max:6, durability:28, speed:0, range:0, max_sockets:2, upgrade:"Hatchet"},
	Axe:{group:"weapon", type:"axe", base_damage_min:4, base_damage_max:11, req_strength:32, durability:24, speed:10, range:1, max_sockets:4, upgrade:"Cleaver"},
	Double_Axe:{group:"weapon", type:"axe", base_damage_min:5, base_damage_max:13, req_strength:43, durability:24, speed:10, range:1, max_sockets:5, upgrade:"Twin Axe"},
	Military_Pick:{group:"weapon", type:"axe", base_damage_min:7, base_damage_max:11, req_strength:49, req_dexterity:33, durability:26, speed:-10, range:1, max_sockets:6, upgrade:"Crowbill"},
	War_Axe:{group:"weapon", type:"axe", base_damage_min:10, base_damage_max:18, req_strength:67, durability:26, speed:0, range:2, max_sockets:6, upgrade:"Naga"},
	Large_Axe:{group:"weapon", type:"axe", base_damage_min:6, base_damage_max:13, req_strength:35, durability:30, speed:-10, range:1, max_sockets:4, upgrade:"Military Axe", twoHands:1},
	Broad_Axe:{group:"weapon", type:"axe", base_damage_min:10, base_damage_max:18, req_strength:48, durability:35, speed:0, range:1, max_sockets:5, upgrade:"Bearded Axe", twoHands:1},
	Battle_Axe:{group:"weapon", type:"axe", base_damage_min:12, base_damage_max:32, req_strength:54, durability:40, speed:10, range:1, max_sockets:5, upgrade:"Tabar", twoHands:1},
	Great_Axe:{group:"weapon", type:"axe", base_damage_min:9, base_damage_max:30, req_strength:63, req_dexterity:39, durability:50, speed:-10, range:2, max_sockets:6, upgrade:"Gothic Axe", twoHands:1},
	Giant_Axe:{group:"weapon", type:"axe", base_damage_min:22, base_damage_max:45, req_strength:70, durability:50, speed:10, range:3, max_sockets:6, upgrade:"Ancient Axe", twoHands:1},
	Hatchet:{group:"weapon", type:"axe", base_damage_min:10, base_damage_max:21, req_level:19, req_strength:25, req_dexterity:25, durability:28, speed:0, range:0, max_sockets:2, upgrade:"Tomahawk", downgrade:"Hand Axe"},
	Cleaver:{group:"weapon", type:"axe", base_damage_min:10, base_damage_max:33, req_level:22, req_strength:68, durability:24, speed:10, range:1, max_sockets:4, upgrade:"Small Crescent", downgrade:"Axe"},
	Twin_Axe:{group:"weapon", type:"axe", base_damage_min:13, base_damage_max:38, req_level:25, req_strength:85, durability:24, speed:10, range:1, max_sockets:5, upgrade:"Ettin Axe", downgrade:"Double Axe"},
	Crowbill:{group:"weapon", type:"axe", base_damage_min:14, base_damage_max:34, req_level:25, req_strength:94, req_dexterity:70, durability:26, speed:-10, range:1, max_sockets:6, upgrade:"War Spike", downgrade:"Military Pick"},
	Naga:{group:"weapon", type:"axe", base_damage_min:16, base_damage_max:45, req_level:25, req_strength:121, durability:26, speed:0, range:2, max_sockets:6, upgrade:"Berserker Axe", downgrade:"War Axe"},
	Military_Axe:{group:"weapon", type:"axe", base_damage_min:14, base_damage_max:34, req_level:22, req_strength:73, durability:30, speed:-10, range:1, max_sockets:4, upgrade:"Feral Axe", downgrade:"Large Axe", twoHands:1},
	Bearded_Axe:{group:"weapon", type:"axe", base_damage_min:21, base_damage_max:49, req_level:25, req_strength:92, durability:35, speed:0, range:1, max_sockets:5, upgrade:"Silver Edged Axe", downgrade:"Broad Axe", twoHands:1},
	Tabar:{group:"weapon", type:"axe", base_damage_min:24, base_damage_max:77, req_level:25, req_strength:101, durability:40, speed:10, range:1, max_sockets:5, upgrade:"Decapitator", downgrade:"Battle Axe", twoHands:1},
	Gothic_Axe:{group:"weapon", type:"axe", base_damage_min:18, base_damage_max:70, req_level:25, req_strength:115, req_dexterity:79, durability:50, speed:-10, range:2, max_sockets:6, upgrade:"Champion Axe", downgrade:"Great Axe", twoHands:1},
	Ancient_Axe:{group:"weapon", type:"axe", base_damage_min:43, base_damage_max:85, req_level:25, req_strength:125, durability:50, speed:10, range:3, max_sockets:6, upgrade:"Glorious Axe", downgrade:"Giant Axe", twoHands:1},
	Tomahawk:{group:"weapon", type:"axe", base_damage_min:33, base_damage_max:58, req_level:40, req_strength:125, req_dexterity:67, durability:28, speed:0, range:0, max_sockets:2, downgrade:"Hatchet"},
	Small_Crescent:{group:"weapon", type:"axe", base_damage_min:38, base_damage_max:60, req_level:45, req_strength:115, req_dexterity:83, durability:24, speed:10, range:1, max_sockets:4, downgrade:"Cleaver"},
	Ettin_Axe:{group:"weapon", type:"axe", base_damage_min:33, base_damage_max:66, req_level:52, req_strength:145, req_dexterity:45, durability:24, speed:10, range:1, max_sockets:5, downgrade:"Twin Axe"},
	War_Spike:{group:"weapon", type:"axe", base_damage_min:30, base_damage_max:48, req_level:59, req_strength:133, req_dexterity:54, durability:26, speed:-10, range:1, max_sockets:6, downgrade:"Crowbill"},
	Berserker_Axe:{group:"weapon", type:"axe", base_damage_min:24, base_damage_max:71, req_level:64, req_strength:138, req_dexterity:59, durability:26, speed:0, range:2, max_sockets:6, downgrade:"Naga"},
	Feral_Axe:{group:"weapon", type:"axe", base_damage_min:25, base_damage_max:123, req_level:42, req_strength:196, durability:30, speed:-15, range:2, max_sockets:4, downgrade:"Military Axe", twoHands:1},
	Silver_Edged_Axe:{group:"weapon", type:"axe", base_damage_min:62, base_damage_max:110, req_level:48, req_strength:166, req_dexterity:65, durability:35, speed:0, range:2, max_sockets:5, downgrade:"Bearded Axe", twoHands:1},
	Decapitator:{group:"weapon", type:"axe", base_damage_min:49, base_damage_max:137, req_level:54, req_strength:189, req_dexterity:33, durability:40, speed:10, range:2, max_sockets:5, downgrade:"Tabar", twoHands:1},
	Champion_Axe:{group:"weapon", type:"axe", base_damage_min:59, base_damage_max:94, req_level:61, req_strength:167, req_dexterity:59, durability:50, speed:-10, range:2, max_sockets:6, downgrade:"Gothic Axe", twoHands:1},
	Glorious_Axe:{group:"weapon", type:"axe", base_damage_min:60, base_damage_max:124, req_level:66, req_strength:164, req_dexterity:55, durability:50, speed:10, range:3, max_sockets:6, downgrade:"Ancient Axe", twoHands:1},
	// mace
	Club:{group:"weapon", type:"mace", base_damage_min:1, base_damage_max:6, durability:24, speed:-10, range:0, max_sockets:2, upgrade:"Cudgel", subtype:"club"},
	Spiked_Club:{group:"weapon", type:"mace", base_damage_min:5, base_damage_max:8, durability:36, speed:0, range:1, max_sockets:2, upgrade:"Barbed Club", subtype:"club"},
	Mace:{group:"weapon", type:"mace", base_damage_min:3, base_damage_max:10, req_strength:27, durability:60, speed:0, range:0, max_sockets:2, upgrade:"Flanged Mace", subtype:"mace"},
	Morning_Star:{group:"weapon", type:"mace", base_damage_min:7, base_damage_max:16, req_strength:36, durability:72, speed:10, range:1, max_sockets:3, upgrade:"Jagged Star", subtype:"mace"},
	Flail:{group:"weapon", type:"mace", base_damage_min:1, base_damage_max:24, req_strength:41, req_dexterity:35, durability:30, speed:-10, range:2, max_sockets:5, upgrade:"Knout", subtype:"mace"},
	War_Hammer:{group:"weapon", type:"mace", base_damage_min:19, base_damage_max:29, req_strength:53, durability:55, speed:20, range:0, max_sockets:4, upgrade:"Battle Hammer", subtype:"hammer"},
	Maul:{group:"weapon", type:"mace", base_damage_min:30, base_damage_max:43, req_strength:69, durability:60, speed:10, range:1, max_sockets:6, upgrade:"War Club", twoHands:1, subtype:"hammer"},
	Great_Maul:{group:"weapon", type:"mace", base_damage_min:38, base_damage_max:58, req_strength:99, durability:60, speed:20, range:2, max_sockets:6, upgrade:"Martel de Fer", twoHands:1, subtype:"hammer"},
	Cudgel:{group:"weapon", type:"mace", base_damage_min:6, base_damage_max:21, req_level:18, req_strength:25, durability:24, speed:-10, range:0, max_sockets:2, upgrade:"Truncheon", downgrade:"Club", subtype:"club"},
	Barbed_Club:{group:"weapon", type:"mace", base_damage_min:13, base_damage_max:25, req_level:20, req_strength:30, durability:36, speed:0, range:1, max_sockets:3, upgrade:"Tyrant Club", downgrade:"Spiked Club", subtype:"club"},
	Flanged_Mace:{group:"weapon", type:"mace", base_damage_min:15, base_damage_max:23, req_level:23, req_strength:61, durability:60, speed:0, range:0, max_sockets:2, upgrade:"Reinforced Mace", downgrade:"Mace", subtype:"mace"},
	Jagged_Star:{group:"weapon", type:"mace", base_damage_min:20, base_damage_max:31, req_level:25, req_strength:74, durability:72, speed:10, range:1, max_sockets:3, upgrade:"Devil Star", downgrade:"Morning Star", subtype:"mace"},
	Knout:{group:"weapon", type:"mace", base_damage_min:13, base_damage_max:35, req_level:25, req_strength:82, req_dexterity:73, durability:30, speed:-10, range:2, max_sockets:5, upgrade:"Scourge", downgrade:"Flail", subtype:"mace"},
	Battle_Hammer:{group:"weapon", type:"mace", base_damage_min:35, base_damage_max:58, req_level:25, req_strength:100, durability:55, speed:20, range:0, max_sockets:4, upgrade:"Legendary Mallet", downgrade:"War Hammer", subtype:"hammer"},
	War_Club:{group:"weapon", type:"mace", base_damage_min:53, base_damage_max:78, req_level:25, req_strength:124, durability:60, speed:10, range:1, max_sockets:6, upgrade:"Ogre Maul", downgrade:"Maul", twoHands:1, subtype:"hammer"},
	Martel_de_Fer:{group:"weapon", type:"mace", base_damage_min:61, base_damage_max:99, req_level:25, req_strength:169, durability:60, speed:20, range:2, max_sockets:6, upgrade:"Thunder Maul", downgrade:"Great Maul", twoHands:1, subtype:"hammer"},
	Truncheon:{group:"weapon", type:"mace", base_damage_min:35, base_damage_max:43, req_level:39, req_strength:88, req_dexterity:43, durability:55, speed:-10, range:0, max_sockets:2, downgrade:"Cudgel", subtype:"club"},
	Tyrant_Club:{group:"weapon", type:"mace", base_damage_min:32, base_damage_max:58, req_level:42, req_strength:133, durability:65, speed:0, range:1, max_sockets:3, downgrade:"Barbed Club", subtype:"club"},
	Reinforced_Mace:{group:"weapon", type:"mace", base_damage_min:41, base_damage_max:49, req_level:47, req_strength:145, req_dexterity:46, durability:60, speed:0, range:0, max_sockets:2, downgrade:"Flanged Mace", subtype:"mace"},
	Devil_Star:{group:"weapon", type:"mace", base_damage_min:43, base_damage_max:53, req_level:52, req_strength:153, req_dexterity:44, durability:72, speed:10, range:1, max_sockets:3, downgrade:"Jagged Star", subtype:"mace"},
	Scourge:{group:"weapon", type:"mace", base_damage_min:3, base_damage_max:80, req_level:57, req_strength:125, req_dexterity:77, durability:65, speed:-10, range:2, max_sockets:5, downgrade:"Knout", subtype:"mace"},
	Legendary_Mallet:{group:"weapon", type:"mace", base_damage_min:50, base_damage_max:61, req_level:61, req_strength:189, durability:65, speed:20, range:1, max_sockets:4, downgrade:"Battle Hammer", subtype:"hammer"},
	Ogre_Maul:{group:"weapon", type:"mace", base_damage_min:77, base_damage_max:106, req_level:51, req_strength:225, durability:60, speed:10, range:1, max_sockets:6, downgrade:"War Club", twoHands:1, subtype:"hammer"},
	Thunder_Maul:{group:"weapon", type:"mace", base_damage_min:33, base_damage_max:180, req_level:65, req_strength:253, durability:60, speed:20, range:2, max_sockets:6, downgrade:"Martel de Fer", twoHands:1, subtype:"hammer"},
	// sword
	Short_Sword:{group:"weapon", type:"sword", base_damage_min:2, base_damage_max:7, durability:24, speed:0, range:0, max_sockets:2, upgrade:"Gladius"},
	Scimitar:{group:"weapon", type:"sword", base_damage_min:2, base_damage_max:6, req_dexterity:21, durability:22, speed:-20, range:0, max_sockets:2, upgrade:"Cutlass"},
	Saber:{group:"weapon", type:"sword", base_damage_min:3, base_damage_max:8, req_strength:25, req_dexterity:25, durability:32, speed:-10, range:0, max_sockets:2, upgrade:"Shamshir"},
	Falchion:{group:"weapon", type:"sword", base_damage_min:9, base_damage_max:17, req_strength:33, durability:32, speed:20, range:0, max_sockets:2, upgrade:"Tulwar"},
	Crystal_Sword:{group:"weapon", type:"sword", base_damage_min:5, base_damage_max:15, req_strength:43, durability:20, speed:0, range:1, max_sockets:6, upgrade:"Dimensional Blade"},
	Broad_Sword:{group:"weapon", type:"sword", base_damage_min:7, base_damage_max:14, req_strength:48, durability:32, speed:0, range:0, max_sockets:4, upgrade:"Battle Sword"},
	Long_Sword:{group:"weapon", type:"sword", base_damage_min:3, base_damage_max:19, req_strength:55, req_dexterity:39, durability:44, speed:-10, range:1, max_sockets:4, upgrade:"Rune Sword"},
	War_Sword:{group:"weapon", type:"sword", base_damage_min:8, base_damage_max:20, req_strength:71, req_dexterity:45, durability:44, speed:0, range:1, max_sockets:3, upgrade:"Ancient Sword"},
	Two_handed_Sword:{group:"weapon", type:"sword", base_damage_min:8, base_damage_max:17, req_strength:35, req_dexterity:27, durability:44, speed:0, range:2, max_sockets:3, upgrade:"Espandon", twoHands:1, damageOneHand_min:2, damageOneHand_max:9},
	Claymore:{group:"weapon", type:"sword", base_damage_min:13, base_damage_max:30, req_strength:47, durability:50, speed:10, range:2, max_sockets:4, upgrade:"Dacian Falx", twoHands:1, damageOneHand_min:5, damageOneHand_max:12},
	Giant_Sword:{group:"weapon", type:"sword", base_damage_min:9, base_damage_max:28, req_strength:56, req_dexterity:34, durability:50, speed:0, range:2, max_sockets:4, upgrade:"Tusk Sword", twoHands:1, damageOneHand_min:3, damageOneHand_max:16},
	Bastard_Sword:{group:"weapon", type:"sword", base_damage_min:20, base_damage_max:28, req_strength:62, durability:40, speed:10, range:1, max_sockets:4, upgrade:"Gothic Sword", twoHands:1, damageOneHand_min:7, damageOneHand_max:19},
	Flamberge:{group:"weapon", type:"sword", base_damage_min:13, base_damage_max:26, req_strength:70, req_dexterity:49, durability:50, speed:-10, range:2, max_sockets:5, upgrade:"Zweihander", twoHands:1, damageOneHand_min:9, damageOneHand_max:15},
	Great_Sword:{group:"weapon", type:"sword", base_damage_min:25, base_damage_max:42, req_strength:100, req_dexterity:60, durability:50, speed:10, range:2, max_sockets:6, upgrade:"Executioner Sword", twoHands:1, damageOneHand_min:12, damageOneHand_max:20},
	Gladius:{group:"weapon", type:"sword", base_damage_min:8, base_damage_max:22, req_level:18, req_strength:25, durability:24, speed:0, range:0, max_sockets:2, upgrade:"Falcata", downgrade:"Short Sword"},
	Cutlass:{group:"weapon", type:"sword", base_damage_min:8, base_damage_max:21, req_level:25, req_strength:25, req_dexterity:52, durability:22, speed:-30, range:0, max_sockets:2, upgrade:"Ataghan", downgrade:"Scimitar"},
	Shamshir:{group:"weapon", type:"sword", base_damage_min:10, base_damage_max:24, req_level:23, req_strength:58, req_dexterity:58, durability:32, speed:-10, range:0, max_sockets:2, upgrade:"Elegant Blade", downgrade:"Saber"},
	Tulwar:{group:"weapon", type:"sword", base_damage_min:16, base_damage_max:35, req_level:25, req_strength:70, req_dexterity:42, durability:32, speed:20, range:0, max_sockets:2, upgrade:"Hydra Edge", downgrade:"Falchion"},
	Dimensional_Blade:{group:"weapon", type:"sword", base_damage_min:13, base_damage_max:35, req_level:25, req_strength:85, req_dexterity:60, durability:20, speed:0, range:1, max_sockets:6, upgrade:"Phase Blade", downgrade:"Crystal Sword"},
	Battle_Sword:{group:"weapon", type:"sword", base_damage_min:16, base_damage_max:34, req_level:25, req_strength:92, req_dexterity:43, durability:32, speed:0, range:0, max_sockets:4, upgrade:"Conquest Sword", downgrade:"Broad Sword"},
	Rune_Sword:{group:"weapon", type:"sword", base_damage_min:10, base_damage_max:42, req_level:25, req_strength:103, req_dexterity:79, durability:44, speed:-10, range:1, max_sockets:4, upgrade:"Cryptic Sword", downgrade:"Long Sword"},
	Ancient_Sword:{group:"weapon", type:"sword", base_damage_min:18, base_damage_max:43, req_level:25, req_strength:127, req_dexterity:88, durability:44, speed:0, range:1, max_sockets:3, upgrade:"Mythical Sword", downgrade:"War Sword"},
	Espandon:{group:"weapon", type:"sword", base_damage_min:18, base_damage_max:40, req_level:25, req_strength:73, req_dexterity:61, durability:44, speed:0, range:2, max_sockets:3, upgrade:"Legend Sword", downgrade:"Two-handed Sword", twoHands:1, damageOneHand_min:8, damageOneHand_max:26},
	Dacian_Falx:{group:"weapon", type:"sword", base_damage_min:26, base_damage_max:61, req_level:25, req_strength:91, req_dexterity:20, durability:50, speed:10, range:2, max_sockets:4, upgrade:"Highland Blade", downgrade:"Claymore", twoHands:1, damageOneHand_min:13, damageOneHand_max:30},
	Tusk_Sword:{group:"weapon", type:"sword", base_damage_min:19, base_damage_max:58, req_level:25, req_strength:104, req_dexterity:71, durability:50, speed:0, range:2, max_sockets:4, upgrade:"Balrog Blade", downgrade:"Giant Sword", twoHands:1, damageOneHand_min:10, damageOneHand_max:37},
	Gothic_Sword:{group:"weapon", type:"sword", base_damage_min:39, base_damage_max:60, req_level:25, req_strength:113, req_dexterity:20, durability:40, speed:10, range:1, max_sockets:4, upgrade:"Champion Sword", downgrade:"Bastard Sword", twoHands:1, damageOneHand_min:14, damageOneHand_max:40},
	Zweihander:{group:"weapon", type:"sword", base_damage_min:29, base_damage_max:54, req_level:25, req_strength:125, req_dexterity:94, durability:50, speed:-10, range:2, max_sockets:5, upgrade:"Colossus Sword", downgrade:"Flamberge", twoHands:1, damageOneHand_min:19, damageOneHand_max:35},
	Executioner_Sword:{group:"weapon", type:"sword", base_damage_min:47, base_damage_max:80, req_level:25, req_strength:170, req_dexterity:110, durability:50, speed:10, range:2, max_sockets:6, upgrade:"Colossus Blade", downgrade:"Great Sword", twoHands:1, damageOneHand_min:24, damageOneHand_max:40},
	Falcata:{group:"weapon", type:"sword", base_damage_min:31, base_damage_max:59, req_level:42, req_strength:150, req_dexterity:88, durability:24, speed:0, range:0, max_sockets:2, downgrade:"Gladius"},
	Ataghan:{group:"weapon", type:"sword", base_damage_min:26, base_damage_max:46, req_level:45, req_strength:138, req_dexterity:95, durability:22, speed:-20, range:0, max_sockets:2, downgrade:"Cutlass"},
	Elegant_Blade:{group:"weapon", type:"sword", base_damage_min:33, base_damage_max:45, req_level:47, req_strength:109, req_dexterity:122, durability:32, speed:-10, range:0, max_sockets:2, downgrade:"Shamshir"},
	Hydra_Edge:{group:"weapon", type:"sword", base_damage_min:28, base_damage_max:68, req_level:51, req_strength:142, req_dexterity:105, durability:32, speed:10, range:0, max_sockets:2, downgrade:"Tulwar"},
	Phase_Blade:{group:"weapon", type:"sword", base_damage_min:31, base_damage_max:35, req_level:54, req_strength:25, req_dexterity:136, durability:0, speed:-30, range:1, max_sockets:6, downgrade:"Dimensional Blade"},
	Conquest_Sword:{group:"weapon", type:"sword", base_damage_min:37, base_damage_max:53, req_level:58, req_strength:142, req_dexterity:112, durability:32, speed:0, range:0, max_sockets:4, downgrade:"Battle Sword"},
	Cryptic_Sword:{group:"weapon", type:"sword", base_damage_min:5, base_damage_max:77, req_level:61, req_strength:99, req_dexterity:109, durability:44, speed:-10, range:1, max_sockets:4, downgrade:"Rune Sword"},
	Mythical_Sword:{group:"weapon", type:"sword", base_damage_min:40, base_damage_max:50, req_level:66, req_strength:147, req_dexterity:124, durability:44, speed:0, range:1, max_sockets:3, downgrade:"Ancient Sword"},
	Legend_Sword:{group:"weapon", type:"sword", base_damage_min:50, base_damage_max:94, req_level:44, req_strength:175, req_dexterity:100, durability:44, speed:-15, range:2, max_sockets:3, downgrade:"Espandon", twoHands:1, damageOneHand_min:20, damageOneHand_max:56},
	Highland_Blade:{group:"weapon", type:"sword", base_damage_min:67, base_damage_max:96, req_level:49, req_strength:171, req_dexterity:104, durability:50, speed:-5, range:2, max_sockets:4, downgrade:"Dacian Falx", twoHands:1, damageOneHand_min:22, damageOneHand_max:62},
	Balrog_Blade:{group:"weapon", type:"sword", base_damage_min:55, base_damage_max:118, req_level:53, req_strength:185, req_dexterity:87, durability:50, speed:0, range:2, max_sockets:4, downgrade:"Tusk Sword", twoHands:1, damageOneHand_min:15, damageOneHand_max:75},
	Champion_Sword:{group:"weapon", type:"sword", base_damage_min:71, base_damage_max:83, req_level:57, req_strength:163, req_dexterity:103, durability:40, speed:-10, range:2, max_sockets:4, downgrade:"Gothic Sword", twoHands:1, damageOneHand_min:24, damageOneHand_max:54},
	Colossus_Sword:{group:"weapon", type:"sword", base_damage_min:61, base_damage_max:121, req_level:60, req_strength:182, req_dexterity:95, durability:50, speed:10, range:2, max_sockets:5, downgrade:"Zweihander", twoHands:1, damageOneHand_min:26, damageOneHand_max:70},
	Colossus_Blade:{group:"weapon", type:"sword", base_damage_min:58, base_damage_max:115, req_level:63, req_strength:189, req_dexterity:110, durability:50, speed:5, range:2, max_sockets:6, downgrade:"Executioner Sword", twoHands:1, damageOneHand_min:25, damageOneHand_max:65},
	// dagger
	Dagger:{group:"weapon", type:"dagger", base_damage_min:1, base_damage_max:4, durability:16, speed:-20, max_sockets:1, upgrade:"Poignard"},
	Dirk:{group:"weapon", type:"dagger", base_damage_min:3, base_damage_max:9, req_dexterity:25, durability:20, speed:0, max_sockets:1, upgrade:"Rondel"},
	Kriss:{group:"weapon", type:"dagger", base_damage_min:2, base_damage_max:11, req_dexterity:45, durability:24, speed:-20, max_sockets:3, upgrade:"Cinquedeas"},
	Blade:{group:"weapon", type:"dagger", base_damage_min:4, base_damage_max:15, req_strength:35, req_dexterity:51, durability:24, speed:-10, max_sockets:2, upgrade:"Stilleto"},
	Poignard:{group:"weapon", type:"dagger", base_damage_min:6, base_damage_max:8, req_level:19, req_strength:25, durability:16, speed:-20, max_sockets:1, upgrade:"Bone Knife", downgrade:"Dagger"},
	Rondel:{group:"weapon", type:"dagger", base_damage_min:10, base_damage_max:26, req_level:24, req_strength:25, req_dexterity:58, durability:20, speed:0, max_sockets:1, upgrade:"Mithral Point", downgrade:"Dirk"},
	Cinquedeas:{group:"weapon", type:"dagger", base_damage_min:6, base_damage_max:18, req_level:25, req_strength:25, req_dexterity:88, durability:24, speed:-20, max_sockets:3, upgrade:"Fanged Knife", downgrade:"Kriss"},
	Stilleto:{group:"weapon", type:"dagger", base_damage_min:19, base_damage_max:36, req_level:25, req_strength:47, req_dexterity:97, durability:24, speed:-10, max_sockets:2, upgrade:"Legend Spike", downgrade:"Blade"},
	Bone_Knife:{group:"weapon", type:"dagger", base_damage_min:23, base_damage_max:49, req_level:43, req_strength:38, req_dexterity:75, durability:26, speed:-20, max_sockets:1, downgrade:"Poignard"},
	Mithral_Point:{group:"weapon", type:"dagger", base_damage_min:37, base_damage_max:53, req_level:52, req_strength:55, req_dexterity:98, durability:55, speed:0, max_sockets:1, downgrade:"Rondel"},
	Fanged_Knife:{group:"weapon", type:"dagger", base_damage_min:15, base_damage_max:57, req_level:62, req_strength:42, req_dexterity:86, durability:36, speed:-20, max_sockets:3, downgrade:"Cinquedeas"},
	Legend_Spike:{group:"weapon", type:"dagger", base_damage_min:31, base_damage_max:47, req_level:66, req_strength:65, req_dexterity:67, durability:47, speed:-10, max_sockets:2, downgrade:"Stilleto"},
	// thrown
	Throwing_Knife:{group:"weapon", type:"thrown", base_damage_min:2, base_damage_max:3, req_dexterity:21, durability:4, speed:0, upgrade:"Battle Dart", subtype:"dagger", throw_min:4, throw_max:9},
	Throwing_Axe:{group:"weapon", type:"thrown", base_damage_min:4, base_damage_max:7, req_dexterity:40, durability:6, speed:10, upgrade:"Francisca", subtype:"axe", throw_min:8, throw_max:12},
	Balanced_Knife:{group:"weapon", type:"thrown", base_damage_min:1, base_damage_max:8, req_dexterity:51, durability:8, speed:-20, upgrade:"War Dart", subtype:"dagger", throw_min:6, throw_max:11},
	Balanced_Axe:{group:"weapon", type:"thrown", base_damage_min:5, base_damage_max:10, req_dexterity:57, durability:10, speed:-10, upgrade:"Hurlbat", subtype:"axe", throw_min:12, throw_max:15},
	Battle_Dart:{group:"weapon", type:"thrown", base_damage_min:8, base_damage_max:16, req_level:19, req_strength:25, req_dexterity:52, durability:6, speed:0, upgrade:"Flying Knife", downgrade:"Throwing Knife", subtype:"dagger", throw_min:11, throw_max:24},
	Francisca:{group:"weapon", type:"thrown", base_damage_min:11, base_damage_max:22, req_level:22, req_strength:25, req_dexterity:80, durability:15, speed:10, upgrade:"Flying Axe", downgrade:"Throwing Axe", subtype:"axe", throw_min:18, throw_max:33},
	War_Dart:{group:"weapon", type:"thrown", base_damage_min:6, base_damage_max:24, req_level:25, req_strength:25, req_dexterity:97, durability:20, speed:-20, upgrade:"Winged Knife", downgrade:"Balanced Knife", subtype:"dagger", throw_min:14, throw_max:27},
	Hurlbat:{group:"weapon", type:"thrown", base_damage_min:13, base_damage_max:27, req_level:25, req_strength:25, req_dexterity:106, durability:16, speed:-10, upgrade:"Winged Axe", downgrade:"Balanced Axe", subtype:"axe", throw_min:24, throw_max:34},
	Flying_Knife:{group:"weapon", type:"thrown", base_damage_min:23, base_damage_max:54, req_level:48, req_strength:48, req_dexterity:141, durability:6, speed:0, downgrade:"Battle Dart", subtype:"dagger", throw_min:23, throw_max:54},
	Flying_Axe:{group:"weapon", type:"thrown", base_damage_min:17, base_damage_max:65, req_level:42, req_strength:88, req_dexterity:108, durability:15, speed:10, downgrade:"Francisca", subtype:"axe", throw_min:15, throw_max:66},
	Winged_Knife:{group:"weapon", type:"thrown", base_damage_min:27, base_damage_max:35, req_level:57, req_strength:45, req_dexterity:142, durability:20, speed:-20, downgrade:"War Dart", subtype:"dagger", throw_min:23, throw_max:39},
	Winged_Axe:{group:"weapon", type:"thrown", base_damage_min:11, base_damage_max:56, req_level:60, req_strength:96, req_dexterity:122, durability:16, speed:-10, downgrade:"Hurlbat", subtype:"axe", throw_min:7, throw_max:60},
	// javelin
	Javelin:{group:"weapon", type:"javelin", base_damage_min:1, base_damage_max:5, durability:2, speed:-10, range:2, upgrade:"War Javelin"},
	Pilum:{group:"weapon", type:"javelin", base_damage_min:4, base_damage_max:9, req_dexterity:45, durability:3, speed:0, range:2, upgrade:"Great Pilum"},
	Short_Spear:{group:"weapon", type:"javelin", base_damage_min:2, base_damage_max:13, req_strength:40, req_dexterity:40, durability:4, speed:10, range:2, upgrade:"Simbilan"},
	Glaive:{group:"weapon", type:"javelin", base_damage_min:5, base_damage_max:17, req_strength:52, req_dexterity:35, durability:5, speed:20, range:2, upgrade:"Spiculum"},
	Throwing_Spear:{group:"weapon", type:"javelin", base_damage_min:5, base_damage_max:15, req_dexterity:65, durability:6, speed:-10, range:2, upgrade:"Harpoon"},
	War_Javelin:{group:"weapon", type:"javelin", base_damage_min:6, base_damage_max:19, req_level:18, req_strength:25, req_dexterity:25, durability:10, speed:-10, range:2, upgrade:"Hyperion Javelin", downgrade:"Javelin"},
	Great_Pilum:{group:"weapon", type:"javelin", base_damage_min:11, base_damage_max:26, req_level:25, req_strength:25, req_dexterity:88, durability:12, speed:0, range:2, upgrade:"Stygian Pilum", downgrade:"Pilum"},
	Simbilan:{group:"weapon", type:"javelin", base_damage_min:8, base_damage_max:32, req_level:25, req_strength:80, req_dexterity:80, durability:14, speed:10, range:2, upgrade:"Balrog Spear", downgrade:"Short Spear"},
	Spiculum:{group:"weapon", type:"javelin", base_damage_min:13, base_damage_max:38, req_level:25, req_strength:98, req_dexterity:73, durability:16, speed:20, range:2, upgrade:"Ghost Glaive", downgrade:"Glaive"},
	Harpoon:{group:"weapon", type:"javelin", base_damage_min:13, base_damage_max:35, req_level:25, req_strength:25, req_dexterity:118, durability:18, speed:-10, range:2, upgrade:"Winged Harpoon", downgrade:"Throwing Spear"},
	Hyperion_Javelin:{group:"weapon", type:"javelin", base_damage_min:21, base_damage_max:57, req_level:40, req_strength:98, req_dexterity:123, durability:10, speed:-10, range:2, downgrade:"War Javelin"},
	Stygian_Pilum:{group:"weapon", type:"javelin", base_damage_min:14, base_damage_max:64, req_level:46, req_strength:118, req_dexterity:112, durability:12, speed:0, range:2, downgrade:"Great Pilum"},
	Balrog_Spear:{group:"weapon", type:"javelin", base_damage_min:33, base_damage_max:63, req_level:53, req_strength:127, req_dexterity:95, durability:14, speed:10, range:2, downgrade:"Simbilan"},
	Ghost_Glaive:{group:"weapon", type:"javelin", base_damage_min:19, base_damage_max:60, req_level:59, req_strength:89, req_dexterity:137, durability:16, speed:20, range:2, downgrade:"Spiculum"},
	Winged_Harpoon:{group:"weapon", type:"javelin", base_damage_min:27, base_damage_max:35, req_level:65, req_strength:76, req_dexterity:145, durability:18, speed:-10, range:2, downgrade:"Harpoon"},
	// spear
	Spear:{group:"weapon", type:"spear", base_damage_min:3, base_damage_max:15, req_dexterity:20, durability:30, speed:-10, range:3, max_sockets:3, upgrade:"War Spear", twoHands:1},
	Trident:{group:"weapon", type:"spear", base_damage_min:9, base_damage_max:15, req_strength:38, req_dexterity:24, durability:35, speed:0, range:3, max_sockets:4, upgrade:"Fuscina", twoHands:1},
	Brandistock:{group:"weapon", type:"spear", base_damage_min:7, base_damage_max:17, req_strength:40, req_dexterity:50, durability:28, speed:-20, range:4, max_sockets:5, upgrade:"War Fork", twoHands:1},
	Spetum:{group:"weapon", type:"spear", base_damage_min:15, base_damage_max:23, req_strength:54, req_dexterity:35, durability:28, speed:0, range:4, max_sockets:6, upgrade:"Yari", twoHands:1},
	Pike:{group:"weapon", type:"spear", base_damage_min:14, base_damage_max:63, req_strength:60, req_dexterity:45, durability:25, speed:20, range:4, max_sockets:6, upgrade:"Lance", twoHands:1},
	War_Spear:{group:"weapon", type:"spear", base_damage_min:10, base_damage_max:37, req_level:21, req_strength:25, req_dexterity:25, durability:30, speed:-10, range:3, max_sockets:3, upgrade:"Hyperion Spear", downgrade:"Spear", twoHands:1},
	Fuscina:{group:"weapon", type:"spear", base_damage_min:19, base_damage_max:37, req_level:24, req_strength:77, req_dexterity:25, durability:35, speed:0, range:3, max_sockets:4, upgrade:"Stygian Pike", downgrade:"Trident", twoHands:1},
	War_Fork:{group:"weapon", type:"spear", base_damage_min:16, base_damage_max:40, req_level:25, req_strength:80, req_dexterity:95, durability:28, speed:-20, range:4, max_sockets:5, upgrade:"Mancatcher", downgrade:"Brandistock", twoHands:1},
	Yari:{group:"weapon", type:"spear", base_damage_min:29, base_damage_max:59, req_level:25, req_strength:101, durability:28, speed:0, range:4, max_sockets:6, upgrade:"Ghost Spear", downgrade:"Spetum", twoHands:1},
	Lance:{group:"weapon", type:"spear", base_damage_min:27, base_damage_max:114, req_level:25, req_strength:110, req_dexterity:88, durability:25, speed:20, range:4, max_sockets:6, upgrade:"War Pike", downgrade:"Pike", twoHands:1},
	Hyperion_Spear:{group:"weapon", type:"spear", base_damage_min:35, base_damage_max:119, req_level:43, req_strength:155, req_dexterity:120, durability:30, speed:-10, range:3, max_sockets:3, downgrade:"War Spear", twoHands:1},
	Stygian_Pike:{group:"weapon", type:"spear", base_damage_min:29, base_damage_max:144, req_level:49, req_strength:168, req_dexterity:97, durability:35, speed:0, range:3, max_sockets:4, downgrade:"Fuscina", twoHands:1},
	Mancatcher:{group:"weapon", type:"spear", base_damage_min:42, base_damage_max:92, req_level:55, req_strength:132, req_dexterity:134, durability:28, speed:-20, range:4, max_sockets:5, downgrade:"War Fork", twoHands:1},
	Ghost_Spear:{group:"weapon", type:"spear", base_damage_min:18, base_damage_max:155, req_level:62, req_strength:122, req_dexterity:163, durability:28, speed:0, range:4, max_sockets:6, downgrade:"Yari", twoHands:1},
	War_Pike:{group:"weapon", type:"spear", base_damage_min:33, base_damage_max:178, req_level:66, req_strength:165, req_dexterity:106, durability:25, speed:20, range:4, max_sockets:6, downgrade:"Lance", twoHands:1},
	// polearm
	Bardiche:{group:"weapon", type:"polearm", base_damage_min:1, base_damage_max:27, req_strength:40, durability:50, speed:10, range:2, max_sockets:3, upgrade:"Lochaber Axe", twoHands:1},
	Voulge:{group:"weapon", type:"polearm", base_damage_min:6, base_damage_max:21, req_strength:50, durability:50, speed:0, range:2, max_sockets:4, upgrade:"Bill", twoHands:1},
	Scythe:{group:"weapon", type:"polearm", base_damage_min:8, base_damage_max:20, req_strength:41, req_dexterity:41, durability:65, speed:-10, range:1, max_sockets:5, upgrade:"Battle Scythe", twoHands:1},
	Poleaxe:{group:"weapon", type:"polearm", base_damage_min:18, base_damage_max:39, req_strength:62, durability:65, speed:10, range:3, max_sockets:5, upgrade:"Partizan", twoHands:1},
	Halberd:{group:"weapon", type:"polearm", base_damage_min:12, base_damage_max:45, req_strength:75, req_dexterity:47, durability:55, speed:0, range:4, max_sockets:6, upgrade:"Bec-de-Corbin", twoHands:1},
	War_Scythe:{group:"weapon", type:"polearm", base_damage_min:15, base_damage_max:36, req_strength:80, req_dexterity:80, durability:55, speed:-10, range:4, max_sockets:6, upgrade:"Grim Scythe", twoHands:1},
	Lochaber_Axe:{group:"weapon", type:"polearm", base_damage_min:6, base_damage_max:58, req_level:21, req_strength:80, durability:50, speed:10, range:2, max_sockets:3, upgrade:"Ogre Axe", downgrade:"Bardiche", twoHands:1},
	Bill:{group:"weapon", type:"polearm", base_damage_min:14, base_damage_max:53, req_level:25, req_strength:95, durability:50, speed:0, range:2, max_sockets:4, upgrade:"Colossus Voulge", downgrade:"Voulge", twoHands:1},
	Battle_Scythe:{group:"weapon", type:"polearm", base_damage_min:18, base_damage_max:45, req_level:25, req_strength:82, req_dexterity:82, durability:65, speed:-10, range:1, max_sockets:5, upgrade:"Thresher", downgrade:"Scythe", twoHands:1},
	Partizan:{group:"weapon", type:"polearm", base_damage_min:34, base_damage_max:75, req_level:23, req_strength:113, req_dexterity:67, durability:65, speed:10, range:3, max_sockets:5, upgrade:"Cryptic Axe", downgrade:"Poleaxe", twoHands:1},
	Bec_de_Corbin:{group:"weapon", type:"polearm", base_damage_min:13, base_damage_max:85, req_level:25, req_strength:133, req_dexterity:91, durability:55, speed:0, range:4, max_sockets:6, upgrade:"Great Poleaxe", downgrade:"Halberd", twoHands:1},
	Grim_Scythe:{group:"weapon", type:"polearm", base_damage_min:30, base_damage_max:70, req_level:25, req_strength:140, req_dexterity:140, durability:55, speed:-10, range:4, max_sockets:6, upgrade:"Giant Thresher", downgrade:"War Scythe", twoHands:1},
	Ogre_Axe:{group:"weapon", type:"polearm", base_damage_min:28, base_damage_max:145, req_level:45, req_strength:195, req_dexterity:75, durability:50, speed:0, range:2, max_sockets:3, downgrade:"Lochaber Axe", twoHands:1},
	Colossus_Voulge:{group:"weapon", type:"polearm", base_damage_min:17, base_damage_max:165, req_level:48, req_strength:210, req_dexterity:55, durability:50, speed:10, range:2, max_sockets:4, downgrade:"Bill", twoHands:1},
	Thresher:{group:"weapon", type:"polearm", base_damage_min:12, base_damage_max:141, req_level:53, req_strength:152, req_dexterity:118, durability:65, speed:-10, range:1, max_sockets:5, downgrade:"Battle Scythe", twoHands:1},
	Cryptic_Axe:{group:"weapon", type:"polearm", base_damage_min:33, base_damage_max:150, req_level:59, req_strength:165, req_dexterity:103, durability:65, speed:10, range:3, max_sockets:5, downgrade:"Partizan", twoHands:1},
	Great_Poleaxe:{group:"weapon", type:"polearm", base_damage_min:46, base_damage_max:127, req_level:63, req_strength:179, req_dexterity:99, durability:55, speed:0, range:4, max_sockets:6, downgrade:"Bec-de-Corbin", twoHands:1},
	Giant_Thresher:{group:"weapon", type:"polearm", base_damage_min:40, base_damage_max:114, req_level:66, req_strength:188, req_dexterity:140, durability:55, speed:-10, range:4, max_sockets:6, downgrade:"Grim Scythe", twoHands:1},
	// bow
	Short_Bow:{group:"weapon", type:"bow", base_damage_min:1, base_damage_max:4, req_dexterity:15, speed:5, max_sockets:3, upgrade:"Edge Bow", twoHands:1},
	Hunters_Bow:{group:"weapon", type:"bow", base_damage_min:2, base_damage_max:6, req_dexterity:28, speed:-10, max_sockets:4, upgrade:"Razor Bow", twoHands:1},
	Long_Bow:{group:"weapon", type:"bow", base_damage_min:3, base_damage_max:10, req_strength:22, req_dexterity:19, speed:0, max_sockets:5, upgrade:"Cedar Bow", twoHands:1},
	Composite_Bow:{group:"weapon", type:"bow", base_damage_min:4, base_damage_max:8, req_strength:25, req_dexterity:35, speed:-10, max_sockets:4, upgrade:"Double Bow", twoHands:1},
	Short_Battle_Bow:{group:"weapon", type:"bow", base_damage_min:5, base_damage_max:11, req_strength:30, req_dexterity:40, speed:0, max_sockets:5, upgrade:"Short Siege Bow", twoHands:1},
	Long_Battle_Bow:{group:"weapon", type:"bow", base_damage_min:3, base_damage_max:18, req_strength:40, req_dexterity:50, speed:10, max_sockets:6, upgrade:"Long Siege Bow", twoHands:1},
	Short_War_Bow:{group:"weapon", type:"bow", base_damage_min:6, base_damage_max:14, req_strength:35, req_dexterity:55, speed:0, max_sockets:5, upgrade:"Rune Bow", twoHands:1},
	Long_War_Bow:{group:"weapon", type:"bow", base_damage_min:3, base_damage_max:23, req_strength:50, req_dexterity:65, speed:10, max_sockets:6, upgrade:"Gothic Bow", twoHands:1},
	Edge_Bow:{group:"weapon", type:"bow", base_damage_min:6, base_damage_max:19, req_level:18, req_strength:25, req_dexterity:43, speed:5, max_sockets:3, upgrade:"Spider Bow", downgrade:"Short Bow", twoHands:1},
	Razor_Bow:{group:"weapon", type:"bow", base_damage_min:8, base_damage_max:22, req_level:21, req_strength:25, req_dexterity:62, speed:-10, max_sockets:4, upgrade:"Blade Bow", downgrade:"Hunter's Bow", twoHands:1},
	Cedar_Bow:{group:"weapon", type:"bow", base_damage_min:10, base_damage_max:29, req_level:23, req_strength:53, req_dexterity:49, speed:0, max_sockets:5, upgrade:"Shadow Bow", downgrade:"Long Bow", twoHands:1},
	Double_Bow:{group:"weapon", type:"bow", base_damage_min:11, base_damage_max:26, req_level:25, req_strength:58, req_dexterity:73, speed:-10, max_sockets:4, upgrade:"Great Bow", downgrade:"Composite Bow", twoHands:1},
	Short_Siege_Bow:{group:"weapon", type:"bow", base_damage_min:13, base_damage_max:30, req_level:25, req_strength:65, req_dexterity:80, speed:0, max_sockets:5, upgrade:"Diamond Bow", downgrade:"Short Battle Bow", twoHands:1},
	Long_Siege_Bow:{group:"weapon", type:"bow", base_damage_min:10, base_damage_max:42, req_level:25, req_strength:80, req_dexterity:95, speed:10, max_sockets:6, upgrade:"Crusader Bow", downgrade:"Long Battle Bow", twoHands:1},
	Rune_Bow:{group:"weapon", type:"bow", base_damage_min:14, base_damage_max:35, req_level:25, req_strength:73, req_dexterity:103, speed:0, max_sockets:5, upgrade:"Ward Bow", downgrade:"Short War Bow", twoHands:1},
	Gothic_Bow:{group:"weapon", type:"bow", base_damage_min:10, base_damage_max:50, req_level:25, req_strength:95, req_dexterity:118, speed:10, max_sockets:6, upgrade:"Hydra Bow", downgrade:"Long War Bow", twoHands:1},
	Spider_Bow:{group:"weapon", type:"bow", base_damage_min:23, base_damage_max:50, req_level:41, req_strength:64, req_dexterity:143, speed:5, max_sockets:3, downgrade:"Edge Bow", twoHands:1},
	Blade_Bow:{group:"weapon", type:"bow", base_damage_min:21, base_damage_max:41, req_level:45, req_strength:76, req_dexterity:119, speed:-10, max_sockets:4, downgrade:"Razor Bow", twoHands:1},
	Shadow_Bow:{group:"weapon", type:"bow", base_damage_min:15, base_damage_max:59, req_level:47, req_strength:52, req_dexterity:188, speed:0, max_sockets:5, downgrade:"Cedar Bow", twoHands:1},
	Great_Bow:{group:"weapon", type:"bow", base_damage_min:12, base_damage_max:52, req_level:51, req_strength:121, req_dexterity:107, speed:-10, max_sockets:4, downgrade:"Double Bow", twoHands:1},
	Diamond_Bow:{group:"weapon", type:"bow", base_damage_min:33, base_damage_max:40, req_level:54, req_strength:89, req_dexterity:132, speed:0, max_sockets:5, downgrade:"Short Siege Bow", twoHands:1},
	Crusader_Bow:{group:"weapon", type:"bow", base_damage_min:15, base_damage_max:63, req_level:57, req_strength:97, req_dexterity:121, speed:10, max_sockets:6, downgrade:"Long Siege Bow", twoHands:1},
	Ward_Bow:{group:"weapon", type:"bow", base_damage_min:20, base_damage_max:53, req_level:60, req_strength:72, req_dexterity:146, speed:0, max_sockets:5, downgrade:"Rune Bow", twoHands:1},
	Hydra_Bow:{group:"weapon", type:"bow", base_damage_min:10, base_damage_max:68, req_level:63, req_strength:134, req_dexterity:167, speed:10, max_sockets:6, downgrade:"Gothic Bow", twoHands:1},
	// crossbow
	Light_Crossbow:{group:"weapon", type:"crossbow", base_damage_min:6, base_damage_max:9, req_strength:21, req_dexterity:27, speed:-10, max_sockets:3, upgrade:"Arbalest", twoHands:1},
	Crossbow:{group:"weapon", type:"crossbow", base_damage_min:9, base_damage_max:16, req_strength:40, req_dexterity:33, speed:0, max_sockets:4, upgrade:"Siege Crossbow", twoHands:1},
	Heavy_Crossbow:{group:"weapon", type:"crossbow", base_damage_min:14, base_damage_max:26, req_strength:60, req_dexterity:40, speed:10, max_sockets:6, upgrade:"Ballista", twoHands:1},
	Repeating_Crossbow:{group:"weapon", type:"crossbow", base_damage_min:6, base_damage_max:12, req_strength:40, req_dexterity:50, speed:-40, max_sockets:5, upgrade:"Chu-Ko-Nu", twoHands:1},
	Arbalest:{group:"weapon", type:"crossbow", base_damage_min:14, base_damage_max:27, req_level:22, req_strength:52, req_dexterity:61, speed:-10, max_sockets:3, upgrade:"Pellet Bow", downgrade:"Light Crossbow", twoHands:1},
	Siege_Crossbow:{group:"weapon", type:"crossbow", base_damage_min:20, base_damage_max:42, req_level:25, req_strength:80, req_dexterity:70, speed:0, max_sockets:4, upgrade:"Gorgon Crossbow", downgrade:"Crossbow", twoHands:1},
	Ballista:{group:"weapon", type:"crossbow", base_damage_min:35, base_damage_max:55, req_level:25, req_strength:110, req_dexterity:80, speed:10, max_sockets:6, upgrade:"Colossus Crossbow", downgrade:"Heavy Crossbow", twoHands:1},
	Chu_Ko_Nu:{group:"weapon", type:"crossbow", base_damage_min:14, base_damage_max:32, req_level:25, req_strength:80, req_dexterity:95, speed:-60, max_sockets:5, upgrade:"Demon Crossbow", downgrade:"Repeating Crossbow", twoHands:1},
	Pellet_Bow:{group:"weapon", type:"crossbow", base_damage_min:28, base_damage_max:73, req_level:42, req_strength:83, req_dexterity:155, speed:-10, max_sockets:3, downgrade:"Arbalest", twoHands:1},
	Gorgon_Crossbow:{group:"weapon", type:"crossbow", base_damage_min:25, base_damage_max:87, req_level:50, req_strength:117, req_dexterity:105, speed:0, max_sockets:4, downgrade:"Siege Crossbow", twoHands:1},
	Colossus_Crossbow:{group:"weapon", type:"crossbow", base_damage_min:32, base_damage_max:91, req_level:56, req_strength:163, req_dexterity:77, speed:10, max_sockets:6, downgrade:"Ballista", twoHands:1},
	Demon_Crossbow:{group:"weapon", type:"crossbow", base_damage_min:26, base_damage_max:40, req_level:63, req_strength:141, req_dexterity:98, speed:-60, max_sockets:5, downgrade:"Chu-Ko-Nu", twoHands:1},
	// staff
	Short_Staff:{group:"weapon", type:"staff", base_damage_min:1, base_damage_max:5, durability:20, speed:-10, range:1, max_sockets:2, upgrade:"Jo Staff", twoHands:1},
	Long_Staff:{group:"weapon", type:"staff", base_damage_min:2, base_damage_max:8, durability:30, speed:0, range:1, max_sockets:3, upgrade:"Quarterstaff", twoHands:1},
	Gnarled_Staff:{group:"weapon", type:"staff", base_damage_min:4, base_damage_max:12, durability:35, speed:10, range:1, max_sockets:4, upgrade:"Cedar Staff", twoHands:1},
	Battle_Staff:{group:"weapon", type:"staff", base_damage_min:6, base_damage_max:13, durability:40, speed:0, range:1, max_sockets:4, upgrade:"Gothic Staff", twoHands:1},
	War_Staff:{group:"weapon", type:"staff", base_damage_min:12, base_damage_max:28, durability:50, speed:20, range:1, max_sockets:6, upgrade:"Rune Staff", twoHands:1},
	Jo_Staff:{group:"weapon", type:"staff", base_damage_min:6, base_damage_max:21, req_level:18, req_strength:25, durability:20, speed:-10, range:1, max_sockets:2, upgrade:"Walking Stick", downgrade:"Short Staff", twoHands:1},
	Quarterstaff:{group:"weapon", type:"staff", base_damage_min:8, base_damage_max:26, req_level:23, req_strength:25, durability:30, speed:0, range:1, max_sockets:3, upgrade:"Stalagmite", downgrade:"Long Staff", twoHands:1},
	Cedar_Staff:{group:"weapon", type:"staff", base_damage_min:11, base_damage_max:32, req_level:25, req_strength:25, durability:35, speed:10, range:1, max_sockets:4, upgrade:"Elder Staff", downgrade:"Gnarled Staff", twoHands:1},
	Gothic_Staff:{group:"weapon", type:"staff", base_damage_min:14, base_damage_max:34, req_level:25, req_strength:25, durability:40, speed:0, range:1, max_sockets:4, upgrade:"Shillelagh", downgrade:"Battle Staff", twoHands:1},
	Rune_Staff:{group:"weapon", type:"staff", base_damage_min:24, base_damage_max:58, req_level:25, req_strength:25, durability:50, speed:20, range:1, max_sockets:6, upgrade:"Archon Staff", downgrade:"War Staff", twoHands:1},
	Walking_Stick:{group:"weapon", type:"staff", base_damage_min:69, base_damage_max:85, req_level:43, req_strength:25, durability:20, speed:-10, range:1, max_sockets:2, downgrade:"Jo Staff", twoHands:1},
	Stalagmite:{group:"weapon", type:"staff", base_damage_min:75, base_damage_max:107, req_level:49, req_strength:63, req_dexterity:35, durability:30, speed:10, range:1, max_sockets:3, downgrade:"Quarterstaff", twoHands:1},
	Elder_Staff:{group:"weapon", type:"staff", base_damage_min:80, base_damage_max:93, req_level:55, req_strength:44, req_dexterity:37, durability:35, speed:0, range:1, max_sockets:4, downgrade:"Cedar Staff", twoHands:1},
	Shillelagh:{group:"weapon", type:"staff", base_damage_min:65, base_damage_max:108, req_level:62, req_strength:52, req_dexterity:27, durability:40, speed:0, range:1, max_sockets:4, downgrade:"Gothic Staff", twoHands:1},
	Archon_Staff:{group:"weapon", type:"staff", base_damage_min:83, base_damage_max:99, req_level:66, req_strength:34, durability:26, speed:10, range:1, max_sockets:6, downgrade:"Rune Staff", twoHands:1},
	// wand
	Wand:{group:"weapon", type:"wand", base_damage_min:2, base_damage_max:4, durability:15, speed:0, range:0, max_sockets:1, upgrade:"Burnt Wand"},
	Yew_Wand:{group:"weapon", type:"wand", base_damage_min:2, base_damage_max:8, durability:15, speed:10, range:0, max_sockets:1, upgrade:"Petrified Wand"},
	Bone_Wand:{group:"weapon", type:"wand", base_damage_min:3, base_damage_max:7, durability:15, speed:-20, range:0, max_sockets:2, upgrade:"Tomb Wand"},
	Grim_Wand:{group:"weapon", type:"wand", base_damage_min:5, base_damage_max:11, durability:15, speed:0, range:0, max_sockets:2, upgrade:"Grave Wand"},
	Burnt_Wand:{group:"weapon", type:"wand", base_damage_min:8, base_damage_max:18, req_level:19, req_strength:25, durability:15, speed:0, range:0, max_sockets:1, upgrade:"Polished Wand", downgrade:"Wand"},
	Petrified_Wand:{group:"weapon", type:"wand", base_damage_min:8, base_damage_max:24, req_level:25, req_strength:25, durability:15, speed:10, range:0, max_sockets:2, upgrade:"Ghost Wand", downgrade:"Yew Wand"},
	Tomb_Wand:{group:"weapon", type:"wand", base_damage_min:10, base_damage_max:22, req_level:25, req_strength:25, durability:15, speed:-20, range:0, max_sockets:2, upgrade:"Lich Wand", downgrade:"Bone Wand"},
	Grave_Wand:{group:"weapon", type:"wand", base_damage_min:13, base_damage_max:29, req_level:25, req_strength:25, durability:15, speed:0, range:0, max_sockets:2, upgrade:"Unearthed Wand", downgrade:"Grim Wand"},
	Polished_Wand:{group:"weapon", type:"wand", base_damage_min:18, base_damage_max:33, req_level:41, req_strength:25, durability:22, speed:0, range:0, max_sockets:2, downgrade:"Burnt Wand"},
	Ghost_Wand:{group:"weapon", type:"wand", base_damage_min:20, base_damage_max:42, req_level:48, req_strength:25, durability:14, speed:10, range:0, max_sockets:2, downgrade:"Petrified Wand"},
	Lich_Wand:{group:"weapon", type:"wand", base_damage_min:10, base_damage_max:31, req_level:56, req_strength:25, durability:17, speed:-20, range:0, max_sockets:2, downgrade:"Tomb Wand"},
	Unearthed_Wand:{group:"weapon", type:"wand", base_damage_min:22, base_damage_max:28, req_level:64, req_strength:25, durability:18, speed:0, range:0, max_sockets:2, downgrade:"Grave Wand"},
	// scepter
	Scepter:{group:"weapon", type:"scepter", base_damage_min:6, base_damage_max:11, req_strength:25, durability:50, speed:0, range:0, max_sockets:2, upgrade:"Rune Scepter"},
	Grand_Scepter:{group:"weapon", type:"scepter", base_damage_min:8, base_damage_max:18, req_strength:37, durability:60, speed:10, range:1, max_sockets:3, upgrade:"Holy Water Sprinkler"},
	War_Scepter:{group:"weapon", type:"scepter", base_damage_min:10, base_damage_max:17, req_strength:55, durability:70, speed:-10, range:1, max_sockets:5, upgrade:"Divine Scepter"},
	Rune_Scepter:{group:"weapon", type:"scepter", base_damage_min:13, base_damage_max:24, req_level:19, req_strength:58, durability:50, speed:0, range:0, max_sockets:2, upgrade:"Mighty Scepter", downgrade:"Scepter"},
	Holy_Water_Sprinkler:{group:"weapon", type:"scepter", base_damage_min:14, base_damage_max:36, req_level:25, req_strength:76, durability:60, speed:10, range:1, max_sockets:3, upgrade:"Seraph Rod", downgrade:"Grand Scepter"},
	Divine_Scepter:{group:"weapon", type:"scepter", base_damage_min:16, base_damage_max:38, req_level:25, req_strength:103, durability:70, speed:-10, range:1, max_sockets:5, upgrade:"Caduceus", downgrade:"War Scepter"},
	Mighty_Scepter:{group:"weapon", type:"scepter", base_damage_min:40, base_damage_max:52, req_level:46, req_strength:125, req_dexterity:65, durability:50, speed:0, range:0, max_sockets:2, downgrade:"Rune Scepter"},
	Seraph_Rod:{group:"weapon", type:"scepter", base_damage_min:45, base_damage_max:54, req_level:57, req_strength:108, req_dexterity:69, durability:60, speed:10, range:1, max_sockets:3, downgrade:"Holy Water Sprinkler"},
	Caduceus:{group:"weapon", type:"scepter", base_damage_min:37, base_damage_max:43, req_level:66, req_strength:97, req_dexterity:70, durability:70, speed:-10, range:1, max_sockets:5, downgrade:"Divine Scepter"},
	// claw
	Katar:{group:"weapon", type:"claw", base_damage_min:4, base_damage_max:7, req_strength:20, req_dexterity:20, durability:48, speed:-10, range:1, max_sockets:2, upgrade:"Quhab", only:"assassin"},
	Wrist_Blade:{group:"weapon", type:"claw", base_damage_min:5, base_damage_max:9, req_strength:33, req_dexterity:33, durability:52, speed:0, range:1, max_sockets:2, upgrade:"Wrist Spike", only:"assassin"},
	Hatchet_Hands:{group:"weapon", type:"claw", base_damage_min:2, base_damage_max:15, req_strength:37, req_dexterity:37, durability:56, speed:10, range:1, max_sockets:2, upgrade:"Fascia", only:"assassin"},
	Cestus:{group:"weapon", type:"claw", base_damage_min:7, base_damage_max:15, req_strength:42, req_dexterity:42, durability:72, speed:0, range:1, max_sockets:2, upgrade:"Hand Scythe", only:"assassin"},
	Claws:{group:"weapon", type:"claw", base_damage_min:8, base_damage_max:15, req_strength:46, req_dexterity:46, durability:64, speed:-10, range:1, max_sockets:3, upgrade:"Greater Claws", only:"assassin"},
	Blade_Talons:{group:"weapon", type:"claw", base_damage_min:10, base_damage_max:14, req_strength:50, req_dexterity:50, durability:69, speed:-20, range:1, max_sockets:3, upgrade:"Greater Talons", only:"assassin"},
	Scissors_Katar:{group:"weapon", type:"claw", base_damage_min:9, base_damage_max:17, req_strength:55, req_dexterity:55, durability:68, speed:-10, range:1, max_sockets:3, upgrade:"Scissors Quhab", only:"assassin"},
	Quhab:{group:"weapon", type:"claw", base_damage_min:11, base_damage_max:24, req_level:21, req_strength:57, req_dexterity:57, durability:48, speed:0, range:1, max_sockets:3, upgrade:"Suwayyah", downgrade:"Katar", only:"assassin"},
	Wrist_Spike:{group:"weapon", type:"claw", base_damage_min:13, base_damage_max:27, req_level:24, req_strength:66, req_dexterity:66, durability:56, speed:-10, range:1, max_sockets:2, upgrade:"Wrist Sword", downgrade:"Wrist Blade", only:"assassin"},
	Fascia:{group:"weapon", type:"claw", base_damage_min:8, base_damage_max:37, req_level:27, req_strength:69, req_dexterity:69, durability:64, speed:10, range:1, max_sockets:2, upgrade:"War Fist", downgrade:"Hatchet Hands", only:"assassin"},
	Hand_Scythe:{group:"weapon", type:"claw", base_damage_min:16, base_damage_max:37, req_level:30, req_strength:73, req_dexterity:73, durability:72, speed:-10, range:1, max_sockets:2, upgrade:"Battle Cestus", downgrade:"Cestus", only:"assassin"},
	Greater_Claws:{group:"weapon", type:"claw", base_damage_min:18, base_damage_max:37, req_level:33, req_strength:76, req_dexterity:76, durability:52, speed:-20, range:1, max_sockets:3, upgrade:"Feral Claws", downgrade:"Claws", only:"assassin"},
	Greater_Talons:{group:"weapon", type:"claw", base_damage_min:21, base_damage_max:35, req_level:37, req_strength:79, req_dexterity:79, durability:69, speed:-30, range:1, max_sockets:3, upgrade:"Runic Talons", downgrade:"Blade Talons", only:"assassin"},
	Scissors_Quhab:{group:"weapon", type:"claw", base_damage_min:19, base_damage_max:40, req_level:40, req_strength:82, req_dexterity:82, durability:68, speed:0, range:1, max_sockets:3, upgrade:"Scissors Suwayyah", downgrade:"Scissors Katar", only:"assassin"},
	Suwayyah:{group:"weapon", type:"claw", base_damage_min:39, base_damage_max:52, req_level:44, req_strength:99, req_dexterity:99, durability:48, speed:0, range:1, max_sockets:3, downgrade:"Quhab", only:"assassin"},
	Wrist_Sword:{group:"weapon", type:"claw", base_damage_min:34, base_damage_max:45, req_level:46, req_strength:105, req_dexterity:105, durability:56, speed:-10, range:1, max_sockets:3, downgrade:"Wrist Spike", only:"assassin"},
	War_Fist:{group:"weapon", type:"claw", base_damage_min:44, base_damage_max:53, req_level:51, req_strength:108, req_dexterity:108, durability:64, speed:10, range:1, max_sockets:2, downgrade:"Fascia", only:"assassin"},
	Battle_Cestus:{group:"weapon", type:"claw", base_damage_min:36, base_damage_max:42, req_level:54, req_strength:110, req_dexterity:110, durability:72, speed:-10, range:1, max_sockets:2, downgrade:"Hand Scythe", only:"assassin"},
	Feral_Claws:{group:"weapon", type:"claw", base_damage_min:22, base_damage_max:53, req_level:58, req_strength:113, req_dexterity:113, durability:52, speed:-20, range:1, max_sockets:3, downgrade:"Greater Claws", only:"assassin"},
	Runic_Talons:{group:"weapon", type:"claw", base_damage_min:24, base_damage_max:44, req_level:60, req_strength:115, req_dexterity:115, durability:69, speed:-30, range:1, max_sockets:3, downgrade:"Greater Talons", only:"assassin"},
	Scissors_Suwayyah:{group:"weapon", type:"claw", base_damage_min:40, base_damage_max:51, req_level:64, req_strength:118, req_dexterity:118, durability:68, speed:0, range:1, max_sockets:3, downgrade:"Scissors Quhab", only:"assassin"},
	// orb
	Eagle_Orb:{group:"weapon", type:"orb", base_damage_min:2, base_damage_max:5, durability:20, speed:-10, range:0, max_sockets:2, upgrade:"Glowing Orb", only:"sorceress"},
	Sacred_Globe:{group:"weapon", type:"orb", base_damage_min:3, base_damage_max:8, durability:30, speed:-10, range:0, max_sockets:2, upgrade:"Crystalline Globe", only:"sorceress"},
	Smoked_Sphere:{group:"weapon", type:"orb", base_damage_min:4, base_damage_max:10, req_level:8, durability:35, speed:0, range:0, max_sockets:2, upgrade:"Cloudy Sphere", only:"sorceress"},
	Clasped_Orb:{group:"weapon", type:"orb", base_damage_min:5, base_damage_max:12, req_level:13, durability:40, speed:0, range:0, max_sockets:2, upgrade:"Sparkling Ball", only:"sorceress"},
	Jareds_Stone:{group:"weapon", type:"orb", base_damage_min:8, base_damage_max:18, req_level:18, durability:50, speed:10, range:0, max_sockets:3, upgrade:"Swirling Crystal", only:"sorceress"},
	Glowing_Orb:{group:"weapon", type:"orb", base_damage_min:8, base_damage_max:21, req_level:24, durability:20, speed:-10, range:0, max_sockets:2, upgrade:"Heavenly Stone", downgrade:"Eagle Orb", only:"sorceress"},
	Crystalline_Globe:{group:"weapon", type:"orb", base_damage_min:10, base_damage_max:26, req_level:27, durability:30, speed:-10, range:0, max_sockets:2, upgrade:"Eldritch Orb", downgrade:"Sacred Globe", only:"sorceress"},
	Cloudy_Sphere:{group:"weapon", type:"orb", base_damage_min:11, base_damage_max:29, req_level:30, durability:35, speed:0, range:0, max_sockets:2, upgrade:"Demon Heart", downgrade:"Smoked Sphere", only:"sorceress"},
	Sparkling_Ball:{group:"weapon", type:"orb", base_damage_min:13, base_damage_max:32, req_level:34, durability:40, speed:0, range:0, max_sockets:2, upgrade:"Vortex Orb", downgrade:"Clasped Orb", only:"sorceress"},
	Swirling_Crystal:{group:"weapon", type:"orb", base_damage_min:18, base_damage_max:42, req_level:37, durability:50, speed:10, range:0, max_sockets:3, upgrade:"Dimensional Shard", downgrade:"Jared's Stone", only:"sorceress"},
	Heavenly_Stone:{group:"weapon", type:"orb", base_damage_min:21, base_damage_max:46, req_level:44, durability:20, speed:-10, range:0, max_sockets:2, downgrade:"Glowing Orb", only:"sorceress"},
	Eldritch_Orb:{group:"weapon", type:"orb", base_damage_min:18, base_damage_max:50, req_level:50, durability:30, speed:-10, range:0, max_sockets:2, downgrade:"Crystalline Globe", only:"sorceress"},
	Demon_Heart:{group:"weapon", type:"orb", base_damage_min:23, base_damage_max:55, req_level:56, durability:35, speed:0, range:0, max_sockets:2, downgrade:"Cloudy Sphere", only:"sorceress"},
	Vortex_Orb:{group:"weapon", type:"orb", base_damage_min:12, base_damage_max:66, req_level:63, durability:40, speed:0, range:0, max_sockets:2, downgrade:"Sparkling Ball", only:"sorceress"},
	Dimensional_Shard:{group:"weapon", type:"orb", base_damage_min:30, base_damage_max:53, req_level:66, durability:50, speed:10, range:0, max_sockets:3, downgrade:"Swirling Crystal", only:"sorceress"},
	// amazon weapons
	Stag_Bow:{group:"weapon", type:"bow", base_damage_min:7, base_damage_max:12, req_level:14, req_strength:30, req_dexterity:45, speed:0, max_sockets:5, upgrade:"Ashwood Bow", twoHands:1, only:"amazon"},
	Reflex_Bow:{group:"weapon", type:"bow", base_damage_min:9, base_damage_max:19, req_level:20, req_strength:35, req_dexterity:60, speed:10, max_sockets:5, upgrade:"Ceremonial Bow", twoHands:1, only:"amazon"},
	Ashwood_Bow:{group:"weapon", type:"bow", base_damage_min:16, base_damage_max:29, req_level:29, req_strength:56, req_dexterity:77, speed:0, max_sockets:5, upgrade:"Matriarchal Bow", downgrade:"Stag Bow", twoHands:1, only:"amazon"},
	Ceremonial_Bow:{group:"weapon", type:"bow", base_damage_min:19, base_damage_max:41, req_level:35, req_strength:73, req_dexterity:110, speed:10, max_sockets:5, upgrade:"Grand Matron Bow", downgrade:"Reflex Bow", twoHands:1, only:"amazon"},
	Matriarchal_Bow:{group:"weapon", type:"bow", base_damage_min:20, base_damage_max:47, req_level:39, req_strength:87, req_dexterity:187, speed:-10, max_sockets:5, downgrade:"Ashwood Bow", twoHands:1, only:"amazon"},
	Grand_Matron_Bow:{group:"weapon", type:"bow", base_damage_min:14, base_damage_max:72, req_level:58, req_strength:108, req_dexterity:152, speed:10, max_sockets:5, downgrade:"Ceremonial Bow", twoHands:1, only:"amazon"},
	Maiden_Spear:{group:"weapon", type:"spear", base_damage_min:18, base_damage_max:24, req_level:14, req_strength:54, req_dexterity:40, durability:28, speed:0, range:4, max_sockets:6, upgrade:"Ceremonial Spear", twoHands:1, only:"amazon"},
	Maiden_Pike:{group:"weapon", type:"spear", base_damage_min:23, base_damage_max:55, req_level:20, req_strength:63, req_dexterity:52, durability:25, speed:10, range:4, max_sockets:6, upgrade:"Ceremonial Pike", twoHands:1, only:"amazon"},
	Ceremonial_Spear:{group:"weapon", type:"spear", base_damage_min:34, base_damage_max:51, req_level:32, req_strength:101, req_dexterity:80, durability:28, speed:0, range:4, max_sockets:6, upgrade:"Matriarchal Spear", downgrade:"Maiden Spear", twoHands:1, only:"amazon"},
	Ceremonial_Pike:{group:"weapon", type:"spear", base_damage_min:42, base_damage_max:101, req_level:38, req_strength:115, req_dexterity:98, durability:25, speed:20, range:4, max_sockets:6, upgrade:"Matriarchal Pike", downgrade:"Maiden Pike", twoHands:1, only:"amazon"},
	Matriarchal_Spear:{group:"weapon", type:"spear", base_damage_min:65, base_damage_max:95, req_level:45, req_strength:114, req_dexterity:142, durability:28, speed:0, range:4, max_sockets:6, downgrade:"Ceremonial Spear", twoHands:1, only:"amazon"},
	Matriarchal_Pike:{group:"weapon", type:"spear", base_damage_min:37, base_damage_max:153, req_level:60, req_strength:132, req_dexterity:149, durability:25, speed:20, range:4, max_sockets:6, downgrade:"Ceremonial Pike", twoHands:1, only:"amazon"},
	Maiden_Javelin:{group:"weapon", type:"javelin", base_damage_min:8, base_damage_max:14, req_level:17, req_strength:33, req_dexterity:47, durability:6, speed:-10, range:2, throw_min:6, throw_max:22, upgrade:"Ceremonial Javelin", only:"amazon"},
	Ceremonial_Javelin:{group:"weapon", type:"javelin", base_damage_min:18, base_damage_max:35, req_level:26, req_strength:25, req_dexterity:109, durability:6, speed:-10, range:2, throw_min:18, throw_max:54, upgrade:"Matriarchal Javelin", downgrade:"Maiden Javelin", only:"amazon"},
	Matriarchal_Javelin:{group:"weapon", type:"javelin", base_damage_min:30, base_damage_max:54, req_level:48, req_strength:107, req_dexterity:151, durability:6, speed:-10, range:2, throw_min:35, throw_max:66, downgrade:"Ceremonial Javelin", only:"amazon"},
};