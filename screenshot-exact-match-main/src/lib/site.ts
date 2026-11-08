export const SITE = {
  name: "Maayaa The Cafe",
  phone: "9110747029",
  phoneHref: "tel:+919110747029",
  hours: "10:00 AM – 11:00 PM",
  hoursShort: "10 AM – 11 PM",
  address:
    "Gandimaismma, Medak Highway Road, beside Ujwala Grand Bar & Restaurant and Taaza All Day Breakfast, Hyderabad, Telangana – 500045.",
  plusCode: "HCJ9+CG5 Hyderabad, Telangana",
  instagram: "https://www.instagram.com/maayaa.thecafe?vrfl=M2l1Mjd0bGNzYTJj&utm_source=qr",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent("HCJ9+CG5 Hyderabad, Telangana"),
  mapEmbed:
    "https://www.google.com/maps?q=" + encodeURIComponent("HCJ9+CG5 Hyderabad, Telangana") + "&output=embed",
};

export type MenuItem = { name: string; price: number };
export type MenuCategory = { id: string; title: string; note?: string; items: MenuItem[] };

const m = (rows: [string, number][]): MenuItem[] => rows.map(([name, price]) => ({ name, price }));

export const MENU: MenuCategory[] = [
  { id: "tea-ritual", title: "The Tea Ritual", items: m([["Classic Irani Chai", 25], ["Ginger Chai", 30], ["Elaichi Chai", 35], ["Masala Chai", 35], ["Lemon Tea", 35], ["Green Tea", 45], ["Kesar Chai", 55], ["Maayaa Special Chai", 59]]) },
  { id: "baristas-corner", title: "Baristas Corner", items: m([["Espresso", 79], ["Americano", 89], ["Cappuccino", 119], ["Café Latte", 129], ["Flat White", 139], ["Café Mocha", 149], ["Caramel Latte", 159], ["Classic Cold Coffee", 119], ["Hazelnut Cold Coffee", 159], ["Iced Spanish Latte", 169]]) },
  { id: "signature-specials", title: "Maayaa Signature Specials", items: m([["Magic Rose Latte", 169], ["Midnight Mocha", 179], ["Maayaa Loaded Fries", 189], ["Magic Pink Pasta", 209], ["Love at First Sip Shake", 219]]) },
  { id: "combo-deals", title: "Maayaa Combo Deals", items: m([["Chai + Veg Sandwich", 99], ["Cold Coffee + Fries", 189], ["Maggi + Mint Mojito", 159], ["Pasta + Mojito", 249], ["Two Classic Coffee + Fries", 289]]) },
  { id: "maggi-magic", title: "Maggi Magic", items: m([["Classic Masala Maggi", 69], ["Veggie Maggi", 89], ["Butter Maggi", 99], ["Cheese Maggi", 109], ["Peri Peri Maggi", 119], ["Maayaa Special Maggi", 139]]) },
  { id: "thick-shake-therapy", title: "Thick Shake Therapy", items: m([["Vanilla Dream", 129], ["Strawberry Bliss", 139], ["Chocolate Overload", 149], ["Oreo Madness", 159], ["KitKat Crunch", 169], ["Brownie Blast", 189], ["Nutella Heaven", 199], ["Maayaa Signature Shake", 219]]) },
  { id: "fries-before-guys", title: "Fries Before Guys", items: m([["Classic Salted Fries", 99], ["Peri Peri Fries", 119], ["Cheesy Fries", 139], ["Garlic Parmesan Fries", 149], ["Loaded Cheese Fries", 169], ["Veg Nuggets", 119], ["Chicken Nuggets", 159]]) },
  { id: "pasta-la-vista", title: "Pasta La Vista", items: m([["Alfredo White Sauce", 179], ["Pink Sauce Pasta", 189], ["Pesto Pasta", 209], ["Chicken Alfredo Pasta", 229]]) },
  { id: "refresh-revive", title: "Refresh Revive", items: m([["Fresh Lime Soda", 69], ["Watermelon Juice", 79], ["Pineapple Juice", 89], ["Sweet Lime Juice", 89], ["Orange Juice", 99], ["Classic Mint Mojito", 109], ["Blue Lagoon", 119], ["Green Apple Mojito", 129], ["Strawberry Mojito", 139]]) },
  { id: "between-the-breads", title: "Between The Breads", items: m([["Classic Veg Sandwich", 89], ["Veg Grilled Sandwich", 109], ["Corn & Cheese Sandwich", 129], ["Cheese Chilli Toast", 129], ["Paneer Tikka Sandwich", 149], ["Peri Peri Paneer Sandwich", 159], ["Chicken Grilled Sandwich", 169]]) },
  { id: "coffee-corner", title: "Additional Coffee Corner Menu", items: m([["Instant Coffee", 39], ["Chocolate Coffee", 69], ["Filter Coffee", 39], ["Black Coffee", 39], ["Cold Coffee", 80], ["Classic Coffee", 99]]) },
];
