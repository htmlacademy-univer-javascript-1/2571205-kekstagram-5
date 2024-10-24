const commentTexts = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто    непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const authorNames = ['Иван', 'Мария', 'Алексей', 'Анна', 'Петя', 'Ольга'];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateComment() {
  const randomTextIndex = getRandomInt(0, commentTexts.length - 1);
  const randomAuthorIndex = getRandomInt(0, authorNames.length - 1);
  const randomAvatarNumber = getRandomInt(1, 6);

  return {
    id: getRandomInt(1000, 9999),
    avatar: `img/avatar-${randomAvatarNumber}.svg`,
    message: commentTexts[randomTextIndex],
    name: authorNames[randomAuthorIndex]
  };
}
function generatePhotos() {
  const photos = [];

  for (let i = 1; i <= 25; i++) {
    const randomCommentCount = getRandomInt(0, 30);
    const comments = [];
    for (let j = 0; j < randomCommentCount; j++) {
      comments.push(generateComment());
    }

    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: `Описание фотографии №${i}`,
      likes: getRandomInt(15, 200),
      comments
    });
  }

  return photos;
}

// Получаем массив сгенерированных фотографий
generatePhotos();

