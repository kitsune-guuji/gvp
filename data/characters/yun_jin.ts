import type { CharacterType } from "../character";

import { Character } from "../character";
import { Rarity, Vision, Weapon } from "../types/genshin";

const yun_jin: CharacterType = {
  id: `yun_jin`,
  accentColor: `#eaa6ba`,

  name: `Yun Jin`,
  description: `A renowned Liyue opera singer who is skilled in both playwriting and singing. Her style is one-of-a-kind, exquisite and delicate, much like the person herself.`,
  birthday: [21, 5],

  rarity: Rarity.FOUR_STAR,
  vision: Vision.GEO,
  weapon: Weapon.POLEARM,

  constellations: [
    {
      level: 1,
      title: `Thespian Gallop`,
      description: `Opening Flourish's CD is decreased by 18%.`,
    },
    {
      level: 2,
      title: `Myriad Mise-En-Scène`,
      description: `After Cliffbreaker's Banner is unleashed, all nearby party members' Normal Attack DMG is increased by 15% for 12s.`,
    },
    {
      level: 3,
      title: `Seafaring General`,
      description: `Increases the Level of Cliffbreaker's Banner by 3.\nMaximum upgrade level is 15.`,
    },
    {
      level: 4,
      title: `Flower and a Fighter`,
      description: `When Yun Jin triggers the Crystallize Reaction, her DEF is increased by 20% for 12s.`,
    },
    {
      level: 5,
      title: `Famed Throughout the Land`,
      description: `Increases the Level of Opening Flourish by 3.\nMaximum upgrade level is 15.`,
    },
    {
      level: 6,
      title: `Decorous Harmony`,
      description: `Characters under the effects of the Flying Cloud Flag Formation have their Normal ATK SPD increased by 12%.`,
    },
  ],

  story: [],
};

export default Character.parse(yun_jin);
