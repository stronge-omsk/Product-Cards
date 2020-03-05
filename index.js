const cardList = [
  {
    image: 'url(image/0061f7789c19f3d57eab07245f452af3l-m3652801483xd-w1020_h770_q80.jpg)',
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
    infBroker:'Brokered by Keller Williams San Francisco',
    
  },
  {
    image: 'url(image/111759af65ac51715c2587e462fb1213l-m2882920802xd-w1020_h770_q80.jpg)',
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
    infBroker:'Brokered by Keller Williams San Francisco',
    
  },
  {
    image: 'url(image/2149855ac60a8725a59832fd6f28667dl-m3313922851od-w1024_h768.jpg)',
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
    infBroker:'Brokered by Keller Williams San Francisco',
    
  },
  {
    image: 'url(image/553560e0525113ccad5458dac19247cdl-m4283571886od-w1024_h768.jpg)',
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
    infBroker:'Brokered by Keller Williams San Francisco',
    
  },
  {
    image: 'url(image/b711c6deeb4ebbbceb8f813769a640bel-m3436390206xd-w1020_h770_q80.jpg)',
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
    infBroker:'Brokered by Keller Williams San Francisco',
    
  },
  {
    image: 'url(image/ed9eff011b291d0d1cdcde0b4bb3f2a1l-m3484510386xd-w1020_h770_q80.jpg)',
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
    infBroker:'Brokered by Keller Williams San Francisco',
    
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
    const brokeredBy = $('<span>');
    brokeredBy.text(cardItem.infBroker);
    broker.append(brokeredBy);
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
    card.css({"background-image":cardItem.image});
 



  };








}

render(cardList);
