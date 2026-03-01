export interface GuestReview {
  name: string
  date: string
  text: string
}

export interface CaretakerVoice {
  name: string
  role: string
  text: string
  placeholder: boolean
}

export const caretakers: CaretakerVoice[] = [
  {
    name: 'Rajendra & Sangita',
    role: 'Caretaker Family',
    text: 'Placeholder \u2014 their story of living and working on this land, caring for every guest and every tree.',
    placeholder: true,
  },
  {
    name: 'Ganesh & Tara',
    role: 'Caretaker Family',
    text: 'Placeholder \u2014 their connection to the food they cook, the soil they tend, and the life they nurture here.',
    placeholder: true,
  },
  {
    name: 'Architect',
    role: 'Architect',
    text: 'Placeholder \u2014 the vision behind the structure, building with the land rather than on it.',
    placeholder: true,
  },
  {
    name: 'Contractor',
    role: 'Contractor',
    text: 'Placeholder \u2014 the hands that shaped the walls, the craft of working alongside nature.',
    placeholder: true,
  },
]

export const guestReviews: GuestReview[] = [
  { name: 'Anjal Raj', date: 'September 2024', text: 'Nestled amidst serene environment, full of greenery and nature, is this very amazing and tastefully done up house which is bound to uplift your mood! Well done Mr. Rohit. The watch tower gives a 360 degree view of the landscape and star gazing at night and is worth the efforts. The home staff and caretaker were very hospitable and prepared food which was extremely delicious! Special mention goes to the gavran chicken! All in all I would say that this was a great find and a delight to have spent our weekend here. Sure to be back soon!' },
  { name: 'Arindam Sarkar', date: 'August 2025', text: 'Excellent hospitality and a beautiful location. We stayed here just for a night on our way to goa but already plan a longer stay to enjoy the beauty of this place. The house is tastefully done with adequate light and has a lovely plunge pool which faces a stream. The caretakers and his family take very good care and the food is outstanding and I would highly recommended to try the local fare of which they are a master. It scores high for us as its pet friendly and your pet will have a lot of space to run around off leash.' },
  { name: 'Sushma Poojary', date: 'October 2024', text: 'Beautiful Property wonderful service and property is maintained very well. Surely recommending this property for spending time with friends and family. Must Visit!! Rooms: Very well maintained rooms, cleanliness as required for the travellers..perfect stay. Food and drinks: Good service by the caretakers Rajendra, Ganesh, Sangita and Tara bai. They made the stay very comfortable. Food taste is good, maharashtrian authentic food very enjoyable.' },
  { name: 'Arya Wadwalkar', date: 'January 2025', text: 'My family & I stayed at Rustic Haven by Stay Vista in Satara for one night, and it was truly an unforgettable experience. From the moment we arrived, we were greeted with warm hospitality by the house help and caretakers, who were incredibly polite, kind, and attentive to every detail. The villa itself is breathtaking spacious, meticulously clean, and even more stunning than the pictures on Google.' },
  { name: 'Manish Bhardwaj', date: 'September 2024', text: 'Plush Farmstay amidst beautiful surroundings. Food and service quality is exceptional. Very tastefully done up with attention to every minute detail. Bathrooms, furniture, crockery and cutlery are of the highest quality. Located very close to the highway yet in complete serenity. It\u2019s dog friendly and has a beautiful pool.' },
  { name: 'Yash Suchak', date: 'January 2025', text: 'A beautiful homely experience. Rohit has made the place with all his heart and it shows. We had a great time with our dog here. And the food here is delicious! Don\u2019t miss it!' },
  { name: 'Shivani W', date: 'February 2025', text: 'We truly had a lovely stay. It\u2019s such a beautiful location. The villa is lovely, clean and the hospitality was exceptional with Ganesh being very warm and attentive. Looking forward on visiting again.' },
  { name: 'Paras', date: 'December 2024', text: 'Rustic Haven by StayVista was an absolute delight! The villa was beautifully designed with a perfect blend of modern amenities and rustic charm. The serene location and peaceful atmosphere made it an ideal getaway for relaxation.' },
  { name: 'Kushagra Sahu', date: 'December 2024', text: 'Had a lovely stay! Ganesh and his family took great care of us and the food was lovely.' },
  { name: 'Hemant Pawar', date: 'November 2024', text: 'Awesome stay, great staff and organic pure food. Loved and enjoyed my stay with family. Would definitely suggest.' },
  { name: 'Preety Priya', date: 'November 2024', text: 'Had an amazing stay at Rustic Haven. The staff is so polite and helpful. The food is delicious. Rooms are spacious and clean. The property is away from the city chaos. Will definitely come back.' },
  { name: 'Akshay Ranjanikar', date: 'November 2024', text: 'We had an absolutely delightful stay at Rustik Haven - Satara the property is serence well maintained and toughtfully designed to ensure a comfertable and memorable experience.' },
  { name: 'Akash Sapra', date: 'October 2024', text: 'Rustic setting. Cool vibes, very courteous staff and great food. Nice for weekend getaway with family. Highly recommended.' },
  { name: 'Arindam Sanyal', date: 'October 2024', text: 'Lovely home.. in the middle of almost nowhere... Picturesque sunset and nice cold winter nights!! It was an amazing experience and the caretaker Ganesh and his Mother served us absolutely amazingly.. and her food.. words fall short.' },
  { name: 'Abhishek Jain', date: 'October 2024', text: 'The villa is too good and ambience is great. A great place to have fun with family and friends. The caretakers are very helpful and polite.' },
  { name: 'Abhijit Koli', date: 'September 2024', text: 'Superb expierience, caretaker ganesh and his family are very good and humble..... highly recomanded for family...... best luck' },
  { name: 'Pratik Deokar', date: 'September 2024', text: 'stay was perfect, Ganesh was the best Host. villa is properly maintained. would love to visit again' },
  { name: 'Ameya Gholap', date: 'September 2024', text: 'Rustic haven is a great farmside villa. Highly recommend.' },
  { name: 'Nishad Nair', date: 'August 2024', text: 'We found the best care taker for villa, our infant was most happiest with all arrangement' },
  { name: 'Swati Desai', date: 'August 2024', text: 'The privacy amid green fields for a family get together in a luxurious setting' },
]
