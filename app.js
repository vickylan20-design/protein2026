const EGG_PROTEIN_G = 6;
const PROFILE_STORAGE_KEY = "eggProteinProfile";
const LOGIN_STORAGE_KEY = "eggProteinLoggedIn";
const MEALS_STORAGE_KEY = "eggProteinMealsByDate";

const mealLabels = {
  breakfast: "早餐",
  lunch: "午餐",
  dinner: "晚餐",
};

const foods = [
  {
    id: "milk-300",
    category: "dairy",
    subcategory: "milk",
    food_name: "牛奶",
    portion: "300ml",
    protein_g: 10,
    calories: 190,
    egg_unit: 2,
    meal_tags: ["breakfast"],
    estimate_type: "estimated",
    keywords: ["牛奶", "早餐", "乳製品"],
  },
  {
    id: "milk-500",
    category: "dairy",
    subcategory: "milk",
    food_name: "牛奶",
    portion: "500ml",
    protein_g: 16,
    calories: 315,
    egg_unit: 3,
    meal_tags: ["breakfast"],
    estimate_type: "estimated",
    keywords: ["牛奶", "早餐", "乳製品"],
  },
  {
    id: "latte-medium",
    category: "dairy",
    subcategory: "latte",
    food_name: "拿鐵",
    portion: "中杯",
    protein_g: 9,
    calories: 160,
    egg_unit: 2,
    meal_tags: ["breakfast"],
    estimate_type: "estimated",
    keywords: ["拿鐵", "咖啡", "牛奶", "中杯", "早餐"],
  },
  {
    id: "latte-large",
    category: "dairy",
    subcategory: "latte",
    food_name: "拿鐵",
    portion: "大杯",
    protein_g: 12,
    calories: 220,
    egg_unit: 2,
    meal_tags: ["breakfast"],
    estimate_type: "estimated",
    keywords: ["拿鐵", "咖啡", "牛奶", "大杯", "早餐"],
  },
  {
    id: "latte-extra-large",
    category: "dairy",
    subcategory: "latte",
    food_name: "拿鐵",
    portion: "特大杯",
    protein_g: 15,
    calories: 280,
    egg_unit: 3,
    meal_tags: ["breakfast"],
    estimate_type: "estimated",
    keywords: ["拿鐵", "咖啡", "牛奶", "特大", "早餐"],
  },
  {
    id: "soy-milk-small",
    category: "soy",
    subcategory: "drink",
    food_name: "豆漿",
    portion: "小杯",
    protein_g: 12,
    calories: 155,
    egg_unit: 2,
    meal_tags: ["breakfast", "dinner"],
    estimate_type: "estimated",
    keywords: ["豆漿", "早餐", "飲料"],
  },
  {
    id: "soy-milk-large",
    category: "soy",
    subcategory: "drink",
    food_name: "豆漿",
    portion: "大杯",
    protein_g: 18,
    calories: 230,
    egg_unit: 3,
    meal_tags: ["breakfast", "dinner"],
    estimate_type: "estimated",
    keywords: ["豆漿", "大杯", "早餐", "飲料"],
  },
  {
    id: "soy-milk-bottle",
    category: "soy",
    subcategory: "drink",
    food_name: "無糖豆漿",
    portion: "450ml",
    protein_g: 16,
    calories: 170,
    egg_unit: 3,
    meal_tags: ["breakfast", "dinner"],
    estimate_type: "estimated",
    keywords: ["豆漿", "無糖豆漿", "便利商店", "早餐", "飲料"],
  },
  {
    id: "yogurt",
    category: "dairy",
    subcategory: "yogurt",
    food_name: "優格",
    portion: "小杯",
    protein_g: 7,
    calories: 110,
    egg_unit: 2,
    meal_tags: ["breakfast"],
    estimate_type: "estimated",
    keywords: ["優格", "小杯", "乳製品", "早餐"],
  },
  {
    id: "yogurt-large",
    category: "dairy",
    subcategory: "yogurt",
    food_name: "優格",
    portion: "大杯",
    protein_g: 12,
    calories: 190,
    egg_unit: 2,
    meal_tags: ["breakfast"],
    estimate_type: "estimated",
    keywords: ["優格", "大杯", "乳製品", "早餐"],
  },
  {
    id: "drinking-yogurt",
    category: "dairy",
    subcategory: "yogurt-drink",
    food_name: "優酪乳",
    portion: "小瓶",
    protein_g: 6,
    calories: 160,
    egg_unit: 1,
    meal_tags: ["breakfast"],
    estimate_type: "estimated",
    keywords: ["優酪乳", "小瓶", "乳製品", "早餐", "飲料"],
  },
  {
    id: "drinking-yogurt-large",
    category: "dairy",
    subcategory: "yogurt-drink",
    food_name: "優酪乳",
    portion: "大瓶",
    protein_g: 10,
    calories: 260,
    egg_unit: 2,
    meal_tags: ["breakfast"],
    estimate_type: "estimated",
    keywords: ["優酪乳", "大瓶", "乳製品", "早餐", "飲料"],
  },
  {
    id: "greek-yogurt",
    category: "dairy",
    subcategory: "yogurt",
    food_name: "希臘優格",
    portion: "1份約160g",
    protein_g: 10,
    calories: 170,
    egg_unit: 2,
    meal_tags: ["breakfast"],
    estimate_type: "estimated",
    keywords: ["希臘優格", "高蛋白優格", "優格", "乳製品", "160g", "早餐"],
  },
  {
    id: "mantou",
    category: "breakfast",
    subcategory: "staple",
    food_name: "白饅頭",
    portion: "1顆",
    protein_g: 7,
    calories: 230,
    egg_unit: 1,
    meal_tags: ["breakfast"],
    estimate_type: "estimated",
    keywords: ["白饅頭", "饅頭", "早餐"],
  },
  {
    id: "multigrain-mantou",
    category: "wellness",
    subcategory: "grain",
    food_name: "五穀雜糧饅頭",
    portion: "1顆",
    protein_g: 8,
    calories: 250,
    egg_unit: 1,
    meal_tags: ["breakfast"],
    estimate_type: "estimated",
    keywords: ["五穀", "雜糧", "饅頭", "養生", "早餐"],
  },
  {
    id: "millet-porridge",
    category: "wellness",
    subcategory: "porridge",
    food_name: "小米粥",
    portion: "1碗",
    protein_g: 5,
    calories: 170,
    egg_unit: 1,
    meal_tags: ["breakfast", "dinner"],
    estimate_type: "estimated",
    keywords: ["小米粥", "粥", "養生", "早餐", "晚餐"],
  },
  {
    id: "rice-ball",
    category: "breakfast",
    subcategory: "rice",
    food_name: "飯糰",
    portion: "1份",
    protein_g: 9,
    calories: 420,
    egg_unit: 2,
    meal_tags: ["breakfast"],
    estimate_type: "estimated",
    keywords: ["飯糰", "早餐"],
  },
  {
    id: "plain-egg-pancake",
    category: "breakfast",
    subcategory: "pancake",
    food_name: "原味蛋餅",
    portion: "1份",
    protein_g: 10,
    calories: 300,
    egg_unit: 2,
    meal_tags: ["breakfast"],
    estimate_type: "estimated",
    keywords: ["原味蛋餅", "蛋餅", "早餐"],
  },
  {
    id: "corn-egg-pancake",
    category: "breakfast",
    subcategory: "pancake",
    food_name: "玉米蛋餅",
    portion: "1份",
    protein_g: 11,
    calories: 340,
    egg_unit: 2,
    meal_tags: ["breakfast"],
    estimate_type: "estimated",
    keywords: ["玉米蛋餅", "玉米", "蛋餅", "早餐"],
  },
  {
    id: "ham-egg-pancake",
    category: "breakfast",
    subcategory: "pancake",
    food_name: "火腿蛋餅",
    portion: "1份",
    protein_g: 13,
    calories: 360,
    egg_unit: 2,
    meal_tags: ["breakfast"],
    estimate_type: "estimated",
    keywords: ["火腿蛋餅", "火腿", "蛋餅", "早餐"],
  },
  {
    id: "pork-chop-egg-pancake",
    category: "breakfast",
    subcategory: "pancake",
    food_name: "豬排蛋餅",
    portion: "1份",
    protein_g: 18,
    calories: 460,
    egg_unit: 3,
    meal_tags: ["breakfast"],
    estimate_type: "estimated",
    keywords: ["豬排蛋餅", "豬排", "蛋餅", "早餐"],
  },
  {
    id: "cheese-egg-pancake",
    category: "breakfast",
    subcategory: "pancake",
    food_name: "起司蛋餅",
    portion: "1份",
    protein_g: 13,
    calories: 380,
    egg_unit: 2,
    meal_tags: ["breakfast"],
    estimate_type: "estimated",
    keywords: ["起司蛋餅", "起司", "蛋餅", "早餐"],
  },
  {
    id: "tuna-egg-pancake",
    category: "breakfast",
    subcategory: "pancake",
    food_name: "鮪魚蛋餅",
    portion: "1份",
    protein_g: 13,
    calories: 360,
    egg_unit: 2,
    meal_tags: ["breakfast"],
    estimate_type: "estimated",
    keywords: ["鮪魚蛋餅", "鮪魚", "蛋餅", "早餐"],
  },
  {
    id: "sandwich",
    category: "breakfast",
    subcategory: "sandwich",
    food_name: "三明治",
    portion: "1份",
    protein_g: 12,
    calories: 360,
    egg_unit: 2,
    meal_tags: ["breakfast"],
    estimate_type: "estimated",
    keywords: ["三明治", "早餐"],
  },
  {
    id: "crispy-chicken-burger",
    category: "breakfast",
    subcategory: "burger",
    food_name: "香雞漢堡",
    portion: "1份",
    protein_g: 17,
    calories: 430,
    egg_unit: 3,
    meal_tags: ["breakfast", "lunch"],
    estimate_type: "estimated",
    keywords: ["香雞漢堡", "漢堡", "香雞", "早餐", "午餐"],
  },
  {
    id: "pork-chop-burger",
    category: "breakfast",
    subcategory: "burger",
    food_name: "豬排漢堡",
    portion: "1份",
    protein_g: 20,
    calories: 470,
    egg_unit: 3,
    meal_tags: ["breakfast", "lunch"],
    estimate_type: "estimated",
    keywords: ["豬排漢堡", "漢堡", "豬排", "早餐", "午餐"],
  },
  {
    id: "chicken-leg-burger",
    category: "breakfast",
    subcategory: "burger",
    food_name: "雞腿漢堡",
    portion: "1份",
    protein_g: 24,
    calories: 560,
    egg_unit: 4,
    meal_tags: ["breakfast", "lunch"],
    estimate_type: "estimated",
    keywords: ["雞腿漢堡", "漢堡", "雞腿", "早餐", "午餐"],
  },
  {
    id: "double-beef-cheese-burger",
    category: "fastfood",
    subcategory: "burger",
    food_name: "雙層牛肉吉事堡",
    portion: "1份",
    protein_g: 27,
    calories: 560,
    egg_unit: 5,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["雙層牛肉吉事堡", "雙層牛肉", "吉事堡", "起司", "漢堡", "午餐", "晚餐"],
  },
  {
    id: "fish-burger",
    category: "fastfood",
    subcategory: "burger",
    food_name: "麥香魚堡",
    portion: "1份",
    protein_g: 16,
    calories: 380,
    egg_unit: 3,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["麥香魚", "魚堡", "漢堡", "魚", "午餐", "晚餐"],
  },
  {
    id: "beef-cheese-burger",
    category: "breakfast",
    subcategory: "burger",
    food_name: "牛肉吉事漢堡",
    portion: "1份",
    protein_g: 20,
    calories: 480,
    egg_unit: 3,
    meal_tags: ["breakfast", "lunch"],
    estimate_type: "estimated",
    keywords: ["牛肉吉事漢堡", "牛肉起司漢堡", "吉事", "起司", "漢堡", "早餐", "午餐"],
  },
  {
    id: "tea-egg",
    category: "egg",
    subcategory: "snack",
    food_name: "茶葉蛋",
    portion: "1顆",
    protein_g: 6,
    calories: 75,
    egg_unit: 1,
    meal_tags: ["breakfast", "lunch", "dinner"],
    estimate_type: "exact",
    keywords: ["茶葉蛋", "蛋", "便利商店"],
  },
  {
    id: "fried-egg",
    category: "egg",
    subcategory: "snack",
    food_name: "煎蛋",
    portion: "1顆",
    protein_g: 6,
    calories: 95,
    egg_unit: 1,
    meal_tags: ["breakfast", "lunch", "dinner"],
    estimate_type: "exact",
    keywords: ["煎蛋", "蛋", "早餐", "午餐", "晚餐"],
  },
  {
    id: "chawanmushi",
    category: "egg",
    subcategory: "steamed",
    food_name: "茶碗蒸",
    portion: "1碗",
    protein_g: 8,
    calories: 120,
    egg_unit: 1,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["茶碗蒸", "蒸蛋", "蛋", "午餐", "晚餐"],
  },
  {
    id: "chicken-breast",
    category: "meat",
    subcategory: "chicken",
    food_name: "雞胸肉",
    portion: "1包",
    protein_g: 24,
    calories: 135,
    egg_unit: 4,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["雞胸", "雞胸肉", "便利商店", "肉", "午餐", "晚餐"],
  },
  {
    id: "steak",
    category: "meat",
    subcategory: "beef",
    food_name: "牛排",
    portion: "1份",
    protein_g: 32,
    calories: 520,
    egg_unit: 5,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["牛排", "牛肉", "排餐", "肉", "午餐", "晚餐"],
  },
  {
    id: "dumplings-5",
    category: "meal",
    subcategory: "dumplings",
    food_name: "水餃",
    portion: "5顆",
    protein_g: 9,
    calories: 215,
    egg_unit: 2,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["水餃", "午餐", "晚餐"],
  },
  {
    id: "beef-noodle",
    category: "meal",
    subcategory: "noodle",
    food_name: "牛肉麵",
    portion: "1碗",
    protein_g: 25,
    calories: 650,
    egg_unit: 4,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["牛肉麵", "午餐", "晚餐"],
  },
  {
    id: "egg-drop-soup",
    category: "meal",
    subcategory: "soup",
    food_name: "蛋花湯",
    portion: "1碗",
    protein_g: 6,
    calories: 80,
    egg_unit: 1,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["蛋花湯", "湯", "蛋", "午餐", "晚餐"],
  },
  {
    id: "tofu-miso-soup",
    category: "meal",
    subcategory: "soup",
    food_name: "豆腐味噌湯",
    portion: "1碗",
    protein_g: 7,
    calories: 90,
    egg_unit: 1,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["豆腐味噌湯", "味噌湯", "豆腐", "湯", "午餐", "晚餐"],
  },
  {
    id: "fish-tofu-miso-soup",
    category: "meal",
    subcategory: "soup",
    food_name: "鮮魚豆腐味噌湯",
    portion: "1碗",
    protein_g: 16,
    calories: 180,
    egg_unit: 3,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["鮮魚豆腐味噌湯", "魚湯", "味噌湯", "豆腐", "鮮魚", "湯", "午餐", "晚餐"],
  },
  {
    id: "salmon-sushi",
    category: "sushi",
    subcategory: "fish",
    food_name: "鮭魚壽司",
    portion: "2貫",
    protein_g: 9,
    calories: 150,
    egg_unit: 2,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["鮭魚壽司", "鮭魚", "壽司", "握壽司", "魚壽司", "午餐", "晚餐"],
  },
  {
    id: "tuna-sushi",
    category: "sushi",
    subcategory: "fish",
    food_name: "鮪魚壽司",
    portion: "2貫",
    protein_g: 10,
    calories: 140,
    egg_unit: 2,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["鮪魚壽司", "鮪魚", "壽司", "握壽司", "魚壽司", "午餐", "晚餐"],
  },
  {
    id: "chicken-bento",
    category: "bento",
    subcategory: "chicken",
    food_name: "雞腿便當",
    portion: "1份",
    protein_g: 32,
    calories: 820,
    egg_unit: 5,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["雞腿飯", "雞腿便當", "便當", "午餐"],
  },
  {
    id: "chicken-rice-bento",
    category: "bento",
    subcategory: "chicken",
    food_name: "雞肉飯便當",
    portion: "1份",
    protein_g: 24,
    calories: 720,
    egg_unit: 4,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["雞肉飯便當", "雞肉飯", "便當", "午餐", "晚餐"],
  },
  {
    id: "chicken-leg",
    category: "meat",
    subcategory: "chicken",
    food_name: "雞腿",
    portion: "1支",
    protein_g: 25,
    calories: 330,
    egg_unit: 4,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["雞腿", "肉", "便當配菜", "午餐", "晚餐"],
  },
  {
    id: "chicken-cutlet",
    category: "meat",
    subcategory: "chicken",
    food_name: "雞排",
    portion: "1片",
    protein_g: 28,
    calories: 520,
    egg_unit: 5,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["雞排", "肉", "便當配菜", "午餐", "晚餐"],
  },
  {
    id: "pork-rib-rice",
    category: "bento",
    subcategory: "pork",
    food_name: "滷排骨飯",
    portion: "1份",
    protein_g: 28,
    calories: 760,
    egg_unit: 5,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["滷排骨飯", "排骨飯", "午餐"],
  },
  {
    id: "braised-pork-rice-bento",
    category: "bento",
    subcategory: "pork",
    food_name: "魯肉飯便當",
    portion: "1份",
    protein_g: 18,
    calories: 760,
    egg_unit: 3,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["魯肉飯便當", "滷肉飯便當", "魯肉飯", "滷肉飯", "便當", "午餐", "晚餐"],
  },
  {
    id: "chicken-rice",
    category: "meal",
    subcategory: "rice",
    food_name: "雞肉飯",
    portion: "1碗",
    protein_g: 16,
    calories: 430,
    egg_unit: 3,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["雞肉飯", "飯", "午餐", "晚餐"],
  },
  {
    id: "braised-pork-rice",
    category: "meal",
    subcategory: "rice",
    food_name: "魯肉飯",
    portion: "1碗",
    protein_g: 12,
    calories: 480,
    egg_unit: 2,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["魯肉飯", "滷肉飯", "飯", "午餐", "晚餐"],
  },
  {
    id: "oyakodon",
    category: "meal",
    subcategory: "donburi",
    food_name: "親子丼",
    portion: "1碗",
    protein_g: 28,
    calories: 680,
    egg_unit: 5,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["親子丼", "雞肉", "蛋", "丼飯", "午餐", "晚餐"],
  },
  {
    id: "gyudon",
    category: "meal",
    subcategory: "donburi",
    food_name: "牛丼",
    portion: "1碗",
    protein_g: 24,
    calories: 720,
    egg_unit: 4,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["牛丼", "牛肉", "丼飯", "午餐", "晚餐"],
  },
  {
    id: "seafood-don",
    category: "meal",
    subcategory: "donburi",
    food_name: "海鮮丼",
    portion: "1碗",
    protein_g: 30,
    calories: 650,
    egg_unit: 5,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["海鮮丼", "海鮮", "魚", "丼飯", "午餐", "晚餐"],
  },
  {
    id: "pork-rib",
    category: "meat",
    subcategory: "pork",
    food_name: "排骨",
    portion: "1片",
    protein_g: 22,
    calories: 360,
    egg_unit: 4,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["排骨", "滷排骨", "肉", "便當配菜", "午餐", "晚餐"],
  },
  {
    id: "buffet-meat",
    category: "buffet",
    subcategory: "meat",
    food_name: "自助餐肉類",
    portion: "1掌心",
    protein_g: 22,
    calories: 310,
    egg_unit: 4,
    meal_tags: ["lunch"],
    estimate_type: "estimated",
    keywords: ["自助餐", "肉", "午餐"],
  },
  {
    id: "buffet-fish",
    category: "buffet",
    subcategory: "fish",
    food_name: "自助餐魚肉",
    portion: "1片",
    protein_g: 20,
    calories: 260,
    egg_unit: 3,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["自助餐", "魚", "魚肉", "午餐", "晚餐"],
  },
  {
    id: "grilled-mackerel",
    category: "fish",
    subcategory: "mackerel",
    food_name: "鯖魚",
    portion: "1片",
    protein_g: 24,
    calories: 300,
    egg_unit: 4,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["鯖魚", "烤鯖魚", "魚", "魚肉", "午餐", "晚餐"],
  },
  {
    id: "grilled-salmon",
    category: "fish",
    subcategory: "salmon",
    food_name: "鮭魚",
    portion: "1片",
    protein_g: 23,
    calories: 280,
    egg_unit: 4,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["鮭魚", "烤鮭魚", "魚", "魚肉", "午餐", "晚餐"],
  },
  {
    id: "tofu",
    category: "soy",
    subcategory: "tofu",
    food_name: "豆腐",
    portion: "半盒",
    protein_g: 11,
    calories: 120,
    egg_unit: 2,
    meal_tags: ["dinner"],
    estimate_type: "estimated",
    keywords: ["豆腐", "晚餐", "火鍋"],
  },
  {
    id: "braised-tofu",
    category: "soy",
    subcategory: "tofu",
    food_name: "滷豆腐",
    portion: "1份",
    protein_g: 10,
    calories: 140,
    egg_unit: 2,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["滷豆腐", "豆腐", "滷味", "小菜", "午餐", "晚餐"],
  },
  {
    id: "side-dried-tofu",
    category: "side",
    subcategory: "braised",
    food_name: "小菜 豆乾",
    portion: "1份",
    protein_g: 10,
    calories: 130,
    egg_unit: 2,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["小菜", "豆乾", "豆干", "滷味", "午餐", "晚餐"],
  },
  {
    id: "side-luwei-platter",
    category: "side",
    subcategory: "braised",
    food_name: "小菜 滷味拼盤",
    portion: "1份",
    protein_g: 18,
    calories: 280,
    egg_unit: 3,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["小菜", "滷味", "拼盤", "豆乾", "肉片", "午餐", "晚餐"],
  },
  {
    id: "side-egg-tofu",
    category: "side",
    subcategory: "braised",
    food_name: "小菜 滷蛋豆乾",
    portion: "1份",
    protein_g: 14,
    calories: 190,
    egg_unit: 2,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["小菜", "滷蛋", "豆乾", "豆干", "蛋", "午餐", "晚餐"],
  },
  {
    id: "hotpot-pork-belly",
    category: "hotpot",
    subcategory: "pork",
    food_name: "火鍋五花肉片",
    portion: "1盤",
    protein_g: 18,
    calories: 430,
    egg_unit: 3,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["火鍋", "五花", "豬五花", "肉片", "晚餐"],
  },
  {
    id: "hotpot-pork-shoulder",
    category: "hotpot",
    subcategory: "pork",
    food_name: "火鍋梅花豬",
    portion: "1盤",
    protein_g: 22,
    calories: 330,
    egg_unit: 4,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["火鍋", "梅花", "梅花豬", "豬肉", "肉片", "晚餐"],
  },
  {
    id: "hotpot-flat-iron-beef",
    category: "hotpot",
    subcategory: "beef",
    food_name: "火鍋板腱牛",
    portion: "1盤",
    protein_g: 24,
    calories: 300,
    egg_unit: 4,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["火鍋", "板腱牛", "牛肉", "肉片", "晚餐"],
  },
  {
    id: "hotpot-wagyu",
    category: "hotpot",
    subcategory: "beef",
    food_name: "火鍋和牛",
    portion: "1盤",
    protein_g: 20,
    calories: 520,
    egg_unit: 3,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["火鍋", "和牛", "牛肉", "肉片", "晚餐"],
  },
  {
    id: "hotpot-fish",
    category: "hotpot",
    subcategory: "fish",
    food_name: "火鍋魚片",
    portion: "1盤",
    protein_g: 18,
    calories: 170,
    egg_unit: 3,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["火鍋", "魚片", "魚肉", "晚餐"],
  },
  {
    id: "hotpot-white-shrimp",
    category: "hotpot",
    subcategory: "seafood",
    food_name: "火鍋白蝦",
    portion: "6隻",
    protein_g: 18,
    calories: 120,
    egg_unit: 3,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["火鍋", "白蝦", "蝦", "海鮮", "晚餐"],
  },
  {
    id: "hotpot-lobster",
    category: "hotpot",
    subcategory: "seafood",
    food_name: "火鍋龍蝦",
    portion: "半隻",
    protein_g: 22,
    calories: 130,
    egg_unit: 4,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["火鍋", "龍蝦", "海鮮", "晚餐"],
  },
  {
    id: "hotpot-clams",
    category: "hotpot",
    subcategory: "seafood",
    food_name: "火鍋蛤蠣",
    portion: "1盤",
    protein_g: 12,
    calories: 90,
    egg_unit: 2,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["火鍋", "蛤蠣", "蛤蜊", "海鮮", "晚餐"],
  },
  {
    id: "hotpot-tofu",
    category: "hotpot",
    subcategory: "tofu",
    food_name: "火鍋豆腐",
    portion: "1份",
    protein_g: 10,
    calories: 110,
    egg_unit: 2,
    meal_tags: ["lunch", "dinner"],
    estimate_type: "estimated",
    keywords: ["火鍋", "豆腐", "晚餐"],
  },
];

function emptyMeals() {
  return {
    breakfast: [],
    lunch: [],
    dinner: [],
  };
}

function dateKeyFromDate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dateFromKey(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function loadMealsByDate() {
  try {
    const mealsByDate = JSON.parse(localStorage.getItem(MEALS_STORAGE_KEY));
    return mealsByDate && typeof mealsByDate === "object" ? mealsByDate : {};
  } catch {
    return {};
  }
}

function loadMealsForDate(dateKey) {
  const mealsByDate = loadMealsByDate();
  const savedMeals = mealsByDate[dateKey] || {};
  const meals = emptyMeals();

  Object.keys(mealLabels).forEach((meal) => {
    meals[meal] = (savedMeals[meal] || [])
      .map((entry) => {
        const food = foods.find((item) => item.id === entry.foodId);
        return food ? { food, quantity: Number(entry.quantity) || 1 } : null;
      })
      .filter(Boolean);
  });

  return meals;
}

function saveMealsForDate(dateKey, meals) {
  const mealsByDate = loadMealsByDate();
  mealsByDate[dateKey] = Object.fromEntries(
    Object.entries(meals).map(([meal, entries]) => [
      meal,
      entries.map((entry) => ({
        foodId: entry.food.id,
        quantity: entry.quantity,
      })),
    ]),
  );
  localStorage.setItem(MEALS_STORAGE_KEY, JSON.stringify(mealsByDate));
}

const state = {
  activeMeal: "breakfast",
  selectedDateKey: dateKeyFromDate(),
  profile: loadProfile(),
  isLoggedIn: localStorage.getItem(LOGIN_STORAGE_KEY) === "true",
  meals: loadMealsForDate(dateKeyFromDate()),
};

const elements = {
  completedEggs: document.querySelector("#completedEggs"),
  goalEggs: document.querySelector("#goalEggs"),
  goalFill: document.querySelector("#goalFill"),
  todayButton: document.querySelector("#todayButton"),
  todayLabel: document.querySelector("#todayLabel"),
  dateInput: document.querySelector("#dateInput"),
  homeView: document.querySelector("#homeView"),
  recordsView: document.querySelector("#recordsView"),
  openRecords: document.querySelector("#openRecords"),
  recordsBack: document.querySelector("#recordsBack"),
  recordsHeaderMeta: document.querySelector("#recordsHeaderMeta"),
  recordsHeaderTitle: document.querySelector("#recordsHeaderTitle"),
  mealButtons: document.querySelectorAll(".meal-ring"),
  mealCounts: {
    breakfast: document.querySelector("#breakfastEggs"),
    lunch: document.querySelector("#lunchEggs"),
    dinner: document.querySelector("#dinnerEggs"),
  },
  activeMealTitle: document.querySelector("#activeMealTitle"),
  mealFoodList: document.querySelector("#mealFoodList"),
  totalProtein: document.querySelector("#totalProtein"),
  totalCalories: document.querySelector("#totalCalories"),
  proteinRate: document.querySelector("#proteinRate"),
  energyHint: document.querySelector("#energyHint"),
  sheetBackdrop: document.querySelector("#sheetBackdrop"),
  addSheet: document.querySelector("#addSheet"),
  openProfile: document.querySelector("#openProfile"),
  openAddFood: document.querySelector("#openAddFood"),
  closeSheet: document.querySelector("#closeSheet"),
  foodSearch: document.querySelector("#foodSearch"),
  foodResults: document.querySelector("#foodResults"),
  recommendLabel: document.querySelector("#recommendLabel"),
  sheetMealLabel: document.querySelector("#sheetMealLabel"),
  profileBackdrop: document.querySelector("#profileBackdrop"),
  profileModal: document.querySelector("#profileModal"),
  profileForm: document.querySelector("#profileForm"),
  weightInput: document.querySelector("#weightInput"),
  goalInput: document.querySelector("#goalInput"),
  goalOptions: document.querySelectorAll(".goal-option"),
  profilePreview: document.querySelector("#profilePreview"),
  recordContent: document.querySelector("#recordContent"),
};

function loadProfile() {
  try {
    const profile = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY));
    if (!profile || !profile.weightKg || !profile.proteinFactor) return null;
    return profile;
  } catch {
    return null;
  }
}

function dailyProteinGoal() {
  if (!state.profile) return 60;
  return Math.round(state.profile.weightKg * state.profile.proteinFactor);
}

function dailyEggGoal() {
  return dailyProteinGoal() / EGG_PROTEIN_G;
}

function dailyCalorieRange() {
  const weightKg = state.profile?.weightKg || 60;
  const goalLabel = state.profile?.goalLabel || "日常維持";
  const caloriesPerKg = {
    日常維持: 30,
    減脂保肌: 24,
    增肌訓練: 34,
    熟齡肌力維持: 28,
  }[goalLabel] || 30;
  const target = Math.round(weightKg * caloriesPerKg);
  return {
    lower: Math.round(target * 0.9),
    upper: Math.round(target * 1.1),
  };
}

function calorieStatus() {
  const range = dailyCalorieRange();
  return `建議熱量 ${range.lower}-${range.upper}`;
}

function formatTodayLabel(date = new Date()) {
  const weekdays = ["日", "一", "二", "三", "四", "五", "六"];
  return `${date.getMonth() + 1}月${date.getDate()}日 (${weekdays[date.getDay()]})`;
}

function formatRecordDate(date = new Date()) {
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 (${["日", "一", "二", "三", "四", "五", "六"][date.getDay()]})`;
}

function renderSelectedDate() {
  const selectedDate = dateFromKey(state.selectedDateKey);
  elements.todayLabel.textContent = formatTodayLabel(selectedDate);
  elements.dateInput.value = state.selectedDateKey;
}

function switchDate(dateKey) {
  if (!dateKey || dateKey === state.selectedDateKey) return;
  state.selectedDateKey = dateKey;
  state.meals = loadMealsForDate(dateKey);
  renderSelectedDate();
  renderActiveMeal();
  renderSummary();
  if (!elements.recordsView.hidden && state.isLoggedIn) renderRecordList();
}

function eggCount(food) {
  return food.protein_g / EGG_PROTEIN_G;
}

function formatEggs(value) {
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}

function allSelectedFoods() {
  return Object.values(state.meals).flat();
}

function entryProtein(entry) {
  return entry.food.protein_g * entry.quantity;
}

function entryCalories(entry) {
  return entry.food.calories * entry.quantity;
}

function entryEggs(entry) {
  return eggCount(entry.food) * entry.quantity;
}

function formatEstimate(food) {
  const prefix = food.estimate_type === "estimated" ? "約 " : "";
  return `${prefix}protein ${food.protein_g}g (${food.calories}kcal)`;
}

function renderMealList() {
  const meal = state.activeMeal;
  const selectedFoods = state.meals[meal];
  elements.activeMealTitle.textContent = mealLabels[meal];

  if (selectedFoods.length === 0) {
    elements.mealFoodList.classList.add("is-empty");
    elements.mealFoodList.innerHTML = `<div class="empty-state">這餐還沒有蛋白質來源。<br />加一個常吃外食看看。</div>`;
    return;
  }

  elements.mealFoodList.classList.remove("is-empty");
  elements.mealFoodList.innerHTML = selectedFoods
    .map(
      (entry, index) => `
        <article class="food-row">
          <div class="quantity-control" aria-label="調整數量">
            <button type="button" data-quantity-index="${index}" data-quantity-delta="-1" aria-label="減少${entry.food.food_name}">−</button>
            <span>${entry.quantity}</span>
            <button type="button" data-quantity-index="${index}" data-quantity-delta="1" aria-label="增加${entry.food.food_name}">+</button>
          </div>
          <div class="food-copy">
            <div class="food-name">${entry.food.food_name}${entry.food.portion}</div>
            <div class="food-meta">${formatEstimate(entry.food)}</div>
          </div>
          <div class="food-actions">
            <div class="food-eggs">+${formatEggs(entryEggs(entry))}<span aria-hidden="true">🥚</span></div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderSummary() {
  const goalEggs = dailyEggGoal();
  elements.goalEggs.textContent = formatEggs(goalEggs);

  Object.keys(mealLabels).forEach((meal) => {
    const mealEggs = state.meals[meal].reduce((total, entry) => total + entryEggs(entry), 0);
    elements.mealCounts[meal].textContent = formatEggs(mealEggs);
  });

  const totalFoods = allSelectedFoods();
  const totalProtein = totalFoods.reduce((total, entry) => total + entryProtein(entry), 0);
  const totalCalories = totalFoods.reduce((total, entry) => total + entryCalories(entry), 0);
  const completedEggs = totalProtein / EGG_PROTEIN_G;
  const rate = Math.round((completedEggs / goalEggs) * 100);

  elements.completedEggs.textContent = formatEggs(completedEggs);
  elements.goalFill.style.width = `${Math.min(rate, 100)}%`;
  elements.totalProtein.textContent = totalProtein;
  elements.totalCalories.textContent = totalCalories;
  elements.proteinRate.textContent = `蛋白質達成率${rate}%`;
  elements.energyHint.textContent = calorieStatus();
}

function currentRecord() {
  const goalEggs = dailyEggGoal();
  const totalProtein = allSelectedFoods().reduce((total, entry) => total + entryProtein(entry), 0);
  const rate = Math.round((totalProtein / EGG_PROTEIN_G / goalEggs) * 100);
  return {
    date: formatRecordDate(dateFromKey(state.selectedDateKey)),
    protein: totalProtein,
    rate,
    meals: Object.keys(mealLabels).map((meal) => ({
      id: meal,
      label: mealLabels[meal],
      entries: state.meals[meal],
    })),
  };
}

function renderLoginPrompt() {
  elements.recordContent.innerHTML = `
    <div class="login-panel">
      <p>登入後可以用日期查看每天的蛋白質紀錄。</p>
      <small>功能開發中</small>
      <button class="login-button google" type="button" disabled>
        <img src="./assets/login_google.svg" alt="" aria-hidden="true" />
        <span>用 Google 登入</span>
      </button>
      <button class="login-button facebook" type="button" disabled>
        <img src="./assets/login_fb.svg" alt="" aria-hidden="true" />
        <span>用 Facebook 登入</span>
      </button>
      <button class="login-button line" type="button" disabled>
        <img src="./assets/login_line.svg" alt="" aria-hidden="true" />
        <span>用 LINE 登入</span>
      </button>
    </div>
  `;
}

function renderRecordList() {
  const record = currentRecord();
  elements.recordsBack.dataset.recordsBackMode = "home";
  elements.recordsBack.setAttribute("aria-label", "回首頁");
  elements.recordsHeaderMeta.hidden = true;
  elements.recordsHeaderMeta.textContent = "";
  elements.recordsHeaderTitle.textContent = "紀錄";
  elements.recordContent.innerHTML = `
    <button class="record-card" type="button" data-record-detail="today">
      <div>
        <strong>${record.date}</strong>
        <span>當日蛋白質 ${record.protein}g</span>
      </div>
      <em>達標率 ${record.rate}%</em>
    </button>
  `;
}

function renderRecordDetail() {
  const record = currentRecord();
  elements.recordsBack.dataset.recordsBackMode = "list";
  elements.recordsBack.setAttribute("aria-label", "返回日期清單");
  elements.recordsHeaderMeta.hidden = false;
  elements.recordsHeaderMeta.textContent = `達標率 ${record.rate}%・當日蛋白質 ${record.protein}g`;
  elements.recordsHeaderTitle.textContent = record.date;
  const mealBlocks = record.meals
    .map((meal) => {
      const items = meal.entries.length
        ? meal.entries
            .map(
              (entry) => `
                <li>
                  <span>${entry.food.food_name}${entry.food.portion} × ${entry.quantity}</span>
                  <strong>${entryProtein(entry)}g</strong>
                </li>
              `,
            )
            .join("")
        : `<li class="empty-record">尚未新增</li>`;
      return `
        <section class="record-meal">
          <h3>${meal.label}</h3>
          <ul>${items}</ul>
        </section>
      `;
    })
    .join("");

  elements.recordContent.innerHTML = `
    ${mealBlocks}
  `;
}

function showHomeView() {
  elements.recordsView.hidden = true;
  elements.homeView.hidden = false;
}

function showRecordsView() {
  elements.homeView.hidden = true;
  elements.recordsView.hidden = false;
  if (state.isLoggedIn) {
    renderRecordList();
  } else {
    renderLoginPrompt();
  }
}

function login(provider) {
  state.isLoggedIn = true;
  localStorage.setItem(LOGIN_STORAGE_KEY, "true");
  renderRecordList();
}

function renderActiveMeal() {
  elements.mealButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.meal === state.activeMeal);
  });
  renderMealList();
}

function foodGroupKey(food) {
  return `${food.category}:${food.subcategory}:${food.food_name}`;
}

const mealSortOrder = {
  breakfast: ["latte", "soy", "milk", "yogurt", "egg", "pancake", "burger"],
  lunch: ["buffet", "protein", "bento", "rice-meal", "side", "soup", "beef-noodle", "steak", "hotpot", "burger"],
  dinner: ["bento", "rice-meal", "side", "soup", "sushi", "buffet", "protein"],
};

function mealSortBucket(food, meal) {
  if (meal === "breakfast") {
    if (food.subcategory === "latte") return "latte";
    if (food.category === "soy") return "soy";
    if (food.subcategory === "milk") return "milk";
    if (food.subcategory === "yogurt" || food.subcategory === "yogurt-drink") return "yogurt";
    if (food.category === "egg") return "egg";
    if (food.subcategory === "pancake") return "pancake";
    if (food.subcategory === "burger") return "burger";
  }

  if (meal === "lunch") {
    if (food.category === "buffet") return "buffet";
    if (food.id === "steak") return "steak";
    if (food.category === "meat" || food.category === "fish") return "protein";
    if (food.category === "bento") return "bento";
    if (food.subcategory === "rice" || food.subcategory === "donburi") return "rice-meal";
    if (food.category === "side") return "side";
    if (food.subcategory === "soup") return "soup";
    if (food.id === "beef-noodle") return "beef-noodle";
    if (food.category === "hotpot") return "hotpot";
    if (food.subcategory === "burger") return "burger";
  }

  if (meal === "dinner") {
    if (food.category === "bento") return "bento";
    if (food.subcategory === "rice" || food.subcategory === "donburi") return "rice-meal";
    if (food.category === "side") return "side";
    if (food.subcategory === "soup") return "soup";
    if (food.category === "sushi") return "sushi";
    if (food.category === "buffet") return "buffet";
    if (food.category === "meat" || food.category === "fish") return "protein";
  }

  return "other";
}

function mealSortRank(food, meal) {
  const order = mealSortOrder[meal] || [];
  const index = order.indexOf(mealSortBucket(food, meal));
  return index === -1 ? order.length : index;
}

function sortForMeal(results) {
  const originalOrder = new Map(foods.map((food, index) => [food.id, index]));
  const groupOrder = new Map();
  foods.forEach((food, index) => {
    const groupKey = foodGroupKey(food);
    if (!groupOrder.has(groupKey)) groupOrder.set(groupKey, index);
  });

  return results.sort((a, b) => {
    const aTagged = a.meal_tags.includes(state.activeMeal) ? 0 : 1;
    const bTagged = b.meal_tags.includes(state.activeMeal) ? 0 : 1;
    const aGroup = foodGroupKey(a);
    const bGroup = foodGroupKey(b);
    return (
      aTagged - bTagged ||
      mealSortRank(a, state.activeMeal) - mealSortRank(b, state.activeMeal) ||
      groupOrder.get(aGroup) - groupOrder.get(bGroup) ||
      eggCount(b) - eggCount(a) ||
      originalOrder.get(a.id) - originalOrder.get(b.id)
    );
  });
}

function searchFoods(query) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) {
    return sortForMeal([...foods]);
  }

  return sortForMeal(
    foods.filter((food) => {
      const searchable = [food.food_name, food.portion, food.category, food.subcategory, ...food.keywords].join(" ").toLowerCase();
      return searchable.includes(normalizedQuery);
    }),
  );
}

function renderFoodResults() {
  const query = elements.foodSearch.value;
  const results = searchFoods(query);
  elements.recommendLabel.textContent = query ? "搜尋結果" : `${mealLabels[state.activeMeal]}推薦`;

  if (results.length === 0) {
    elements.foodResults.innerHTML = `<div class="empty-state">目前沒有收錄這個食物。<br />先選一個日常蛋白質來源吧。</div>`;
    return;
  }

  elements.foodResults.innerHTML = results
    .map(
      (food) => `
        <button class="food-result" type="button" data-food-id="${food.id}">
          <div>
            <div class="result-title">${food.food_name} ${food.portion}</div>
            <div class="result-meta">${formatEstimate(food)}</div>
          </div>
          <div class="result-eggs">+${formatEggs(eggCount(food))} 🥚</div>
        </button>
      `,
    )
    .join("");
}

function openSheet() {
  elements.sheetMealLabel.textContent = `加入${mealLabels[state.activeMeal]}`;
  elements.foodSearch.value = "";
  renderFoodResults();
  elements.sheetBackdrop.hidden = false;
  elements.addSheet.hidden = false;
  document.documentElement.classList.add("is-sheet-open");
  document.body.classList.add("is-sheet-open");
  window.setTimeout(() => elements.foodSearch.focus(), 30);
}

function closeSheet() {
  elements.sheetBackdrop.hidden = true;
  elements.addSheet.hidden = true;
  document.documentElement.classList.remove("is-sheet-open");
  document.body.classList.remove("is-sheet-open");
}

function keepSheetScrollInside(event) {
  if (!elements.addSheet.hidden && !event.target.closest("#foodResults")) {
    event.preventDefault();
    elements.foodResults.scrollTop += event.deltaY;
  }
}

function calculateProfileFromForm() {
  const weightKg = Number(elements.weightInput.value);
  const selectedGoal = document.querySelector(".goal-option.is-selected");
  const proteinFactor = Number(elements.goalInput.dataset.value || selectedGoal?.dataset.factor || "1");
  const goalLabel = elements.goalInput.dataset.label || selectedGoal?.dataset.goal || "日常維持";
  if (!weightKg || !proteinFactor) return null;
  const proteinGoal = Math.round(weightKg * proteinFactor);
  return {
    weightKg,
    proteinFactor,
    goalLabel,
    proteinGoal,
    eggGoal: proteinGoal / EGG_PROTEIN_G,
  };
}

function renderProfilePreview() {
  const profile = calculateProfileFromForm();
  if (!profile) {
    elements.profilePreview.textContent = "輸入體重後會換算成蛋數";
    return;
  }
  elements.profilePreview.textContent = `${profile.goalLabel}：每天約 ${profile.proteinGoal}g 蛋白質，也就是 ${formatEggs(profile.eggGoal)} 顆蛋`;
}

function openProfileModal() {
  if (state.profile) {
    elements.weightInput.value = state.profile.weightKg;
    setGoalFactor(state.profile.proteinFactor, state.profile.goalLabel);
  }
  renderProfilePreview();
  elements.profileBackdrop.hidden = false;
  elements.profileModal.hidden = false;
  window.setTimeout(() => elements.weightInput.focus(), 30);
}

function closeProfileModal() {
  if (!state.profile) return;
  elements.profileBackdrop.hidden = true;
  elements.profileModal.hidden = true;
}

function saveProfile(event) {
  event.preventDefault();
  const profile = calculateProfileFromForm();
  if (!profile) return;
  state.profile = profile;
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
  elements.profileBackdrop.hidden = true;
  elements.profileModal.hidden = true;
  renderSummary();
}

function setGoalFactor(value, label) {
  elements.goalInput.dataset.value = String(value);
  elements.goalInput.dataset.label = label || "";
  elements.goalOptions.forEach((button) => {
    const isSelected = button.dataset.factor === String(value) && (!label || button.dataset.goal === label);
    button.classList.toggle("is-selected", isSelected);
  });
  renderProfilePreview();
}

function addFood(foodId) {
  const food = foods.find((item) => item.id === foodId);
  if (!food) return;
  const existingEntry = state.meals[state.activeMeal].find((entry) => entry.food.id === foodId);
  if (existingEntry) {
    existingEntry.quantity += 1;
  } else {
    state.meals[state.activeMeal].push({ food, quantity: 1 });
  }
  renderActiveMeal();
  renderSummary();
  saveMealsForDate(state.selectedDateKey, state.meals);
  closeSheet();
}

function updateQuantity(index, delta) {
  const entry = state.meals[state.activeMeal][index];
  if (!entry) return;
  entry.quantity += delta;
  if (entry.quantity <= 0) {
    removeFood(index);
    return;
  }
  renderActiveMeal();
  renderSummary();
  saveMealsForDate(state.selectedDateKey, state.meals);
}

function removeFood(index) {
  state.meals[state.activeMeal].splice(index, 1);
  renderActiveMeal();
  renderSummary();
  saveMealsForDate(state.selectedDateKey, state.meals);
}

elements.mealButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.activeMeal = button.dataset.meal;
    renderActiveMeal();
  });
});

elements.openAddFood.addEventListener("click", openSheet);
elements.openProfile.addEventListener("click", openProfileModal);
elements.openRecords.addEventListener("click", showRecordsView);
elements.todayButton.addEventListener("click", () => {
  elements.dateInput.showPicker?.();
  if (!elements.dateInput.showPicker) elements.dateInput.click();
});
elements.dateInput.addEventListener("change", () => switchDate(elements.dateInput.value));
elements.recordsBack.addEventListener("click", () => {
  if (elements.recordsBack.dataset.recordsBackMode === "list") {
    renderRecordList();
    return;
  }
  showHomeView();
});
elements.closeSheet.addEventListener("click", closeSheet);
elements.sheetBackdrop.addEventListener("click", closeSheet);
elements.addSheet.addEventListener("wheel", keepSheetScrollInside, { passive: false });
elements.profileBackdrop.addEventListener("click", closeProfileModal);
elements.profileForm.addEventListener("submit", saveProfile);
elements.weightInput.addEventListener("input", renderProfilePreview);
elements.goalOptions.forEach((button) => {
  button.addEventListener("click", () => setGoalFactor(button.dataset.factor, button.dataset.goal));
});
elements.foodSearch.addEventListener("input", renderFoodResults);
elements.recordContent.addEventListener("click", (event) => {
  const loginButton = event.target.closest("[data-login-provider]");
  if (loginButton) {
    login(loginButton.dataset.loginProvider);
    return;
  }
  if (event.target.closest("[data-record-detail]")) {
    renderRecordDetail();
  }
});
elements.mealFoodList.addEventListener("click", (event) => {
  const quantityButton = event.target.closest("[data-quantity-index]");
  if (quantityButton) {
    updateQuantity(Number(quantityButton.dataset.quantityIndex), Number(quantityButton.dataset.quantityDelta));
    return;
  }
});
elements.foodResults.addEventListener("click", (event) => {
  const button = event.target.closest("[data-food-id]");
  if (button) addFood(button.dataset.foodId);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !elements.addSheet.hidden) closeSheet();
  if (event.key === "Escape" && !elements.profileModal.hidden) closeProfileModal();
});

renderActiveMeal();
setGoalFactor(state.profile?.proteinFactor || 1, state.profile?.goalLabel || "日常維持");
renderSelectedDate();
renderSummary();
if (!state.profile) openProfileModal();
