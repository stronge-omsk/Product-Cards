const cardList = [
  {
    image: 'image/2149855ac60a8725a59832fd6f28667dl-m3313922851od-w1024_h768.jpg',
    price: '$ 1250000',
    bed: '3 bed',
    bath: '2 bath',
    area: '1538 s/m',
    sqftLot: 2500,
    street: '48 Sylvan Ave',
    address: 'San Francisco, CA 94132',
    date: 'NEW',
    monthlyCost: '35k/mo',
    mail: 'Email Agent',
    
  },
  {
    image: 'https://ap.rdcpix.com/4aca56872cb7fcdc0504e0b40511b068l-m2021323363od-w480_h360.jpg',
    price: '$ 1550000',
    bed: '4 bed',
    bath: '3 bath',
    area: '1636 s/m',
    sqftLot: 2300,
    street: '107 Maddux Ave',
    address: 'San Francisco, CA 94321',
    date: 'NEW',
    monthlyCost: '35k/mo',
    mail: 'Email Agent',
    
  },
  {
    image: 'https://ap.rdcpix.com/4599ba5ec87c72391d1fc2849cc88b01l-m3354640781od-w480_h360.jpg',
    price: '$ 1250000',
    bed: '3 bed',
    bath: '2 bath',
    area: '1338 s/m',
    sqftLot: 2100,
    street: '2580 Diamond St',
    address: 'San Francisco, CA 93232',
    date: 'NEW',
    monthlyCost: '35k/mo',
    mail: 'Email Agent',
    
  },
  {
    image: 'https://ap.rdcpix.com/0e67ff348c054de03973ab9000265db6l-m1236550273od-w480_h360.jpg',
    price: '$ 1950000',
    bed: '6 bed',
    bath: '5 bath',
    area: '1538 s/m',
    sqftLot: 2600,
    street: '1257 Francisco St',
    address: 'San Francisco, CA 98988',
    date: 'NEW',
    monthlyCost: '35k/mo',
    mail: 'Email Agent',
    
  },
  {
    image: 'https://ap.rdcpix.com/dd544d3ce93f4cb0060e5bfb04068568l-m164259387od-w480_h360.jpg',
    price: '$ 1250000',
    bed: '4 bed',
    bath: '2 bath',
    area: '1938 s/m',
    sqftLot: 2500,
    street: '2921 Judah St',
    address: 'San Francisco, CA 84455',
    date: 'NEW',
    monthlyCost: '35k/mo',
    mail: 'Email Agent',
    
  },
  {
    image: 'https://ap.rdcpix.com/f8079b66f53bb8de3ade3170fa4967a9l-m1880882882od-w480_h360.jpg',
    price: '$ 1250000',
    bed: '3 bed',
    bath: '2 bath',
    area: '1533 s/m',
    sqftLot: 2350,
    street: '1945 Ofarrell St',
    address: 'San Francisco, CA 94328',
    date: 'NEW',
    monthlyCost: '35k/mo',
    mail: 'Email Agent',
    
  }
];



function render(array) {
  const list = $('<div class="cardsList">');
  $('body').append(list);
  for (i = 0; i < array.length; i++) {
    const cardItem = array[i];
    const like = $('<img src="image/like.png" class="buttonHeart">');
    const card = $('<div class="productCard">');
    list.append(card);
    const broker = $('<div class="info-broker">');
    card.append(broker);
    const date = $('<div class="publicationDate">');
    card.append(date);
    date.text(cardItem.date);
    const price = $('<span class="dataPrice">');
    card.append(price);
    price.text(cardItem.price);
    const cost = $('<a href="#" class="monthlyCost">');
    price.append(cost);
    cost.text(cardItem.monthlyCost);
    const favorite = $('<span class="favoriteBtn">');
    price.append(favorite);
    favorite.append(like);
    const description = $('<div class="shortDescription">');
    card.append(description);
    const dataVal = $('<span class="data-value">');
    dataVal.text(cardItem.bed);
    description.append(dataVal);
    const bath = $('<span class="data-value">');
    bath.text(cardItem.bath);
    description.append(bath);
    const area = $('<span class="data-value">');
    area.text(cardItem.area);
    description.append(area);
    const street = $('<div class="street">');
    street.text(cardItem.street);
    description.append(street);
    const address = $('<div class="address">');
    address.text(cardItem.address);
    description.append(address);
    const contactAgent = $('<button href="#" class="mail-agent">');
    contactAgent.text(cardItem.mail);
    description.append(contactAgent);
 



  };








}

render(cardList);
