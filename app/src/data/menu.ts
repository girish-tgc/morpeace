// Menu data for Rustic Heaven @ Morpeace
// Rendered on the /menu page as a gourmet menu.

export interface MenuItem {
  name: string
  desc: string
  specialty?: boolean
  tag?: string          // small note beside the name, e.g. "(seasonal)", "(locally procured)"
  price?: string        // for a-la-carte items, e.g. "₹200 / plate + GST"
}

export interface MenuSection {
  id: string
  label: string          // short anchor label
  heading: string        // section title
  intro?: string         // optional short intro under the heading
  items: MenuItem[]
}

export interface MenuChapter {
  id: string
  tag: string           // eyebrow above the chapter title
  title: string         // the chapter display title
  tagline?: string      // poetic sub-line
  sections: MenuSection[]
}

// ─────────────────────────────────────────────────────────────
// THALI PACKAGES — included with stay
// ─────────────────────────────────────────────────────────────

export const MEAL_INCLUSIONS: { meal: string; includes: string }[] = [
  { meal: 'Breakfast',             includes: 'Any 1 item + Eggs to order + Tea / Coffee / Herbal tea' },
  { meal: 'High Tea',              includes: 'A savory treat + Tea / Coffee / Herbal tea' },
  { meal: 'Lunch / Dinner (Veg)',  includes: '2 Veg mains + Dal + Bread + Rice + Dessert' },
  { meal: 'Lunch / Dinner (Chicken / Egg)', includes: '1 Non-veg main + 1 Veg main + Dal + Bread + Rice + Dessert' },
  { meal: 'Lunch / Dinner (Mutton)', includes: '1 Mutton curry + Dal + Bread + Rice + Dessert' },
  { meal: 'Lunch / Dinner (Fish)',   includes: '1 Fish curry + 1 Veg main + Dal + Bread + Rice + Dessert' },
]

export const PACKAGE_RATES: { label: string; price: string }[] = [
  { label: 'High Tea + Dinner (Veg) + Breakfast',                                   price: '₹1300 + GST' },
  { label: 'Lunch (Veg) + High Tea + Dinner (Veg) + Breakfast',                    price: '₹1650 + GST' },
  { label: 'High Tea + Dinner (Chicken / Egg) + Breakfast',                         price: '₹1500 + GST' },
  { label: 'Lunch (Chicken / Egg) + High Tea + Dinner (Chicken / Egg) + Breakfast', price: '₹1800 + GST' },
  { label: 'High Tea + Dinner (Mutton / Fish) + Breakfast',                         price: '₹1800 + GST' },
  { label: 'Lunch (Mutton / Fish) + High Tea + Dinner (Mutton / Fish) + Breakfast', price: '₹2300 + GST' },
]

export const PACKAGE_NOTES: string[] = [
  'Gavran chicken available on 24-hour prior request.',
  'No GST for gatherings of five or more — if you let us know two days before.',
  'Little ones under 5? Let them eat, laugh, and roam free — their meals are on the house.',
]

// ─────────────────────────────────────────────────────────────
// CHAPTER 1 — THE THALI (what comes with your stay)
// ─────────────────────────────────────────────────────────────

const THALI_CHAPTER: MenuChapter = {
  id: 'thali',
  tag: 'The Thali',
  title: 'Slow, Seasonal, From the Land',
  tagline: 'Everything here is cooked the way grandma intends — patiently, generously, and from the heart.',
  sections: [
    {
      id: 'breakfast',
      label: 'Breakfast',
      heading: 'Breakfast',
      items: [
        { name: 'Thalipeeth', specialty: true, desc: 'Multigrain spiced pancake made with jowar, rice, wheat, and besan — rustic and nutritious.' },
        { name: 'Puneri Misal Pav', specialty: true, desc: 'A fiery sprouts curry from Pune, topped with farsan, onions, and lemon — served with buttered pav.' },
        { name: 'Puri Bhaji', specialty: true, desc: 'Fluffy deep-fried puris served with mildly spiced potato curry — festive and comforting.' },
        { name: 'Aalu Paratha', specialty: true, desc: 'Stuffed wheat flatbread filled with spiced mashed potatoes, served hot with curd or butter.' },
        { name: 'Upma', desc: 'A savoury South Indian semolina porridge cooked with ghee, mustard seeds, and seasonal vegetables.' },
        { name: 'Sabudana Khichdi', desc: 'A Maharashtrian fasting favourite — tapioca pearls sautéed with peanuts, green chilli, and cumin.' },
        { name: 'Shira (Sooji Halwa)', desc: 'Sweet semolina pudding flavoured with cardamom and ghee, garnished with nuts.' },
        { name: 'Idli Chutney Sambhar', desc: 'Steamed rice cakes paired with coconut chutney and tangy lentil-vegetable sambhar.' },
        { name: 'Dahi Dhapate', desc: 'Savoury multigrain flatbread made with curd, herbs, and spices — pan-fried till golden and served with curd.' },
        { name: 'Masala Puri', desc: 'Crisp puris flavoured with carom seeds and spices — best enjoyed hot with tea.' },
        { name: 'Methi Paratha', desc: 'Fenugreek-flavoured flatbread — soft, bitter-sweet, and lightly spiced.' },
        { name: 'Batata Vada', desc: 'A mashed potato patty dipped in besan batter and fried crisp — the star of Mumbai\'s vada pav.' },
        { name: 'Cheese Paratha', desc: 'A gooey, indulgent breakfast treat stuffed with molten cheese — loved by all ages.' },
        { name: 'Appe', desc: 'Golden rice-lentil dumplings cooked in a special pan — crispy outside, soft inside.' },
        { name: 'Bhoplyache Gharge', specialty: true, desc: 'Sweet pumpkin and jaggery flatbreads — shallow-fried and usually served with ghee.' },
      ],
    },
    {
      id: 'beverages',
      label: 'Beverages',
      heading: 'Tea, Coffee & Herbal Infusions',
      items: [
        { name: 'Chai', desc: 'Strong Indian tea brewed with milk and spices — a daily ritual.' },
        { name: 'Coffee', desc: 'Classic Indian coffee — rich, foamy, and aromatic.' },
        { name: 'Black Tea', desc: 'Plain brewed tea — light, brisk, and soothing.' },
        { name: 'Herbal Tea — Blue', specialty: true, desc: 'A serene, caffeine-free infusion made from butterfly pea flowers grown on our farm. Celebrated in Ayurveda for its calming effects — a perfect start to the day or a way to unwind at sunset.' },
        { name: 'Herbal Tea — Red', specialty: true, desc: 'A tangy crimson brew made from farm-grown hibiscus petals, known for their antioxidant-rich properties. Believed to support heart health, improve skin glow, and cool the body from within.' },
      ],
    },
    {
      id: 'main-veg',
      label: 'Main — Veg',
      heading: 'Main Course — Vegetarian',
      items: [
        { name: 'Raan Bhaji (dry)', tag: '(seasonal)', specialty: true, desc: 'A soulful preparation of wild greens and blossoms, foraged from our farm and sautéed with garlic and native spices — a taste of forgotten village wisdom on your plate.' },
        { name: 'Bharla Vanga', specialty: true, desc: 'Plump baby brinjals, slit and lovingly filled with a fragrant coconut-peanut masala, then slow-cooked till they melt into the gravy.' },
        { name: 'Wang Bharit', specialty: true, desc: 'Coal-roasted brinjal, smoked to perfection and hand-mashed with raw onions, green chilli, and mustard oil — smoky, bold, rustic.' },
        { name: 'Peanut Mahadhya', specialty: true, desc: 'A rare heirloom recipe from the Deccan — roasted peanuts crushed into a warm curry with jaggery, tamarind, and village masalas.' },
        { name: 'Drumstick Curry', specialty: true, desc: 'Tender drumsticks hand-harvested from our farm, stewed in a fragrant coconut-tomato base with hints of garlic and tamarind.' },
        { name: 'Mushroom Masala Curry', specialty: true, desc: 'Extra fresh mushrooms simmered in homemade masala curry — rich, unforgettable, and savoury.' },
        { name: 'Zunka / Pithla', specialty: true, desc: 'A humble yet bold gram-flour preparation, sautéed with chillies, garlic, and turmeric — thick, spicy, and best enjoyed with warm bhakri.' },
        { name: 'Spl Pithla (dry)', specialty: true, desc: 'A dry, rustic version of pithla with roasted besan, caramelised onions, garlic, and the gentle depth of goda masala.' },
        { name: 'Black Chana Masala', specialty: true, desc: 'Native black chickpeas, slow-cooked in a smoky coconut-onion masala till perfectly tender.' },
        { name: 'Akkha Masur', specialty: true, desc: 'Whole red lentils bubbling in a rich base of garlic, onions, and black masala — thick, peppery, soulful.' },
        { name: 'Chole Masala', desc: 'White chickpeas cooked Punjabi-style in a thick tomato-onion gravy with spices.' },
        { name: 'Rajma Masala', desc: 'Red kidney beans simmered in spiced onion-tomato masala — hearty and comforting.' },
        { name: 'Matki Usal', desc: 'Sprouted moth beans cooked in Maharashtrian spices — earthy, protein-rich, and nourishing.' },
        { name: 'Kanda Batata Rassa', desc: 'Onions and potatoes cooked in a thin, flavourful gravy — simple, homestyle, and satisfying.' },
        { name: 'Moonga Chi Usal', tag: '(dry / curry)', desc: 'Green gram cooked either dry or as curry — light, protein-packed, and mildly spiced.' },
        { name: 'Chawli Usal', tag: '(dry / curry)', desc: 'Black-eyed peas sautéed or curried with coconut and cumin — rustic and wholesome.' },
        { name: 'Mixed Vegetable Curry', desc: 'A vibrant medley of seasonal vegetables, hand-picked from our farm and simmered in a mild, home-style masala.' },
        { name: 'Bhindi Masala', desc: 'Okra sautéed with onions, garlic, and spice — soft yet slightly crisp.' },
        { name: 'Aloo Gobhi', tag: '(dry / curry)', desc: 'Potatoes and cauliflower stir-fried with turmeric and cumin — North Indian comfort.' },
        { name: 'Aloo Fadfad', tag: '(curry)', desc: 'Delicate fadfad (Coalescia) leaves from our leafy patch, finely shredded and cooked in a mildly spiced village-style curry — a rare green treasure from the Western Ghats.' },
        { name: 'Batata Subji', tag: '(dry, kids\' favourite)', desc: 'Golden stir-fried potatoes tempered with mustard seeds, curry leaves, and turmeric — simple and universally loved.' },
        { name: 'Alu Jeera', tag: '(dry)', desc: 'Potatoes roasted with ghee and cumin — simple, aromatic, dry-textured.' },
        { name: 'Aloo Methi', desc: 'Fenugreek leaves sautéed with potatoes — bitter-sweet and iron-rich.' },
        { name: 'Raw Papaya Curry', specialty: true, desc: 'Tender raw papaya, freshly picked from the farm, gently simmered in a coconut-based masala — soothing and digestive.' },
        { name: 'Raw Mango Kadhi', tag: '(seasonal)', specialty: true, desc: 'Sun-kissed raw mangoes from our orchard, simmered into a silky yogurt-kadhi balanced with jaggery, cumin, and curry leaves.' },
        { name: 'Tondli Fry', desc: 'Ivy gourd sliced and pan-fried with mustard and sesame — mildly crunchy and tangy.' },
        { name: 'Spring Onion Subji', tag: '(dry)', specialty: true, desc: 'Spring onions sautéed with garlic and mixed with roasted besan — fragrant and nutty.' },
        { name: 'Karela Fry', tag: '(dry)', desc: 'Thin-sliced bitter gourd fried till crisp — bitter but addictive.' },
        { name: 'Karela Curry', desc: 'Bitter gourd simmered in onion-tamarind gravy — bold and slightly sweet.' },
        { name: 'Dal Bhaji', desc: 'Mashed dal and vegetables cooked together — hearty and lightly spiced.' },
        { name: 'Beans Curry', specialty: true, desc: 'Assorted beans — red, black, and white — slow-cooked in a tomato-onion base.' },
        { name: 'Raw Banana Curry', specialty: true, desc: 'Farm-grown raw bananas, gently simmered in a coconut-cumin gravy with a whisper of turmeric — a sattvic dish that soothes the gut.' },
      ],
    },
    {
      id: 'main-nonveg',
      label: 'Main — Non-Veg',
      heading: 'Main Course — Non-Vegetarian',
      items: [
        { name: 'Chicken Kheema', specialty: true, desc: 'Minced chicken slow-cooked with onions, tomatoes, and aromatic spices — rich and satisfying.' },
        { name: 'Chicken Masala', specialty: true, desc: 'Bone-in chicken in a spiced onion-tomato gravy — a homestyle staple.' },
        { name: 'Chicken Kolhapuri', specialty: true, desc: 'Bold, fiery chicken curry with Kolhapuri masala — spicy and oil-rich.' },
        { name: 'Chicken Kolhapuri — Tambda Rassa', specialty: true, desc: 'A deep-red, fiery chicken curry simmered in Kolhapur\'s iconic tambda (red) masala made from dry coconut, stone-ground spices, and red chillies.' },
        { name: 'Chicken Kolhapuri — Pandhra Rassa', specialty: true, desc: 'A milky white chicken broth infused with coconut, cashew, garlic, and mild spices — delicate in colour but rich in flavour.' },
        { name: 'Tarriwala Chicken', specialty: true, desc: 'Thin, chilli-heavy curry with floating oil (tarri) — a Nagpur-style flavour bomb.' },
        { name: 'Chicken Koliwada', desc: 'A coastal fried chicken dish with spicy red marinade and crunchy texture.' },
        { name: 'Egg Masala', specialty: true, desc: 'Boiled eggs in thick onion-tomato gravy — peppery and wholesome.' },
        { name: 'Egg Bhurji', desc: 'Spicy Indian scrambled eggs with onion, tomato, and green chilli — rustic and bold.' },
      ],
    },
    {
      id: 'dal',
      label: 'Dal',
      heading: 'Dal Varieties',
      items: [
        { name: 'Sadha Varan', desc: 'A simple toor dal preparation with ghee and turmeric — mild and wholesome.' },
        { name: 'Aamti', desc: 'Maharashtrian-style tangy dal made with tamarind, jaggery, and goda masala.' },
        { name: 'Udid Ghute', specialty: true, desc: 'Homegrown black gram slow-cooked with roasted coconut, jaggery, and warming spices — reviving the sattvic traditions of rural Maharashtra.' },
        { name: 'Mugache Varan', desc: 'Mild green gram dal — light and full of flavour.' },
        { name: 'Mix Dal Aamti', desc: 'Maharashtrian-style mixed lentils tempered with mustard, garlic, and kokum — hearty and tangy.' },
        { name: 'Kadhi', desc: 'Yogurt and gram-flour-based curry tempered with mustard seeds and chillies. Gujarati style (bit sweet) or spicy — as you wish.' },
      ],
    },
    {
      id: 'bread-rice',
      label: 'Bread & Rice',
      heading: 'Bread & Rice',
      intro: 'Choose one bread and one rice with your thali.',
      items: [
        { name: 'Bhakri', tag: '(jowar / rice / nachni / bajri)', specialty: true, desc: 'Rustic, hand-pressed flatbreads made from millet or rice flour — earthy and gluten-free.' },
        { name: 'Chapati', desc: 'Soft, thin flatbread made of whole wheat flour — versatile and a daily staple.' },
        { name: 'Jeera Rice', desc: 'Fragrant basmati rice tempered with roasted cumin seeds — light, fluffy, aromatic.' },
        { name: 'Steam Rice', desc: 'Plain steamed white rice — soft and ideal as a base for any curry or dal.' },
        { name: 'Curd Rice', desc: 'Southern-style rice mixed with curd and tempered with mustard, curry leaves, and ginger — cooling and digestive.' },
        { name: 'Dal Khichadi', desc: 'A gentle one-pot medley of rice and lentils, slow-cooked with ghee, cumin, and turmeric. Balances the doshas, calms the mind, and comforts the soul.' },
      ],
    },
    {
      id: 'dessert',
      label: 'Dessert',
      heading: 'Dessert',
      items: [
        { name: 'Pedha', tag: '(regional speciality — procured from a five-decade-old sweet shop)', desc: 'A dense, melt-in-the-mouth sweet made from slow-reduced milk, sugar, and cardamom — famous from Satara for its grainy texture and caramelised flavour.' },
        { name: 'Kheer', tag: '(shevai / rice / dalia / suji)', desc: 'Creamy Indian pudding made with milk and your choice of vermicelli, rice, broken wheat, or semolina.' },
        { name: 'Gulab Jamun', tag: '(locally procured)', desc: 'Deep-fried khoya balls soaked in rose-scented syrup — warm, soft, indulgent.' },
        { name: 'Shrikhand', tag: '(locally procured)', desc: 'Silky hung curd sweetened and flavoured with cardamom and saffron — served chilled.' },
        { name: 'Amrakhand', tag: '(locally procured)', desc: 'Mango-infused shrikhand — sweet, fruity, and festive.' },
        { name: 'Jalebi', tag: '(locally procured)', desc: 'Golden spirals deep-fried and soaked in sugar syrup — crispy outside, syrupy inside.' },
      ],
    },
    {
      id: 'accompaniments',
      label: 'Sides',
      heading: 'Accompaniments',
      items: [
        { name: 'Papad', desc: 'Crisp, thin wafers made from lentils — served roasted or fried.' },
        { name: 'Pickle', desc: 'Spiced and preserved vegetables or fruits from the farm — tangy and bold. Ask for the specialties: karonda, mango, baby mango, sweet mango, lime, etc.' },
        { name: 'Salad', desc: 'Freshly sliced cucumber, tomato, onion — often lightly seasoned.' },
        { name: 'Thecha', tag: '(on request)', desc: 'Fiery green chilli-garlic paste crushed with peanuts — especially explosive when made on Pata.' },
        { name: 'Chutney', desc: 'Accompaniments like coconut, mint, or peanut chutney — fresh, tangy, and essential.' },
      ],
    },
    {
      id: 'hitea',
      label: 'Hi-Tea',
      heading: 'Hi-Tea Snacks',
      items: [
        { name: 'Kanda Bhajiya', desc: 'Crispy onion fritters made by tossing sliced onions in spiced gram-flour batter and deep-frying — monsoon-perfect.' },
        { name: 'Batata Bhajiya', desc: 'Crisp potato fritters made with gram flour — golden and addictive.' },
        { name: 'Mung Bhajiya', desc: 'Crisp fritters of sprouted green gram with herbs and spices.' },
        { name: 'Betel-leaf Bhajiya', specialty: true, desc: 'A festival-time snack — tender betel leaves dipped in seasoned batter and fried crisp. Aromatic, bitter-sweet, and unforgettable.' },
        { name: 'Ajwain-leaf Bhajiya', specialty: true, desc: 'Made with fresh carom leaves — light, crisp, and with a minty punch that also aids digestion.' },
        { name: 'Raw Banana Bhajiya', desc: 'Thin slices of raw banana coated in chickpea batter and fried to perfection.' },
        { name: 'Vada Pav', desc: 'A mashed potato patty dipped in besan batter and fried crisp — the star of Mumbai.' },
        { name: 'Kothimbir Vadi', specialty: true, desc: 'A treasured Maharashtrian snack made with fresh coriander and besan, steamed then shallow-fried for a crispy, melt-in-mouth texture.' },
        { name: 'Alu Vadi (Patra)', desc: 'Colocasia leaves layered with spiced gram-flour paste, rolled, steamed, and lightly fried.' },
        { name: 'Chana Garlic Roast', desc: 'Roasted black chickpeas tossed with garlic and dry masala — bold and protein-packed. Highly in demand, you know, with what...' },
      ],
    },
  ],
}

// ─────────────────────────────────────────────────────────────
// CHAPTER 2 — A LA CARTE (24-hour notice, charged separately)
// ─────────────────────────────────────────────────────────────

const ALACARTE_CHAPTER: MenuChapter = {
  id: 'alacarte',
  tag: 'À la Carte',
  title: 'Dishes That Need a Little More Love',
  tagline: 'These need advance preparation or special procurement — kindly let us know at least 24 hours ahead.',
  sections: [
    {
      id: 'soups-veg',
      label: 'Soups — Veg',
      heading: 'Soups — Vegetarian',
      items: [
        { name: 'Palak Soup', price: '₹150 / plate + GST', desc: 'Velvety spinach soup subtly seasoned with garlic and pepper.' },
        { name: 'Tomato Soup', price: '₹150 / plate + GST', desc: 'Silky tomato soup finished with butter and herbs.' },
        { name: 'Rasam', price: '₹150 / plate + GST', desc: 'South Indian spicy tamarind broth with a punch of black pepper — light yet bold.' },
        { name: 'Cream of Mushroom Soup', price: '₹150 / plate + GST', desc: 'A hearty, forest-scented broth made from seasonal mushrooms, slow-cooked with crushed pepper, garlic, and a whisper of cream.' },
        { name: 'Sweet Corn Veg Soup', price: '₹150 / plate + GST', desc: 'Golden kernels of sweet corn folded into a light, comforting broth with finely chopped seasonal vegetables.' },
        { name: 'Cream of Veg Soup', price: '₹150 / plate + GST', desc: 'A smooth, comforting blend of seasonal farm vegetables slow-simmered with garlic, herbs, and a touch of cream.' },
      ],
    },
    {
      id: 'soups-nonveg',
      label: 'Soups — Non-Veg',
      heading: 'Soups — Non-Vegetarian',
      items: [
        { name: 'Chicken Alni Soup', price: '₹200 / plate + GST', specialty: true, desc: 'Clear chicken broth flavoured with black pepper and ginger — often served in Maharashtrian households as a remedy during fevers and fatigue.' },
        { name: 'Sweet Corn Chicken Soup', price: '₹200 / plate + GST', desc: 'Tender shreds of chicken simmered with sweet corn and fresh vegetables in a subtly spiced, creamy broth.' },
        { name: 'Gavran Chicken Rassa Soup', price: '₹200 / plate + GST', desc: 'A thin, brothy version of the fiery gavran chicken curry — spiced with village masala, garlic, and oil tadka.' },
        { name: 'Chicken Bone Broth with Garlic & Turmeric', tag: '(Ayurvedic Tonic)', price: '₹200 / plate + GST', desc: 'Slow-simmered chicken bones and meat, enriched with garlic, turmeric, and ajwain — light, golden, and ideal for digestion and immunity.' },
        { name: 'Green Chicken Pepper Soup', tag: '(mild + warming)', price: '₹200 / plate + GST', desc: 'A herbal-style broth with green chilli, coriander, crushed pepper, and boiled chicken — soothing for the throat and gently spiced.' },
        { name: 'Mutton Alni Soup', price: '₹250 / plate + GST', specialty: true, desc: 'A slow-simmered, traditional mutton extract with deep warmth and rich marrow flavour — a rustic immunity-boosting tonic.' },
        { name: 'Paya Soup', price: '₹250 / plate + GST', specialty: true, desc: 'A slow-cooked broth made from goat trotters (paya), simmered for hours with ginger, garlic, and black pepper — rich in collagen and traditionally nourishing.' },
        { name: 'Gavran Mutton Rassa Soup', price: '₹250 / plate + GST', specialty: true, desc: 'A thinned-down version of the classic gavran mutton rassa, served as a broth — spicy, aromatic, and rustic.' },
        { name: 'Mutton Bone Marrow Soup (Raan Nalli Ras)', price: '₹250 / plate + GST', specialty: true, desc: 'A slow-cooked extract of mutton shank and bone marrow, flavoured with minimal spices. Deeply nourishing and silky.' },
      ],
    },
    {
      id: 'starters-veg',
      label: 'Starters — Veg',
      heading: 'Starters — Vegetarian',
      items: [
        { name: 'Kothimbir Vadi', price: '₹200 / plate + GST', specialty: true, desc: 'A treasured Maharashtrian snack with fresh coriander and besan, steamed and shallow-fried — bursting with earthy flavour.' },
        { name: 'Alu Wadi (Patra)', price: '₹200 / plate + GST', desc: 'Colocasia leaves layered with spiced gram flour paste, steamed and tempered.' },
        { name: 'Assorted Bhajiya', price: '₹200 / plate + GST', desc: 'An assortment of crisp-fried vegetable fritters served with chutney.' },
        { name: 'Pudachi Wadi', price: '₹200 / plate + GST', specialty: true, desc: 'A Vidarbha delicacy — spicy coconut and herb stuffing wrapped in gram flour dough, fried golden. Crisp outside, fiery inside.' },
        { name: 'Mushroom Sukka', price: '₹200 / plate + GST', specialty: true, desc: 'Button mushrooms sautéed in a dry, roasted coconut masala — earthy, bold, and coastal-inspired.' },
        { name: 'Cabbage Wadi', price: '₹200 / plate + GST', desc: 'Spiced cabbage dumplings steamed and lightly fried — a healthy, fibre-rich Maharashtrian snack.' },
      ],
    },
    {
      id: 'starters-nonveg',
      label: 'Starters — Non-Veg',
      heading: 'Starters — Non-Vegetarian',
      items: [
        { name: 'Chicken Sukka', price: '₹300 / plate + GST', specialty: true, desc: 'A dry-fried chicken preparation with grated coconut and spice mix — local influence, deeply flavourful.' },
        { name: 'Chicken Pakoda', price: '₹300 / plate + GST', desc: 'Boneless chicken pieces marinated in spices, dipped in gram flour batter, and deep-fried till crisp.' },
        { name: 'Gavran Chicken Tava Fry', tag: '(Village-style)', price: '₹300 / plate + GST', desc: 'Country chicken marinated with ginger-garlic paste, coriander, and red chilli, shallow-fried with curry leaves and sliced onions.' },
        { name: 'Chicken Kharda / Thecha', tag: '(Fiery Specialty, Village-style)', price: '₹300 / plate + GST', desc: 'Crushed green chillies and garlic pan-tossed with small chicken pieces for a fiery, lip-tingling starter. Popular in Marathwada.' },
        { name: 'Egg Kharda / Thecha', tag: '(Fiery Specialty, Village-style)', price: '₹200 / plate + GST', desc: 'Boiled eggs halved and seared with a punchy paste of crushed green chillies, garlic, and a touch of oil — rustic, bold, and bursting with heat.' },
        { name: 'Egg Tava Fry', price: '₹200 / plate + GST', desc: 'Boiled eggs halved and seared on a hot griddle with a spicy garlic-chilli paste — crisp-edged, fiery, and perfect with a squeeze of lime.' },
        { name: 'Mutton Sukka', price: '₹400 / plate + GST', specialty: true, desc: 'Dry-cooked mutton with roasted coconut and spices — spicy, rustic, and rich.' },
        { name: 'Mutton Vajri Fry', price: '₹450 / plate + GST', specialty: true, desc: 'Goat intestine sautéed with spicy masala — bold, chewy, and full of flavour.' },
        { name: 'Mutton Kaleji (Liver) Fry', price: '₹450 / plate + GST', specialty: true, desc: 'Tender mutton liver sautéed with onions, green chillies, and a touch of turmeric — iron-rich and deeply savoury.' },
        { name: 'Mutton Kharda / Thecha', price: '₹450 / plate + GST', specialty: true, desc: 'Bone-in mutton pan-tossed with a paste of green chilli, garlic, and oil — spicy, tongue-tingling, rustic style.' },
        { name: 'Fish Fry', tag: '(subject to availability)', price: '₹400 / plate + GST', desc: 'Marinated fish fillets shallow-fried till golden — crisp and coastal.' },
      ],
    },
    {
      id: 'alacarte-main-veg',
      label: 'Main — Veg',
      heading: 'Main Course — Veg (À la Carte)',
      items: [
        { name: 'Dal Dhokli', price: '₹250 / plate + GST', desc: 'Gujarat\'s one-pot dish with wheat dumplings cooked in spiced dal — hearty and sweet-spicy.' },
        { name: 'Pav Bhaji', price: '₹250 / plate + GST', desc: 'A rich, buttery mash of farm-fresh vegetables slow-cooked with signature spices and served with hot, butter-toasted pav.' },
      ],
    },
    {
      id: 'alacarte-main-nonveg',
      label: 'Main — Non-Veg',
      heading: 'Main Course — Non-Veg (À la Carte)',
      items: [
        { name: 'Kombdi Wade', price: '₹450 / plate + GST', specialty: true, desc: 'Malvani-style chicken curry served with fluffy fermented rice flour puris.' },
        { name: 'Mutton Curry', price: '₹450 / plate + GST', specialty: true, desc: 'Slow-cooked goat meat in a thick masala gravy — bold and hearty.' },
        { name: 'Jatra Mutton Curry', price: '₹450 / plate + GST', specialty: true, desc: 'Festival-style Maharashtrian mutton curry — rustic and intensely spiced.' },
        { name: 'Mutton Bheja Fry', price: '₹450 / plate + GST', specialty: true, desc: 'Goat brain sautéed with spices — delicate texture and bold flavours.' },
        { name: 'Mutton Kheema', price: '₹450 / plate + GST', specialty: true, desc: 'Minced mutton cooked with green peas and masala — savoury and rich.' },
        { name: 'Mutton Kolhapuri — Tambda Rassa', price: '₹450 / plate + GST', specialty: true, desc: 'A deep-red, fiery mutton curry in Kolhapur\'s iconic tambda (red) masala of dry coconut, stone-ground spices, and red chillies.' },
        { name: 'Mutton Kolhapuri — Pandhra Rassa', price: '₹450 / plate + GST', specialty: true, desc: 'A milky white mutton broth infused with coconut, cashew, garlic, and mild spices — delicate in colour but rich in flavour.' },
        { name: 'Fish Curry', tag: '(depending on availability)', price: '₹400 / plate + GST', desc: 'Fish simmered in a coconut or tamarind-based curry — tangy and flavourful.' },
      ],
    },
    {
      id: 'rice-veg',
      label: 'Rice — Veg',
      heading: 'Rice Varieties — Veg',
      items: [
        { name: 'Strawberry Rice (sweet)', price: '₹200 / plate + GST', desc: 'Farm-developed recipe using farm-picked strawberries. Rice mixed with strawberry — an unusual seasonal delight.' },
        { name: 'Matar Pulav', price: '₹200 / plate + GST', desc: 'Rice cooked with green peas and whole spices — light and fragrant.' },
        { name: 'Veg Biryani', price: '₹200 / plate + GST', desc: 'Layered rice and vegetables cooked with spices — aromatic and festive.' },
        { name: 'Masale Bhat', price: '₹200 / plate + GST', desc: 'Spiced Maharashtrian rice with veggies and goda masala — smoky and robust.' },
        { name: 'Beans Rice', price: '₹200 / plate + GST', desc: 'Fragrant rice with a medley of red, black, and white beans — protein-rich and hearty.' },
        { name: 'Coconut Rice (sweet)', price: '₹200 / plate + GST', desc: 'Steamed rice gently cooked with fresh grated coconut, jaggery, cardamom, and ghee — fragrant and mildly sweet.' },
      ],
    },
    {
      id: 'rice-nonveg',
      label: 'Rice — Non-Veg',
      heading: 'Rice Varieties — Non-Veg',
      items: [
        { name: 'Chicken Biryani', price: '₹350 / plate + GST', desc: 'Marinated chicken and basmati rice cooked together — bold, aromatic, and royal.' },
        { name: 'Egg Biryani', price: '₹300 / plate + GST', desc: 'Layered rice cooked with boiled eggs and gentle spices — simple and filling.' },
        { name: 'Mutton Biryani', price: '₹450 / plate + GST', desc: 'Tender mutton and saffron-laced rice layered and slow-cooked — rich and regal.' },
        { name: 'Aalni Bhat', price: '₹350 / plate + GST', specialty: true, desc: 'Rice cooked in light mutton or chicken broth — soul-warming and nutritious.' },
      ],
    },
    {
      id: 'raita',
      label: 'Raita',
      heading: 'Raita',
      items: [
        { name: 'Drumstick Flower Raita', tag: '(seasonal)', price: '₹100 / plate + GST', specialty: true, desc: 'Yogurt-based side with delicate moringa flowers — aromatic and nourishing.' },
        { name: 'Boondi Raita', price: '₹100 / plate + GST', desc: 'Crisp gram flour pearls in curd — creamy and crunchy.' },
        { name: 'Veg Raita', price: '₹100 / plate + GST', desc: 'Chopped vegetables in seasoned curd — fresh and cooling.' },
        { name: 'Tomato / Cucumber Koshimbir', price: '₹100 / plate + GST', desc: 'Maharashtrian salad with crushed peanuts, lemon, and coriander — crunchy and refreshing.' },
      ],
    },
    {
      id: 'alacarte-dessert',
      label: 'Dessert',
      heading: 'Dessert (À la Carte)',
      intro: 'Either prepared on site or procured from local specialists.',
      items: [
        { name: 'Basundi', price: '₹100 / plate + GST', desc: 'Milk slow-reduced and sweetened till thick — garnished with cardamom and nuts.' },
        { name: 'Gajar Halva', price: '₹100 / plate + GST', desc: 'Carrots grated and simmered in milk and ghee — rich, sweet, and seasonal.' },
        { name: 'Dudhi Halva', price: '₹100 / plate + GST', desc: 'Bottle gourd halva with subtle flavour and creamy texture — a lighter sweet option.' },
        { name: 'Rasgulla', price: '₹100 / plate + GST', desc: 'Soft cottage cheese balls in light sugar syrup — spongy and juicy.' },
        { name: 'Ukadiche Modak', price: '₹50 / piece + GST', desc: 'Steamed rice dumplings filled with jaggery and coconut — Lord Ganesha\'s favourite.' },
        { name: 'Puran Poli', price: '₹50 / piece + GST', desc: 'Sweet flatbread filled with jaggery and chana dal — served hot with ghee.' },
      ],
    },
    {
      id: 'drinks',
      label: 'Drinks',
      heading: 'Drinks',
      items: [
        { name: 'Solkadhi', price: '₹100 / serving + GST', desc: 'A soothing coastal elixir made from kokum and coconut milk, tempered with cumin and garlic. Rich in probiotics, aids digestion, balances pitta.' },
        { name: 'Aam Panna', price: '₹100 / serving + GST', desc: 'A tangy-sweet summer cooler made from raw mangoes from our orchard, blended with jaggery, cumin, and mint. Naturally cooling and packed with electrolytes.' },
        { name: 'Sugarcane Juice', price: '₹100 / serving + GST', desc: 'Fresh-pressed juice from sugarcane grown right on our farm — naturally sweet, mineral-rich, and wonderfully hydrating.' },
        { name: 'Mattha (Spiced Buttermilk)', price: '₹50 / serving + GST', desc: 'A cooling probiotic drink from churned curd, infused with roasted cumin, fresh coriander, and a hint of rock salt — balances the doshas.' },
        { name: 'Kokum Sharbat', price: '₹50 / serving + GST', desc: 'A sweet-sour tonic from sun-dried kokum rinds, blended with a hint of black salt and cumin. A must-have in summer.' },
        { name: 'Masala Milk', price: '₹100 / serving + GST', desc: 'Slow-warmed milk infused with saffron, cardamom, nutmeg, and a dash of turmeric — garnished with crushed almonds and pistachios.' },
      ],
    },
    {
      id: 'odd-one-out',
      label: 'For the Odd One Out',
      heading: 'For the Odd One Out',
      intro: 'For those rare moods when only something familiar will do.',
      items: [
        { name: 'Maggi', price: '₹200 / plate + GST', desc: 'Instant noodles prepared hot and spiced — comfort food at its best.' },
        { name: 'Veg Sandwich', price: '₹200 + GST', desc: 'Bread layered with vegetables and chutney — quick, fresh, and wholesome.' },
        { name: 'Corn Flakes', price: '₹200 / plate + GST', desc: 'Crispy corn cereal — served with milk, light and kid-friendly.' },
      ],
    },
  ],
}

export const MENU_CHAPTERS: MenuChapter[] = [THALI_CHAPTER, ALACARTE_CHAPTER]
